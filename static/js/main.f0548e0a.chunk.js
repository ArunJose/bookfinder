(this.webpackJsonpbookfinder=this.webpackJsonpbookfinder||[]).push([[0],{20:function(e,t,n){e.exports=n(47)},25:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(16),s=n.n(r),c=(n(25),n(17)),l=n.n(c),i=n(19),u=n(2),m=n(3),h=n(5),b=n(4),f=n(6),k=n(18),p=n.n(k),d=(n(44),function(e){var t=e.book.authors?e.book.authors:null;return a.a.createElement("div",{className:"Bookcard"},e.book.imageLinks&&a.a.createElement("img",{src:e.book.imageLinks.smallThumbnail,alt:"Book Cover"}),a.a.createElement("h4",null,e.book.title),a.a.createElement("i",null,t&&"By ".concat(t.join(", "))),a.a.createElement("br",null),e.book.publisher&&"Published by ".concat(e.book.publisher),a.a.createElement("br",null),a.a.createElement("a",{href:e.book.infoLink,target:"_blank",rel:"noopener noreferrer"},a.a.createElement("button",null,"More")),a.a.createElement("br",null))}),v=(n(45),function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"Bookcards"},this.props.books.map((function(e){return a.a.createElement(d,{book:e,key:e.id})})))}}]),t}(a.a.Component)),E=(n(46),function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(h.a)(this,Object(b.a)(t).call(this,e))).fetchBooks=function(){return l.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:"https://www.googleapis.com/books/v1/volumes",p.a.get("".concat("https://www.googleapis.com/books/v1/volumes","?q=").concat(n.state.searchTerm,"&key=").concat("AIzaSyCMK80BWGq9YD8s3dBEZ-FCOpACYFZ_dSM","&startIndex=0&maxResults=40")).then((function(e){if(e.data.totalItems>0){var t=Object(i.a)(e.data.items);console.log(t);var o=t.map((function(e){return{id:e.id,publisher:e.volumeInfo.publisher,authors:e.volumeInfo.authors,infoLink:e.volumeInfo.infoLink,title:e.volumeInfo.title,imageLinks:e.volumeInfo.imageLinks}}));n.setState((function(){return{books:o,error:"",noOfBooks:e.data.totalItems}}))}else n.setState((function(){return{books:[],error:"No books found",noOfBooks:0}}))})).catch((function(e){e.message?n.setState((function(){return{books:[],noOfBooks:0,error:e.message}})):n.setState((function(){return{books:[],noOfBooks:0}}))}));case 2:case"end":return e.stop()}}))},n.handleInput=function(e){n.setState({searchTerm:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),0===n.state.searchTerm.length?n.setState((function(){return{books:[],error:"Please enter text"}})):n.fetchBooks()},n.state={searchTerm:"",books:[],noOfBooks:0,error:""},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"BOOK FINDER"),a.a.createElement("br",null),a.a.createElement("form",{onSubmit:this.handleSubmit},a.a.createElement("input",{type:"text",name:"search",value:this.state.searchTerm,onChange:this.handleInput}),a.a.createElement("br",null),a.a.createElement("button",null,"Search")),a.a.createElement("br",null),0===this.state.noOfBooks||this.state.error?a.a.createElement("p",null,this.state.error):a.a.createElement(v,{books:this.state.books}))}}]),t}(a.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.f0548e0a.chunk.js.map