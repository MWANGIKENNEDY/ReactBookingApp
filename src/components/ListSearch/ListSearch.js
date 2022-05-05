import './listSearch.css';
import {useLocation} from "react-router-dom";
import {useState} from "react";
import {format} from "date-fns";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {DateRangePicker} from "react-date-range";

const ListSearch = () => {

    const location = useLocation();
    const [opened,setOpened] = useState(false)
    const [destination,setDestination] = useState(location.state.destination)
    const [date,setDate] = useState(location.state.date)
    const [options,setOptions] = useState(location.state.options);



    return (
        <div className='container'>

            <div className="listWrapper">

                <div className="listSearch">

                    <h1 className='lsSearch'>Search</h1>
                    <span className='lsTitle'>Destination</span>
                    <div className="listSearchInput">
                        <input type="text" placeholder={destination}/>
                    </div>
                    <span className='lsTitle'>Check-in date</span>
                    <div className="listSearchInput">
                        <span className='hello' onClick={()=>setOpened(!opened)}>
                            {`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}

                            {opened && <DateRangePicker
                                ranges={date}
                                onChange={item=>setDate([item.selection])}
                                className="date"
                                minDate={new Date()}
                            />}

                        </span>
                    </div>
                    <span className='lsTitle'>Options</span>

                    <div className="options">

                        <div className="option">
                            <span className='outer'>Min price <span className="inner">(per night)</span></span>
                            <input type="number" min={1}/>
                        </div>
                        <div className="option">
                            <span className='outer'>Max price <span className="inner">(per night)</span></span>
                            <input type="number" min={1}/>
                        </div>
                        <div className="option">
                            <span className='outer'>Adult</span>
                            <input type="number" min={1} placeholder={options.adult}/>
                        </div>
                        <div className="option">
                            <span className='outer'>Children</span>
                            <input type="number" min={1} placeholder={options.children}/>
                        </div>
                        <div className="option">
                            <span className='outer'>Room(s)</span>
                            <input type="number" min={1} placeholder={options.room}/>
                        </div>
                    </div>

                    <a className='submitQuery' href="">Search</a>


                </div>

                <div className="itemPanel">

                    <div className="oneItem">

                        <div className="itemImage">
                            <img className="itemImg" src="https://images.unsplash.com/photo-1649771655642-1f586e1f103b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
                        </div>

                        <div className="itemDescription">

                            <div className="l1">
                                <span className='l1Left'>
                                    Tower Street Apartments

                                </span>

                                <div className="l1-inner">
                                    <span className='l1-score'>Excellent</span>
                                    <span className='l1-rating'>8.9</span>
                                </div>
                            </div>
                            <span className="l2">500m from center</span>
                            <span className="l3">Free airport taxi</span>
                            <span className="l4">Studio apartment with air conditioning</span>
                            <div className="l5">
                                <span className="l5left">
                                    Entire studio - 1 bathroom - 21m full bed

                                </span>
                                <span className="l5right">
                                    $112
                                </span>

                                </div>
                            <div className="l6">
                                <span className='l6Left'>
                                    Free cancellation

                                </span>

                                <span className='l6Right'>
                                    Includes taxes and fees

                                </span>

                            </div>
                            <div className="l7">

                                <span className="l7Left">
                                    You can cancel later, so lock in this great price today!

                                </span>

                                <span className="l7Right">
                                    See availability

                                </span>
                            </div>


                        </div>


                    </div>
                    <div className="oneItem">

                        <div className="itemImage">
                            <img className="itemImg" src="https://images.unsplash.com/photo-1649771655642-1f586e1f103b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
                        </div>

                        <div className="itemDescription">

                            <div className="l1">
                                <span className='l1Left'>
                                    Tower Street Apartments

                                </span>

                                <div className="l1-inner">
                                    <span className='l1-score'>Excellent</span>
                                    <span className='l1-rating'>8.9</span>
                                </div>
                            </div>
                            <span className="l2">500m from center</span>
                            <span className="l3">Free airport taxi</span>
                            <span className="l4">Studio apartment with air conditioning</span>
                            <div className="l5">
                                <span className="l5left">
                                    Entire studio - 1 bathroom - 21m full bed

                                </span>
                                <span className="l5right">
                                    $112
                                </span>

                            </div>
                            <div className="l6">
                                <span className='l6Left'>
                                    Free cancellation

                                </span>

                                <span className='l6Right'>
                                    Includes taxes and fees

                                </span>

                            </div>
                            <div className="l7">

                                <span className="l7Left">
                                    You can cancel later, so lock in this great price today!

                                </span>

                                <span className="l7Right">
                                    See availability

                                </span>
                            </div>


                        </div>


                    </div>
                    <div className="oneItem">

                        <div className="itemImage">
                            <img className="itemImg" src="https://images.unsplash.com/photo-1649771655642-1f586e1f103b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
                        </div>

                        <div className="itemDescription">

                            <div className="l1">
                                <span className='l1Left'>
                                    Tower Street Apartments

                                </span>

                                <div className="l1-inner">
                                    <span className='l1-score'>Excellent</span>
                                    <span className='l1-rating'>8.9</span>
                                </div>
                            </div>
                            <span className="l2">500m from center</span>
                            <span className="l3">Free airport taxi</span>
                            <span className="l4">Studio apartment with air conditioning</span>
                            <div className="l5">
                                <span className="l5left">
                                    Entire studio - 1 bathroom - 21m full bed

                                </span>
                                <span className="l5right">
                                    $112
                                </span>

                            </div>
                            <div className="l6">
                                <span className='l6Left'>
                                    Free cancellation

                                </span>

                                <span className='l6Right'>
                                    Includes taxes and fees

                                </span>

                            </div>
                            <div className="l7">

                                <span className="l7Left">
                                    You can cancel later, so lock in this great price today!

                                </span>

                                <span className="l7Right">
                                    See availability

                                </span>
                            </div>


                        </div>


                    </div>
                    <div className="oneItem">

                        <div className="itemImage">
                            <img className="itemImg" src="https://images.unsplash.com/photo-1649771655642-1f586e1f103b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
                        </div>

                        <div className="itemDescription">

                            <div className="l1">
                                <span className='l1Left'>
                                    Tower Street Apartments

                                </span>

                                <div className="l1-inner">
                                    <span className='l1-score'>Excellent</span>
                                    <span className='l1-rating'>8.9</span>
                                </div>
                            </div>
                            <span className="l2">500m from center</span>
                            <span className="l3">Free airport taxi</span>
                            <span className="l4">Studio apartment with air conditioning</span>
                            <div className="l5">
                                <span className="l5left">
                                    Entire studio - 1 bathroom - 21m full bed

                                </span>
                                <span className="l5right">
                                    $112
                                </span>

                            </div>
                            <div className="l6">
                                <span className='l6Left'>
                                    Free cancellation

                                </span>

                                <span className='l6Right'>
                                    Includes taxes and fees

                                </span>

                            </div>
                            <div className="l7">

                                <span className="l7Left">
                                    You can cancel later, so lock in this great price today!

                                </span>

                                <span className="l7Right">
                                    See availability

                                </span>
                            </div>


                        </div>


                    </div>
                    <div className="oneItem">

                        <div className="itemImage">
                            <img className="itemImg" src="https://images.unsplash.com/photo-1649771655642-1f586e1f103b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
                        </div>

                        <div className="itemDescription">

                            <div className="l1">
                                <span className='l1Left'>
                                    Tower Street Apartments

                                </span>

                                <div className="l1-inner">
                                    <span className='l1-score'>Excellent</span>
                                    <span className='l1-rating'>8.9</span>
                                </div>
                            </div>
                            <span className="l2">500m from center</span>
                            <span className="l3">Free airport taxi</span>
                            <span className="l4">Studio apartment with air conditioning</span>
                            <div className="l5">
                                <span className="l5left">
                                    Entire studio - 1 bathroom - 21m full bed

                                </span>
                                <span className="l5right">
                                    $112
                                </span>

                            </div>
                            <div className="l6">
                                <span className='l6Left'>
                                    Free cancellation

                                </span>

                                <span className='l6Right'>
                                    Includes taxes and fees

                                </span>

                            </div>
                            <div className="l7">

                                <span className="l7Left">
                                    You can cancel later, so lock in this great price today!

                                </span>

                                <span className="l7Right">
                                    See availability

                                </span>
                            </div>


                        </div>


                    </div>
                    <div className="oneItem">

                        <div className="itemImage">
                            <img className="itemImg" src="https://images.unsplash.com/photo-1649771655642-1f586e1f103b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
                        </div>

                        <div className="itemDescription">

                            <div className="l1">
                                <span className='l1Left'>
                                    Tower Street Apartments

                                </span>

                                <div className="l1-inner">
                                    <span className='l1-score'>Excellent</span>
                                    <span className='l1-rating'>8.9</span>
                                </div>
                            </div>
                            <span className="l2">500m from center</span>
                            <span className="l3">Free airport taxi</span>
                            <span className="l4">Studio apartment with air conditioning</span>
                            <div className="l5">
                                <span className="l5left">
                                    Entire studio - 1 bathroom - 21m full bed

                                </span>
                                <span className="l5right">
                                    $112
                                </span>

                            </div>
                            <div className="l6">
                                <span className='l6Left'>
                                    Free cancellation

                                </span>

                                <span className='l6Right'>
                                    Includes taxes and fees

                                </span>

                            </div>
                            <div className="l7">

                                <span className="l7Left">
                                    You can cancel later, so lock in this great price today!

                                </span>

                                <span className="l7Right">
                                    See availability

                                </span>
                            </div>


                        </div>


                    </div>
                    <div className="oneItem">

                        <div className="itemImage">
                            <img className="itemImg" src="https://images.unsplash.com/photo-1649771655642-1f586e1f103b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
                        </div>

                        <div className="itemDescription">

                            <div className="l1">
                                <span className='l1Left'>
                                    Tower Street Apartments

                                </span>

                                <div className="l1-inner">
                                    <span className='l1-score'>Excellent</span>
                                    <span className='l1-rating'>8.9</span>
                                </div>
                            </div>
                            <span className="l2">500m from center</span>
                            <span className="l3">Free airport taxi</span>
                            <span className="l4">Studio apartment with air conditioning</span>
                            <div className="l5">
                                <span className="l5left">
                                    Entire studio - 1 bathroom - 21m full bed

                                </span>
                                <span className="l5right">
                                    $112
                                </span>

                            </div>
                            <div className="l6">
                                <span className='l6Left'>
                                    Free cancellation

                                </span>

                                <span className='l6Right'>
                                    Includes taxes and fees

                                </span>

                            </div>
                            <div className="l7">

                                <span className="l7Left">
                                    You can cancel later, so lock in this great price today!

                                </span>

                                <span className="l7Right">
                                    See availability

                                </span>
                            </div>


                        </div>


                    </div>






                </div>




            </div>

        </div>
    );
};

export default ListSearch;