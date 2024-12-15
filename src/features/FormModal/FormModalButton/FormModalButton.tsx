import React from 'react';
import { Button, ButtonProps, ButtonTheme } from 'shared/ui/Button/Button';
import { GlobalContext } from 'app/providers/GlobalContext/lib/GlobalProvider';

export const FormModalButton = (props: ButtonProps) => {
    const {
        className,
        text,
        theme,
        themeReversed,
    } = props;

    const { setFormModal, setFormModalPermanent } = React.useContext(GlobalContext);

    const openFormModal = React.useCallback(() => {
        if (setFormModal && setFormModalPermanent) {
            setFormModal(true);
            setFormModalPermanent(true);
        }
    }, [setFormModalPermanent, setFormModal]);

    return (
        <Button
            theme={theme ?? ButtonTheme.WHITE}
            className={className}
            onClick={openFormModal}
            text={text}
            aria-label={text}
            themeReversed={themeReversed}
        />
    );
};
