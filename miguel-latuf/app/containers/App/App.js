/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from "react";
import { Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { Helmet } from 'react-helmet';
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import SettingsIcon from "@material-ui/icons/Settings";

import HomePage from "containers/HomePage/Loadable";
import FeaturePage from "containers/FeaturePage/Loadable";
import NotFoundPage from "containers/NotFoundPage/Loadable";
import "./style.scss";

// export function IconTabs() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);

//   function handleChange(event, newValue) {
//     setValue(newValue);
//   }

//   return (
//     <Paper square className={classes.root}>
//       <Tabs
//         value={value}
//         onChange={handleChange}
//         variant="fullWidth"
//         indicatorColor="primary"
//         textColor="primary">
//         <Tab icon={<HomeIcon />} aria-label="Home" />
//         <Tab icon={<SearchIcon />} aria-label="Search" />
//         <Tab icon={<SettingsIcon />} aria-label="Settings" />
//       </Tabs>
//     </Paper>
//   );
// }

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 500
  }
});

const App = () => {
  function handleChange(event, newValue) {
    setValue(newValue);
  }

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <div className="app-wrapper">
      <Helmet>
        <title>Gwitter</title>
      </Helmet>
      <Paper square className={classes.root}>
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
    </div>
  );
};

export default App;
