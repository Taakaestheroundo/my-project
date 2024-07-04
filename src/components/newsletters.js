import React, { useState } from 'react';


const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        setMessage(`Thank you for subscribing, ${email}!`);
        setEmail('');
    };

    return (
        <section id="newsletter">
            <h2>Subscribe to our Newsletter</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <button type="submit">Subscribe</button>
            </form>
            {message && <p className="message">{message}</p>}
        </section>
    );
}

export default Newsletter;
