function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
  document.querySelector('a[href="#about-section"]').addEventListener('click', function (e) {
    e.preventDefault();
    scrollToSection('about-section');
  });
  
  document.querySelector('a[href="#skills-section"]').addEventListener('click', function (e) {
    e.preventDefault();
    scrollToSection('skills-section');
  });
  
  document.querySelector('a[href="#services-section"]').addEventListener('click', function (e) {
    e.preventDefault();
    scrollToSection('services-section');
  });
  
  document.querySelector('a[href="#contact-section"]').addEventListener('click', function (e) {
    e.preventDefault();
    scrollToSection('contact-section');
  });