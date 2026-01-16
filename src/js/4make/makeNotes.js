// makeNotes.js

function makeNotes(whichId, whichArray, whichX, whichY, whichOctave)
{
    let mainDiv = ce('div');
    mainDiv.style.padding = 1 + 'px';
    mainDiv.style.display = 'flex';
    mainDiv.style.flexDirection = 'row';
    mainDiv.style.gap = '1px';
    ba(mainDiv);

    //-//

    let subDiv = ce('div');
    subDiv.id = whichId;
    subDiv.style.width = '374px';
    subDiv.style.height = '30px';
    subDiv.style.border = 'solid 1px rgb(0, 200, 200)';
    subDiv.style.display = 'flex';             // Enable Flexbox
    subDiv.style.justifyContent = 'center';    // Center horizontally
    subDiv.style.alignItems = 'center';        // Center vertically

    mainDiv.append(subDiv);

    //-//

    // makeElementDraggable(subDiv);

    //-//

    for (let i = 0; i < whichArray.length; i++)
    {
        if (whichArray[i].octave == whichOctave)
        {
            let note = ce('div');
            note.id = whichArray[i].name;
            note.title = whichArray[i].name;
            note.style.position = 'absolute';
            note.style.left = whichX + 'px';
            note.style.width = 20 + 'px';
            note.style.height = 20 + 'px';
            note.style.border = 'solid 2px rgb(0, 0, 0)';
            note.onclick = function()
            {
                audioPlay(whichArray[i].name + '_note', 1.0);

                // change color back, for playSong feature
                setTimeout(function()
                {
                    ge(note.id).style.borderColor = 'black';
                }, 500);
            };

            //-//

            if (whichArray[i].name.length <= 3)
            {
                note.className = 'natural';
                note.textContent = whichArray[i].name;
            }
            else if (whichArray[i].name.length > 3)
            {
                note.className = 'sharp';

                note.textContent = whichArray[i].name.replace('sharp', '#');
            }
            subDiv.append(note);

            // move to the next note position
            whichX += 30;
        }
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

