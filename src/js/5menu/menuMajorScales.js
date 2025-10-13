// menuMajorScales.js

function menuMajorScales()
{
    let theId = 'menuScales';

    //-//

    let mainDiv = ce("div");
    mainDiv.id = theId;
    //mainDiv.style.position = "absolute";
    //mainDiv.style.right = 265 +'px';
    //mainDiv.style.top = 200 + 'px';
    mainDiv.style.width = 250 + 'px';
    mainDiv.style.height = '150px';
    mainDiv.style.zIndex = '3';
    //mainDiv.style.overflowY = 'scroll';
    mainDiv.style.display = 'flex';
    mainDiv.style.flexDirection = 'column';
    //mainDiv.style.resize = 'both';
    ge('scalesContainer').append(mainDiv);

    makeElementDraggable(mainDiv);

    //-//

    let subDiv = ce('div');
    subDiv.textContent = 'Major';
    subDiv.style.color = 'rgb(255, 255, 255)';
    mainDiv.append(subDiv);

    //-//

    subDiv.append(ce('br'));

    //-//

    let aButton = ce('button');
    aButton.textContent = 'A';
    aButton.onclick = function()
    {
        clearScales();
        colorScale7(aMajorScale);
    };
    subDiv.append(aButton);

    //-//

    let asharpButton = ce('button');
    asharpButton.textContent = 'A# ';
    asharpButton.onclick = function()
    {
        clearScales();
        colorScale7(asharpMajorScale);
    };
    subDiv.append(asharpButton);

    //-//

    let bButton = ce('button');
    bButton.textContent = 'B ';
    bButton.onclick = function()
    {
        clearScales();
        colorScale7(bMajorScale);
    };
    subDiv.append(bButton);

    //-//

    let cButton = ce('button');
    cButton.textContent = 'C ';
    cButton.onclick = function()
    {
        clearScales();
        colorScale7(cMajorScale);
    };
    subDiv.append(cButton);

    //-//

    let csharpButton = ce('button');
    csharpButton.textContent = 'C# ';
    csharpButton.onclick = function()
    {
        clearScales();
        colorScale7(csharpMajorScale);
    };
    subDiv.append(csharpButton);

    //-//

    let dButton = ce('button');
    dButton.textContent = 'D';
    dButton.onclick = function()
    {
        clearScales();
        colorScale7(dMajorScale);
    };
    subDiv.append(dButton);

    //-//

    let dsharpButton = ce('button');
    dsharpButton.textContent = 'D#';
    dsharpButton.onclick = function()
    {
        clearScales();
        colorScale7(dsharpMajorScale);
    };
    subDiv.append(dsharpButton);

    //-//

    let eButton = ce('button');
    eButton.textContent = 'E ';
    eButton.onclick = function()
    {
        clearScales();
        colorScale7(eMajorScale);
    };
    subDiv.append(eButton);

    //-//

    let fButton = ce('button');
    fButton.textContent = 'F ';
    fButton.onclick = function()
    {
        clearScales();
        colorScale7(fMajorScale);
    };
    subDiv.append(fButton);

    //-//

    let fsharpButton = ce('button');
    fsharpButton.textContent = 'F# ';
    fsharpButton.onclick = function()
    {
        clearScales();
        colorScale7(fsharpMajorScale);
    };
    subDiv.append(fsharpButton);

    //-//

    let gButton = ce('button');
    gButton.textContent = 'G ';
    gButton.onclick = function()
    {
        clearScales();
        colorScale7(gMajorScale);
    };
    subDiv.append(gButton);

    //-//

    let gsharpButton = ce('button');
    gsharpButton.textContent = 'G# ';
    gsharpButton.onclick = function()
    {
        clearScales();
        colorScale7(gsharpMajorScale);
    };
    subDiv.append(gsharpButton);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

