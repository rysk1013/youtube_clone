import { useRef } from 'react';
import { Button } from '@material-ui/core';

export const VideoSelect = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <div>
      {/*
        Buttonをクリックしたらファイルを選択する仕様にするため、<input type="file" />を指定
        hiddenを指定して非表示にしている
      */}
      <input type="file" hidden ref={inputRef} />
      <Button onClick={handleClick}>
        ファイルを選択
      </Button>
    </div>
  );
};
