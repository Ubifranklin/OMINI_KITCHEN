var menu = document.querySelector('#menu-bars');
var navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('fa-regular');
  menu.classList.toggle('fa-circle-xmark');
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  menu.classList.remove('fa-regular');
  menu.classList.remove('fa-circle-xmark');
  navbar.classList.remove('active');
}

document.querySelector('#search-icon').onclick = () =>{
  document.querySelector('#search-form').classList.toggle('active');
}

  document.querySelector('#close').onclick = () =>{
  document.querySelector('#search-form').classList.remove('active');
}
// (Optional) Handle form submission (example only)
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you for contacting HospiMe! We’ll get back to you soon.");
      form.reset();
    });
  };
