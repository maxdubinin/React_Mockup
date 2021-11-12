import Container from "../Container";
import Copyright from "./Copyright";
import Social from "./Social";

const social = {
    link: [
        { path: "#", class: "social__link icon-facebook" },
        { path: "#", class: "social__link icon-twitter" },
        { path: "#", class: "social__link icon-youtube" },
        { path: "#", class: "social__link icon-paypal" },
        { path: "#", class: "social__link icon-envelop" }
    ]
}


const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <div className="footer__row">
                    <div className="footer__column subscribe">
                        <div className="subscribe__title footer__title">SIGNUP TO OUR NEWSLETTER</div>
                        <a href="" className="subscribe__btn">Subscribe</a>
                    </div>
                    <div className="footer__column service">
                        <div className="service__title footer__title">SERVICE TIMES</div>
                        <div className="service__time">Sundays at 9:30 &amp; 11:30 AM</div>
                        <div className="service__desc">Lorem ipsum dolor sit amet.</div>
                    </div>
                    <div className="footer__column social">
                        <div className="social__title footer__title">CONNECT WITH US</div>
                        <Social link={social.link} />

                    </div>
                </div>
                <Copyright />
            </Container>
        </footer >

    )
}

export default Footer;