!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{mkNY:function(e,i,c){"use strict";c.r(i),c.d(i,"ArticleModule",function(){return F});var a=c("ofXK"),r=c("Z48m"),o=c("fXoL"),l=c("tyNb"),g=c("jhN1"),b=c("YYwF");function s(t,n){if(1&t&&(o.Pb(0,"h4",9),o.xc(1),o.Ob()),2&t){var e=o.ac(2);o.yb(1),o.zc(" ",e.data.article.category," ")}}function d(t,n){if(1&t&&(o.Pb(0,"h2",9),o.xc(1),o.Ob()),2&t){var e=o.ac(2);o.yb(1),o.zc(" ",e.data.article.title," ")}}function f(t,n){if(1&t&&(o.Pb(0,"h3",10),o.xc(1),o.Ob()),2&t){var e=o.ac(2);o.yb(1),o.zc(" ",e.data.article.subtitle," ")}}function u(t,n){if(1&t&&(o.Pb(0,"section",6),o.Pb(1,"div",2),o.Pb(2,"div",3),o.wc(3,s,2,1,"h4",7),o.wc(4,d,2,1,"h2",7),o.wc(5,f,2,1,"h3",8),o.Ob(),o.Ob(),o.Ob()),2&t){var e=o.ac();o.yb(3),o.gc("ngIf",e.data.article.category),o.yb(1),o.gc("ngIf",e.data.article.title),o.yb(1),o.gc("ngIf",e.data.article.subtitle)}}function p(t,n){if(1&t&&(o.Pb(0,"section",6),o.Pb(1,"div",2),o.Pb(2,"div",3),o.Lb(3,"p",15),o.bc(4,"safe"),o.Ob(),o.Ob(),o.Ob()),2&t){var e=o.ac().$implicit;o.yb(3),o.gc("innerHTML",o.dc(4,1,e.data,"html"),o.qc)}}function m(t,n){if(1&t&&(o.Pb(0,"section",16),o.Lb(1,"img",17),o.bc(2,"safe"),o.Ob()),2&t){var e=o.ac().$implicit;o.yb(1),o.gc("src",o.dc(2,1,e.url,"resourceUrl"),o.sc)}}function O(t,n){if(1&t&&o.Lb(0,"input",25),2&t){var e=n.index;o.hc("id","s-",e+1,""),o.gc("checked",0===e)}}function h(t,n){if(1&t&&(o.Lb(0,"iframe",28),o.bc(1,"safe")),2&t){var e=o.ac().$implicit;o.gc("src",o.dc(1,1,e.url,"resourceUrl"),o.rc)}}var y=function(t){return{"background-image":t}};function P(t,n){if(1&t&&(o.Nb(0),o.Pb(1,"li",26),o.wc(2,h,2,4,"iframe",27),o.Ob(),o.Mb()),2&t){var e=n.$implicit;o.yb(1),o.gc("ngStyle",o.jc(2,y,"url("+e.url+")")),o.yb(1),o.gc("ngIf","video"===e.tag)}}function v(t,n){if(1&t&&(o.Nb(0),o.Pb(1,"span"),o.Lb(2,"label",30),o.Ob(),o.Pb(3,"span"),o.Lb(4,"label",30),o.Ob(),o.Mb()),2&t){var e=o.ac().index;o.yb(1),o.Bb("s-nav-",e+1," right"),o.yb(1),o.Bb("s-nav-",e+1," right"),o.hc("for","s-",e+2,""),o.yb(1),o.Bb("s-nav-",e+2," left"),o.yb(1),o.Bb("s-nav-",e+2," left"),o.hc("for","s-",e+1,"")}}function w(t,n){if(1&t&&(o.Nb(0),o.wc(1,v,5,14,"ng-container",29),o.Mb()),2&t){var e=n.index,i=o.ac(2).$implicit;o.yb(1),o.gc("ngIf",e<(null==i.slides?null:i.slides.length)-1)}}function M(t,n){if(1&t&&(o.Pb(0,"section",18),o.Pb(1,"div",19),o.Pb(2,"div",20),o.wc(3,O,1,2,"input",21),o.Pb(4,"ul",22),o.Pb(5,"pre"),o.xc(6),o.bc(7,"json"),o.Ob(),o.wc(8,P,3,4,"ng-container",23),o.Ob(),o.Pb(9,"div",24),o.wc(10,w,2,1,"ng-container",23),o.Ob(),o.Ob(),o.Ob(),o.Ob()),2&t){var e=o.ac().$implicit;o.yb(3),o.gc("ngForOf",e.slides),o.yb(3),o.yc(o.cc(7,4,e.slides)),o.yb(2),o.gc("ngForOf",e.slides),o.yb(2),o.gc("ngForOf",e.slides)}}function C(t,n){if(1&t&&(o.Pb(0,"section",31),o.Pb(1,"div",2),o.Pb(2,"div",3),o.Lb(3,"iframe",32),o.bc(4,"safe"),o.Ob(),o.Ob(),o.Ob()),2&t){var e=o.ac().$implicit;o.yb(3),o.gc("src",o.dc(4,1,e.url,"resourceUrl"),o.rc)}}function _(t,n){if(1&t&&(o.Pb(0,"section",11),o.wc(1,p,5,4,"section",4),o.wc(2,m,3,4,"section",12),o.wc(3,M,11,6,"section",13),o.wc(4,C,5,4,"section",14),o.Ob()),2&t){var e=n.$implicit;o.yb(1),o.gc("ngIf","p"===e.tag),o.yb(1),o.gc("ngIf","img"===e.tag),o.yb(1),o.gc("ngIf","slider"===e.tag),o.yb(1),o.gc("ngIf","video"===e.tag)}}var x,I,k=((x=function(){function e(n,i,c,a){t(this,e),this.route=n,this.articlesService=i,this.titleService=c,this.metaService=a}var i,c,a;return i=e,(c=[{key:"ngOnInit",value:function(){if(this.data=this.articlesService.getArticle(this.route.snapshot.paramMap.get("id"),this.articlesService.currentPage),this.data){var t=this.data,n=t.pageTitle,e=t.metaKeywords,i=t.metaDescritpion;n&&this.titleService.setTitle(n),Array.isArray(e)&&e.length&&this.metaService.addTag({name:"keywords",content:e.join(",")}),i&&this.metaService.addTag({name:"description",content:i})}}}])&&n(i.prototype,c),a&&n(i,a),e}()).\u0275fac=function(t){return new(t||x)(o.Kb(l.a),o.Kb(r.a),o.Kb(g.d),o.Kb(g.c))},x.\u0275cmp=o.Eb({type:x,selectors:[["app-article"]],decls:9,vars:6,consts:[[1,"article-header-bg","mb-5",3,"ngStyle"],[1,"container"],[1,"row"],[1,"col-12"],["class","article-content container",4,"ngIf"],["class","py-5",4,"ngFor","ngForOf"],[1,"article-content","container"],["class","my-5",4,"ngIf"],["class","my-4",4,"ngIf"],[1,"my-5"],[1,"my-4"],[1,"py-5"],["class","article-image",4,"ngIf"],["class","article-slider",4,"ngIf"],["class","article-video container",4,"ngIf"],[3,"innerHTML"],[1,"article-image"],["loading","lazy",3,"src"],[1,"article-slider"],[1,"outer-wrapper","mt-0"],["role","slider",1,"s-wrap","s-type-1","mb-0"],["type","radio","name","slider-control",3,"id","checked",4,"ngFor","ngForOf"],[1,"s-content"],[4,"ngFor","ngForOf"],[1,"s-nav"],["type","radio","name","slider-control",3,"id","checked"],[1,"s-item",3,"ngStyle"],["class","frame","frameBorder","0","loading","lazy",3,"src",4,"ngIf"],["frameBorder","0","loading","lazy",1,"frame",3,"src"],[4,"ngIf"],[3,"for"],[1,"article-video","container"],["frameBorder","0","allowfullscreen","","allow","autoplay; fullscreen","loading","lazy",3,"src"]],template:function(t,n){1&t&&(o.Pb(0,"article"),o.Pb(1,"section",0),o.Pb(2,"div",1),o.Pb(3,"div",2),o.Pb(4,"div",3),o.Pb(5,"h1"),o.xc(6),o.Ob(),o.Ob(),o.Ob(),o.Ob(),o.Ob(),o.wc(7,u,6,3,"section",4),o.wc(8,_,5,4,"section",5),o.Ob()),2&t&&(o.yb(1),o.gc("ngStyle",o.jc(4,y,"url("+(null==n.data||null==n.data.article?null:n.data.article.headerBgUrl)+")")),o.yb(5),o.zc(" ",null==n.data||null==n.data.article?null:n.data.article.header," "),o.yb(1),o.gc("ngIf",(null==n.data?null:n.data.article)&&(n.data.article.title||n.data.article.subtitle||n.data.article.category)),o.yb(1),o.gc("ngForOf",null==n.data||null==n.data.article?null:n.data.article.content))},directives:[a.l,a.k,a.j],pipes:[b.a,a.e],styles:["article[_ngcontent-%COMP%]{background-color:#fff;font-size:14px;color:#212121}.article-header-bg[_ngcontent-%COMP%]{background-position:center 25%;background-repeat:no-repeat;background-size:cover;background-color:#1a1a1a;color:#fff;width:100%;padding-top:12%;padding-bottom:9%}.article-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:4rem;font-weight:700}.article-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:18px;line-height:1.5}.article-slider[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-family:gilroy-bold}.s-wrap[_ngcontent-%COMP%]   .s-item-4[_ngcontent-%COMP%]{background-position:center 20%}.s-wrap[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]{height:100%}.article-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .article-image[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .article-slider[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .article-video[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:17px}.article-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.article-video[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{width:100%;height:653px;display:inline-block}@media (max-width:1200px){.article-video[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{height:540px}}@media (max-width:990px){.article-video[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{height:388px}}@media (max-width:768px){.article-video[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{height:296px}}@media (max-width:500px){.article-video[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{height:250px}}@media (max-width:360px){.article-video[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{height:185px}}"]}),x),z=c("+G0P"),S=[{path:"",component:k}],F=((I=function n(){t(this,n)}).\u0275mod=o.Ib({type:I}),I.\u0275inj=o.Hb({factory:function(t){return new(t||I)},imports:[[a.b,l.j.forChild(S),z.a]]}),I)}}])}();