//function to create gameboard

function Game() {

    //array to hold game position

    let gameboard = ['', '', '', '', '', '', '', '', ''];

    //creating the players

    function Player(name, symbol) {
        this.name = name;
        this.symbol = symbol;
    }

    //obtaining player names from user

        document.querySelector(".name_input").addEventListener("submit", function(event){
            event.preventDefault();
    
            const player1 = document.getElementById("player1").value;
            const player2 = document.getElementById("player2").value;

            const P1 = new Player(player1, "X");
            const P2 = new Player(player2, "O");
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

    //function to display winner

    function displayWinner() {
        const winner = checkWinner(gameboard);
        if (winner) {
        let results = document.getElementsByClassName("results_display");
        results.innerHTML = `Congrats! ${winner} wins!`;
    }
}
}

Game();