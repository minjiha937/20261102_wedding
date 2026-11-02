// 사진을 누르면 원본 비율을 유지한 확대 팝업을 엽니다.
const photoModal = document.getElementById("photo-modal");
const modalImage = document.getElementById("modal-image");

document.querySelectorAll(".photo").forEach((photo) => {
  photo.addEventListener("click", () => {
    modalImage.src = photo.src;
    modalImage.alt = photo.alt;
    photoModal.showModal();
  });
});

// 닫기 버튼과 사진 바깥 영역 클릭으로 사진 팝업을 닫습니다.
document.querySelector(".modal-close").addEventListener("click", () => {
  photoModal.close();
});
photoModal.addEventListener("click", (event) => {
  if (event.target === photoModal) photoModal.close();
});

// 계좌번호 복사 후 안내 팝업을 표시합니다.
const copyModal = document.getElementById("copy-modal");
const copyMessage = document.getElementById("copy-message");

document.querySelectorAll(".copy-button").forEach((button) => {
  button.addEventListener("click", async () => {
    const accountNumber = button.dataset.copy;
    try {
      await navigator.clipboard.writeText(accountNumber);
      copyMessage.textContent = "계좌번호가 복사되었습니다.";
    } catch (error) {
      // 로컬 파일 등에서 클립보드 권한이 없을 때 안내합니다.
      copyMessage.textContent = `계좌번호: ${accountNumber}`;
    }
    copyModal.showModal();
  });
});

document.getElementById("copy-confirm").addEventListener("click", () => {
  copyModal.close();
});
