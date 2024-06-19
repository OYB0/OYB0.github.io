document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('errorMsg');
    
    if (username === 'user' && password === 'password') {
        alert('تم تسجيل الدخول بنجاح!');
        errorMsg.textContent = '';
        window.location.href = 'hhhhh.html';
    } else {
        errorMsg.textContent = 'اسم المستخدم أو كلمة المرور غير صحيحة';
    }
});
