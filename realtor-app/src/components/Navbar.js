import React from 'react'
import { menuData } from '../Data/MenuData';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components/macro';
import { FaHome } from 'react-icons/fa';



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
const Logo = styled(FaHome)`

${NavLink}
`
const MenuBars = styled.i``;

const NavMenu = styled.div`
display:flex;
justify-content: space-between;
margin-right:0;
`;
const NavMenuLinks = styled(Link)`
${NavLink} 
font-size:20px;
margin-right:15px`;

// const Navbar = () => {
//   return (

//       <Nav>
//       <Logo to="/">Home icon</Logo>
//       <MenuBars/>
//       <NavMenu>
//         {menuData.map((item) => (
//       <NavMenuLinks to={item.link} key={item.id}>
//      {item.title}
//       </NavMenuLinks>
//         ))}
//       </NavMenu>

//       </Nav>


//   )
// }

const Navbar = () => {
  return (

    <Nav>
      <Logo to="/"><FaHome size={75} /> </Logo>
      <h1>There's No Place Like H<svg class="heart" viewBox="0 0 32 29.6">
        <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
  c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
      </svg> me</h1>

      <MenuBars />
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
