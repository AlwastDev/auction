'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useDebounceValue } from 'usehooks-ts';
import { toast } from 'sonner';

import { Input } from '@/components/input/input';
import { Select } from '@/components/select/select';
import { Button } from '@/components/button/button';
import { UploadButton } from '@/components/upload-button/upload-button';
import { colors } from '@/lib/colors';
import { enumToArrayValues, toBase64 } from '@/lib/utils';
import { AuctionStatus } from '@/lib/models';

import * as S from './create.styled';
import { Trash } from 'lucide-react';

export default function CreateAuctionPage() {
  const router = useRouter();

  const [description, setDescription] = useDebounceValue('', 100);
  const [rate, setRate] = useDebounceValue('', 100);
  const [images, setImages] = useState<string[]>([]);

  const handleImages = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const images = e.target.files;

    if (!images) {
      return null;
    }

    if (images.length > 5) {
      toast.error('Photos must be no more than 5');
      return null;
    }

    const base64Images: string[] = [];

    for (let i = 0; i < images.length; i++) {
      base64Images.push((await toBase64(images[i])) as string);
    }

    setImages(base64Images);
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    console.log(description);
    console.log(rate);
    console.log(images);
  };

  const handleClear = () => {
    router.push('/');
  };

  return (
    <S.FormContainer>
      <S.Container>
        <S.InputsContainer>
          <Input type="text" label="Description" onChange={(event) => setDescription(event.target.value)} />
          <Input type="text" label="Starting rate" onChange={(event) => setRate(event.target.value)} />
          <Select name="Status" values={enumToArrayValues(AuctionStatus)} />
        </S.InputsContainer>
        {!!images.length && (
          <S.Gallery>
            {images.map((image, i) => (
              <S.ImageCard key={`${i}_image`}>
                <Image width={200} height={200} src={image} alt={`${i}_image`} />
              </S.ImageCard>
            ))}
          </S.Gallery>
        )}
        <UploadButton width="140px" height="48px" $borderRadius="6px" onChange={handleImages} />
      </S.Container>
      <S.ButtonsContainer>
        <Button type="submit" width="140px" height="48px" $borderRadius="6px" onSubmit={handleSubmit}>
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
