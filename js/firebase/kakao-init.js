Kakao.init('6077038d67f9b1e97db20e6a4507a4cf');
Kakao.isInitialized();

console.log(Kakao.isInitialized());

document.getElementById("kakao-login-btn").addEventListener('click', () => {
    Kakao.Auth.authorize({
        redirectUri: 'http://127.0.0.1:5500/kakao-callback.html'
    })
})