// JavaScript
document.querySelectorAll('.buy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // منطق الشراء هنا
        alert('سيتم توجيهك لصفحة الدفع');
        
        // يمكنك إضافة:
        // 1. إضافة المنتج للسلة
        // 2. توجيه لبوابة الدفع
        // 3. تحديث الرصيد
    });
});