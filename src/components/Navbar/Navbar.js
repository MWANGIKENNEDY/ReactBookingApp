import './navbar.css'
import Links from "../Links/Links";

const Navbar = ({type}) => {
    return (
        <div className={type === "list" ? "navbar-wrapper test" : "navbar-wrapper" }>

            <div className="container">
                <div className="navbar">
                    <div className="logo">

                        Booking.com

                    </div>
                    <div className="navlinks">
                        <ul>
                            <li>
                                <a className='btn currency' href="">KES</a>

                            </li>
                            <li>
                                <a className='btn icons' href="">
                                    <i className="uil uil-adjust"></i>
                                </a>

                            </li>
                            <li>
                                <a className='btn icons' href=""><i className="uil uil-amazon"></i></a>

                            </li>
                            <li>
                                <a className='btn list-property' href="">List your property</a>

                            </li>
                            <li>
                                <a className='btn actions' href="">Register</a>

                            </li>
                            <li>
                                <a className='btn actions' href="">Sign in</a>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <Links/>
            
        </div>
    );
};

export default Navbar;