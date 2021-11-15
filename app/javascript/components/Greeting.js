import React, { useEffect } from "react"
import { useSelector, dispatch } from 'react-redux';

function Greeting() {
  const message = useSelector((state) => state);
  console.log(message);

  useEffect(() => {
    
  }, []);

  return (
    <React.Fragment>
      Greeting: {" greeeeting!!"}
    </React.Fragment>
  );
}

export default Greeting
