import React, { useContext } from 'react'
import { menuData } from '../Data/MenuData';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components/macro';
import { FaHome } from 'react-icons/fa';
import { UserContext } from '../context/UserProvider';
// import '../styles/navmenu.css';


const Nav = styled.nav`
font-family: 'Josefin Sans', sans-serif;
color:#FFFFFF;
margin-left:-10px;
height:100px;
display:flex;
justify-content: space-between;
padding: 1rem 2rem;
z-index:100;
background-color:rgba(23, 45, 79, 1);
width:100%;
font-size: 25px;
.heart {
  fill: red;
  position: relative;
  top: 5px;
  width: 20px;
  animation: pulse 1s ease infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
}`

const NavLink = css`
&:hover {background-color:lime; color:navy};
border-radius:10px;
 color:#FFFFFF;
 display:flex;
 align-items:center;
 padding: 0 2rem;
 height:100%;
 cursor:pointer;
 transition: .5s all ease-in-out;
 text-decoration:none;
 font-weight:bold;

`
const Logo = styled(Link)`
&:hover {background-color:lime; color:navy};
@keyframes TransitioningBackground {
  0% {
    background-position: 1% 0%;
  }
  50% {
    background-position: 99% 100%;
  }
  100% {
    background-position: 1% 0%;
  }
}

${NavLink}
`



const MenuBars = styled.i``;

const NavMenu = styled.div`
display:flex;
justify-content: space-between;
margin-right:0;
`


const h1 = styled.h1`
font-size-30px;
color:white`;

const NavMenuLinks = styled(Link)`
${NavLink}
font-size:30px;
margin-right:15px`;

const Navbar = () => {

  const { loggedIn } = useContext(UserContext)
  return (
    <Nav>
      <Logo to="/"><FaHome size={75} /> </Logo>
      <h1>There's No Place Like H<svg class="heart" viewBox="0 0 32 29.6">
        <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
  c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
      </svg>me</h1>

      <MenuBars />
      {loggedIn && <NavMenu>
        {menuData.map((item) => (
          <NavMenuLinks to={item.link} key={item.id}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>}

    </Nav>


  )
}

export default Navbar
