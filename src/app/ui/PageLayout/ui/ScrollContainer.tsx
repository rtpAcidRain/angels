import React from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

const ScrollContainer = ({ location, children }: any) => {
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
