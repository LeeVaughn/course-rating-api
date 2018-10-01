# Course Rating API (work in progress)

A back end for a course rating application which allows the user to create, edit and rate courses.

## Motivation

This project was created as a part of the Treehouse Full Stack JavaScript Techdegree program.

## Features

* Users can see a list of courses in a database
* Users can add courses to the database
* Users can add reviews for a specific course
* Users are unable to review their own courses
* A message is written to the console when the database connection is successfully opened
* A message is written to the console when there is an error connecting to the database
* Validation errors generated by Mongoose are passed to Express
* Validation errors received by an Express route are sent to the global error handler
* The global error handler sent to the user in JSON format
* A pre save hook on the user schema is used to encrypt the password before saving it to the database
* Tests are included for checking credentials on the api/users route
* An "authenticate" static method is used to compare the password to the hashed password
* An Express middleware function authenticates any routes using the "authenticate" static method on the schema

## To Run

* Download project files by running ```git clone https://github.com/LeeVaughn/course-rating-api```
* Navigate to the project folder
* Install dependencies with ```npm install```
* Start application by running ```npm start``` (application runs on localhost:3000)

## Built With

* [Node.js](https://nodejs.org/en/)
* [Express](https://github.com/LeeVaughn/twitter-interface)
* [mongoDB](https://www.mongodb.com/)

## Dependencies

* coming soon

## Links

* [Repository](https://github.com/LeeVaughn/course-rating-api)

## Author

[Daniel Lee Vaughn](https://github.com/LeeVaughn)