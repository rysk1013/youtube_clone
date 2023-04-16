import { useState, useRef, ChangeEvent, useEffect } from 'react';
import { Button, CardMedia, Typography, Grid } from '@material-ui/core';

export const VideoSelect = () => {
  const [file, setFile] = useState<File>();

  // 動画表示用のURLを格納
  const [videoURL, setVideoURL] = useState<string>();

  // サムネイルの画像URLを格納する配列state
  const [thumbnailURLs, setThumbnailURLs] = useState<string[]>([]);

  // サムネイルを生成する関数
  const createThumbnail = (videoRefURL: string) => {
    // サムネイル生成のための準備
    // canvasタグを使用し、<video>のビューを転写する
    const video = document.createElement('video');
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    // <video>の動画の読み込みが終わったら、<canvas>に<video>と同じサイズにリサイズ
    video.onloadeddata = () => {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      video.currentTime = 0;
    };

    // video.currentTimeが変更されるたびに呼び出される関数(onseeked)を指定
    // video.currentTimeの時のvideoのビュー表示を<canvas>に転写して画像を生成
    // video.currentTimeが動画の最後になるまで繰り返す
    video.onseeked = () => {
      if (video.currentTime >= video.duration || !context) return;

      // <video>のビューを<canvas>に転写
      context.drawImage(video, 0, 0);

      // 配列のstateを更新する
      // prev: 変更前のstateの値
      // [...prev, canvas.toDataURL('image/jpeg')]
      // →以前のstateの値を保ちつつ、新しい値を配列に挿入している
      // イメージとしては、array.append(value)
      setThumbnailURLs((prev) => [...prev, canvas.toDataURL('image/jpeg')]);
      video.currentTime += Math.ceil(video.duration / 3);
    };

    // 動画の読み込み
    video.src = videoRefURL;
    video.load();
  };

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
      // videoURLをsetVideoURLとcreateThumbnailに渡す
      const videoURL = URL.createObjectURL(file);
      // URL.createObjectURLはファイルを引数に受け取り<video>タグで読み込み可能なローカルURLを生成する
      // URL.createObjectURLで生成されたURLを<video>のsrcに渡すことでファイルを動画で表示できる
      setVideoURL(videoURL);
      createThumbnail(videoURL);
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
      {videoURL && (
        <div>
          <CardMedia component='video' src={videoURL} controls />

          {/* サムネイルを表示 */}
          <Typography>サムネイル</Typography>

          <Grid container spacing={2}>
            {/* 配列の中身を同じコンポーネントで複数表示する場合の記法 */}
            {thumbnailURLs.map((url) => {
              return (
                <Grid item xs={4}>
                  <CardMedia image={url} style={{ paddingTop: '56.25% ' }} />
                </Grid>
              );
            })}
          </Grid>
        </div>
      )}

      {/*
        Buttonをクリックしたらファイルを選択する仕様にするため、<input type="file" />を指定
        hiddenを指定して非表示にしている
      */}
      <input type="file" hidden ref={inputRef} onChange={selectedFile} />
      {/* videoURLがセットされたら、ボタンを非表示 */}
      { !videoURL && <Button onClick={handleClick}>ファイルを選択</Button> }
    </div>
  );
};
