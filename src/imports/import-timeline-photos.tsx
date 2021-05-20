import catThumb from '../images/cat-thumbnail.jpg';
import catlqMIN from '../images/cat-lqMIN.jpg';
import catlqMAX from '../images/cat-lqMAX.jpg';
import catrMIN from '../images/cat-rMIN.jpg';
import catrMAX from '../images/cat-rMAX.jpg';

import dogThumb from '../images/dog-thumbnail.jpg';
import doglqMIN from '../images/dog-lqMIN.jpg';
import doglqMAX from '../images/dog-lqMAX.jpg';
import dogrMIN from '../images/dog-rMIN.jpg';
import dogrMAX from '../images/dog-rMAX.jpg';

import fishThumb from '../images/fish-thumbnail.jpg';
import fishlqMIN from '../images/fish-lqMIN.jpg';
import fishlqMAX from '../images/fish-lqMAX.jpg';
import fishrMIN from '../images/fish-rMIN.jpg';
import fishrMAX from '../images/fish-rMAX.jpg';

import { ImagesVersionsInterface } from '../types/images-versions-interface';
 
type allPhotosStructure = {[key: string]: ImagesVersionsInterface}

const allPhotos: allPhotosStructure = {
    animalPhotos: {
        thumbnail: [
            catThumb,
            dogThumb,
            fishThumb,
        ],
        lowerQualityMin: [
            catlqMIN,
            doglqMIN,
            fishlqMIN,
        ],
        lowerQualityMax: [
            catlqMAX,
            doglqMAX,
            fishlqMAX,
        ],
        reducedMin: [
            catrMIN,
            dogrMIN,
            fishrMIN,
        ],
        reducedMax: [
            catrMAX,
            dogrMAX,
            fishrMAX,
        ]
    },

};

export default allPhotos;