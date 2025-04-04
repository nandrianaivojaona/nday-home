import React, { useState } from 'react'; // Import useState from React
import Header from './components/Header/Header';
import MergedSection from './components/MergedSection/MergedSection';
import Footer from './components/Footer/Footer';
import './App.css'; // Import global styles

const App = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const [selectedSubmenu, setSelectedSubmenu] = useState(null);
    const [isDynamicBackgroundActive, setIsDynamicBackgroundActive] = useState(true);

    const handleMenuHover = (menu) => {
        console.log('Hovering over menu:', menu); // Debug active menu
        setActiveMenu(menu); // Set the active menu
        setSelectedSubmenu(menu); // Automatically display related content
        setIsDynamicBackgroundActive(false); // Stop animations when hovering over the menu
    };
    // Function to handle hovering over a submenu item
    const handleSubmenuHover = (submenu) => {
        console.log(`Hovered submenu: ${submenu}`);
        setSelectedSubmenu(submenu);
    };
    const handleMouseLeave = () => {
        console.log('Mouse left menu'); // Debug when mouse leaves
        setActiveMenu(null); // Reset the active menu
        setSelectedSubmenu(null); // Hide related content
        setIsDynamicBackgroundActive(true); // Resume animations when leaving the menu
    };

    return (
        <div className="app">
            <Header
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
                handleMenuHover={handleMenuHover} // Pass handleMenuHover
                handleMouseLeave={handleMouseLeave} // Pass handleMouseLeave
                handleSubmenuHover={handleSubmenuHover} // Pass handleSubmenuHover
                setIsDynamicBackgroundActive={setIsDynamicBackgroundActive} // Pass control for animations
            />
            <MergedSection
                selectedSubmenu={selectedSubmenu}
                isDynamicBackgroundActive={isDynamicBackgroundActive}
                onMouseLeave={handleMouseLeave} // Reset submenu and animations
            />
            <Footer />
        </div>
    );
};

export default App;