// 부드러운 스크롤
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

// 금액 선택 버튼
document.querySelectorAll('.amount-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const amount = this.getAttribute('data-amount');
        document.getElementById('amount').value = amount;
        
        // 활성 버튼 표시
        document.querySelectorAll('.amount-btn').forEach(b => {
            b.classList.remove('active');
        });
        this.classList.add('active');
    });
});

// 기부 폼 제출
document.getElementById('donationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const amount = document.getElementById('amount').value;
    const message = document.getElementById('message').value;
    
    if (!amount) {
        alert('기부 금액을 입력해주세요.');
        return;
    }
    
    // 기부 정보 출력
    console.log('기부 정보:');
    console.log('이름:', name);
    console.log('이메일:', email);
    console.log('금액:', amount);
    console.log('메시지:', message);
    
    // 성공 메시지
    alert(`감사합니다, ${name}님!\n${parseInt(amount).toLocaleString()}원의 기부가 접수되었습니다.\n여러분의 나눔이 큰 변화를 만들 것입니다.`);
    
    // 폼 리셋
    this.reset();
    document.querySelectorAll('.amount-btn').forEach(b => {
        b.classList.remove('active');
    });
});

// 스크롤 시 네비게이션 하이라이트
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = '#FF6B6B';
        } else {
            link.style.color = '#333';
        }
    });
});

// 페이지 로드 시 애니메이션
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

document.body.style.opacity = '0.95';
