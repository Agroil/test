(this["webpackJsonpbicovery-deploy"]=this["webpackJsonpbicovery-deploy"]||[]).push([[15],{106:function(e,a,t){"use strict";var s=t(5),n=t.n(s),o=t(113);a.a=Object(o.d)((function(e){return n.a.createElement(o.a,e)}),{withRef:!1})},107:function(e,a,t){"use strict";t.d(a,"a",(function(){return c})),t.d(a,"b",(function(){return r}));var s=t(5),n=t.n(s),o=t(196),c=function(e){return n.a.createElement(o.a,Object.assign({},e,{widths:["xxs","xs","sm","md","lg","xl","xxl"]}))},r=function(e){return n.a.createElement("div",{className:"separator ".concat(e.className)})}},155:function(e,a,t){"use strict";var s=t(12),n=t(16),o=t(114),c=t(108),r=t(5),l=t.n(r),i=t(18),u=t.n(i),d=t(95),m=t.n(d),b=t(97),f={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:b.e,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},p=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(o.a)(t)),t}Object(c.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],o=e.block,c=e.className,r=e.close,i=e.cssModule,u=e.color,d=e.outline,f=e.size,p=e.tag,g=e.innerRef,v=Object(n.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);r&&"undefined"===typeof v.children&&(v.children=l.a.createElement("span",{"aria-hidden":!0},"\xd7"));var h="btn"+(d?"-outline":"")+"-"+u,N=Object(b.c)(m()(c,{close:r},r||"btn",r||h,!!f&&"btn-"+f,!!o&&"btn-block",{active:a,disabled:this.props.disabled}),i);v.href&&"button"===p&&(p="a");var j=r?"Close":null;return l.a.createElement(p,Object(s.a)({type:"button"===p&&v.onClick?"button":void 0},v,{className:N,ref:g,onClick:this.onClick,"aria-label":t||j}))},a}(l.a.Component);p.propTypes=f,p.defaultProps={color:"secondary",tag:"button"},a.a=p},196:function(e,a,t){"use strict";var s=t(12),n=t(16),o=t(5),c=t.n(o),r=t(18),l=t.n(r),i=t(95),u=t.n(i),d=t(97),m=l.a.oneOfType([l.a.number,l.a.string]),b=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:m,offset:m})]),f={tag:d.e,xs:b,sm:b,md:b,lg:b,xl:b,className:l.a.string,cssModule:l.a.object,widths:l.a.array},p={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,o=e.widths,r=e.tag,l=Object(n.a)(e,["className","cssModule","widths","tag"]),i=[];o.forEach((function(a,s){var n=e[a];if(delete l[a],n||""===n){var o=!s;if(Object(d.a)(n)){var c,r=o?"-":"-"+a+"-",m=g(o,a,n.size);i.push(Object(d.c)(u()(((c={})[m]=n.size||""===n.size,c["order"+r+n.order]=n.order||0===n.order,c["offset"+r+n.offset]=n.offset||0===n.offset,c)),t))}else{var b=g(o,a,n);i.push(b)}}})),i.length||i.push("col");var m=Object(d.c)(u()(a,i),t);return c.a.createElement(r,Object(s.a)({},l,{className:m}))};v.propTypes=f,v.defaultProps=p,a.a=v},197:function(e,a,t){"use strict";var s=t(12),n=t(16),o=t(5),c=t.n(o),r=t(18),l=t.n(r),i=t(95),u=t.n(i),d=t(97),m=l.a.oneOfType([l.a.number,l.a.string]),b={tag:d.e,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:m,sm:m,md:m,lg:m,xl:m},f={tag:"div",widths:["xs","sm","md","lg","xl"]},p=function(e){var a=e.className,t=e.cssModule,o=e.noGutters,r=e.tag,l=e.form,i=e.widths,m=Object(n.a)(e,["className","cssModule","noGutters","tag","form","widths"]),b=[];i.forEach((function(a,t){var s=e[a];if(delete m[a],s){var n=!t;b.push(n?"row-cols-"+s:"row-cols-"+a+"-"+s)}}));var f=Object(d.c)(u()(a,o?"no-gutters":null,l?"form-row":"row",b),t);return c.a.createElement(r,Object(s.a)({},m,{className:f}))};p.propTypes=b,p.defaultProps=f,a.a=p},198:function(e,a,t){"use strict";var s=t(12),n=t(16),o=t(5),c=t.n(o),r=t(18),l=t.n(r),i=t(95),u=t.n(i),d=t(97),m={tag:d.e,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},b=function(e){var a=e.className,t=e.cssModule,o=e.color,r=e.body,l=e.inverse,i=e.outline,m=e.tag,b=e.innerRef,f=Object(n.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),p=Object(d.c)(u()(a,"card",!!l&&"text-white",!!r&&"card-body",!!o&&(i?"border":"bg")+"-"+o),t);return c.a.createElement(m,Object(s.a)({},f,{className:p,ref:b}))};b.propTypes=m,b.defaultProps={tag:"div"},a.a=b},199:function(e,a,t){"use strict";var s=t(12),n=t(16),o=t(5),c=t.n(o),r=t(18),l=t.n(r),i=t(95),u=t.n(i),d=t(97),m={tag:d.e,className:l.a.string,cssModule:l.a.object},b=function(e){var a=e.className,t=e.cssModule,o=e.tag,r=Object(n.a)(e,["className","cssModule","tag"]),l=Object(d.c)(u()(a,"card-title"),t);return c.a.createElement(o,Object(s.a)({},r,{className:l}))};b.propTypes=m,b.defaultProps={tag:"div"},a.a=b},512:function(e,a,t){"use strict";t.r(a);var s=t(101),n=t(102),o=t(105),c=t(103),r=t(104),l=t(5),i=t.n(l),u=t(197),d=t(198),m=t(199),b=t(155),f=t(109),p=t(107),g=t(106),v=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(r.a)(a,e),Object(n.a)(a,[{key:"componentDidMount",value:function(){document.body.classList.add("background")}},{key:"componentWillUnmount",value:function(){document.body.classList.remove("background")}},{key:"render",value:function(){return i.a.createElement(l.Fragment,null,i.a.createElement("div",{className:"fixed-background"}),i.a.createElement("main",null,i.a.createElement("div",{className:"container"},i.a.createElement(u.a,{className:"h-100"},i.a.createElement(p.a,{xxs:"12",md:"10",className:"mx-auto my-auto"},i.a.createElement(d.a,{className:"auth-card"},i.a.createElement("div",{className:"position-relative image-side "},i.a.createElement("p",{className:"text-white h2"},"MAGIC IS IN THE DETAILS"),i.a.createElement("p",{className:"white mb-0"},"Yes, it is indeed!")),i.a.createElement("div",{className:"form-side"},i.a.createElement(f.b,{to:"/",className:"white"},i.a.createElement("span",{className:"logo-single"})),i.a.createElement(m.a,{className:"mb-4"},i.a.createElement(g.a,{id:"pages.error-title"})),i.a.createElement("p",{className:"mb-0 text-muted text-small mb-0"},i.a.createElement(g.a,{id:"pages.error-code"})),i.a.createElement("p",{className:"display-1 font-weight-bold mb-5"},"404"),i.a.createElement(b.a,{href:"/app",color:"primary",className:"btn-shadow",size:"lg"},i.a.createElement(g.a,{id:"pages.go-back-home"})))))))))}}]),a}(l.Component);a.default=v}}]);
//# sourceMappingURL=views-error.fa79dd6e.chunk.js.map