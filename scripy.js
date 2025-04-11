document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    const navbar = document.querySelector('nav');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle (if you want to add it later)
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('nav ul');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
    
    // Button ripple effect
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const x = e.clientX - e.target.getBoundingClientRect().left;
            const y = e.clientY - e.target.getBoundingClientRect().top;
            
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 1000);
        });
    });
    
    // Page load animation
    const homeContent = document.querySelector('.home-content');
    if (homeContent) {
        homeContent.style.opacity = '0';
        homeContent.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            homeContent.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            homeContent.style.opacity = '1';
            homeContent.style.transform = 'translateY(0)';
        }, 300);
    }
    
    // Project hover effect enhancement
    const projects = document.querySelectorAll('.project');
    
    projects.forEach(project => {
        project.addEventListener('mousemove', function(e) {
            const x = e.clientX - this.getBoundingClientRect().left;
            const y = e.clientY - this.getBoundingClientRect().top;
            
            const centerX = this.offsetWidth / 2;
            const centerY = this.offsetHeight / 2;
            
            const angleX = (y - centerY) / 10;
            const angleY = (centerX - x) / 10;
            
            this.style.transform = `translateY(-10px) scale(1.02) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
        });
        
        project.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-10px) scale(1.02) rotateX(0) rotateY(0)';
        });
    });
});