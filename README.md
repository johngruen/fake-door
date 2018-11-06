# Firefox Fake Door

Firefox fake door is a simple CMS for building and testing value propositons for hypothetical future Firefox products and features.

You can visit the site [here](https://johngruen.github.io/fake-door/)

## Working With the Fake Door Site

This document explains how to update product pages on the Firefox Fake Door website. If you're interested in developing for the site, check out the [Gatsby](https://www.gatsbyjs.org/docs/) docs.

### Prerequisites

In order to add products to the Fake Door site, you'll first need to make sure you have the correct dependencies installed on your comupter. You can install these from the command line

In order to get started you'll need:

1. To make sure you have a GitHub account and have Git running and configured on your local machine. [docs](https://help.github.com/articles/set-up-git/).
2. To make sure you are a contributor on this repo. Talk to John, Mark or Wil about this one.
3. A Text editor like [VSCode](https://code.visualstudio.com/).
4. Modest familiarity with the Terminal app on your computer.
5. The latest Version of Node. [Install link](https://nodejs.org/en/download/current/)
6. From your Terminal, install the Gatsby Command Line Interface. Simply open your Terminal and paste `npm install --global gatsby-cli`.  Note: you'll need to have Node installed first.

### Terminal Tips

* The Terminal is an execution environment on your computer. Basically, if you type in some instructions it will do some stuff in response. If, for example, you type `echo pizza` the Terminal will print `pizza` back to you.
* In general, your Terminal is always going to execute actions in a working directory unless your command contains explicit instructions to execute global commands.
* To see what directory you are in at any time type `pwd`.
* Your Terminal will default to being set to your home directory, so you should see something like `Users/<your user name>`
* You can also type `ls` to see a list of child directories of your current directories.
* You can change directories in your Terminal by typing `cd <path>`. So, for example, if you want to clone a repo to a Repos directory in your Documents folder, you can type `cd Documents/Repos`.
* If you want to create a new directory, just use the mkdir command `mkdir Documents/Repos` and then use `cd` to navigate to that directory.
* `cd ../` will navigate up your computer's directory structure. You can chain together this format (`../../../`) to go up multiple directories.
* `cd ~` will take you back to your home directory.

### Setting Up Your Environment

Skip this section if you've already cloned the fake-door repository.

#### 1. Go to the directory where you want to add the repo

Open your Terminal and use the `cd` command to navigate to the folder where you want to put your local copy of fake-door.

#### 2. Clone the repository

Once you've navigated to the directory you want to keep your work, clone the repo:

`git clone https://github.com/johngruen/fake-door.git`

### Adding Files

#### 1. Make sure you have the latest version of fake-door

Since multiple people may be committing to the fake-door repo, it's a good idea to keep your local copy up to date.

Whenever you want to add new stuff to the repo do the following:

```
cd <path to your local fake-door repo>

# Ensure you're in the master git branch
git checkout master

# pull down any newly committed content from the GitHub copy of master
git pull origin master
```

If something goes wrong in this process, you may have random junk stuff in your in your local master branch. You can wipe out local changes and get a fresh start with the following.

```
cd <path to your local fake-door repo>
git checkout master
git fetch origin
git reset --hard origin/master
```

#### 2. Create a new branch to add your changes

Next up, you'll create a new git branch to add your changes. Git branch names must not have any spaces. Try to keep your name short and descriptive so that reviewers can tell what you're trying to do.

```
git checkout -b <short-branch-name>
```

#### 3. Adding product pages

The directory structure for the fake-door repo is fairly straightforward. All the product pages are in `src/products`. There's a template folder you can copy if you're starting a new project:

```
cp -r src/products/project-template src/products/<new-product-name>
```

Note: `<new-product-name>` should be a lowercase, hyphenated string.

#### 4. Updating product pages

Each product folder should have a set directory structure that will look something like this:

```
├── images
│   ├── facet-blue.png
│   ├── facet-white.png
│   ├── hero.png
│   └── icon.svg
├── index.md
└── v1.md
```

The images folder should contain all images you want to include in any version of your product page. There is no enforced naming scheme for images, but please use lowercase, hyphenated strings for image names.

* Hero images should be `1280x1040` PNG images
* Facet images should be `960x720` PNG images
* Icon images should be `32x32` PNG images

The `index.md` file provides basic metadata for the project.

Each Markdown file that's not `index.md` is a project version. You can name these anything you like as long as you stick to the lowercase, hyphenated naming convention. The `src/products/project-template/v1.md` file provides descriptions of the content needed for each page.

A few notes:
* These files are a bit fragile. Make sure you keep an eye on closing quotation marks and the indentation structure of these files.
* In product pages, the facet elements are endlessly iterable. You can add as many as you like by copy-pasting the facet structure:
```
      -
        title: "Value Facet Title"
        text: "Value Facet Description"
        image: "./images/facet-blue.png"
```

#### 5. Commit Changes

In your Terminal, make sure you are in the fake-door directory.

To commit all changes type the following:

```
git add .
git commit -m "<short message explaining changes>"
git push -u origin <name-of-your-branch>
```
Note: make sure you've done <b>Step 2</b> before this!

#### 6. Go to GitHub and make a pull request

Visit the [fake-door repo](https://github.com/johngruen/fake-door) on GitHub, and you should now see a yellow bar asking if you'd like to make a pull request for your commit. Click yes to confirm.

It's generally good practice to have someone else review and merge code you commit. You can message a peer on your team or just assign someone through the GitHub interface.

#### 7. Finishing up

Once your new code is merged, it's good practice to go ahead and repeat `step 1` of these instructions. That way your local `master` branch will always be up to date.

### Finally

If you've massively broken your local repository and just want to start over from scratch, just throw it in the trash and clone a new one :)
