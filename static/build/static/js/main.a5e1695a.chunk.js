(window.webpackJsonpmytodo=window.webpackJsonpmytodo||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n.p+"static/media/homework.65aab60b.png"},,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(3),c=n.n(o),l=(n(15),n(1)),s=n(4),r=n(5),u=n(8),m=n(6),d=n(9),h=n(7),p=n.n(h),v=(n(16),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={newItem:"",list:[]},n}return Object(d.a)(t,e),Object(r.a)(t,[{key:"addItem",value:function(e){if(""!==e){var t={id:Date.now(),value:e,isDone:!1},n=Object(l.a)(this.state.list);n.push(t),this.setState({list:n,newItem:""})}}},{key:"deleteItem",value:function(e){var t=Object(l.a)(this.state.list).filter(function(t){return t.id!==e});this.setState({list:t})}},{key:"updateInput",value:function(e){this.setState({newItem:e})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("h1",{className:"app-title"}," ",i.a.createElement("img",{src:p.a,width:"100",height:"100",className:"logo"})," My Todo List"),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"inputTodo"},"Add an Item....",i.a.createElement("br",null),i.a.createElement("input",{type:"text",className:"input-text",placeholder:"Write a Todo",required:!0,value:this.state.newItem,onChange:function(t){return e.updateInput(t.target.value)}}),i.a.createElement("button",{className:"add-btn",onClick:function(){return e.addItem(e.state.newItem)},disabled:!this.state.newItem.length},"Add Todo")),i.a.createElement("div",{className:"list"},i.a.createElement("ul",null,this.state.list.map(function(t){return i.a.createElement("li",{key:t.id},i.a.createElement("input",{type:"checkbox",name:"idDone",checked:t.isDone,onChange:function(){}}),t.value,i.a.createElement("button",{className:"btn",onClick:function(){return e.deleteItem(t.id)}},"Delete"))})))))}}]),t}(i.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.a5e1695a.chunk.js.map