/*
*SIMPLE LOGIN SYSTEM USING JS FUNSTIONS
*/
let data = {
    "1": {
        "email": "eshwarvengala30@gmail.com",
        "password": "Eshwar@1617"
    },
    "2": {
        "email": "john.doe@example.com",
        "password": "Password123!"
    },
    "3": {
        "email": "jane.smith@example.com",
        "password": "Smith@456"
    },
    "4": {
        "email": "alex.williams@example.com",
        "password": "Alex1234@"
    },
    "5": {
        "email": "sarah.jones@example.com",
        "password": "Jones5678!"
    },
    "6": {
        "email": "michael.brown@example.com",
        "password": "Brown@987"
    },
    "7": {
        "email": "emily.wilson@example.com",
        "password": "Wilson123@"
    },
    "8": {
        "email": "david.miller@example.com",
        "password": "Miller@789"
    },
    "9": {
        "email": "lisa.jackson@example.com",
        "password": "Lisa4567!"
    },
    "10": {
        "email": "ryan.thomas@example.com",
        "password": "Thomas@321"
    }
}

function login(email,pass) {
    let isEmailOk =false
    let isPass=false
    for(i=1;i<=10;i++) {
        if(data[i]["email"]==email)
        {
            isEmailOk = true;
            if(data[i]["password"]==pass)
            isPass=true;
            break;
        } 
    }
    return isEmailOk && isPass ?"Login succesful" : isEmailOk ? "Incorrect password" : " incorrect mail";
}
console.log(login("lisa.jackson@example.com","Lisa4567!"));