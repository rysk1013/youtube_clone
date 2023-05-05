import { Avatar, Card, CardHeader, CardMedia } from '@material-ui/core';
import { HeaderTitle } from './HeaderTitle';
import { SubHeaderContent } from './SubHeaderContent';
import useStyles from './style';

export const VideoCard = () => {
  const styles = useStyles();

  return (
    // elevation={0} : Cardの影を削除する
    // square : 丸みの除去
    <Card className={styles.root} elevation={0} square>
      {/* no-image.jpgという画像を作成し、デフォルトのサムネイルとする */}
      <CardMedia
        className={styles.media}
        image="/static/no-image.jpg"
        title="Thumbnail"
      />
      <CardHeader
        className={styles.header}
        avatar={<Avatar />}
        title={<HeaderTitle />}
        subheader={<SubHeaderContent />}
      />
    </Card>
  );
}
