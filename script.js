let activityInpt = document.getElementById('activity');
let activityOutput = document.getElementById('activityOutput');
let addItemBtn = document.getElementById('addItemBtn');


addItemBtn.addEventListener('click', () => {
    let newActivity = activityInpt.value.trim();

    if (newActivity !== '') {
        let activity = document.createElement('li');
        activity.textContent = newActivity;


        let dltBtn = document.createElement('button');
        dltBtn.textContent = 'Delete';
        dltBtn.style.backgroundColor = 'red';
        dltBtn.style.color = 'white';
        dltBtn.style.marginLeft = '50px';
        dltBtn.style.marginTop = '5px';
        dltBtn.style.marginBottom = '10px';


        dltBtn.addEventListener('click', () => {
            activity.remove();
        });


        activity.appendChild(dltBtn);
        activityOutput.append(activity);
        activityInpt.value = '';
    }
});


activityInpt.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addItemBtn.click();
    }
});

