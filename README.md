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

You'll be prompted for some questions, answer them, then it will create a directory that is your new package.

**Warning**: After this point, please enter your own information as this information will be used to replace the placeholders contained within the cookiecutter template(s).

It prompts you for information that it uses to create the app, with defaults in square brackets. Answer them::

    full_name [Your full name here]: MyName
    email [you@example.com]: my@email.com
    github_username [yourname]: MyUsername
    project_name [Summernote WYSWIG Editor]:
    project_slug [summernote_wyswig_editor]:
    project_short_description [Implementation of the Summernote WYSWIG for contentful Text and Symbol Field types.]:
    version [0.1.0]:
    Select mathematics:
    1 - true
    2 - false
    Choose from 1, 2 [1]:

Enter the project and take a look around::

    $ cd summernote_wyswig_editor/
    $ ls

Create a GitHub repo and push it there::

    $ git init
    $ git add .
    $ git commit -m "first awesome commit"
    $ git remote add origin git@github.com:ntbrown/summernote_wyswig_editor.git
    $ git push -u origin master

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
