// create the module and name it scotchApp
var scotchApp = angular.module('scotchApp', ['ui.router']);

scotchApp.config(function($stateProvider, $urlRouterProvider/*, $locationProvider*/) {
    
    // $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/home');
  
    $stateProvider
      
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'pages/home.html'
        })

        // nested list with custom controller
        .state('home.list', {
            url: '/list',
            templateUrl: 'pages/home-list.html',
            controller: function($scope) {
                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
            }
        })

        // nested list with just some random string data
        .state('home.paragraph', {
            url: '/paragraph',
            template: '<h4>I could sure use a drink right now.</h4>'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            views: {

                // the main template will be placed here (relatively named)
                '': { templateUrl: 'pages/about.html' },

                // the child views will be defined here (absolutely named)
                'columnOne@about': { template: '<h4>Look I am a column!</h4>' },

                // for column two, we'll define a separate controller 
                'columnTwo@about': { 
                    templateUrl: 'pages/table-data.html',
                    controller: 'scotchController'
                }
            }
            
        })

        .state('contact', {
            // we'll get to this in a bit      
            url: '/contact/:msg',
            templateUrl: 'pages/contact.html',
            controller: function ($scope, $stateParams){
                // get the id
                $scope.fullmsg = $stateParams.msg;
            }
        }); 
});

scotchApp.controller('scotchController', function($scope) {
    $scope.title = 'Best Scotches table.';
    $scope.scotches = [
      {
        name: 'Macallan 12',
        price: 50
      },
      {
        name: 'Chivas Regal Royal Salute',
        price: 10000
      },
      {
        name: 'Glenfiddich 1937',
        price: 20000
      }
    ];
});