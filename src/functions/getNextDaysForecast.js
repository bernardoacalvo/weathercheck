const getNextDaysForecast = (dataList) => {
  const DAYS = 4;
  let currDate = dataList[0]["dt_txt"].substring(0, 10);
  let nextDaysList = getNextDaysList(dataList, currDate);
  let res = [];
  for (let i = 0; i < DAYS; i++, nextDaysList = getNextDaysList(nextDaysList, currDate)) {
    currDate = nextDaysList[0]["dt_txt"].substring(0, 10);
    let currDateList = getCurrDateList(dataList, currDate);
    res.push(getDayData(currDateList, currDate));
  }
  return res;
};

function getNextDaysList(list, currDate) {
  return list.filter((item) => item["dt_txt"].substring(0, 10) !== currDate);
}

function getCurrDateList(dataList, currDate) {
  return dataList.filter((item) => item["dt_txt"].substring(0, 10) === currDate);
}

function getDayData(list, date) {
  let min;
  let max;
  let item;
  let curr;
  let icon;
  for (let i = 0; i < list.length; i++) {
    item = list[i]["main"];
    curr = item["temp_min"];
    if (curr < min || i === 0) {
      min = curr;
    }
    curr = item["temp_max"];
    if (curr > max || i === 0) {
      max = curr;
    }
    if (i === 5) {
      icon = list[i]["weather"][0]["icon"];
    }
  }
  date = date.split("-").reverse().join("/");
  return { date, icon, min, max };
}

export default getNextDaysForecast;
