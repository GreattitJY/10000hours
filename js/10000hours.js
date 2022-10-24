// 모달창
const mdLicat = document.querySelector(".modal-licat");
const btnModal = document.querySelector(".btn-modal");
const btnGo = document.querySelector(".btn-go");

btnModal.addEventListener("click", () => {
    mdLicat.style.display = "flex";
});

btnGo.addEventListener("click", () => {
    mdLicat.style.display = "none";
});

window.onclick = function (event) {
    if (event.target == mdLicat) {
        mdLicat.style.display = "none";
    }
};

// 로딩 이미지
const loading = document.querySelector(".loading");
const btnResult = document.querySelector(".btn-result");
const inputs = document.querySelectorAll("input");

function calc() {
    console.log("호출 확인");
    loading.style.display = "block";
}
btnResult.addEventListener("click", calc());
