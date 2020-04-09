import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { GlobalStore } from "./components/GlobalStore";

import NavBar from './components/NavBar';
import Search from './components/Search';
import Saved from './components/Saved';
// import SettingsPage from './components/SettingsPage';
// import ProductAddPage from './components/ProductAddPage';
// import CartPage from './components/CartPage';
// import RegisterPage from './components/RegisterPage';
// import Footer from './components/Footer';

/* Our EVEREST App 

* added 'id' to product.json file (any different 3 ids)
* added <Link> to the ProductCard

Today's Mission:
- Add Global Storage
- Add Mongo

*/
function App() {
  return (
    <Router>
      <GlobalStore> {/* provides common elements across components */}
      <div className="App">
          <NavBar />
          <div class="container">
            <Route exact path={["/","/search"]} component={Search} />
            <Route path="/saved" component={Saved} />
            {/* <Route path="/productinfo/:id" component={Saved} /> */}

            {/* <Route exact path="/productadd" component={ProductAddPage} />
            <Route exact path="/cart" component={CartPage} />
            <Route exact path="/registeruser" component={RegisterPage} />
            <Route exact path="/settings" component={SettingsPage} /> */}
          </div>

          {/* <Footer /> */}
      </div>
      </GlobalStore>
    </Router>
  );
}

export default App;
