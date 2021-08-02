import React from 'react'
import{menuData} from '../Data/MenuData';
import { Link } from 'react-router-dom';
import styled, {css} from 'styled-components/macro';



const Nav = styled.nav`
margin-left:-10px;
height:60px;
display:flex;
justify-content: space-between;
padding: 1rem 2rem;
z-index:100;
background-color:rgb(111, 47, 47);
width:100%;
`
 const NavLink = css`
 color:#fff;
 display:flex;
 align-items:center;
 padding: 0 2rem;
 height:100%;
 cursor:pointer;
 text-decoration:none;
 `
const Logo = styled(Link)`
${NavLink}
`
const MenuBars = styled.i``;

const NavMenu = styled.div `
display:flex;
justify-content: space-between;
margin-right:0;
`;
const NavMenuLinks = styled(Link) `
${NavLink} 
font-size:20px;
margin-right:15px`;

const Navbar = () => {
  return (
    
      <Nav>
      <Logo to="/">Home icon</Logo>
      <MenuBars/>
      <NavMenu>
        {menuData.map((item) => (
      <NavMenuLinks to={item.link} key={item.id}>
     {item.title}
      </NavMenuLinks>
        ))}
      </NavMenu>
     
      </Nav>
      
   
  )
}

export default Navbar
