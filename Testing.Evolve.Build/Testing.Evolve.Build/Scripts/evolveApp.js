//var evolveApp = angular.module('evolveApp', []);

//AwesomeAngularMVCApp.controller('LandingPageController', LandingPageController);


var evolveApp = angular.module('evolveApp', ['ui.router', 'ui.bootstrap']);

evolveApp.controller('LandingPageController', LandingPageController);
evolveApp.controller('LoginController', LoginController);

evolveApp.factory('AuthHttpResponseInterceptor', AuthHttpResponseInterceptor);
evolveApp.factory('LoginFactory', LoginFactory);
evolveApp.factory('RegistrationFactory', RegistrationFactory);
var configFunction = function ($stateProvider, $httpProvider, $locationProvider) {
    //$locationProvider.hashPrefix('!').html5Mode(true);
    $stateProvider
        .state('stateOne', {
            url: '/stateOne?donuts',
            views: {
                "containerOne": {
                    templateUrl: '/routesDemo/one'
                },
                "containerTwo": {
                    templateUrl: function (params) { return '/routesDemo/two?donuts=' + params.donuts; }
                },
                "nestedView@stateOne": {
                    templateUrl: '/routesDemo/four'
                }
            }
        })
        .state('stateTwo', {
            url: '/stateTwo',
            views: {
                "containerOne": {
                    templateUrl: '/routesDemo/CharacterSelection'
                },
                "containerTwo": {
                    templateUrl: '/routesDemo/CharacterSelection'
                }
            }
        })
        .state('stateThree', {
            url: '/stateThree?donuts',
            views: {
                "containerOne": {
                    templateUrl: function (params) { return '/routesDemo/two?donuts=' + params.donuts; }
                },
                "containerTwo": {
                    templateUrl: '/routesDemo/three'
                }
            }
        })
        .state('loginRegister', {
            url: '/loginRegister?returnUrl',
            views: {
                "containerOne": {
                    templateUrl: '/Account/Login',
                    controller: LoginController
                },
                "containerTwo": {
                    templateUrl: '/Account/Register',
                    controller: RegisterController
                }
            }
        });

    $httpProvider.interceptors.push('AuthHttpResponseInterceptor');
}
configFunction.$inject = ['$stateProvider', '$httpProvider', '$locationProvider'];

evolveApp.config(configFunction);