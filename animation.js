const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const cx = ctx.canvas.width / 2;
const cy = ctx.canvas.height / 2;

const confetti = [];
const confettiCount = 300;
const gravity = 0.5;
const terminalVelocity = 5;
const drag = 0.075;
const colors = [
    { front: 'red', back: 'darkred' },
    { front: 'green', back: 'darkgreen' },
    // Add more colors as desired
];

// Initialize confetti
for (let i = 0; i < confettiCount; i++) {
    confetti.push({
        color: colors[Math.floor(Math.random() * colors.length)],
        x: randomRange(cx - 200, cx + 200),
        y: randomRange(cy - 100, cy + 100),
        dx: randomRange(-15, 15),
        dy: randomRange(-15, 15),
        size: randomRange(10, 20),
        angle: randomRange(0, 2 * Math.PI),
        spin: randomRange(-0.2, 0.2),
    });
}

// Animation loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach((piece) => {
        piece.dy += gravity;
        piece.x += piece.dx;
        piece.y += piece.dy;
        piece.angle += piece.spin;
        piece.dx *= 1 - drag;
        piece.dy *= 1 - drag;

        if (piece.y > canvas.height - piece.size) {
            piece.y = canvas.height - piece.size;
            piece.dy *= -0.85;
            piece.dx *= 0.75;
        }

        ctx.save();
        ctx.translate(piece.x, piece.y);
        ctx.rotate(piece.angle);
        ctx.fillStyle = piece.color.front;
        ctx.fillRect(-piece.size / 2, -piece.size / 2, piece.size, piece.size);
        ctx.restore();
    });

    requestAnimationFrame(animate);
}

// Start animation
animate();

// Helper functions
function randomRange(min, max) {
    return Math.random() * (max - min) + min;
}
