// Function to update the preview
function upDate(previewPic) {
    console.log("upDate function triggered");
    console.log("Alt Text: " + previewPic.alt);
    console.log("Source: " + previewPic.src);

    // Get the div with id 'image'
    var imageDiv = document.getElementById('image');

    // Update the background image of the div
    imageDiv.style.backgroundImage = 'url(' + previewPic.src + ')';
    // Update the text of the div
    imageDiv.textContent = previewPic.alt;
}

// Function to undo the changes
function undo() {
    console.log("undo function triggered");

    // Get the div with id 'image'
    var imageDiv = document.getElementById('image');

    // Revert the background image and text to original
    imageDiv.style.backgroundImage = 'url("default.jpg")'; // Original background image URL
    imageDiv.textContent = "Hover over an image below to display here.";
}

// Function to add tabindex and set focus
function addTabFocus() {
    console.log("onload event triggered");

    // Select all images in the gallery
    const images = document.querySelectorAll('.image-gallery img');

    // Loop through each image and add tabindex
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
    }
}

// Add onload listener to call addTabFocus
window.onload = addTabFocus;

