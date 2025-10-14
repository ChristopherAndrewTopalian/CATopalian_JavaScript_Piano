// menuKeyboardControls.js

function menuKeyboardControls()
{
    let menuId = 'menuKeyboardControls';

    let mainDiv = ce("div");
    mainDiv.id = menuId;
    //mainDiv.style.position = "absolute";
    //mainDiv.style.right = 240 +'px';
    //mainDiv.style.top = 370 + 'px';
    mainDiv.style.width = 180 + 'px';
    //mainDiv.style.height = '150px';
    mainDiv.style.zIndex = '3';
    //mainDiv.style.overflowY = 'scroll';
    mainDiv.style.display = 'flex';
    mainDiv.style.flexDirection = 'column';
    //mainDiv.style.resize = 'both';
    ge('rightContainer').append(mainDiv);

    let addListenButton = ce('button');
    addListenButton.textContent = 'Keyboard Controls ON';
    addListenButton.onclick = function()
    {
        //enableKeyboardInput();
        window.addEventListener("keydown", keySensor, false);
    };
    mainDiv.append(addListenButton);

    //-//

    let removeListenButton = ce('button');
    removeListenButton.textContent = 'Keyboard Controls OFF';
    removeListenButton.onclick = function()
    {
        //disableKeyboardInput();
        window.removeEventListener("keydown", keySensor, false);
    };
    mainDiv.append(removeListenButton);

    mainDiv.append(ce('hr'));
}

function enableKeyboardInput()
{
    // window.addEventListener("keydown", keySensor, false);
}

function disableKeyboardInput()
{
    //window.removeEventListener("keydown", keySensor, false);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

