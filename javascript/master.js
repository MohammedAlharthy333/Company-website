// Select landing page element 
let landingPage = document.querySelector(".landing-page");

// Get array of images
let imgsArray = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];


setInterval(() => {

    // Get random number
    let randomNumber = Math.floor(Math.random() * imgsArray.length);

    // Change background image url
    landingPage.style.backgroundImage = 'url("CSS/backgrounds/' + imgsArray[randomNumber] + '")';


}, 3000);
