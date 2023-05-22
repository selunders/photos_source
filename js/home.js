async function fetchPhotoData() {
  const response = await fetch("js/imageData.json");
  const jsonData = await response.json();
  photosData = jsonData;
}

const photoPopup = document.querySelector("section.popup");
const popupButtons = photoPopup.querySelectorAll("button");

popupButtons[0].addEventListener("click", previousPhoto);
popupButtons[1].addEventListener("click", nextPhoto);
popupButtons[2].addEventListener("click", closePopup);

let photosData;

async function fetchPhotoData() {
  const response = await fetch("js/imageData.json");
  const jsonData = await response.json();
  photosData = jsonData;
}

fetchPhotoData().then(() => {
  for (let photo in photosData) {
    const photoElement = document.querySelector(`[photoname="${photo}"]`);
    photoElement.photo = photo;
    photoElement.title = photosData[photo].title;
    photoElement.description = photosData[photo].description;
    photoElement.addEventListener("click", (e) => {
      selectPhoto(e.target);
    });
  }
});

function selectPhoto(photoElement) {
  if (photoPopup.classList.contains("hide")) {
    animateInPopup();
  }
  photoPopup.currentPhoto = photoElement;
  photoPopup.querySelector("img").src = `img/home-min/${photoElement.photo}`;
  photoPopup.querySelector("h2").innerText = photoElement.title;
  photoPopup.querySelector("p").innerText = photoElement.description;
}

function nextPhoto() {
  if (photoPopup.currentPhoto.nextElementSibling) {
    selectPhoto(photoPopup.currentPhoto.nextElementSibling);
  } else {
    selectPhoto(document.querySelector(".photos img:first-child"));
  }
}

function previousPhoto() {
  if (photoPopup.currentPhoto.previousElementSibling) {
    selectPhoto(photoPopup.currentPhoto.previousElementSibling);
  } else {
    selectPhoto(document.querySelector(".photos img:last-child"));
  }
}

function closePopup() {
  animateOutPopup();
}
// const buttons = photoPopup.querySelectorAll("button");
// // buttons[0].onclick = ""

const animateInPopup = () => {
  anime({
    targets: "section.popup",
    easing: "easeInOutSine",
    direction: "reverse",
    opacity: 0,
    duration: 500,
    begin: () => {
        photoPopup.classList.remove("hide");
    },
    });
};

const animateOutPopup = () =>
  anime({
    targets: "section.popup",
    easing: "easeInOutSine",
    opacity: 0,
    duration: 500,
    complete: () => {
      photoPopup.style.opacity = 1;
      photoPopup.classList.add("hide");
    },
  });
