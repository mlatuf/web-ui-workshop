import { makeStyles } from '@material-ui/core/styles';
import { green, pink, lightBlue, grey } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  progress: {
    flexGrow: 1
  },
  toolbarContainer: {
    borderBottom: "2px solid #e8e8e8",
    boxShadow: 'none',
    backgroundColor: '#FFF',
    padding: 0
  },
  toolbar: {
    padding: theme.spacing(2,1)
  },
  back: {
    marginRight: '5px',
    '&:hover': {
      color: lightBlue[800],
      cursor: 'pointer'
    }
  },
  card: {
    boxShadow: 'none'
  },
  cardHeader: {
    padding: 0,
    paddingTop: '2%'
  },
  cardAvatar: {
    width: 60,
    height: 60
  },
  cardContent: {
    padding: '2%'
  },
  cardMedia: {
    padding: '0 4%'
  },
  cardActions: {
    display: 'inline-flex',
    justifyContent: 'space-between'
  },
  info: {
    display:'inline-flex',
    padding: theme.spacing(1)
  },
  divider: {
    marginTop: theme.spacing(1)
  },
  like: {
    margin: theme.spacing(2,6),
    backgroundColor: pink[400],
    color: grey[50],
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(2,2)
    },
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: pink[800]
    }
  },
  retweet: {
    margin: theme.spacing(2,6),
    backgroundColor: green[400],
    color: grey[50],
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(2,2)
    },
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: green[800]
    }
  },
  comment: {
    margin: theme.spacing(2,6),
    backgroundColor: lightBlue[400],
    color: grey[50],
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(2,2)
    },
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: lightBlue[800]
    }
  }
}));

export {useStyles};