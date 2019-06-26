// add solution here
var array=[];
function theBeatlesPlay(arrayMusicians,arrayInstruments){
  for(var i =0; i<arrayMusicians.length;i++){
  
        array.push(`${arrayMusicians[i]} plays ${arrayInstruments[i]}`);
    
  
  }
  
  return array;
}
