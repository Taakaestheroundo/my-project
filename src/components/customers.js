import React from 'react';

const customers = [
    { id: 1, name: 'Schools', feedback: 'Great products and excellent service!' },
    { id: 2, name: 'Local Small Consumers', feedback: 'I love the organic flour. Highly recommend!' },
    { id: 3, name: 'Wholesalers', feedback: 'Reliable and high-quality products.' },
    { id: 4, name: 'Exporters like Burundi, Rwanda, South Sudan and DRC', feedback: 'Excellent products for export. Always meet our quality standards.' },
    { id: 5, name: 'International Agencies', feedback: 'Consistently provide top-notch products and services.' },
    { id: 6, name: 'Government Institutions', feedback: 'Highly dependable supplier for our needs.' }
];

const CustomerFeedback = () => {
    return (
        <section id="customer-feedback">
            <h2>Customers And Their Feedback</h2>
            {customers.map(customer => (
                <div key={customer.id} className="customer">
                    <h3>{customer.name}</h3>
                    <p>{customer.feedback}</p>
                </div>
            ))}
        </section>
    );
};

export default CustomerFeedback;