import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import Svg from 'shared/assets/svg/play.inline.svg';
import * as cls from './Video.module.css';

interface VideoProps {
    className?: string,
    poster?: string,
    video: string
}

export const Video = (props: VideoProps) => {
    const {
        className,
        video,
        poster,
    } = props;
    const [play, setPlay] = React.useState<boolean>(false);
    const vid = React.useRef<HTMLVideoElement>(null);

    const toggleVideo = () => {
        setPlay((prev) => !prev);
        if (!play) {
            setTimeout(() => {
                vid?.current?.play();
            }, 10);
        } else {
            setTimeout(() => {
                vid?.current?.pause();
            }, 10);
        }
    };

    return (
        <div onClick={toggleVideo} className={classNames(cls.videoContainer, { [cls.isPlay]: play }, [className])}>
            {/* eslint-disable-next-line react/button-has-type */}
            <button title="Запустить видео" className={cls.button}>
                <Svg />
            </button>
            <video poster={poster} controls={play} ref={vid} className={classNames(cls.video, {}, [])}>
                <source src={video} type="video/mp4" />
                <track kind="captions" srcLang="ru" />
            </video>
        </div>

    );
};
