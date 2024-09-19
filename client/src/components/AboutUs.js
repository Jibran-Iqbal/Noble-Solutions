import React from 'react';

const AboutUs = () => {
  return (
    <div style={{ padding: '40px 20px', fontFamily: 'Arial, sans-serif', color: '#333', backgroundColor: '#f9f9f9', lineHeight: '1.6' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', backgroundColor: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)' }}>
        <h1 style={{ color: '#333', fontSize: '2.5rem', textAlign: 'center', marginBottom: '20px' }}>About Us</h1>
        <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
          Welcome to <strong>Noble Solutions Trading Established</strong>! We are a dynamic and forward-thinking company, founded in 2022, with a mission to serve the rapidly evolving information technology and computer hardware industry in Saudi Arabia. Our commitment to excellence and customer satisfaction has earned us a reputation for delivering top-notch products and services at competitive prices.
        </p>
        
        <h2 style={{ color: '#444', fontSize: '2rem', marginBottom: '15px' }}>Our Expertise</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
          At Noble Solutions, we specialize in providing comprehensive IT solutions tailored to meet your business needs. Whether you're looking for high-performance workstations, business laptops, gaming laptops, or multifunction printers, we have the right products to enhance your productivity and streamline your operations.
        </p>
        
        <h2 style={{ color: '#444', fontSize: '2rem', marginBottom: '15px' }}>Our Products</h2>
        <ul style={{ listStyleType: 'disc', marginLeft: '20px', fontSize: '1.1rem', marginBottom: '20px' }}>
          <li>Desktop Computers & Workstations</li>
          <li>Business Laptops & Gaming Laptops</li>
          <li>Multifunction Color & Black and White Printers</li>
          <li>Inks, Toners & Cartridges</li>
          <li>Wireless Access Points</li>
          <li>Screens (TFT/LCD/LED Monitors)</li>
          <li>Component Upgrades – Memory (RAM) & Storage Solutions</li>
          <li>External Storage Media</li>
        </ul>
        
        <h2 style={{ color: '#444', fontSize: '2rem', marginBottom: '15px' }}>Why Choose Us?</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
          Our knowledgeable team, with years of experience in the IT industry, is dedicated to providing tailored solutions and unparalleled support. We pride ourselves on offering quality products and services that you can rely on to keep your business running smoothly.
        </p>
        
        <h2 style={{ color: '#444', fontSize: '2rem', marginBottom: '15px' }}>Contact Us</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '5px' }}>
          For more information or to place an order, feel free to reach out to us:
        </p>
        <p style={{ fontSize: '1.1rem', marginBottom: '5px' }}>
          <strong>Email:</strong> <a href="mailto:zain@noblesolutionsa.com" style={{ color: '#e74c3c', textDecoration: 'none' }}>zain@noblesolutionsa.com</a>
        </p>
        <p style={{ fontSize: '1.1rem', marginBottom: '5px' }}>
          <strong>Phone:</strong> 966 506499675
        </p>
        <p style={{ fontSize: '1.1rem' }}>
          <strong>Address:</strong> Al Oraifi Industrial Area, 35526. Jubail Industrial City, KSA.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
