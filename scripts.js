// جافا سكريبت لجعل التقييم تفاعليًا
const stars = document.querySelectorAll('.rating-stars i');
const ratingText = document.getElementById('rating-text');

stars.forEach(star => {
    star.addEventListener('click', () => {
        const rating = star.getAttribute('data-rating');
        stars.forEach((s, index) => {
            if (index < rating) {
                s.classList.remove('far');
                s.classList.add('fas', 'active');
            } else {
                s.classList.remove('fas', 'active');
                s.classList.add('far');
            }
        });
        ratingText.textContent = `تقييمك: ${rating} من 5`;
    });
});