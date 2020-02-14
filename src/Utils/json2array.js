function json2array(json){
  let array = [];
  for(let item in json){
    array.push(json[item]);    
  }
  return array;
}
export default json2array;