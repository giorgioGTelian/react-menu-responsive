import React from 'react';
import './style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';

export default function App() {
  const navigation = [
    {
      label: 'Introduction',
      path: '/',
    },
    {
      label: 'Page Two',
      path: 'pagetwo',
    },
  ];
  return (
    <Router>
      {navigation.map((item, i) => (
        <NavLink
          exact
          activeStyle={{
            fontWeight: 'bold',
            color: 'red',
          }}
          key={i}
          to={`${item.path}`}
        >
          <ListItem button>
            <ListItemText>{item.label}</ListItemText>
          </ListItem>
        </NavLink>
      ))}
      <Switch>
        <Route exact path="/">
          <div>Home</div>
        </Route>
        <Route path="/">
          <div>Page 2</div>
        </Route>
      </Switch>
    </Router>
  );
}
