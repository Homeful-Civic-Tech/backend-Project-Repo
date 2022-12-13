
const email = documant.getElemantById('email')
const pword = documant.getElemantById('pword')
const fname = documant.getElemantById('fname')
const lname = documant.getElemantById('lname')
const sex = documant.getElemantById('sex')
const uname = documant.getElemantById('uname')

const signup = documant.getElemantById('signin')



const signinBt = (event) => {
    event.preventDefault();
    let fnameval = fname.value 
    let lnameval = lname.value 
    let userval = uname.value
    let emailval = email.value
    let sexval = sex.value
    let pwordval = pword.value


    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
    "firstname": fnameval,
    "lastname": lnameval,
    "username": userval,
    "email": emailval,
    "sex": sexval,
    "password": pwordval 
    });

    let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("http://localhost:4009/user", requestOptions)
    .then(response => response.json())
    .then(result => {console.log(result)})
    .catch(error => console.log('error', error));
    window.location.href = "./login.html";

}

signup.addEventListener('click', signinBt);
    