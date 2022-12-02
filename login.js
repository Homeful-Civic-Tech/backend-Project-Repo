const login = document.getElementById('login')
const lnamel = document.getElementById('lnamel')
const fnamel = document.getElementById('fnamel')


const loginb = (event) => {
    event.preventDefault();
    let lnamelval = lnamel.value
    let fnamelval = fnamel.value
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");


    let requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    fetch(`http://localhost:4008/user/login/${fnamelval}/${lnamelval}`, requestOptions)
    .then(response => response.json())
    .then(result => console.log(result,1))
    .catch(error => console.log('error', error));
}




login.addEventListener('click', loginb);