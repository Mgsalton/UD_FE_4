# Feed Reader Testing Project
### By Mathew Alton

## Table of Contents

* About this program
* Instructions
* Credits
* Changelog

## About this program

This program uses Jasmine to perform automated tests on an HTML webpage. It will run through a series of 8 tasks with the expectation of returning 8 green lights to denote success. These tasks are:

1. Checking whether the contents of an RSS feed are defined
2. Whether these RSS feeds have an associated name
3. And whether these RSS feeds have a URL defined
4. It will test whether a hidden menu is actually visible by default
5. And determine whether said menu can be opened with a mouse click
6. And subsequently closed with another mouse click
7. It will check the entries of the RSS feed pulled from a server
8. And finally, determine whether the RSS feeds are updated when the server is refreshed

## Instructions

1. To start the program, simply activate index.HMTL. Jasmine will take over and run the tests automatically
2. Success and/or failure can be determined by the number of green or red lights (8 and anticipated).

## Credits

* The Jasmine documentation provided a good foundation to the in-and-outs of the module: https://jasmine.github.io/2.0/introduction.html#section-Spies
* The Click() functionality was lifted from the following page: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/click
* A special thank you to the Udacity reviewer who provided constructive feedback
* And finally... stackoverflow and its many contributors--where would we be without it or them?

## Changelog

* Modified the 'Initial Entries' suite
* Modified the 'New Selection' suite
