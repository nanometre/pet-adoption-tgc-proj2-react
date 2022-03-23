import React from 'react';
import Email from '../assets/images/email.png';
import LinkedIn from '../assets/images/linkedin.png';
import Github from '../assets/images/github.png';
import { openInNewTab } from '../utils';


export default function Footer() {
    return (
        <React.Fragment>
            <footer className="text-center text-white" style={{ backgroundColor: "#f1f1f1" }}>
                {/* <!-- Grid container --> */}
                <div className="container pt-4">
                    {/* <!-- Section: Social media --> */}
                    <section className="mb-4">
                        {/* <!-- Linkedin --> */}
                        <img
                            style={{margin: "0px 10px"}}
                            src={LinkedIn}
                            role="button"
                            onClick={()=>openInNewTab("https://www.linkedin.com/in/benedictwcy/")}
                        />
                        {/* <!-- Github --> */}
                        <img
                            style={{margin: "0px 10px"}}
                            src={Github}
                            role="button"
                            onClick={()=>openInNewTab("https://github.com/nanometre")}
                        />
                        {/* <!-- Email --> */}
                        <img
                            style={{margin: "0px 10px"}}
                            src={Email}
                            role="button"
                            onClick={()=>openInNewTab("mailto:benedictwcy@hotmail.com")}
                        />
                    </section>
                    {/* <!-- Section: Social media --> */}
                </div>
                {/* <!-- Grid container --> */}

                {/* <!-- Copyright --> */}
                <div className="text-center text-dark p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                    © {new Date().getFullYear()} nanometre. All rights reserved.
                </div>
                {/* <!-- Copyright --> */}
            </footer>
        </React.Fragment>
    )
}