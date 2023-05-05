import { Container, Grid } from '@material-ui/core';
import { VideoCard } from '../../components/VideoCard';

export const Home = () => {
  return (
    // 全ての要素をContainerで囲むことで、デザインが整う
    <Container>
      {/*
        横並びにしたいコンポーネントを全て<Grid></Grid>で囲む
        Gridには'container'というプロパティを指定する
        containerの指定がない場合は、他のコードが合っていても横並び表示はされない
      */}

      <Grid container spacing={2}>
        {/*
          横並びにしたいコンポーネントの一つ一つを<Grid></Grid>で囲む
          こちらのGridはitemプrパティを指定する
          全部を囲む<Grid container>の中に横並びにしたい要素の<Grid item>があるイメージ
        */}
        <Grid item xs={4}>
          <VideoCard />
        </Grid>

        <Grid item xs={4}>
          <VideoCard />
        </Grid>

        <Grid item xs={4}>
          <VideoCard />
        </Grid>

        <Grid item xs={4}>
          <VideoCard />
        </Grid>

        <Grid item xs={4}>
          <VideoCard />
        </Grid>
      </Grid>
    </Container>
  );
}
