// 자바스크립트의 객체 생성은 아래와 같다.
// let user = {
//     username: "hyang",
//     password: "1234"
// };

class User {
    username; // # => private
    password;
    name;
    email;

    constructor(username, password, name, email) {
        this.username = username;
        this.password = password;
        this.name = name;
        this.email = email;
    }

    printName() {
        console.log(this.name + "님의 정보");
    }
}

class UserMain {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new UserMain();
        }
        return this.#instance;
    }

    main() {
        let user = new User("dong", "1234", "홍길동", "dong@naver.com");

        // user.username = "hyang";
        // user.password = "1234";
        // user.name = "김지향";
        // user.email = "s1422@naver.com";

        console.log(user);

        localStorage.username = user.username;
        console.log("username: " + localStorage.username);

        user.printName();
    }
}

window.onload = () => {
    let userMain = UserMain.getInstance();

    userMain.main();
}