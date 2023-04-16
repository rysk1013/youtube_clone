import {
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  Divider,
} from '@material-ui/core';

import { VideoSelect } from './VideoSelector';

export const Upload = () => {
  return (
    // ダイアログコンポーネント
    // fullWidth: trueの場合、画面いっぱいにダイアログを表示する
    // maxWidth: ダイアログの横幅の最大値を指定
    // open: ダイアログを表示するかの指定。URLを開いている際は、表示し続けるのでtrueを指定
    <Dialog fullWidth={true} maxWidth='md' open={true}>
      {/* タイトル用のコンポーネント */}
      <DialogTitle>動画のアップロード</DialogTitle>

      {/* 横線コンポーネント */}
      <Divider />

      {/*
        コンテント用のコンポーネント
        2カラムのレイアウトを実装する
      */}
      <DialogContent>
        <Grid container spacing={4}>
          <Grid xs item>
            {/* VideoSelectコンポーネントを表示 */}
            <VideoSelect />
          </Grid>

          {/* 真ん中に縦線を挿入 */}
          <Divider orientation='vertical' flexItem />

          <Grid xs item>
            右側
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};
