import _ from 'lodash';
import uuid from 'react-uuid'

const data_ad =     {
    'ad': true,
    "words": [
    'Ad'
    ],
    "ascii": <h2>I AM AN AD</h2>,
    "size": 28,
    "date": "2021-06-30T07:06:13.199Z",
    "id": "e4d74f-3358-5acd-1fbb-504b47004ec"
 }
 

export const  insertAd = (data) => {
    let last = [];
    let allCounter = 0;
    for (let type of data) {
       last.push(type);
       allCounter++;
       if (allCounter == 20) {
          last.push( data_ad )
          allCounter = 0;
       } 
    }
    return last;
 }