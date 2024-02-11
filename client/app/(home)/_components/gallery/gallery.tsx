import { FC } from 'react';
import Image from 'next/image';

import { Image as IImage } from '@/lib/models';

import * as S from './gallery.styled';

interface GalleryProps {
  images: IImage[];
  handleDeletePhoto: (index: number) => void;
}

export const Gallery: FC<GalleryProps> = ({ images, handleDeletePhoto }) => {
  return (
    <S.Gallery>
      {images.map((image, i) => (
        <S.ImageCard key={`${i}_image`}>
          <S.Image>
            <Image width={200} height={200} src={image.source} alt={`${i}_image`} />
          </S.Image>
          <S.DeleteImageBtn style={{ cursor: 'pointer' }} src="/trash.svg" onClick={() => handleDeletePhoto(i)} />
        </S.ImageCard>
      ))}
    </S.Gallery>
  );
};
