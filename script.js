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

const formButton = document.getElementById('formSubmit')

formButton.addEventListener('click', (event) =>{
    event.preventDefault()
    console.log('pls work')

})