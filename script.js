//function to create gameboard

function Game() {

    //array to hold game position

    let gameboard = ['', '', '', '', '', '', '', '', ''];

    //tracking if game is active
    let gameActive = true;

    //creating the players

    function Player(name, symbol) {
        this.name = name;
        this.symbol = symbol;
    }

    // Track the current player
    let currentPlayer;
    let P1, P2;

    //obtaining player names from user

        document.querySelector(".name_input").addEventListener("submit", function(event){
            event.preventDefault();
            
            //making new player objects
            const player1 = document.getElementById("player1").value;
            const player2 = document.getElementById("player2").value;

            P1 = new Player(player1, "X");
            P2 = new Player(player2, "O");
            currentPlayer = P1;


            //resetting form and getting rid of input boxes
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

            //calling update display
            updateDisplay();
        });
    

    //function to render gameboard

    function rendergame() {

        //grabbing board
        let board = document.querySelector(".game_display");

        // Creating cells
        gameboard.forEach((item, index) => {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.index = index;
            cell.innerHTML = item;
            cell.addEventListener('click', handleCellClick);
            board.appendChild(cell);
        });
    } 
    
    //Function to handle cell clicks
    function handleCellClick(event) {
        if (!gameActive) return;
        const index = event.target.dataset.index;
        if (playermove(index, currentPlayer.symbol)) {
            event.target.innerHTML = currentPlayer.symbol;
            displayWinner();
            if (gameActive) {
                currentPlayer = currentPlayer === P1 ? P2 : P1;
                updateDisplay();
            }
        }
    }

    // Function to show current player name
    function updateDisplay() {
        let playerDisplay = document.querySelector('.display_player')
        playerDisplay.textContent = `Current player: ${currentPlayer.name}`;
    }
    
    //function to create player move

    function playermove(position, symbol) {
        if (gameboard[position] === "") {
            gameboard[position] = symbol;
            return true;
        } 
        return false;
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
        const results = document.querySelector(".results_display");
        if (winner) {
        document.querySelector('.display_player').style.display = "none";
        document.querySelector('.end_message').textContent = "Game is Done!";
        gameActive = false;
        results.innerHTML = `Congrats! ${winner} wins!`;
        

        //displaying tie
        } else if (gameboard.every(cell => cell !== '')) { 
        gameActive = false;
        let results = document.getElementsByClassName("results_display")[0];
        results.innerHTML = `It's a draw!`;
    }
}
}

//calling game
Game();