import React, { Component } from 'react';
import { FooterItems } from './FooterItems';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div>
            <footer className="FooterItems">
                        {/* imports MenuItems, then maps array */}
                        {FooterItems.map((item, index) => {
                            return (
                                // a className is equal to item.cName, cname in FooterItems.js is 
                                // equal to footer-links
                                <li key={index}>
                                    <a className={item.cName} href={item.url}>
                                        {item.title}
                                    </a>
                                </li>
                            );
                        })}
            </footer>
            <i  id='copy-write' class="fa-regular fa-copyright">Artistic Imp 2015-2022</i>
            </div>
        )
    }
}

export default Footer;