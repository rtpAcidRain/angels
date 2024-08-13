import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import { Section } from 'shared/ui/Section/Section';
import Star from 'shared/assets/svg/star.inline.svg';
import reviewBack from 'shared/assets/img/reviewBack.webp';
import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import * as cls from './reviwsBlock.module.css';

interface ReviwsBlockProps {
    className?: string,
}

const reviewArray = [
    {
        id: 0,
        position: 'col-span-3 row-span-3',
        logo: null,
        logoColor: '#99CAFD',
        userName: 'Ивлева Александра',
        course: '“Архитектурный светодизайн”',
        review: 'Мне очень понравился курс, он был информативным и полезным. Преподаватели проверяли и комментировали практические задания.  Кроме того, после окончания курса мне предложили пройти стажировку. Для меня это плюс получить еще больше практики. После прохождения оплачиваемой стажировки я трудоустроилась!Очень рада, что выбрала именно этот курс, получила много практики, влилась быстро в рабочую сферу. Для меня было важно получить работу, т.к. я только закончила ВУЗ, поэтому рада возможностям и знаниям этого курса. ',
        grade: '4.9',
    }, {
        id: 1,
        position: 'col-start-4 col-span-3 row-span-2 ',
        logo: null,
        logoColor: '#B39DDB',
        userName: 'Маркелова Мария',
        course: '“Архитектурный светодизайн”',
        review: 'Понравился курс. В соответствии архитектурных типов и световых решений мне понравилось: большое количество примеров и объяснение световых решений. В практических видео тоже поэтапно все разложили по полочкам. Ранее я не использовала Фотошоп, после видео научилась.',
        grade: '4.7',
    }, {
        id: 2,
        position: 'lg:min-h-[21.6875rem] col-start-4 col-span-3 row-start-3',
        logo: null,
        logoColor: '#FFAB91',
        userName: 'Пиотрович Екатерина',
        course: '“Архитектурный светодизайн” ',
        review: 'Очень интересно слушать уроки, всё понятно. Большинство информации в новинку. Было много различных практических заданий, которые проверяли преподаватели.',
        grade: '4.7',
    }, {
        id: 3,
        position: 'lg:min-h-[18.9375rem] col-start-10 col-span-3 row-start-1',
        logo: null,
        logoColor: '#90A4AE',
        userName: 'Петр Рябконев',
        course: '“Архитектурный светодизайн”',
        review: 'Понравилось, что есть видео сопровождение в уроках.  Было просто разобраться, что и как делать. После обучения получил возможность пройти стажировку, быстро согласился!',
        grade: '4.8',
    }, {
        id: 4,
        position: 'lg:min-h-[28.3125rem] col-start-10 col-span-3 row-span-2 row-start-2',
        logo: null,
        logoColor: '#81C784',
        userName: 'Таисия Мисюр',
        course: '“Архитектурный светодизайн”',
        review: 'Осталась очень довольна. Курс был организован на высшем уровне. Лекции были понятными и информативными, а практические задания помогли закрепить тему лекций.. Видео лекции были очень наглядными и помогали лучше усваивать материал. В целом, я получила много новых знаний и навыков, которые буду применять в своей работе.',
        grade: '4.5',
    },
];

export const ReviwsBlock = (props: ReviwsBlockProps) => {
    const { className } = props;
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1024px)',
    });

    if (isDesktopOrLaptop) {
        return (

            <Section className={classNames('', {}, [className])} title="Отзывы о школе">
                <div className={classNames('', {}, ['flex flex-col lg:grid grid-cols-12 gap-5'])}>
                    {
                        reviewArray.map((el, index) => (
                            <article key={el.id} className={`p-4 sm:p-8 rounded-xl sm:rounded-2xl bg-grey100 sm:grey100 flex flex-col ${el.position}`}>
                                <header className="flex gap-4 items-center mb-4 sm:mb-6">
                                    <div
                                        className={
                                            `
                                        rounded-full w-[3.125rem] h-[3.125rem] text-17semi sm:text-17med text-whitefull flex items-center justify-center
                                        bg-${el.logoColor ?? 'blue300'}
                                        `
                                        }
                                        style={{ backgroundColor: el.logoColor ?? '#99CAFD' }}
                                    >
                                        {el.logo ?? el.userName[0]}
                                    </div>
                                    <div className="flex flex-col gap-[2px] flex-1">
                                        <h3 className="text-17semi sm:text-15semi">{el.userName}</h3>
                                        <p className="text-15med sm:text-13med text-grey800">{el.course}</p>
                                    </div>
                                </header>
                                <section className="mb-8">
                                    <p>{el.review}</p>
                                </section>
                                <footer className="mt-auto text-15semi sm:text-17semi flex gap-1 sm:gap-2 items-center">
                                    <Star className="fill-amber500 w-[1.125rem] sm:w-6" />
                                    {el.grade}
                                    /5
                                </footer>
                            </article>
                        ))
                    }
                    <div
                        className="bg-bluegrey900 rounded-2xl bg-no-repeat bg-contain bg-top hidden lg:flex items-end col-span-3 row-span-3"
                        style={{
                            backgroundImage: `url(${reviewBack})`,
                        }}
                    >
                        <p className="text-20med p-8 pb-[2.5625rem] text-whitefull">
                            “Онлайн-обучение позволяет обучающимся учиться в своем собственном
                            темпе и фокусироваться на тех темах, которые им наиболее интересны”
                        </p>
                    </div>
                </div>

            </Section>
        );
    }
    return (
        <Section className={classNames(cls.sectionMob, {}, [className])} title="Отзывы о школе">
            <Swiper
                modules={[Pagination]}
                pagination
                slidesPerView={1}
                spaceBetween={20}
                breakpoints={
                    {
                        640: {
                            slidesPerView: 2,
                        },
                    }
                }
                id="reviews"
                className={classNames(cls.slider, {}, ['lg:!grid grid-cols-12 gap-5'])}
            >
                {
                    reviewArray.map((el, index) => (
                        <SwiperSlide
                            tag="article"
                            key={el.id}
                            className={`p-4 sm:p8 rounded-xl sm:rounded-2xl bg-blue30 sm:grey100 !h-[unset] !flex flex-col  ${el.position}`}
                        >
                            <header className="flex gap-4 items-center mb-4 sm:mb-6">
                                <div
                                    className={
                                        `
                                        rounded-full w-[3.125rem] h-[3.125rem] text-17semi sm:text-17med text-whitefull flex items-center justify-center
                                        bg-${el.logoColor ?? 'blue300'}
                                        `
                                    }
                                    style={{ backgroundColor: el.logoColor ?? '#99CAFD' }}
                                >
                                    {el.logo ?? el.userName[0]}
                                </div>
                                <div className="flex flex-col gap-[2px] flex-1">
                                    <h3 className="text-17semi sm:text-15semi">{el.userName}</h3>
                                    <p className="text-15med sm:text-13med text-grey800">{el.course}</p>
                                </div>
                            </header>
                            <section className="mb-8">
                                <p>{el.review}</p>
                            </section>
                            <footer className="mt-auto text-15semi sm:text-17semi flex gap-1 sm:gap-2 items-center">
                                <Star className="fill-amber500 w-[1.125rem] sm:w-6" />
                                {el.grade}
                                /5
                            </footer>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </Section>
    );
};
