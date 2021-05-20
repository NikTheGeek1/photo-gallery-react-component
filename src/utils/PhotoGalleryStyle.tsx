import { CSSProperties } from "react";


class PhotoGalleryStyle {

    private photosArray: string[];
    public photosDimensions: { width: number, height: number }[];
    public photosStyles: CSSProperties[];
    public containerStyle: CSSProperties;
    private containerHeight: number = 30;
    private gap: string = "1rem";

    constructor(photosArray: string[]) {
        this.photosArray = photosArray;
        this.photosDimensions = [];
        this.setPhotosDimensions();
        this.containerStyle = {};
        this.setContainerStyle();
        this.photosStyles = [];
        this.setPhotosStyles();
    }

    private setPhotosDimensions(): void {
        this.photosArray.forEach(photo => {
            const img = new Image();
            img.src = photo;
            img.onload = () => this.photosDimensions.push({ width: img.width, height: img.height });
        });
    }

    private setContainerStyle(): void {
        const numberOfPhotos = this.photosArray.length;
        switch (numberOfPhotos) {
            case 1:
                this.containerStyle = {
                    gridTemplateColumns: "1fr",
                    gridTemplateRows: this.containerHeight + "rem",
                    gridTemplateAreas: '"photo1"',
                };
                break;
            case 2:
                this.containerStyle = {
                    gridTemplateColumns: "1fr 1fr",
                    gridTemplateRows: this.containerHeight + "rem",
                    gridTemplateAreas: '"photo1 photo2"',
                    columnGap: this.gap
                };
                break;
            case 3:
                this.containerStyle = {
                    gridTemplateColumns: "1fr 1fr",
                    gridTemplateRows: this.containerHeight / 2 + "rem " + this.containerHeight / 2 + "rem",
                    gridTemplateAreas: '"photo1 photo1" "photo2 photo3"',
                    columnGap: this.gap,
                    rowGap: this.gap
                };
                break;
            case 4:
                this.containerStyle = {
                    gridTemplateColumns: "1fr 1fr 1fr 1fr",
                    gridTemplateRows: this.containerHeight / 2 + "rem " + this.containerHeight / 2 + "rem",
                    gridTemplateAreas: '"photo1 photo1 photo2 photo2" "photo1 photo1 photo3 photo4"',
                    columnGap: this.gap,
                    rowGap: this.gap
                };
                break;
            case 5:
                this.containerStyle = {
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gridTemplateRows: this.containerHeight / 2 + "rem " + this.containerHeight / 2 + "rem",
                    gridTemplateAreas: '"photo1 photo1 photo2" "photo3 photo4 photo5"',
                    columnGap: this.gap,
                    rowGap: this.gap
                };
                break;
            default:
                this.containerStyle = {
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gridTemplateRows: this.containerHeight / 2 + "rem " + this.containerHeight / 2 + "rem",
                    gridTemplateAreas: '"photo1 photo1 photo2" "photo3 photo4 photo5"',
                    columnGap: this.gap,
                    rowGap: this.gap
                };
        }
    }

    private setPhotosStyles(): void {
        const numberOfPhotos = this.photosArray.length;
        this.photosArray.forEach((photo, idx) => {
            this.photosStyles.push({ gridArea: "photo" + (idx + 1) });
        });
    }

}

export default PhotoGalleryStyle;