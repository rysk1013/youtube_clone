import { Dialog, DialogTitle, DialogContent, Divider } from '@material-ui/core';

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

      {/* コンテント用のコンポーネント */}
      <DialogContent>ダイアログのコンテンツを作成</DialogContent>
    </Dialog>
  );
};
