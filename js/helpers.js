const fs = require('fs');
const Image = require("@11ty/eleventy-img");

function minifyPhotos(){
    const photosDir = "img/home"
    let photos = fs.readdirSync(photosDir);
    for (let i in photos) {
        (async () => {
            let photo = `${photosDir}/${photos[i]}`;
            console.log(`Photo: ${photo}`);
            const url = photo;
            const stats = await Image(url, {
                formats: ["webp"],
                widths: [600],
                // dryRun: true,
                outputDir: `${photosDir}-min/`,
            });
            // console.log(stats);
        })();
    }
}

class PhotoData {
    constructor(){
        this.title = "";
        this.description = "";
    }
}

function createPhotoData(){
    let photoData
    try {
        const photoJSON = fs.readFileSync('./js/imageData.json', {encoding: 'utf-8', flag: 'r'});
        photoData = JSON.parse(photoJSON)
    }
    catch {
        photoData = new Object();
    }
    const photos = fs.readdirSync('./img/home-min');
    photos.forEach((photo) => {
        console.log(photoData);
        if(!photoData[photo])
        {
            photoData[photo] = new PhotoData(photo);
        }
    });
    console.log(photoData);
    fs.writeFileSync('./js/imageData.json', JSON.stringify(photoData));
}

minifyPhotos();
createPhotoData();