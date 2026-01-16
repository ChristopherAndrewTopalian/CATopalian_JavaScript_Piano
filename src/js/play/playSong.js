// playSong.js

let song001 = ['c1', 'd1', 'e1', 'f1', 'g1', 'a1', 'b1', 'c2'];

function playSong(whichArray)
{
    let tempo = 500; // Base tempo (for quarter note)
    let index = 0;

    function playNextNoteCallback()
    {
        if (index < whichArray.length)
        {
            let currentNote = whichArray[index];

            // check if it's a rest note
            if (currentNote.startsWith("rest"))
            {
                // get duration of rest
                // such as rest-1
                let restDuration = parseInt(currentNote.split("-")[1]);
                setTimeout(function()
                {
                    index++;
                    playNextNoteCallback();
                    // call next note after rest duration
                }, restDuration * tempo);
            }
            else
            {
                // play actual note
                // simulate a click to play the note
                ge(currentNote).click();

                ge(currentNote).style.borderColor = highlight;

                index++;
                setTimeout(playNextNoteCallback, tempo);
                
                // move to the next note after the regular tempo delay
            }
        }
    }

    // start playing the song
    playNextNoteCallback();
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

