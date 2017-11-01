(function(){
    angular.module('Restful', ['ui.router'])
    .config([
    '$stateProvider',
    '$urlRouterProvider',    
    function($stateProvider, $urlRouterProvider) {
        
       $stateProvider
            .state('toDoList', {
                url: '/to-do-list',
                templateUrl: 'views/to-do-list-template.html',
                controller: 'toDoListController as todo',
                // resolve: {

                // }
            })
            .state('jokes', {
                url: '/jokes',
                templateUrl: 'views/jokes-template.html',
                controller: 'jokesController as jokesCtrl',
                // resolve: {
                //     joke: function() {
                //         return Jokes.getRandJoke().then(function(response){
                //             vm.joke = response.data.value.joke;
                //             })
                //     }
                // }
            });

        $urlRouterProvider.otherwise('/to-do-list');
    }])
    .run(function($rootScope){
        $rootScope.$on('$stateChangeError', 
        function(event, toState, toParams, fromState, fromParams, error){ console.log(error); });
    });
})();



