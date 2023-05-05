import { Card, CardHeader, CardMedia } from '@material-ui/core';
import { HeaderTitle } from '../VideoCard/HeaderTitle';
import { SubHeaderContent } from '../VideoCard/SubHeaderContent';
import useStyles from './style';

export const VideoHorizontalCard = () => {
  const styles = useStyles();

  return (
    // 複数のスタイルを適用する場合はテンプレートリテラル形式で記述する
    <Card
      className={`${styles.root} ${styles.transparent}`}
      elevation={0}
      square
    >
      {/* サムネイル用のメディアコンポーネント */}
      <div className={styles.tuhmbnail}>
        <CardMedia
          className={styles.media}
          image='/static/no-image.jpg'
          title='Thumbnail'
        />
      </div>

      {/* Homeで作成したHeaderTitleとSubHeaderContentを流用 */}
      <CardHeader
        className={styles.contentPadding}
        title={<HeaderTitle />}
        subheader={<SubHeaderContent />}
      />
    </Card>
  );
};
