import React, { Fragment } from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Typography, Tabs, Tab } from "@material-ui/core";

import HomeIcon from "@material-ui/icons/HomeOutlined";
import SearchIcon from "@material-ui/icons/SearchOutlined";
import SettingsIcon from "@material-ui/icons/SettingsOutlined";

import HomePage from "containers/HomePage/Loadable";
import SearchPage from "../../containers/SearchPage";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
    {children}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const NavigationTabs = (props) => {
  const { classes, value, onChange } = props;

  return (
    <Fragment>
      <Typography variant="h5" component="h3" color="initial">Gwitter</Typography>
      <Tabs
        value={value}
        onChange={onChange}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
        className={classes.tabs}
        elevation="1">
        <Tab icon={<HomeIcon style={{ fontSize: 30 }} />} aria-label="Home" component={Link} to="/" />
        <Tab icon={<SearchIcon style={{ fontSize: 30 }} />} aria-label="Search" component={Link} to="/search"/>
        <Tab icon={<SettingsIcon style={{ fontSize: 30 }} />} aria-label="Settings" component={Link} to="/settings"/>
      </Tabs>
      <TabPanel value={value} index={0}>
        <HomePage />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SearchPage />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <h3>Settings</h3>
      </TabPanel>
    </Fragment>
  );
};

export default NavigationTabs;