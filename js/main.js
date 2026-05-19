// Justice for Cole Stump - Static Site JavaScript
// Pure vanilla JavaScript - No frameworks required

// ============================================================================
// Mobile Menu Toggle
// ============================================================================

document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');

  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      mobileNav.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const navLinks = mobileNav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileNav.classList.remove('active');
      });
    });
  }

  // ============================================================================
  // Photo Gallery Lightbox
  // ============================================================================

  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  const lightboxClose = document.querySelector('.lightbox-close');
  const lightboxPrev = document.querySelector('.lightbox-prev');
  const lightboxNext = document.querySelector('.lightbox-next');

  let currentImageIndex = 0;
  let images = [];

  if (galleryItems.length > 0) {
    // Collect all images
    galleryItems.forEach((item, index) => {
      const img = item.querySelector('img');
      if (img) {
        images.push(img.src);
        item.addEventListener('click', function() {
          currentImageIndex = index;
          openLightbox();
        });
      }
    });

    function openLightbox() {
      if (images[currentImageIndex]) {
        lightboxImage.src = images[currentImageIndex];
        lightbox.classList.add('active');
      }
    }

    function closeLightbox() {
      lightbox.classList.remove('active');
    }

    if (lightboxClose) {
      lightboxClose.addEventListener('click', closeLightbox);
    }

    if (lightboxPrev) {
      lightboxPrev.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        openLightbox();
      });
    }

    if (lightboxNext) {
      lightboxNext.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        openLightbox();
      });
    }

    // Close lightbox when clicking outside the image
    if (lightbox) {
      lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
          closeLightbox();
        }
      });
    }

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
      if (!lightbox.classList.contains('active')) return;

      if (e.key === 'ArrowLeft') {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        openLightbox();
      } else if (e.key === 'ArrowRight') {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        openLightbox();
      } else if (e.key === 'Escape') {
        closeLightbox();
      }
    });
  }

  // ============================================================================
  // Vigil Message Form (Static - Messages won't persist)
  // ============================================================================

  const vigilForm = document.getElementById('vigil-form');
  if (vigilForm) {
    vigilForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const name = document.getElementById('vigil-name').value;
      const email = document.getElementById('vigil-email').value;
      const message = document.getElementById('vigil-message').value;

      if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
      }

      // Show success message
      alert('Thank you for your message. In a static version, messages are not saved to a database.');
      vigilForm.reset();
    });
  }

  // ============================================================================
  // Smooth Scroll for Anchor Links
  // ============================================================================

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && document.querySelector(href)) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // ============================================================================
  // Active Navigation Link Highlighting
  // ============================================================================

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('nav a, .mobile-nav a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.style.color = 'var(--color-red)';
    }
  });

  // ============================================================================
  // Search/Filter for Evidence Vault
  // ============================================================================

  const searchInput = document.getElementById('evidence-search');
  const categoryFilter = document.getElementById('category-filter');
  const evidenceItems = document.querySelectorAll('.evidence-item');

  function filterEvidence() {
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    const selectedCategory = categoryFilter ? categoryFilter.value : '';

    evidenceItems.forEach(item => {
      const title = item.querySelector('h4').textContent.toLowerCase();
      const category = item.querySelector('.evidence-category').textContent;

      const matchesSearch = title.includes(searchTerm);
      const matchesCategory = !selectedCategory || category === selectedCategory;

      item.style.display = matchesSearch && matchesCategory ? 'flex' : 'none';
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', filterEvidence);
  }

  if (categoryFilter) {
    categoryFilter.addEventListener('change', filterEvidence);
  }

  // ============================================================================
  // PDF Viewer - Open in new tab
  // ============================================================================

  const pdfLinks = document.querySelectorAll('a[data-pdf]');
  pdfLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Allow normal link behavior - opens PDF in new tab
      // No special handling needed for static site
    });
  });

  // ============================================================================
  // Scroll to Top Button
  // ============================================================================

  const scrollTopBtn = document.getElementById('scroll-top');
  if (scrollTopBtn) {
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        scrollTopBtn.style.display = 'block';
      } else {
        scrollTopBtn.style.display = 'none';
      }
    });

    scrollTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
