// binary-bg.js
// Binary rain: columns of 0s and 1s falling downward.
// Opacity fades from invisible (left) to fully visible (right).

(function () {
    const canvas = document.getElementById('binaryCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const FONT_SIZE  = 14;
    const SPEED      = 0.4;
    const BASE_COLOR = '0, 140, 255';

    let cols, drops, opacityMap;

    function init() {
        // Use full viewport dimensions
        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;
        
        cols = Math.floor(canvas.width / FONT_SIZE);
        drops = Array.from({ length: cols }, () => Math.random() * -50);
        // Left edge = 0 opacity, right edge = full opacity (ease-in curve)
        opacityMap = Array.from({ length: cols }, (_, i) =>
            Math.pow(i / (cols - 1 || 1), 1.6));
    }

    function draw() {
        ctx.fillStyle = 'rgba(0,0,0,0.08)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.font = `bold ${FONT_SIZE}px "Courier New", monospace`;

        for (let i = 0; i < cols; i++) {
            const col = opacityMap[i];

            // Skip near-invisible left columns
            if (col < 0.01) {
                drops[i] += SPEED;
                if (drops[i] * FONT_SIZE > canvas.height + FONT_SIZE) drops[i] = Math.random() * -30;
                continue;
            }

            const x = i * FONT_SIZE;
            const y = Math.floor(drops[i]) * FONT_SIZE;

            // Head — bright white-blue flash
            ctx.fillStyle = `rgba(180,230,255,${Math.min(col * 1.4, 1)})`;
            ctx.fillText(Math.random() > 0.5 ? '1' : '0', x, y);

            // Trail — fading blue
            for (let r = 1; r <= 8; r++) {
                const ty = y - r * FONT_SIZE;
                if (ty < 0) continue;
                ctx.fillStyle = `rgba(${BASE_COLOR},${col * 0.85 * (1 - r / 9)})`;
                ctx.fillText(Math.random() > 0.5 ? '1' : '0', x, ty);
            }

            drops[i] += SPEED;
            if (drops[i] * FONT_SIZE > canvas.height + FONT_SIZE * 20) drops[i] = Math.random() * -30;
        }

        requestAnimationFrame(draw);
    }

    // Initialize canvas immediately
    init();
    draw();

    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            init();
        }, 100);
    });
})();