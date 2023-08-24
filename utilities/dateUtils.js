const getBigQueryTimestampFromFirebaseTimestamp=(firebaseTS)=>{
  const thisDate = new Date(firebaseTS); //1959-01-01 01:02:05
  const year = thisDate.getFullYear();
  const month = thisDate.getMonth()+1;
  const day = thisDate.getDate();
  const hour = thisDate.getHours();
  const minute = thisDate.getMinutes();
  const second = thisDate.getSeconds();
  const formattedDateTime = `${year}-${month}-${day} ${hour}:${minute}:${second}`;
  return formattedDateTime;
}

const getDateFromBigQueryTimestamp = (timestamp) =>{
  const jsonString=JSON.parse(JSON.stringify(timestamp));
  const dateString = jsonString.value;
  return new Date(dateString);
}

module.exports={
  getBigQueryTimestampFromFirebaseTimestamp,
  getDateFromBigQueryTimestamp,
}
