let currentImageIndex = 0;

function openLightbox(index) {
    currentImageIndex = index;
    document.getElementById('lightbox').classList.add('active');
    document.getElementById('lightbox-img').src = images[currentImageIndex];
    document.body.style.overflow = 'hidden';
}

function closeLightbox(event) {
    if (event.target.id === 'lightbox' || event.target.classList.contains('lightbox-close')) {
        document.getElementById('lightbox').classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function changeImage(direction, event) {
    event.stopPropagation();
    currentImageIndex += direction;
    
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    
    document.getElementById('lightbox-img').src = images[currentImageIndex];
}

// Navigazione con tastiera
document.addEventListener('keydown', function(event) {
    if (document.getElementById('lightbox').classList.contains('active')) {
        if (event.key === 'ArrowRight') {
            changeImage(1, event);
        } else if (event.key === 'ArrowLeft') {
            changeImage(-1, event);
        } else if (event.key === 'Escape') {
            closeLightbox(event);
        }
    }
});