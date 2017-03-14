#Hackathon GxT yellowgreen Team - Hangar Menu - Luis Padilla Moreno

<a href="https://github.com/hangarlabs/yellowgreen-hackathon"><img src="src/img/logo/teamlogo.jpg" width="150" height="150"></a>

## Setup

This project use webpack instead of gulp

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
│   ├── scss/                          * Contains all SASS files, partials, etc
│   │   └── _variables.scss            * Contains SASS variables
│   │   └── main.scss                  * Contains SASS files with submodules
│   └─── index.html                         * main HTML with bundled files linked
├── build/                              * built directory with transpiled files
│   └── bundle.js                       * Contains bundled js files
├── node_modules/                      * Node dependencies
├── .editorconfig                      * Defines coding styles between editors
├── .gitignore                         * Git ignore file
├── webpack.config.js                  * Webpack tasks
├── package.json                       * Our javascript dependencies
└── README.md                          * This file
```


