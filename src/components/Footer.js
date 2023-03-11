import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="row row-cols-sm-1 row-cols-md-3 row-cols-lg-3 bg-dark text-light pt-3 text-center">
            <div className="col">
                <h6>Get to Know Us</h6>
                <p>About Us</p>
                <p>Careers</p>
            </div>
            <div className="col ">
            <h6>Connect with Us</h6>
                <p>Facebook</p>z
                <p>Twitter</p>
                <p>Instagram</p>
            </div>
            <div className="col">
                <h6>Contact us</h6>
                <p>+91 1234567890</p>
                <h6>Email</h6>
                <p>amazon@gmail.com</p>
            </div>
        </div>
    </div>
  )
}

export default Footer