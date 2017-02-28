// Ability to add new TODO items
// Ability to mark item as completed
// Ability to clear all completed items
// Ability to filter items by type
// Count items which are not marked as completed
// These are all the features that this application needs to work. 
const textDecoration = "text-decoration";
const lineThrough = "line-through";


var addItemForm = document.getElementById("addItemForm");

var TodoItems = (function () {
    var items = [];
    const ID = "id";
    const UNORDERED_LIST_ID = "#unorderedList";
    const SPAN = "span";

    function addItem() {
        var itemToAdd = createItem(document.getElementById("itemTodo").value);
        items.push(itemToAdd);
        addItemForm.reset();
        createList(items);
    };

    function createItem(inputItem) {
        return { id: null, name: inputItem, completed: false };
    }

    function markAsCompleted(item) {
        var itemCheckBox = document.getElementById(item.target.id);
        if (itemCheckBox.checked) {
            for (var x = 0; x < items.length; x++) {
                if (items[x][ID] == item.target.id) {
                    items[x].completed = true;
                    document.getElementById(SPAN + items[x][ID]).style
                        .setProperty(textDecoration, lineThrough);
                }
            }

        } else {
            for (var x = 0; x < items.length; x++) {
                if (items[x][ID] == item.target.id) {
                    items[x].completed = false;
                    document.getElementById(SPAN + items[x][ID]).
                        style.removeProperty(textDecoration, lineThrough);
                }
            }

        }

    }

    function removeCompleted() {
        items = items.filter(function (item) {
            return item.completed !== true;
        });

        $(UNORDERED_LIST_ID).empty();
        createList(items);
    }

    function createList(items) {
        $(UNORDERED_LIST_ID).empty();
        var unorderedList = document.getElementById("unorderedList");
        var id = 0;

        for (var x = 0; x < items.length; x++) {
            /** Increments id */
            id++;
            /** Assigns item id dinamicaly */
            items[x][ID] = "itemId" + id;
            /** Gets itemId for future actions */
            var itemId = items[x][ID];

            /** Creates unordered list element */
            var unorderedListItem = document.createElement("li");
            var span = document.createElement(SPAN);
            span.id = SPAN + itemId;

            if (items[x].completed == true) {
                span.style.setProperty(textDecoration, lineThrough);
            }

            /** Creates item checkbox with properties */
            var checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.id = itemId;
            checkbox.addEventListener("click", function (itemId) { markAsCompleted(itemId) }, false);


            unorderedListItem.appendChild(checkbox);
            span.appendChild(document.createTextNode(items[x]['name']));
            unorderedListItem.appendChild(span);
            unorderedList.appendChild(unorderedListItem);
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


