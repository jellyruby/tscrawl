import * as cheerio from 'cheerio';

import TyphoonInfo from '../../type/typhoonInfo';

//Html string을 파싱한다.
export const parseHtml = (html:string) => {

    const $ = cheerio.load(html);


}

//easterlywave에서 열대성 저기압 리스트를 가져온다.
const parseTyphoonListFromEasterlyWave = ($:cheerio.CheerioAPI) => {

    const lists = $(".level");
    lists.each((index, list) => {
        //crawling from easterlywave 
    });
}