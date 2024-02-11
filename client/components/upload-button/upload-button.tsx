import { FC } from 'react';
import { Paperclip } from 'lucide-react';

import * as S from './upload-button.styled';

interface UploadButtonProps {
  width?: string;
  height?: string;
  $borderRadius?: string;
  $backgroundColor?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const UploadButton: FC<UploadButtonProps> = (props) => {
  return (
    <>
      <div>
        <S.Label {...props} htmlFor="UPLOAD" onChange={() => {}}>
          <Paperclip />
          UPLOAD
        </S.Label>
        <S.UploadButton
          id="UPLOAD"
          type="file"
          onChange={props.onChange}
          multiple
          accept="image/png, image/jpeg, image/jpg"
        />
      </div>
    </>
  );
};
