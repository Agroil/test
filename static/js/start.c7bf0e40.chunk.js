(this.webpackJsonpbicovery=this.webpackJsonpbicovery||[]).push([[7],{106:function(e,a,t){"use strict";var n=t(5),c=t.n(n),r=t(113);a.a=Object(r.d)((function(e){return c.a.createElement(r.a,e)}),{withRef:!1})},178:function(e,a,t){"use strict";var n=t(5),c=t.n(n),r=t(12),l=t(16),s=t(18),i=t.n(s),u=t(95),m=t.n(u),o=t(97),b={tag:o.e,listTag:o.e,className:i.a.string,listClassName:i.a.string,cssModule:i.a.object,children:i.a.node,"aria-label":i.a.string},d=function(e){var a=e.className,t=e.listClassName,n=e.cssModule,s=e.children,i=e.tag,u=e.listTag,b=e["aria-label"],d=Object(l.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),g=Object(o.c)(m()(a),n),p=Object(o.c)(m()("breadcrumb",t),n);return c.a.createElement(i,Object(r.a)({},d,{className:g,"aria-label":b}),c.a.createElement(u,{className:p},s))};d.propTypes=b,d.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"};var g=d,p={tag:o.e,active:i.a.bool,className:i.a.string,cssModule:i.a.object},f=function(e){var a=e.className,t=e.cssModule,n=e.active,s=e.tag,i=Object(l.a)(e,["className","cssModule","active","tag"]),u=Object(o.c)(m()(a,!!n&&"active","breadcrumb-item"),t);return c.a.createElement(s,Object(r.a)({},i,{className:u,"aria-current":n?"page":void 0}))};f.propTypes=p,f.defaultProps={tag:"li"};var h=f,E=t(109),v=t(106),j=function(e){return c.a.createElement(v.a,{id:"menu.".concat(e)})},N=function(e,a,t){return 0===t?"":e.split(a)[0]+a},O=function(e){var a=e.match.path.substr(1),t=a.split("/");return t[t.length-1].indexOf(":")>-1&&(t=t.filter((function(e){return-1===e.indexOf(":")}))),c.a.createElement(n.Fragment,null,c.a.createElement(g,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block"},t.map((function(e,n){return c.a.createElement(h,{key:n,active:t.length===n+1},t.length!==n+1?c.a.createElement(E.b,{to:"/"+N(a,e,n)},j(e)):j(e))}))))};a.a=function(e){var a=e.heading,t=e.match;return c.a.createElement(n.Fragment,null,a&&c.a.createElement("h1",null,c.a.createElement(v.a,{id:a})),c.a.createElement(O,{match:t}))}},482:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return g}));var n=t(101),c=t(102),r=t(105),l=t(103),s=t(104),i=t(5),u=t.n(i),m=t(197),o=t(106),b=t(107),d=t(178),g=function(e){function a(){return Object(n.a)(this,a),Object(r.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return u.a.createElement(i.Fragment,null,u.a.createElement(m.a,null,u.a.createElement(b.a,{xxs:"12"},u.a.createElement(d.a,{heading:"menu.start",match:this.props.match}),u.a.createElement(b.b,{className:"mb-5"}))),u.a.createElement(m.a,null,u.a.createElement(b.a,{xxs:"12",className:"mb-4"},u.a.createElement("p",null,u.a.createElement(o.a,{id:"menu.start"})))))}}]),a}(i.Component)}}]);
//# sourceMappingURL=start.c7bf0e40.chunk.js.map