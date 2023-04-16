import { useState, useRef, ChangeEvent, useEffect } from 'react';
import { Button, CardMedia } from '@material-ui/core';

export const VideoSelect = () => {
  const [file, setFile] = useState<File>();

  // 動画表示用のURLを格納
  const [videoURL, setVideoURL] = useState<string>();

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

  // useEffectは、第2引数に指定した変数が変更されたら、第1引数の関数を実行する
  useEffect(() => {
    // ファイルがからの場合は実行しない
    if (file) {
      // URL.createObjectURLはファイルを引数に受け取り<video>タグで読み込み可能なローカルURLを生成する
      // URL.createObjectURLで生成されたURLを<video>のsrcに渡すことでファイルを動画で表示できる
      setVideoURL(URL.createObjectURL(file));
    }
    // file変数が変更されるのを監視する
    // fileの変更を検知したら、第1引数で指定した関数を実行する
    // fileはstateで宣言された変数でなければ、変更の検知はされない
  }, [file]);

  return (
    <div>
      {/*
        React流のif文の記述方法
        if(videoURL){<CardMedia />}と同じ意味
        jsx内ではif文が使用できないので下記の記述方法となっている
        {}で囲む必要がある
      */}
      {videoURL && <CardMedia component='video' src={videoURL} controls />}

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
