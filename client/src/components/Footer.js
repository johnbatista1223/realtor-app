import React from 'react';
import '../styles/footer.css';



//random note
function Footer() {

    return (
        <div className="footer">
            <div className="footer-links">
                <div className="page-links">
                    <a className="footer-a after-line" href="/Homes">Homes</a>
                    <a className="footer-a after-line" href="/Contact">Contact Us</a>
                    <a className="footer-a after-line" href="">Profile</a>
                    <a className="footer-a" href="">Logout</a>
                </div>
                <div className="coding-links">
                    <a className="coding-a after-line" href="">Heroku</a>
                    <a className="coding-a" href="">GitHub</a>
                </div>
            </div>
            <div className="info">
                <p>Copyright © 2021 RAJA Realty & Development. All Rights Reserved.</p>
                <p>405 Arnold Ave. Point Break, DE 08742 Phone: 732-475-9165</p>

            </div>
        </div>

    )
}

export default Footer
