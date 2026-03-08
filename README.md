## Author & Play Link

**Author:** Developer Pradu  
**Play the game:** https://pradu49.github.io/TicTacToe/

---

# Tic Tac Toe Game (HTML, CSS, JavaScript)

This project is a simple Tic Tac Toe game built using HTML, CSS, and JavaScript. It is designed for beginners who want to understand how a small game works in the browser using basic web technologies. The game runs entirely on the client side and does not require any external libraries or frameworks.

---

## Project Description

Tic Tac Toe is a two-player game played on a 3×3 grid. Players take turns placing their symbol, X or O, into empty cells. The objective is to be the first player to get three of the same symbols in a row. The row can be horizontal, vertical, or diagonal. If all cells are filled and no player achieves this condition, the game ends in a draw.

This project demonstrates how HTML is used to create the structure of the board, CSS is used to style and layout the game, and JavaScript is used to control the game logic and interactions.

---

## File Structure

The project consists of four main files. The `index.html` file contains the structure of the game, including the grid, status message, and restart button. The `style.css` file controls the appearance of the game, such as layout, colors, spacing, and hover effects. The `script.js` file contains all the logic that makes the game interactive. The `README.md` file explains how the project works and how to understand the code.

---

## How the Game Works

When the page loads, JavaScript waits until all HTML elements are available. It then selects all the game cells, the status text, and the restart button. A variable keeps track of the current player, starting with X. Another variable ensures the game stops once a win or draw is detected. The game board is stored in an array with nine positions, each corresponding to one cell on the grid.

Each cell has an index from 0 to 8. This index matches the position in the board array. When a player clicks a cell, the program checks whether the cell is empty and whether the game is still active. If the move is valid, the player’s symbol is placed in the cell and stored in the board array.

---

## Win and Draw Logic

After every move, the game checks for a win. There are eight possible winning combinations in Tic Tac Toe. These combinations are stored in an array and checked one by one. If any combination contains three matching symbols, the current player is declared the winner and the game stops.

If no winning combination is found and the board array has no empty spaces left, the game is declared a draw. This ensures the game always ends correctly.

---

## Restart Functionality

The restart button allows the player to reset the game without reloading the page. When clicked, it clears the board array, removes all symbols from the grid, resets the current player to X, and enables the game again. This makes it easy to play multiple rounds.

---

## Key Features

- Turn-based gameplay  
- Win detection for all possible cases  
- Draw detection  
- Restart button  
- Clean and beginner-friendly code  
- No external libraries required  

---

## Learning Outcome

By working with this project, you learn how to manipulate the DOM, handle user events, manage game state using arrays, and apply conditional logic in JavaScript. This project is a strong foundation for building more advanced browser-based games in the future.

---