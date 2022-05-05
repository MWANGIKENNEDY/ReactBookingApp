import './featured.css';

const Featured = () => {
    return (
        <div>

            <div className="container">


                <div className="featuredItems">

                    <div className="featuredItem">
                        <img src="https://images.unsplash.com/photo-1617018681623-987895ca1c99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRvdXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className="featuredImg"/>

                        <div className="titles">
                            <h1 className="featuredTitle">Dublin</h1>
                            <h2 className="featuredSubTitle">The Beer Building</h2>


                        </div>

                    </div>

                    <div className="featuredItem">
                        <img src="https://images.unsplash.com/photo-1616038242814-a6eac7845d88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHRvdXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className="featuredImg"/>
                        <div className="titles">
                            <h1 className="featuredTitle">Greece</h1>
                            <h2 className="featuredSubTitle">Sherlock House</h2>

                        </div>

                    </div>

                    <div className="featuredItem">
                        <img src="https://images.unsplash.com/photo-1532370731809-bbe1661d7bf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHRvdXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className="featuredImg"/>
                        <div className="titles">
                            <h1 className="featuredTitle">Russia</h1>
                            <h2 className="featuredSubTitle">The Putin Residence</h2>


                        </div>

                    </div>


                </div>
            </div>


        </div>
    );
};

export default Featured;