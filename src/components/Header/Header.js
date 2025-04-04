import React from 'react';
import './Header.css'; // Import styles

const Header = ({ activeMenu, handleMenuHover, handleSubmenuHover }) => {
    const submenuData = {
        projects: [
            { title: "NdaY'Radoko", key: 'radoko' },
            { title: "NdaY'Ben'Tanana", key: 'ben-tanana' },
            { title: "NdaY'Fako", key: 'fako' },
        ],
        news: [
            { title: 'Flash Info', key: 'flash-info' },
            { title: 'Updates', key: 'updates' },
        ],
        about: [
            { title: "NdaY' Team", key: 'team' },
            { title: "Where NdaY' Operates", key: 'operations' },
        ],
        contact: [
            { title: "Emails NdaY", key: 'email' },
            { title: "NdaY's Social Media", key: 'socialmedia' },
        ],
    };

    return (
        <header className="header">
            <div className="header-container">
                {/* Logo Section */}
                <div className="logo-container">
                    <img
                        src="/assets/images/NdaY_Logo.png"
                        alt="NdaY Logo"
                        className="logo"
                    />
                </div>

                {/* Welcome Text */}
                <div className="welcome-text">
                    <h1>Welcome to NdaY' Enterprise</h1>
                    <p>Bridging Innovation and Community for a sustainable future.</p>
                </div>

                {/* Horizontal Menu */}
                <nav className="horizontal-menu">
                    <ul>
                        {/* Projects Menu */}
                        {/* Projects Menu */}
                        <li
                            className="menu-item"
                            onMouseEnter={() => handleMenuHover('projects')}
                        >
                            <a href="#projects">NdaY' Projects</a>
                            {activeMenu === 'projects' && (
                                <ul className="vertical-menu">
                                    {submenuData.projects.map((item) => (
                                        <li
                                            key={item.key}
                                            onMouseEnter={() => handleSubmenuHover(item.key)}
                                        >
                                            <a href={`#${item.key}`}>{item.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>

                        {/* News Menu */}
                        <li
                            className="menu-item"
                            onMouseEnter={() => handleMenuHover('news')}
                        >
                            <a href="#news">NdaY' News</a>
                            {activeMenu === 'news' && (
                                <ul className="vertical-menu">
                                    {submenuData.news.map((item) => (
                                        <li
                                            key={item.key}
                                            onMouseEnter={() => handleSubmenuHover(item.key)}
                                        >
                                            <a href={`#${item.key}`}>{item.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>

                        {/* About Menu */}
                        <li
                            className="menu-item"
                            onMouseEnter={() => handleMenuHover('about')}
                        >
                            <a href="#about-us">About NdaY'</a>
                            {activeMenu === 'about' && (
                                <ul className="vertical-menu">
                                    {submenuData.about.map((item) => (
                                        <li
                                            key={item.key}
                                            onMouseEnter={() => handleSubmenuHover(item.key)}
                                        >
                                            <a href={`#${item.key}`}>{item.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>

                        {/* Contact Menu */}
                        <li
                            className="menu-item"
                            onMouseEnter={() => handleMenuHover('contact')}
                        >
                            <a href="#contact-us">NdaY' Contact</a>
                            {activeMenu === 'contact' && (
                                <ul className="vertical-menu">
                                    {submenuData.contact.map((item) => (
                                        <li
                                            key={item.key}
                                            onMouseEnter={() => handleSubmenuHover(item.key)}
                                        >
                                            <a href={`#${item.key}`}>{item.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;