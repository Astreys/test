"use strict";


// Service help share data between controllers
app.service('shareDataService', function () {
    var shareData = {};

    var addObj = function(newObj) {
        shareData = newObj;
    }

    var getObj = function(){
        return shareData;
    }

    return {
        addObj: addObj,
        getObj: getObj
    };
});
