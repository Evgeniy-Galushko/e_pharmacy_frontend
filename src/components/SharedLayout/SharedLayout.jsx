import { NavLink } from "react-router-dom";

export default function SharedLayout({ children }) {
  return (
    <>
      <header>
        <NavLink to="/home">HomePage</NavLink>
        <NavLink to="/medicine-store">Medicine store</NavLink>
        <NavLink to="/medicine">Medicine</NavLink>

        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">LoginPage</NavLink>

        <p>Heder</p>
      </header>
      {children}
      <footer>
        <p>Footer</p>
      </footer>
    </>
  );
}
