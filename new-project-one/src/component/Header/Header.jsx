import { Link, NavLink } from "react-router-dom";
import './Header.css';
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";



const Header = () => {

  const {user,logOut} = useContext(AuthContext)
 const handleLogOut = () =>{
  logOut()
  .then(() => console.log('user logged out'))
  .catch(error => console.error(error))
 }



      const link =( <>
      
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/next'>Next Event</NavLink></li>
      <li><NavLink to='/popularity'>Popularity</NavLink></li>
      <li><NavLink to='/games'>Games</NavLink></li>
    
      
      </>);


    return (

        <div className="navbar bg-base-100 px-7">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {link}
      </ul>
    </div>
    <img src="https://i.ibb.co/qrq1NH0/logo-1-removebg-preview.png" className="w-20 h-20" alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-4">
    {link}
    </ul>
  </div>
  <div className="navbar-center">
  <ul className="menu menu-horizontal px-1 gap-3">
   
    </ul>
  {
    user ?<span >
  <a onClick={handleLogOut} className="btn btn-sm">sign out</a>
  </span>
  : <Link to='/login'>
     <button className="btn btn-sm">login</button>
  </Link>
    
     
  }
 
  </div>
</div>
    );
};

export default Header;