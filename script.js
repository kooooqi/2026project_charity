// 1. 스크롤 위치에 따른 히어로 영역 실시간 Blur & Opacity (흐려짐) 효과
const heroWrapper = document.getElementById('heroWrapper');
const navHome = document.getElementById('navHome');
const navStory = document.getElementById('navStory');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    
    // 흐려짐 비율 계산 (0 ~ 1)
    const progress = Math.min(scrollY / (windowHeight * 0.7), 1);
    
    // 최대 16px까지 흐려짐 및 투명도 조절
    const blurValue = progress * 16;
    const opacityValue = 1 - (progress * 0.85);

    if (heroWrapper) {
        heroWrapper.style.filter = `blur(${blurValue}px)`;
        heroWrapper.style.opacity = opacityValue;
    }

    // 2. 스크롤 위치에 맞춰 상단 탭 (홈 / 이야기) 활성화 변경
    if (scrollY > windowHeight * 0.4) {
        navHome.classList.remove('active');
        navStory.classList.add('active');
    } else {
        navStory.classList.remove('active');
        navHome.classList.add('active');
    }
});

// 자세히 알아보기 클릭 시 이야기 섹션으로 부드럽게 이동
function scrollToStory() {
    const storySection = document.getElementById('story');
    if (storySection) {
        storySection.scrollIntoView({ behavior: 'smooth' });
    }
}

// 모달(후원 팝업) 제어
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
    alert(`감사합니다, ${name}님!\n따뜻한 나눔 신청이 완료되었습니다.`);
    closeDonateModal();
}
