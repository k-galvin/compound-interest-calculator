[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/IJjB7vu2)
**CMSI 2021** Web Application Development, Fall 2023

# Assignment 0914
We start our practicum with a standalone web app—one that does not need to communicate with other servers or services in order to do what it seeks to do. In addition, it’s a _vanilla_ web app—meaning that the web browser will be executing our code _exactly as written_, without any preprocessing, compilation, or additional frameworks. For this assignment, we’d like you to demonstrate:
* Knowledge of a fair amount of HTML and CSS
* Knowledge of basic event handling in browser-based JavaScript
* The ability to develop and host an app on [Replit](https://replit.com) or [Code Sandbox](https://codesandbox.io)

## Background/Preparatory Reading
* Browse the HTML and CSS [HTML Dog tutorials](https://www.htmldog.com/guides/). (3 for HTML and 3 for CSS.) You can breeze through them quickly if they cover aspects of these technologies you already know. The goal here is for you to familiarize yourself with all the common uses of HTML and CSS, not to spend too much time. If you find something that interests you, by all means spend as much time as you need
* Since HTMLDog does not have tutorials on grid and flex, find an online tutorial for these, or study the guides on [CSS-Tricks](https://css-tricks.com)
* Briefly skim the Tutorials on the [MDN JavaScript page](https://developer.mozilla.org/en-US/docs/Web/JavaScript). Bounce around and take in the material you need; you do not have to complete all the tutorials for this assignment. Think of the MDN JavaScript documentation as something to be read through during the entire course, not just for this assignment (i.e., it can serve both as a _tutorial_ and a _reference_ source)
* Review Dr. Toal’s course notes for the introduction to web apps, HTML, CSS, JavaScript. Follow any links in the notes that interest you

## For Submission
Create a web app for computing [compound interest](https://en.wikipedia.org/wiki/Compound_interest). The core of the page will have a form with input fields for principal, interest rate, number of times compounded per year, and the total number of years. As these values change, you will update fields showing the amount of money you earned, and the total amount.

In addition to the app working correctly, the following are required (as one goal of this assignment is to get you to actually use a large amount of HTML and CSS):

* A background image or gradient
* A non-standard font (show that you can import a font from Google Fonts or similar)
* A grid layout for the main content of the site, so that it has a header and footer
* A flex layout to make the form look gorgeous
* Responsiveness: the site must look good on mobile and web (narrow or wide screen)
* A nice title (perhaps an `h1` element, with matching CSS)
* A fun image or two
* A variety of input elements: don’t just use text! (sliders; `select`s for common values; etc.)
* At least one each of a margin, padding, and border
* At least one transition
* At least one transform
* At least one text shadow
* A footer with a link to the [Replit](https://replit.com) or [Code Sandbox](https://codesandbox.io) repo where the live version of your app can be found
* Site balance and aesthetics! Use colors and contrast properly! Line things up! Optionally, get a designer friend of yours to critique your work

Build your site on either [Replit](https://replit.com) or [Code Sandbox](https://codesandbox.io). Test it well.

Some additional best-practice requirements:
* Your [Replit](https://replit.com) or [Code Sandbox](https://codesandbox.io) repo must have a good name: named after the project, not something generic like “hw1”
* Your GitHub copy of the app (see below) must have a detailed _about.md_ Markdown file that not only explains the project (as real “about” documentation should) but also with a link to where the app is deployed
* Your code (all files) must be flawlessly formatted, and that means that you not only indent and space 100% consistently, but that you are also perfectly consistent with blank-line spacing where necessary (Prettier will help with most things if you format locally in your editor; your chosen environment may have an auto-format feature as well)
* HTML and accessibility validation—check your browser dev tools console for any warnings or errors!

## Operational Tips/Suggestions
* Depending on their respective latest versions, your chosen environment may or may not have an effective auto-format feature—to accommodate this, you can configure your code editor with Prettier and format your code there, then send the formatted code back to the environment. To help with this, this repository has a _.prettierrc_ file that has my (opinionated) formatting preferences
* Remember that there isn’t enough class time to cover absolutely everything that you might want to do! We hope that our class time so far has served to give you a good foundation for getting started, but definitely don’t let “this wasn’t mentioned in class” be a barrier when it comes to figuring things out

## How to Turn it In
* Commit the source code from [Replit](https://replit.com) or [Code Sandbox](https://codesandbox.io) to this GitHub repository. Make sure to reflect the file structure of the original: the idea is for the GitHub version to run exactly as-is, if hosted by a web server
* Commit your _about.md_ file to this repository as well

## Specific Point Allocations
For this particular assignment, graded categories are as follows:

| Category | Points |
| -------- | -----: |
| Baseline functionality | 35 points total |
| • Ability to enter principal, interest rate, number of times compounded per year, and the total number of years | 10 points|
| • Correct computation of compound interest | 15 points |
| • Effective display of result | 10 points |
| Implementation specifications | 60 points total |
| • Background image or gradient | |
| • Non-standard font | |
| • Grid layout for the main content | |
| • Flex layout for the form | |
| • Responsiveness | |
| • Title | |
| • Fun image(s) | |
| • Input other than text | |
| • Margin | |
| • Padding | |
| • Border | |
| • Transition | |
| • Transform | |
| • Text shadow | |
| • Footer with link | |
| • Site balance | |
| App description in _about.md_ | 5 points total |
| Hard-to-maintain or error-prone code | deduction only |
| Hard-to-read or inadequately-formatted code | deduction only |
| Version control | deduction only |
| Punctuality | deduction only |
| **Total** | **100** |

Note that websites with lingering code errors will negatively affect other criteria, because if we can’t run your code, we can’t evaluate related remaining items completely.
