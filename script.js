document.addEventListener("DOMContentLoaded", () => {
    const purchaseForm = document.querySelector("#purchaseForm");
    if (purchaseForm) {
        purchaseForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const name = event.target.name.value;
            const address = event.target.address.value;
            const number = event.target.number.value;
            if (!name || !address || !number) {
                alert('Моля попълнете всички полета!');
                return;
            }
            alert(`Благодарим ви, ${name}! Вашата поръчка ще бъде изпратена на адрес: ${address}. Очаквайте обаждане на телефон ${number} за потвърждение.`);
            purchaseForm.reset();
        });
    }

    const reviewForm = document.querySelector("#reviewForm");
    if (reviewForm) {
        reviewForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const comment = event.target.comment.value;
            if (!comment) {
                alert('Моля попълнете полето за коментар!');
                return;
            }
            const reviewList = document.querySelector(".reviews");
            const newReview = document.createElement("div");
            newReview.classList.add("review");
            newReview.textContent = comment;
            reviewList.appendChild(newReview);
            reviewForm.reset();
        });
    }
});