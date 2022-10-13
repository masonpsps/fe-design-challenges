const selectedDisplay = document.querySelector('#selection');
const btns = document.querySelectorAll('.rate-btn');
const submitBtn = document.querySelector('.submit-btn');
const ratingDisplay = document.querySelector('.rating-container');
const thanksContainer = document.querySelector('.thank-container');
let selectedBtn = null;

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('selected-rating');
        if(btn.classList.contains('selected-rating')) {
            selectedBtn = btn.textContent;
            btns.forEach((x) => {
                if(x !== btn && x.classList.contains('selected-rating')) {
                    x.classList.remove('selected-rating');
                }
            });
        } else {
            selectedBtn = null;
        }
    });
});

submitBtn.addEventListener('click', () => {
    if(selectedBtn) {
        selectedDisplay.textContent = selectedBtn;
        ratingDisplay.classList.add('hidden');
        thanksContainer.classList.remove('hidden');
    }
});