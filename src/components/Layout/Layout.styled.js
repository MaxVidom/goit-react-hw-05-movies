import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
text-decoration: none;
padding: 5px 10px;
color: black;
border: 2px dashed;
border-radius: 5px;

&.active {
    background-color: orange;
}

&+&{
    margin-left: 20px;
}
`
export const NavBar = styled.nav`
padding: 20px 0px 15px 5px;
`
