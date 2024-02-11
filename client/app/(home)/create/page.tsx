'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useDebounceValue } from 'usehooks-ts';
import { toast } from 'sonner';

import { Input } from '@/components/input/input';
import { Button } from '@/components/button/button';
import { UploadButton } from '@/components/upload-button/upload-button';
import { colors } from '@/lib/colors';
import { toBase64 } from '@/lib/utils';
import { Image as IImage } from '@/lib/models';
import { createAuction } from '@/lib/services/auction-service';

import * as S from './create.styled';

export default function CreateAuctionPage() {
  const router = useRouter();

  const [description, setDescription] = useDebounceValue('', 50);
  const [rate, setRate] = useDebounceValue(1, 50);
  const [images, setImages] = useState<IImage[]>([]);

  const handleImages = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const maxSizeInBytes = 5 * 1024 * 1024; //5 MB;
    const newImages = e.target.files;

    if (!newImages) {
      return null;
    }

    if (newImages.length + images.length > 5) {
      toast.error('Photos must be no more than 5');
      return null;
    }

    for (let i = 0; i < newImages.length; i++) {
      if (newImages[i].size > maxSizeInBytes) {
        toast.error('The file size must be less than 5 MB');
        return null;
      }
    }

    const base64Images: IImage[] = [];

    for (let i = 0; i < newImages.length; i++) {
      base64Images.push({ source: (await toBase64(newImages[i])) as string });
    }

    setImages((prevState) => [...prevState, ...base64Images]);
  };

  const handleDeletePhoto = (index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await createAuction(description, images, rate).then((auction) => {
      if (auction.data) {
        router.push('/');
      }
    });
  };

  const handleClear = () => {
    router.push('/');
  };

  return (
    <S.FormContainer onSubmit={handleSubmit}>
      <S.Container>
        <S.InputsContainer>
          <Input type="text" label="Description" onChange={(event) => setDescription(event.target.value)} />
          <Input
            type="number"
            min={1}
            max={99999}
            label="Starting rate (UAH)"
            defaultValue={rate}
            onChange={(event) => setRate(Number(event.target.value))}
          />
        </S.InputsContainer>
        {!!images.length && (
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
        )}
        <UploadButton width="140px" height="48px" $borderRadius="6px" onChange={handleImages} />
      </S.Container>
      <S.ButtonsContainer>
        <Button type="submit" width="140px" height="48px" $borderRadius="6px">
          Create
        </Button>
        <Button
          type="reset"
          width="140px"
          height="48px"
          $borderRadius="6px"
          $backgroundColor={colors.red}
          onClick={handleClear}
        >
          Cancel
        </Button>
      </S.ButtonsContainer>
    </S.FormContainer>
  );
}
