var users = {

}

for (let i = 1; i < 10; i++) {
    let userName = prompt('Ismingizni kiriting') 
    let userAge = +prompt('Yoshingizni kiriting')

    users['Foydalanuvchi'] = 'Foydalanuvchi:' + i
    users['Ismi'] = 'Ismi:' + userName
    users['Yoshi'] = 'Yoshi:' + userAge

    console.log(users)
}
