import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3, 2),
  },
  tabs: {
    borderBottom: "2px solid #e8e8e8"
  }
}));

export {useStyles};