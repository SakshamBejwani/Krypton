import { coinMarketServerUrl } from "../index";
const key = 'dbef7867-c938-4050-ab7d-5b81426209f0';

export const getCoinMetaData=( callback )=>{

    let headers = new Headers();
    headers.append('X-CMC_PRO_API_KEY', key);
    headers.append('Content-Type', 'application/json'); 
    headers.append('accept', 'application/json');

    fetch(coinMarketServerUrl+'cryptocurrency/info?symbol=' + 'BTC' , { headers })
    .then((response)=>callback(response)) 
    .catch((error)=>{console.log(error)})

}

