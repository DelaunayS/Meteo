(this["webpackJsonpprojet-meteo"]=this["webpackJsonpprojet-meteo"]||[]).push([[0],{13:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),a=n(7),s=n.n(a),i=(n(13),n(5)),o={query:"",setQuery:function(){},result:{},setResult:function(){}},u=r.a.createContext(o),l=n(3),d=n.n(l),j=n(4),h=n(0),b="c11348f84ad64b2bfd795cbda62298d1",p="https://api.openweathermap.org/data/2.5/",m="https://api.openweathermap.org/geo/1.0/direct";var x=function(){var e=Object(c.useContext)(u).query,t=Object(c.useContext)(u).setQuery,n=Object(c.useContext)(u).setResult,r=Object(c.useState)(""),a=Object(i.a)(r,2),s=a[0],o=a[1],l=function(e){var c=e.target.innerHTML.split(" ");fetch("".concat(p,"forecast?q=").concat(c[0],",").concat(c[1],"&units=metric&appid=").concat(b,"&lang=fr")).then((function(e){return e.json()})).then(function(){var e=Object(j.a)(d.a.mark((function e(c){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=n,e.next=3,c;case 3:e.t1=e.sent,(0,e.t0)(e.t1),t(""),o("");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch(console.error)};return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"search-box",children:Object(h.jsx)("input",{id:"query",type:"text",className:"search-bar",placeholder:" Recherche...",onChange:function(e){return t(e.target.value)},value:e,onKeyUp:function(){e.length>2&&fetch("".concat(m,"?q=").concat(e,"&appid=").concat(b,"&limit=5")).then((function(e){return e.json()})).then(function(){var e=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch(console.error)}})}),Object(h.jsx)("div",{className:"p-2",children:s.length>0?Object(h.jsx)("div",{className:"cityList",children:s.map((function(e,t){return Object(h.jsx)("div",{className:"mx-1",children:Object(h.jsx)("div",{className:"btn btn-info",onClick:l,children:e.name+" "+e.country})},t)}))}):Object(h.jsx)("button",{className:"invisible btn",children:" Espace blanc "})})]})},O=function(e){var t=["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"][e.getDay()],n=e.getDate(),c=["Janvier","F\xe9vrier","Mars","Avril","Mai","Juin","Juillet","Ao\xfbt","Septembre","Octobre","Novembre","D\xe9cembre"][e.getMonth()],r=e.getFullYear();return"".concat(t," ").concat(n," ").concat(c," ").concat(r)},f=function(e){switch(e){case"Rain":return"Pluie";case"Thunderstorm":return"Orage";case"Drizzle":return"Bruine";case"Snow":return"Neige";case"Atmosphere":return"Climat";case"Clear":return"Soleil";case"Clouds":return"Nuages"}};var v=function(){var e=Object(c.useContext)(u).result;return Object(h.jsxs)("div",{className:"textReponse",children:[Object(h.jsxs)("div",{className:"location",children:[e.city.name," ",e.city.country]}),Object(h.jsx)("div",{className:"date",children:O(new Date)}),Object(h.jsxs)("div",{className:"temp\xe9rature",children:[Math.round(e.list[0].main.temp),"\xb0c"]}),Object(h.jsxs)("div",{className:"weather",children:[f(e.list[0].weather[0].main)," : ",e.list[0].weather[0].description]})]})};var g=function(){var e=Object(c.useContext)(u).setQuery,t=Object(c.useContext)(u).setResult,n="c11348f84ad64b2bfd795cbda62298d1",r="https://api.openweathermap.org/data/2.5/",a="2c7ba9a0-fcc9-11eb-80e0-2d180bc7db04",s="https://geolocation-db.com/json/";return Object(h.jsx)("div",{children:Object(h.jsx)("button",{className:"btn btn-info btn-lg ",onClick:function(){navigator.geolocation?navigator.geolocation.getCurrentPosition((function(c){var i=c.coords.latitude,o=c.coords.longitude;console.log(i),console.log(o),fetch("".concat(s).concat(a)).then((function(e){return e.json()})).then((function(c){fetch("".concat(r,"forecast?lat=").concat(i,"&lon=").concat(o,"&units=metric&appid=").concat(n,"&lang=fr")).then((function(e){return e.json()})).then(function(){var n=Object(j.a)(d.a.mark((function n(c){return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=t,n.next=3,c;case 3:n.t1=n.sent,(0,n.t0)(n.t1),e("");case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()).catch(console.error)})).catch(console.error)})):console.log("Geolocation n'est pas support\xe9")},children:"M\xe9t\xe9o de ma position"})})};var N=function(){return Object(h.jsx)("div",{className:"textErreur",children:Object(h.jsx)("div",{children:"La commune n'existe pas ou elle est mal orthographi\xe9e ..."})})},w=function(e){var t=new Date(e),n=["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"][t.getDay()],c=t.getHours();return Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:n}),Object(h.jsxs)("p",{children:[c,"h"]})]})},y=n(8);var C=function(){var e=Object(c.useContext)(u).result;return Object(h.jsx)("div",{className:"fiveDayMeteo",children:e.list.map((function(e,t){return Object(h.jsxs)("ul",{className:"squareMeteo border border-dark p-2",children:[Object(h.jsx)("li",{children:w(e.dt_txt)}),Object(h.jsx)("li",{children:Object(h.jsx)("img",{src:"http://openweathermap.org/img/w/".concat(e.weather[0].icon,".png"),alt:"icone meteo"})}),Object(h.jsxs)("li",{children:[Math.round(e.main.temp),"\xb0C"]}),Object(h.jsx)(y.a,{children:Object(h.jsx)("div",{"data-tip":"{data.weather[0].description}","data-for":"",className:"descriptionMeteo"})})]},t)}))})};n(19);var M=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)({}),s=Object(i.a)(a,2),o=s[0],l={query:n,setQuery:r,result:o,setResult:s[1]};return Object(h.jsx)("div",{className:"undefined"!=typeof o.list?o.list[0].weather[0].main:"intro",children:Object(h.jsx)(u.Provider,{value:l,children:Object(h.jsxs)("main",{children:[Object(h.jsx)("div",{className:"container",children:Object(h.jsx)(x,{})}),Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-3",children:Object(h.jsx)(g,{})}),Object(h.jsx)("div",{className:"col-9",children:"200"===o.cod?Object(h.jsx)(v,{}):null})]}),Object(h.jsx)("div",{className:"row",children:"200"===o.cod?Object(h.jsx)(C,{}):null})]}),Object(h.jsx)("div",{className:"container",children:"404"===o.cod?Object(h.jsx)(N,{}):null})]})})})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(M,{})}),document.getElementById("root")),D()}},[[20,1,2]]]);
//# sourceMappingURL=main.a77c5742.chunk.js.map