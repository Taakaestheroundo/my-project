import React from 'react';




const ordersData = [
    {
        orderId: '001',
        customerName: 'Dianah Namatovu',
        productName: 'Organic Flour',
        quantity: 2,
        price: 20,
        status: 'Delivered'
    },
    {
        orderId: '002',
        customerName: 'Jolly Jolly',
        productName: 'Organic Rice',
        quantity: 1,
        price: 15,
        status: 'Processing'
    },
    {
        orderId: '003',
        customerName: 'Taaka Esther',
        productName: 'Organic Sugar',
        quantity: 5,
        price: 50,
        status: 'Shipped'
    }
];

const Orders = () => {
    return (
        <section className="orders">
            <h2>Customer Orders</h2>
            <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Customer Name</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Price ($)</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {ordersData.map(order => (
                        <tr key={order.orderId}>
                            <td>{order.orderId}</td>
                            <td>{order.customerName}</td>
                            <td>{order.productName}</td>
                            <td>{order.quantity}</td>
                            <td>{order.price}</td>
                            <td>{order.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}

export default Orders;

