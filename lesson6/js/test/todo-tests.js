/**
 * Unit tests for TodoItems class.
 * @author Mintautas Kiulkys
 * @since 2/13/2017
 */

$( document ).ready(function() {
    var inputItem = document.getElementById("itemTodo").value;
    console.log( inputItem );
});
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
        Assert.false('Check if item is created!', result.completed);
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
    }

    function shouldremoveCompletedItems() {
        // given
        var arrayWithItems = [{name: "testRemove", completed: true}];

        // when
        var result = TodoItems.removeCompleted(arrayWithItems);

        // then
        console.log(result[0]);
        console.log(result);
    }
};