import React from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

interface ScrollContainerProps {
    location: Location,
    children: React.ReactNode
}
const ScrollContainer: React.FC<ScrollContainerProps> = ({ location, children }) => {
    const { scroll } = useLocomotiveScroll();
    React.useEffect(() => {
        if (scroll) {
            scroll.scrollTo(0, { duration: 0, disableLerp: true });
        }
    }, [scroll, location]);
    return (
        <div>
            {children}
        </div>
    );
};

export default ScrollContainer;
