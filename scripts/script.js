let fullName = document.getElementById('name');
let username = document.getElementById('uname');
let agree = document.getElementById('agree');
let email = document.getElementById('email');
let password = document.getElementById('pass');
let rePassword = document.getElementById('repass');
let signUp = document.getElementById('sign-up');
let loginLink = document.getElementById('login');
let popup = document.getElementById('popup');

// 1 - Создайте обработчик события полной загрузки страницы
window.onload = function () {

    // сброс данных при обновлении страницы всегда
    fullName.value = '';
    username.value = '';
    email.value = '';
    password.value = '';
    rePassword.value = '';
    agree.checked = false;

    //2 - В поле "Full Name" запретите вводить цифры.
    fullName.addEventListener('input', function (event) {
        let input= event.target.value;

        let noNum = input.replace(/[0-9]/g, '');// убирает цифры

        event.target.value = noNum;
    });

    //3 - В поле "Your username" запретите вводить точки и запятые.
    username.addEventListener('input', function (event) {
        let input= event.target.value;

        let noDots = input.replace(/[.,]/g, '');// убирает точки и запятые

        event.target.value = noDots;
    });

    //4 - Сообщение: “Согласен” или “Не согласен”
    agree.addEventListener('change', function(event) {
        if (event.target.checked) {  // проверяет если тикнули
            console.log('Agreed');
        } else {
            console.log('Didnt agree');
        }
    });

    //5 - При нажатии на кнопку “Sign Up” если что-то не так, то выводит алерт:
    signUp.onclick = function () {
        if (!fullName.value) {
            alert('Please type your full name!');
            return;
        }
        if (!username.value) {
            alert('Please type your username!');
            return;
        }
        if (!email.value) {
            alert('Please type your e-mail!');
            return;
        }
        if (!password.value) {
            alert('Please type your password!');
            return;
        }
        if (password.value.length < 8) {
            alert('Password must be at least 8 characters long.'); //проверяет на количество символов
            return;
        }
        if (!rePassword.value) {
            alert('Please repeat your password!');
            return;
        }
        if (password.value !== rePassword.value) {
            alert('Passwords must be the same!'); //если не совпадают, то при отводе пишет ошибку
            return;
        }
        if(!agree.checked){
            alert('You must agree with our Terms of Service and Privacy Statement')
            return;
        }

        showPopup()
    }

    loginLink.onclick = function () {
        simulateLoginPage()
    }

    //6
    function simulateLoginPage() {

        username.value = '';
        password.value = '';

        //меняет текст
        document.getElementById('main__title').innerText = 'Log in to the system';
        signUp.innerText = 'Sign In';
        // чтобы отправляла сообщение с приветствием пользователя

        // удаляет
        document.querySelector('label[for="name"]').remove();
        fullName.remove();
        document.querySelector('label[for="email"]').remove();
        email.remove();
        document.querySelector('label[for="repass"]').remove();
        rePassword.remove();
        document.getElementById('main__agree').remove();
        loginLink.remove();

        //проверка
        signUp.onclick = function () {
            if (!username.value) {
                alert('Please type your username!');
                return;
            }
            if (!password.value) {
                alert('Please repeat your password!');
                return;
            }
            if (password.value.length < 8) {
                alert('Password must be at least 8 characters long.');
                return;
            }

            document.getElementById('popup__text').innerText = "Welcome " + username.value + "!";
            showPopup();// переход
        }
    }

    function showPopup() {
        popup.style.display = 'block';

        document.getElementById('popup__btn').addEventListener('click', function () {
            popup.style.display = 'none';
            simulateLoginPage();
        });
    }
}
