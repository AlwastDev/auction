import { FC } from 'react';
import Image from 'next/image';

import { Image as IImage } from '@/lib/models';

import * as S from './gallery.styled';

interface GalleryProps {
  images: IImage[];
}

export const Gallery: FC<GalleryProps> = ({ images }) => {
  return (
    <S.Gallery>
      {images.map((image, i) => (
        <S.ImageCard key={image.id}>
          <Image width={290} height={320} src={image.source} alt={`${i}_image`} />
        </S.ImageCard>
      ))}
    </S.Gallery>
  );
};
