// whenLoaded.js

function whenLoaded()
{
    loadSounds(sounds);
    loadSounds(notes);

    makeRightContainer();

    makeScalesContainer();
        menuMajorScales();
        menuHarmonicMinorScales();

    makePlaySongButton();
    menuKeyboardControls();

    //-//

    keySensor = function(event)
    {
        whichKeyPressed(event);
    };
    window.addEventListener("keydown", keySensor, false);

    //-//

    makeNotes('octave8', notes, 20, 340, 8);
    makeNotes('octave7', notes, 20, 340, 7);
    makeNotes('octave6', notes, 20, 340, 6);
    makeNotes('octave5', notes, 20, 340, 5);
    makeNotes('octave4', notes, 20, 340, 4);
    makeNotes('octave3', notes, 20, 340, 3);
    makeNotes('octave2', notes, 20, 340, 2);
    makeNotes('octave1', notes, 20, 340, 1);

    //-//

    

    makeTitleOfApp();
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

