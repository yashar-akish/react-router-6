import { NavLink } from 'react-router-dom';

function StyledNavbar() {
  return (
    <nav className='navbar'>
      <NavLink to='/' className={({isActive})=>isActive?'link active' : 'link'}>Home Page</NavLink>
      <NavLink to='about' className={({isActive})=>isActive?'link active' : 'link'}>About Page</NavLink>
      <NavLink to='products' className={({isActive})=>isActive?'link active' : 'link'}>Products Page</NavLink>
      <NavLink to='login' className={({isActive})=>isActive?'link active' : 'link'}>Login Page</NavLink>
    </nav>
  );
}

export default StyledNavbar;
