import { ImageList, ImageListItem } from "@mui/material";

import { useStyles } from "./ImageGalleryStyled.style";

type ImageGalleryProps = {
  images: string[];
};

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const classes = useStyles();

  return (
    <ImageList
      sx={{ width: "100%", height: 300 }}
      variant="quilted"
      cols={3}
      rowHeight={121}
    >
      {images?.map((item) => (
        <ImageListItem key={item}>
          <img
            src={item}
            loading="lazy"
            className={classes.galleryImg}
            alt="Tour Gallery"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
export default ImageGallery;
