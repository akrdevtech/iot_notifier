const NodeCache = require( "node-cache" );
const thisCache = new NodeCache();


const getData = async (key) => {
  let value = thisCache.get(key);
  if(value === undefined){
    console.log(`c7174228-9d40-4af5-9d13-c9e7d98b947f : Cache Miss :: ${key}`);
  }else{
    console.log(`d7174228-9d40-4af5-9d13-c9e7d98b947a : Cache Hit :: ${key}, ${value}`);
  }
  return value;
}

const setData = (key,val) => {
  const success = thisCache.mset([{key, val}]);
  if(success){
    return val;
  }
  return null;
}

module.exports = {
  getData,
  setData,
}
