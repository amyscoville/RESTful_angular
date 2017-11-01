(function(){
    angular
    .module('Restful')
    .controller('toDoListController', toDoListCtrl);

    function toDoListCtrl(Item) {
        var vm = this;

        vm.listArr = [];
        vm.title = '';
        vm.description = '';
        vm.addItem = addItem;
        vm.remove = remove;
        vm.editMode = null;
        vm.setEdit = setEdit;
        vm.currentItem = {};
        vm.saveEdit = saveEdit;

        Item.list().then(function(response){
            vm.listArr = response.data;
            
        });

        function addItem() {
            Item.add(vm.title, vm.description).then(function(response){
                vm.listArr.push(response);
                vm.title = '';
                vm.description = '';
            });
        };

        function remove(itemId) {
            Item.remove(itemId).then(function(response){
                for(var i = 0; i < vm.listArr.length; i++) {
                    if(vm.listArr[i].id === itemId) {
                        vm.listArr.splice(i,1);
                    }
                }
            });
        }

        function setEdit(itemId) {
            vm.editMode = itemId;
        }

        function saveEdit(itemId) {
            vm.currentItem.id = itemId;
            Item.update(vm.currentItem).then(function(response){
                for (var i = 0; i < vm.listArr.length; i++) {
                    if (vm.listArr[i].id === itemId) {
                        vm.listArr[i] = response;
                    }
                }
                vm.currentItem = {};
                vm.editMode = null;
            });
        }
    }
})();

//bound function declarations
//bound values
//bound function implementations
//helper functions