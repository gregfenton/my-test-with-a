import React from 'react';

function App() {
  const [num, setNum] = React.useState(77);

  return (
    <div className="App">
      <h1>number is: {num}</h1>
    </div>
  );
}

export default App;
