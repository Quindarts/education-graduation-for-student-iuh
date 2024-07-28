import { useState, useEffect } from 'react';

const useOnScrollElement = (ref) => {
    const [hasAlerted, setHasAlerted] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                const isVisible = rect.top >= 0 && rect.left >= 0 && rect.bottom <= window.innerHeight && rect.right <= window.innerWidth;

                if (isVisible && !hasAlerted) {
                    setHasAlerted(true);
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [ref, hasAlerted]);

    return hasAlerted;
};

export default useOnScrollElement;
