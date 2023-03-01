AOS.init();
// You can also pass an optional settings object
// below listed default settings
AOS.init({
  
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
// for toggle button
const toggleSwitch = document.querySelector('#toggle');
const body = document.querySelector('body');

function switchTheme(e) {
  if (e.target.checked) {
    body.classList.add('dark');
  } else {
    body.classList.remove('dark');
  }
}

document.getElementById("dark").addEventListener("click",function(){
  document.body.classList.add("dark")
})

document.getElementById("light").addEventListener("click",function(){
  console.log("hhhh")
  document.body.classList.remove('dark');
})

toggleSwitch.addEventListener('change', switchTheme, false);
// and toggle btn 

// form
const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const name = form.querySelector('input[name="name"]');
  const email = form.querySelector('input[name="email"]');
  const message = form.querySelector('textarea[name="message"]');
  
  if (name.value.trim() === '') {
    alert('Please enter your name.');
    return false;
  }
  
  if (email.value.trim() === '') {
    alert('Please enter your email.');
    return false;
  } else if (!isValidEmail(email.value.trim())) {
    alert('Please enter a valid email address.');
    return false;
  }
  
  if (message.value.trim() === '') {
    alert('Please enter your message.');
    return false;
  }
  
  form.submit();
});

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
