var LandingPageController = function ($scope, $http) {
    $scope.models = {
        helloAngular: 'I work!'
    };
    $scope.navbarProperties = {
        isCollapsed: true
    };
    function getCharacters () {
        $http.get('/Characters/All/')
        .then(function (response) {
            console.log(response.data);
            $scope.characters = response.data;
            });
        //console.log("getChar");
    };
    getCharacters();
}

// The $inject property of every controller (and pretty much every other type of object in Angular) needs to be a string array equal to the controllers arguments, only as strings
LandingPageController.$inject = ['$scope', '$http'];
