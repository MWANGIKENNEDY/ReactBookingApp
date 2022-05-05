import './links.css';

const Links = () => {
    return (
        <div className='my-links'>

            <div className="container">

                <ul className="links">
                    <li><a className='link active' href="">
                        <span><i className="uil uil-bed"></i></span>
                        <span>Stays</span>

                    </a></li>
                    <li><a className='link' href="">
                        <span><i className="uil uil-plane-departure"></i></span>
                        <span>Flights</span>

                    </a></li>
                    <li><a className='link' href="">
                        <span><i className="uil uil-car"></i></span>
                        <span>Car rentals</span>

                    </a></li>
                    <li><a className='link' href="">
                        <span><i className="uil uil-game-structure"></i></span>
                        <span>Attractions</span>

                    </a></li>
                    <li><a className='link' href="">
                        <span><i className="uil uil-car-wash"></i></span>
                        <span>Airport taxis</span>

                    </a></li>
                </ul>




            </div>

        </div>
    );
};

export default Links;