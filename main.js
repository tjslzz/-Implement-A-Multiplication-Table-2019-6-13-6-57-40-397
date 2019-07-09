
function isStartLessEnd(start,end){
    return start <= end;
}
function isNumberInRange(start,end){
    if(start >= 1 && start <= 1000 && end >= 1 && end <= 1000){
        return true;
    }
    return false;
}

function createMultiplicationTable(start,end,isStartLessEnd,isNumberInRange){
    if(!isStartLessEnd){
        return null;
    }
    if(!isNumberInRange){
        return "NumberOutOfRange";
    }
    var msg = "";
    for(var i = start; i <= end; i++){
        for(j = start; j <= i; j++){
            if(i <= j){
                msg += i + "x" + j +"=" + (i*j)+" ";
            }
            else{
                msg += j + "x" + i +"=" + (i*j)+" ";
            }
        }
        msg += "\n";
    }
    console.log(msg);
    return msg;
}

module.exports = {isStartLessEnd,isNumberInRange,createMultiplicationTable};