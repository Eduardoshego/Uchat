var criarUsuario = document.getElementById('BtnCriarConta');

var email = document.getElementById('InputEmail');
var senha = document.getElementById('InputSenha');
var nome = document.getElementById('InputNome');
var sobrenome = document.getElementById('InputSobrenome');

criarUsuario.addEventListener('click', function () {
    firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, senha.value, nome.value, )
        .then(function () {
            alert('Bem vindo ' + nome.value + '' +  sobrenome.value);
        })
        .catch(function (error) {
            console.error(error.code);
            console.error(error.message);
            alert('Falha ao cadastrar!')
        });
  });
  