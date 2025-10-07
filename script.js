// humberger
    const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");     // nav menu toggle
    hamburger.classList.toggle("active");  // hamburger → X
  });


// Scroll reveal animation
window.addEventListener("scroll", () => {
  const reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
});

// Achievement counter
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");

  counters.forEach(counter => {
    const updateCounter = () => {
      const target = +counter.getAttribute("data-target");
      const current = +counter.innerText;
      const increment = target / 400; // speed control

      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        setTimeout(updateCounter, 20);
      } else {
        counter.innerText = target; // final number
      }
    };

    updateCounter();
  });
});


// Simple animation for page elements
        document.addEventListener('DOMContentLoaded', function() {
            const ctaBanner = document.querySelector('.cta-banner');
            ctaBanner.style.opacity = 0;
            
            setTimeout(() => {
                ctaBanner.style.transition = 'opacity 1s ease';
                ctaBanner.style.opacity = 1;
            }, 500);
            
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 100,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        });

        // work section
 document.addEventListener('DOMContentLoaded', function() {
            const brands = [
                { 
                    name: "Daraz", 
                    icon: "fas fa-shopping-cart",
                    colorClass: "daraz"
                },
                { 
                    name: "Realme Pakistan", 
                    icon: "fas fa-mobile-alt",
                    colorClass: "realme"
                },
                { 
                    name: "Tecno Pakistan", 
                    icon: "fas fa-mobile",
                    colorClass: "tecno"
                },
                { 
                    name: "Indrive", 
                    icon: "fas fa-car",
                    colorClass: "indrive"
                },
                { 
                    name: "Filmora", 
                    icon: "fas fa-film",
                    colorClass: "filmora"
                },
                { 
                    name: "Haier", 
                    icon: "fas fa-tv",
                    colorClass: "haier"
                },
                { 
                    name: "Gamma", 
                    icon: "fas fa-chart-line",
                    colorClass: "gamma"
                },
                { 
                    name: "Study Pool", 
                    icon: "fas fa-graduation-cap",
                    colorClass: "studypool"
                }
            ];
            
            const marqueeContent = document.getElementById('marqueeContent');
            
            // Function to add brands to the marquee
            function populateMarquee() {
                // Add brands twice for seamless looping
                for (let i = 0; i < 2; i++) {
                    brands.forEach(brand => {
                        const tag = document.createElement('div');
                        tag.className = 'marquee-tag';
                        
                        const icon = document.createElement('div');
                        icon.className = `brand-icon ${brand.colorClass}`;
                        icon.innerHTML = `<i class="${brand.icon}"></i>`;
                        
                        const name = document.createElement('div');
                        name.className = 'brand-name';
                        name.textContent = brand.name;
                        
                        tag.appendChild(icon);
                        tag.appendChild(name);
                        marqueeContent.appendChild(tag);
                    });
                }
            }
            
            populateMarquee();
        });

        // Modal term
        function openModal(id) {
  document.getElementById(id).style.display = 'flex';
}

function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

// Close modal if user clicks outside the box
window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
};

