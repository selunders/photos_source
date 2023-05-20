
async function fetchPhotoData() {
    const response = await fetch('js/imageData.json');
    const jsonData = await response.json();
    photosData = jsonData;
};

// const photos = document.querySelectorAll(".photos img");
const photoPopup = document.querySelector("section.popup");
const popupButtons = photoPopup.querySelectorAll("button");
popupButtons[0].setAttribute("onclick", "previousPhoto()");
popupButtons[1].setAttribute("onclick", "nextPhoto()");
popupButtons[2].setAttribute("onclick", "closePopup()");
photoPopup.addEventListener("click", () => {
    // alert("Clicked!");
    // photoPopup.classList.toggle("hide");
});

let photosData

async function fetchPhotoData() {
    const response = await fetch('js/imageData.json');
    const jsonData = await response.json();
    photosData = jsonData;
};

fetchPhotoData().then(() => {
    for(let photo in photosData)
    {
        const photoElement = document.querySelector(`[photoname="${photo}"]`)
        photoElement.photo = photo;
        photoElement.title = photosData[photo].title;
        photoElement.description = photosData[photo].description;
        photoElement.addEventListener("click", () => {
            selectPhoto(photoElement);
        })
    }
});

function selectPhoto(photoElement) {
    photoPopup.classList.remove("hide");
    photoPopup.currentPhoto = photoElement;
    photoPopup.querySelector("img").src = `img/home-min/${photoElement.photo}`;
    photoPopup.querySelector("h2").innerText = photoElement.title;
    photoPopup.querySelector("p").innerText = photoElement.description;
}

function nextPhoto()
{
    if(photoPopup.currentPhoto.nextElementSibling)
    {
        selectPhoto(photoPopup.currentPhoto.nextElementSibling);
    }
    else
    {
        selectPhoto(document.querySelector(".photos img:first-child"));
    }
}

function previousPhoto()
{
    if(photoPopup.currentPhoto.previousElementSibling)
    {
        selectPhoto(photoPopup.currentPhoto.previousElementSibling);
    }
    else
    {
        selectPhoto(document.querySelector(".photos img:last-child"));
    }
}

function closePopup()
{
    photoPopup.classList.toggle("hide");
}
// const buttons = photoPopup.querySelectorAll("button");
// // buttons[0].onclick = ""