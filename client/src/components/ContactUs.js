import React from 'react';

const ContactUs = () => {
  return (
    <div style={{ padding: '40px 20px', fontFamily: 'Arial, sans-serif', color: '#333', backgroundColor: '#f9f9f9', lineHeight: '1.6' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ fontSize: '2rem', color: '#333', marginBottom: '20px', textAlign: 'center' }}>Contact Us</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
          <strong>Noble Solutions Trading Established</strong> was founded in 2022 with a mission to excel in the computers, toner cartridge, and information technology sectors. By understanding the specific needs of the Saudi market, Noble Solutions has established itself at the forefront of the industry, known for professionalism, dedication, trust, and a commitment to quality.
        </p>
        <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
          We offer professional, high-quality services at competitive prices. Our range of hardware products includes:
        </p>
        <ul style={{ listStyleType: 'disc', marginLeft: '20px', fontSize: '1.1rem', marginBottom: '20px' }}>
          <li>Desktop Computers & Workstations</li>
          <li>Business Laptops & Gaming Laptops</li>
          <li>Scanners</li>
          <li>Multifunction Color & Black And White Printers</li>
          <li>Inks / All Brands Toners & Cartridges</li>
          <li>Wireless Access Points</li>
          <li>Screens (TFT/LCD/LED Monitors)</li>
          <li>Component Upgrades – Memory (RAM) & Hard Disks (Storage)</li>
          <li>External Storage Media</li>
        </ul>
        <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
          For ordering products or any queries, please reach out to us at: 
          <a href="mailto:zain@noblesolutionsa.com" style={{ color: '#e74c3c', textDecoration: 'none', marginLeft: '5px' }}>zain@noblesolutionsa.com</a>.
        </p>
        <p style={{ fontSize: '1.1rem', textAlign: 'center' }}>We look forward to serving you!</p>
      </div>
    </div>
  );
};

export default ContactUs;
