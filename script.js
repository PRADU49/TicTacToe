
// This function run/load every time when web content added

document.addEventListener("DOMContentLoaded", () => {
    const cells = document.querySelectorAll(".cell"); // Connect with cells
    const statusText = document.getElementById("status"); // Connect with status
    const restartBtn = document.getElementById("restart"); // Connect with restartBtn

    let currentPlayer = "X"; // Whose turn (X or O)
    let gameActive = true; // Stops play after win
    let board = ["", "", "", "", "", "", "", "", ""]; // Stores game state

    // Win paterns for founding how player win the games
    // All 8 possible ways to win
    const winPatterns = [
        [0, 1, 2], // Rows win 
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6], // Columns win
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8], // Daigoanals win
        [2, 4, 6]
    ];

    // Handleing clicks of both player or Runs when a player clicks a box
    function handleClick(e) {
        const index = e.target.dataset.index;

        // Stop invalid moves
        if (board[index] !== "" || !gameActive) return;

        // Store move
        board[index] = currentPlayer;
        e.target.textContent = currentPlayer;

        // Check result each time
        checkResult();
    }

    // Result checking
    function checkResult() {
        let win = false;

        // Finding paterns are same or not
        for (let pattern of winPatterns) {
            const [a, b, c] = pattern;

            if (
                board[a] &&
                board[a] === board[b] &&
                board[a] === board[c]
            ) {
                win = true;
                break;
            }
        }

        // Showing show is win
        if (win) {
            statusText.textContent = `Player ${currentPlayer} wins!`;
            gameActive = false;
            return;
        }

        // Showing drow if no patern finded
        if (!board.includes("")) {
            statusText.textContent = "It's a draw!";
            gameActive = false;
            return;
        }

        // Showing player turn
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        statusText.textContent = `Player ${currentPlayer}'s turn`;
    }

    // Restart game 
    function restartGame() {
        board = ["", "", "", "", "", "", "", "", ""];
        gameActive = true;
        currentPlayer = "X";
        statusText.textContent = "Player X's turn";
        cells.forEach(cell => cell.textContent = "");
    }

    // Function's for game
    cells.forEach(cell => cell.addEventListener("click", handleClick));
    restartBtn.addEventListener("click", restartGame);
});