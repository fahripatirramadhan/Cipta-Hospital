document.addEventListener('DOMContentLoaded', function () {
  // Back to top
  const backToTopButton = document.querySelector('.back-to-top');
  if (backToTopButton) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.add('active');
      } else {
        backToTopButton.classList.remove('active');
      }
    });

    backToTopButton.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !document.querySelector(targetId)) return;
      e.preventDefault();
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: 'smooth',
        });
      }
    });
  });

  // Appointment Form
  const appointmentForm = document.getElementById('appointmentForm');
  if (appointmentForm) {
    appointmentForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const doctor = document.getElementById('doctor').value;
      const date = document.getElementById('date').value;

      alert(
        `Jawaban Kamu sudah Direkam, Terima kasih ${name} telah membuat janji temu dengan ${doctor} pada tanggal ${date}. Kami akan menghubungi kamu melalui email secepatnya.`
      );
      appointmentForm.reset();
    });
  }

  // Contact Form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('contactName').value;
      alert(
        `Jawaban Kamu sudah Disimpan, Terima kasih ${name} atas pertanyaan yang kamu ajukan. Kami akan segera merespons pesan kamu.`
      );
      contactForm.reset();
    });
  }

  // Newsletter Form
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = this.querySelector('input[type="email"]').value.trim();
      if (email) {
        alert(
          'Terima kasih telah berlangganan newsletter kami. Jawaban Kamu sudah Disimpan.'
        );
        this.reset();
      } else {
        alert('Silakan masukkan email Anda.');
      }
    });
  }

  // Animation on scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.slide-up, .fade-in');
    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;
      if (elementPosition < screenPosition) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };

  // Initial animations
  window.addEventListener('load', animateOnScroll);
  window.addEventListener('scroll', animateOnScroll);

  document.querySelectorAll('.slide-up').forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });

  document.querySelectorAll('.fade-in').forEach((el) => {
    el.style.opacity = '0';
    el.style.transition = 'opacity 1s ease';
  });
});
