// Ability to add new TODO items
// Ability to mark item as completed
// Ability to clear all completed items
// Ability to filter items by type
// Count items which are not marked as completed
// These are all the features that this application needs to work. 
    var TodoItems = (function() {
        var items = [];

        function createItem(name) {
            return {name: name, completed: false};
        }

        function addItem(item) {
            items.push(item);
            return items;
        };

        function markAsCompleted(item) {
            item.completed = true;
            return item;
        }

        function removeCompleted(items) {
            var itemToRemove = null;
            var x;
            for (x = 0; x < items.length; x++) {
                    if (items[x].completed == true) {
                        delete items[x];
                    }
                }
        }

        return {
            items: items,
            createItem: createItem,
            addItem: addItem,
            markAsCompleted: markAsCompleted,
            removeCompleted: removeCompleted
    }
}());

/**
 * Unit tests for TodoItems class.
 * @author Mintautas Kiulkys
 * @since 2/13/2017
 */
function TodoItemsTest() {
    shouldCreateItem();
    shouldAddItem();
    shouldMarkItemAsCompleted();
    shouldremoveCompletedItems();

    function shouldCreateItem() {
        // given
        var itemName = 'itemName';

        // when
        var result = TodoItems.createItem(itemName);

        // then
        // TODO write assert for string checks
        Assert.false('Check if item is completed.', result.completed);
    };

    function shouldAddItem() {
        // given
        var item = TodoItems.createItem('itemName');
        var itemList = [];
        itemList.push(item);

        // when
        var result = TodoItems.addItem(item);
        
        // then
        Assert.arrays('Arrays should be the same', itemList, result);
    }

    function shouldMarkItemAsCompleted() {
        // given
        var item = TodoItems.createItem('itemName');

        // when
        var result = TodoItems.markAsCompleted(item);

        // then
        Assert.true('Task should be completed', result.completed);
        console.log(result);
    }

    function shouldremoveCompletedItems() {
        // given
        var emptyArray = [];
        var arrayWithItems = TodoItems.items;
        console.log(arrayWithItems);

        // when
        var result = TodoItems.removeCompleted(arrayWithItems);

        // then
        Assert.arrays('Array should be empty', emptyArray, result);
    }
};