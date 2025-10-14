// makeScalesContainer.js

function makeScalesContainer()
{
    let scalesContainer = ce('div');
    scalesContainer.id = 'scalesContainer';
    scalesContainer.style.position = 'absolute';
    scalesContainer.style.left = '580px';
    scalesContainer.style.top = '30px';
    scalesContainer.style.display = 'flex';
    scalesContainer.style.flexDirection = 'row';
    scalesContainer.style.overflowX = 'scroll';
    scalesContainer.style.width = '170px';
    ba(scalesContainer);

    makeElementDraggable(scalesContainer);
}

function makeScaleContainer(whichName, whichX, whichY)
{
    let mainDiv = ce('div');
    mainDiv.id = whichName;
    mainDiv.style.display = 'flex';
    mainDiv.style.flexDirection = 'column';
    //mainDiv.style.position = 'absolute';
    //mainDiv.style.left = whichX;
    //mainDiv.style.top = whichY
    mainDiv.style.height = 270 + 'px';
    mainDiv.style.overflowY = 'scroll';
    mainDiv.textContent = whichName;
    mainDiv.style.fontSize = '12px';
    mainDiv.style.fontWeight = 'bold';
    mainDiv.style.color = 'rgb(255, 255, 255)';
    mainDiv.style.textAlign = 'center';
    mainDiv.style.zIndex = 3000;
    mainDiv.style.flexShrink = 0; // prevent shrinking 
    mainDiv.style.flexGrow = 0; // prevent growing
    ge('scalesContainer').append(mainDiv);

    //makeElementDraggable(mainDiv);
}

function makeScaleButton(whichScale, whichContainer)
{
    let theButton = ce('button');
    theButton.textContent = whichScale[0].toUpperCase();
    theButton.style.fontSize = '12px';
    theButton.title = whichScale;
    theButton.onmouseover = function()
    {
        // hoverSound();
    };
    theButton.onclick = function()
    {
        // clickSound();

        // colorNotesDefault();

        // ge('chosenScale').textContent = whichContainer + ' - ' + whichScale;

        // colorTheScale(whichScale);

        clearScales();
        colorScale7(whichScale);

    };
    ge(whichContainer).append(theButton);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

