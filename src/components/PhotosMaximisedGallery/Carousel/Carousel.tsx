import { createRef, useEffect, useState } from 'react';
import './Carousel.css';

const Carousel = ({ currentPhotoIdx, photos, onClickPhoto }: {
    currentPhotoIdx: number,
    photos: string[],
    onClickPhoto: (photoIdx: number) => void
}) => {

    const [photoRefs, setPhotoRefs] = useState<React.RefObject<HTMLDivElement>[]>([]);
    const carouselContainerRef = createRef<HTMLDivElement>();

    useEffect(() => {
        setPhotoRefs(photoRefs => (
            Array(photos.length).fill(null).map((_, i) => photoRefs[i] || createRef())
        ));
    }, [photos]);

    useEffect(() => {
        const middleOfScreen = window.innerWidth / 2;
        carouselContainerRef?.current?.scroll({
            top: 0,
            left: (photoRefs[currentPhotoIdx]?.current?.offsetLeft as number - middleOfScreen) + 200 / 2, // 200/2 is the photo width / 2 specified in css 
            behavior: 'smooth'
        });
    }, [currentPhotoIdx]);

    const photosJSX = photos.map((photo, idx) => {
        return (
            <div key={photo + idx} ref={photoRefs[idx]} className="carousel-photo-container" onClick={onClickPhoto.bind(this, idx)}>
                <img src={photo} alt={"carousel-photo" + idx} className="carousel-photo" />
                {currentPhotoIdx !== idx && <div className="carousel-photo-overlay"></div>}
            </div>
        );
    });
    return (
        <div className="carousel-container" ref={carouselContainerRef}>
            {photosJSX}
        </div>
    );
};

export default Carousel;