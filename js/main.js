// نظام الشرائح للصفحة الرئيسية
function initSlider() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dot');
    const prevArrow = document.querySelector('.slider-arrow.prev');
    const nextArrow = document.querySelector('.slider-arrow.next');
    
    if (!slider || slides.length === 0) return;
    
    let currentIndex = 0;
    const totalSlides = slides.length;
    
    function showSlide(index) {
        slides.forEach(slide => {
            slide.style.display = 'none';
        });
        
        slides[index].style.display = 'block';
        
        if (dots.length > 0) {
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }
        
        currentIndex = index;
    }
    
    function nextSlide() {
        let nextIndex = (currentIndex + 1) % totalSlides;
        showSlide(nextIndex);
    }
    
    function prevSlide() {
        let prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(prevIndex);
    }
    
    // أحداث الأسهم
    if (nextArrow) {
        nextArrow.addEventListener('click', nextSlide);
    }
    
    if (prevArrow) {
        prevArrow.addEventListener('click', prevSlide);
    }
    
    // أحداث النقاط
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });
    
    // التمرير التلقائي
    let slideInterval = setInterval(nextSlide, 5000);
    
    // إيقاف التمرير التلقائي عند التمرير يدويًا
    if (slider) {
        slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
        slider.addEventListener('mouseleave', () => {
            slideInterval = setInterval(nextSlide, 5000);
        });
    }
    
    // إظهار الشريحة الأولى في البداية
    showSlide(0);
}

// نموذج الاتصال
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        
        const subject = `رسالة جديدة من ${name}`;
        const body = `
الاسم: ${name}
البريد الإلكتروني: ${email}
رقم الهاتف: ${phone}

الرسالة:
${message}
        `.trim();
        
        const mailtoLink = `mailto:actual.view25@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
        
        alert('شكراً لتواصلكم معنا! سيتم فتح بريدك الإلكتروني لإرسال الرسالة.');
        contactForm.reset();
    });
}

// القائمة المتنقلة
function initMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const nav = document.querySelector('nav ul');
    
    if (!mobileMenu || !nav) return;
    
    mobileMenu.addEventListener('click', function() {
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });
    
    // إغلاق القائمة عند النقر على رابط
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 992) {
                nav.style.display = 'none';
            }
        });
    });
}

// التمرير السلس
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// تهيئة جميع المكونات
document.addEventListener('DOMContentLoaded', function() {
    initSlider();
    initContactForm();
    initMobileMenu();
    initSmoothScroll();
    
    // إضافة تأثيرات إضافية للصفحات الفرعية
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // نظام الشرائح والجولات الافتراضية
    const slides = document.querySelectorAll('.slide');
    
    // الشريحة الأولى - PRiFiT Gym
    if (slides[0]) {
        slides[0].addEventListener('click', function() {
            window.open('https://actualview25.github.io/PrifitGym-ksa/');
        });
    }
    
    // الشريحة الثانية - الفيلا
    if (slides[1]) {
        slides[1].addEventListener('click', function() {
            window.open('https://actualview25.github.io/Villa/');
        });
    }
    
    // الشريحة الثالثة - العقارات
    if (slides[2]) {
        slides[2].addEventListener('click', function() {
            window.open('https://');
        });
    }
    
    // أزرار الخدمات
    const serviceButtons = document.querySelectorAll('.service-card .btn');
    serviceButtons.forEach((button, index) => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
             if (index === 0) {
                // القطاع العقاري
                window.location.href = 'pages/estate.html';
            } else if (index === 1) {
                // الهندسة والإنشائات
                window.location.href = 'pages/eng.html';
             } else if (index === 2) {
                // القطاع التجاري
                window.location.href = 'pages/stores.html';  
            }
        });
    });
});