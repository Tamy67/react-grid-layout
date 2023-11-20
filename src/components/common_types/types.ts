export type ImageType = {
  url: string;
  alt: string;
};

export type FakerData = {
  id: number;
  image: ImageType;
  title?: string;
  description?: string;
};

export type DataType = {
  albumId?: 1;
  id: 2;
  title: string;
  url: string;
  thumbnailUrl?: string;
};
