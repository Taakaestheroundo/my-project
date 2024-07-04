import React from 'react';


const testimonials = [
    { id: 1, source: 'Schools', feedback: 'Great products and excellent service!' },
    { id: 2, source: 'Local Small Consumers', feedback: 'I love the organic flour. Highly recommend!' },
    { id: 3, source: 'Wholesalers', feedback: 'Reliable and high-quality products.' },
    { id: 4, source: 'Exporters like Burundi, Rwanda, South Sudan', feedback: 'Excellent products for export. Always meet our quality standards.' },
    { id: 5, source: 'International Agencies', feedback: 'Consistently provide top-notch products and services.' },
    { id: 6, source: 'Government Institutions', feedback: 'Highly dependable supplier for our needs.' }
];

const Testimonials = () => {
    return (
        <section id="testimonials">
            <h2>What Our Customers Say</h2>
            {testimonials.map(testimonial => (
                <div key={testimonial.id} className="testimonial">
                    <p>"{testimonial.feedback}" - {testimonial.source}</p>
                </div>
            ))}
        </section>
    );
}

export default Testimonials;