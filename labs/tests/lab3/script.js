// Window is the highest-level object in JS
// Window stores data that persists across functions
// Window is like the boss of all variables
window.dogImages = [];
window.currentImageIndex = 0;



// Function that handles consuming API
function fetchDogImage() {
    let selectedBreed = document.getElementById("Breed").value.toLowerCase();
    let apiUrl = `https://dog.ceo/api/breed/${selectedBreed}/images`;

    console.log("Fetching from:", apiUrl);

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Could not fetch resource");
            }
            return response.json();
        })



        .then(data => {
            console.log(data);

            // Store first 10 images only
            window.dogImages = data.message.slice(0, 10);
            window.currentImageIndex = 0; // Reset index when new images are fetched

            // Display the first image
            document.getElementById("dogImage").src = window.dogImages[window.currentImageIndex];
        })



        .catch(error => console.error(error));
}



// Next Button - Show next image
document.getElementById("nextButton").addEventListener("click", function () {
    if (window.dogImages.length > 0) {
        window.currentImageIndex = (window.currentImageIndex + 1) % window.dogImages.length;
        document.getElementById("dogImage").src = window.dogImages[window.currentImageIndex];
    }
});

// Previous Button - Show previous image
document.getElementById("prevButton").addEventListener("click", function () {
    if (window.dogImages.length > 0) {
        window.currentImageIndex = (window.currentImageIndex - 1 + window.dogImages.length) % window.dogImages.length;
        document.getElementById("dogImage").src = window.dogImages[window.currentImageIndex];
    }
});



// Generate Button - Fetch new images
document.getElementById("dogButton").addEventListener("click", fetchDogImage);
