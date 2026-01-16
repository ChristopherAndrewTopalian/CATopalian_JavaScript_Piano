// color.js

function color(whichId, whichColor)
{
    let element = ge(whichId);

    if (element)
    {
        element.style.backgroundColor = whichColor;
    }
    else
    {
        console.log("Element with id " + whichId + " not found.");
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

