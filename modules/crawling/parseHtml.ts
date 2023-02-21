import * as cheerio from 'cheerio';

import TyphoonInfo from '../../type/typhoonInfo';

interface parsetHtmlDetailInterface {
    ($ : cheerio.CheerioAPI) : Array<TyphoonInfo>;
}


//Html string을 파싱한다.
export const getCheerioFromHtml = (html:string) => cheerio.load(html);



//easterlywave에서 열대성 저기압 리스트를 가져온다.
export const parseTyphoonListFromEasterlyWave:parsetHtmlDetailInterface = ($) => {

    const lists = $(".level");
    lists.each((index, list) => {
        //crawling from easterlywave 
    });


    return new Array<TyphoonInfo>; //임시로 넣어뒀음. 나중에 파싱 추가하면 넣어야한다.
}


parseTyphoonListFromEasterlyWave(getCheerioFromHtml('string'));
