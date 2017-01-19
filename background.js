var rec;
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
 
    getjson(request,sender,sendResponse);
    return true;


  });

function getjson(request,sender,sendResponse)
{
    var http = new XMLHttpRequest();
    var url2=request.trim();
    
    console.log(url2);
    var url1 ='http://api.wordnik.com:80/v4/word.json/';
    var url3='/definitions?limit=200&includeRelated=true&useCanonical=false&includeTags=false&api_key=3bc8dca5135a422de3000054f120a0a7bf02d55c1a650ec7d';
    var url = url1+url2+url3;   
    var method ='GET';
http.open(method,url); 
http.send();      

http.onreadystatechange=function()
{
    if(this.readyState == 4 && this.status == 200)
        {
           rec=JSON.parse(http.responseText)[0].text;
            //alert(rec);
            //return rec;
            sendResponse(rec);
            
        }
    else if(this.readyState != 4 && this.status != 200)
        {
            
        }
}
}

