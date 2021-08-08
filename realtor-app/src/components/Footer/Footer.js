import React from 'react';
import './footer.css';

//random note
function Footer() {

    return (
        <div class="footer">
            <div class="contain">
                <div class="col">
                    <h1>Company</h1>
                    <ul>
                        <li><a href="/Contact">About</a></li>
                        <li><a href="/Contact">Mission</a></li>
                        <li><a href="/Contact">Services</a></li>
                        <li><a href="/Contact">Social</a></li>
                        <li><a href="/Contact">Get in Touch</a></li>
                    </ul>
                </div>
                <div class="col">
                    <h1>Products</h1>
                    <ul>
                        <li><a href="/Homes">About</a></li>
                        <li><a href="/Homes">Mission</a></li>
                        <li><a href="/Homes">Services</a></li>
                        <li><a href="/Homes">Social</a></li>
                        <li><a href="/Homes">Get in Touch</a></li>
                    </ul>
                </div>
                <div class="col">
                    <h1>Accounts</h1>
                    <ul>
                        <li><a href="/Rentals">About</a></li>
                        <li><a href="/Rentals">Mission</a></li>
                        <li><a href="/Rentals">Services</a></li>
                        <li><a href="/Rentals">Social</a></li>
                        <li><a href="/Rentals">Get in Touch</a></li>
                    </ul>
                </div>
                <div class="col social">
                    <h1>Social</h1>
                    <ul>
                        <a href="https://github.com/johnbatista1223/realtor-app">
                            <li class="list"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="black" className="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg></li></a>
                    </ul>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>

    )
}

export default Footer

{/* 
                    // <div id="footer">
        //     <div class="container">
        //         <div class="row">
        //             <div class="span2">
        //                 <div class="footer-list">
        //                     <a href="https://github.com/johnbatista1223/realtor-app">
        //                         <li class="list">GitHub</li>
        //                     </a>
        //                     <a href="/Contact">
        //                         <li class="list">Contact Us</li>
        //                     </a>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <div id="copyright-bar">
        //         <div class="container">
        //             <div class="row">
        //                 <div class="copyright-content">Copyright 2021 All rights reserved | This site was made with by <a href="https://www.linkedin.com/in/ashleighfreiler/">Ashleigh Freilder</a><a href="https://www.linkedin.com/mwlite/in/john-Batista4">John Batista</a> <a href="https://www.linkedin.com/in/amysmerlick/">Amy Smerlick</a> <a href="https://www.linkedin.com/in/raquan-stanley/">Raquan Stanley</a>

        //                 </div>
        //             </div>
        //         </div>
        //     </div> 
        // </div> */}