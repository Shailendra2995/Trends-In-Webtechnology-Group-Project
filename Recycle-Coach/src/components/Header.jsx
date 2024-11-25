/* 
Name: Shailendra Kumar Karki
Student id: 8895277
Email: skarki5277@conestogac.on.ca
 */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/logo.png';

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 50px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  img {
    height: 50px;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    background-color: white;
    z-index: 1000;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;

  @media (max-width: 1024px) {
    flex-direction: column;
    width: 100%;
    text-align: center;
  }
`;

const NavItem = styled(Link)`
  color: #2d2d2d;
  text-decoration: none;
  margin: 0 15px;
  font-weight: 500;
  position: relative;
  transition: color 0.3s ease;

  &:hover {
    color: #12b9c3;
  }

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #12b9c3;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 1024px) {
    margin: 10px 0;
    width: 100%;
    padding: 10px;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: column;
    width: 100%;
  }
`;

const SearchButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 15px;

  @media (max-width: 1024px) {
    margin: 10px 0;
  }
`;

const GetStartedButton = styled.button`
  background-color: #12b9c3;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0a8b94;
  }

  @media (max-width: 1024px) {
    width: 80%;
    margin: 10px 0;
  }
`;

const MobileMenuToggle = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 1024px) {
    display: block;
  }
`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <NavContainer>
      <Logo>
        <img src={logo} alt="EcoRecycle Logo" />
      </Logo>

      <MobileMenuToggle onClick={toggleMenu}>{isMenuOpen ? '✕' : '☰'}</MobileMenuToggle>

      <NavMenu isOpen={isMenuOpen}>
        <NavLinks>
          <NavItem to="/">Home</NavItem>
          <NavItem to="/recycling">Recycling Guide</NavItem>
          <NavItem to="/community">Community</NavItem>
          <NavItem to="/lookup">Resources</NavItem>
        </NavLinks>

        <ActionButtons>
          <SearchButton>
            <i className="fa fa-search"></i>
          </SearchButton>
          <GetStartedButton>Get Started</GetStartedButton>
        </ActionButtons>
      </NavMenu>
    </NavContainer>
  );
};

export default Navbar;
