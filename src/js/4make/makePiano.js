// makePiano.js

function makePiano(whichArray)
{
    let naturalContainer = ce('div');
    naturalContainer.style.height = '50px';
    naturalContainer.style.border = 'solid 1px rgb(255, 255, 255)';
    naturalContainer.style.position = 'absolute';
    naturalContainer.style.left = '0px';
    naturalContainer.style.bottom = '-150px';
    naturalContainer.style.display = 'flex';
    naturalContainer.style.flexDirection = 'row';
    naturalContainer.style.overflowX = 'scroll';
    ba(naturalContainer);

    //-//

    let sharpContainer = ce('div');
    sharpContainer.style.height = '50px';
    sharpContainer.style.border = 'solid 1px rgb(255, 255, 255)';
    sharpContainer.style.position = 'absolute';
    sharpContainer.style.left = '0px';
    sharpContainer.style.bottom = '-100px';
    sharpContainer.style.display = 'flex';
    sharpContainer.style.flexDirection = 'row';
    ba(sharpContainer);

    //-//

    for(let i = 0; i < whichArray.length; i++)
    {
        if (whichArray[i].type == 'natural')
        {
            let naturalNote = ce('div');
            naturalNote.textContent = whichArray[i].name2;
            naturalNote.className = 'pianoNatural';
            naturalNote.onclick = function()
            {
                audioPlay(whichArray[i].name2 + '_note', 1.0);
            };
            naturalContainer.append(naturalNote);
        }
    }

    //-//

    let csharp1Note = ce('div');
    csharp1Note.textContent = 'C#1';
    csharp1Note.className = 'pianoSharp';
    csharp1Note.style.position = 'relative';
    csharp1Note.style.left = '10px';
    csharp1Note.onclick = function()
    {
        audioPlay('csharp1_note', 1.0);
    };
    sharpContainer.append(csharp1Note);

    //-//

    let dsharp1Note = ce('div');
    dsharp1Note.textContent = 'D#1';
    dsharp1Note.className = 'pianoSharp';
    dsharp1Note.style.position = 'relative';
    dsharp1Note.style.left = '10px';
    dsharp1Note.onclick = function()
    {
        audioPlay('dsharp1_note', 1.0);
    };
    sharpContainer.append(dsharp1Note);

    //-//

    let fsharp1Note = ce('div');
    fsharp1Note.textContent = 'F#1';
    fsharp1Note.className = 'pianoSharp';
    fsharp1Note.style.position = 'relative';
    fsharp1Note.style.left = '30px';
    fsharp1Note.onclick = function()
    {
        audioPlay('fsharp1_note', 1.0);
    };
    sharpContainer.append(fsharp1Note);

    //-//

    let gsharp1Note = ce('div');
    gsharp1Note.textContent = 'G#1';
    gsharp1Note.className = 'pianoSharp';
    gsharp1Note.style.position = 'relative';
    gsharp1Note.style.left = '30px';
    gsharp1Note.onclick = function()
    {
        audioPlay('gsharp1_note', 1.0);
    };
    sharpContainer.append(gsharp1Note);

    //-//

    let asharp1Note = ce('div');
    asharp1Note.textContent = 'A#1';
    asharp1Note.className = 'pianoSharp';
    asharp1Note.style.position = 'relative';
    asharp1Note.style.left = '30px';
    asharp1Note.onclick = function()
    {
        audioPlay('asharp1_note', 1.0);
    };
    sharpContainer.append(asharp1Note);

    //-----------------------//

    let csharp2Note = ce('div');
    csharp2Note.textContent = 'C#2';
    csharp2Note.className = 'pianoSharp';
    csharp2Note.style.position = 'relative';
    csharp2Note.style.left = '52px';
    csharp2Note.onclick = function()
    {
        audioPlay('csharp2_note', 1.0);
    };
    sharpContainer.append(csharp2Note);

    //-//

    let dsharp2Note = ce('div');
    dsharp2Note.textContent = 'D#2';
    dsharp2Note.className = 'pianoSharp';
    dsharp2Note.style.position = 'relative';
    dsharp2Note.style.left = '52px';
    dsharp2Note.onclick = function()
    {
        audioPlay('dsharp2_note', 1.0);
    };
    sharpContainer.append(dsharp2Note);

    //-//

    let fsharp2Note = ce('div');
    fsharp2Note.textContent = 'F#2';
    fsharp2Note.className = 'pianoSharp';
    fsharp2Note.style.position = 'relative';
    fsharp2Note.style.left = '72px';
    fsharp2Note.onclick = function()
    {
        audioPlay('fsharp2_note', 1.0);
    };
    sharpContainer.append(fsharp2Note);

    //-//

    let gsharp2Note = ce('div');
    gsharp2Note.textContent = 'G#2';
    gsharp2Note.className = 'pianoSharp';
    gsharp2Note.style.position = 'relative';
    gsharp2Note.style.left = '72px';
    gsharp2Note.onclick = function()
    {
        audioPlay('gsharp2_note', 1.0);
    };
    sharpContainer.append(gsharp2Note);

    //-//

    let asharp2Note = ce('div');
    asharp2Note.textContent = 'A#2';
    asharp2Note.className = 'pianoSharp';
    asharp2Note.style.position = 'relative';
    asharp2Note.style.left = '72px';
    asharp2Note.onclick = function()
    {
        audioPlay('asharp2_note', 1.0);
    };
    sharpContainer.append(asharp2Note);

    //-----------------------//

    let csharp3Note = ce('div');
    csharp3Note.textContent = 'C#3';
    csharp3Note.className = 'pianoSharp';
    csharp3Note.style.position = 'relative';
    csharp3Note.style.left = '94px';
    csharp3Note.onclick = function()
    {
        audioPlay('csharp3_note', 1.0);
    };
    sharpContainer.append(csharp3Note);

    //-//

    let dsharp3Note = ce('div');
    dsharp3Note.textContent = 'D#3';
    dsharp3Note.className = 'pianoSharp';
    dsharp3Note.style.position = 'relative';
    dsharp3Note.style.left = '94px';
    dsharp3Note.onclick = function()
    {
        audioPlay('dsharp3_note', 1.0);
    };
    sharpContainer.append(dsharp3Note);

    //-//

    let fsharp3Note = ce('div');
    fsharp3Note.textContent = 'F#3';
    fsharp3Note.className = 'pianoSharp';
    fsharp3Note.style.position = 'relative';
    fsharp3Note.style.left = '114px';
    fsharp3Note.onclick = function()
    {
        audioPlay('fsharp3_note', 1.0);
    };
    sharpContainer.append(fsharp3Note);

    //-//

    let gsharp3Note = ce('div');
    gsharp3Note.textContent = 'G#3';
    gsharp3Note.className = 'pianoSharp';
    gsharp3Note.style.position = 'relative';
    gsharp3Note.style.left = '114px';
    gsharp3Note.onclick = function()
    {
        audioPlay('gsharp3_note', 1.0);
    };
    sharpContainer.append(gsharp3Note);

    //-//

    let asharp3Note = ce('div');
    asharp3Note.textContent = 'A#3';
    asharp3Note.className = 'pianoSharp';
    asharp3Note.style.position = 'relative';
    asharp3Note.style.left = '114px';
    asharp3Note.onclick = function()
    {
        audioPlay('asharp3_note', 1.0);
    };
    sharpContainer.append(asharp3Note);

    //-----------------------//

    let csharp4Note = ce('div');
    csharp4Note.textContent = 'C#4';
    csharp4Note.className = 'pianoSharp';
    csharp4Note.style.position = 'relative';
    csharp4Note.style.left = '136px';
    csharp4Note.onclick = function()
    {
        audioPlay('csharp4_note', 1.0);
    };
    sharpContainer.append(csharp4Note);

    //-//

    let dsharp4Note = ce('div');
    dsharp4Note.textContent = 'D#4';
    dsharp4Note.className = 'pianoSharp';
    dsharp4Note.style.position = 'relative';
    dsharp4Note.style.left = '136px';
    dsharp4Note.onclick = function()
    {
        audioPlay('dsharp4_note', 1.0);
    };
    sharpContainer.append(dsharp4Note);

    //-//

    let fsharp4Note = ce('div');
    fsharp4Note.textContent = 'F#4';
    fsharp4Note.className = 'pianoSharp';
    fsharp4Note.style.position = 'relative';
    fsharp4Note.style.left = '156px';
    fsharp4Note.onclick = function()
    {
        audioPlay('fsharp4_note', 1.0);
    };
    sharpContainer.append(fsharp4Note);

    //-//

    let gsharp4Note = ce('div');
    gsharp4Note.textContent = 'G#4';
    gsharp4Note.className = 'pianoSharp';
    gsharp4Note.style.position = 'relative';
    gsharp4Note.style.left = '156px';
    gsharp4Note.onclick = function()
    {
        audioPlay('gsharp4_note', 1.0);
    };
    sharpContainer.append(gsharp4Note);

    //-//

    let asharp4Note = ce('div');
    asharp4Note.textContent = 'A#4';
    asharp4Note.className = 'pianoSharp';
    asharp4Note.style.position = 'relative';
    asharp4Note.style.left = '156px';
    asharp4Note.onclick = function()
    {
        audioPlay('asharp4_note', 1.0);
    };
    sharpContainer.append(asharp4Note);

    //-----------------------//

    let csharp5Note = ce('div');
    csharp5Note.textContent = 'C#5';
    csharp5Note.className = 'pianoSharp';
    csharp5Note.style.position = 'relative';
    csharp5Note.style.left = '178px';
    csharp5Note.onclick = function()
    {
        audioPlay('csharp5_note', 1.0);
    };
    sharpContainer.append(csharp5Note);

    //-//

    let dsharp5Note = ce('div');
    dsharp5Note.textContent = 'D#5';
    dsharp5Note.className = 'pianoSharp';
    dsharp5Note.style.position = 'relative';
    dsharp5Note.style.left = '178px';
    dsharp5Note.onclick = function()
    {
        audioPlay('dsharp5_note', 1.0);
    };
    sharpContainer.append(dsharp5Note);

    //-//

    let fsharp5Note = ce('div');
    fsharp5Note.textContent = 'F#5';
    fsharp5Note.className = 'pianoSharp';
    fsharp5Note.style.position = 'relative';
    fsharp5Note.style.left = '198px';
    fsharp5Note.onclick = function()
    {
        audioPlay('fsharp5_note', 1.0);
    };
    sharpContainer.append(fsharp5Note);

    //-//

    let gsharp5Note = ce('div');
    gsharp5Note.textContent = 'G#5';
    gsharp5Note.className = 'pianoSharp';
    gsharp5Note.style.position = 'relative';
    gsharp5Note.style.left = '198px';
    gsharp5Note.onclick = function()
    {
        audioPlay('gsharp5_note', 1.0);
    };
    sharpContainer.append(gsharp5Note);

    //-//

    let asharp5Note = ce('div');
    asharp5Note.textContent = 'A#5';
    asharp5Note.className = 'pianoSharp';
    asharp5Note.style.position = 'relative';
    asharp5Note.style.left = '198px';
    asharp5Note.onclick = function()
    {
        audioPlay('asharp5_note', 1.0);
    };
    sharpContainer.append(asharp5Note);

    //-----------------------//

    let csharp6Note = ce('div');
    csharp6Note.textContent = 'C#6';
    csharp6Note.className = 'pianoSharp';
    csharp6Note.style.position = 'relative';
    csharp6Note.style.left = '220px';
    csharp6Note.onclick = function()
    {
        audioPlay('csharp6_note', 1.0);
    };
    sharpContainer.append(csharp6Note);

    //-//

    let dsharp6Note = ce('div');
    dsharp6Note.textContent = 'D#6';
    dsharp6Note.className = 'pianoSharp';
    dsharp6Note.style.position = 'relative';
    dsharp6Note.style.left = '220px';
    dsharp6Note.onclick = function()
    {
        audioPlay('dsharp6_note', 1.0);
    };
    sharpContainer.append(dsharp6Note);

    //-//

    let fsharp6Note = ce('div');
    fsharp6Note.textContent = 'F#6';
    fsharp6Note.className = 'pianoSharp';
    fsharp6Note.style.position = 'relative';
    fsharp6Note.style.left = '240px';
    fsharp6Note.onclick = function()
    {
        audioPlay('fsharp6_note', 1.0);
    };
    sharpContainer.append(fsharp6Note);

    //-//

    let gsharp6Note = ce('div');
    gsharp6Note.textContent = 'G#6';
    gsharp6Note.className = 'pianoSharp';
    gsharp6Note.style.position = 'relative';
    gsharp6Note.style.left = '240px';
    gsharp6Note.onclick = function()
    {
        audioPlay('gsharp6_note', 1.0);
    };
    sharpContainer.append(gsharp6Note);

    //-//

    let asharp6Note = ce('div');
    asharp6Note.textContent = 'A#6';
    asharp6Note.className = 'pianoSharp';
    asharp6Note.style.position = 'relative';
    asharp6Note.style.left = '240px';
    asharp6Note.onclick = function()
    {
        audioPlay('asharp6_note', 1.0);
    };
    sharpContainer.append(asharp6Note);

    //-----------------------//

    let csharp7Note = ce('div');
    csharp7Note.textContent = 'C#7';
    csharp7Note.className = 'pianoSharp';
    csharp7Note.style.position = 'relative';
    csharp7Note.style.left = '262px';
    csharp7Note.onclick = function()
    {
        audioPlay('csharp7_note', 1.0);
    };
    sharpContainer.append(csharp7Note);

    //-//

    let dsharp7Note = ce('div');
    dsharp7Note.textContent = 'D#7';
    dsharp7Note.className = 'pianoSharp';
    dsharp7Note.style.position = 'relative';
    dsharp7Note.style.left = '262px';
    dsharp7Note.onclick = function()
    {
        audioPlay('dsharp7_note', 1.0);
    };
    sharpContainer.append(dsharp7Note);

    //-//

    let fsharp7Note = ce('div');
    fsharp7Note.textContent = 'F#7';
    fsharp7Note.className = 'pianoSharp';
    fsharp7Note.style.position = 'relative';
    fsharp7Note.style.left = '282px';
    fsharp7Note.onclick = function()
    {
        audioPlay('fsharp7_note', 1.0);
    };
    sharpContainer.append(fsharp7Note);

    //-//

    let gsharp7Note = ce('div');
    gsharp7Note.textContent = 'G#7';
    gsharp7Note.className = 'pianoSharp';
    gsharp7Note.style.position = 'relative';
    gsharp7Note.style.left = '282px';
    gsharp7Note.onclick = function()
    {
        audioPlay('gsharp7_note', 1.0);
    };
    sharpContainer.append(gsharp7Note);

    //-//

    let asharp7Note = ce('div');
    asharp7Note.textContent = 'A#7';
    asharp7Note.className = 'pianoSharp';
    asharp7Note.style.position = 'relative';
    asharp7Note.style.left = '282px';
    asharp7Note.onclick = function()
    {
        audioPlay('asharp7_note', 1.0);
    };
    sharpContainer.append(asharp7Note);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

