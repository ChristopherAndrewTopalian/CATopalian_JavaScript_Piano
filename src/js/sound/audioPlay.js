// audioPlay.js

function audioPlay(noteId, volume)
{
    let audioElement = ge(noteId);

    if (audioElement)
    {
        audioElement.volume = volume;
        audioElement.currentTime = 0.05;
        audioElement.play();
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

