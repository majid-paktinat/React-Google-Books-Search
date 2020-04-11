import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { GlobalStore } from "./components/GlobalStore";

import NavBar from './components/NavBar';
import Search from './components/Search';
import Saved from './components/Saved';


function App() {
alert("GOOGLE BOOK 0 !")
  return (
    <Router>
      <GlobalStore> {/* provides common elements across components */}
      {alert("GOOGLE BOOK 1 !")}

      <div className="App">
          <NavBar />
          <div class="container">
            <Route exact path={["/","/search"]} component={Search} />
            <Route path="/saved" component={Saved} />
            {/* <Route path="/productinfo/:id" component={Saved} /> */}

           
          </div>

          
      </div>
      </GlobalStore>
    </Router>
  );
}

export default App;
