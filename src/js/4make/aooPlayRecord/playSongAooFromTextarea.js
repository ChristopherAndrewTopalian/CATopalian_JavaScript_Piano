// playSongAooFromTextarea.js

// plays notes from the textarea, expecting JSON array of objects
function playSongAooFromTextarea()
{
    let jsonString = ge('aooTextarea').value; // get JSON string from textbox
    
    let songArray;

    try
    {
        songArray = JSON.parse(jsonString); // parse JSON to array of objects
    }
    catch (e)
    {
        alert("Invalid JSON! Please make sure your array is correctly formatted.");
        return;
    }

    let index = 0;
    let baseTempo = 500; // base tempo in milliseconds for a quarter note

    // plays notes sequentially
    function playNotes()
    {
        if (index >= songArray.length)
        {
            return; // stop if no more notes
        }

        let currentNote = songArray[index];
        let note = currentNote.note; // e.g., 'e4' or 'rest'
        let durationFactor = currentNote.duration; // e.g., 0.25

        if (note.toLowerCase() === 'rest')
        {
            // rest: just wait
            setTimeout(function()
            {
                index++;
                playNotes(); // recurse for next note
            }, baseTempo * durationFactor);
        }
        else
        {
            // play the note (simulate click or synth)
            let noteElement = ge(note);

            if (noteElement)
            {
                noteElement.click(); // play
                noteElement.style.borderColor = 'aqua'; // highlight
            }
            setTimeout(function()
            {
                // remove highlight after delay
                if (noteElement)
                {
                    noteElement.style.borderColor = '';
                }
                index++;
                playNotes(); // recurse for next note
            }, baseTempo * durationFactor);
        }
    }

    // start the sequence
    playNotes();
}

//----//

// alternative version below that works
/*
// plays notes from the textarea, expecting JSON array of objects
function playSongAooFromTextarea()
{
    let jsonString = ge('aooTextarea').value; // get JSON string from textbox
    
    let songArray;

    try
    {
        songArray = JSON.parse(jsonString); // parse JSON to array of objects
    }
    catch (e)
    {
        alert("Invalid JSON! Please make sure your array is correctly formatted.");
        return;
    }

    let index = 0;
    let baseTempo = 500; // base tempo in milliseconds for a quarter note

    // define an async function to play notes sequentially
    async function playNotes()
    {
        while (index < songArray.length)
        {
            let currentNote = songArray[index];
            let note = currentNote.note; // e.g., 'e4' or 'rest'
            let durationFactor = currentNote.duration; // e.g., 0.25

            if (note.toLowerCase() === 'rest') {
                // rest: just wait
                await new Promise(res => setTimeout(res, baseTempo * durationFactor));
            }
            else
            {
                // play the note (simulate click or synth)
                let noteElement = ge(note);

                if (noteElement)
                {
                    noteElement.click(); // play
                    noteElement.style.borderColor = 'aqua'; // highlight
                    // keep highlight for the duration
                }
                await new Promise(res => setTimeout(res, baseTempo * durationFactor));

                // remove highlight after
                if (noteElement)
                {
                    noteElement.style.borderColor = '';
                }
            }
            index++;
        }
    }

    playNotes(); // start playing
}
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

