/*
    app.js: main application script
    this is an Angular application
 */

"use strict";

// everything starts by declaring a module
angular.module('AngularDemo', [])
    // returns a bunch of stuff to work such as controller
    .controller('HelloController', function($scope){
        // angular scope holds all data models that we want available in the html views
        //added new object to scope with two properties: firstName, lastName
        $scope.person = {
            firstName: null,
            lastName: null
        };
    })
    .controller('MoviesController', function($scope) {
        $scope.movies = movies;
        // create row in html for each movie using angular
    });