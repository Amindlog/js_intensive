const menu = () => {
    const buttonAuth = document.querySelector(".button-auth");
    const modalAuth = document.querySelector(".modal-auth");
    const closeAuth = document.querySelector(".close-auth");
    const buttonSubmit = document.getElementById("submit");
    const inputlogin = document.getElementById("login");
    const inputPassword = document.getElementById("password");
    const buttonOut = document.querySelector(".button-out");
    const spanUserName = document.querySelector(".user-name");



    const login = (user) => {
        buttonAuth.style.display = "none";
        buttonOut.style.display = "block";
        spanUserName.style.display = "block";
        spanUserName.textContent = user.login;
        modalAuth.style.display = "none";
    }
    const logout = () => {
        buttonAuth.style.display = "flex";
        buttonOut.style.display = "none";
        spanUserName.style.display = "none";
        spanUserName.textContent = "";
        localStorage.removeItem('user');
    }
    buttonOut.addEventListener('click', () => {
        logout();
    });


    buttonAuth.addEventListener("click", () => {
        modalAuth.style.display = "flex";
    });

    closeAuth.addEventListener("click", () => {
        modalAuth.style.display = "none";
    });

    buttonSubmit.addEventListener("click", (e) => {
        e.preventDefault();

        if (inputlogin.value.length === 0 || inputPassword.value.length === 0) {
            modalAuth.style.display = "none";
            alert("нет данных в пароле или в логине, проверте правельность заполнения");
            modalAuth.style.display = "flex";
        } else {

            const user = {
                login: inputlogin.value,
                password: inputPassword.value,
            };
            localStorage.setItem('user', JSON.stringify(user));
            login(user);
        }
    });

    if (localStorage.getItem('user')) {
        login(JSON.parse(localStorage.getItem('user')));
    }
}
export default menu;