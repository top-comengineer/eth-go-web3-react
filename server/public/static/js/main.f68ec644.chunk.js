(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{206:function(e,t,n){},219:function(e,t){},244:function(e,t){},246:function(e,t){},326:function(e,t){},328:function(e,t){},337:function(e,t){},339:function(e,t){},364:function(e,t){},369:function(e,t){},371:function(e,t){},378:function(e,t){},391:function(e,t){},470:function(e,t,n){},471:function(e,t,n){"use strict";n.r(t);var r,a=n(11),c=n(46),s=n.n(c),i=n(194),o=n.n(i),u=(n(206),n(19)),l=n.n(u),p=n(100),b=n(198),h=n(195),f=n.n(h),g=[{inputs:[{internalType:"string",name:"_greeting",type:"string"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[],name:"greet",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"string",name:"_greeting",type:"string"}],name:"setGreeting",outputs:[],stateMutability:"nonpayable",type:"function"}],j=(n(470),"0xa4cC4C8d8f6bAeEEE6284326292B5314bDe8FF55");var d=function(){var e=Object(c.useState)(""),t=Object(b.a)(e,2),n=t[0],s=t[1];r=new f.a(window.ethereum),window.ethereum.autoRefreshOnNetworkChange=!1;var i=new r.eth.Contract(g,j),o=function(){var e=Object(p.a)(l.a.mark((function e(t){var r,a,c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,window.ethereum.request({method:"eth_requestAccounts"});case 3:if(r=e.sent,console.log("handleSet",r),!(r.length>0)){e.next=9;break}a=r[0],e.next=11;break;case 9:return alert("\xe9 preciso liberar acesso do metamask a essa pagina"),e.abrupt("return",!1);case 11:return e.next=13,i.methods.setGreeting(n).estimateGas();case 13:return c=e.sent,e.next=16,i.methods.setGreeting(n).send({from:a,gas:c});case 16:s=e.sent,console.log(s),s.status&&alert("Nova sauda\xe7\xe3o salva no Blockchain com sucesso");case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(p.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,i.methods.greet().call();case 3:n=e.sent,s(n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)("header",{className:"App-header",children:[Object(a.jsx)("button",{onClick:u,type:"button",children:"Show current greeting"}),Object(a.jsxs)("h1",{children:[" ",n," "]}),Object(a.jsx)("br",{}),Object(a.jsx)("hr",{}),Object(a.jsx)("br",{}),Object(a.jsxs)("form",{onSubmit:o,children:[Object(a.jsx)("label",{htmlFor:"greeting",className:"col-sm-2",children:"Set new greeting:"}),"\xa0",Object(a.jsx)("input",{type:"text",name:"greeting",id:"greeting",className:"form-control",value:n,required:"required",title:"",onChange:function(e){return s(e.target.value)}}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"submit",value:"Save into Smart Contract"})]}),Object(a.jsx)("div",{children:Object(a.jsxs)("h5",{children:["The Smart Contract is at: ",j]})})]})})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,475)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(d,{})}),document.getElementById("root")),m(console.log)}},[[471,1,2]]]);
//# sourceMappingURL=main.f68ec644.chunk.js.map