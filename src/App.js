import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductsContainer from "./containers/ProductsContainer";
import CartContainer from "./containers/CartContainer";
import MessageContainer from "./containers/MessageContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <main id="mainContainer">
            <div className="container">
              <ProductsContainer/>
              <CartContainer />
              <MessageContainer/>
            </div>
          </main>
          <Footer />
      </div>
    );
  }
}

export default App;
