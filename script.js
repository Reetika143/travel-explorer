// Filter function
function filterPlaces(category) {
    let places = document.querySelectorAll("#places .box");
  
    places.forEach(place => {
      if (category === "all" || place.classList.contains(category)) {
        place.style.display = "block";
      } else {
        place.style.display = "none";
      }
    });
  }
  
  // Form validation
  document.getElementById("contactForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
  
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
  
    if (!name || !email) {
      document.getElementById("formMsg").innerText = "Please fill all required fields!";
    } else {
      document.getElementById("formMsg").innerText = "Message sent successfully!";
    }
  });