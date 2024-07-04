import React from 'react';

const blogPosts = [
    {
        id: 1,
        title: 'Sustainable Farming Practices',
        date: 'February 04, 2024',
        content: 'Learn about our sustainable farming practices and how they benefit the environment."Genuine Organic Millers is your trusted source for premium maize products and sustainable farming solutions. We are committed to delivering high-quality maize flour, bran, and corn products that not only delight your taste buds but also promote eco-friendly agriculture. Our dedication to sustainable farming practices sets us apart. Join us in our mission to unlock the full potential of maize while caring for our planet. Experience the taste of quality and sustainability with Genuine Organic Millers."'
        
    },
    {
        id: 2,
        title: 'Health Benefits of Organic Products',
        date: 'April 2018, -present',
        content: 'Discover the numerous health benefits of consuming organic products...Our product line shall fit nicely for those who seek nutritious quality food.'
        
    }
];

const Blog = () => {
    return (
        <section id="blog">
            <h2>Our Blog</h2>
            {blogPosts.map(post => (
                <div key={post.id} className="blog-post">
                    <h3>{post.title}</h3>
                    <p><em>{post.date}</em></p>
                    <p>{post.content}</p>
                </div>
            ))}
        </section>
    );
}

export default Blog;

