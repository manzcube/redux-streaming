import React from "react";
import StreamCreate from './streams/StreamCreate'; // try ti create an streams file so I have all my imports there and by this way I only need to import one stream file and not all of them
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreameDelete';
import StreamShow from './streams/StreamShow';
import StreamList  from './streams/StreamList';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";

function App() {
  return (
    <div className="ui container">        
      <BrowserRouter>
          <Header />
        <Routes>
          <Route path='/' element={<StreamList />} />
          <Route path='/streams/new' element={<StreamCreate />} />
          <Route path='/streams/edit' element={<StreamEdit />} />
          <Route path='/streams/delete' element={<StreamDelete />} />
          <Route path='/streams/show' element={<StreamShow />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
 