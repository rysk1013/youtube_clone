import { useState, useRef, ChangeEvent } from 'react';
import { Button } from '@material-ui/core';

export const VideoSelect = () => {
  const [file, setFile] = useState<File>();

  // 「ファイルを選択」した後に、選択されたファイルをfileに代入する処理
  const selectedFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.files?.length) {
      setFile(event.currentTarget.files[0]);
    }
  };

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
      <input type="file" hidden ref={inputRef} onChange={selectedFile} />
      {/* ファイルが選択されたら、名前を表示する */}
      {file?.name}
      <Button onClick={handleClick}>ファイルを選択</Button>
    </div>
  );
};
