// Smooth scrolling untuk link navigasi
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Placeholder untuk tombol galeri
function showGallery() {
    alert('Galeri Aksi Komunitas akan segera hadir!');
}

// Placeholder untuk form pengiriman pesan
function submitForm(event) {
    event.preventDefault(); // Mencegah form untuk reload halaman
    alert('Terima kasih! Pesan Anda telah terkirim. Tim kami akan segera menghubungi Anda.');
    // Di sini Anda bisa menambahkan kode untuk mengirim data form ke server di masa depan
}

// Efek pada Navbar saat di-scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer untuk animasi saat elemen masuk ke layar
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target); // Hentikan observasi setelah animasi berjalan
        }
    });
}, observerOptions);

// Terapkan observer ke semua service cards
document.querySelectorAll('.service-card').forEach(card => {
    // Atur kondisi awal untuk animasi
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card); // Mulai observasi
});