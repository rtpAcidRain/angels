import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
// import Svg1 from 'shared/assets/svg/about_info1.inline.svg';
// import Svg2 from 'shared/assets/svg/about_info2.inline.svg';
// import Svg3 from 'shared/assets/svg/about_info3.inline.svg';
import { Section } from 'shared/ui/Section/Section';
import InsertedVideo from 'shared/assets/videos/video.mp4';
import { Video } from 'shared/ui/Video/Video';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import PreoladVideo from 'shared/assets/img/about-video-preload.jpg';
import { StaticImage } from 'gatsby-plugin-image';

interface AboutBlockProps {
    className?: string,
}

export const AboutBlock = (props: AboutBlockProps) => {
    const { className } = props;

    return (
        <Section
            className={classNames('', {}, [
                className,
            ])}
        >
            <div className="flex justify-between mb-[1.6875rem] sm:mb-[3.125rem]">
                <h2 className="text-27semi sm:text-40semi">О школе</h2>
                <Button
                    to={RoutePath.about}
                    text="Подробнее"
                    theme={ButtonTheme.SECONDARY}
                    className="!hidden sm:!flex"
                />
            </div>
            {/* <Video */}
            {/*    video={InsertedVideo} */}
            {/*    poster={PreoladVideo} */}
            {/*    className=" */}
            {/* rounded-xl sm:rounded-2xl overflow-hidden */}
            {/* mb-6 */}
            {/* sm:mb-0" */}
            {/* /> */}
            <StaticImage src="../../../../../shared/assets/img/about-video-preload.jpg" alt="О нас" className="rounded-xl sm:rounded-2xl overflow-hidden mb-6 sm:mb-0" />
            <Button
                to={RoutePath.about}
                text="Подробнее"
                theme={ButtonTheme.SECONDARY}
                className="sm:!hidden"
            />
            {/* <div className="flex flex-col gap-2 sm:gap-5 sm:grid grid-cols-12"> */}
            {/*    <div className="flex flex-col gap-6 sm:gap-[5.625rem] p-4 sm:p-6 rounded-xl sm:rounded-2xl col-span-4 bg-blue50"> */}
            {/*        <Svg1 className="w-8 h-8 sm:w-14 sm:h-14 fill-bluegrey900" /> */}
            {/*        <p className="text-17med sm:text-24semi"> */}
            {/*            Наша цель – ваше трудоустройство в престижной компании */}
            {/*        </p> */}
            {/*    </div> */}
            {/*    <div className="flex flex-col gap-6 sm:gap-[5.625rem] p-4 sm:p-6 rounded-xl sm:rounded-2xl col-span-4 bg-deeppurple50"> */}
            {/*        <Svg2 className="w-8 h-8 sm:w-14 sm:h-14 fill-bluegrey900" /> */}
            {/*        <p className="text-17med sm:text-24semi"> */}
            {/*            Удостоверение о повышении квалификации */}
            {/*        </p> */}
            {/*    </div> */}
            {/*    <div className="flex flex-col gap-6 sm:gap-[5.625rem] p-4 sm:p-6 rounded-xl sm:rounded-2xl col-span-4 bg-green50"> */}
            {/*        <Svg3 className="w-8 h-8 sm:w-14 sm:h-14 fill-bluegrey900" /> */}
            {/*        <p className="text-17med sm:text-24semi"> */}
            {/*            Обучение на основе государственной лицензии */}
            {/*        </p> */}
            {/*    </div> */}
            {/* </div> */}
        </Section>
    );
};
