// makeAOOPlayContainer.js

function makeAOOPlayContainer()
{
    let aooContainer = ce('div');
    aooContainer.id = 'aooContainer';
    aooContainer.style.position = 'absolute';
    aooContainer.style.left = '6px';
    aooContainer.style.top = '280px';
    aooContainer.style.border = 'solid 1px rgb(255, 255, 255)';
    aooContainer.style.width = '400px';
    aooContainer.style.height = '200px';
    ba(aooContainer);

    //let menuId = 'menuPlaySong';
    let menuId = 'aooPlayRecord';

    let mainDiv = ce('div');
    mainDiv.id = menuId;
    //mainDiv.style.position = 'absolute';
    //mainDiv.style.right = '0px';
    //mainDiv.style.top = 0 + 'px';
    ge('aooContainer').append(mainDiv);

    //-//

    let aooTextarea = ce('textarea');
    aooTextarea.id = 'aooTextarea';
    aooTextarea.value = JSON.stringify(beethovenOdeToJoyWithDurations);
    aooTextarea.style.width = '400px';
    aooTextarea.style.height = '100px';
    mainDiv.append(aooTextarea);

    //-//

    mainDiv.append(ce('br'));

    //-//

    let playAooButton = ce('button');
    playAooButton.textContent = 'Play';
    playAooButton.title = 'playAooButton';
    playAooButton.onclick = function()
    {
        playSongAooFromTextarea();
    };
    mainDiv.append(playAooButton);

    //-//

    // mainDiv.append(ce('hr'));
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

