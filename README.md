# cookiecutter-contentful-summernote

[![Tagged Release](https://img.shields.io/badge/release-v0-blue.svg?longCache=true)](CHANGELOG.md)
[![Development Status](https://img.shields.io/badge/status-planning-lightgrey.svg?longCache=true)](ROADMAP.md)

> A cookiecutter for Summernote WYSIWYG editor for Contentful

This project implements a configurable Summernote WYSIWYG editor as a UI Extension for Contentful for the Text and Symbol Field types

_**Note:** This project was initially created by [cookiecutter-git](https://github.com/NathanUrwin/cookiecutter-git)!_ :cookie:

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
  - [Future](#future)
  - [History](#history)
  - [Community](#community)
- [Credits](#credits)
- [License](#license)

## Features

* Sane package.json
* MIT licensed by default
* Removal of redundant files for unsued options through `manifest.yml` and the `post_gen_project` hook
* Optional configuration of mathematics into the Summernote WYeditor using the blazingly fast [KaTex](https://katex.org/)

## Requirements

You must have [Python](https://www.python.org/downloads/) installed so that you can run the commands below.

## Installation

First, create your empty repo on Github (in our example below, we would call it ``summernote_wyswig_editor``).

Now, get Cookiecutter_. Trust me, it's awesome::

    $ pip install cookiecutter

Now run it against this repo::

    $ cookiecutter gh:ntbrown/cookiecutter-contentful-summernote

## Usage

You'll be prompted for some questions, answer them, then it will create a directory that is your new package and push it upstream to your version control provider.

**Warning**: Please enter your own information as this information will be used to replace the placeholders contained within the cookiecutter template(s).

Now take a look at your repo. Awesome, right?

## Development

See [CONTRIBUTING](CONTRIBUTING.md)

### Future

See [ROADMAP](ROADMAP.md)

### History

See [CHANGELOG](CHANGELOG.md)

### Community

See [CODE OF CONDUCT](CODE_OF_CONDUCT.md)

## Credits

See [AUTHORS](AUTHORS.md)

## License

See [LICENSE](LICENSE)
