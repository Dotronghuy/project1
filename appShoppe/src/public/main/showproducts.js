const btnAdd = document.getElementsByClassName('option-add');
const btnDelete = document.getElementsByClassName('option-minus');
const inputQuanlity = document.getElementsByClassName('quanlity-number');

for (let i = 0; i < btnAdd.length; i++) {
    btnAdd[i].addEventListener('click', () => {
        let currentValue = parseInt(inputQuanlity[i].value);
        inputQuanlity[i].value = currentValue + 1;
    })
    btnDelete[i].addEventListener('click', () => {
        let currentValue = parseInt(inputQuanlity[i].value);
        if (currentValue > 1) {
            inputQuanlity[i].value = currentValue - 1;
        }
    })
}


function showModal(event) {
    event.preventDefault();
    const modal = document.getElementById('modalAdd');
    modal.style.display = 'block';

    setTimeout(() => {
        modal.style.display = 'none';
    }, 1500);
};

