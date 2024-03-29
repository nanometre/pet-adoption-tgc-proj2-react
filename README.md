# Paw Pals
<img src="src\assets\images\readme-images\full-home-page-screenshot.png" style="display: block">
<br>

The live demo to the frontend web application can be accessed [here](https://paw-pals.netlify.app/).
>Note: This is a bootcamp project where an interactive web application was created using React, Express.js and MongoDB

## Index

1. [Project Summary](#1-project-summary)
2. [UI/UX](#2-uiux)
3. [Features](#3-features)
4. [Testing](#4-testing)
5. [Technologies Used](#5-technologies-used)
6. [API & Sample Document](#6-api--sample-document)
7. [Deployment](#7-deployment)
8. [Credits](#8-credits)


## 1. Project Summary

### Project Context
Paw Pals provides a platform which enables current caretakers of animals (either organisations or individuals) to list the animal up for adoption or fostering. Interested adopters and fosterers can then browse the animal listings on the platform. 

Most existing adoption and fostering web applications are operated by animal shelters. Individuals are unlikely to have access to those web applications and would resort to using social media to spread the word.

Paw Pals is developed as a single page application that uses React as frontend framework and uses a custom RESTful API using MongoDB and Express.js to retrieve and display animal information for adoption and fostering. The application is designed to be responsive and mobile friendly.


## 2. UI/UX

### Strategy

#### Organisation Objectives

To provide a platform to link up current pet fosterers and potential pet adopters/fosterers. And to promote awareness to adopt and not shop for pets. Potentially helping to save an animal life from being euthanised due to room constraints in animal shelters or homes. 

#### User Objectives

**Individual pet fosterers | Adults (20 - 60 years old)**:

User Story: When individual pet fosterers are no longer able to care for the animals and would like to find potential fosterers/adopters, they often make a post on community groups hosted on social media platforms to spread the word. However, the reach of these posts is limited as only group members can view the content. 

Acceptance Criteria: A convenient way to spread the word to a greater audience pool and increase the chances of finding a new adopter/fosterer.

**Potential pet fosterers/adopters | Adults (20 - 60 years old)**:

User Story: Potential pet fosterers/adopters want to easily browse animals that are available for fostering/adoption

Acceptance Criteria: To browse and search animals based on certain criteria (e.g., gender of animal, species of animal) and view the details of the animal. Subsequently, a way to contact the current pet fosterers to express interest in fostering/adoption.

### Scope

**Functional Requirements**

* Browse all the available animals for fostering and/or adoption
* Search animals based on certain criteria
* View details of animal listings
* Add review for individual animal listing to help the animal get adopted/fostered
* List animal for adoption and/or fostering on the web application
* Edit animal listings
* Delete animal listings

**Non-functional requirements**

* Performance criteria
* Mobile responsiveness

### Structure
All pages of the web application can be accessed through the top navigation bar. The image below shows a flowchart of how different features can be accessed.

<img src="src\assets\images\readme-images\site-map.jpg" style="display: block">
<br>

### Skeleton
The wireframes for mobile and laptop display for the web application can be accessed [here](https://github.com/nanometre/pet-adoption-tgc-proj2-react/blob/main/src/assets/images/readme-images/skeleton.pdf)

### Surface
**Colours**: Simple colour combination of green, white, and black is used. Green was selected as it typically symbolises life and renewal to reflect giving a new life to the animals by adopting them. White and black were selected to create contrast for readability of texts.

**Font Choice**: Roboto font is used for the project. The sans-serif font style makes it legible and readable. Standard font sizes are used as the web application is catered for adults.

**Layout**: Simple layout with navigation bar and buttons which enable users to easily navigate the web application.


## 3. Features
Features | Descriptions
-------- | -------------
Browse all animal listings | Users can browse all the animal listings available for fostering and/or adoption.
View details of animal listings | Users can click on the individual animal listing and will display all the details (e.g., species, breed, current caretaker details, reviews).
Search animal listings | Users can search for listings based on various criteria. The search will occur as the users type into the inputs or check/uncheck the checkboxes.
Add reviews for animal listings | Users can submit reviews on the individual animal listing.
Add new animal listing | Users can add a new animal listing for adoption or fostering.
Manage animal listings | Users can input a caretaker email with existing animal listings and edit/delete the animal listings under the caretaker.

### Limitations and future implementations
Limitations | Future Implementations to Resolve Limitations
----------- | -------------
User must manually input date of birth when adding or editing listings. | For better UX, allow users to select the date of birth using a calendar.
Images are "uploaded" by providing a working URL of an image and only one image can be "uploaded" for each listing. | Implement an image upload system to allow users to upload multiple image files from the web application. Then display all the images that were uploaded on the frontend web application.
Managing animal listings only require users to input an email address, and it is not secure because the email address is visible in the animal details. | Implement a sign up and login system such that only authorised users (current caretakers) can edit or delete the listings.
Potential fosterers/adopters must manually email the caretaker to express interest to foster/adopt | Implement a form where users can fill up on the web application to express their interest. Upon submission of the form, the web application will directly send an email to the caretaker. Users would not need to use a separate email application to express their interest.


## 4. Testing

### Test Cases
Manual and unit testing have been done for this project. The test cases for the critical functionality of this project are documented [here](https://github.com/nanometre/pet-adoption-tgc-proj2-react/blob/main/src/assets/images/readme-images/test-cases.pdf).

### Testing for Mobile Responsiveness
Testing was done using Responsively across iPhone X, iPad, and Generic Laptop.


## 5. Technologies Used
- [HTML5](https://developer.mozilla.org/en-US/docs/Glossary/HTML5) / [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

  HTML5 is a markup language and CSS is a style sheet language. They are both heavily relied on to provide the structure of the web application and to describe how the HTML elements are to be presented.

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

  JavaScript is used to create a dynamic behaviour between the web application and the user. It is the core scripting language of this project which the other technologies (listed below) rely on.

- [React](https://reactjs.org/)

  ReactJS is a frontend JavaScript library used for building user interfaces specifically for single-page application.

- [Express.js](https://expressjs.com/)

  The custom RESTful API uses Express.js, a fast, unopinionated, minimalist web framework for Node.js.

- [MongoDB](https://www.mongodb.com/)

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
This project makes use of a custom RESTful API which retrieves and manages a collection of animal records. The API was built using [Express.js](https://expressjs.com/) and uses [MongoDB](https://www.mongodb.com/) as the database. The source code and documentation for the API can be found here: [Paw Pals' RESTful API](https://github.com/nanometre/pet-adoption-tgc-proj2-express). The API is [hosted on Render](https://pet-adoption-tgc-proj2-express.onrender.com/) and is accessible from the frontend.

The sample animal record document can be found in "2. Document Design" of the [Paw Pals' RESTful API repository](https://github.com/nanometre/pet-adoption-tgc-proj2-express#2-document-design).


## 7. Deployment
The frontend project is deployed on Netlify. The live demo to the web application can be accessed [here](https://paw-pals.netlify.app/). 


## 8. Credits

- Frontend (React) and Backend (Express.js) validation tutorial using yup from [PedroTech YouTube channel](https://www.youtube.com/channel/UC8S4rDRZn6Z_StJ-hh7ph8g)

- Function to find value of average ratings using map, reduce from [James Sinclair](https://jrsinclair.com/articles/2019/five-ways-to-average-with-js-reduce/)

- Icons are created by bqlqn, Nikita Golubev and Freepik from [Flaticon](https://www.flaticon.com/)

- Pictures are taken from [Freepik](https://www.freepik.com/) and [Pexels](https://www.pexels.com/)

- Paw loading animation is created by Prime from [LottieFiles](https://lottiefiles.com/43017-animal-care-loading)

- Content in adoption process page is adapted from [Causes for Animals (Singapore)](https://www.causesforanimals.com/cas-adoption-process.html)

- YouTube and Stack Overflow community for guidance on various issues faced.