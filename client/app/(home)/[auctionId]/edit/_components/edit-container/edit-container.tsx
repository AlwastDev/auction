'use client';

import { FC, useState } from 'react';
import { useDebounceValue } from 'usehooks-ts';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { Auction, AuctionStatus, Image as IImage } from '@/lib/models';
import { enumToArrayValues, toBase64 } from '@/lib/utils';
import { Input } from '@/components/input/input';
import { UploadButton } from '@/components/upload-button/upload-button';
import { Button } from '@/components/button/button';
import { Gallery } from '@/app/(home)/_components/gallery/gallery';
import { Select } from '@/components/select/select';
import { colors } from '@/lib/colors';

import * as S from './edit-container.styled';

interface EditContainerProps {
  auction: Auction;
}

export const EditContainer: FC<EditContainerProps> = ({ auction }) => {
  const router = useRouter();

  const [description, setDescription] = useDebounceValue(auction.description, 50);
  const [rate, setRate] = useDebounceValue(auction.lastRate.rate, 50);
  const [status, setStatus] = useState<AuctionStatus>(auction.status);
  const [images, setImages] = useState<IImage[]>([...auction.images]);

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

    // await editAuction(description, images).then((auction) => {
    //   if (auction.data) {
    //     router.push(`/${auction.id}`);
    //   }
    // });
  };

  const handleClear = () => {
    setDescription(auction.description);
    setImages(auction.images);
    setStatus(auction.status);
    setRate(auction.lastRate.rate);
  };

  return (
    <S.FormContainer onSubmit={handleSubmit}>
      <S.Container>
        <S.InputsContainer>
          <Input
            type="text"
            label="Description"
            defaultValue={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <Input
            type="number"
            min={1}
            max={99999}
            label="Starting rate (UAH)"
            defaultValue={rate}
            onChange={(event) => setRate(Number(event.target.value))}
          />
          <Select name="Status" defaultValue={status} values={enumToArrayValues(AuctionStatus)} />
        </S.InputsContainer>
        {!!images.length && <Gallery images={images} handleDeletePhoto={handleDeletePhoto} />}
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
};
