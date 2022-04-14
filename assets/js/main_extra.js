async function getResource(lang) {
    let file = '/assets/json/translate.json';
    let response = await fetch(file, {
        method: "GET"
    })
    let result = await response.json();
    // loop through all document elements
     
    
    for(var key in result)
    {
      var phrases = result[key];
      if(key == lang && phrases!= null) {
        
        for(var id in phrases){
          var headingDiv = document.getElementById(id);
          if(headingDiv){
           var text = phrases[id]; 
           headingDiv.innerHTML = text;
          }
        }
        break;
      }
    }
};
function Getjson(lang) {
    getResource(lang);
          
  };
  