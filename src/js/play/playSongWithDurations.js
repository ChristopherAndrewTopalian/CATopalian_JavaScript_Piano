// playSongWithDurations.js

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
            let duration = currentNote.duration; // duration factor, e.g., 0.5 for 1/8 note

            console.log(note);

            if (note.startsWith("rest"))
            {
                // skip playing a sound for rest notes
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

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

