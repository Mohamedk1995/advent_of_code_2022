const fs = require ("fs");

const lines = fs.readFileSync("input.txt","utf-8")
//remove whitespace
.trim()
//split onto newline to get array of strings
.split("\n")
.map((line) => line.split(" "));

//score for each move
const moves = {
    rock: 1, 
    paper: 2, 
    scissors: 3, 
};

const mapPlay = {
    A: moves.rock, 
    B: moves.paper,
    C: moves.scissors,
    X: moves.rock, 
    Y: moves.paper,
    Z: moves.scissors,
}

// If both players draw then game outcome = add 3
const points = (theirMove, ourMove) => {
    if (theirMove === ourMove) {
        return ourMove + 3
    }
// If we win, game outcome = add 6
    if (
        (theirMove === moves.rock && ourMove===moves.paper ) ||
        (theirMove === moves.paper && ourMove===moves.scissors ) ||
        (theirMove === moves.scissors && ourMove===moves.rock)
    ) {
        return ourMove + 6
    }

    // If we lose, game outcome = nothing
    return ourMove;

}

const secondPart = {
    A: {
        X: moves.scissors,
        Y: moves.rock,
        Z: moves.paper,
        },
    B: {
        X: moves.rock,
        Y: moves.paper,
        Z: moves.scissors,
        },
    C: {
        X: moves.paper,
        Z: moves.rock,
        Y: moves.scissors,
        }
}

const firstResults = lines.map((line) => {
    theirMove = mapPlay[line[0]];
    ourMove = mapPlay[line[1]];
    return points(theirMove, ourMove)
        })

const secondResults = lines.map((line) => {
    theirMove = mapPlay[line[0]];
    ourMove = secondPart[line[0]][line[1]];
    return points(theirMove, ourMove)
        })
        

totalScore1 = firstResults.reduce((a, b) => a + b, 0)
const firstResult = console.log("Part 1 = ", totalScore1);

totalScore2 = secondResults.reduce((a, b) => a + b, 0)
const secondResult = console.log("Part 2 = ", totalScore2);