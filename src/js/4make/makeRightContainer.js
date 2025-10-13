// makeRightContainer.js

function makeRightContainer()
{
    let rightContainer = ce('div');
    rightContainer.id = 'rightContainer';
    rightContainer.style.position = 'absolute';
    rightContainer.style.left = '450px';
    rightContainer.style.top = '20px';
    rightContainer.style.display = 'flex';
    rightContainer.style.flexDirection = 'column';
    rightContainer.style.width = '200px';
    rightContainer.style.height = '600px';
    ba(rightContainer);
}