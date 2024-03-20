import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Section } from 'shared/ui/Section/Section';

const ContactsPage: React.FC<PageProps> = () => (
    <Section className="pt-5 sm:pt-14 lg:grid grid-cols-12 gap-x-5">
        <h1 className="text-32semi sm:text-56semi mb-6 col-span-3 h-fit">Контакты</h1>
        <ul className="flex gap-6 flex-col mb-[3.75rem] sm:mb-[4.375rem] col-span-9 max-w-[699px] lg:ml-auto sm:grid grid-cols-3 sm:gap-y-[2.5625rem] sm:gap-x-[4.4375rem]">
            <li className="w-fit col-start-2 row-start-1 sm:ml-auto">
                <span className="text-15reg text-bluegrey500 mb-1 block">Номер телефона</span>
                <a className="block text-17reg" href="tel:+74950239626">+7 (495)-023-96-26</a>
            </li>
            <li className="w-fit col-start-3 row-start-2 mt-auto">
                <span className="text-15reg text-bluegrey500 mb-1 block">Адресс</span>
                <span className="block text-17reg">
                    Г. Москва, Очаковское
                    <br />
                    шоссе 34. БЦ West Park
                </span>
            </li>
            <li className="w-fit col-start-1 row-start-2 mt-auto">
                <span className="text-15reg text-bluegrey500 mb-1 block">Email</span>
                <a className="block text-17reg" href="mailto:coop@svet-expert.com">Coop@svet-expert.com</a>
            </li>
            <li className="w-fit col-start-1 row-start-1">
                <span className="text-15reg text-bluegrey500 mb-1 block text-nowrap">Предложение сотрудничества</span>
                <a className="block text-17reg" href="mailto:coop@svet-expert.com">Coop@svet-expert.com</a>
            </li>
            <li className="w-fit col-start-2 row-start-2 mt-auto sm:ml-auto">
                <span className="text-15reg text-bluegrey500 mb-1 block">Пресс-служба</span>
                <a className="block text-17reg" href="tel:+74950239626">+7 (495)-023-96-26</a>
            </li>
            <li className="w-fit col-start-3 row-start-1">
                <span className="text-15reg text-bluegrey500 mb-1 block">ОГРН</span>
                <span className="block text-17reg">
                    1097746487651
                </span>
            </li>
        </ul>

        <div className="aspect-[320/360] sm:aspect-[1420/536] overflow-hidden col-span-12">
            <iframe
                title="БЦ West Park"
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A30c8a948c49372c3a1e5da4cfffe7274c8cf2acafa18cde1e4be793f2d2c9980&amp;source=constructor"
                width="100%"
                height="100%"
                frameBorder="0"
            />
        </div>
    </Section>
);

export default ContactsPage;

export const Head: HeadFC = () => <title>Контакты</title>;
