 /*
* Using HTML, Bootstrap, and JavaScript create a single page website that contains the following:
* A Bootstrap styled table representing your choice of data.
* A Bootstrap styled form that allows a user to add a new row to the table when clicking on submit.
*/

/* What do I need?

My button... on click, add information to the table

How do I get information? - form <input> fields... and their .value()
Need: firstName, lastName, favoriteColor - store that in a variable 
Find a way to get the # value
Way to get values from the form ... when we submit... then append() the info to the table

so... we need to get values with : getElemenByID()
which means, we need ID's on our values
*/

const formButton = document.getElementById('formSubmit');

let number = 0

formButton.addEventListener('click', (event) => {
    event.preventDefault();

    // Get values from form inputs
    let firstNameValue = document.getElementById('firstName').value;
    let lastNameValue = document.getElementById('lastName').value;
    let favoriteColorValue = document.getElementById('favoriteColor').value;

    // Create a new row
    let newTableRow = document.createElement('tr');

    let numberNode = document.createElement('td')
    numberNode.innerHTML =
    newTableRow.append(numberNode)

    // Create table data cells
    let firstNameNode = document.createElement('td');
    firstNameNode.innerHTML = firstNameValue;
    newTableRow.appendChild(firstNameNode);

    let lastNameNode = document.createElement('td');
    lastNameNode.innerHTML = lastNameValue;
    newTableRow.appendChild(lastNameNode);

    let favoriteColorNode = document.createElement('td');
    favoriteColorNode.innerHTML = favoriteColorValue;
    newTableRow.appendChild(favoriteColorNode);

    // Append the new row to the table
    document.getElementById('tBody').appendChild(newTableRow);

    document.getElementById('firstName').value = ''
    document.getElementById('lastName').value = ''
    document.getElementById('favoriteColor').value = ''

    number++


});
