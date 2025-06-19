import React from 'react'
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <footer className='footer'
        style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/assets/fBackground.jpg)`}}>
        
        <div className='footerLinks'>
            <div className='logo'>
            <Link to="/">ShopifyX</Link>
        </div>
        <div>
            <h4 className='fPara'>Categories</h4>
            <Link to="/" className='fLink'>Plants</Link>
            <br></br>
            <Link to="/" className='fLink'>Pots & Planter</Link>
            <br></br>
            <Link to="/" className='fLink'>Plant Care</Link>
        </div>
        <div>
            <h4 className='fPara'>Policies</h4>
            <Link to="/" className='fLink'>Privacy Policy</Link>
            <br></br>
            <Link to="/" className='fLink'>Terms of Service</Link>
            <br></br>
            <Link to="/" className='fLink'>Return Policy</Link>
        </div>
        <div>
            <h4 className='fPara'>Quick links</h4>
            <Link to="/" className='fLink'>Home</Link>
            <br></br>
            <Link to="/" className='fLink'>About Us</Link>
            <br></br>
            <Link to="/" className='fLink'>Contact Us</Link>
        </div>
        <div>
            <h4 className='fPara'>Contact us</h4>
            <Link to="/" className='fLink'>+94714295678</Link>
            <br></br>
            <Link to="/" className='fLink'>nibm@gmail.lk</Link>
            
            
            
        </div>
        </div>
            

    </footer>
  )
}

export default Footer