// makePlaySongButton.js

function makePlaySongButton()
{
    let menuId = 'menuPlaySong';

    let mainDiv = ce('div');
    mainDiv.id = menuId;
    mainDiv.style.position = 'absolute';
    mainDiv.style.right = '0px';
    mainDiv.style.top = 0 + 'px';
    ba(mainDiv);

    //-//

    let songOneTextbox = ce('textarea');
    songOneTextbox.type = 'text';
    songOneTextbox.id = 'songOneTextbox';
    songOneTextbox.value = song001;
    songOneTextbox.style.fontSize = '20px';
    mainDiv.append(songOneTextbox);

    //-//

    mainDiv.append(ce('br'));

    //-//

    let songPlayButton = ce('button');
    songPlayButton.textContent = 'Song Play';
    songPlayButton.title = 'songPlayButton';
    songPlayButton.onclick = function()
    {
        playSongFromTextbox();
    };
    mainDiv.append(songPlayButton);

    //-//

    mainDiv.append(ce('br'));
    mainDiv.append(ce('br'));
    mainDiv.append(ce('hr'));

    //-//

    let songButton001 = ce('button');
    songButton001.textContent = 'Song001';
    songButton001.title = 'songButton001';
    songButton001.onclick = function()
    {
        console.log('test');
        playSong(song001);
    };
    mainDiv.append(songButton001);

    //-//

    mainDiv.append(ce('br'));
    mainDiv.append(ce('br'));

    mainDiv.append(ce('hr'));

    //-//

    let odeToJoyText = ce('textarea');
    odeToJoyText.id = 'OdeToJoyText';
    odeToJoyText.value = JSON.stringify(beethovenOdeToJoyWithDurations);
    mainDiv.append(odeToJoyText);

    //-//

    mainDiv.append(ce('br'));

    //-//

    let odeToJoyButton = ce('button');
    odeToJoyButton.textContent = 'Ode To Joy';
    odeToJoyButton.title = 'odeToJoyButton';
    odeToJoyButton.onclick = function()
    {
        //playSong(beethovenOdeToJoy);
        playSongWithDurations(beethovenOdeToJoyWithDurations);
    };
    mainDiv.append(odeToJoyButton);

    //-//

    mainDiv.append(ce('br'));
    mainDiv.append(ce('br'));

    mainDiv.append(ce('hr'));
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

