import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 1000px) {
        max-width: 100vw;
    }
`;