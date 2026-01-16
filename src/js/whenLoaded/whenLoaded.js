// whenLoaded.js

function whenLoaded()
{
    loadSounds(sounds);
    loadSounds(notes);

    ba(makeTitleOfApp());

    makeAOOPlayContainer();

    makeRightContainer();

    makeScalesContainer()

        makeScaleContainer('MajorDiatonic');
            makeScaleButton(aMajorScale, 'MajorDiatonic');

            makeScaleButton(asharpMajorScale, 'MajorDiatonic');

            makeScaleButton(bMajorScale, 'MajorDiatonic');

            makeScaleButton(cMajorScale, 'MajorDiatonic');

            makeScaleButton(csharpMajorScale, 'MajorDiatonic');

            makeScaleButton(dMajorScale, 'MajorDiatonic');

            makeScaleButton(dsharpMajorScale, 'MajorDiatonic');

            makeScaleButton(eMajorScale, 'MajorDiatonic');

            makeScaleButton(fMajorScale, 'MajorDiatonic');

            makeScaleButton(fsharpMajorScale, 'MajorDiatonic');

            makeScaleButton(gMajorScale, 'MajorDiatonic');

            makeScaleButton(gsharpMajorScale, 'MajorDiatonic');

        //-//

        // MinorDiatonic
    makeScaleContainer('MinorDiatonic', 670, 50);
        makeScaleButton(aMinorScale, 'MinorDiatonic');
        makeScaleButton(aSharpMinorScale, 'MinorDiatonic');
        makeScaleButton(bMinorScale, 'MinorDiatonic');
        makeScaleButton(cMinorScale, 'MinorDiatonic');
        makeScaleButton(cSharpMinorScale, 'MinorDiatonic');
        makeScaleButton(dMinorScale, 'MinorDiatonic');
        makeScaleButton(dSharpMinorScale, 'MinorDiatonic');
        makeScaleButton(eMinorScale, 'MinorDiatonic');
        makeScaleButton(fMinorScale, 'MinorDiatonic');
        makeScaleButton(fSharpMinorScale, 'MinorDiatonic');
        makeScaleButton(gMinorScale, 'MinorDiatonic');
        makeScaleButton(gSharpMinorScale, 'MinorDiatonic');

    //-//

    // HarmonicMinor
    makeScaleContainer('HarmonicMinor', 765, 50);
        makeScaleButton(aHarmonicMinorScale, 'HarmonicMinor');
        makeScaleButton(asharpHarmonicMinorScale, 'HarmonicMinor');
        makeScaleButton(bHarmonicMinorScale, 'HarmonicMinor');
        makeScaleButton(cHarmonicMinorScale, 'HarmonicMinor');
        makeScaleButton(csharpHarmonicMinorScale, 'HarmonicMinor');
        makeScaleButton(dHarmonicMinorScale, 'HarmonicMinor');
        makeScaleButton(dsharpHarmonicMinorScale, 'HarmonicMinor');
        makeScaleButton(eHarmonicMinorScale, 'HarmonicMinor');
        makeScaleButton(fHarmonicMinorScale, 'HarmonicMinor');
        makeScaleButton(fsharpMajorScale, 'HarmonicMinor');
        makeScaleButton(gHarmonicMinorScale, 'HarmonicMinor');
        makeScaleButton(gsharpHarmonicMinorScale, 'HarmonicMinor');

    //-//

    // MelodicMinor
    makeScaleContainer('MelodicMinor', 870, 50);
        makeScaleButton(aMelodicMinor, 'MelodicMinor');
        makeScaleButton(aSharpMelodicMinor, 'MelodicMinor');
        makeScaleButton(bMelodicMinor, 'MelodicMinor');
        makeScaleButton(cMelodicMinor, 'MelodicMinor');
        makeScaleButton(cSharpMelodicMinor, 'MelodicMinor');
        makeScaleButton(dMelodicMinor, 'MelodicMinor');
        makeScaleButton(dSharpMelodicMinor, 'MelodicMinor');
        makeScaleButton(eMelodicMinor, 'MelodicMinor');
        makeScaleButton(fMelodicMinor, 'MelodicMinor');
        makeScaleButton(fSharpMelodicMinor, 'MelodicMinor');
        makeScaleButton(gMelodicMinor, 'MelodicMinor');
        makeScaleButton(gSharpMelodicMinor, 'MelodicMinor');

    //-//

    // Phrygian
    makeScaleContainer('Phrygian', 960, 50);
        makeScaleButton(aPhrygian, 'Phrygian');
        makeScaleButton(aSharpPhrygian, 'Phrygian');
        makeScaleButton(bPhrygian, 'Phrygian');
        makeScaleButton(cPhrygian, 'Phrygian');
        makeScaleButton(cSharpPhrygian, 'Phrygian');
        makeScaleButton(dPhrygian, 'Phrygian');
        makeScaleButton(dSharpPhrygian, 'Phrygian');
        makeScaleButton(ePhrygian, 'Phrygian');
        makeScaleButton(fPhrygian, 'Phrygian');
        makeScaleButton(fSharpPhrygian, 'Phrygian');
        makeScaleButton(gPhrygian, 'Phrygian');
        makeScaleButton(gSharpPhrygian, 'Phrygian');

    //-//

    // PhrygianDominant
    makeScaleContainer('PhrygianDominant', 960, 50);
        makeScaleButton(aPhrygianDominant, 'PhrygianDominant');
        makeScaleButton(aSharpPhrygianDominant, 'PhrygianDominant');
        makeScaleButton(bPhrygianDominant, 'PhrygianDominant');
        makeScaleButton(cPhrygianDominant, 'PhrygianDominant');
        makeScaleButton(cSharpPhrygianDominant, 'PhrygianDominant');
        makeScaleButton(dPhrygianDominant, 'PhrygianDominant');
        makeScaleButton(dSharpPhrygian, 'PhrygianDominant');
        makeScaleButton(ePhrygianDominant, 'PhrygianDominant');
        makeScaleButton(fPhrygianDominant, 'PhrygianDominant');
        makeScaleButton(fSharpPhrygianDominant, 'PhrygianDominant');
        makeScaleButton(gPhrygianDominant, 'PhrygianDominant');
        makeScaleButton(gSharpPhrygianDominant, 'PhrygianDominant');

    //-//

    // HungarianMinor
    makeScaleContainer('HungarianMinor', 960, 50);
        makeScaleButton(aHungarianMinor, 'HungarianMinor');
        makeScaleButton(aSharpHungarianMinor, 'HungarianMinor');
        makeScaleButton(bHungarianMinor, 'HungarianMinor');
        makeScaleButton(cHungarianMinor, 'HungarianMinor');
        makeScaleButton(cSharpHungarianMinor, 'HungarianMinor');
        makeScaleButton(dHungarianMinor, 'HungarianMinor');
        makeScaleButton(dSharpHungarianMinor, 'HungarianMinor');
        makeScaleButton(eHungarianMinor, 'HungarianMinor');
        makeScaleButton(fHungarianMinor, 'HungarianMinor');
        makeScaleButton(fSharpHungarianMinor, 'HungarianMinor');
        makeScaleButton(gHungarianMinor, 'HungarianMinor');
        makeScaleButton(gSharpHungarianMinor, 'HungarianMinor');

    //-//

    // Locrian
    makeScaleContainer('Locrian', 960, 50);
        makeScaleButton(aLocrian, 'Locrian');
        makeScaleButton(aSharpLocrian, 'Locrian');
        makeScaleButton(bLocrian, 'Locrian');
        makeScaleButton(cLocrian, 'Locrian');
        makeScaleButton(cSharpLocrian, 'Locrian');
        makeScaleButton(dLocrian, 'Locrian');
        makeScaleButton(dSharpLocrian, 'Locrian');
        makeScaleButton(eLocrian, 'Locrian');
        makeScaleButton(fLocrian, 'Locrian');
        makeScaleButton(fSharpLocrian, 'Locrian');
        makeScaleButton(gLocrian, 'Locrian');
        makeScaleButton(gSharpLocrian, 'Locrian');

    //----//

    makePlaySongButton();
    menuKeyboardControls();

    //-//

    // this is the bottom traditional piano layout
    makePiano(notes);

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
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

