# f9 Matching Squares


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Description](#description)
- [Version](#version)
- [Project Objectives](#project-objectives)
- [Installation](#installation)
- [Cordova](#cordova)
- [The new build process](#the-new-build-process)
- [Instructions for Xcode set up](#instructions-for-xcode-set-up)
- [Gulp Commands](#gulp-commands)
- [Known Issues:](#known-issues)
- [TODO](#todo)
- [Project Tree](#project-tree)
- [Developed By](#developed-by)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->



## Description

A simple memory game, to be published as a Hybrid App.

## Version

The current version of the app is:

**0.0.1**



## Project Objectives

To make a simple educational game


## Installation

```
$ git clone git@github.com:russellf9/f9-matching-squares && cd f9-matching-squares

# update node dependencies
$ npm update

# update bower dependencies
$ bower update

# to update node
node -v
v0.10.33

#  use n
npm install -g n

# For the latest stable version:
sudo n stable

node -v
v0.12.0

```

## Cordova

```
# To create the initial www folder structure
# (Avoids the `Current working directory is not a Cordova-based project.` error)

$ cordova platform add ios

```

## The new build process

Now attempting to use the _Browser Platform_

See: [Browser as a platform for your PhoneGap/Cordova apps](http://www.raymondcamden.com/2014/09/24/Browser-as-a-platform-for-your-PhoneGapCordova-apps)


```
# to add the Browser platform
# this builds from the current state of the www folder
# (Note: the www folder has to be built first)
$ cordova platform add browser --usegit

# to run - kill Chrome, and then type
$ cordova run browser

# to rebuild the www folder
$ gulp --build

# to run again
$ cordova run browser

# add platform
$ ionic platform ios

# rebuild
$ ionic build ios

# modify as per instructions

```


## Gulp Commands

I've spent considerable effort making the gulp tasks as modular as possible. Each task is within its own file and I'm using [require-dir](https://www.npmjs.com/package/require-dir) to keep the tasks DRY.

I've added a new set of commands based from [ionic-gulp-seed](https://github.com/tmaximini/ionic-gulp-seed).

In the original Ionic app, source files were located in the _www_ folder. I've separated the `dev` and `build` modes, so that the source files are within an _app_ folder. Gulp tasks have been set up to either test with a _.tmp_ location or distribute from the _www_ location.

**dev**
 * Runs from the .tmp folder
 * Files are not minified

```
# dev runs the 'dev' build and starts the server
$ gulp

```

**build**
 * Runs from the .www folder
 * Files are minified and concatenated.

```
# build
$ gulp --build
# or
$ gulp -b

```

**ionic CLI wrappers**

```
# emulate ios
$ gulp -emulate
# or
$ gulp -e

```

```
# test on device
$ gulp -run
# or
$ gulp -r
```

**gulp utilities**

* [gulp-bump](https://www.npmjs.com/package/gulp-bump), increments the version numbers in the _package.json_ and _bower.json_.
Using **MAJOR.MINOR.PATCH**, [semantic versioning](http://semver.org).

```
# implements a semantic 'patch' increment
$ gulp version-patch

# implements semantic a 'minor' increment
$ gulp version-minor

# implements a semantic 'major' increment
$ gulp version-major


**Note:** The widget.version in the config.xml needs to be updated as well.


# creates a new git branch in the format 'dev-{YYMMDD}' from the current date
$ gulp branch

```


## Known Issues:


## TODO

1. [ ] Make a TODO list!.
1. [ ] Make the tree using `tree`


## Project Tree

```

```

## Developed By

* Russell Wenban


## License

The MIT License (MIT)

Copyright (c) 2015 Russell Wenban - Factornine Ltd

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
