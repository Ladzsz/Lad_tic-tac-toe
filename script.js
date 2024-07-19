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
            
            //making new player objects
            const player1 = document.getElementById("player1").value;
            const player2 = document.getElementById("player2").value;

            const P1 = new Player(player1, "X");
            const P2 = new Player(player2, "O");


            //resetting form 
            event.target.reset();

            const inputArea = document.querySelector(".name_input");
            inputArea.style.display = "none";

            //displaying player names and styling
            const currentp1 = document.querySelector(".player1");
            const currentp2 = document.querySelector(".player2");
            
            currentp1.style.fontWeight = 'bold';
            currentp1.style.fontSize = '1.3em';

            currentp2.style.fontWeight = 'bold';
            currentp2.style.fontSize = '1.3em';

            currentp1.innerHTML = `Player 1: ${P1.name}`;
            currentp2.innerHTML = `Player 2: ${P2.name}`;


            //calling render
            rendergame();
        });
    

    //function to render gameboard

    function rendergame() {

        //grabbing board
        let board = document.querySelector(".game_display");

        //creating cells
        gameboard.forEach(item => {
            
            if (item === "") {
              const cell = document.createElement('div');
              cell.classList.add('cell');
              board.appendChild(cell);
            }
          });
    }    

    
    //function to create player move

    function playermove(position, symbol) {
        if (gameboard[position] === "") {
            gameboard[position] = symbol;
        } 
    }

    //function to determine winner 

    function checkWinner(gameBoard) {
        //creating winning combos
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],  
            [0, 3, 6], [1, 4, 7], [2, 5, 8],  
            [0, 4, 8], [2, 4, 6]              
        ];
        
        //creating win logic
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
        // displaying the winner
        const winner = checkWinner(gameboard);
        if (winner) {
        let results = document.getElementsByClassName("results_display");
        results.innerHTML = `Congrats! ${winner} wins!`;
    }
}
}

//calling game
Game();