import axios from 'axios';
import { decodeToken } from "react-jwt";

function _0x1678($,x){let _=_0x5879();return(_0x1678=function($,x){return _[$-=321]})($,x)}const _0x439197=_0x1678;!function($,x){let _=_0x1678,t=$();for(;;)try{let n=-parseInt(_(321))/1*(-parseInt(_(327))/2)+parseInt(_(333))/3*(parseInt(_(324))/4)+-parseInt(_(328))/5*(parseInt(_(326))/6)+parseInt(_(329))/7*(-parseInt(_(331))/8)+parseInt(_(334))/9+parseInt(_(323))/10+parseInt(_(322))/11*(parseInt(_(330))/12);if(279843===n)break;t.push(t.shift())}catch(c){t.push(t.shift())}}(_0x5879,279843);const tokenAccess=[_0x439197(325),"aaaaaaa",_0x439197(332)];function _0x5879(){let $=["1537kbdRHX","22qFIMsa","642750PsmUeA","3508ULbhqh","jdwnshbjbdybwq8h","468WYJTVF","392PQSsCW","20885lFZVEt","63OMwlVq","1167756HEhzbQ","276648IdKmRG","1626262620292829062","684fjIGvV","1410921CYuxnX"];return(_0x5879=function(){return $})()}

/**
 * 
 * @param {string} sheet 
 * @returns 
 */
const getData = async (sheet) => {
    try {
        const response = await axios.get('https://etnociencias-server.vercel.app/newgdaycare/', {
            headers: {
              'Content-Type': 'application/json',
              'authorization': tokenAccess.join('')
            },
            params: {
                "hojaCalculo": sheet
            }
        });

        return decodeToken((response.data).data);
    }
    catch (error) {
        console.log('error', error);
    }
};
  
  
const getDataLoggued = async () => {
  try {
      const data_1 = await getData(`FullData`);
      const teachers = await getData('TEACHERS');

      data_1.data = data_1.data.map((item) => {
          item.fullname = `${item.first_name} ${item.last_name}`;
          return item;
      });

      const data_ = [
        [...data_1.data.filter((item) => {
          const regex = /^NG1/g;
          return regex.test(item['homeroom'])
        })],
        [...data_1.data.filter((item) => {
          const regex = /^NG2/g;
          return regex.test(item['homeroom'])
        })],
      ]

      /**
        * !: Esto debe de ser un estado global, Mejorar otro dia.
      */
      sessionStorage.setItem('data', JSON.stringify([
        data_[0],
        data_[1]
      ]));

      sessionStorage.setItem('teachers', JSON.stringify((teachers.data)?.filter( (item) => {
        return item['classroom'] !== '' && item['classroom'] !== undefined
      })));

      return true;
  }
  catch (error) {
      console.log('error', error);
      return false;
  }
};

export {
    getDataLoggued,
    getData,
    tokenAccess
}