import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { useGlobalStore } from "./GlobalStore";

/* activePage  | changePage-call-back */
function NavBar() {
  // const [isShown, setShown] = useState(false);
  // // const [ globalData ] = useGlobalStore();

  // const showClass = !isShown
  //     ? `collapse navbar-collapse`
  //     : `collapse navbar-collapse show`;

  const location = useLocation();

  const style = {
      logo: { width: '64px', height: '64px' }
  }

  // const cartTotalQuantity = globalData.cart.reduce( (total,item) => total+item.num, 0 );
  alert("GOOGLE BOOK 2 !");

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      {alert("GOOGLE BOOK 3 !")}
      <Link to="/" className="navbar-brand">
          <img src='https://www.dalmio-dent.md/wp-content/uploads/2016/11/Untitled-6.png' alt="" style={style.logo} />
      </Link>
      {/* <a class="navbar-brand" href="#" onClick={ function(){ props.changePage('AboutPage')} }>Pupster</a> */}
      {/* <button onClick={() => setShown(!isShown)} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button> */}

      <div id="navbarSupportedContent"> {/* <div className={showClass} id="navbarSupportedContent"></div> */}
        <ul class="navbar-nav mr-auto">

          <li className="nav-item">
            <Link to="/search" className={location.pathname === "/search" ? "nav-link active" : "nav-link"}>
              Search
            </Link>
          </li>  

          <li className="nav-item">
            <Link to="/saved" className={location.pathname === "/saved" ? "nav-link active" : "nav-link"}>
              Saved
            </Link>
          </li>  

          {/* <li className="nav-item">
            <Link to="/productlist" className={location.pathname === "/productlist" ? "nav-link active" : "nav-link"}>
              Product List
            </Link>
          </li>          
          <li className="nav-item">
            <Link to="/productadd" className={location.pathname === "/productadd" ? "nav-link active" : "nav-link"}>
              Product Add
            </Link>
          </li> 
          <li className="nav-item">
            <Link to="/settings" className={location.pathname === "/settings" ? "nav-link active" : "nav-link"}>
              Settings
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className={location.pathname === "/cart" ? "nav-link active" : "nav-link"}>
              { cartTotalQuantity 
                ? <span class="badge badge-pill badge-success"><i class="fas fa-shopping-cart"></i> {cartTotalQuantity}</span>
                : ''
              }
            </Link>
          </li>           */}
          
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;