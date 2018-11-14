const fs = require("fs");
const path = require("path");
const promisify = require("util").promisify;

const Ajv = require("ajv");
const AjvErrors = require("ajv-errors");
const _glob = require("glob");
const frontMatter = require("yaml-front-matter").loadFront;

const glob = promisify(_glob);

const schema = {
  required: ["title", "description", "date", "contact"],
  additionalProperties: false,
  properties: {
    __content: { type: "string" },
    __directory: { type: "string" },
    title: { type: "string" },
    description: { type: "string" },
    date: { type: "string", format: "date" },
    author: { type: "string" },
    contact: {
      type: "string",
      // oneOf: [
      //   { const: "Your Email Here" },
      //   { format: "email", errorMessage: "Invalid email address: ${0}" }
      // ],
    },
    product: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: ["name", "icon", "$icon", "hero", "facets"],
        properties: {
          name: { type: "string" },
          icon: { type: "string" },
          // NOTE: The fake "$icon" property is injected into the front matter below.
          $icon: { type: "string", format: "file", errorMessage: "Invalid icon path: ${0}" },
          hero: {
            type: "array",
            items: {
              type: "object",
              properties: {
                title: { type: "string" },
                text: { type: "string" },
                cta: { type: "string" },
                image: { type: "string" },
                // NOTE: The fake "$image" property is injected into the front matter below.
                $image: { type: "string", format: "file", errorMessage: "Invalid image path: ${0}" }
              },
              required: ["title", "text", "cta", "image", "$image"],
              additionalProperties: false
            }
          },
          facets: {
            type: "array",
            items: {
              type: "object",
              properties: {
                title: { type: "string" },
                text: { type: "string" },
                image: { type: "string" },
                // NOTE: The fake "$image" property is injected into the front matter below.
                $image: { type: "string", format: "file", errorMessage: "Invalid image path: ${0}" }
              },
              required: ["title", "text", "image", "$image"],
              additionalProperties: false
            }
          }
        }
      }
    }
  }
};

const [, , ...argv] = process.argv;

const ajv = new Ajv({ allErrors: true, jsonPointers: true, $data: true });
ajv.addFormat("file", (value) => {
  return fs.existsSync(path.join(__dirname, value));
});
AjvErrors(ajv);

// "./src/products/**/*.md"
main(argv);

async function main(argv) {
  if (argv.length === 0) {
    console.info("Warning: No input files/globs found");
    console.info("Usage: `node linter './src/products/**/*.md'`");
    return;
  }

  for (const p of argv) {
    try {
      const files = await glob(p);
      for (const file of files) {
        const PRODUCT_DIR = path.dirname(file);
        const localFile = (f) => path.join(PRODUCT_DIR, f);
        const front = getFrontMatter(file);
        front.__directory = path.basename(PRODUCT_DIR);

        // If this is the template "./src/products/project-template/*" directory, ignore the faux email address.
        if (front.__directory === "project-template") {
          schema.properties.contact = { type: "string", const: "Your Email Here" };
        } else {
          schema.properties.contact = { type: "string", format: "email", errorMessage: "Invalid email address: ${0}" };
        }

        if (front.product) {
          for (const product of front.product) {
            // HACK: Inject an absolute-ish path (including project folder) to the `product.icon`.
            product.$icon = localFile(product.icon);

            for (const hero of product.hero) {
              // HACK: Inject an absolute-ish path (including project folder) to the `product.hero[].icon`.
              hero.$image = localFile(hero.image);
            }
            for (const facet of product.facets) {
              // HACK: Inject an absolute-ish path (including project folder) to the `product.facets[].icon`.
              facet.$image = localFile(facet.image);
            }
          }
        }

        const valid = ajv.validate(schema, front);
        if (!valid) {
          console.log(`\n${file}: "${front.title}"`);
          ajv.errors.forEach(err => console.error(`  [✘] ${ajv.errorsText([err], { dataVar: "#" })}`));
          process.exitCode = 2;
        }
      }
    } catch (err) {
      console.error(err);
      process.exitCode = 1;
    }
  }
}

function getFrontMatter(file) {
  const contents = fs.readFileSync(file, "utf-8");
  return frontMatter(contents);
}