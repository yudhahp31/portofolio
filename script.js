let lastScrollTop = 0; // Menyimpan posisi scroll terakhir
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > lastScrollTop) {
            // Jika scroll ke bawah, sembunyikan navbar
            navbar.classList.add('hidden');
        } else {
            // Jika scroll ke atas, tampilkan navbar
            navbar.classList.remove('hidden');
        }

        // Perbarui posisi scroll terakhir
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });