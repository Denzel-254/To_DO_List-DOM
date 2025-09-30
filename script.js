let activityInpt = document.getElementById('activity');
let activityOutput = document.getElementById('activityOutput');
let addItemBtn = document.getElementById('addItemBtn');
let bulkRemoveBtn = document.getElementById('rmvBtn');


addItemBtn.addEventListener('click', () => {
    let newActivity = activityInpt.value.trim();

    if (newActivity !== '') {
        let activity = document.createElement('li');
        activity.textContent = newActivity;

        // Adding a delete button
        let dltBtn = document.createElement('button');
        dltBtn.textContent = 'Delete';
        dltBtn.style.backgroundColor = 'red';
        dltBtn.style.color = 'white';
        dltBtn.style.marginLeft = '50px';
        dltBtn.style.marginTop = '5px';
        dltBtn.style.marginBottom = '10px';

        // Adding a complete button
        let compltBtn = document.createElement('button');
        compltBtn.textContent = 'Complete';
        compltBtn.style.backgroundColor = 'green';
        compltBtn.style.color = 'white';
        compltBtn.style.marginLeft = '50px';
        compltBtn.style.marginTop = '5px';
        compltBtn.style.marginBottom = '10px';


        // Addind event listener to the complete button
        compltBtn.addEventListener('click', () => {
            activity.style.textDecoration = 'line-through';
        });


        // Adding the event listener to the delete button
        dltBtn.addEventListener('click', () => {
            activity.remove();
        });

        // Appending the activity and buttons
        activity.appendChild(dltBtn);
        activity.appendChild(compltBtn);
        activityOutput.append(activity);
        activityInpt.value = '';
    }
});


// Event listener for the enter button
activityInpt.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addItemBtn.click();
    }
});


// Creating function for bulk complete

function bulkComplete() {
    activityOutput.style.textDecoration = 'line-through';
};

//Event listener for bulk remove button
bulkRemoveBtn.addEventListener('click', bulkComplete);

