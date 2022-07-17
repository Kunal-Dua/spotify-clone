import React, { useContext, createContext, useReducer } from "react"
import SpotifyWebApiJs from 'spotify-web-api-js';

export const DataLayerContext = createContext();

export const DataLayer = ({ initialState, reducer, children }) => (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)} >
    { children } 
    </DataLayerContext.Provider >
);

export const useDataLayerValue=()=>useContext(DataLayerContext);

//api 

export const DOAContext = createContext();

const spotify = new SpotifyWebApiJs();

export const Spotify_DOA= ({ children }) => (
    <DOAContext.Provider value={{spotify}} >
    { children } 
    </DOAContext.Provider >
);

export const useSpotifyValue=()=>useContext(DOAContext);