import Button from "./components/Button";
import Alert from "./components/Alert";
import Header from "./components/Header";
import { useState } from "react";


function App() {
  const [alertShown, alertUpdate] = useState(false);
  return (
    <div>
      {alertShown && <Header/>}
      {alertShown && <Alert onClose={() => alertUpdate(false)}/>}
      <Button onClick={() => alertUpdate(true)}>Warning</Button>
      <Button onClick={() => alertUpdate(false)}>Close</Button>
    </div>
  );
}

export default App;
