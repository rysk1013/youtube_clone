import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
} from '@material-ui/core';
import useStyles from './style';

export const VideoPlayerCard = () => {
  const styles = useStyles();

  return (
    // box-shadowとborder-radiusはCardコンポーネントにプロパティを指定するだけで除去できる
    // elevation={0} : box-shadowの値を調整
    // square: border-radisuを除去
    <Card className={styles.transparent} elevation={0} square>
      {/*
        CardMediaは、画像の他に動画,音声などのメディア系コンポーネントの作成ができる
        メディアの指定は、`component`というプロパティに指定のメディアコンポーネント`img`,`video`,`audio`などのHTMLタグを指定する
        `src`にメディアのパスを指定すると画面に表示される
        今回はビデオプレイヤーに操作用のコントローラーを表示させたいので、`controls`というプロパティを指定
      */}
      {/* ビデオプレイヤー */}
      <CardMedia
        component='video'
        controls
        src='/static/production ID_4763824.mp4'
      />

      {/* タイトル表示エリア */}
      <CardContent className={styles.paddingHorizontalLess}>
        {/*
          Typographyコンポーネントはテキストコンポーネントと簡単に作ることができる
          componentにはh2を、variantにはh6を指定しているのは、htmlタグは<h2></h2>を使い、
          スタイリングはmaterial-uiで用意されているh6のスタイリングを使うように指示している
        */}
        <Typography component='h2' variant='h6'>
          Organization Admin Settings: Dashboard overview [1/7]
        </Typography>

        {/*
          color='textSeconday'はmaterial-uiでデフォルトで設定されている文字色
          独自のカラーを使いたい場合は、カスタマイズが必要になる
        */}
        <Typography variant='body2' color='textSecondary'>
          10,094,526 回視聴 • 2018/08/06
        </Typography>
      </CardContent>

      {/* タイトル下の横線 */}
      <Divider />

      {/* 投稿者情報エリア */}
      <CardHeader
        className={styles.paddingHorizontalLess}
        avatar={<Avatar />}
        title='Movieclips Trailers'
        subheader='104k subscribers'
      />

      {/* 説明文エリア */}
      <CardContent className={styles.descPadding}>
        Find your absolutely beautiful and serene place and listen to nature
        sounds, birds signing and relaxing water sounds with breathtaking views
        of Mount Shuksan. It’s 8-hour 4k video of discovery and peace. Download
        it for your personal use and transform your 4K TV into a source of
        relaxation and restoration.
      </CardContent>
    </Card>
  );
};
