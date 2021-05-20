import { useState } from 'react';
import './LowerQualityPhotoMinimised.css';

const LowerQualityPhotoMinimised = ({ lowerQualityPhoto, normalPhoto }: {
    lowerQualityPhoto: string,
    normalPhoto: string
}) => {
    const [lowerQualityPhotoLoaded, setLowerQualityPhotoLoaded] = useState(false);

    const lowerQualityPhotoLoadedHandler = () => {
        setLowerQualityPhotoLoaded(true);
    };



    return (
        <>
            { lowerQualityPhotoLoaded && <img src={normalPhoto} className="photos-photo" />}
            <img
                src={lowerQualityPhoto}
                className="photos-photo-reduced"
                onLoad={lowerQualityPhotoLoadedHandler} 
            />
        </>
    );
};

export default LowerQualityPhotoMinimised;