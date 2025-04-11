document.addEventListener('DOMContentLoaded', function() {
    // Modal functionality
    const viewSourceBtn = document.getElementById('viewSourceBtn');
    const requestAccessBtn = document.getElementById('requestAccessBtn');
    const sourceModal = document.getElementById('sourceModal');
    const closeModal = document.querySelector('.close-modal');
    const uploadArea = document.getElementById('uploadArea');
    
    // View Source Button
    if (viewSourceBtn) {
        viewSourceBtn.addEventListener('click', function(e) {
            e.preventDefault();
            sourceModal.style.display = 'flex';
        });
    }
    
    // Request Access Button
    if (requestAccessBtn) {
        requestAccessBtn.addEventListener('click', function(e) {
            e.preventDefault();
            uploadArea.style.display = 'block';
            this.style.display = 'none';
        });
    }
    
    // Close Modal
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            sourceModal.style.display = 'none';
        });
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === sourceModal) {
            sourceModal.style.display = 'none';
        }
    });
    
    // Form submission
    const contactForm = document.getElementById('contactForm');
    const sourceUploadForm = document.getElementById('sourceUploadForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your request! I will contact you soon.');
            sourceModal.style.display = 'none';
            this.reset();
        });
    }
    
    if (sourceUploadForm) {
        sourceUploadForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const fileInput = document.getElementById('sourceCode');
            if (fileInput.files.length > 0) {
                alert('Source code uploaded successfully!');
                this.reset();
                uploadArea.style.display = 'none';
                requestAccessBtn.style.display = 'block';
            }
        });
    }
    
    // Video play/pause on hover
    const projectVideo = document.querySelector('.video-container video');
    if (projectVideo) {
        projectVideo.addEventListener('mouseenter', function() {
            this.play();
        });
        
        projectVideo.addEventListener('mouseleave', function() {
            this.pause();
        });
    }
});