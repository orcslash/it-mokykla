// Ability to add new TODO items
// Ability to mark item as completed
// Ability to clear all completed items
// Ability to filter items by type
// Count items which are not marked as completed
// These are all the features that this application needs to work. 
    var TodoItems = (function() {
        var items = [];

        function addItem() {
            var itemToAdd = createItem(document.getElementById("itemTodo").value);
            items.push(itemToAdd);
            console.log(items[0]);
            return items;
        };

        function createItem(inputItem) {
            return {name: inputItem, completed: false};
        }

        function markAsCompleted(item) {
            item.completed = true;
            return item;
        }

        function removeCompleted(items) {
            for (var x = 0; x < items.length; x++) {
                    if (items[x].completed == true) {
                        delete items[x];
                    }
                }
            return items;
        }

        return {
            items: items,
            createItem: createItem,
            addItem: addItem,
            markAsCompleted: markAsCompleted,
            removeCompleted: removeCompleted
    }
}());

