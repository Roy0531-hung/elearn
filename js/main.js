document.addEventListener('DOMContentLoaded', () => {
    // 漢堡選單功能
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // 點擊選單項目後自動關閉選單
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // 點擊頁面其他地方時關閉選單
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar')) {
            navLinks.classList.remove('active');
        }
    });

    // 平滑滾動功能
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

    // 表單提交處理
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // 獲取表單數據
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);

            try {
                // 這裡可以添加實際的表單提交邏輯
                console.log('表單數據:', data);
                
                // 顯示成功訊息
                alert('訊息已送出，我們會盡快回覆您！');
                contactForm.reset();
            } catch (error) {
                console.error('提交失敗:', error);
                alert('抱歉，提交失敗，請稍後再試。');
            }
        });
    }

    // 滾動時導航欄效果
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            navbar.classList.remove('scroll-up');
            return;
        }

        if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
            // 向下滾動
            navbar.classList.remove('scroll-up');
            navbar.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
            // 向上滾動
            navbar.classList.remove('scroll-down');
            navbar.classList.add('scroll-up');
        }
        lastScroll = currentScroll;
    });

    // 課程卡片動畫效果
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.course-card').forEach(card => {
        observer.observe(card);
    });

    // 圖片載入錯誤處理
    function handleImageError(img) {
        img.onerror = null; // 防止無限循環
        img.src = '../images/placeholder.jpg';
    }

    // 為所有圖片添加錯誤處理
    document.querySelectorAll('img').forEach(img => {
        img.onerror = () => handleImageError(img);
    });

    // 添加程式碼複製功能
    document.querySelectorAll('.code-block').forEach(block => {
        const copyButton = document.createElement('button');
        copyButton.textContent = '複製';
        copyButton.className = 'copy-button';
        copyButton.onclick = () => {
            navigator.clipboard.writeText(block.textContent);
            copyButton.textContent = '已複製！';
            setTimeout(() => copyButton.textContent = '複製', 2000);
        };
        block.appendChild(copyButton);
    });
}); 