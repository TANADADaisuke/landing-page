# Landing Page Project

## Table of Contents

* [Introduction](#introduction)
* [Content](#content)

## Introduction

This project is one of the milestone on Udacity's [Front End Web Developer](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011) Nanodegree program. This project demonstrates how to build a multi-section landing page, which has a dynamically constructed navigation menu based on the content in page.

## Content

This project have a structure shown below. Page title and sections are contained in `index.html` and style is defined in `css/style.css`.

```
index.html
css
- style.css
js
-app.js
```

Navigation menu is dynamically created according to the sections by JavaScript. `js/app.js` works for the following purposes.

- Dynamically create navigation menu.
- Set active state on the section in view.
- Scroll to the anchored section when nav menu is clicked.
- Hide navigation menu when uses do not scroll the page.