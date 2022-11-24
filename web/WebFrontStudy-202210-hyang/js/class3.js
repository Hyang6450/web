window.onload = () => {
    const btns = document.querySelectorAll("button");

    btns[0].onclick = () => {
        location.href = "https://www.naver.com/";
    }

    btns[1].onclick = () => {
        const urlInput = document.querySelector("input");
        urlInput.value = location.pathname;
    }

    btns[2].onclick = () => {
        location.reload();
    }

    btns[3].onclick = () => {
        location.replace("https://www.google.com"); // 뒤로가기 불가능 
    }
}