# Bookfinder

## Overview

An application to search books using the official Google Books API.

[Live link](arunjose.github.io/bookfinder)

## Features

* User is able to search for books by entering keywords including book title, author name, etc.
* Books are displayed with title, thumbnail image, author name(s), publisher name and a link to learn more about the book.
* Clicking on the 'more' button will take user to Google Books product page from where the user can get more information about the selected book or even read some of the books.

## Project set up

* Clone the repo and run `yarn install` to download all the node packages used for the application.
* The application will work as is, but optionally you can add a Google API key (which you can get from [here](https://developers.google.com/books/docs/v1/using#APIKey)) if more queries will made be through the API. Adding an API key may avoid getting rate limited by Google. Paste the API key in `config.js` file in `src` folder.

## Running the project

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

## Dependencies

* Axios for making API requests.
* This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
