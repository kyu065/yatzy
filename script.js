document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("game-board");
    const cells = document.querySelectorAll(".cell");
    const restartButton = document.getElementById("restart");
    const resultDiv = document.getElementById("result");
    let currentPlayer = "X";
    let boardState = Array(9).fill(null);

    function displayResult(message) {
        resultDiv.textContent = message;
    }

    function handleClick(event) {
        const index = event.target.dataset.index;
        if (!boardState[index]) {
            boardState[index] = currentPlayer;
            event.target.textContent = currentPlayer;
            event.target.classList.add(currentPlayer.toLowerCase());
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }

    function resetGame() {
        boardState = Array(9).fill(null);
        cells.forEach(cell => {
            cell.textContent = "";
            cell.className = "cell";
        });
        currentPlayer = "X";
        displayResult("");
    }

    cells.forEach(cell => cell.addEventListener("click", handleClick));
    restartButton.addEventListener("click", resetGame);
});
