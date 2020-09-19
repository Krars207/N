if (document.URL.search(/info_command/)!= -1){

var outNormDate = new Date();
outNormDate.setMinutes(outNormDate.getMinutes() + 2);
outNormDate.setMonth(outNormDate.getMonth()+1);
var normDt =outNormDate.getDate() + "." + outNormDate.getMonth() + "." + outNormDate.getFullYear();
var normTime =outNormDate.getHours() + ":" + outNormDate.getMinutes() + ":" + outNormDate.getSeconds();

/////// Поиск нужных элементов
function searchbyword(word,offset){
var CollectionOfTd = document.getElementsByTagName('td');
var n;
for(n = CollectionOfTd.length - 1;CollectionOfTd[n].textContent !== word;)n--;
return document.getElementsByTagName('td')[n + offset];
}
var strDuration = searchbyword("Длительность:",1).textContent; //строка с временем хода
var strdeparture = searchbyword("Прибытие:",1).textContent; //строка с датой прихода приказа
var mountServ = document.getElementById('serverDate').textContent; //месяц


///////Перемещение в массивы

var durationArr = strDuration.split(':'); // массив с временем хода
var departureArr = strdeparture.split(/[\s|,:!#]+/); //(1) нас интересуют 3 4 5
var mountS = mountServ.split('/')[1]; //месяц



///////Создание дат

var startArrival = new Date(+departureArr[2],+mountS-1,+departureArr[1],+departureArr[3]-+durationArr[0],+departureArr[4]-+durationArr[1],+departureArr[5]-+durationArr[2],0); //Время отправки

var maxTimeForCancel = new Date(startArrival.getFullYear(),startArrival.getMonth(),startArrival.getDate(),startArrival.getHours(),startArrival.getMinutes() + 19,startArrival.getSeconds() + 58,startArrival.getMilliseconds());

var normTimeMTFC = maxTimeForCancel.getHours() + ":" + maxTimeForCancel.getMinutes() + ":" + maxTimeForCancel.getSeconds();



ifCancelNow = function(){
var ifCancelNowW = new Date();
var today = new Date();
function timer() {
ifCancelNowW = Math.round((today.getTime() - startArrival.getTime())/1000);
today.setSeconds(+today.getSeconds() + +ifCancelNowW);
$("#dsmBT").html('<span >' + today.getHours() + ":" + today.getMinutes() + ":" + +today.getSeconds() + "</span>");
}
timer();

return ifCancelNowW;

};
setInterval(ifCancelNow, 1000);

///////////////Функции
ImputeToDate = function(){
var ImputeToDate = new Date();
var input = document.getElementById('deptime');
var valInInput = input.value.match(/\d+/g);
var input2 = document.getElementById('depdate');
var valInInput2 = input2.value.match(/\d+/g);
valInInput2.length = 3;
ImputeToDate.setFullYear(valInInput2[2],valInInput2[1]-1,valInInput2[0]);
valInInput.length = 3;
ImputeToDate.setHours(...valInInput);
ImputeToDate.setMilliseconds(0);
return ImputeToDate;
}





function evenOrOdd(a) {
return a % 2 !== 0 ? "red" : "green"
};
var parityCheck = +durationArr[2] + +departureArr[5];
startt = function(){
document.getElementById('aaoeu').style.textAlign="left";
var CancelTime = (ImputeToDate().getTime() - startArrival.getTime())/2 + startArrival.getTime();
if(CancelTime <= Date.now()){

var isResizeble = false;
if(!isResizeble) {
isRezeble = true;

}
}

$('#aaoeu').html( '<span >'+ 'Отменить через ' + Math.round((CancelTime - Date.now())/1000) + ' сек' + "</span>");
}


/////// добавление импута
var srcHTML = '<tr id="dsmPlannedTime"><th colspan="3">Подготовка</th></tr>' + "</td>" + "</tr>" + "<tr>" + "<td colspan='2'>Необходимое время возвращения:</td>" + '<td id="bact">' +
'<input type="text" id="depdate" value="' + normDt + '" onchange="ImputeToDate()" size="8"maxlength="10" style = "margin-left:5px";>' +
'<input type="text" id="deptime" value="' + normTimeMTFC + '" onchange="ImputeToDate()" size="8"maxlength="8" style = "margin-left:5px" onfocus="this.select()" autofocus>' + "</td>" +
"<tr>" + '<td colspan="2">' + '<input type="button" id="btn" value="Расчёт времени" onclick="setInterval(startt, 900)" style="margin:3px">' + "</td>" +"<td id='aaoeu'>" + "</td>" + "</tr>" +
"<tr>" + "<td colspan='2'>Время возвращения если отменить сейчас:</td>" + "<td id = 'dsmBT'>" +
'<tr><th colspan="2">Прочее</th></tr>';

$(srcHTML).insertAfter($("#quickedit-rename").closest("tr"));

//////////////////////////////////////////////////////////////////////////////////////



///Стили
document.getElementById('aaoeu').style.fontSize = '10pt';
document.getElementById('aaoeu').style.paddingLeft = '3px';
document.getElementById('aaoeu').style.paddingRight = '3px';
document.getElementById('aaoeu').style.opacity = '0.65';
document.getElementById('aaoeu').style.backgroundColor = evenOrOdd(parityCheck);
document.getElementById('aaoeu').style.fontWeight = '800';
document.getElementById('aaoeu').style.textAlign="right";
document.getElementById('depdate').style.backgroundColor="#f4e4bc";
document.getElementById('depdate').style.borderColor="#f4e4bc";
document.getElementById('depdate').style.borderStyle="none";
if(evenOrOdd(parityCheck) == "red"){
$('#aaoeu').html('<span >' + 'вернётся в нечётную сек' + "</span>");
}else $('#aaoeu').html('<span >' + 'вернётся в чётную сек' + "</span>");
}
else {
alert("Этот скрипт работает только странице приказа.");
}
void(0);
