import './list.css';
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import {useEffect, useRef, useState} from "react";
import ListSearch from "../../components/ListSearch/ListSearch";
import MailList from "../../components/MailList/MailList";
import Footer from "../../components/Footer/Footer";

const List = () => {

    return (
        <div>

            <Navbar type="list"/>

            <ListSearch/>

            <MailList/>
            <Footer/>


            
        </div>
    );
};

export default List;