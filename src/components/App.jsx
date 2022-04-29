import React from "react";
import StreamCreate from './streams/StreamCreate'; // try to create an streams file so I have all my imports there and by this way I only need to import one stream file and not all of them
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import StreamList  from './streams/StreamList';
import { Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import history from '../history'

class App extends React.Component {
  
  
  render() {
    return (
      <div className="ui container">        
        <Router history={history}>            
          <div>
            <Header />
            <Switch>
              <Route path='/' exact component={StreamList} />
              <Route path='/streams/new' exact component={StreamCreate} />
              <Route path='/streams/edit/:id' exact component={StreamEdit} />
              <Route path='/streams/delete/:id' exact component={StreamDelete} />
              <Route path='/streams/:id' exact component={StreamShow} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
 