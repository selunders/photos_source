let photosData

async function fetchPhotoData() {
    const response = await fetch('js/imageData.json');
    const jsonData = await response.json();
    photosData = jsonData;
};

// const photos = document.querySelectorAll(".photos img");
const photoPopup = document.querySelector("#photo_popup");
photoPopup.addEventListener("click", () => {
    // alert("Clicked!");
    photoPopup.classList.toggle("hide");
});

fetchPhotoData().then(() => {
    for(let photo in photosData)
    {
        const photoElement = document.querySelector(`[photoname="${photo}"]`)
        photoElement.title = photosData[photo].title;
        photoElement.description = photosData[photo].description;
        photoElement.addEventListener("click", () => {
            photoPopup.classList.toggle("hide");
            photoPopup.querySelector("img").src = `img/home-min/${photo}`;
            photoPopup.querySelector("h2").innerText = photoElement.title;
            photoPopup.querySelector("p").innerText = photoElement.description;
        })
    }
});
