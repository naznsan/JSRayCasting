window.onload = function() {
    const canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    const cellSize = 20;

    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);

    const draw = function(player) {
        console.log("drawing canvas");
        context.clearRect(0, 0, canvas.width, canvas.height);
        // Fill background
        context.fillStyle = "black";
        context.fillRect(0, 0, canvas.width, canvas.height);
        // Draw player
        context.fillStyle = "red";
        console.log(player.x, player.y);
        context.fillRect(player.x, player.y, player.x + cellSize, player.y + cellSize);
    };

    const frame = function() {
        draw(player);
        requestAnimationFrame(frame);
    };

    const Player = function(x, y) {
        console.log("player created");
        this.x = x;
        this.y = y;
    }

    let player = new Player(30, 30);
    // frame(player);
}