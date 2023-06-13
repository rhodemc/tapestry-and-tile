import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = ({ currentPage, handlePageChange }) => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => setToggle(!toggle);

    return (
        <header className="flex justify-between px-5 py-2 bg-primary text-white sticky top-0">
            <a href="/" className="logo text-2xl font-bold text-accent">RHODEMC</a>

            {/* Desktop Nav */}
            <nav className="hidden md:block">
                <ul className="flex">
                    <li><a href="#about"
                    onClick={() => handlePageChange('About')}
                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About Me</a></li>
                    <li><a href="#portfolio"
                    onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</a></li>
                    <li><a href="#contact"
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a></li>
                    <li><a href="#resume"
                    onClick={() => handlePageChange('Resume')}
                    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</a></li>
                </ul>
            </nav>

            {/* Mobile Nav */}
            <nav className={
                !toggle
                    ? "mobile-nav left-[-100%]"
                    : "mobile-nav left-0"
            }>
                <ul className="flex flex-col">
                <li><a href="#about"
                    onClick={() => handlePageChange('About')}
                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About Me</a></li>
                    <li><a href="#portfolio"
                    onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</a></li>
                    <li><a href="#contact"
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a></li>
                    <li><a href="#resume"
                    onClick={() => handlePageChange('Resume')}
                    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</a></li>
                </ul>
            </nav>

            {/* Toggle Button */}
            <button onClick={handleToggle} className="block md:hidden">
                {
                    !toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />
                }
            </button>


        </header>
    );
    }

    export default Header;