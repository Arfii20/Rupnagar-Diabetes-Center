const element = document.getElementById('entry-text');

element.addEventListener("input", function (e) {

    
    // this line may seem useless but its def needed
    element.style.minHeight = "30px";


    element.style.height = "auto";
    element.style.height = `${element.scrollHeight}px`;
});



element.addEventListener('focus', (e)=>{
    element.style.border = '2px solid #000'
} )




document.getElementById('enter-button').addEventListener('click', function(e) {

    // try removing this line, that will automatically check the fields however that will also reload the same page again
    e.preventDefault()

    console.log('button is clicked')
    console.log(document.getElementById('name-input').value)
    console.log(document.getElementById('email-input').value)

    console.log(document.getElementById('phone-input').value)
    console.log(document.getElementById('entry-text').value)



    
    // Redirect to the home page (index.html)
    window.location.href = 'index.html'; // Replace 'index.html' with your actual homepage URL
});