// 링크 공유

const btnShare = document.querySelector(".btn-share");

async function shareURL() {
    try {
        await navigator.clipboard.writeText(window.location.href);
        alert("URL이 복사되었습니다");
    } catch {
        alert("URL이 복사에 실패했습니다");
    }

    // async 공부용 주석
    // const res = await navigator.clipboard
    //     .writeText(window.location.href)
    //     .then(() => {
    //         alert("URL이 복사되었습니다");
    //         return 1;
    //     })
    //     .catch(() => {
    //         alert("URL이 복사에 실패했습니다");
    //         return -1;
    //     });
    // console.log(res);

    //     navigator.clipboard.writeText(window.location.href)
    //         .then(() => {
    //             alert("URL이 복사되었습니다");
    //         })
    //         .catch(() => {
    //             alert("URL이 복사에 실패했습니다");
    //         });
}

btnShare.addEventListener("click", shareURL);

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

window.addEventListener("click", (event) => {
    if (event.target === mdLicat) {
        mdLicat.style.display = "none";
    }
});

// 로딩 이미지
const loading = document.querySelector(".loading");
const btnResult = document.querySelector(".btn-result");
const inputs = document.querySelectorAll("input");
const result = document.querySelector(".result");
const form = document.querySelector("#box-input");
const outputs = document.querySelectorAll(".strong-result");

form.addEventListener("click", (event) => {
    event.preventDefault();
});

function calc() {
    result.style.display = "none";
    if (!(inputs[0].value.length || inputs[1].value.length)) {
        alert("값을 입력해주세요.");
        return;
    }

    if (inputs[1].value <= 0 || inputs[1].value > 24) {
        alert("시간을 제대로 입력해주세요.");
        return;
    }

    loading.style.display = "block";
    setTimeout(function () {
        loading.style.display = "none";
        outputs[0].textContent = inputs[0].value;
        const timeResult = Math.floor(10000 / inputs[1].value);
        outputs[1].textContent = timeResult;
        result.style.display = "block";
    }, 1000);
}
btnResult.addEventListener("click", calc);
