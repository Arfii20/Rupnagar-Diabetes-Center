const imageHtml = `<div class=" p-3 col-sm-8 col-md-6 col-lg-4" >
                    <img src="images/homephoto.jpeg" class="card-img-top" alt="Image Alt Text">
                </div>`

const root = document.getElementById('root')
for(var i = 0; i< 10; i++ ){
    root.insertAdjacentHTML('beforeend', imageHtml)
}