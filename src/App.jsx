import React from 'react';
import "./index.css"
import Header from "./component/header/index"
import Drag from "./component/drag_drop/index"
import Aside from "./component/aside/index"

const App = () => {
  return (
    <div>
<Header />
      <main>
      <Aside />
        <Drag />
      </main>
    </div>
  );
};

export default App;