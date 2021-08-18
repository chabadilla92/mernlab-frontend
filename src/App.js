import logo from './logo.svg';
import './App.css';
import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Display from './Display';
import Form from './Form';

function App() {

const url = "https://mernlab-ca.herokuapp.com";
const [weed, setWeed] = React.useState([]);

const emptyWeed = {
  name: "",
  img: "",
  strain: ""
};

const [selectedWeed, setSelectedWeed] = React.useState(emptyWeed);

// GET
const getWeed = () => {
  fetch(url + "/weed")
  .then((response) => response.json())
  .then((data) => {
    setWeed(data);
  });
};

React.useEffect(() => getWeed(), []);

// CREATE
const handleCreate = (newWeed) => {
  fetch(url + "/weed", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newWeed),
  }).then(() => {
    getWeed();
  });
};

// UPDATE
const handleUpdate = (weed) => {
  fetch(url + "/weed/" + weed._id, {
    method: "put",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(weed),
  }).then(() => {
    getWeed();
  });
};

const selectWeed = (weed) => {
  setSelectedWeed(weed);
};

// DELETE
const deleteWeed = (weed) => {
  fetch(url + "/weed/" + weed._id, {
    method: "delete",
  }).then(() => {
    getWeed();
  });
};

  return (
    <div className="App">
      <header>
      <h1 className="top">Weed Globe Cannibus Club</h1>
      <small>Quality, consistency, and freshness - guaranteed.</small>

      </header>
      
    <h4><span className="strains">STRAINS</span> | DISCOVER - LEARN - EXPLORE</h4>

    <div className="add"><Link to="/create"><button className="strain">Add to Collection</button></Link></div>
    
      <main>
      <Switch>
      <Route exact path="/" render={(rp) => (<Display {...rp} weeds={weed} selectWeed={selectWeed} deleteWeed={deleteWeed}/>)} />
      <Route
        exact
        path="/create"
        render={(rp) => (
      <Form {...rp} label="create" weed={emptyWeed} handleSubmit={handleCreate} />
  )}
/>
      <Route
        exact
        path="/edit"
        render={(rp) => (
      <Form
        {...rp}
        label="update"
        weed={selectedWeed}
        handleSubmit={handleUpdate}
      />
    )}
  />
      </Switch>
      </main>

    </div>
  );
}

export default App;
