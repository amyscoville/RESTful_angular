(function(){
    angular
    .module('Restful')
    .controller('jokesController', jokesCtrl);

    function jokesCtrl(Jokes,randJoke) {
        var vm = this;

        vm.getJoke = getJoke;
        vm.joke = randJoke;
        vm.decodeHtml = decodeHtml;

        function getJoke() {
            Jokes.getRandJoke().then(function(response){
                var jokeText = decodeHtml(response.joke);
                vm.joke = jokeText;
            });
        }

        function decodeHtml(html) {
            var txt = document.createElement("textarea");
            txt.innerHTML = html;
            return txt.value;
        }
    }
})();

