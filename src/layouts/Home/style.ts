import { makeStyles } from '@material-ui/core';

const APP_BAR = 64;
const SIDEBAR_WIDTH = 240;

export default makeStyles({
  flex: {
    display: 'flex',
  },
  sidebar: {
    paddingTop: APP_BAR,
    width: SIDEBAR_WIDTH,
  },
  main: {
    paddingTop: APP_BAR + 30,
    // 横並びの時に最大まで幅を大きくさせる
    flexGrow: 1,
  },
});
