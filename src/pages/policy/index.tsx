import * as React from 'react';
import {
    HeadFC, Link, navigate, PageProps,
} from 'gatsby';
import { Section } from 'shared/ui/Section/Section';
import { Button } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import * as cls from './style.module.css';

const TermPage: React.FC<PageProps> = () => (
    <Section className={cls.section}>
        <h1 className="text-27semi my-10 sm:text-56semi sm:my-[3.25rem]">
            Политика конфиденциальности
        </h1>
        <div className="pt-50 sm:pt-0 sm:grid grid-cols-12 gap-[1.125rem] privacy-policy ">
            <header className="col-span-6 hidden sm:block relative" id="stick">
                <div className="target right-0 left-0 -top-[102px] bottom-[102px] pointer-events-none lg:absolute" />
                <div
                    className="flex items-center gap-4 sticky"
                    data-scroll
                    data-scroll-sticky
                    data-scroll-target="#stick .target"
                >
                    <Button text="Вернуться" onClick={() => navigate(-1)} />
                    <Link to={RoutePath.main}>На главную</Link>
                </div>
            </header>
            <section className="col-span-6">
                <h4>1. Общие положения</h4>
                {/* <p className="without-span">
                    Настоящая политика обработки персональных данных составлена в
                    соответствии с требованиями Федерального закона от 27.07.2006. №
                    152-ФЗ «О персональных данных» (далее — Закон о персональных данных) и
                    определяет порядок обработки персональных данных и меры по обеспечению
                    безопасности персональных данных, предпринимаемые ООО «Энджелс Скул»
                    (далее— Оператор).
                </p> */}
                <p>
                    <span>1.1. </span>
                    ООО «Энджелc Скул» (далее по тексту – Оператор) ставит соблюдение прав и свобод граждан одним из важнейших условий осуществления своей деятельности.
                </p>
                <p>
                    <span>1.2. </span>
                    <span>
                        Политика Оператора в отношении обработки персональных данных (далее по тексту — Политика)
                        применяется ко всей информации, которую Оператор может получить о посетителях веб-сайта
                        {' '}
                        <Link to={RoutePath.main}>https://angels-school.ru</Link>
                        .
                        {' '}
                        Персональные данные обрабатывается в соответствии с ФЗ «О персональных данных» № 152-ФЗ.
                    </span>
                </p>
                <h4>2. Основные понятия, используемые в Политике</h4>
                <p>
                    <span>2.1. </span>
                    <span>
                        Веб-сайт - совокупность графических и информационных материалов,
                        а также программ для ЭВМ и баз данных, обеспечивающих их доступность
                        в сети интернет по сетевому адресу
                        {' '}
                        <Link to={RoutePath.main}>https://angels-school.ru</Link>
                        {' '}
                    </span>
                </p>
                <p>
                    <span>2.2. </span>
                    {' '}
                    Пользователь – любой посетитель веб-сайта
                    {' '}
                    <Link to={RoutePath.main}>https://angels-school.ru</Link>
                    ;
                </p>
                <p>
                    <span>2.3. </span>
                    <span>
                        Персональные данные – любая информация, относящаяся к Пользователю веб-сайта
                        {' '}
                        <Link to={RoutePath.main}>https://angels-school.ru</Link>
                        ;

                    </span>
                </p>
                <p>
                    <span>2.4. </span>
                    {' '}
                    Обработка персональных данных - любое действие с персональными данными, совершаемые с использованием ЭВМ, равно как и без их использования;
                </p>
                <p>
                    <span>2.5. </span>
                    {' '}
                    Обезличивание персональных данных – действия, результатом которых является невозможность без использования дополнительной информации определить принадлежность персональных данных конкретному Пользователю или лицу;
                </p>
                <p>
                    <span>2.6. </span>
                    {' '}
                    Распространение персональных данных – любые действия, результатом которых является раскрытие персональных данных неопределенному кругу лиц;
                </p>
                <p>
                    <span>2.7. </span>
                    {' '}
                    Предоставление персональных данных – любые действия, результатом которых является раскрытие персональных данных определенному кругу лиц;
                </p>
                <p>
                    <span>2.8. </span>
                    <span>
                        Уничтожение персональных данных – любые действия, результатом которых является безвозвратное уничтожение персональных на ЭВМ или любых других носителях.
                    </span>
                </p>

                <h4>
                    3. Оператор может обрабатывать следующие персональные данные
                    Пользователя
                </h4>
                <p>
                    <span>3.1. </span>
                    {' '}
                    <span>
                        Фамилия, имя, отчество
                    </span>
                </p>
                <p>
                    <span>3.2. </span>

                    <span>
                        Адрес электронной почты
                    </span>
                </p>
                <p>
                    <span>3.3. </span>

                    <span>
                        Номер телефона
                    </span>
                </p>
                <p>
                    <span>3.4. </span>

                    <span>
                        Также на сайте происходит сбор и обработка обезличенных данных о посетителях (в т.ч. файлов «cookie») с помощью сервисов интернет-статистики (Яндекс Метрика и Гугл Аналитика и других).
                        <br />
                        Заключение и исполнение договоров:
                        <ul>
                            <li>— документ, удостоверяющий личность</li>
                            <li>— документ об образовании</li>
                            <li>— документ, подтверждающий смену имени, фамилии</li>
                            <li>— номер СНИЛС</li>
                        </ul>
                        Передача данных в ФИС ФРДО:
                        <ul>
                            <li>— фамилия</li>
                            <li>— имя</li>
                            <li>— отчество</li>
                            <li>— пол</li>
                            <li>— дата рождения</li>
                            <li>— гражданство</li>
                            <li>— данные документа о квалификации</li>
                            <li>— номер СНИЛС</li>
                        </ul>
                    </span>
                </p>
                <h4>4. Цели обработки персональных данных</h4>
                <p>
                    <span>4.1. </span>
                    <span>
                        Цель обработки адреса электронной почты, номера телефона, фамилии, имени, отчества
                        Пользователя – регистрация на сайте, идентификация на сайте (кроме номера телефона).
                        Целью обработки данных также является передача данных в ФИС ФРДО и для заключения и исполнения договоров.
                        Дополнительно Оператор имеет право направлять Пользователю уведомления о новых продуктах и услугах, специальных предложениях и различных событиях.
                        Пользователь всегда может отказаться от получения информационных сообщений, направив Оператору письмо на адрес
                        {' '}
                        <a
                            itemProp="url"
                            href="mailto:school@angels-school.ru"
                        >
                            school@angels-school.ru
                        </a>
                    </span>
                </p>
                <p>
                    <span>4.2. </span>
                    <span>
                        Обезличенные данные Пользователей,
                        собираемые с помощью сервисов интернет-статистики,
                        служат для сбора информации о действиях Пользователей на сайте, улучшения качества сайта и его содержания.
                    </span>
                </p>
                <h4>5. Правовые основания обработки персональных данных</h4>
                <p>
                    <span>5.1. </span>
                    <span>
                        Оператор обрабатывает персональные данные Пользователя только в случае их отправки
                        Пользователем через формы, расположенные на сайте
                        {' '}
                        <Link to={RoutePath.main}>https://angels-school.ru</Link>
                        .
                        {' '}
                        Отправляя свои персональные данные Оператору, Пользователь выражает свое согласие с данной Политикой.
                    </span>
                </p>
                <p>
                    <span>5.2. </span>
                    Оператор обрабатывает обезличенные данные о Пользователе в случае, если это разрешено в настройках браузера Пользователя (включено сохранение файлов «cookie» и использование технологии JavaScript).
                </p>
                <h4>
                    6. Порядок сбора, хранения, передачи и других видов обработки персональных данных
                </h4>
                <p>
                    <span>6.1. </span>
                    Оператор обеспечивает сохранность персональных данных и принимает все возможные меры, исключающие доступ к персональным данным неуполномоченных лиц.
                </p>
                <p>
                    <span>6.2. </span>
                    <span>
                        Персональные данные Пользователя никогда, ни при каких условиях не будут переданы третьим лицам, за исключением случаев, связанных с исполнением действующего законодательства.
                    </span>
                </p>
                <p>
                    <span>6.3. </span>
                    <span>
                        В случае выявления неточностей в персональных данных, Пользователь может актуализировать их, направив Оператору уведомление с помощью электронной почты на электронный адрес Оператора
                        {' '}
                        <Link to={RoutePath.main}>https://angels-school.ru</Link>
                        ,
                        {' '}
                        с пометкой «Актуализация персональных данных»
                    </span>
                </p>
                <p>
                    <span>6.4. </span>
                    <span>
                        Срок обработки персональных данных является неограниченным.
                        Пользователь может в любой момент отозвать свое согласие на обработку персональных данных, направив
                        Оператору уведомление с помощью электронной почты на электронный адрес Оператора
                        {' '}
                        <Link to={RoutePath.main}>https://angels-school.ru</Link>
                        ,
                        {' '}
                        с пометкой «Отзыв согласия на обработку персональных данных».
                    </span>
                </p>
                <h4>
                    7. Заключительные положения
                </h4>
                <p>
                    <span>7.1. </span>
                    <span>
                        Пользователь может получить любые разъяснения по интересующим вопросам,
                        касающимся обработки его персональных данных, обратившись к Оператору
                        с помощью электронной почты
                        {' '}
                        <Link to={RoutePath.main}>https://angels-school.ru</Link>
                        .
                        {' '}
                    </span>
                </p>
                <p>
                    <span>7.2. </span>
                    В данном документе будут отражены любые изменения политики обработки персональных данных Оператором. В случае существенных изменений Пользователю может быть выслана информация на указанный им электронный адрес.
                </p>

            </section>
        </div>
    </Section>
);

export default TermPage;

export const Head: HeadFC = () => <title>Политика конфиденциальности</title>;
