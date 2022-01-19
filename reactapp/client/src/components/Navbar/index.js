import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import { animateScroll as scroll} from 'react-scroll';
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn, 
    NavBtnLink
} from './NavbarElements';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>logo</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about"
                            smooth={true} duration={500} spy={true} exact='true' offset={-80}
                            >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="Notifications"
                            smooth={true} duration={500} spy={true} exact='true' offset={-80}
                            >Notifications</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="recipes"
                            smooth={true} duration={500} spy={true} exact='true' offset={-80}
                            >Recipes</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup"
                            smooth={true} duration={500} spy={true} exact='true' offset={-80}
                            >Sign Up</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
