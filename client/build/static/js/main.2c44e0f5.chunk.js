(this["webpackJsonpreact-google-books-search"]=this["webpackJsonpreact-google-books-search"]||[]).push([[0],{21:function(e,t,a){e.exports=a(33)},26:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(18),o=a.n(c),r=(a(26),a(9)),s=a(6),i=a(8),m=a(15),u=l.a.createContext();function d(e,t){switch(t.type){case"addToCart":var a=Object(m.a)({},e),n=a.cart.findIndex((function(e){return e.id==t.id}));return n>-1?(console.log("[dispatcher:".concat(t.type,"] cart.num(").concat(a.cart[n].num,") += (").concat(t.num,")")),a.cart[n].num+=t.num):a.cart.push(Object(m.a)({},t)),console.log("[GlobalStore:addToCart] id(".concat(t.id,") cartItemIdx(").concat(n,")"),a),a;default:console.log("crap sorry, dunno what to do")}}function p(e){var t=Object(n.useReducer)(d,{cart:[]}),a=Object(i.a)(t,2),c=a[0],o=a[1];return l.a.createElement(u.Provider,Object.assign({value:[c,o]},e))}var f=function(){var e=Object(s.e)();return l.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement(r.b,{to:"/",className:"navbar-brand"},l.a.createElement("img",{src:"https://www.dalmio-dent.md/wp-content/uploads/2016/11/Untitled-6.png",alt:"",style:{width:"64px",height:"64px"}})),l.a.createElement("div",{id:"navbarSupportedContent"}," ",l.a.createElement("ul",{class:"navbar-nav mr-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(r.b,{to:"/search",className:"/search"===e.pathname?"nav-link active":"nav-link"},"Search")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(r.b,{to:"/saved",className:"/saved"===e.pathname?"nav-link active":"nav-link"},"Saved")))))},v=a(5),b=a.n(v),E=a(10);var h=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),c=a[0],o=a[1],r=Object(n.useRef)(),s={Box:{border:"1px darkgray solid"},BgColor:{backgroundColor:"white"}};function m(){return(m=Object(E.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/books/".concat(t)).then((function(e){return e.json()}));case 2:a=e.sent,console.log(a),o(a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(){return(u=Object(E.a)(b.a.mark((function e(t,a){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mybook:{booktitle:a.booktitle,bookimageLinks:a.bookimageLinks,bookinfoLink:a.bookinfoLink,bookdescription:a.bookdescription,bookauthors:a.bookauthors}})},e.next=4,fetch("/api/books",n).then((function(e){return e.json()}));case 4:e.sent;case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){window.location.assign(e.target.dataset.majid)}return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-12 pl-0 pr-0",style:s.Box},l.a.createElement("div",{class:"jumbotron jumbotron-fluid pb-1 pt-1 mb-0",style:s.BgColor},l.a.createElement("h1",{class:"display-6 d-flex justify-content-center mt-3"},"(React) Google Books Search"),l.a.createElement("p",{class:"display-6 lead d-flex justify-content-center"},"Search for and Save Books of Interest")))),l.a.createElement("div",{class:"row"}," ",l.a.createElement("div",{class:"col-12"}," \xa0 ")," "),l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-12 pl-0 pr-0",style:s.Box},l.a.createElement("div",{class:"jumbotron pl-0 pr-0 pb-0 pt-0",style:s.BgColor},l.a.createElement("div",{class:"row "},l.a.createElement("div",{class:"col-12 pl-4 ml-2 mt-3 "},l.a.createElement("h4",null,"Book Search"))),l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-12 pl-5 pr-5"},l.a.createElement("div",{class:"form-group mb-0 "},l.a.createElement("label",{for:"searchtxt"}),l.a.createElement("input",{id:"searchtxt",type:"text",ref:r,class:"form-control"})),l.a.createElement("div",{class:"col-12 d-flex justify-content-end pr-0"},l.a.createElement("button",{onClick:function(e){e.preventDefault(),function(e){m.apply(this,arguments)}(r.current.value)},class:"btn btn-primary submit"},"Search"))))))),l.a.createElement("div",{class:"row"}," ",l.a.createElement("div",{class:"col-12"}," \xa0 ")," "),l.a.createElement("div",{class:"row",style:{display:c.length>0?"block":"none"}},l.a.createElement("div",{class:"col-12",style:s.Box},l.a.createElement("div",{class:"jumbotron pl-0 pr-0 pb-0 pt-0",style:s.BgColor},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-12 mb-2 mt-2"},l.a.createElement("h5",null,"Results:"))),c.map((function(e){return l.a.createElement("div",{class:"col-12 mb-1",style:s.Box},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-6 d-flex justify-content-start"},l.a.createElement("div",{class:"row mb-0"},l.a.createElement("h3",{class:"col-12 mt-4 pl-3"},e.volumeInfo.title),l.a.createElement("h6",{class:"col-12 mb-2 pl-4"},l.a.createElement("b",null,"Written by: "),e.volumeInfo.authors))),l.a.createElement("div",{class:"col-6 mt-2 d-flex justify-content-end align-self-baseline"},l.a.createElement("button",{"data-majid":e.volumeInfo.infoLink,onClick:d},"View"),"\xa0",l.a.createElement("button",{onClick:function(t){return function(e,t){return u.apply(this,arguments)}(t,{booktitle:e.volumeInfo.title,bookimageLinks:e.volumeInfo.imageLinks,bookinfoLink:e.volumeInfo.infoLink,bookdescription:e.volumeInfo.description,bookauthors:e.volumeInfo.authors})}},"Save"))),l.a.createElement("div",{class:"row pb-4"},l.a.createElement("div",{class:"col-2 d-flex justify-content-start align-self-baseline"},l.a.createElement("img",{src:e.volumeInfo.imageLinks?e.volumeInfo.imageLinks.smallThumbnail:"https://placehold.it/100x100",alt:e.volumeInfo.title,class:"img-thumbnail"})),l.a.createElement("div",{class:"col-9 ml-4 pl-4 d-flex justify-content-start align-self-baseline"},l.a.createElement("div",null,e.volumeInfo.description))))}))))),l.a.createElement("div",{class:"row"}," ",l.a.createElement("div",{class:"col-12"}," \xa0 ")," ")))};var k=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),c=a[0],o=a[1],r={Box:{border:"1px darkgray solid"},BgColor:{backgroundColor:"white"}};function s(){return m.apply(this,arguments)}function m(){return(m=Object(E.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/books").then((function(e){return e.json()}));case 2:t=e.sent,o(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e){window.location.assign(e.target.dataset.majid)}function d(){return(d=Object(E.a)(b.a.mark((function e(t,a){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),console.log(a),n={method:"DELETE",headers:{"Content-Type":"application/json"}},e.next=5,fetch("/api/books/"+a,n).then((function(e){return e.json()}));case 5:e.sent&&s();case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){s()}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"row"},c.map((function(e,t){return l.a.createElement("div",{class:"col-12 mb-1",style:r.Box},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-6 d-flex justify-content-start"},l.a.createElement("div",{class:"row mb-0"},l.a.createElement("h3",{class:"col-12 mt-4 pl-3"},e.title),l.a.createElement("h6",{class:"col-12 mb-2 pl-4"},l.a.createElement("b",null,"Written by: "),e.authors))),l.a.createElement("div",{class:"col-6 mt-2 d-flex justify-content-end align-self-baseline"},l.a.createElement("button",{"data-majid":e.link,onClick:u},"View"),"\xa0",l.a.createElement("button",{"data-majid":e._id,onClick:function(t){return function(e,t){return d.apply(this,arguments)}(t,e._id)}},"Delete"))),l.a.createElement("div",{class:"row pb-4"},l.a.createElement("div",{class:"col-2 d-flex justify-content-start align-self-baseline"},l.a.createElement("img",{src:e.image?e.image:"https://placehold.it/100x100",alt:e.title,class:"img-thumbnail"})),l.a.createElement("div",{class:"col-9 ml-4 pl-4 d-flex justify-content-start align-self-baseline"},l.a.createElement("div",null,e.description))))})))))};var g=function(){return l.a.createElement(r.a,null,l.a.createElement(p,null," ",l.a.createElement("div",{className:"App"},l.a.createElement(f,null),l.a.createElement("div",{class:"container"},l.a.createElement(s.a,{exact:!0,path:["/","/search"],component:h}),l.a.createElement(s.a,{path:"/saved",component:k})))))};o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.2c44e0f5.chunk.js.map