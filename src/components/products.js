import React from 'react';
import product1 from '../images/organic_millers_cover.jpeg'
import product2 from '../images/chicken-eats-feed-grain-eco-600nw-2328912529.webp'
import product3 from '../images/genuine.jpg'


const ProductsComponent = () => { // Renamed the component to avoid name conflict
    return (
        <section id="products">
            
            <h2>Our Products</h2>
            <div className="product">
                <img src={product1} alt="Organic Flour" />
                <p>Genuine Organic Millers maize Flour</p>
            </div>
            <div className="product">
                <img src={product2} alt="Maize Brand" />
                <p>Maize Brand</p>
                <p>Products Price: Shs 800</p>
                <p>Packaging: 100kg bag</p>
            </div>
            <div className="product">
                <img src={product3} alt="Genuine Organic Millers Maize Flour" />
                <p> Genuine Organic Millers Maize Flour</p>
                <p>Product Description: 48% maize extraction</p>
                <p>60% extraction products.</p>
                <p>Product Price: Shs. 1,440 and 25,00 per kilogram</p>
                <p>Packaging: 2kg, 5kg, 10kg, 25kg, and 50kg bags</p>
            </div>
        </section>
    );
}

export default ProductsComponent; 