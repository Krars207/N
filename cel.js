/*
javascript:
script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://github.com/Krars207/N/blob/master/cel.js';
document.getElementsByTagName("head")[0].appendChild(script);
void( 0 );
*/javascript:script=document.createElement("script");if(script.type="text/javascript",-1!=document.URL.search(/info_command/)){function a(a,b){var c,d=document.getElementsByTagName("td");for(c=d.length-1;d[c].textContent!==a;)c--;return document.getElementsByTagName("td")[c+b]}function b(b){return 0==b%2?"green":"red"}var outNormDate=new Date;outNormDate.setMinutes(outNormDate.getMinutes()+2),outNormDate.setMonth(outNormDate.getMonth()+1);var normDt=outNormDate.getDate()+"."+outNormDate.getMonth()+"."+outNormDate.getFullYear(),normTime=outNormDate.getHours()+":"+outNormDate.getMinutes()+":"+outNormDate.getSeconds(),strDuration=a("\u0414\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C:",1).textContent,strdeparture=a("\u041F\u0440\u0438\u0431\u044B\u0442\u0438\u0435:",1).textContent,mountServ=document.getElementById("serverDate").textContent,durationArr=strDuration.split(":"),departureArr=strdeparture.split(/[\s|,:!#]+/),mountS=mountServ.split("/")[1],startArrival=new Date(+departureArr[2],+mountS-1,+departureArr[1],+departureArr[3]-+durationArr[0],+departureArr[4]-+durationArr[1],+departureArr[5]-+durationArr[2],0),maxTimeForCancel=new Date(startArrival.getFullYear(),startArrival.getMonth(),startArrival.getDate(),startArrival.getHours(),startArrival.getMinutes()+19,startArrival.getSeconds()+58,startArrival.getMilliseconds()),normTimeMTFC=maxTimeForCancel.getHours()+":"+maxTimeForCancel.getMinutes()+":"+maxTimeForCancel.getSeconds();ifCancelNow=function(){function a(){b=Math.round((c.getTime()-startArrival.getTime())/1e3),c.setSeconds(+c.getSeconds()+ +b),$("#dsmBT").html("<span >"+c.getHours()+":"+c.getMinutes()+":"+ +c.getSeconds()+"</span>")}var b=new Date,c=new Date;return a(),b},setInterval(ifCancelNow,1e3),ImputeToDate=function(){var a=new Date,b=document.getElementById("deptime"),c=b.value.match(/\d+/g),d=document.getElementById("depdate"),e=d.value.match(/\d+/g);return e.length=3,a.setFullYear(e[2],e[1]-1,e[0]),c.length=3,a.setHours(...c),a.setMilliseconds(0),a};var parityCheck=+durationArr[2]+ +departureArr[5];startt=function(){document.getElementById("aaoeu").style.textAlign="left";var a=(ImputeToDate().getTime()-startArrival.getTime())/2+startArrival.getTime();if(a<=Date.now()){isRezeble=!0}$("#aaoeu").html("<span >\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u0447\u0435\u0440\u0435\u0437 "+Math.round((a-Date.now())/1e3)+" \u0441\u0435\u043A</span>")};var srcHTML="<tr id=\"dsmPlannedTime\"><th colspan=\"3\">\u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430</th></tr></td></tr><tr><td colspan='2'>\u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0435\u043D\u0438\u044F:</td><td id=\"bact\"><input type=\"text\" id=\"depdate\" value=\""+normDt+"\" onchange=\"ImputeToDate()\" size=\"8\"maxlength=\"10\" style = \"margin-left:5px\";><input type=\"text\" id=\"deptime\" value=\""+normTimeMTFC+"\" onchange=\"ImputeToDate()\" size=\"8\"maxlength=\"8\" style = \"margin-left:5px\" onfocus=\"this.select()\" autofocus></td><tr><td colspan=\"2\"><input type=\"button\" id=\"btn\" value=\"\u0420\u0430\u0441\u0447\u0451\u0442 \u0432\u0440\u0435\u043C\u0435\u043D\u0438\" onclick=\"setInterval(startt,900)\" style=\"margin:3px\"></td><td id='aaoeu'></td></tr><tr><td colspan='2'>\u0412\u0440\u0435\u043C\u044F \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0435\u043D\u0438\u044F \u0435\u0441\u043B\u0438 \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u0435\u0439\u0447\u0430\u0441:</td><td id = 'dsmBT'><tr><th colspan=\"2\">\u041F\u0440\u043E\u0447\u0435\u0435</th></tr>";$(srcHTML).insertAfter($("#quickedit-rename").closest("tr")),document.getElementById("aaoeu").style.fontSize="10pt",document.getElementById("aaoeu").style.paddingLeft="3px",document.getElementById("aaoeu").style.paddingRight="3px",document.getElementById("aaoeu").style.opacity="0.65",document.getElementById("aaoeu").style.backgroundColor=b(parityCheck),document.getElementById("aaoeu").style.fontWeight="800",document.getElementById("aaoeu").style.textAlign="right",document.getElementById("depdate").style.backgroundColor="#f4e4bc",document.getElementById("depdate").style.borderColor="#f4e4bc",document.getElementById("depdate").style.borderStyle="none","red"==b(parityCheck)?$("#aaoeu").html("<span >\u0432\u0435\u0440\u043D\u0451\u0442\u0441\u044F \u0432 \u043D\u0435\u0447\u0451\u0442\u043D\u0443\u044E \u0441\u0435\u043A</span>"):$("#aaoeu").html("<span >\u0432\u0435\u0440\u043D\u0451\u0442\u0441\u044F \u0432 \u0447\u0451\u0442\u043D\u0443\u044E \u0441\u0435\u043A</span>")}else alert("\u042D\u0442\u043E\u0442 \u0441\u043A\u0440\u0438\u043F\u0442 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u043F\u0440\u0438\u043A\u0430\u0437\u0430.");
