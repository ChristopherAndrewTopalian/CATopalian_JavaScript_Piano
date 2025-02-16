// menuHarmonicMinorScales.js

function menuHarmonicMinorScales()
{
    let theId = 'harmonicMinorScales';

    //-//

    let mainDiv = ce("div");
    mainDiv.id = theId;
    mainDiv.style.position = "absolute";
    mainDiv.style.right = 265 +'px';
    mainDiv.style.top = 20 + 'px';
    mainDiv.style.width = 150 + 'px';
    mainDiv.style.height = '150px';
    mainDiv.style.zIndex = '3';
    mainDiv.style.overflowY = 'scroll';
    mainDiv.style.display = 'flex';
    mainDiv.style.flexDirection = 'column';
    mainDiv.style.resize = 'both';
    ba(mainDiv);

    makeElementDraggable(mainDiv);

    //-//

    let subDiv = ce('div');
    subDiv.textContent = 'Harmonic Minor';
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
        colorScale7(aHarmonicMinorScale);
    };
    subDiv.append(aButton);

    //-//

    let asharpButton = ce('button');
    asharpButton.id = 'asharpButton';
    asharpButton.textContent = 'A# ';
    asharpButton.onclick = function()
    {
        clearScales();
        colorScale7(asharpHarmonicMinorScale);
    };
    subDiv.append(asharpButton);

    //-//

    let bButton = ce('button');
    bButton.textContent = 'B ';
    bButton.onclick = function()
    {
        clearScales();
        colorScale7(bHarmonicMinorScale);
    };
    subDiv.append(bButton);

    //-//

    let cButton = ce('button');
    cButton.id = 'cButton';
    cButton.textContent = 'C ';
    cButton.onclick = function()
    {
        clearScales();
        colorScale7(cHarmonicMinorScale);
    };
    subDiv.append(cButton);

    //-//

    let csharpButton = ce('button');
    csharpButton.textContent = 'C# ';
    csharpButton.onclick = function()
    {
        clearScales();
        colorScale7(csharpHarmonicMinorScale);
    };
    subDiv.append(csharpButton);

    //-//

    let dButton = ce('button');
    dButton.textContent = 'D ';
    dButton.onclick = function()
    {
        clearScales();
        colorScale7(dHarmonicMinorScale);
    };
    subDiv.append(dButton);

    //-//

    let dsharpButton = ce('button');
    dsharpButton.textContent = 'D#';
    dsharpButton.onclick = function()
    {
        clearScales();
        colorScale7(dsharpHarmonicMinorScale);
    };
    subDiv.append(dsharpButton);

    //-//

    let eButton = ce('button');
    eButton.textContent = 'E ';
    eButton.onclick = function()
    {
        clearScales();
        colorScale7(eHarmonicMinorScale);
    };
    subDiv.append(eButton);

    //-//

    let fButton = ce('button');
    fButton.textContent = 'F ';
    fButton.onclick = function()
    {
        clearScales();
        colorScale7(fHarmonicMinorScale);
    };
    subDiv.append(fButton);

    //-//

    let fsharpButton = ce('button');
    fsharpButton.textContent = 'F# ';
    fsharpButton.onclick = function()
    {
        clearScales();
        colorScale7(fsharpHarmonicMinorScale);
    };
    subDiv.append(fsharpButton);

    //-//

    let gButton = ce('button');
    gButton.textContent = 'G ';
    gButton.onclick = function()
    {
        clearScales();
        colorScale7(gHarmonicMinorScale);
    };
    subDiv.append(gButton);

    //-//

    let gsharpButton = ce('button');
    gsharpButton.textContent = 'G# ';
    gsharpButton.onclick = function()
    {
        clearScales();
        colorScale7(gsharpHarmonicMinorScale);
    };
    subDiv.append(gsharpButton);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

