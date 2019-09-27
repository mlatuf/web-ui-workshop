/* eslint-disable no-unused-vars */
import React from 'react';
import './style.scss';
import { LinearProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    progress: {
        flexGrow: 1,
        marginTop: 10
    }
}));

const LoadingIndicator = () => {
    const classes = useStyles();
    return <LinearProgress className={classes.progress} />;
};

export default LoadingIndicator;
