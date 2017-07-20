import $ from 'jquery';
import * as React from 'react';
import {render} from 'react-dom';
import {Router,hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore,applyMiddleware } from 'redux';
import App from './common/App.js';

$(function(){
    App.Init();
});
