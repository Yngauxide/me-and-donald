
import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/images/logo.png'


const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        window.scroll(0, 0);
        setIsOpen(!isOpen);
    };

    const toggleNavMenu = () => {
        setIsOpen(!isOpen);
    };

    const navLinkStyle = ({ isActive }) => {
        return {
            color: isActive ? '#1AA47B' : '',
        };
    };


    return (<div className={`px-[16px] h-[70px]  py-[16px] bg-white lg:px-[10%] lg:py-[4px] flex justify-between items-end  sticky top-0 z-40 `}>
        <div className={`${isOpen ? "fixed bg-custom top-0 right-0 w-[60%] flex-col transition-all duration-300 ease-in-out py-[10px] px-[24px] rounded-l-[10px] flex justify-between gap-[25px] h-[50vh] pt-[70px] text-white lg:hidden activeNav"
            : "fixed right-[-100%] transition-all duration-300 ease-in-out"} `}>
           

            <div className='text-center flex flex-col justify-start items-end gap-[25px]'>
                
                    <Link onClick={toggleMenu}  to={'/'} className='w-full'>
                        <p className=''>Explore</p>
                    </Link>
                    <Link onClick={toggleMenu}  to={'/about'} className='w-full'>
                        <p className=''>About Us</p>
                    </Link>
                {/* <div className='h-[1px] w-full navLine'></div> */}
                
                    <Link onClick={toggleMenu}  to={'/services'} className='w-full'>
                        <p className=''>Services</p>
                    </Link>
                {/* <div className='h-[1px] w-full navLine'></div> */}
                    <Link onClick={toggleMenu} to={'/contact'} className='w-full'>
                        <p className=''>Contact</p>
                    </Link>
            </div>

        </div>
      

      <div className='flex w-full  justify-between items-center'>
      <div className='flex justify-between w-full lg:justify-start items-center gap-20'>
      <Link to='/' onClick={() => {
            window.scroll(0, 0);
        }} >
            <div className='  '>
                <img src={logo} alt="" className='w-[70%]  lg:w-[100%]' />
            </div>
        </Link> 

        <div className='lg:hidden ' onClick={toggleNavMenu}>
            <div className={`hamburger-menu ${isOpen ? 'open' : ''} ${isOpen ? 'flex-row-reverse  bg-white rounded-r-[20px]' : ' bg-white'}`}>
                <div className={`line ${!isOpen ? 'bg-black' : 'bg-white'}`}></div>
                <div className="line bg-black"></div>
                <div className={`line ${!isOpen ? 'bg-black' : 'bg-white'}`}></div>
            </div>
        </div>
<div className='hidden justify-center lg:flex  items-center gap-9'>

            <NavLink style={navLinkStyle} onClick={() => {
                window.scroll(0, 0);
            }} to={'/'} className=''>
                Explore
            </NavLink>
            <NavLink style={navLinkStyle} onClick={() => {
                window.scroll(0, 0);
            }} to={'/about'}>
                About Us
            </NavLink>
            <NavLink style={navLinkStyle} onClick={() => {
                window.scroll(0, 0);
            }} to={'/services'}>
                Services
            </NavLink>
 </div>
</div>


        <div className='lg:flex justify-center items-center gap-[40rem] hidden'>


<div className='bg-custom rounded-full mr-[54px]  p-3'>
    <NavLink
        onClick={() => {
            window.scroll(0, 0);
        }}
        to={'/contact'}
        className='text-white  px-4 py-2 rounded-md '
    >
        Contact
    </NavLink>
</div>

        </div>

      </div>

    </div>);
}

export default Nav;