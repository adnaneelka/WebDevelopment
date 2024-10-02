let arrQuiz = [];

const setup = () => {
    loadHistory();

    let btnGo = document.getElementById("btnQUIZ");
    btnQUIZ.addEventListener("click", clickBtnGo);
};
const initialize = () => {
    let btnCreate = document.getElementById("btnQUIZ");

    btnQUIZ.addEventListener("click", thumbs);
};

