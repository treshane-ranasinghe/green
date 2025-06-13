import React from 'react'
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <footer className='Footer'>
        <div className='Logo'>
            <Link to="/">ShopifyX</Link>
        </div>
        <nav className='nav-Catergories'>
            <Link to="/">Plants</Link>
            <Link to="/">Seeds</Link>
            <Link to="/">Pots & Planter</Link>
            <Link to="/">Plant Care</Link>
        </nav>
        <nav className='nav-Policies'>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms of Service</Link>
            <Link to="/">Return Policy</Link>
        </nav>
        <nav className='nav-Navigation'>
            <Link to="/">Home</Link>
            <Link to="/">About Us</Link>
            <Link to="/">Contact Us</Link>
        </nav>
        <nav className='nav-Contact'>
            <Link to="/">+94714295678</Link>
            <Link to="/">nibm@gmail.lk</Link>
            <p>Colombo</p>
        </nav>

    </footer>
  )
}

export default Footer