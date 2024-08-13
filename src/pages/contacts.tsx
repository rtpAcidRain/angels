import * as React from 'react';
import { HeadFC, Link, PageProps } from 'gatsby';
import { Section } from 'shared/ui/Section/Section';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

const ContactsPage: React.FC<PageProps> = () => (
    <Section className="pt-5 sm:pt-14 lg:grid grid-cols-12 gap-x-5">
        <h1 className="text-32semi sm:text-56semi mb-6 col-span-3 h-fit">
            Контакты
        </h1>
        <ul className="flex gap-6 flex-col mb-[3.75rem] sm:mb-[3.125rem] col-span-9 max-w-[699px] lg:ml-auto sm:grid grid-cols-2 sm:gap-y-6 sm:gap-x-[4.4375rem]">
            <li className="w-fit col-start-1 row-start-1">
                <span className="text-15reg text-bluegrey500 mb-1 block">
                    Номер телефона
                </span>
                <a className="block text-17reg" href="tel:+79003351900">
                    +7(900)335-19-00
                </a>
            </li>
            <li className="w-fit col-start-2 row-start-1 mt-auto">
                <span className="text-15reg text-bluegrey500 mb-1 block">Адресс</span>
                <span className="block text-17reg">
                    111024, г. Москва, вн. тер. г. муниципальный округ Лефортово, ш.
                    Энтузиастов, д. 22/18, помещ. 4П
                </span>
            </li>
            <li className="w-fit col-start-1 row-start-2 mt-auto">
                <span className="text-15reg text-bluegrey500 mb-1 block">Email</span>
                <a className="block text-17reg" href="mailto:school@angels-school.ru">
                    school@angels-school.ru
                </a>
            </li>
            <li className="w-fit col-start-2 row-start-2 mt-auto">
                <span className="text-15reg text-bluegrey500 mb-1 block">
                    График работы:
                </span>
                <a className="block text-17reg" href="mailto:coop@svet-expert.com">
                    ПН 9:00 - ПТ 18:00
                </a>
            </li>
            <li className="row-start-3 col-span-2">
                <span className="group text-15reg sm:text-17med pb-[1px] border-b border-dashed border-bluegrey400 nt-4 sm:mt-1 block w-fit transition-colors hover:text-blue600 hover:border-blue600 block w-fit  relative">
                    <span className="cursor-pointer">Реквизиты компании</span>

                    <span className="absolute top-full -left-5 sm:-left-6  pt-3 sm:pt-4 w-screen max-w-[452px] text-17reg text-bluegrey800 dark:text-whitefull hidden group-hover:block">
                        <span
                            className="block px-5 py-6 sm:px-6 drop-shadow-pop rounded-3xl bg-whitefull dark:bg-bluegrey1000 flex flex-col gap-[7px]"
                            style={{
                                boxShadow: '0 4px 16px 0 rgba(41, 41, 41, 0.19)',
                            }}
                        >
                            <p>Реквизиты:</p>
                            <p>Наименование организации: ООО «Энджелс Скул»</p>
                            <p>ИНН: 7722460240</p>
                            <p>КПП: 772201001</p>
                            <p>ОГРН: 1187746511776</p>
                            <p>
                                Юридический адрес: 111024, г. Москва, вн. тер. г. муниципальный
                                округ Лефортово, ш. Энтузиастов, д. 22/18, помещ. 4П
                            </p>
                            <p>
                                Генеральный директор:
                                <br />
                                Тарасова Екатерина Валерьевна
                            </p>
                        </span>
                    </span>
                </span>
            </li>
            {/* <li className="w-fit col-start-1 row-start-1"> */}
            {/*    <span className="text-15reg text-bluegrey500 mb-1 block text-nowrap">Предложение сотрудничества</span> */}
            {/*    <a className="block text-17reg" href="mailto:coop@svet-expert.com">Coop@svet-expert.com</a> */}
            {/* </li> */}
            {/* <li className="w-fit col-start-2 row-start-2 mt-auto sm:ml-auto"> */}
            {/*    <span className="text-15reg text-bluegrey500 mb-1 block">Пресс-служба</span> */}
            {/*    <a className="block text-17reg" href="tel:+74950239626">+7 (495)-023-96-26</a> */}
            {/* </li> */}
            {/* <li className="w-fit col-start-3 row-start-1"> */}
            {/*    <span className="text-15reg text-bluegrey500 mb-1 block">ОГРН</span> */}
            {/*    <span className="block text-17reg"> */}
            {/*        1097746487651 */}
            {/*    </span> */}
            {/* </li> */}
        </ul>

        <div className="aspect-[320/360] sm:aspect-[1420/536] overflow-hidden col-span-12 rounded-3xl">
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

export const Head: HeadFC = () => (
    <>
        <title>
            Контакты образовательной платформы Angel's school — как с нами связаться
        </title>
        <meta
            name="description"
            content={
                "Телефон, адрес, контактные данные и реквизиты Angel's school. Свяжитесь с нами любым удобным для вас способом"
            }
        />
    </>
);
