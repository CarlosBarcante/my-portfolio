import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    max-width: 1200px;
    margin: 0 auto;
    padding: 3rem 2rem;

    @media (max-width: 1000px) {
        max-width: 100vw;
    }
`;

export const Description = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
`;