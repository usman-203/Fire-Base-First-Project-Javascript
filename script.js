// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDsrFyxQJg8so2McSW5MvaQsX_rMdEtpuI",
    authDomain: "to-do-list-9f385.firebaseapp.com",
    databaseURL: "https://to-do-list-9f385.firebaseio.com",
    projectId: "to-do-list-9f385",
    storageBucket: "to-do-list-9f385.appspot.com",
    messagingSenderId: "841785482524",
    appId: "1:841785482524:web:041aabb57e32acf874aed9",
    measurementId: "G-7ELB08N8DQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


var usernameRef = document.getElementById('username')
var callnumberRef = document.getElementById('callnumber')
var emailRef = document.getElementById('email')
var passwordRef = document.getElementById('password')
var passwordrepeatRef = document.getElementById('passwordrepeat')

function signup() {
    var user = {
        username: usernameRef.value,
        callnumber: callnumberRef.value,
        email: emailRef.value,
        password: passwordRef.value,
        passwordrepeat: passwordrepeatRef.value,
    }
    //console.log('user', user)
    console.log(firebase)
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(function (sucess) {
            console.log('sucess', sucess)
        })
        .catch(function (error) {
            console.log('error', error)
        })

}