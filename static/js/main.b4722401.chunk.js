(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{13:function(e,a,t){},16:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(7),i=t.n(l),c=t(2),p=t(3),o=t(5),s=t(4),m=(t(13),t(1)),u=t.n(m),g=(u.a.number,u.a.number,u.a.number,t(16),function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={first:0,last:0,current:0,precurrent:0,postcurrent:0},e}return Object(p.a)(t,[{key:"componentDidMount",value:function(){this.updateState(this.props.page)}},{key:"componentDidUpdate",value:function(e){e.perPage!==this.props.perPage&&(this.props.onPageChange(1),this.updateState(1))}},{key:"updateState",value:function(e){this.setState({first:e>=3?1:0,last:e<=Math.ceil(this.props.total/this.props.perPage)-2?Math.ceil(this.props.total/this.props.perPage):0,current:e,precurrent:e>1?e-1:0,postcurrent:e<Math.ceil(this.props.total/this.props.perPage)?e+1:0})}},{key:"render",value:function(){var e=this,a=this.props,t=a.page,n=a.total,l=a.perPage,i=a.onPageChange,c=this.state,p=c.first,o=c.last,s=c.current,m=c.precurrent,u=c.postcurrent;return r.a.createElement("nav",{"aria-label":"Page-navigation"},r.a.createElement("ul",{className:"pagination"},r.a.createElement("li",{className:t>1?"page-item":"page-item disabled",onClick:function(){i(t-1),e.updateState(t-1)}},r.a.createElement("a",{className:"page-link",href:"/#","aria-label":"Previous"},r.a.createElement("span",{"aria-hidden":"true"},"\xab"))),0!==p&&r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:p===t?"page-item active-item":"page-item",onClick:function(){i(p),e.updateState(p)}},r.a.createElement("a",{className:"page-link",href:"/#"},p)),t>3?r.a.createElement("li",{className:"page-item"},"..."):null),0!==m&&r.a.createElement("li",{className:m===t?"page-item active-item":"page-item",onClick:function(){i(m),e.updateState(m)}},r.a.createElement("a",{className:"page-link",href:"/#"},m)),r.a.createElement("li",{className:s===t?"page-item active-item":"page-item",onClick:function(){i(s),e.updateState(s)}},r.a.createElement("a",{className:"page-link",href:"/#"},s)),0!==u&&r.a.createElement("li",{className:u===t?"page-item active-item":"page-item",onClick:function(){i(u),e.updateState(u)}},r.a.createElement("a",{className:"page-link",href:"/#"},u)),0!==o&&r.a.createElement(r.a.Fragment,null,t<Math.ceil(this.props.total/this.props.perPage)-2?r.a.createElement("li",{className:"page-item"},"..."):null,r.a.createElement("li",{className:o===t?"page-item active-item":"page-item",onClick:function(){i(o),e.updateState(o)}},r.a.createElement("a",{className:"page-link",href:"/#"},o))),r.a.createElement("li",{className:t<Math.ceil(n/l)?"page-item":"page-item disabled",onClick:function(){i(t+1),e.updateState(t+1)}},r.a.createElement("a",{className:"page-link",href:"/#","aria-label":"Next"},r.a.createElement("span",{"aria-hidden":"true"},"\xbb")))))}}]),t}(r.a.Component)),h=(u.a.number,u.a.func,u.a.func,function(e){var a=e.perPage,t=e.onPerPageChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Select PerPage:"," ",r.a.createElement("select",{defaultValue:a,onChange:function(e){t(Number(e.target.value))}},r.a.createElement("option",{value:3},"3"),r.a.createElement("option",{value:5},"5"),r.a.createElement("option",{value:10},"10"),r.a.createElement("option",{value:20},"20"))))}),f=function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={total:42,perPage:5,page:1,withInfo:"1 - 5"},e.handlePageChange=function(a){e.setState((function(e){return{page:a,withInfo:"\n      ".concat((a-1)*e.perPage+1,"\n      -\n      ").concat(Math.min(a*e.perPage,e.total))}}))},e.onPerPageChange=function(a){e.setState({perPage:a})},e}return Object(p.a)(t,[{key:"render",value:function(){var e=this.state,a=e.total,t=e.perPage,n=e.page,l=e.withInfo;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Pagination"),r.a.createElement("p",null,"Info: ".concat(l," of ").concat(a)),r.a.createElement(h,{perPage:t,onPerPageChange:this.onPerPageChange}),r.a.createElement(g,{total:a,perPage:t,page:n,onPageChange:this.handlePageChange}))}}]),t}(r.a.Component);i.a.render(r.a.createElement(f,null),document.getElementById("root"))},8:function(e,a,t){e.exports=t(17)}},[[8,1,2]]]);
//# sourceMappingURL=main.b4722401.chunk.js.map