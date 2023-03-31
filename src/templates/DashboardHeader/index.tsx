import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Logo } from '../../components/Logo';
// export defaultしているので、import側でuseStylesと命名
import useStyles from './style';

export const DashboardHeader = () => {
  // useStylesを実行して、CSSを生成
  const styles = useStyles();

  return (
    // color="inherit" : 背景を白色に
    // elevation={0} : 影(box-shadow)を無くす
    <AppBar elevation={0} color='inherit'>
      <Toolbar>
        {/* アイコン用のボタンを配置 */}
        <IconButton>
          <MenuIcon />
        </IconButton>
        {/* ロゴを配置 */}
        <div className={styles.logo}>
          <Logo />
        </div>
      </Toolbar>
    </AppBar>
  );
};
