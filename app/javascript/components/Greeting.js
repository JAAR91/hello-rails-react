import React, { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux'
import { fetchData } from "./reducer";

const Greeting = () => {
  const message = useSelector((state) => state.message);
  const dispatch = useDispatch();
  const fetchDataBound = bindActionCreators(fetchData, dispatch);
  
  useEffect(() => {
    fetchDataBound();
  }, []);


  return (
    <React.Fragment>
      Greeting: { message }
    </React.Fragment>
  );
}

export default Greeting
