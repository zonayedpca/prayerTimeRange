(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(50)},24:function(e,t,a){},48:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(16),c=a.n(i),s=(a(24),a(8)),o=a.n(s),l=a(17),u=a(2),m=a(3),d=a(5),f=a(4),g=a(6),h=a(9),p=a.n(h),y=function(){return r.a.createElement("div",{className:"navbar"},r.a.createElement("div",{className:"brand"},"PrayerRange"),r.a.createElement("div",{className:"search"},r.a.createElement("input",{className:"input search",placeholder:"Enter Your Location"})))},E=function(e){return 1===e.toString().length?"0".concat(e):e},v=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={timeDiff:a.props.timeDiff},a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.timeDiff;setInterval(function(){e.setState({timeDiff:new Date(t-6e4)})},6e4)}},{key:"render",value:function(){var e=this.state.timeDiff;return r.a.createElement("h2",null,E(e.getHours()),":",E(e.getMinutes()))}}]),t}(n.Component),w=function(e){var t=e.currentPrayer,a=t.prayer,n=t.timeDiff;return r.a.createElement("div",{className:"current-area"},r.a.createElement(y,null),r.a.createElement("div",{className:"current-details"},r.a.createElement("div",{className:"current-salaat"},r.a.createElement("p",null,"It's time for"),r.a.createElement("h2",null,a)),r.a.createElement("div",{className:"time-remaining"},r.a.createElement("p",null,"Time Remaining"),r.a.createElement(v,{timeDiff:n}))))},D=function(e){var t=e.currentPrayer,a=(t.prayer,t.start),n=t.end;return r.a.createElement("div",{className:"current-info"},r.a.createElement("div",{className:"current location"},r.a.createElement("p",null,"Location"),r.a.createElement("h4",null,"Kharar, Mohali")),r.a.createElement("div",{className:"current started"},r.a.createElement("p",null,"Started"),r.a.createElement("h4",null,a)),r.a.createElement("div",{className:"current will-end"},r.a.createElement("p",null,"Will End"),r.a.createElement("h4",null,n)))},M=function(e){var t=e.split(":"),a=t[0],n=t[0]%12;return 0===n?"12:".concat(E(t[1]),a<12?" AM":" PM"):a<12?"".concat(E(n),":").concat(E(t[1])," AM"):"".concat(E(n),":").concat(E(t[1])," PM")},b=function(e){var t=e.prayer,a=e.time;return r.a.createElement("div",{className:"prayer general"},r.a.createElement("h4",null,t),r.a.createElement("p",null,"Will Start At ",r.a.createElement("strong",null,M(a))))},H=function(e){var t=e.prayers,a=t.today,n=t.tomorrow;return r.a.createElement("div",{className:"next-area"},r.a.createElement("div",{className:"section-title"},r.a.createElement("h3",null,"Next Prayers")),r.a.createElement("div",{className:"prayers today"},r.a.createElement("h4",null,"Today"),Object.keys(a).map(function(e){return"Sunrise"===e||"Sunset"===e||"Imsak"===e||"Midnight"===e||r.a.createElement(b,{key:e,prayer:e,time:a[e]})})),r.a.createElement("div",{className:"prayers tomorrow"},r.a.createElement("h4",null,"Tomorrow"),Object.keys(n).map(function(e){return"Sunrise"===e||"Sunset"===e||"Imsak"===e||"Midnight"===e||r.a.createElement(b,{key:e,prayer:e,time:a[e]})}),r.a.createElement("div",{className:"prayer general done"},r.a.createElement("h4",null,"Done Demo"),r.a.createElement("p",null,"Finished"))))},N=function(){return r.a.createElement("div",{className:"footer-area"},r.a.createElement("div",{className:"footer hadis"},r.a.createElement("blockquote",null,"Consider if one of you had a river by his door in which he bathed five times a day. Would any filth remain on him?\u201d They said, \u201cNo.\u201d Then the Prophet replied: \u201cLikewise, Allah wipes away sins with the five daily prayers.")),r.a.createElement("div",{className:"footer credit"},r.a.createElement("p",null,"With ",r.a.createElement("strong",null,"\u2764")," By",r.a.createElement("a",{href:"https://zonayed.me"},"Zonayed Ahmed"))))},k=function(e){var t=new Date,a=e.split(":");return t.setHours(a[0]),t.setMinutes(a[1]),t.setSeconds(0),t.getTime()},j=function(e,t){var a,n,r,i,c,s,o,l={},u={},m=Date.now();Object.keys(e).forEach(function(a){l[a]={prayer:a,timeActual:e[a],time:k(e[a])},u[a]={prayer:a,timeActual:t[a],time:k(e[a])}});var d=new Date;for(var f in l){if("Fajr"===f&&m>=l[f].time&&m<l.Sunrise.time){n=l[f].time,r=l.Sunrise.time,i=new Date(n),s=24-new Date(m).getHours(),i=M("".concat(i.getHours(),":").concat(i.getMinutes())),s+=(c=new Date(r)).getHours(),o=c.getMinutes()-new Date(m).getMinutes(),c=M("".concat(c.getHours(),":").concat(c.getMinutes())),d.setHours(s),d.setMinutes(o),a={prayer:f,timeDiff:d,start:i,end:c};break}if("Dhuhr"===f&&m>=l[f].time&&m<l.Asr.time){n=l[f].time,r=l.Asr.time,i=new Date(n),s=24-new Date(m).getHours(),i=M("".concat(i.getHours(),":").concat(i.getMinutes())),s+=(c=new Date(r)).getHours(),o=c.getMinutes()-new Date(m).getMinutes(),c=M("".concat(c.getHours(),":").concat(c.getMinutes())),d.setHours(s),d.setMinutes(o),a={prayer:f,timeDiff:d,start:i,end:c};break}if("Asr"===f&&m>=l[f].time&&m<l.Sunset.time){n=l[f].time,r=l.Sunset.time,i=new Date(n),s=24-new Date(m).getHours(),i=M("".concat(i.getHours(),":").concat(i.getMinutes())),s+=(c=new Date(r)).getHours(),o=c.getMinutes()-new Date(m).getMinutes(),c=M("".concat(c.getHours(),":").concat(c.getMinutes())),d.setHours(s),d.setMinutes(o),a={prayer:f,timeDiff:d,start:i,end:c};break}if("Maghrib"===f&&m>=l[f].time&&m<l.Isha.time){n=l[f].time,r=l.Isha.time,i=new Date(n),s=24-new Date(m).getHours(),i=M("".concat(i.getHours(),":").concat(i.getMinutes())),s+=(c=new Date(r)).getHours(),o=c.getMinutes()-new Date(m).getMinutes(),c=M("".concat(c.getHours(),":").concat(c.getMinutes())),d.setHours(s),d.setMinutes(o),a={prayer:f,timeDiff:d,start:i,end:c};break}if("Isha"===f&&m>=l[f].time&&m<u.Midnight.time+864e5){n=l[f].time,r=u.Midnight.time+864e5,i=new Date(n),s=24-new Date(m).getHours(),i=M("".concat(i.getHours(),":").concat(i.getMinutes())),s+=(c=new Date(r)).getHours(),o=c.getMinutes()-new Date(m).getMinutes(),c=M("".concat(c.getHours(),":").concat(c.getMinutes())),d.setHours(s),d.setMinutes(o),a={prayer:f,timeDiff:d,start:i,end:c};break}a={prayer:"00:00",start:"00:00",end:"00:00"}}return a},O=(a(48),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={prayers:null,currentPrayer:null},a.getLocation=function(){navigator.geolocation.getCurrentPosition(function(){var e=Object(l.a)(o.a.mark(function e(t){var n,r,i,c,s,l,u,m,d,f,g;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.coords,r=n.latitude,i=n.longitude,c=t.timestamp,s=Math.floor(c/1e3),e.next=4,p.a.get("http://api.aladhan.com/v1/timings/".concat(s,"?latitude=").concat(r,"&longitude=").concat(i));case 4:return l=e.sent,u=l.data.data,e.next=8,p.a.get("http://api.aladhan.com/v1/timings/".concat(s+86400,"?latitude=").concat(r,"&longitude=").concat(i));case 8:m=e.sent,d=m.data.data,u=u.timings,d=d.timings,g=j((f={today:u,tomorrow:d}).today,f.tomorrow),a.setState({prayers:f,currentPrayer:g});case 15:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}())},a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getLocation()}},{key:"render",value:function(){var e=this.state,t=e.prayers,a=e.currentPrayer;return t?r.a.createElement("div",{className:"App"},r.a.createElement(w,{currentPrayer:a}),r.a.createElement(D,{currentPrayer:a}),r.a.createElement(H,{prayers:t}),r.a.createElement(N,null)):r.a.createElement("p",null,"Loading")}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,2,1]]]);
//# sourceMappingURL=main.9c098c35.chunk.js.map