// add solution here
var array=[];
function theBeatlesPlay(arrayMusicians,arrayInstruments){
  for(var i =0; i<arrayMusicians.length;i++){
  
        array.push(`${arrayMusicians[i]} plays ${arrayInstruments[i]}`);
    
  
  }
  
  return array;
}
var inc=0;
function johnLennonFacts(array){
  while(inc<array.length){
    var req = array[inc];
    var point = "!!!";
    array[inc] = req.contact(point);
    inc++;
  }
  return array;
}