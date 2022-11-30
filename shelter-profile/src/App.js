
import './App.css';

function NavBar(){
  return (
    <nav className="navbar navbar-expand-lg">
  <a className="navbar-brand" href="#">Logo</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="">Home <span class="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Get a room</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Pricing</a>
      </li>
    </ul>
  
  </div>
</nav>
  )
}

function DisplayInfo (){
  return (
    <div className='display'>
        <h1 className='name'>Woman's shelter</h1>
        <ul className='list'>
          <li> 5 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT36fF4ctjVkPKkE1KsmHx2_wssAWM2RgPNrw&usqp=CAU" alt="" width="20px"/></li>
          <li>7223 Howard St.Fairhope, AL 36532</li>

        </ul>

    </div>
  )
}

function Photos () {
  return (
    <div className='container'>
    <div id="carouselExampleIndicators" className="carousel" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://www.nerdwallet.com/ca/wp-content/uploads/sites/2/2021/09/types-of-houses-in-canada-e1631808979346.jpg" alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCXUWY8qOIaRtBRZOGXwCTUFKQHXJr7mSnxA&usqp=CAU" alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1wHM7UUpqLJyX5oyCzclqnx_CPjFsksXl2g&usqp=CAU" alt="Third slide" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
</div>
  )
}

function Reserve () {
  return (
    <div className='reserve'>
       <h1 className='name'>Woman's shelter</h1>
       {/* <div>
       <ul>
        <li>CHECK-IN ss <br> 1/18/2023</br></li>
        <li>CHECK-OUT <br> Unknown</br></li>
       </ul>
       <div>GUEST <span>toggle bar</span></div>
       </div>


      <button>Reserve Here!!</button> */}
    </div>
  )
}
function App() {
  return (
    <div className="App">
      <NavBar/>
      <DisplayInfo/>
      <Photos/>
      <Reserve/>
    </div>
  );
}

export default App;
