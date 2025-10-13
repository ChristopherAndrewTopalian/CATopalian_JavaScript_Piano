// makeScalesContainer.js

function makeScalesContainer()
{
    let scalesContainer = ce('div');
    scalesContainer.id = 'scalesContainer';
    scalesContainer.style.display = 'flex';
    scalesContainer.style.flexDirection = 'column';
    scalesContainer.style.width = '450px';
    scalesContainer.style.height = '150px';
    scalesContainer.style.overflowY = 'scroll';
    ge('rightContainer').append(scalesContainer);

    //makeElementDraggable(scalesContainer);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

