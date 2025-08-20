function gradient(selector, baseColor) {
    document.querySelectorAll(selector).forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.background = `
                radial-gradient(circle at ${x}px ${y}px, rgba(115, 0, 255, 0.45), transparent 80%),
                ${baseColor}
            `;
        });

        card.addEventListener('mouseleave', () => {
            card.style.background = baseColor;
        });
    });
}

gradient('.ride-card', '#101010');
gradient('.detail-box', '#111');
gradient('.profile-card', '#111');
