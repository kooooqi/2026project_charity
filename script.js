const heroWrapper = document.getElementById('heroWrapper');
const navHome = document.getElementById('navHome');
const navStory = document.getElementById('navStory');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    
    // 스크롤 약 65% 지점부터 블러/페이드 효과 시작
    const startThreshold = windowHeight * 0.65;
    
    let progress = 0;
    if (scrollY > startThreshold) {
        progress = Math.min((scrollY - startThreshold) / (windowHeight * 0.5), 1);
    }
    
    const blurValue = progress * 12;
    const opacityValue = 1 - (progress * 0.85);

    if (heroWrapper) {
        heroWrapper.style.filter = `blur(${blurValue}px)`;
        heroWrapper.style.opacity = opacityValue;
    }

    // 상단 네비게이션 탭 활성화 전환
    if (scrollY > windowHeight * 0.45) {
        navHome.classList.remove('active');
        navStory.classList.add('active');
    } else {
        navStory.classList.remove('active');
        navHome.classList.add('active');
    }
});

function scrollToStory() {
    const storySection = document.getElementById('story');
    if (storySection) {
        storySection.scrollIntoView({ behavior: 'smooth' });
    }
}

function openDonateModal() {
    document.getElementById('donateModal').classList.add('active');
}

function closeDonateModal() {
    document.getElementById('donateModal').classList.remove('active');
}

function copyAccount() {
    const accNumber = document.getElementById('accNumber').innerText;
    navigator.clipboard.writeText(accNumber).then(() => {
        alert('후원 계좌번호(' + accNumber + ')가 복사되었습니다.');
    }).catch(() => {
        alert('계좌번호 복사에 실패했습니다.');
    });
}

function handleDonateSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('donorName').value;
    alert(`감사합니다, ${name}님!\n따뜻한 나눔 신청이 완료되었습니다.`);
    closeDonateModal();
}
