// import logo from './logo.svg';
// import './App.css';

// import About from './components/about';
// import Contact from './components/contacts';
// import Products from './components/products';
// // import Customers from './components/customer';
// import Orders from './components/orders';
// import Blog from './components/blog';
// import Recipes from './components/recipe';
// import Testimonials from './components/testimonials';
// import Newsletter from './components/newsletters';
// import Timer from './components/timer';
// import CustomerFeedback from './components/customers';



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//       <About/>
//       <Contact/>
//       <Products/>
//       <CustomerFeedback/>
//       <Orders/>
//       <Blog/>
//       <Recipes/>
//       <Testimonials/>
//       <Newsletter/>
//       <Timer/>
//     </div>
//   );
// }

// export default App;



import logo from './images/log-removebg-preview.png'
import './App.css';

import About from './components/about';
import Contact from './components/contacts';
import Products from './components/products';
import Orders from './components/orders';
import Blog from './components/blog';
import Recipes from './components/recipe';
import Testimonials from './components/testimonials';
import Newsletter from './components/newsletters';
import Timer from './components/timer';
import CustomerFeedback from './components/customers';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <ul className="navbar-links">
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#customer-feedback">Customer Feedback</a></li>
          <li><a href="#orders">Orders</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#recipes">Recipes</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#newsletter">Newsletter</a></li>
          <li><a href="#timer">Timer</a></li>
        </ul>
      </nav>

      <header className="App-header">
        <p>
          Welcome <code>To</code> Genuine Organic Millers.
        </p>
        <a
          className="App-link"
          // href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Welcome To Genuine Organic Millers */}
        </a>
      </header>

      <section id="about"><About/></section>
      <section id="contact"><Contact/></section>
      <section id="products"><Products/></section>
      <section id="customer-feedback"><CustomerFeedback/></section>
      <section id="orders"><Orders/></section>
      <section id="blog"><Blog/></section>
      <section id="recipes"><Recipes/></section>
      <section id="testimonials"><Testimonials/></section>
      <section id="newsletter"><Newsletter/></section>
      <section id="timer"><Timer/></section>
    </div>
  );
}

export default App;
