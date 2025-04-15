document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Sticky Navigation
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // GitHub Calendar
    GitHubCalendar(".react-activity-calendar", "kavinraj2504", {
        responsive: true,
        tooltips: true,
        global_stats: false,
        summary_text: "Summary of contributions in the last year"
    }).then(function() {
        // Adjust calendar colors
        document.querySelectorAll('.react-activity-calendar svg rect').forEach(rect => {
            const level = rect.getAttribute('data-level');
            if (level === '0') {
                rect.style.fill = '#1e2d47';
            } else if (level === '1') {
                rect.style.fill = '#1e3a8a';
            } else if (level === '2') {
                rect.style.fill = '#1e40af';
            } else if (level === '3') {
                rect.style.fill = '#1d4ed8';
            } else if (level === '4') {
                rect.style.fill = '#3b82f6';
            }
        });
    });

    // Resume download
    const resumeButtons = document.querySelectorAll('.resume-btn');
    resumeButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            // Replace with your actual resume link
            const resumeUrl = 'https://drive.google.com/file/d/1PgWMtSkul3RpZiH3Pm82F6b3bmt9aulY/view?usp=sharing';

            // Create a temporary link for download
            const link = document.createElement('a');
            link.href = 'assets/kavinRaj_Resume.pdf'; // Replace with your actual resume file path
            link.download = 'kavinRaj_Resume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});