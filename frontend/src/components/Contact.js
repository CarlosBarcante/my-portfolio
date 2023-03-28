import React from "react";

import styled from "styled-components";

import SocialNetworkSection from "./SocialNetworkSection";
import ContactFormSection from "./ContactFormSection";


function Contact() {
    return (
        <ContactContainer>
            <h2>Contato</h2>
            <div id="contact-area">
                <ContactFormSection />
                <SocialNetworkSection />
            </div>
        </ContactContainer>
    )
}

const ContactContainer = styled.div`
    flex: 1;
    padding: .5rem;
    margin-bottom: 1rem;
    border: 2px solid #CCC;
    border-radius: 1rem;
    background-color: #cccccc33;

    h2{
        color: #00ff00;
        font-size: 2rem;
        margin-bottom: .3rem;
    }

    #contact-area{
        display: flex;
        flex-direction: column;        
    }
`;


export default Contact;