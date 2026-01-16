// whichKeyPressed.js

function clickColor(whichId)
{
    ge(whichId).click();

    ge(whichId).style.borderColor = highlight;

    setTimeout(function()
    {
        ge(whichId).style.borderColor = sharp;
    }, 500);
}

let controlFlag = 1;

function whichKeyPressed(event)
{
    let level1 = 1;
    let level2 = 2;
    let level3 = 3;
    let level4 = 4;

    if (controlFlag == 1)
    {
        level1 = 1;
        level2 = 2;
        level3 = 3;
        level4 = 4;
    }

    else if (controlFlag == 2)
    {
        level1 = 4;
        level2 = 5;
        level3 = 6;
        level4 = 7;
    }

    /*
    else if(controlFlag == 3)
    {
        level1 = 3;
        level2 = 4;
        level3 = 5;
        level4 = 6;
    }

    else if(controlFlag == 4)
    {
        level1 = 4;
        level2 = 5;
        level3 = 6;
        level4 = 7;
    }

    else if(controlFlag == 5)
    {
        level1 = 5;
        level2 = 6;
        level3 = 7;
        level4 = 8;
    }
    */

    event.preventDefault();

    if (event.code === 'ShiftLeft')
    {
        clickColor('c' + level1);
    }

    else if (event.code === 'KeyZ')
    {
        clickColor('csharp' + level1);
    }

    else if (event.code === 'KeyX')
    {
        clickColor('d' + level1);
    }

    else if (event.code === 'KeyC')
    {
        clickColor('dsharp' + level1);
    }

    else if (event.code === 'KeyV')
    {
        clickColor('e' + level1);
    }
    else if (event.code === 'KeyB')
    {
        clickColor('f' + level1);
    }
    else if (event.code === 'KeyN')
    {
        clickColor('fsharp' + level1);
    }
    else if (event.code === 'KeyM')
    {
        clickColor('g' + level1);
    }
    else if (event.code === 'Comma')
    {
        clickColor('gsharp' + level1);
    }
    else if (event.code === 'Period') // slash
    {
        clickColor('a' + level1);
    }
    else if (event.code === 'Slash') // slash
    {
        clickColor('asharp' + level1);
    }

    else if (event.code === 'ShiftRight')
    {
        clickColor('b' + level1);
    }

    //-//

    else if (event.code === 'CapsLock')
    {
        clickColor('c' + level2);
    }

    else if (event.code === 'KeyA')
    {
        clickColor('csharp' + level2);
    }

    else if (event.code === 'KeyS')
    {
        clickColor('d' + level2);
    }

    else if (event.code === 'KeyD')
    {
        clickColor('dsharp' + level2);
    }

    else if (event.code === 'KeyF')
    {
        clickColor('e' + level2);
    }

    else if (event.code === 'KeyG')
    {
        clickColor('f' + level2);
    }

    else if (event.code === 'KeyH')
    {
        clickColor('fsharp' + level2);
    }

    else if (event.code === 'KeyJ')
    {
        clickColor('g' + level2);
    }

    else if (event.code === 'KeyK')
    {
        clickColor('gsharp' + level2);
    }

    else if (event.code === 'KeyL')
    {
        clickColor('a' + level2);
    }

    else if (event.code === 'Semicolon')
    {
        clickColor('asharp' + level2);
    }

    else if (event.code === 'Quote')
    {
        clickColor('b' + level2);
    }

    //-//

    else if (event.code === 'Tab')
    {
        clickColor('c' + level3);
    }

    else if (event.code === 'KeyQ')
    {
        clickColor('csharp' + level3);
    }

    else if (event.code === 'KeyW')
    {
        clickColor('d' + level3);
    }

    else if (event.code === 'KeyE')
    {
        clickColor('dsharp' + level3);
    }

    else if (event.code === 'KeyR')
    {
        clickColor('e' + level3);
    }

    else if (event.code === 'KeyT')
    {
        clickColor('f' + level3);
    }

    else if (event.code === 'KeyY')
    {
        clickColor('fsharp' + level3);
    }

    else if (event.code === 'KeyU')
    {
        clickColor('g' + level3);
    }

    else if (event.code === 'KeyI')
    {
        clickColor('gsharp' + level3);
    }

    else if (event.code === 'KeyO')
    {
        clickColor('a' + level3);
    }

    else if (event.code === 'KeyP')
    {
        clickColor('asharp' + level3);
    }

    else if (event.code === 'BracketLeft')
    {
        clickColor('b' + level3);
    }

    //-//

    else if (event.code === 'Backquote') // ~
    {
        clickColor('c' + level4);
    }

    else if (event.code === 'Digit1')
    {
        clickColor('csharp' + level4);
    }

    else if (event.code === 'Digit2')
    {
        clickColor('d' + level4);
    }

    else if (event.code === 'Digit3')
    {
        clickColor('dsharp' + level4);
    }

    else if (event.code === 'Digit4')
    {
        clickColor('e' + level4);
    }

    else if (event.code === 'Digit5')
    {
        clickColor('f' + level4);
    }

    else if (event.code === 'Digit6')
    {
        clickColor('fsharp' + level4);
    }

    else if (event.code === 'Digit7')
    {
        clickColor('g' + level4);
    }

    else if (event.code === 'Digit8')
    {
        clickColor('gsharp' + level4);
    }

    else if (event.code === 'Digit9')
    {
        clickColor('a' + level4);
    }

    else if (event.code === 'Digit0')
    {
        clickColor('asharp' + level4);
    }

    else if (event.code === 'Minus')
    {
        clickColor('b' + level4);
    }

    //-//

    else if (event.code === 'ArrowUp')
    {
        if (controlFlag < 2)
        {
            controlFlag += 1;
        }
    }

    else if (event.code === 'ArrowDown')
    {
        if (controlFlag > 1)
        {
            controlFlag -= 1;
        }
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

