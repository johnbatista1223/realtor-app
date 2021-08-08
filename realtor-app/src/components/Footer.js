import React from 'react';
import '../styles/footer.css';

//random note
function Footer() {

    return (
        <div id="footer">
            <div class="container">
                <div class="row">
                    <div class="span2">
                        <div class="footer-list">
                            <a href="https://github.com/johnbatista1223/realtor-app">
                                <li class="list">GitHub</li>
                            </a>
                            <a href="/Contact">
                                <li class="list">Contact Us</li>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="copyright-bar">
                <div class="container">
                    <div class="row">
                        <div class="copyright-content">Copyright 2021 All rights reserved | This site was made with by <a href="https://www.linkedin.com/in/ashleighfreiler/">Ashleigh Freilder</a><a href="https://www.linkedin.com/mwlite/in/john-Batista4">John Batista</a> <a href="https://www.linkedin.com/in/amysmerlick/">Amy Smerlick</a> <a href="https://www.linkedin.com/in/raquan-stanley/">Raquan Stanley</a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer