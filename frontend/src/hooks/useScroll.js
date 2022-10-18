import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

export const useScroll = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView({ threshold: 0 });

    if (inView) {
        controls.start('show');
    } else {
        controls.start('hidden');
    }

    return [ref, controls];
}