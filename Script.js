document.addEventListener("DOMContentLoaded", () => {
  // Feature 1: Mobile Navigation Toggle
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Feature 2: FAQ Accordion
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;
      
      // Close other open answers
      document.querySelectorAll(".faq-answer").forEach((item) => {
        if (item !== answer) {
          item.classList.remove("show");
        }
      });

      answer.classList.toggle("show");
    });
  });

  // Feature 3: Project Filtering
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");

      projectCards.forEach((card) => {
        if (filterValue === "all" || card.classList.contains(filterValue)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // Feature 4: Form Validation
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    let isValid = true;

    // Reset messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";
    document.getElementById("formSuccess").textContent = "";

    if (nameInput.value.trim() === "") {
      document.getElementById("nameError").textContent = "Name is required.";
      isValid = false;
    }

    if (emailInput.value.trim() === "") {
      document.getElementById("emailError").textContent = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
      document.getElementById("emailError").textContent = "Enter a valid email address.";
      isValid = false;
    }

    if (messageInput.value.trim() === "") {
      document.getElementById("messageError").textContent = "Message is required.";
      isValid = false;
    }

    if (isValid) {
      document.getElementById("formSuccess").textContent = "Thank you! Your submission was received.";
      contactForm.reset();
    }
  });
});
