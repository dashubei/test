(this.webpackJsonptest2=this.webpackJsonptest2||[]).push([[0],{41:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(12),s=n.n(c),r=n(13),m=n(14),o=n(17),i=n(16),j=n(15),l=n.n(j),h=n(0),b=function(e){return Object(h.jsxs)("div",{className:"text-center mt-5",children:[Object(h.jsx)("h1",{className:"text-success",children:"\u7c21\u6613\u63b2\u793a\u677f"}),Object(h.jsxs)("form",{onSubmit:e.onSubmit,children:[Object(h.jsxs)("div",{className:"mt-5",children:[Object(h.jsx)("input",{type:"text",name:"name",placeholder:"Name",value:e.name,onChange:e.onChange}),Object(h.jsx)("br",{})]}),Object(h.jsx)("div",{className:"mt-5",children:Object(h.jsx)("textarea",{name:"comment",rows:"5",cols:"50",placeholder:"Comment",value:e.comment,onChange:e.onChange})}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{className:"btn btn-outline-primary text-center mt-3 w-25",type:"submit",children:"\u6295\u7a3f"})})]}),Object(h.jsx)("hr",{color:"blue"})]})},u=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).componentDidMount=function(){l.a.get("https://jsonplaceholder.typicode.com/comments").then((function(e){a.setState({ApiData:e.data})}))},a.onSubmit=function(e){e.preventDefault();var t=a.state.name,n=a.state.comment;""!==t&&""!==n?(a.state.RawData.push({name:t,comment:n}),a.setState({name:"",comment:"",ErrorMsg:""})):a.setState({name:t,comment:n,ErrorMsg:"\u540d\u524d\u3068\u30b3\u30e1\u30f3\u30c8\u306f\u5fc5\u305a\u5165\u529b\u3057\u3066\u4e0b\u3055\u3044\u3002"})},a.onChange=function(e){e.preventDefault(),"name"===e.target.name?a.setState({name:e.target.value}):"comment"===e.target.name&&a.setState({comment:e.target.value})},a.state={name:"",comment:"",ApiData:[],RawData:[],ErrorMsg:""},a}return Object(m.a)(n,[{key:"render",value:function(){console.log(this.state.ErrorMsg);var e=this.state.ApiData.map((function(e,t){return Object(h.jsxs)("article",{className:"text-center",children:[Object(h.jsxs)("h5",{children:["@",e.name]}),Object(h.jsx)("p",{children:e.body}),Object(h.jsx)("br",{}),Object(h.jsx)("hr",{})]},e.id)})),t=Object(h.jsx)("div",{className:"text-center",children:Object(h.jsx)("p",{className:"text-danger",children:this.state.ErrorMsg})}),n=this.state.RawData.map((function(e,t){return Object(h.jsxs)("article",{className:"text-center",children:[Object(h.jsxs)("h5",{children:["@",e.name]}),Object(h.jsx)("p",{children:e.comment}),Object(h.jsx)("br",{}),Object(h.jsx)("hr",{})]},e.id)}));return Object(h.jsxs)("div",{className:"text-center",children:[t,Object(h.jsx)(b,{name:this.state.name,comment:this.state.comment,onChange:this.onChange,onSubmit:this.onSubmit}),n,Object(h.jsx)("p",{children:"\u2193\u904e\u53bb\u306e\u8a18\u4e8b\u2193"}),Object(h.jsx)("hr",{}),e]})}}]),n}(a.Component),x=function(){return Object(h.jsx)(u,{})};s.a.render(Object(h.jsx)(x,{}),document.querySelector("#root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.8e3a0cbe.chunk.js.map