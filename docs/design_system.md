# Tic Tac Toe Game System Design

**Author:** Eric Kwak, Kevin Yu
**Date:** June 19, 2024
**Version:** 1.0
**Status:** Final

# Design System 

This document outlines the design system for the project. 

## Fonts 

- **Primary Font:** Arial, sans-serif
is the primary font used in the Tic-Tac-Toe game. This font is chosen for its simplicity and readability, ensuring a clean and user-friendly interface.

## Colours 
The game employs a minimalist color scheme:
- **Background Colour:** `#87cefa` - A light sky blue that provides a light backdrop, vertically gradients to '#ffffff' for flexibility.
- **Board Colour:** `#ffffff` - White cells for a clean look.
- **Cell Border Colour:** `#000000` - Black borders to clearly define each cell.
- **Cell Hover Colour:** `#c9d3d3` - Gray hover color to focus cell hovering and create interaction.
- **Cell Hover Shadow:** `#465d6280` and inset color of `#519aac` - Light shadows to create intensity and indiciation. 
- **Player X Cell Colour:** `#90EE90` - Light green indicating Player X.
- **Player O Cell Colour:** `#FFFFE0` - Light yellow indicating Player O.
- **Winner Animation Colours:** Red, Green, Blue - Flashing colours to highlight the winning cells.

## Game Components - Board and Game Controls

### Board
The board consists of a, with each cell measuring 100px by 100px and a 5px gap between cells. Cells change colour based on the player (green for X, yellow for O) and feature a flashing animation for the winning combination.

### Header
![Header](assets/design_system/header.png)

- **Background Colour:** `#ffffff`
- **Text Colour:** `#000000`
- **Font Size:** 1.25rem
- **Alignment:** Center

### Footer
![Footer](assets/design_system/footer.png)

- **Background Colour:** `#87cefa`
- **Text Colour:** `#000000`
- **Font Size:** 1rem
- **Alignment:** Center

![Footer\(assets)]

**Additional Elements:**
- **Result Display:** Shows game outcomes, styled with a font size of 1.5rem.
- **Restart Button:** Allows players to reset the game, styled with padding and a cursor pointer for better interaction.
- **Counter:** Allows the player to see the score record between both player and computer.
- **Image:** Acts as a visual candy to create distinctnivenss to our page, has a width of 150px and relative auto sized height. 

### Game State Screenshots

### Start State
![Game Screenshot - Start](docs/assets/design_system/start.png)

### Player win State
![Game Screenshot - Player win](docs/assets/design_system/p.png)

### Computer win State
![Game Screenshot - computer win](docs/assets/design_system/c.png)

### Draw State
![Game Screenshot - Draw](docs/assets/design_system/d.png)
