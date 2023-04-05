import { Container, Grid } from '@material-ui/core';

export const Watch = () => {
  return (
    // 全体のデザインを整えるためのコンテナ
    <Container>
      {/* カラムデザインを実現させるためのコンポーネント */}
      <Grid container spacing={4}>
        {/*
          カラムの実態
          全体が'12'とした場合のカラム配置を設定
        */}
        <Grid item xs={8}>Video Player Area</Grid>
        <Grid item xs={4}>Video Card List</Grid>
      </Grid>
    </Container>
  );
};
