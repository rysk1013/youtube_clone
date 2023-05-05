import { AppBar, Avatar, IconButton, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import { Logo } from '../../components/Logo';
import { SearchBar } from './SearchBar';
// export defaultしているので、import側でuseStylesと命名
import useStyles from './style';

export const DashboardHeader = () => {
  // useStylesを実行して、CSSを生成
  const styles = useStyles();

  return (
    // color="inherit" : 背景を白色に
    // elevation={0} : 影(box-shadow)を無くす
    <AppBar elevation={0} color='inherit'>
      <Toolbar className={styles.between}>
        <div className={styles.flex}>
          {/* アイコン用のボタンを配置 */}
          <IconButton>
            <MenuIcon />
          </IconButton>
          {/* ロゴを配置 */}
          <div className={styles.logo}>
            <Logo />
          </div>
        </div>
        {/* 検索バー */}
        <SearchBar />
        <div className={styles.flex}>
          {/* 新規動画作成アイコンボタン */}
          <IconButton>
            <VideoCallIcon />
          </IconButton>
          {/* プロフィールアイコン */}
          <IconButton className={styles.profileIcon}>
            <Avatar />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};
