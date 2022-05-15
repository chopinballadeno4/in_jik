import React, { useEffect, useState} from 'react';
import { RecoilRoot } from "recoil";
import AppRouter from "./Router";

function App() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    setInit(true);
  },[]);

  return (
    <>
      {init ? 
        <RecoilRoot>
          <AppRouter/>
        </RecoilRoot> 
      : 
        "Initializing..."
      }
    </>
  );
}

export default App;
