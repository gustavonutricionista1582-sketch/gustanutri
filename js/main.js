/**
 * Gustavo Souza — Nutricionista Esportivo
 * Main JavaScript (Vanilla JS - Leve & Sem Dependências)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Header scroll effect (Transparente no topo / Hero, esconde ao rolar para baixo)
  const header = document.querySelector('.site-header');
  const backToTopBtn = document.querySelector('.btn-back-to-top');
  let lastScrollY = window.scrollY || window.pageYOffset;
  let ticking = false;

  const updateHeader = () => {
    const scrollY = window.scrollY || window.pageYOffset;

    if (header) {
      if (scrollY <= 20) {
        // Topo da página: fundo totalmente transparente
        header.classList.remove('scrolled');
        header.classList.remove('header-hidden');
      } else {
        header.classList.add('scrolled');

        // Esconder ao rolar para baixo, exibir ao rolar para cima
        if (scrollY > lastScrollY && scrollY > 80) {
          header.classList.add('header-hidden');
        } else if (scrollY < lastScrollY) {
          header.classList.remove('header-hidden');
        }
      }
    }

    if (backToTopBtn) {
      if (scrollY > 500) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    lastScrollY = scrollY <= 0 ? 0 : scrollY;
    ticking = false;
  };

  const handleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(updateHeader);
      ticking = true;
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  updateHeader();

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 2. Mobile Drawer Menu
  const mobileToggle = document.querySelector('.btn-mobile-toggle');
  const mobileDrawer = document.querySelector('.mobile-drawer-wrapper');
  const drawerClose = document.querySelector('.btn-drawer-close');
  const drawerBackdrop = document.querySelector('.mobile-drawer-backdrop');
  const drawerLinks = document.querySelectorAll('.drawer-link, .mobile-drawer a');

  const openDrawer = () => {
    if (mobileDrawer) {
      mobileDrawer.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeDrawer = () => {
    if (mobileDrawer) {
      mobileDrawer.classList.remove('open');
      document.body.style.overflow = '';
    }
  };

  if (mobileToggle) mobileToggle.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer && mobileDrawer.classList.contains('open')) {
      closeDrawer();
    }
  });

  // 3. Carousel de Resultados (Antes e Depois)
  const carouselTrack = document.querySelector('.results-carousel-container .carousel-track');
  const slides = document.querySelectorAll('.results-carousel-container .carousel-slide');
  const btnPrev = document.querySelector('.results-carousel-container .carousel-btn-prev');
  const btnNext = document.querySelector('.results-carousel-container .carousel-btn-next');
  const dotsContainer = document.querySelector('.results-carousel-container .carousel-dots');

  if (carouselTrack && slides.length > 0) {
    let currentIndex = 0;
    
    function getItemsPerView() {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
      return 1;
    }

    function getMaxIndex() {
      return Math.max(0, slides.length - getItemsPerView());
    }

    function createDots() {
      if (!dotsContainer) return;
      dotsContainer.innerHTML = '';
      const maxIndex = getMaxIndex();
      const numDots = maxIndex + 1;
      if (numDots <= 1) return;

      for (let i = 0; i < numDots; i++) {
        const dot = document.createElement('button');
        dot.className = `carousel-dot ${i === currentIndex ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Ir para slide ${i + 1}`);
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
      }
    }

    function updateCarousel() {
      const maxIndex = getMaxIndex();
      if (currentIndex > maxIndex) currentIndex = maxIndex;

      const slideWidth = slides[0].getBoundingClientRect().width;
      const gap = 20; // 1.25rem
      const moveAmount = currentIndex * (slideWidth + gap);
      
      carouselTrack.style.transform = `translateX(-${moveAmount}px)`;

      // Update button states
      if (btnPrev) btnPrev.disabled = currentIndex === 0;
      if (btnNext) btnNext.disabled = currentIndex >= maxIndex;

      // Update dots
      if (dotsContainer) {
        const dots = dotsContainer.querySelectorAll('.carousel-dot');
        dots.forEach((dot, idx) => {
          dot.classList.toggle('active', idx === currentIndex);
        });
      }
    }

    function goToSlide(index) {
      const maxIndex = getMaxIndex();
      currentIndex = Math.max(0, Math.min(index, maxIndex));
      updateCarousel();
    }

    if (btnPrev) {
      btnPrev.addEventListener('click', () => {
        goToSlide(currentIndex - 1);
      });
    }

    if (btnNext) {
      btnNext.addEventListener('click', () => {
        goToSlide(currentIndex + 1);
      });
    }

    // Touch Swipe Support para Celular / Tablet
    let startX = 0;
    let currentX = 0;
    let isDragging = false;

    carouselTrack.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
    }, { passive: true });

    carouselTrack.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      currentX = e.touches[0].clientX;
    }, { passive: true });

    carouselTrack.addEventListener('touchend', () => {
      if (!isDragging) return;
      isDragging = false;
      const diffX = startX - currentX;
      const threshold = 40; // min swipe distance

      if (currentX !== 0) {
        if (diffX > threshold) {
          goToSlide(currentIndex + 1);
        } else if (diffX < -threshold) {
          goToSlide(currentIndex - 1);
        }
      }
      startX = 0;
      currentX = 0;
    });

    createDots();
    updateCarousel();

    window.addEventListener('resize', () => {
      createDots();
      updateCarousel();
    }, { passive: true });
  }

  // 4. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item, index) => {
    const button = item.querySelector('.faq-button');
    const answer = item.querySelector('.faq-answer');

    // Abre o primeiro por padrão
    if (index === 0) {
      item.classList.add('active');
      if (answer) answer.style.maxHeight = answer.scrollHeight + 'px';
      if (button) button.setAttribute('aria-expanded', 'true');
    } else {
      if (button) button.setAttribute('aria-expanded', 'false');
    }

    if (button && answer) {
      button.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Fecha todos os outros
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            const otherAnswer = otherItem.querySelector('.faq-answer');
            const otherBtn = otherItem.querySelector('.faq-button');
            if (otherAnswer) otherAnswer.style.maxHeight = null;
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          }
        });

        // Alterna o clicado
        if (isActive) {
          item.classList.remove('active');
          answer.style.maxHeight = null;
          button.setAttribute('aria-expanded', 'false');
        } else {
          item.classList.add('active');
          answer.style.maxHeight = answer.scrollHeight + 'px';
          button.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });
});
