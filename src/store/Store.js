
import React, { Component } from "react";
import { createStore, applyMiddleware } from 'redux';
import  rootReducer  from "../redusers/root.reducer";
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


  export const store = createStore(rootReducer, 
    composeWithDevTools(
    applyMiddleware(
      thunkMiddleware   
  )));


