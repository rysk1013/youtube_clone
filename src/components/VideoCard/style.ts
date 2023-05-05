import { makeStyles } from '@material-ui/core';

export default makeStyles({
  root: {
    // カードの最大サイズを指定
    maxWidth: 360,
    // 背景色を削除
    backgroundColor: 'transparent',
  },
  media: {
    // 16:9の解像度のサムネイル画像を表示
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  header: {
    // ユーザのサムネイルの位置を上端に合わせる
    alignItems: 'start',
    // 背景色と両サイドのpaddingを削除
    backgroundColor: 'transparent',
    paddingLeft: 0,
    paddingRight: 0,
  },
});
