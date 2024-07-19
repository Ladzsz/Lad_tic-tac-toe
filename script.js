//function to create gameboard

function Game() {

    //array to hold game position

    let gameboard = ['', '', '', '', '', '', '', '', ''];

    //creating the players

    function player1(P1name) {
        this.P1name = P1name;
    }

    function player2(P2name) {
        this.P2name = P2name;
    }

    //obtaining player names from user

        document.querySelector(".name_input").addEventListener("submit", function(event){
            event.preventDefault();
    
            var player1 = document.getElementById("player1").value;
    
            var player2 = document.getElementById("player2").value;
        });
    

    //function to create player move

    function playermove(position, symbol) {
        if (gameboard[position] === "") {
            gameboard[position] = symbol;
        } 
    }

    //function to determine winner 

    function checkWinner(gameBoard) {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],  
            [0, 3, 6], [1, 4, 7], [2, 5, 8],  
            [0, 4, 8], [2, 4, 6]              
        ];
        
        for (let i = 0; i < winningCombinations.length; i++) {
            const [a, b, c] = winningCombinations[i];
            if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
                return gameBoard[a]; 
            }
        }
        return null; 
    }
}

Game();