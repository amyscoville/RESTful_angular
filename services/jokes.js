(function(){
    angular
    .module('Restful')
    .factory('Jokes', jokes);

    function jokes($http) {
        var service = {
            getRandJoke: getRandJoke
        };
        return service;

        function getRandJoke() {
            return $http.get('http://api.icndb.com/jokes/random?exclude=explicit')
                .then(function(response){
                    return {
                        joke: response.data.value.joke
                    };
                });
        }
    }
})();

