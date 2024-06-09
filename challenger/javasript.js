function showFullImage(imageSrc, title, location) {
    var modal = document.getElementById('fullImageModal');
    var fullImage = document.getElementById('fullImage');
    var caption = document.getElementById('caption');

    fullImage.src = imageSrc;
    caption.innerHTML = `<h2>${title}</h2><p>${location}</p>`;
    modal.style.display = 'flex';
}

function closeModal() {
    var modal = document.getElementById('fullImageModal');
    modal.style.display = 'none';
}
