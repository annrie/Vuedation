// import moment from 'moment'
import dayjs from 'dayjs/locale/ja'

// const weekday = require('dayjs/plugin/weekday');
// dayjs.extend(weekday);

// Set `2021-09-23T16:29:51.022Z `to a readable date.
// https://momentjs.com/docs/#/displaying/
export default dateTime => {
  // let aday = dayjs(dateTime).locale('ja')
  return dayjs(dateTime).locale('ja').format('{YYYY} MM-DDTHH:mm:ss [Z] A')
}
