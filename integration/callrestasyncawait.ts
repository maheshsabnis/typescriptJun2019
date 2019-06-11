/// <reference path="./../node_modules/@types/jquery/jquery.d.ts" />
function getDataAsyncAwait() :Promise<string> {
    return $.ajax({
        url: "http://apiapptrainingservice.azurewebsites.net/api/products",
        type:'GET'
      })
        .then(function(res) {
          return res;
        })
        .catch(function(err) {
          return `Error occured...${err}`
        });
}
async function getDataResult() {
       let data = await getDataAsyncAwait();
       console.log(JSON.stringify(data)); 
       for(let i=0;i<=10;i++){
           console.log(i);
       }  
}  
getDataResult();