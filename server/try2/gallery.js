// const imageHtml = `<div class=" p-3 col-sm-8 col-md-6 col-lg-4" >
//                     <img src="images/homephoto.jpeg" class="card-img-top" alt="Image Alt Text">
//                 </div>`
//
// const root = document.getElementById('root')
// for(var i = 0; i< 10; i++ ){
//     root.insertAdjacentHTML('beforeend', imageHtml)
// }

const galleryImage = document.getElementById("gallery_displayID");

function getPictures() {
    console.log("Hello")
    for (let i = 0; i < 61; i++) {
        galleryImage.innerHTML += `        
                                    <div class="bg">
                                        <img src="images/gallery/${i}.JPG" alt="">
                                        <div class="bg_overlay"></div>
                                    </div>
                                 `
    }
}

getPictures();