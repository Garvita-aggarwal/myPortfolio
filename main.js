const navLinks = document.querySelectorAll(".navbar a");
const sections = document.querySelectorAll("section");

// Function to show only the clicked section
function showSection(targetId) {
  sections.forEach((section) => {
    if (section.id === targetId) {
      section.classList.add("active"); // Show selected section
    } else {
      section.classList.remove("active"); // Hide others
    }
  });
}

// Add click event to each navbar link
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent page reload

    // Remove 'active' class from all navbar links
    navLinks.forEach((nav) => nav.classList.remove("active"));
    // Add 'active' class to clicked link
    link.classList.add("active");

    // Get target section ID (strip # from href)
    const target = link.getAttribute("href").substring(1);
    showSection(target);
  });
});

// Show home section by default
showSection("home");

const readMoreBtn = document.getElementById("read-more-btn");
const moreText = document.getElementById("more-text");

readMoreBtn.addEventListener("click", () => {
  if (moreText.classList.contains("show")) {
    moreText.classList.remove("show");
    readMoreBtn.textContent = "Read More";
  } else {
    moreText.classList.add("show");
    readMoreBtn.textContent = "Read Less";
  }
});
