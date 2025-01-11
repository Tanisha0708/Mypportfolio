// Add this to your main.js file
document.addEventListener('DOMContentLoaded', function() {
    const greetingAudio = document.getElementById('greeting-audio');
    const welcomeOverlay = document.getElementById('welcome-overlay');
    const enterButton = document.getElementById('enter-button');

    // Function to play greeting and hide overlay
    function enterSite() {
        // Play the greeting audio
        greetingAudio.play()
            .catch(error => {
                console.log('Audio playback failed:', error);
            });

        // Hide the overlay
        welcomeOverlay.classList.add('hidden');

        // Remove the overlay from DOM after animation
        setTimeout(() => {
            welcomeOverlay.style.display = 'none';
        }, 500);
    }

    // Add click event listener to the enter button
    enterButton.addEventListener('click', enterSite);

    // Add keyboard event listener for accessibility
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' && !welcomeOverlay.classList.contains('hidden')) {
            enterSite();
        }
    });
});
