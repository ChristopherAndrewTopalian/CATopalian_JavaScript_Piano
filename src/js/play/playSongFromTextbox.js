// playSongFromTextbox.js

function playSongWithDurations(songArray)
{
    let index = 0;
    let tempo = 500; // base tempo for a quarter note (in ms)

    function playNextNote()
    {
        if (index < songArray.length)
        {
            let currentNote = songArray[index];
            let note = currentNote.note;
            let duration = currentNote.duration; // duration factor, e.g., 0.25 for 1/16 note

            console.log(note);

            if (note.startsWith("rest"))
            {
                setTimeout(playNextNote, tempo * duration); // wait for rest duration
            } 
            else
            {
                ge(note).click(); // play the note
                ge(note).style.borderColor = highlight; // visual feedback

                setTimeout(playNextNote, tempo * duration); // wait for note duration
            }

            index++;
        }
    }

    playNextNote();
}

function playSongFromTextbox()
{
    let theArray = ge('songOneTextbox').value;

    let whichArray = theArray.split(',');

    console.log(whichArray);

    let tempo = 500; // 500ms interval

    let index = 0;

    let playNextNote = setInterval(function()
    {
        if (index < whichArray.length)
        {
            console.log(whichArray[index]);

            // audioPlay(whichArray[index] + '_note', 1.0);
            ge(whichArray[index]).click();

            ge(whichArray[index]).style.borderColor = highlight;

            index++;
        }
        else
        {
            clearInterval(playNextNote);
        }
    }, tempo);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

