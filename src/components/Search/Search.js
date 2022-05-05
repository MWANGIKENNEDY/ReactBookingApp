import './search.css';
import {forwardRef, useState} from "react";
import { useNavigate } from "react-router-dom";
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns';

const Search = (props,ref) => {
    const navigate = useNavigate();

    const [open,setOpen] = useState(false);

    const [destination,setDestination] = useState("");

    const [date,setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        }
    ]);

    const [openoOtions,setOpenOptions]=useState(false);
    const [options,setOptions]=useState({
        adult:1,
        children:0,
        room:1
    })


    const mystyles={
        position:'absolute',

        width:'100%',
        bottom:`-${props.height/2}px`,


    }


    const handleClick = (mode, d)=>{
        setOptions((prev)=>{
            return {
                ...prev,
                [mode]: d === 'i' ? options[mode] + 1  : options[mode] - 1};
        });
    };


    const handleSearch=()=>{


        navigate('/hotels',{state:{destination,date,options}})

    }

    return (
        <div className='searchBar' ref={ref} style={mystyles}>
            <div className="container">

                <div className="search">

                    <div className="search-item one">
                        <i className="uil uil-map-marker icon"></i>
                        <input type="text"
                        placeholder='Where are you going ?'
                               onChange={(e)=>setDestination(e.target.value)}
                        />
                    </div>
                    <div className="search-item two">
                        <i className="uil uil-schedule icon"></i>
                        <span onClick={()=>setOpen(!open)}>{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
                        {open && <DateRangePicker
                            ranges={date}
                            onChange={item=>setDate([item.selection])}
                            className="date"
                        />}
                    </div>
                    <div className="search-item three">
                        <i className="uil uil-grin icon"></i>
                        <span onClick={()=>setOpenOptions(!openoOtions,)}>{`${options.adult} adult - ${options.children} children - ${options.room} room(s)`}</span>

                        {openoOtions &&
                            <div className="openOptions">
                                <div className="option">
                                    <span className="optionText">Adult</span>
                                    <div className="optionsWrapper">
                                        <button
                                            disabled={options.adult <= 0}
                                            className="optionCounterButton"
                                            onClick={()=>handleClick('adult','d')}>-</button>
                                        <span className="optionCounterNumber">{options.adult}</span>
                                        <button
                                            className="optionCounterButton"
                                            onClick={()=>handleClick('adult','i')}>+</button>
                                    </div>
                                </div>
                                <div className="option">
                                    <span className="optionText">Children</span>
                                    <div className="optionsWrapper">
                                        <button
                                            disabled={options.children <= 0}
                                            className="optionCounterButton"
                                            onClick={()=>handleClick('children','d')}>-</button>
                                        <span className="optionCounterNumber">{options.children}</span>
                                        <button
                                            className="optionCounterButton"
                                            onClick={()=>handleClick('children','i')}>+</button>
                                    </div>
                                </div>
                                <div className="option">
                                    <span className="optionText">Room(s)</span>
                                    <div className="optionsWrapper">
                                        <button
                                            disabled={options.room <= 0}
                                            className="optionCounterButton"
                                            onClick={()=>handleClick("room","d")}>-</button>
                                        <span className="optionCounterNumber">{options.room}</span>
                                        <button
                                            className="optionCounterButton"
                                            onClick={() => handleClick("room","i")}>+</button>
                                    </div>
                                </div>
                            </div>
                        }



                    </div>
                    <div className="search-item four"><a onClick={handleSearch} className='searchHotel' href="">Search</a></div>
                </div>


            </div>

        </div>
    );
};

export default forwardRef(Search);