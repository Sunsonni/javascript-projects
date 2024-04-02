const input = require('readline-sync');
let characterToDrawShapes = '#';
characterToDrawShapes = input.question(`Input a character to draw shapes with: \n`);
console.log(makeLine(6, characterToDrawShapes));

function makeLine(size, characterToDrawShapes) {
    let line = '';
    for(let i = 0; i < size; i++) {
        line += characterToDrawShapes;
    }
    return line;
}
// console.log(makeLine(6));

function makeSquare(sizeSquare) {
  let squareShape = '';
  squareShape = makeRectangle(sizeSquare,sizeSquare);
  return squareShape;
}
// console.log(makeSquare(7));

function makeRectangle(width, height) {
    let rectangleShape = '';
    for (let k = 0; k < height; k++){
        if(k === height - 1) {
            rectangleShape += makeLine(width,characterToDrawShapes);
        } else {
            rectangleShape += makeLine(width,characterToDrawShapes) + "\n";
        }
    }
    return rectangleShape;
}
// console.log(makeRectangle(8,3));

function makeDownStairs(height) {
    let downstairsShape = '';
    for (let l = 1; l < height+1; l++){
        if(l === height) {
            downstairsShape += makeLine(l,characterToDrawShapes);
        } else {
            downstairsShape += makeLine(l,characterToDrawShapes) + "\n";
        }
    }
    return downstairsShape;
}
// console.log(makeDownStairs(8));

function makeSpaceLine(numSpaces, numChars) {
    let spacedLine = '';
    for(let m = 0; m < numSpaces; m++) {
        spacedLine += ' ';
    }
    spacedLine += makeLine(numChars,characterToDrawShapes) + spacedLine;
    return spacedLine;
}
// console.log(makeSpaceLine(2,5));

function makeIsocelesTriangle(height) {
    let triangleShape = '';
    for (let n = 0; n < height; n++) {
        if(n === height-1) {
            triangleShape += makeSpaceLine(height-n-1, 2*n+1);
        } else {
            triangleShape += makeSpaceLine(height-n-1, 2*n+1) + "\n"; 
        }

    }
    return triangleShape;
}
// console.log(makeIsocelesTriangle(5));

function makeDiamond(height) {
    let diamondShape = '';
    diamondShape += makeIsocelesTriangle(height) + '\n' + reverse(makeIsocelesTriangle(height));
    return diamondShape;
}
console.log(makeDiamond(5));


function reverse(str) {
    let reversed = '';

    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }
    return reversed;
}

