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
}

Game();