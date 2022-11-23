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
}

class UserMain {

    main() {
        let user = new User();

        user.username = "hyang";
        user.password = "1234";
        user.name = "김지향";
        user.email = "s1422@naver.com";

        console.log(user);
    }
}

window.onload = () => {
    let userMain = new UserMain();

    userMain.main();
}