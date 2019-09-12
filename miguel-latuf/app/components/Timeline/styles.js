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
        textAlign: 'center'
    },
    card: {
        boxShadow: 'none',
        cursor: 'pointer'
    },
    cardHeader: {
        padding: 0,
        paddingTop: '2%'
    },
    cardContent: {
        padding: '2%'
    },
    cardMedia: {
        padding: '0 4%'
    },
    cardActions: {
        display: 'inline-flex',
        justifyContent: 'space-between',
        width: '100%',
        padding: theme.spacing(1,2)
    }
}));

export {useStyles};