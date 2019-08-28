import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  progress: {
    flexGrow: 1
  },
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    padding: 0
  },
  text: {
    display: 'inline'
  },
  centeredText: {
    display: 'inline',
    textAlign: "center"
  }
}));

export {useStyles};