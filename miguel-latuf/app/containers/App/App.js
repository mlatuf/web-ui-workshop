/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from "react";
import { useStyles } from "./styles";
import { Paper, Container } from "@material-ui/core";
import { Switch, Route } from 'react-router-dom';
import NavigationTabs from "components/NavigationTabs";
import TweetDetailsPage from "containers/TweetDetailsPage";

const App = () => {
  function handleChange(event, newValue) {
    setValue(newValue);
  }

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const NavigationTabsComponent = () => {
    return (<NavigationTabs 
      classes={classes} 
      value={value} 
      onChange={handleChange}/>
    );
  };

  return (
    <Container maxWidth="sm">
      <Paper square className={classes.root}>
        <Switch>
          <Route exact path="/" component={NavigationTabsComponent} />    
          <Route path="/search" component={NavigationTabsComponent} />    
          <Route path="/settings" component={NavigationTabsComponent} />
          <Route path="/details/:id" component={TweetDetailsPage} />   
        </Switch>
      </Paper>
    </Container>
  );
};

export default App;
