import './home.css';
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Featured from "../../components/Featured/Featured";
import Title from "../../components/Title/Title";
import FeaturedProperties from "../../components/FeaturedProperties/FeaturedProperties";
import GuestProperty from "../../components/GuestProperty/GuestProperty";
import MailList from "../../components/MailList/MailList";
import Footer from "../../components/Footer/Footer";

const Home = () => {



    return (
        <div>
<Navbar/>
            <Header/>


            <div className="homeContainer">

                <Featured/>

                <Title title="Browse by property type"/>

                <FeaturedProperties/>

                <Title title="Homes guests love"/>

                <GuestProperty/>

                <MailList/>

                <Footer/>



            </div>

        </div>
    );
};

export default Home;