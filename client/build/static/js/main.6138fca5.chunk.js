(window["webpackJsonpbrewery-search"]=window["webpackJsonpbrewery-search"]||[]).push([[0],{33:function(e,t,a){e.exports=a.p+"static/media/loading.fce48df0.gif"},38:function(e,t,a){e.exports=a(85)},84:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),c=a.n(l),o=a(19),s=a(8),i=function(e){var t=e.title,a=e.icon;return r.a.createElement("nav",{className:"navbar navbar-dark bg-dark shadow sticky-top mx-auto"},r.a.createElement("span",{href:"#!",className:"navbar-brand"},r.a.createElement("i",{className:a,style:{color:"gold"}})," ",t))};i.defaultProps={title:"Brewery Search",icon:"fas fa-beer"};var m=i,u=a(2),d=a(13),E={width:"90%",height:"90%"},p=Object(d.GoogleApiWrapper)({apiKey:"AIzaSyDszS9vH_VpB6mumst6qwxOXfOAIqpcXpg"})((function(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)({}),s=Object(u.a)(o,2),i=s[0],m=s[1],p=Object(n.useState)({}),g=Object(u.a)(p,2),f=g[0],b=g[1];return r.a.createElement(d.Map,{google:e.google,zoom:14,stlye:E,initialCenter:{lat:e.latitude,lng:e.longitude}},r.a.createElement(d.Marker,{onClick:function(e,t){b(e),m(t),c(!0)},name:e.name}),r.a.createElement(d.InfoWindow,{marker:i,visible:l,onClose:function(){l&&(m(null),c(!1))}},r.a.createElement("div",null,r.a.createElement("h4",null,f.name))))})),g=function(e){var t=e.brewery,a=t.name,l=t.brewery_type,c=t.street,o=t.city,s=t.state,i=t.phone,m=t.website_url,u=t.tag_list,d=t.longitude,E=t.latitude,g=t.id,f=l.slice(0,1).toUpperCase()+l.slice(1),b=i.replace(/(\d{3})(\d{3})(\d{4})/,"($1) $2-$3");return r.a.createElement("div",null,r.a.createElement("div",{className:"card shadow rounded cardzoom mt-3 mb-3"},r.a.createElement("h1",{className:"card-header",style:{fontFamily:"Merriweather",fontWeight:"normal"}},a),r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"col-sm-12 col-md-8"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",null,c),r.a.createElement("h5",{className:"card-title"},o,", ",s),r.a.createElement("h6",{className:"card-title"},r.a.createElement("strong",null,"Type: "),f),r.a.createElement("h6",{className:"card-title"},r.a.createElement("a",{href:"tel://".concat(i)},b)),r.a.createElement("h6",{className:"card-title"},u.length>0&&r.a.createElement(n.Fragment,null,r.a.createElement("strong",null," Ammenities: "),u)),r.a.createElement("h6",null,r.a.createElement("a",{href:m,target:"_black"},m)),r.a.createElement("h6",null),r.a.createElement("h6",null,r.a.createElement("button",{type:"button",className:"btn btn-secondary","data-toggle":"modal","data-target":"#googleMapsModal".concat(g)},"View Maps")))),r.a.createElement("div",{className:"d-none d-sm-block col-md-4"},r.a.createElement("h6",{className:"m-3"},r.a.createElement("span",{className:"fa fa-star fa-2x checked"}),r.a.createElement("span",{className:"fa fa-star fa-2x checked"}),r.a.createElement("span",{className:"fa fa-star fa-2x checked"}),r.a.createElement("span",{className:"fa fa-star fa-2x checked"}),r.a.createElement("span",{className:"fa fa-star fa-2x checked"}),r.a.createElement("div",null,"23 Reviews")),r.a.createElement("h6",{className:"m-2 mt-4"},'"The best place to have a great time. Amazing selection of beer..."',r.a.createElement("a",{href:"#!"},"Read More"))))),r.a.createElement("div",{className:"modal fade",id:"googleMapsModal".concat(g),role:"dialog","aria-labelledby":"googleMapsModalTitle","aria-hidden":"true",style:{padding:"visible !important"}},r.a.createElement("div",{className:"modal-dialog modal-dialog-centered",role:"dialog"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title",id:"googleMapsLongTitle"},a),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-body",style:{padding:"0",height:"450px"}},r.a.createElement(p,{name:a,longitude:d,latitude:E}))))))},f=a(33),b=a.n(f),y=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("img",{src:b.a,style:{width:"350px",margin:"auto",display:"block"},alt:"Loading..."}))},h=Object(n.createContext)(),v=function(){var e=Object(n.useContext)(h),t=e.breweries;return e.loading&&null!==t?r.a.createElement(y,null):r.a.createElement("div",null,t.map((function(e,t){return r.a.createElement(g,{key:t,brewery:e})})))},w=Object(n.createContext)(),N=function(){var e=Object(n.useContext)(w).alert;return null!==e&&r.a.createElement("div",{className:"alert alert-".concat(e.type," m-2")},r.a.createElement("i",{className:"fa fa-info-circle"})," ",e.msg)},O=(a(18),a(34)),j=function e(){var t=this;Object(O.a)(this,e),this.getUrl=function(){return t.url},this.setText=function(e){return t.url+="&by_name=".concat(e),t},this.setCity=function(e){return t.url+="&by_city=".concat(e),t},this.setState=function(e){return t.url+="&by_state=".concat(e),t},this.setType=function(e){return t.url+="&by_type=".concat(e),t},this.url="https://api.openbrewerydb.org/breweries?"},x={zIndex:"100"},S=function(){var e=Object(n.useContext)(h),t=Object(n.useContext)(w),a=Object(n.useState)(""),l=Object(u.a)(a,2),c=l[0],o=l[1],s=e.searchBreweries,i=e.searchAutoComplete,m=e.clearAutoCompleteSuggestions,d=e.getUserLocation,E=e.clearBreweries,p=e.breweries;e.loading,e.suggestions;Object(n.useEffect)((function(){"geolocation"in navigator?navigator.geolocation.getCurrentPosition((function(e){var t=e.coords.latitude,a=e.coords.longitude;d(t,a)}),(function(e){console.error(e)})):console.error("Blocked by client")}),[]);return r.a.createElement("div",{className:"mt-3 mb-2",style:x},r.a.createElement(N,null),r.a.createElement("form",{className:"form",onSubmit:function(e){if(e.preventDefault(),""===c)t.setAlert("Please enter something","warning");else{var a=(new j).setText(c);s(a.getUrl()),o(""),m()}}},r.a.createElement("input",{type:"text",name:"text",value:c,className:"form-control mb-2",placeholder:"Search Breweries...",onChange:function(e){o(e.target.value),i(e.target.value)}}),r.a.createElement("div",{className:"row m-1 clearfix"},r.a.createElement("input",{type:"submit",value:"Search",className:"btn btn-success col-md-6 col-sm-12"}),p.length>0&&r.a.createElement("input",{type:"button",value:"Clear All",className:"btn btn-danger col-md-6 col-sm-12",onClick:function(){E()}}))))},C=function(){var e=Object(n.useContext)(h),t=Object(n.useState)(""),a=Object(u.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(""),s=Object(u.a)(o,2),i=s[0],m=s[1],d=Object(n.useState)(""),E=Object(u.a)(d,2),p=E[0],g=E[1];return r.a.createElement(n.Fragment,null,r.a.createElement("form",{className:"form"},r.a.createElement("div",{className:"card shadow-lg"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"city"},"City"),r.a.createElement("input",{type:"text",name:"city",id:"city",value:l,placeholder:"Filter by City",className:"form-control",onChange:function(e){c(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"state"},"State"),r.a.createElement("input",{type:"text",name:"state",id:"state",value:i,placeholder:"Filter by State",className:"form-control",onChange:function(e){m(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"type"},"Brewery Type"),r.a.createElement("select",{name:"type",id:"type",value:p,placeholder:"Filter by Type",className:"form-control",onChange:function(e){g(e.target.value)}},["","Micro","Regional","Brewpub","Large","Planning","Bar","Contract","Proprietor"].map((function(e){return r.a.createElement("option",{value:e,key:e},e)})))),r.a.createElement("div",{className:"mt-2"},r.a.createElement("input",{type:"button",value:"Apply Filters",className:"btn btn-dark col-md-12 col-sm-12",onClick:function(t){var a=new j;a.setCity(l),a.setState(i),a.setType(p),e.searchBreweries(a.getUrl())}}))))))},A={top:71,left:0,zIndex:100,position:"fixed"},k=function(){return r.a.createElement("div",{className:"col-md-3 col-lg-3 rounded",style:A},r.a.createElement("div",null,r.a.createElement(C,null)))},R=function(e){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"d-none d-md-block"},r.a.createElement(k,null)),r.a.createElement("main",{className:"col-xs-12 col-sm-12 col-md-9 col-lg-9 ml-auto px-4",role:"main"},r.a.createElement(S,null),r.a.createElement(v,null)))},T=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,r.a.createElement("strong",null,"Author: "),"Emmanuel Rosario"),r.a.createElement("h1",null,r.a.createElement("strong",null,"GitHub URL: "),"github.com/rosart-dev"),r.a.createElement("h1",null,r.a.createElement("strong",null,"Version: "),"1.0"),r.a.createElement("h1",null,r.a.createElement("strong",null,"App: "),"Brewery Search"))},_=a(9),B=a.n(_),P=a(15),L=a(20),M=a.n(L),I=a(35);function F(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function U(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?F(a,!0).forEach((function(t){Object(I.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):F(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var D=function(e,t){switch(t.type){case"SEARCH_BREWERIES":return U({},e,{breweries:t.payload,loading:!1});case"AUTO_COMPLETE":return U({},e,{suggestions:t.payload});case"CLEAR_SUGGESTIONS":return U({},e,{suggestions:[]});case"GET_BREWERY":return U({},e,{brewery:t.payload,loading:!1});case"CLEAR_BREWERIES":return U({},e,{breweries:[],loading:!1});case"SET_LOADING":return U({},e,{loading:!0});default:return e}},W=function(e){var t=Object(n.useReducer)(D,{breweries:[],suggestions:[],brewery:{},loading:!1}),a=Object(u.a)(t,2),l=a[0],c=a[1],o=Object(n.useContext)(w),s=function(){var e=Object(P.a)(B.a.mark((function e(t){var a;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(),e.next=3,M.a.get("/api/breweries/getBreweries/",{params:{url:t}});case 3:0===(a=e.sent).data.length&&o.setAlert("Sorry, we could not find breweries for what you're looking for. Please try another search term.","warning"),c({type:"SEARCH_BREWERIES",payload:a.data});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(P.a)(B.a.mark((function e(t){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(P.a)(B.a.mark((function e(t,a){var n,r;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(),e.next=3,M.a.get("/api/google/geocoding/".concat(t,"/").concat(a));case 3:n=e.sent,r=(new j).setCity(n.data.city).setState(n.data.state),s(r.getUrl());case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),d=function(){return c({type:"SET_LOADING"})};return r.a.createElement(h.Provider,{value:{breweries:l.breweries,brewery:l.brewery,loading:l.loading,suggestions:l.suggestions,searchBreweries:s,searchAutoComplete:i,clearAutoCompleteSuggestions:function(){},getUserLocation:m,clearBreweries:function(){c({type:"CLEAR_BREWERIES"})}}},e.children)},z=function(e,t){switch(t.type){case"SET_ALERT":return t.payload;case"REMOVE_ALERT":return null;default:return e}},G=function(e){var t=Object(n.useReducer)(z,null),a=Object(u.a)(t,2),l=a[0],c=a[1];return r.a.createElement(w.Provider,{value:{alert:l,setAlert:function(e,t){c({type:"SET_ALERT",payload:{msg:e,type:t}}),setTimeout((function(){c({type:"REMOVE_ALERT"})}),3500)}}},e.children)};a(78),a(79),a(80);var V=function(){return r.a.createElement(G,null,r.a.createElement(W,null,r.a.createElement(o.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(m,{title:"Brewery Search",icon:"fa fa-beer"}),r.a.createElement("div",{className:"container-fluid"},r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:R}),r.a.createElement(s.a,{exact:!0,path:"/about",component:T})))))))};a(84);c.a.render(r.a.createElement(V,null),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.6138fca5.chunk.js.map