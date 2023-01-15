import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { BrowserRouter as Router } from "react-router-dom";
import CartContext from "./contexts/CartContext";
import { useState } from "react";

function App() {
    const [cartItems, setCartItems] = useState([]);
    
    return (
        <Router basename="/">
            <CartContext.Provider value={{ cartItems, setCartItems }}>
                <Header />
                <Main />
                <Footer />
            </CartContext.Provider>
        </Router>
    );
}

export default App;
