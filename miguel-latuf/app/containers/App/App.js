/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import HomeIcon from "@material-ui/icons/HomeOutlined";
import SearchIcon from "@material-ui/icons/SearchOutlined";
import SettingsIcon from "@material-ui/icons/SettingsOutlined";

import HomePage from "containers/HomePage/Loadable";
import FeaturePage from "containers/FeaturePage/Loadable";
import NotFoundPage from "containers/NotFoundPage/Loadable";
import "./style.scss";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3, 2),
  },
}));

const App = () => {
  function handleChange(event, newValue) {
    setValue(newValue);
  }

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <Container maxWidth="sm">
      <Paper square className={classes.root}>
        <Typography variant="h5" component="h3" color="initial">Gwitter</Typography>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab icon={<HomeIcon />} aria-label="Home" />
          <Tab icon={<SearchIcon />} aria-label="Search" />
          <Tab icon={<SettingsIcon />} aria-label="Settings" />
        </Tabs>
        {value === 0 && <HomePage />}
        {value === 1 && <FeaturePage />}
        {value === 2 && <NotFoundPage />}
      </Paper>
    </Container>
  );
};

export default App;
