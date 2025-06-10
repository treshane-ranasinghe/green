import React from 'react'

function Footer() {
  return (
    <footer className='Footer'>
        <div className='Logo'>
            <Link to="/">ShopifyX</Link>
        </div>
        <nav className='nav-Catergories'>
            <Link to="/about">Plants</Link>
            <Link to="/services">Seeds</Link>
            <Link to="/products">Pots & Planter</Link>
            <Link to="/contact">Plant Care</Link>
        </nav>
        <nav className='nav-Policies'>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
            <Link to="/return-policy">Return Policy</Link>
        </nav>
        <nav className='nav-Navigation'>
            <Link to="/home">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
        </nav>
        <nav className='nav-Contact'>
            <Link to="/contact">+94714295678</Link>
            <Link to="/email">nibm@gmail.lk</Link>
            <p>Colombo</p>
        </nav>

    </footer>
  )
}

export default Footer