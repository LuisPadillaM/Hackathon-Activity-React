#Hackathon GxT yellowgreen Team - Hangar Menu

<a href="https://github.com/hangarlabs/yellowgreen-hackathon"><img src="src/img/logo/teamlogo.jpg" width="150" height="150"></a>

## Table of Contents
 - [Getting Started](#getting-started)
 - [Usage](#usage)
 - [File Structure of App](#file-structure-of-app)

## Getting Started

* Install nodeJS 6.4 or above
* Run `npm install` from the project root.

## Usage

You can run taskrunner build and watch with 

```sh
npm start
```

## File Structure of App

```
yellowgreen-hackathon/
├── src/                               * Working directory
│   ├── js/
│   │   └── main.js                    * Contains js files with submodules
│   │   
│   ├── scss/                          * Contains all SASS files
│       ├── _bootstrap-custom.scss     * Contains custom bootstrap sass components
│       └── main.scss                  * Contains SASS files with submodules
│
├── dist/                              * built directory with transpiled files
│   ├── css/                           * Contains bundled css files
│   │   └── main.css                   
│   ├── js/
│   │   └── main.bundled.js            * Contains bundled js files
├── node_modules/                      * Node dependencies
├── index.html                         * main HTML with bundled files linked
├── .editorconfig                      * Defines coding styles between editors
├── .gitignore                         * Git ignore file
├── gulpfile.js                        * Gulp tasks
├── package.json                       * Our javascript dependencies
└── README.md                          * This file
```

