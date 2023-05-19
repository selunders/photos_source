let photosData

async function fetchPhotoData() {
    const response = await fetch('js/imageData.json');
    const jsonData = await response.json();
    photosData = jsonData;
};

// const photos = document.querySelectorAll(".photos img");

fetchPhotoData().then(() => {
    for(let photo in photosData)
    {
        const photoElement = document.querySelector(`[photoname="${photo}"]`)
        photoElement.title = photosData[photo].title;
        photoElement.description = photosData[photo].description;
        console.log(photoElement.title);
    }
});


