import './title.css';

const Title = ({title}) => {
    return (

        <div className="container">
            <div className="titleWrapper">
                <h1 className="mtTitle">{title}</h1>
            </div>
        </div>
    );
};

export default Title;