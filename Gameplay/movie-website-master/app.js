const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const movieList = movieLists[i];
  const itemNumber = movieList.querySelectorAll(".movie-list-item").length;
  let clickCounter = 0;

  arrow.addEventListener("click", () => {
    const movieListWidth = movieList.clientWidth; // Get the current width of the movie list
    const wrapperWidth = movieList.parentElement.clientWidth; // Get the width of the wrapper
    const itemsPerScreen = Math.floor(wrapperWidth / 270); // Calculate items visible per screen

    clickCounter++;
    const remainingItems = itemNumber - (itemsPerScreen + clickCounter);
    if (remainingItems >= 0) {
      const currentTransform = parseFloat(
        window.getComputedStyle(movieList).getPropertyValue("transform").split(",")[4] || 0
      );
      movieList.style.transform = `translateX(${currentTransform - 300}px)`;
    } else {
      movieList.style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
});


//TOGGLE

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});
// Get the "WATCH" button and video player container
const watchButton = document.querySelector('.featured-button');
const videoContainer = document.querySelector('.video-player-container');
const videoPlayer = document.querySelector('.video-player');

// When the watch button is clicked
watchButton.addEventListener('click', () => {
    // Show the video player container
    videoContainer.style.display = 'flex';

    // Play the video
    videoPlayer.play();
});

// Optional: Close the video player when the user clicks anywhere outside the video player
videoContainer.addEventListener('click', (e) => {
    // If the user clicked outside the video (not on the video itself)
    if (!videoPlayer.contains(e.target)) {
        // Pause the video and hide the player
        videoPlayer.pause();
        videoContainer.style.display = 'none';
    }
});
