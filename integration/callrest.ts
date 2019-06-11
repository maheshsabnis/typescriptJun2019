/// <reference path="./../node_modules/@types/jquery/jquery.d.ts" />
function getData() : Array<any>{
    let responseData =[];
    $.ajax({
        url:'http://apiapptrainingservice.azurewebsites.net/api/products',
        type:'GET'
    }).done(function(resp){
        responseData =resp;
        console.log(`in the get data Success ${JSON.stringify(resp)}`);
    }).fail(function(err){
        console.log(err.status);
    });
    return responseData;
}

function getResult(){
    let data = getData();
    console.log(`In the getResult method ${JSON.stringify(data)}`);
}  

getResult();