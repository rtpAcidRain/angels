import React, { FC, useMemo, useState } from 'react';

export interface GlobalContextProps {
    formModal?: boolean;
    setFormModal?: React.Dispatch<React.SetStateAction<boolean>>;
    formModalPermanent?: boolean;
    setFormModalPermanent?: React.Dispatch<React.SetStateAction<boolean>>;
    location?: Location;
}
export const GlobalContext = React.createContext<GlobalContextProps>({});
interface GlobalProviderProps {
    location: Location,
    children: React.ReactNode
}
const GlobalProvider: FC<GlobalProviderProps> = (props) => {
    const {
        location,
        children,
    } = props;

    const [formModal, setFormModal] = useState(false);
    const [formModalPermanent, setFormModalPermanent] = useState(false);

    const defaultProps = useMemo(() => ({
        formModal,
        setFormModal,
        formModalPermanent,
        setFormModalPermanent,
        location,
    }), [location, formModalPermanent, formModal]);

    return (
        <GlobalContext.Provider value={defaultProps}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;
