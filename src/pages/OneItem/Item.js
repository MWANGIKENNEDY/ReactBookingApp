import './item.css';
import MailList from "../../components/MailList/MailList";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import {useState} from "react";

const Item = () => {

    const [open,setOpen] = useState(false);
    const [index,setIndex] = useState(0);

    const images = [
        {src:'https://images.unsplash.com/photo-1651513819110-f86d1569f9a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60'},
        {src:'https://images.unsplash.com/photo-1651510630827-e599dfa2d954?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60'},
        {src:'https://images.unsplash.com/photo-1650092071863-b47da0c0065b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60'},
        {src:'https://images.unsplash.com/photo-1651505943305-3bd598916608?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60'},
        {src:'https://images.unsplash.com/photo-1651515911858-19e8b44ffb1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60'},
        {src:'https://images.unsplash.com/photo-1651516529610-9a1578083b7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60'},
    ]

    const handleClick = (index) =>{
        setOpen(true);
        setIndex(index);
    }

    const switchImages = (i) =>{
        let newSlider;
        if(i === 'left'){
            newSlider = index === 0 ? 5 : index-1;
        }else{
            newSlider = index === 5 ? 0 : index+1;
        }
        setIndex(newSlider);
    }

    return (
        <div>

            <Navbar type="list"/>

            {open &&  <div className="images-modal">
                <div className="tesy"><i onClick={()=>setOpen(!open)} className="uil uil-times"></i></div>
                <div className="btn-left" onClick={()=>switchImages('left')}><i className="uil uil-arrow-left"></i></div>
                <div className="btn-right" onClick={()=>switchImages('right')}><i className="uil uil-arrow-right"></i></div>
                <div className="show-image">
                    <img className='mImage' src={images[index].src} alt='this is a good image'/>
                </div>
            </div>}


            <div className="container items-wrapper">

                 <div className="titleSection">
                     <span className="mainTitle">Grand Hotel</span>
                     <span className="location-map"><i className="uil uil-map-marker-alt"></i>Elton St Patrick Street</span>
                     <span className="location-area">Excellent location - 500m from center</span>
                     <span className="sub-title">Book a stay over $114 at this property and get free airport taxi</span>
                     <a href="" className="reserve-book toppa">Reserve or Book now!</a>
                 </div>

                <div className="images-hotel">

                    {images.map((img,index)=>(
                        <div className='imageWrapper2'>
                            <img onClick={()=>handleClick(index)} src={img.src} className='img-ht' alt="hotel - image"/>
                        </div>
                    ))}

                </div>

                <div className="description1">

                    <div className="description-left">

                        <span className="description-left-title">
Stay in the heart of Kyiv
                        </span>

                        <span className="description-left-content">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam expedita fuga hic praesentium recusandae, sapiente unde voluptate? Asperiores deleniti error fugiat hic officia quaerat quas quasi quos voluptates? Aliquid consectetur corporis deleniti dolor error eum harum hic, molestias necessitatibus nulla quae repudiandae veritatis, vero! Ab amet commodi earum eligendi molestiae!
                        </span>

                    </div>

                    <div className="description-right">
                        <span className="t1">Perfect for a 9-night stay!</span>
                        <span className="t2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, nihil?</span>
                        <span className="t3">$945 <span className="t3-inner">(9 nights)</span></span>
                        <a href="" className="reserve-book">Reserve or Book now!</a>

                    </div>

                </div>



            </div>
            
            
            

            <MailList/>
            <Footer/>

        </div>
    );
};

export default Item;