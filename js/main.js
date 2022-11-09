function getEmail(){
    var email = document.querySelector("#email").value;
    console.log(email.length);
    return email;
}
function getPassword(){
    var passwd = document.querySelector("#passwd").value;
    console.log(passwd.length);
    return passwd;
}

function getUsername(){
    var user = document.querySelector("#username").value;
    console.log(user.length);
    return user;
}

function validaLogin(){
    user = getUsername();
    passwd = getPassword();
    email = getEmail();

    if(email.length < 1){
        alert("O campo E-MAIL precisa ser preenchido");
        document.querySelector("#email").focus();
    };
    if(passwd.length < 1){
        alert("O campo SENHA precisa ser preenchido");
        document.querySelector("#passwd").focus();
    };
    if(user.length < 1){
        alert("O campo NOME DE USUARIO precisa ser preenchido");
        document.querySelector("#username").focus();
    };

    if(email.length > 0 && passwd.length > 0 && user.length > 0){
        if(email == "torresmo@gmail.com" && passwd == "prometiamimmesmo" && user == "torresminho123"){
            alert("Login realizado com sucesso, "+user);
            window.location.replace("inicio.html");
        }else{
            alert("Dados incorretos, verifique e tente novamente");
            document.getElementById("email").value = "";
            document.getElementById("username").value = "";
            document.getElementById("password").value = "";
            document.getElementById("uf").value = "";
            document.getElementById("cpf").value = "";
            document.getElementById("rg").value = "";
            document.getElementById("sexoM").value = "";
            document.getElementById("sexoF").value = "";
            document.getElementById("sexoI").value = "";
            document.getElementById("email").focus();
        }
    }
}