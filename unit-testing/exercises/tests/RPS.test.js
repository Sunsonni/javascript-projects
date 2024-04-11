const RPS = require('../RPS.js');

describe("RPS", function(){
    test("Outputs 'TIE!' when responses are equal", function(){
        let results = RPS('paper', 'paper');
        expect(results).toBe('TIE!');
    });

    test("Outputs 'Player 2 wins!' when P1 = rock & P2 = paper", function(){
        let results = RPS('rock', 'paper');
        expect(results).toBe('Player 2 wins!');
    });

    test("Outputs 'Player 2 wins!' when P1 = paper & P2 = scissors", function(){
        let results = RPS('paper', 'scissors');
        expect(results).toBe('Player 2 wins!');
    });

    test("Outputs 'Player 2 wins!' when P1 = scissors & P2 = rock", function(){
        let results = RPS('scissors', 'rock');
        expect(results).toBe('Player 2 wins!');
    });

    test("Outputs 'Player 1 wins!' when P1 = rock & P2 = scissors", function(){
        let results = RPS('rock', 'scissors');
        expect(results).toBe('Player 1 wins!');
    });
    
    test("Returns -1 if P1 is not passed rock, paper, or scissors.", function(){
        let results = RPS('apple', 'scissors');
        expect(results).toBe(-1);
    });

    test("Returns -1 if P2 is not passed rock, paper, or scissors.", function(){
        let results = RPS('rock', 'cheese');
        expect(results).toBe(-1);
    });

});