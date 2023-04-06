import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
} from '@material-ui/core';

export const VideoPlayerCard = () => {
  return (
    <Card>
      {/*
        CardMediaは、画像の他に動画,音声などのメディア系コンポーネントの作成ができる
        メディアの指定は、`component`というプロパティに指定のメディアコンポーネント`img`,`video`,`audio`などのHTMLタグを指定する
        `src`にメディアのパスを指定すると画面に表示される
        今回はビデオプレイヤーに操作用のコントローラーを表示させたいので、`controls`というプロパティを指定
      */}
      <CardMedia
        component='video'
        controls
        src='/static/production ID_4763824.mpr4'
      />
      {/* タイトル表示エリア */}
      <CardContent></CardContent>

      {/* タイトル下の横線 */}
      <Divider />

      {/* 投稿者情報エリア */}
      <CardHeader />

      {/* 説明文エリア */}
      <CardContent></CardContent>
    </Card>
  );
};
