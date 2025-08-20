// function enableGradientFollow(selector, baseColor = "#111") {
//     document.querySelectorAll(selector).forEach(card => {
//         card.addEventListener('mousemove', e => {
//             const rect = card.getBoundingClientRect();
//             const x = e.clientX - rect.left;
//             const y = e.clientY - rect.top;

//             card.style.background = `
//                 radial-gradient(circle at ${x}px ${y}px, rgba(115, 0, 255, 0.45)    , transparent 80%),
//                 ${baseColor}
//             `;
//         });

//         card.addEventListener('mouseleave', () => {
//             card.style.background = baseColor; // reset
//         });
//     });
// }

// // Apply to ride cards
// enableGradientFollow('.ride-card', '#101010');

// // Apply to detail box
// enableGradientFollow('.detail-box', '#111');


// //  radial-gradient(circle at ${x}px ${y}px, rgba(115, 0, 255, 0.45), transparent 80%),
// //             #101010
// //             `;
// //             // rgba(255, 255, 0, 0.45)


function enableGradientFollow(selector, baseColor) {
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

enableGradientFollow('.ride-card', '#101010'); // ride cards
enableGradientFollow('.detail-box', '#111');   // ride details
enableGradientFollow('.profile-card', '#111'); // profile card
