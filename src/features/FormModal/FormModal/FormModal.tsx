import { classNames } from 'shared/lib/classNames/classNames';
import React, { useContext } from 'react';
import Modal, { ModalPositionEnum } from 'shared/ui/Modal/Modal';
import { GlobalContext } from 'app/providers/GlobalContext/lib/GlobalProvider';
import { Form } from 'widgets/ui/Form';
import CrossSvg from 'shared/assets/svg/cross2.inline.svg';

export const FormModal = () => {
    const {
        formModal,
        setFormModal,
        formModalPermanent,
        setFormModalPermanent,
    } = useContext(GlobalContext);

    const closeFormModal = React.useCallback(() => {
        if (setFormModal) {
            setFormModal(false);
        }
    }, [setFormModal]);

    const closeFormModalPermanent = React.useCallback(() => {
        if (setFormModalPermanent) {
            setFormModalPermanent(false);
        }
    }, [setFormModalPermanent]);

    return (
        <Modal
            className={classNames('', {}, [])}
            permanentClose={formModalPermanent}
            isOpen={formModal}
            onClose={closeFormModal}
            position={ModalPositionEnum.CENTER}
        >
            <div className="py-4 px-5 h-full no-scrollbar overflow-auto sm:py-20 sm:px-[6.25rem]">
                <div className="flex flex-col gap-4 mb-8 sm:mb-[3.125rem] sm:flex-row-reverse sm:justify-between sm:items-center">
                    <button type="button" onClick={closeFormModalPermanent} className="w-fit ml-auto">
                        <CrossSvg className="w-8 h-8 sm:w-12 sm:h-12 border border-bluegrey300 rounded-lg stroke-bluegrey900" />
                    </button>
                    <h3 className="text-27semi sm:text-32semi text-bluegrey900">Оставить заявку</h3>
                </div>
                <Form className="flex flex-col gap-[0.625rem]" textButton="Отправить" />
            </div>
        </Modal>
    );
};
