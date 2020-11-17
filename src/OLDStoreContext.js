import React from 'react';
import store from './redux/redux-store';

const OLDStoreContext = React.createContext(null);

export const Provider = (props) => (
  <OLDStoreContext.Provider value={props.store}>{props.children}</OLDStoreContext.Provider>
);

export default OLDStoreContext;
