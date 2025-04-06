// Навка
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
});

// Бурге меню
const burger = document.createElement('button');
burger.className = 'burger';
burger.innerHTML = '<div></div><div></div><div></div>';
document.querySelector('.navbar').appendChild(burger);

const nav = document.querySelector('.nav-links');
burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
});

// Close menu when
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('active');
        nav.classList.remove('active');
    });
});

// Close 
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !burger.contains(e.target)) {
        burger.classList.remove('active');
        nav.classList.remove('active');
    }
});


const tabBtns = document.querySelectorAll('.tab-btn');
const authForms = document.querySelectorAll('.auth-form');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tab = btn.dataset.tab;
        

        tabBtns.forEach(b => b.classList.remove('active'));
        authForms.forEach(f => f.classList.remove('active'));
        
        btn.classList.add('active');
        document.getElementById(`${tab}Form`).classList.add('active');
    });
});

const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const contactForm = document.querySelector('.contact-form');

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Login functionality would be implemented with a backend');
    });
}

if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Registration functionality would be implemented with a backend');
    });
}

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message sent! (This is a demo - no actual message was sent)');
        contactForm.reset();
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});