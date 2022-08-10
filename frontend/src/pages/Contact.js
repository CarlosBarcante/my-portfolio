import React from "react";
import styled from "styled-components";
import { Container } from '../styles'
import SocialNetworkSection from "../components/SocialNetworkSection";
import ContactFormSection from "../components/ContactFormSection";


function Contact() {
    return (
        <ContactContainer>
            <h2>Entre em contato</h2>
            <div id="contact-area">
                <ContactFormSection />
                <SocialNetworkSection />
            </div>
        </ContactContainer>
    )
}

const ContactContainer = styled(Container)`
    h2{
        color: yellow;
        margin-bottom: 4rem;
        text-align: center;
    }

    #contact-area{
        display: flex;
        align-items: center;

        @media (max-width: 800px) {
            flex-direction: column;
        }
    }
`;


export default Contact;