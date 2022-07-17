import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DataLayer, Spotify_DOA } from './Context/DataLayer';
import reducer, { initialState } from './Reducer/reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Spotify_DOA>
      <DataLayer initialState={initialState} reducer={reducer}>
        <App />
      </DataLayer>
    </Spotify_DOA >
  </React.StrictMode>
);
