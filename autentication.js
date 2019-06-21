
var InputEmail = document.getElementById('InputEmail');
var InputSenha = document.getElementById('InputSenha');
var BtnFacebook = document.getElementById('BtnFacebook');
var BtnGoogle = document.getElementById('BtnGoogle');
var BtnLogin = document.getElementById('BtnLogin');




/*BtnFacebook.addEventListener('click',()=>{


});*/

BtnGoogle.addEventListener('click',()=>{
    var provider = new firebase.auth.GoogleAuthProvider();
    LoginApp(provider);
});

BtnLogin.addEventListener('click',()=>{
    firebase.auth().signInWithEmailAndPassword(InputEmail.value, InputSenha.value)
    
    .then((dados)=>{
        console.log(dados);
        //So foi colocado aqui para gerar alert
        alert('Logado com sucesso');
        //colocar aqui a rota para pagina do Inicial do  Chat 
    })

    .catch((error)=> {
        
        var errorCode = error.code;
        var errorMessage = error.message; 
        console.log("Codigo de erro:" + errorMessage + '\nMenssagem de erro:' + errorMessage)
        alert('Usuario ou senha invalidos');
        
      });
});

function LoginApp(provider){
    firebase.auth()
    .signInWithPopup(provider)
    .then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
}

