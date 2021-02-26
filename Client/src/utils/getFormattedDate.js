export default function GetFormattedDate(date) {
  var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const todayTime = new Date(date);
  const month = months[todayTime.getMonth()];
  const day = todayTime.getDate();
  const year = todayTime.getFullYear();
  const hourInFull = todayTime.getHours();
  const hourInHalf = hourInFull < 12 ? hourInFull : 12 - (24 - hourInFull);
  const hour = hourInHalf === 0 ? 0 : hourInHalf;
  const minute = todayTime.getMinutes();
  const ampm = hourInFull < 12 ? 'AM' : 'PM';
  return `${month}   /   ${day}   /   ${year}  , Time :   ${hour}:${
    minute < 9 ? '0' : ''
  }${minute}  ${ampm}`;
}

export const GetTimeDifference = (t1, t2) => {
  const time1 = new Date(t1);
  const time2 = new Date(t2);
  return Math.ceil((time1.getTime() - time2.getTime()) / 1000 / 60);
};
