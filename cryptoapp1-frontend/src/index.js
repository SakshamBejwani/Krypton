import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
//cors bypass
export const corsAnywhere = "https://cors-proxy.htmldriven.com/?url="
//coin market api url definition
const coinMarketBaseUrl = "https://pro-api.coinmarketcap.com/"
export const coinMarketServerUrl = coinMarketBaseUrl + "v1/"
//bing news api url definition
const bingNewsBaseApiUrl = "https://bing-news-search1.p.rapidapi.com/news/"
export const bingNewsSearchUrl = bingNewsBaseApiUrl + "search"
// coinRanking API
export const coinRankingBaseUrl='https://coinranking1.p.rapidapi.com'
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
