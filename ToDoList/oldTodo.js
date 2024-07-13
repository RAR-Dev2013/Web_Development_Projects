//TO DO LIST//
//Clean up prompt message

let counter = 0;

let toDoList = [];

//While loop
while(true) {
    //First prompt
    let msg = prompt("Welcome to your todo list, instructions below:\n \"new\" adds to arraylist.\n \"list\" shows all to do's in list.\n \"edit\" will edit a specific item.\n \"delete\" will delete a specific to do.\n \"quit\" will end the program");

    if (msg.toLowerCase() === "new") {
        //Adds new item to the ToDoList
        let newToDo = prompt("Add your To Do list item.")
        toDoList.push(newToDo); 
        console.log("The list includes" + toDoList)

    } else if (msg.toLowerCase() === "list") {
        //Shows all to do's in list
        for (let toDo of toDoList) {
            console.log(toDo);
            continue;
        }

    } else if (msg.toLowerCase() === "edit") {
        //Shows all to do's in list
        for (let toDo of toDoList) {
            let items = JSON.stringify(toDo);
        }

        let editToDo = prompt(`Which to-do item do you want to edit?`);
        let replaceToDo = prompt("What item would you like instead");

        //find indexof
        let editedItem = toDoList.indexOf(editToDo);
        console.log(editedItem)

        //add indexof to splice
        const removed = toDoList.splice(editedItem, 1, replaceToDo);

        console.log(toDoList);

    } else if (msg.toLowerCase() === "delete") {
        //removes specific todo from arraybased on text
        let deleteToDo = prompt("Enter the to-do item that you want deleted.")

        //TODO: Add a question to user, "Are you sure?"

        //prints out list
        for (let toDo of toDoList) {
            console.log(toDo);
        }

        //find indexof
        let deletedItem = toDoList.indexOf(deleteToDo);
        console.log(deletedItem)

        //add indexof to splice
        const removed = toDoList.splice(deletedItem, 1);

        //prints out list again
        for (let toDo of toDoList) {
            console.log(toDo);
        }
        break;
        
    } else if (msg.toLowerCase() === "quit") {
        let confirmation = prompt("Are you sure you want to quit this game? Y or N")
        if (confirmation === 'y') {
            break;
        } else if (confirmation === 'n') {
            continue;
        } else {
            console.log("Please enter the correct response.")
        }


    } else {
        alert("You have not added a correct instruction.");
        continue;
    }
}