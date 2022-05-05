import './mail.css';

const MailList = () => {
    return (
        <div className="mail">

            <h1 className="tt">Save time, save money!</h1>

            <h2 className="st">Sign up and we'll send the best deals to you</h2>

            <div className="mailCta">
                <input type="text" placeholder="Your Email"/> <a className="mBtn" href="">Subscribe</a>
            </div>

        </div>
    );
};

export default MailList;