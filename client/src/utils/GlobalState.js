import React from "react";
import { Provider, useSelector, useDispatch } from 'react-redux';
import { store } from './store';


const StoreProvider = (props) => {
  return <Provider store={store} {...props} />;
};

const useStoreContext = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  return [state, dispatch]
};

export { StoreProvider, useStoreContext };
