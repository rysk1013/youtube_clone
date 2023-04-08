import { Container, Grid } from '@material-ui/core';
import { VideoPlayerCard } from './VideoPlayerCard';
import useStyles from './style';

export const Watch = () => {
  const styles = useStyles();

  return (
    // 全体のデザインを整えるためのコンテナ
    <Container className={styles.root}>
      {/* カラムデザインを実現させるためのコンポーネント */}
      <Grid container spacing={4}>
        {/*
          カラムの実態
          全体が'12'とした場合のカラム配置を設定
        */}
        <Grid item xs={8}>
          <VideoPlayerCard />
        </Grid>
        <Grid item xs={4}>Video Card List</Grid>
      </Grid>
    </Container>
  );
};
