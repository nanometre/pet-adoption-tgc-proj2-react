# Paw Pals' React Frontend

>Note: This is a bootcamp project where an interactive web application was created using React, Express.js and MongoDB

## Index

1. [Project Summary](#project-summary)
2. [UI/UX](#uiux)
3. [Features](#features)
4. [Testing](#testing)
5. [Technologies Used](#technologies-used)
6. [API & Sample Document](#api--sample-document)
7. [Deployment](#deployment)
8. [Credits](#credits)


## 1. Project Summary

### Project Context
Paw Pals provides a platform which enables current caretakers of animals (either organisations or individuals) to list the animal up for adoption or fostering. Interested adopters and fosterers can browse the animal listings on the platform. 

Most existing adoption and fostering web application are operated by animal shelter organisations. Individuals are unlikely to have access to those web application and would resort to using social media to spread the word.

Paw Pals is developed as a single page application that uses React as frontend framework and uses a custom RESTful API using MongoDB and Express.js to retrieve and display pet information for adoption and fostering. The application is designed to be responsive and mobile friendly.


## 2. UI/UX

### Strategy

**Organisation**
The site owner wants to promote greater awareness on the adoption and fostering of pets to save an animal life from being euthanised due to room constraints in animal shelters or homes. 
<!-- adopt dont shop -->

**User**
The target audiences are current pet fosterers, potential pet adoptors, and potential pet fosterers. Their characteristics would generally be young and mid aged working adults with high educational and IT literacy levels.

The current fosterers want a platform to list pets up for adoption or fostering easily. The potential adopters and fosterers want a platform to browse animals to adopt and foster easily.

User Stories | Acceptance Criteria(s)
------------ | -------------

### Scope

**Functional Requirements**


**Non-functional requirements**


### Structure
<img src="src\assets\images\readme-images\Site Map.jpg" style="display: block">
<br>

### Skeleton


### Surface
**Colours**: 

**Font Choice**: 


## 3. Features

### Limitations and future implementations


## 4. Testing

### Test Cases
Manual and unit testing have been done for this project. The test cases for the critial functionality of this project is documented [here]().

## 5. Technologies Used
- [HTML5](https://developer.mozilla.org/en-US/docs/Glossary/HTML5) / [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

  HTML5 is a markup language and CSS is a style sheet language. They are both heavily relied on to provide the structure of the web application and to describe how the HTML elements are to be presented.

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

  JavaScript is used to create a dynamic behaviour between the web application and the user. It is the core scripting language of this project which the other technologies (listed below) rely on.

- [React](https://reactjs.org/)

  ReactJS is a frontend JavaScript library used for building user interfaces specifically for single-page application.

- [Express.js](https://expressjs.com/)

  The custom RESTful API uses Express.js, a fast, unopinionated, minimalist web framework for Node.js.

- [MondoDB](https://www.mongodb.com/)

  The custom RESTful API uses MongoDB, a document-oriented database, where the all the data is stored.

- [Axios](https://github.com/axios/axios)

  Axios is a promise-based HTTP client for node.js and it is used to handle all the API requests in this project.

- [react-hook-form](https://github.com/react-hook-form/react-hook-form)

  React-Hook-Form is used to handle most of the forms in the application to remove unnecessary re-rendering in React application to improve performance.

- [yup](https://github.com/jquense/yup)

  Yup, a schema validation library for Node.js, is used on both the frontend and backend to validation data from forms and requests.

- [Bootstrap V5.1.3](https://github.com/twbs/bootstrap)

  Bootstrap is used to create a mobile responsive web application. Multiple components from Bootstrap were used (e.g., card, accordion, and modal)

- [Material UI](https://github.com/mui/material-ui)

  Material UI provides UI components for React to develop React application faster. Material UI is used when Bootstrap does not have the component required (e.g., ratings component)

- [react-lottie](https://github.com/chenqingspring/react-lottie)

  Lottie is a JSON-based animation file format which is used for the loading animation for the web application.

- [Google fonts](https://fonts.google.com/)

  Google fonts is used to select font families for the web application.

## 6. API & Sample Document
This project makes use of a custom RESTful API which retrieves and manages a collection of animal records. The API was built using [Express.js](https://expressjs.com/) and uses [MongoDB](https://www.mongodb.com/) as the database. The source code and documentation for the API can be found here: [Paw Pals' RESTful API](https://github.com/nanometre/pet-adoption-tgc-proj2-express). The API is [hosted on Heroku](https://pet-adoption-tgc-proj2-express.herokuapp.com/) and is accessible from the frontend.

The sample animal record document can be found in "2. Document Design" of the [Paw Pals' RESTful API repository](https://github.com/nanometre/pet-adoption-tgc-proj2-express#2-document-design).

## 7. Deployment
The frontend project is deployed on Netlify. The live demo to the web application can be accessed [here](https://prismatic-phoenix-69c302.netlify.app/). 

## 8. Credits

- Frontend (React) and Backend (Express.js) validation tutorial using yup from [PedroTech YouTube channel](https://www.youtube.com/channel/UC8S4rDRZn6Z_StJ-hh7ph8g)

- Function to find value of average ratings using map, reduce from [James Sinclair](https://jrsinclair.com/articles/2019/five-ways-to-average-with-js-reduce/)

- Icons are created by bqlqn, Nikita Golubev and Freepik from [Flaticon](https://www.flaticon.com/)

- Pictures are taken from [Freepik](https://www.freepik.com/) and [Pexels](https://www.pexels.com/)

- Paw loading animation is created by Prime from [LottieFiles](https://lottiefiles.com/43017-animal-care-loading)

- Content in adoption process page is adapted from [Causes for Animals (Singapore)](https://www.causesforanimals.com/cas-adoption-process.html)

- YouTube and Stack Overflow community for guidance on various issues faced.