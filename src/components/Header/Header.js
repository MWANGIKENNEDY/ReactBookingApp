import './header.css'
import Search from "../Search/Search";
import {useEffect, useRef, useState} from "react";

const Header = ({type}) => {

    const myRef = useRef(null);
    const [offsetHeight,setOffsetHeight] = useState();

    useEffect(()=>{
        setOffsetHeight(myRef.current.offsetHeight);
    },[])

    return (
        <div className="myHeader">

            {type !== "list" && <>

                <div className="container">
                    <h1>
                        A lifetime of discounts? It's Genius.
                    </h1>

                    <p>
                        Get rewarded for your travels – unlock instant savings of 10% or more with a free
                        <span className='lower'>
                        Booking.com account

                </span>

                    </p>

                    <a className="btn-cta" href="">Sign in / Register</a>

                </div>

                <Search ref={myRef} height={offsetHeight}/>
            </>
            }



        </div>


    );
};

export default Header;