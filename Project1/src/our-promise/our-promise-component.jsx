import React from "react";
import { OurPromiseStyle } from "./our-promise-style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop, faMobile, faPeopleGroup, faRocket, faLifeRing, faShield } from "@fortawesome/free-solid-svg-icons";
const OurPromiseComponent = () => {

    return(
        <OurPromiseStyle>
            <div className="total_component">
                <div className="ourpromise">
                    <h1>Our Promise</h1>
                    <h5>As part of our high quality service,
                         we'd like to offer something extra too.</h5>
                </div>

                <div className="grid">

                    <div className="topcodequality">
                        <FontAwesomeIcon icon={faLaptop} />
                        <h4>Top Code Quality</h4>
                        <h5>Our commitment goes beyond mere code – it encompasses <br/>
                         providing solutions. You receive W3C
                         fully compliant markup.</h5>
                    </div>

                    <div className="responsive">
                        <FontAwesomeIcon icon={faMobile} />
                        <h4>Responsive</h4>
                        <h5>We understand the value of timely responsiveness <br />
                         and adaptability.</h5>
                    </div>

                    <div className="Rockstarteam">
                        <FontAwesomeIcon icon={faPeopleGroup} />
                        <h4> Rockstar Team</h4>
                        <h5>You'll have access to an all-star team 
                        of experienced <br /> professionals.</h5>
                    </div>

                    <div className="fastTurn">
                        <FontAwesomeIcon icon={faRocket} />
                        <h4>Fast Turn-arounds</h4>
                        <h5>We are swift and capable of providing
                         high-quality <br /> code fast.</h5>
                    </div>

                    <div className="lifetimesupport">
                        <FontAwesomeIcon icon={faLifeRing} />
                         <h4>Life-time Support</h4>
                        <h5>If bugs emerge in the future, feel free to
                         reach out <br /> for support.</h5>
                    </div>

                    <div className="securedagreement">
                        <FontAwesomeIcon icon={faShield} />
                        <h4>Secured Agreement</h4>
                        <h5>You own the creative work entirely — 
                        NDA guaranteed.</h5>
                    </div>
                </div>
            </div>
        </OurPromiseStyle>
    );
};   

export default OurPromiseComponent;