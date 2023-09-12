<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Color Matching Game</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f0f0f0;
        }
        .game-container {
            display: flex;
            flex-wrap: wrap;
            width: 300px;
        }
        .tile {
            width: 60px;
            height: 60px;
            margin: 5px;
            cursor: pointer;
            border: 1px solid #333;
            transition: background-color 0.3s ease;
        }
    </style>
</head>
<body>
    <div class="game-container" id="game-container"></div>
    <script>
        const colors = ["red", "blue", "green", "yellow", "purple"];
        let selectedColor = null;
        let matchedPairs = 0;

        function createTile(color) {
            const tile = document.createElement("div");
            tile.className = "tile";
            tile.style.backgroundColor = color;

            tile.addEventListener("click", () => {
                if (!selectedColor) {
                    selectedColor = color;
                    tile.style.opacity = "0.7";
                } else {
                    if (selectedColor === color) {
                        tile.style.backgroundColor = "#f0f0f0";
                        tile.style.pointerEvents = "none";
                        selectedColor = null;
                        matchedPairs++;
                        if (matchedPairs === colors.length) {
                            alert("Congratulations! You matched all colors.");
                            resetGame();
                        }
                    } else {
                        setTimeout(() => {
                            tile.style.opacity = "1";
                            selectedColor = null;
                        }, 500);
                    }
                }
            });

            return tile;
        }

        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        function resetGame() {
            matchedPairs = 0;
            selectedColor = null;
            gameContainer.innerHTML = "";
            shuffleArray(colors);
            for (const color of colors.concat(colors)) {
                const tile = createTile(color);
                gameContainer.appendChild(tile);
            }
        }

        const gameContainer = document.getElementById("game-container");
        resetGame();
    </script>
</body>
</html>
