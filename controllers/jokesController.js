(function(){
    angular
    .module('Restful')
    .controller('jokesController', jokesCtrl);

    function jokesCtrl(Jokes) {
        var vm = this;

        vm.joke = '';
        vm.replaceJoke = replaceJoke;

        Jokes.getRandJoke().then(function(response){
            vm.joke = response.data.value.joke;
        });

        function replaceJoke() {
            Jokes.getRandJoke().then(function(response){
                vm.joke = response.data.value.joke;
            });
        }
    }

})();