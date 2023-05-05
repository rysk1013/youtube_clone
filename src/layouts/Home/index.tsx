import { Outlet } from 'react-router-dom';
import { DashboardHeader } from '../../templates/DashboardHeader';
import { Sidebar } from '../../templates/Sidebar';
import useStyles from './style';

export const HomeLayout = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      {/* DashboardHeaderコンポーネントを表示 */}
      <DashboardHeader />
        {/* Sidebarコンポーネントを表示 */}
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        {/*
          <Outlet />を配置した箇所に、childrenコンポーネントが展開される
          childrenコンポーネントとは、Route.tsx内でchildren>elementで指定したコンポーネントである
        */}
        <div className={styles.main}>
          <Outlet />
        </div>
    </div>
  )
};
