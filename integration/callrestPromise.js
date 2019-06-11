/// <reference path="./../node_modules/@types/jquery/jquery.d.ts" />
function getDataPromise() {
    return $.ajax({
        url: 'http://apiapptrainingservice.azurewebsites.net/api/products',
        type: 'GET'
    });
}
function getResult() {
    getDataPromise()
        .then(function (resp) {
        console.log("In the getResult method " + JSON.stringify(resp));
    })["catch"](function (error) {
        console.log(error.status);
    });
}
getResult();
