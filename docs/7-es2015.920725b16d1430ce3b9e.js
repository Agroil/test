(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"4ik+":function(t,e,o){"use strict";var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),r=o("FWf1");e.filter=function(t,e){return function(o){return o.lift(new i(t,e))}};var i=function(){function t(t,e){this.predicate=t,this.thisArg=e}return t.prototype.call=function(t,e){return e.subscribe(new s(t,this.predicate,this.thisArg))},t}(),s=function(t){function e(e,o,n){var r=t.call(this,e)||this;return r.predicate=o,r.thisArg=n,r.count=0,r}return n(e,t),e.prototype._next=function(t){var e;try{e=this.predicate.call(this.thisArg,t,this.count++)}catch(o){return void this.destination.error(o)}e&&this.destination.next(t)},e}(r.Subscriber)},FWf1:function(t,e,o){"use strict";var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),r=o("pshJ"),i=o("GiSu"),s=o("zB/H"),c=o("p//D"),a=o("n3uD"),u=o("MkmW"),p=function(t){function e(o,n,r){var s=t.call(this)||this;switch(s.syncErrorValue=null,s.syncErrorThrown=!1,s.syncErrorThrowable=!1,s.isStopped=!1,arguments.length){case 0:s.destination=i.empty;break;case 1:if(!o){s.destination=i.empty;break}if("object"==typeof o){o instanceof e?(s.syncErrorThrowable=o.syncErrorThrowable,s.destination=o,o.add(s)):(s.syncErrorThrowable=!0,s.destination=new h(s,o));break}default:s.syncErrorThrowable=!0,s.destination=new h(s,o,n,r)}return s}return n(e,t),e.prototype[c.rxSubscriber]=function(){return this},e.create=function(t,o,n){var r=new e(t,o,n);return r.syncErrorThrowable=!1,r},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this))},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){this.destination.error(t),this.unsubscribe()},e.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},e.prototype._unsubscribeAndRecycle=function(){var t=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=t,this},e}(s.Subscription);e.Subscriber=p;var h=function(t){function e(e,o,n,s){var c,a=t.call(this)||this;a._parentSubscriber=e;var u=a;return r.isFunction(o)?c=o:o&&(c=o.next,n=o.error,s=o.complete,o!==i.empty&&(u=Object.create(o),r.isFunction(u.unsubscribe)&&a.add(u.unsubscribe.bind(u)),u.unsubscribe=a.unsubscribe.bind(a))),a._context=u,a._next=c,a._error=n,a._complete=s,a}return n(e,t),e.prototype.next=function(t){if(!this.isStopped&&this._next){var e=this._parentSubscriber;a.config.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?this.__tryOrSetError(e,this._next,t)&&this.unsubscribe():this.__tryOrUnsub(this._next,t)}},e.prototype.error=function(t){if(!this.isStopped){var e=this._parentSubscriber,o=a.config.useDeprecatedSynchronousErrorHandling;if(this._error)o&&e.syncErrorThrowable?(this.__tryOrSetError(e,this._error,t),this.unsubscribe()):(this.__tryOrUnsub(this._error,t),this.unsubscribe());else if(e.syncErrorThrowable)o?(e.syncErrorValue=t,e.syncErrorThrown=!0):u.hostReportError(t),this.unsubscribe();else{if(this.unsubscribe(),o)throw t;u.hostReportError(t)}}},e.prototype.complete=function(){var t=this;if(!this.isStopped){var e=this._parentSubscriber;if(this._complete){var o=function(){return t._complete.call(t._context)};a.config.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?(this.__tryOrSetError(e,o),this.unsubscribe()):(this.__tryOrUnsub(o),this.unsubscribe())}else this.unsubscribe()}},e.prototype.__tryOrUnsub=function(t,e){try{t.call(this._context,e)}catch(o){if(this.unsubscribe(),a.config.useDeprecatedSynchronousErrorHandling)throw o;u.hostReportError(o)}},e.prototype.__tryOrSetError=function(t,e,o){if(!a.config.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{e.call(this._context,o)}catch(n){return a.config.useDeprecatedSynchronousErrorHandling?(t.syncErrorValue=n,t.syncErrorThrown=!0,!0):(u.hostReportError(n),!0)}return!1},e.prototype._unsubscribe=function(){var t=this._parentSubscriber;this._context=null,this._parentSubscriber=null,t.unsubscribe()},e}(p);e.SafeSubscriber=h},GMZp:function(t,e,o){"use strict";e.isObject=function(t){return null!==t&&"object"==typeof t}},GiSu:function(t,e,o){"use strict";var n=o("n3uD"),r=o("MkmW");e.empty={closed:!0,next:function(t){},error:function(t){if(n.config.useDeprecatedSynchronousErrorHandling)throw t;r.hostReportError(t)},complete:function(){}}},LBXl:function(t,e,o){"use strict";e.UnsubscriptionError=function(){function t(t){return Error.call(this),this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map(function(t,e){return e+1+") "+t.toString()}).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t,this}return t.prototype=Object.create(Error.prototype),t}()},MkmW:function(t,e,o){"use strict";e.hostReportError=function(t){setTimeout(function(){throw t},0)}},bw5h:function(t,e,o){"use strict";o.r(e),o.d(e,"CategoryModule",function(){return P});var n=o("ofXK"),r=o("tyNb"),i=o("4ik+"),s=o("8UQ/"),c=o("fXoL"),a=o("jhN1"),u=o("jSPT"),p=o("YYwF");const h=function(t){return{"background-image":t}},l=function(t){return["/post",t]},b=function(t,e,o){return{pageTitle:t,metaKeywords:e,metaDescritpion:o}};function d(t,e){if(1&t&&(c.Pb(0,"div",16),c.Pb(1,"a",17),c.Pb(2,"div",18),c.Pb(3,"h3"),c.xc(4),c.Ob(),c.Pb(5,"p"),c.xc(6),c.Ob(),c.Ob(),c.Ob(),c.Ob()),2&t){const t=e.$implicit;c.yb(1),c.gc("ngStyle",c.jc(5,h,"url("+t.imageUrl+")"))("routerLink",c.jc(7,l,t.urlTitle))("state",c.kc(9,b,t.pageTitle,t.metaKeywords,t.metaDescritpion)),c.yb(3),c.yc(t.title),c.yb(2),c.yc(t.subtitle)}}function g(t,e){1&t&&(c.Nb(0),c.Pb(1,"p",19),c.xc(2," Looking for reaching your target audience in such a way your users expect from you? Consider motion graphics and animated promotional videos for business! "),c.Ob(),c.Pb(3,"p",20),c.xc(4," There are too many pros of animated promotional videos to fit them in just a few words, but in a nutshell, this is the top way to attract attention to your business, easily explain any complex concept, visualize your problem-solving ideas with motion graphics and make your users dwell on your website and social media profiles. Being the top-consumed content type to date, promotion animation is able to power and skyrocket your marketing strategy. "),c.Ob(),c.Pb(5,"p",20),c.xc(6," Wonder what are the other benefits an animated promo video can bring to your table? Reach us to discover them! "),c.Ob(),c.Mb())}function y(t,e){1&t&&(c.Nb(0),c.Pb(1,"p",19),c.xc(2," Want to get an all-in-one solution for your marketing strategies, interaction with customers and partners, and attracting investments to your future projects? Creative video production potential goes beyond these tasks! "),c.Ob(),c.Pb(3,"p",20),c.xc(4," In 2021, an average Internet user is expected to spend 100 minutes per day watching online videos. This is the right time and place to catch their attention with your brand voice, marketing message, and unique value proposition revealed in your engaging video. What is more, the potential of video production for business is so unlimited that it can be easily used for any project, regardless of the specifics. The only thing you need is some technical skills and knowledge, a bit of creativity, and a video production agency you may consult with any time. "),c.Ob(),c.Pb(5,"p",20),c.xc(6," Ready to sharpen your video marketing strategy for 2020 and beyond? We are here to make your ideas happen! "),c.Ob(),c.Mb())}function f(t,e){1&t&&(c.Nb(0),c.Pb(1,"p",19),c.xc(2," In a dynamic mobile application market, the winner is the one who can offer the best solution to the user's problem for a reasonable fee, combining simplicity and quality within one application. The simplicity and quality as the parts of the whole may be described with one word - mobile user experience. "),c.Ob(),c.Pb(3,"p",20),c.xc(4," The experience your mobile app offers to your users may become your competitive edge or the reason to never use your solution again. "),c.Ob(),c.Pb(5,"p",20),c.xc(6," With the first and the ultimate goal in mind, we are here to offer you the high-end mobile UI/UX design creation to meet the changing expectations of your target users, follow the latest mobile and web design trends, and add value to your offer through the engaging and enjoyable mobile user experience (UX). "),c.Ob(),c.Pb(7,"p",20),c.xc(8," The top-notch UI and UX design will never be a challenge for your project since our mobile developers are right here to help with your mobile design architecture and prototyping. Feel free to review the successful projects we\u2019ve contributed to and get in touch with us for more details and instant assistance in mobile UI design and development! "),c.Ob(),c.Mb())}let m=(()=>{class t{constructor(t,e,o,n){this.router=t,this.postsService=e,this.titleService=o,this.metaService=n,this.title="",this.videoUrl="",this.reelVideoUrl="",this.pageTitle="",this.metaKeywords=[],this.metaDescritpion="",this.categories=["video","animation","mobile"],this.router.events.pipe(Object(i.filter)(t=>t instanceof r.c)).subscribe(t=>{if(this.categories.indexOf(t.url)){const e=t.url.split("/").filter(t=>!!t),o=e[e.length-1];this.categories.includes(o)&&(this.workMode=o,this.setStatic(),this.getDataByCategory()),this.pageTitle&&this.titleService.setTitle(this.pageTitle),Array.isArray(this.metaKeywords)&&this.metaKeywords.length&&this.metaService.addTag({name:"keywords",content:this.metaKeywords.join(",")}),this.metaDescritpion&&this.metaService.addTag({name:"description",content:this.metaDescritpion})}})}ngOnInit(){}ngOnDestroy(){}goToPost(t){this.postsService.currentPost=t,localStorage.setItem("current_post",JSON.stringify(t)),this.router.navigate(["/post"])}setStatic(){switch(this.workMode){case"video":this.title="Video Production",this.reelVideoUrl="https://player.vimeo.com/video/481588124?title=0&byline=0&portrait=0&autoplay=1&loop=1&autopause=0",this.videoUrl="https://www.youtube.com/embed/W0LHTWG-UmQ?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=W0LHTWG-UmQ",this.pageTitle="Creative video production | Geek Powr Media",this.metaKeywords=["creative video production","video production","video production agency"],this.metaDescritpion="Want to get an all-in-one solution for your marketing strategies, interaction with customers and partners, and attracting investments to your future projects? Video production agency potential goes beyond these tasks!";break;case"animation":this.title="Promo animation",this.reelVideoUrl="https://player.vimeo.com/video/479983049?title=0&byline=0&portrait=0&autoplay=1&loop=1&autopause=0",this.videoUrl="https://www.youtube.com/embed/f5ClCTAuIZc?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=W2YoihjFTJ0",this.pageTitle="Promo animation - get animated promotional videos`",this.metaKeywords=["promo animation","animated promotional video","promotion animation","animated promo video","animated promotional videos for business"],this.metaDescritpion="Consider motion graphics and animated promotional videos for business!";break;case"mobile":this.title="Mobile & Platforms",this.reelVideoUrl="https://player.vimeo.com/video/479493339?title=0&byline=0&portrait=0&autoplay=1&loop=1&autopause=0",this.videoUrl="https://www.youtube.com/embed/he6IBkt92hg?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=eHX86nhM4Eg",this.pageTitle="Mobile web design | Geek Powr Media",this.metaKeywords=["architecture mobile design","mobile web design","mobile ui design","mobile ux","mobile design ui / ux","mobile ux design","ux design for mobile developers"],this.metaDescritpion="Create a unique mobile design ui/ux with us. Our professionals implement only the best ideas."}}trackByFn(t,e){return e.id}sortByOrder(t,e){return t.order<e.order?-1:t.order>e.order?1:0}getDataByCategory(){const t=this.postsService.getData().filter(t=>t.category===this.workMode);this.data=t.sort(this.sortByOrder)}}return t.\u0275fac=function(e){return new(e||t)(c.Kb(r.f),c.Kb(s.a),c.Kb(a.d),c.Kb(a.c))},t.\u0275cmp=c.Eb({type:t,selectors:[["app-category"]],decls:28,vars:15,consts:[[1,"category"],[1,"category-header"],[1,"container"],[1,"row"],[1,"col"],[1,"hvr-sweep-to-right",3,"click"],[1,"video-background"],[1,"video-foreground"],["frameBorder","0","allowfullscreen","",3,"src"],[1,"category-body"],[1,"category-body-title"],["class","col-lg-4 p-0",4,"ngFor","ngForOf","ngForTrackBy"],[1,"row",3,"ngSwitch"],[4,"ngSwitchCase"],["videoPopUp",""],["frameBorder","0","allowfullscreen","","allow","autoplay; fullscreen",1,"frame",3,"src"],[1,"col-lg-4","p-0"],[1,"category-body-item",3,"ngStyle","routerLink","state"],[1,"category-body-item-info"],[1,"col-12","mt-5","pt-5","category-paragraph"],[1,"col-12","category-paragraph"]],template:function(t,e){if(1&t){const t=c.Qb();c.Pb(0,"div",0),c.Pb(1,"div",1),c.Pb(2,"div",2),c.Pb(3,"div",3),c.Pb(4,"div",4),c.Pb(5,"h1"),c.xc(6),c.Ob(),c.Pb(7,"button",5),c.Wb("click",function(){return c.pc(t),c.nc(25).open()}),c.xc(8," View Latest Reel "),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Pb(9,"div",6),c.Pb(10,"div",7),c.Lb(11,"iframe",8),c.bc(12,"safe"),c.Ob(),c.Ob(),c.Ob(),c.Pb(13,"div",9),c.Pb(14,"div",2),c.Pb(15,"div",10),c.Pb(16,"h2"),c.xc(17,"Latest and Greatest"),c.Ob(),c.Ob(),c.Pb(18,"div",3),c.wc(19,d,7,13,"div",11),c.Ob(),c.Pb(20,"div",12),c.wc(21,g,7,0,"ng-container",13),c.wc(22,y,7,0,"ng-container",13),c.wc(23,f,9,0,"ng-container",13),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Pb(24,"app-video-popup",null,14),c.Lb(26,"iframe",15),c.bc(27,"safe"),c.Ob()}2&t&&(c.yb(6),c.yc(e.title),c.yb(5),c.gc("src",c.dc(12,9,e.videoUrl,"resourceUrl"),c.rc),c.yb(8),c.gc("ngForOf",e.data)("ngForTrackBy",e.trackByFn),c.yb(1),c.gc("ngSwitch",e.workMode),c.yb(1),c.gc("ngSwitchCase","animation"),c.yb(1),c.gc("ngSwitchCase","video"),c.yb(1),c.gc("ngSwitchCase","mobile"),c.yb(3),c.gc("src",c.dc(27,12,e.reelVideoUrl,"resourceUrl"),c.rc))},directives:[n.j,n.m,n.n,u.a,r.i,n.l],pipes:[p.a],styles:[".category-header[_ngcontent-%COMP%]{height:420px;outline:1px solid hsla(0,0%,100%,.2);overflow:hidden}.category-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .category-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-family:gilroy-bold;margin-top:200px;font-size:64px;line-height:1;letter-spacing:1px;text-transform:capitalize;color:#fff}.category-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:48px;margin-bottom:30px;outline:none;width:280px;height:72px;border:1px solid #fff;font-weight:600;font-size:24px;line-height:24px;text-align:center;letter-spacing:1px;text-transform:uppercase;color:#fff;background-color:transparent}.category-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{color:#000}.category-body[_ngcontent-%COMP%]{padding-bottom:50px}.category-body-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .category-body-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:50px;margin-bottom:50px;font-family:gilroy-bold;font-style:normal;font-weight:700;font-size:64px;line-height:1;letter-spacing:1px;text-transform:capitalize;color:#fff}.category-body-item[_ngcontent-%COMP%]{cursor:pointer;position:relative;height:406px;outline:1px solid #fff;margin:1px;background-color:#000;background-position:top;background-repeat:no-repeat;background-size:135%;display:block}.category-body-item[_ngcontent-%COMP%]:active, .category-body-item[_ngcontent-%COMP%]:focus, .category-body-item[_ngcontent-%COMP%]:hover{text-decoration:none;-webkit-animation:shrink 2s infinite alternate;animation:shrink 2s infinite alternate;color:#fff}.category-body-item[_ngcontent-%COMP%]:active   .category-body-item-info[_ngcontent-%COMP%], .category-body-item[_ngcontent-%COMP%]:focus   .category-body-item-info[_ngcontent-%COMP%], .category-body-item[_ngcontent-%COMP%]:hover   .category-body-item-info[_ngcontent-%COMP%]{height:150px;background-color:#fff;border-top:1px solid #cdcdcd}.category-body-item[_ngcontent-%COMP%]:active   .category-body-item-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .category-body-item[_ngcontent-%COMP%]:active   .category-body-item-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .category-body-item[_ngcontent-%COMP%]:focus   .category-body-item-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .category-body-item[_ngcontent-%COMP%]:focus   .category-body-item-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .category-body-item[_ngcontent-%COMP%]:hover   .category-body-item-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .category-body-item[_ngcontent-%COMP%]:hover   .category-body-item-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#000}.category-body-item-info[_ngcontent-%COMP%]{height:120px;position:absolute;bottom:0;width:100%;border-top:1px solid #fff;transition:all .5s ease;background-color:#1a1a1a}.category-body-item-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:600;font-size:24px;margin-top:22px}.category-body-item-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .category-body-item-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-style:normal;line-height:24px;letter-spacing:1px;text-transform:capitalize;color:#fff;margin-left:70px;margin-right:10px}.category-body-item-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:300;font-size:14px;margin-top:24px}@media (hover),(min--moz-device-pixel-ratio:0),(min-width:0\\0){.category-body-item[_ngcontent-%COMP%]:active, .category-body-item[_ngcontent-%COMP%]:focus, .category-body-item[_ngcontent-%COMP%]:hover{-webkit-animation:shrink 2s infinite alternate;animation:shrink 2s infinite alternate;color:#fff}.category-body-item[_ngcontent-%COMP%]:active   .category-body-item-info[_ngcontent-%COMP%], .category-body-item[_ngcontent-%COMP%]:focus   .category-body-item-info[_ngcontent-%COMP%], .category-body-item[_ngcontent-%COMP%]:hover   .category-body-item-info[_ngcontent-%COMP%]{height:150px;background-color:#fff;border-top:1px solid #cdcdcd}.category-body-item[_ngcontent-%COMP%]:active   .category-body-item-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .category-body-item[_ngcontent-%COMP%]:active   .category-body-item-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .category-body-item[_ngcontent-%COMP%]:focus   .category-body-item-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .category-body-item[_ngcontent-%COMP%]:focus   .category-body-item-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .category-body-item[_ngcontent-%COMP%]:hover   .category-body-item-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .category-body-item[_ngcontent-%COMP%]:hover   .category-body-item-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#000}}.category-paragraph[_ngcontent-%COMP%]{font-family:gilroy;font-style:normal;font-weight:400;font-size:18px;color:#fff}.video-background[_ngcontent-%COMP%]{background:#000;position:relative;top:-100%;right:0;bottom:0;left:0;z-index:-99;height:100%}.video-background[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%], .video-foreground[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}@media (min-aspect-ratio:16/9){.video-foreground[_ngcontent-%COMP%]{height:300%;top:-100%}}@media (max-aspect-ratio:16/9){.video-foreground[_ngcontent-%COMP%]{width:300%;left:-100%}}@-webkit-keyframes shrink{0%{background-size:135%}to{background-size:150%}}@keyframes shrink{0%{background-size:135%}to{background-size:150%}}"]}),t})();var _=o("+G0P"),v=o("AKxs");const O=[{path:"",component:m}];let P=(()=>{class t{}return t.\u0275mod=c.Ib({type:t}),t.\u0275inj=c.Hb({factory:function(e){return new(e||t)},imports:[[n.b,r.j.forChild(O),_.a,v.a]]}),t})()},mbIT:function(t,e,o){"use strict";e.isArray=function(){return Array.isArray||function(t){return t&&"number"==typeof t.length}}()},n3uD:function(t,e,o){"use strict";var n=!1;e.config={Promise:void 0,set useDeprecatedSynchronousErrorHandling(t){if(t){var e=new Error;console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n"+e.stack)}else n&&console.log("RxJS: Back to a better error behavior. Thank you. <3");n=t},get useDeprecatedSynchronousErrorHandling(){return n}}},"p//D":function(t,e,o){"use strict";e.rxSubscriber=function(){return"function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random()}(),e.$$rxSubscriber=e.rxSubscriber},pshJ:function(t,e,o){"use strict";e.isFunction=function(t){return"function"==typeof t}},"zB/H":function(t,e,o){"use strict";var n=o("mbIT"),r=o("GMZp"),i=o("pshJ"),s=o("LBXl");function c(t){return t.reduce(function(t,e){return t.concat(e instanceof s.UnsubscriptionError?e.errors:e)},[])}e.Subscription=function(){function t(t){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,t&&(this._ctorUnsubscribe=!0,this._unsubscribe=t)}var e;return t.prototype.unsubscribe=function(){var e;if(!this.closed){var o=this._parentOrParents,a=this._ctorUnsubscribe,u=this._unsubscribe,p=this._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,o instanceof t)o.remove(this);else if(null!==o)for(var h=0;h<o.length;++h)o[h].remove(this);if(i.isFunction(u)){a&&(this._unsubscribe=void 0);try{u.call(this)}catch(d){e=d instanceof s.UnsubscriptionError?c(d.errors):[d]}}if(n.isArray(p)){h=-1;for(var l=p.length;++h<l;){var b=p[h];if(r.isObject(b))try{b.unsubscribe()}catch(d){e=e||[],d instanceof s.UnsubscriptionError?e=e.concat(c(d.errors)):e.push(d)}}}if(e)throw new s.UnsubscriptionError(e)}},t.prototype.add=function(e){var o=e;if(!e)return t.EMPTY;switch(typeof e){case"function":o=new t(e);case"object":if(o===this||o.closed||"function"!=typeof o.unsubscribe)return o;if(this.closed)return o.unsubscribe(),o;if(!(o instanceof t)){var n=o;(o=new t)._subscriptions=[n]}break;default:throw new Error("unrecognized teardown "+e+" added to Subscription.")}var r=o._parentOrParents;if(null===r)o._parentOrParents=this;else if(r instanceof t){if(r===this)return o;o._parentOrParents=[r,this]}else{if(-1!==r.indexOf(this))return o;r.push(this)}var i=this._subscriptions;return null===i?this._subscriptions=[o]:i.push(o),o},t.prototype.remove=function(t){var e=this._subscriptions;if(e){var o=e.indexOf(t);-1!==o&&e.splice(o,1)}},t.EMPTY=((e=new t).closed=!0,e),t}()}}]);