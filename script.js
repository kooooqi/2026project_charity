// 스크롤 위치에 따른 히어로 영역 Smooth Blur & Fade 효과
const heroWrapper = document.getElementById('heroWrapper');
const navHome = document.getElementById('navHome');
const navStory = document.getElementById('navStory');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    
    // 80% (0.8) 지점부터 흐려짐 애니메이션 시작
    const startThreshold = windowHeight * 0.8;
    
    let progress = 0;
    if (scrollY > startThreshold) {
        // 80% 이후부터 140% 구간까지 아주 부드럽게 0 -> 1 변화
        progress = Math.min((scrollY - startThreshold) / (windowHeight * 0.6), 1);
    }
    
    // 블러 강도를 은은하게 최대 8px로 조절하고 투명도 자연스럽게 감쇄
    const blurValue = progress * 8;
    const opacityValue = 1 - (progress * 0.7);

    if (heroWrapper) {
        heroWrapper.style.filter = `blur(${blurValue}px)`;
        heroWrapper.style.opacity = opacityValue;
    }

    // 상단 탭 (홈 / 이야기) 스크롤에 맞춘 활성화 전환
    if (scrollY > windowHeight * 0.5) {
        navHome.classList.remove('active');
        navStory.classList.add('active');
    } else {
        navStory.classList.remove('active');
        navHome.classList.add('active');
    }
});

// 자세히 알아보기 클릭 시 이야기 섹션 이동
function scrollToStory() {
    const storySection = document.getElementById('story');
    if (storySection) {
        storySection.scrollIntoView({ behavior: 'smooth' });
    }
}

// 후원 모달(팝업) 제어
function openDonateModal() {
    document.getElementById('donateModal').classList.add('active');
}

function closeDonateModal() {
    document.getElementById('donateModal').classList.remove('active');
}

// 계좌번호 복사 기능
function copyAccount() {
    const accNumber = document.getElementById('accNumber').innerText;
    navigator.clipboard.writeText(accNumber).then(() => {
        alert('후원 계좌번호(' + accNumber + ')가 복사되었습니다.');
    }).catch(() => {
        alert('계좌번호 복사에 실패했습니다.');
    });
}

// 후원 폼 제출 핸들러
function handleDonateSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('donorName').value;
    alert(`감사
