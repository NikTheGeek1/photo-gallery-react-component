import './MaximisedGallery.css';
import ReactDOM from 'react-dom';
import Backdrop from '../Backdrop/Backdrop';
import { useEffect, useState } from 'react';
import Carousel from './Carousel/Carousel';

const MaximisedGallery = ({ toggleMaximisedGallery, normalPhotos, lowerQualityPhotos, startingPhotoIdx, thumbnailPhotos }:
    {
        toggleMaximisedGallery: (showMaximisedFlag: false | number) => void,
        normalPhotos: string[],
        lowerQualityPhotos: string[],
        thumbnailPhotos: string[],
        startingPhotoIdx: number | false
    }) => {
    const [lowerQualityLoaded, setLowerQualityPhotoLoaded] = useState(false);
    const [normalPhotoLoaded, setNormalPhotoLoaded] = useState(false);

    const [currentPhotoIdx, setCurrentPhotoIdx] = useState(startingPhotoIdx);
    useEffect(() => {
        setCurrentPhotoIdx(startingPhotoIdx);
    }, [startingPhotoIdx]);



    useEffect(() => {
        document.addEventListener("keydown", keyDownHandler);
        return () => document.removeEventListener("keydown", keyDownHandler);
    }, [currentPhotoIdx]);

    const keyDownHandler = (e: KeyboardEvent) => {
        if (e.key === "ArrowLeft") {
            switchPhotoHandler("left");
        } else if (e.key === "ArrowRight") {
            switchPhotoHandler("right");
        } else if (e.key === "Escape") {
            toggleMaximisedGallery(false);
        }
    };

    const clickThubnailPhotoHandler = (photoIdx: number) => {
        setCurrentPhotoIdx(photoIdx);
    };

    const switchPhotoHandler = (type: string) => {
        let nextPhotoIdx;
        if (currentPhotoIdx !== false) {
            setLowerQualityPhotoLoaded(false);
            setNormalPhotoLoaded(false);
            if (type === "right") nextPhotoIdx = (currentPhotoIdx + 1) % (normalPhotos.length);
            if (type === "left") nextPhotoIdx = Math.abs((-currentPhotoIdx - (normalPhotos.length - 1)) % (normalPhotos.length));
            nextPhotoIdx !== undefined && setCurrentPhotoIdx(nextPhotoIdx);
        }
    };

    document.getElementsByTagName("body")[0].setAttribute("style", "overflow: hidden");
    const targetElement = document.getElementById('photo-gallery-modal') as HTMLElement;
    const maximisedGalleryJSX = (
        <Backdrop closeModalHandler={toggleMaximisedGallery} >
            <div className="maximised-gallery-container" onClick={e => e.stopPropagation()}>
                <div className="maximised-gallery-x-container" onClick={toggleMaximisedGallery.bind(this, false)}><div className="maximised-gallery-x"></div></div>
                {normalPhotos.length > 1 && <div className="maximised-gallery-left-container" onClick={switchPhotoHandler.bind(this, "left")}><div className="maximised-gallery-left"></div></div>}
                <div className="maximised-gallery-photo-container">
                    {(currentPhotoIdx !== false) &&
                        <>
                            {lowerQualityLoaded && <img src={normalPhotos[currentPhotoIdx]} className="photos-photo-maximised" onLoad={setNormalPhotoLoaded.bind(this, true)} />}
                            {!normalPhotoLoaded && <img
                                src={lowerQualityPhotos[currentPhotoIdx]}
                                className={`photos-photo-maximised-reduced`}
                                onLoad={setLowerQualityPhotoLoaded.bind(this, true)}
                            />}
                        </>
                    }
                </div>
                {normalPhotos.length > 1 && <div className="maximised-gallery-right-container" onClick={switchPhotoHandler.bind(this, "right")}><div className="maximised-gallery-right"></div></div>}
                <div className="maximised-gallery-carousel-container">
                    {currentPhotoIdx !== false && <Carousel currentPhotoIdx={currentPhotoIdx} photos={thumbnailPhotos} onClickPhoto={clickThubnailPhotoHandler} />}
                </div>
            </div>
        </Backdrop>
    );

    return ReactDOM.createPortal(maximisedGalleryJSX, targetElement);
};

export default MaximisedGallery;