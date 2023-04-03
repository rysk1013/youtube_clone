import { Avatar, Card, CardHeader, CardMedia } from '@material-ui/core';

export const VideoCard = () => {
  return (
    // elevation={0} : Cardの影を削除する
    // square : 丸みの除去
    <Card elevation={0} square>
      {/* no-image.jpgという画像を作成し、デフォルトのサムネイルとする */}
      <CardMedia
        image="/static/no-image.jpg"
        title="Thumbnail"
      />
      <CardHeader
        avatar={<Avatar />}
        title="Organization Admin Settings: Dashboard overview [1/7]"
        subheader="Figma 16k views  2 months ago"
      />
    </Card>
  );
}
