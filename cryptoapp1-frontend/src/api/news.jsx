import { bingNewsSearchUrl } from "../index";

export const getNewsByCrypto=(crypto, callback )=>{

    let headers = new Headers();
    headers.append('x-bingapis-sdk', true);
    headers.append('x-rapidapi-host', 'bing-news-search1.p.rapidapi.com');
    headers.append('x-rapidapi-key', '4fb86ad23bmshe15a93fd7843211p199156jsnddc336097524');
    headers.append('Content-Type', 'application/json'); 
    headers.append('accept', 'application/json');
    headers.append("Access-Control-Allow-Origin", "*")
    headers.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    // console.log(bingNewsSearchUrl+'?q=crypto&count=5&freshness=Day&textFormat=Raw&safeSearch=Off')
    fetch(bingNewsSearchUrl+'?q='+crypto+'&count=5&freshness=Day&textFormat=Raw&safeSearch=Off' , { headers })
    .then((response)=>callback(response)) 
    .catch((error)=>{console.log(error)})

}