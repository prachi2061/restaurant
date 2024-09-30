
document.addEventListener("DOMContentLoaded", function () {
    const chefImg = document.querySelector(".chef-info img");
    const chefDesc = document.querySelector(".chef-info p");

    gsap.from(chefImg, { opacity: 0, x: -200, duration: 1 });
    gsap.from(chefDesc, { opacity: 0, x: 200, duration: 1 });
});


let index = 0;
function showTestimonial() {
    const testimonials = document.querySelectorAll('.testimonial');
    testimonials.forEach((testimonial, i) => {
        testimonial.style.display = i === index ? 'block' : 'none';
    });
    index = (index + 1) % testimonials.length;
}
setInterval(showTestimonial, 3000);

document.querySelectorAll('.lightbox').forEach(item => {
    item.addEventListener('click', event => {
        alert('Open image in full-screen lightbox');
    });
});

document.getElementById('reservation-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Reservation made successfully!');
});

function initMap() {
    var location = { lat: 35.5384, lng: 129.3114 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location
    });
    var marker = new google.maps.Marker({ position: location, map: map });
}
window.onload = initMap;
