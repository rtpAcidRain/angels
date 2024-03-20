import React, { FC, useMemo, useState } from 'react';

export interface GlobalContextProps {
    formModal?: boolean;
    setFormModal?: React.Dispatch<React.SetStateAction<boolean>>;
    formModalPermanent?: boolean;
    setFormModalPermanent?: React.Dispatch<React.SetStateAction<boolean>>;
}
export const GlobalContext = React.createContext<GlobalContextProps>({});
interface GlobalProviderProps {
    children: React.ReactNode
}
const GlobalProvider: FC<GlobalProviderProps> = (props) => {
    const {
        children,
    } = props;

    const [formModal, setFormModal] = useState(false);
    const [formModalPermanent, setFormModalPermanent] = useState(false);

    const defaultProps = useMemo(() => ({
        formModal,
        setFormModal,
        formModalPermanent,
        setFormModalPermanent,
    }), [formModalPermanent, formModal]);

    return (
        <GlobalContext.Provider value={defaultProps}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;
