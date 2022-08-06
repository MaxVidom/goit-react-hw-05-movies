import { Outlet } from 'react-router-dom';
import { StyledLink, NavBar } from './Layout.styled';
export default function Layout() {
  return (
    <div>
      <NavBar>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </NavBar>
      <Outlet />
    </div>
  );
}
