document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('errorMsg');
    
    if (username === 'user' && password === 'password') {
        .then(message => {
    alert(message); // عرض رسالة نجاح التسجيل
    window.location.href = "dashboard.html"; // توجيه المستخدم إلى الصفحة الجديدة
})
    } else {
        errorMsg.textContent = 'اسم المستخدم أو كلمة المرور غير صحيحة';
    }
});
