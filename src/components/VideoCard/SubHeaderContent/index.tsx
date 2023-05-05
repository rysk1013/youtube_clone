import { Typography } from '@material-ui/core';
import useStyles from './style';

export const SubHeaderContent = () => {
  const styles = useStyles();
  return (
    <>
      <Typography className={styles.root} variant='body2'>Figma</Typography>
      <Typography className={styles.root} variant='body2'>16K views 2 months ago</Typography>
    </>
  );
};
