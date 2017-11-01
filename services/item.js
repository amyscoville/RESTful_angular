(function(){
    angular
    .module('Restful')
    .factory('Item', item);

    function item($http) {
        var service = {
            list: list,
            add: add,
            remove: remove,
            update: update
        };
        return service;

        function list() {
            return $http.get('http://secret-escarpment-99471.herokuapp.com/item');
        }

        function add(titleVal, descriptionVal) {
            return $http.post('http://secret-escarpment-99471.herokuapp.com/item', {'title': titleVal, 'description': descriptionVal})
            .then(function(response) {
                return {
                    id: response.data,
                    title: titleVal,
                    description: descriptionVal
                };
            });
        }

        function remove(id) {
            return $http.delete('http://secret-escarpment-99471.herokuapp.com/item/' + id);
        }

        function update(currentItem) {
            return $http.put('http://secret-escarpment-99471.herokuapp.com/item/' + currentItem.id, {'title': currentItem.title, 'description': currentItem.description})
            .then(function(response) {
                return {
                    id: currentItem.id,
                    title: currentItem.title,
                    description: currentItem.description 
                };
            });
        }
    }
})();