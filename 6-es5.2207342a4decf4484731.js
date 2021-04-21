!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"4ik+":function(t,e,o){"use strict";var r,n=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),i=o("FWf1");e.filter=function(t,e){return function(o){return o.lift(new s(t,e))}};var s=function(){function t(t,e){this.predicate=t,this.thisArg=e}return t.prototype.call=function(t,e){return e.subscribe(new a(t,this.predicate,this.thisArg))},t}(),a=function(t){function e(e,o,r){var n=t.call(this,e)||this;return n.predicate=o,n.thisArg=r,n.count=0,n}return n(e,t),e.prototype._next=function(t){var e;try{e=this.predicate.call(this.thisArg,t,this.count++)}catch(o){return void this.destination.error(o)}e&&this.destination.next(t)},e}(i.Subscriber)},FWf1:function(t,e,o){"use strict";var r,n=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),i=o("pshJ"),s=o("GiSu"),a=o("zB/H"),c=o("p//D"),u=o("n3uD"),p=o("MkmW"),l=function(t){function e(o,r,n){var i=t.call(this)||this;switch(i.syncErrorValue=null,i.syncErrorThrown=!1,i.syncErrorThrowable=!1,i.isStopped=!1,arguments.length){case 0:i.destination=s.empty;break;case 1:if(!o){i.destination=s.empty;break}if("object"==typeof o){o instanceof e?(i.syncErrorThrowable=o.syncErrorThrowable,i.destination=o,o.add(i)):(i.syncErrorThrowable=!0,i.destination=new h(i,o));break}default:i.syncErrorThrowable=!0,i.destination=new h(i,o,r,n)}return i}return n(e,t),e.prototype[c.rxSubscriber]=function(){return this},e.create=function(t,o,r){var n=new e(t,o,r);return n.syncErrorThrowable=!1,n},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this))},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){this.destination.error(t),this.unsubscribe()},e.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},e.prototype._unsubscribeAndRecycle=function(){var t=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=t,this},e}(a.Subscription);e.Subscriber=l;var h=function(t){function e(e,o,r,n){var a,c=t.call(this)||this;c._parentSubscriber=e;var u=c;return i.isFunction(o)?a=o:o&&(a=o.next,r=o.error,n=o.complete,o!==s.empty&&(u=Object.create(o),i.isFunction(u.unsubscribe)&&c.add(u.unsubscribe.bind(u)),u.unsubscribe=c.unsubscribe.bind(c))),c._context=u,c._next=a,c._error=r,c._complete=n,c}return n(e,t),e.prototype.next=function(t){if(!this.isStopped&&this._next){var e=this._parentSubscriber;u.config.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?this.__tryOrSetError(e,this._next,t)&&this.unsubscribe():this.__tryOrUnsub(this._next,t)}},e.prototype.error=function(t){if(!this.isStopped){var e=this._parentSubscriber,o=u.config.useDeprecatedSynchronousErrorHandling;if(this._error)o&&e.syncErrorThrowable?(this.__tryOrSetError(e,this._error,t),this.unsubscribe()):(this.__tryOrUnsub(this._error,t),this.unsubscribe());else if(e.syncErrorThrowable)o?(e.syncErrorValue=t,e.syncErrorThrown=!0):p.hostReportError(t),this.unsubscribe();else{if(this.unsubscribe(),o)throw t;p.hostReportError(t)}}},e.prototype.complete=function(){var t=this;if(!this.isStopped){var e=this._parentSubscriber;if(this._complete){var o=function(){return t._complete.call(t._context)};u.config.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?(this.__tryOrSetError(e,o),this.unsubscribe()):(this.__tryOrUnsub(o),this.unsubscribe())}else this.unsubscribe()}},e.prototype.__tryOrUnsub=function(t,e){try{t.call(this._context,e)}catch(o){if(this.unsubscribe(),u.config.useDeprecatedSynchronousErrorHandling)throw o;p.hostReportError(o)}},e.prototype.__tryOrSetError=function(t,e,o){if(!u.config.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{e.call(this._context,o)}catch(r){return u.config.useDeprecatedSynchronousErrorHandling?(t.syncErrorValue=r,t.syncErrorThrown=!0,!0):(p.hostReportError(r),!0)}return!1},e.prototype._unsubscribe=function(){var t=this._parentSubscriber;this._context=null,this._parentSubscriber=null,t.unsubscribe()},e}(l);e.SafeSubscriber=h},GMZp:function(t,e,o){"use strict";e.isObject=function(t){return null!==t&&"object"==typeof t}},GiSu:function(t,e,o){"use strict";var r=o("n3uD"),n=o("MkmW");e.empty={closed:!0,next:function(t){},error:function(t){if(r.config.useDeprecatedSynchronousErrorHandling)throw t;n.hostReportError(t)},complete:function(){}}},LBXl:function(t,e,o){"use strict";e.UnsubscriptionError=function(){function t(t){return Error.call(this),this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map(function(t,e){return e+1+") "+t.toString()}).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t,this}return t.prototype=Object.create(Error.prototype),t}()},MkmW:function(t,e,o){"use strict";e.hostReportError=function(t){setTimeout(function(){throw t},0)}},bw5h:function(o,r,n){"use strict";n.r(r),n.d(r,"CategoryModule",function(){return M});var i=n("ofXK"),s=n("tyNb"),a=n("4ik+"),c=n("8UQ/"),u=n("fXoL"),p=n("jhN1"),l=n("jSPT"),h=n("Knxr"),b=n("YYwF");function d(t,e){1&t&&(u.Qb(0),u.Sb(1,"p",18),u.Bc(2," Looking for reaching your target audience in such a way your users expect from you? Consider motion graphics and animated promotional videos for business! "),u.Rb(),u.Sb(3,"p",19),u.Bc(4," There are too many pros of animated promotional videos to fit them in just a few words, but in a nutshell, this is the top way to attract attention to your business, easily explain any complex concept, visualize your problem-solving ideas with motion graphics and make your users dwell on your website and social media profiles. Being the top-consumed content type to date, promotion animation is able to power and skyrocket your marketing strategy. "),u.Rb(),u.Sb(5,"p",19),u.Bc(6," Wonder what are the other benefits an animated promo video can bring to your table? Reach us to discover them! "),u.Rb(),u.Pb())}function f(t,e){1&t&&(u.Qb(0),u.Sb(1,"p",18),u.Bc(2," Want to get an all-in-one solution for your marketing strategies, interaction with customers and partners, and attracting investments to your future projects? Creative video production potential goes beyond these tasks! "),u.Rb(),u.Sb(3,"p",19),u.Bc(4," In 2021, an average Internet user is expected to spend 100 minutes per day watching online videos. This is the right time and place to catch their attention with your brand voice, marketing message, and unique value proposition revealed in your engaging video. What is more, the potential of video production for business is so unlimited that it can be easily used for any project, regardless of the specifics. The only thing you need is some technical skills and knowledge, a bit of creativity, and a video production agency you may consult with any time. "),u.Rb(),u.Sb(5,"p",19),u.Bc(6," Ready to sharpen your video marketing strategy for 2020 and beyond? We are here to make your ideas happen! "),u.Rb(),u.Pb())}function g(t,e){1&t&&(u.Qb(0),u.Sb(1,"p",18),u.Bc(2," In a dynamic mobile application market, the winner is the one who can offer the best solution to the user's problem for a reasonable fee, combining simplicity and quality within one application. The simplicity and quality as the parts of the whole may be described with one word - mobile user experience. "),u.Rb(),u.Sb(3,"p",19),u.Bc(4," The experience your mobile app offers to your users may become your competitive edge or the reason to never use your solution again. "),u.Rb(),u.Sb(5,"p",19),u.Bc(6," With the first and the ultimate goal in mind, we are here to offer you the high-end mobile UI/UX design creation to meet the changing expectations of your target users, follow the latest mobile and web design trends, and add value to your offer through the engaging and enjoyable mobile user experience (UX). "),u.Rb(),u.Sb(7,"p",19),u.Bc(8," The top-notch UI and UX design will never be a challenge for your project since our mobile developers are right here to help with your mobile design architecture and prototyping. Feel free to review the successful projects we\u2019ve contributed to and get in touch with us for more details and instant assistance in mobile UI design and development! "),u.Rb(),u.Pb())}var y=function(t){return["/post",t]},m=function(t,e,o){return{pageTitle:t,metaKeywords:e,metaDescritpion:o}},v=function(t){return{active:t}};function w(t,e){if(1&t&&(u.Sb(0,"div",20),u.Sb(1,"a",21),u.Zb("touchstart",function(){return e.$implicit.active=1})("touchend",function(){return e.$implicit.active=0})("mouseleave",function(){return e.$implicit.active=0}),u.Ob(2,"app-picture",22),u.Sb(3,"div",23),u.Sb(4,"h3"),u.Bc(5),u.Rb(),u.Sb(6,"p"),u.Bc(7),u.Rb(),u.Rb(),u.Rb(),u.Rb()),2&t){var o=e.$implicit;u.Bb(1),u.jc("routerLink",u.nc(6,y,o.urlTitle))("state",u.oc(8,m,o.pageTitle,o.metaKeywords,o.metaDescritpion))("ngClass",u.nc(12,v,o.active)),u.Bb(1),u.jc("imagesData",o.imagePreview),u.Bb(3),u.Cc(o.title),u.Bb(2),u.Cc(o.subtitle)}}var _,S,O=((_=function(){function o(e,r,n,i){var c=this;t(this,o),this.router=e,this.postsService=r,this.titleService=n,this.metaService=i,this.title="",this.videoUrl="",this.reelVideoUrl="",this.pageTitle="",this.metaKeywords=[],this.metaDescritpion="",this.categories=["video","animation","mobile"],this.router.events.pipe(Object(a.filter)(function(t){return t instanceof s.c})).subscribe(function(t){if(c.categories.indexOf(t.url)){var e=t.url.split("/").filter(function(t){return!!t}),o=e[e.length-1];c.categories.includes(o)&&(c.workMode=o,c.setStatic(),c.getDataByCategory()),c.pageTitle&&c.titleService.setTitle(c.pageTitle),Array.isArray(c.metaKeywords)&&c.metaKeywords.length&&c.metaService.updateTag({name:"keywords",content:c.metaKeywords.join(",")}),c.metaDescritpion&&c.metaService.updateTag({name:"description",content:c.metaDescritpion})}})}var r,n,i;return r=o,(n=[{key:"ngOnInit",value:function(){}},{key:"ngOnDestroy",value:function(){}},{key:"goToPost",value:function(t){this.postsService.currentPost=t,localStorage.setItem("current_post",JSON.stringify(t)),this.router.navigate(["/post"])}},{key:"setStatic",value:function(){switch(this.workMode){case"video":this.title="Video Production",this.reelVideoUrl="https://player.vimeo.com/video/481588124?title=0&byline=0&portrait=0&autoplay=1&loop=1&autopause=0",this.videoUrl="https://www.youtube.com/embed/W0LHTWG-UmQ?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=W0LHTWG-UmQ",this.pageTitle="Creative video production | Geek Powr Media",this.metaKeywords=["creative video production","video production","video production agency"],this.metaDescritpion="Want to get an all-in-one solution for your marketing strategies, interaction with customers and partners, and attracting investments to your future projects? Video production agency potential goes beyond these tasks!";break;case"animation":this.title="Promo animation",this.reelVideoUrl="https://player.vimeo.com/video/479983049?title=0&byline=0&portrait=0&autoplay=1&loop=1&autopause=0",this.videoUrl="https://www.youtube.com/embed/f5ClCTAuIZc?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=W2YoihjFTJ0",this.pageTitle="Promo animation - get animated promotional videos`",this.metaKeywords=["promo animation","animated promotional video","promotion animation","animated promo video","animated promotional videos for business"],this.metaDescritpion="Consider motion graphics and animated promotional videos for business!";break;case"mobile":this.title="Mobile & Platforms",this.reelVideoUrl="https://player.vimeo.com/video/479493339?title=0&byline=0&portrait=0&autoplay=1&loop=1&autopause=0",this.videoUrl="https://www.youtube.com/embed/CVsI_okkQEk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=CVsI_okkQEk",this.pageTitle="Mobile web design | Geek Powr Media",this.metaKeywords=["architecture mobile design","mobile web design","mobile ui design","mobile ux","mobile design ui / ux","mobile ux design","ux design for mobile developers"],this.metaDescritpion="Create a unique mobile design ui/ux with us. Our professionals implement only the best ideas."}}},{key:"trackByFn",value:function(t,e){return e.id}},{key:"sortByOrder",value:function(t,e){return t.order<e.order?-1:t.order>e.order?1:0}},{key:"getDataByCategory",value:function(){var t=this,e=this.postsService.getData().filter(function(e){return e.category===t.workMode});this.data=e.sort(this.sortByOrder)}}])&&e(r.prototype,n),i&&e(r,i),o}()).\u0275fac=function(t){return new(t||_)(u.Nb(s.f),u.Nb(c.a),u.Nb(p.d),u.Nb(p.c))},_.\u0275cmp=u.Hb({type:_,selectors:[["app-category"]],decls:31,vars:15,consts:[[1,"category"],[1,"category-header"],[1,"container"],[1,"row"],[1,"col"],[1,"hvr-sweep-to-right",3,"click"],[1,"video-background"],[1,"video-foreground"],["frameBorder","0","allowfullscreen","","loading","lazy",3,"src"],[1,"category-body"],[1,"row","flex-column-reverse"],[1,"col-12"],[1,"row",3,"ngSwitch"],[4,"ngSwitchCase"],[1,"category-body-title","w-100"],["class","col-lg-4 p-0",4,"ngFor","ngForOf","ngForTrackBy"],["videoPopUp",""],["frameBorder","0","allowfullscreen","","allow","autoplay; fullscreen","loading","lazy",1,"frame",3,"src"],[1,"col-12","mt-5","pt-5","category-paragraph"],[1,"col-12","category-paragraph"],[1,"col-lg-4","p-0"],[1,"category-body-item",3,"routerLink","state","ngClass","touchstart","touchend","mouseleave"],[3,"imagesData"],[1,"category-body-item-info"]],template:function(t,e){if(1&t){var o=u.Tb();u.Sb(0,"div",0),u.Sb(1,"div",1),u.Sb(2,"div",2),u.Sb(3,"div",3),u.Sb(4,"div",4),u.Sb(5,"h1"),u.Bc(6),u.Rb(),u.Sb(7,"button",5),u.Zb("click",function(){return u.tc(o),u.rc(28).open()}),u.Bc(8," View Latest Reel "),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Sb(9,"div",6),u.Sb(10,"div",7),u.Ob(11,"iframe",8),u.ec(12,"safe"),u.Rb(),u.Rb(),u.Rb(),u.Sb(13,"div",9),u.Sb(14,"div",2),u.Sb(15,"div",10),u.Sb(16,"div",11),u.Sb(17,"div",12),u.Ac(18,d,7,0,"ng-container",13),u.Ac(19,f,7,0,"ng-container",13),u.Ac(20,g,9,0,"ng-container",13),u.Rb(),u.Rb(),u.Sb(21,"div",11),u.Sb(22,"div",3),u.Sb(23,"div",14),u.Sb(24,"h2"),u.Bc(25,"Latest and Greatest"),u.Rb(),u.Rb(),u.Ac(26,w,8,14,"div",15),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Sb(27,"app-video-popup",null,16),u.Ob(29,"iframe",17),u.ec(30,"safe"),u.Rb()}2&t&&(u.Bb(6),u.Cc(e.title),u.Bb(5),u.jc("src",u.gc(12,9,e.videoUrl,"resourceUrl"),u.vc),u.Bb(6),u.jc("ngSwitch",e.workMode),u.Bb(1),u.jc("ngSwitchCase","animation"),u.Bb(1),u.jc("ngSwitchCase","video"),u.Bb(1),u.jc("ngSwitchCase","mobile"),u.Bb(6),u.jc("ngForOf",e.data)("ngForTrackBy",e.trackByFn),u.Bb(3),u.jc("src",u.gc(30,12,e.reelVideoUrl,"resourceUrl"),u.vc))},directives:[i.m,i.n,i.j,l.a,s.i,i.i,h.a],pipes:[b.a],styles:[".category-header[_ngcontent-%COMP%]{height:420px;outline:1px solid hsla(0,0%,100%,.2);overflow:hidden}.category-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .category-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-family:gilroy-bold;margin-top:200px;font-size:64px;line-height:1;letter-spacing:1px;text-transform:capitalize;color:#fff}.category-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:48px;margin-bottom:30px;outline:none;width:280px;height:72px;border:1px solid #fff;font-weight:600;font-size:24px;line-height:24px;text-align:center;letter-spacing:1px;text-transform:uppercase;color:#fff;background-color:transparent}.category-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{color:#000}.category-body[_ngcontent-%COMP%]{padding-bottom:50px}.category-body-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .category-body-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:50px;margin-bottom:50px;font-family:gilroy-bold;font-style:normal;font-weight:700;font-size:64px;line-height:1;letter-spacing:1px;text-transform:capitalize;color:#fff}.category-body-item[_ngcontent-%COMP%]{cursor:pointer;position:relative;height:406px;outline:1px solid #fff;margin:1px;background-color:#000;background-position:top;background-repeat:no-repeat;background-size:135%;display:block}.category-body-item.active[_ngcontent-%COMP%], .category-body-item[_ngcontent-%COMP%]:hover{text-decoration:none;-webkit-animation:shrink 2s infinite alternate;animation:shrink 2s infinite alternate;color:#fff}.category-body-item.active[_ngcontent-%COMP%]   .category-body-item-info[_ngcontent-%COMP%], .category-body-item[_ngcontent-%COMP%]:hover   .category-body-item-info[_ngcontent-%COMP%]{height:150px;background-color:#fff;border-top:1px solid #cdcdcd}.category-body-item.active[_ngcontent-%COMP%]   .category-body-item-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .category-body-item.active[_ngcontent-%COMP%]   .category-body-item-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .category-body-item[_ngcontent-%COMP%]:hover   .category-body-item-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .category-body-item[_ngcontent-%COMP%]:hover   .category-body-item-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#000}.category-body-item-info[_ngcontent-%COMP%]{height:120px;position:absolute;bottom:0;width:100%;border-top:1px solid #fff;transition:all .5s ease;background-color:#1a1a1a}.category-body-item-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:600;font-size:24px;margin-top:22px}.category-body-item-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .category-body-item-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-style:normal;line-height:24px;letter-spacing:1px;text-transform:capitalize;color:#fff;margin-left:70px;margin-right:10px}.category-body-item-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:300;font-size:14px;margin-top:24px}.category-paragraph[_ngcontent-%COMP%]{font-family:gilroy;font-style:normal;font-weight:400;font-size:18px;color:#fff}.video-background[_ngcontent-%COMP%]{background:#000;position:relative;top:-100%;right:0;bottom:0;left:0;z-index:-99;height:100%}.video-background[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%], .video-foreground[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}@media (min-aspect-ratio:16/9){.video-foreground[_ngcontent-%COMP%]{height:300%;top:-100%}}@media (max-aspect-ratio:16/9){.video-foreground[_ngcontent-%COMP%]{width:300%;left:-100%}}@-webkit-keyframes shrink{0%{background-size:135%}to{background-size:150%}}@keyframes shrink{0%{background-size:135%}to{background-size:150%}}"]}),_),x=n("+G0P"),k=n("4NX6"),P=n("AKxs"),C=[{path:"",component:O}],M=((S=function e(){t(this,e)}).\u0275fac=function(t){return new(t||S)},S.\u0275mod=u.Lb({type:S}),S.\u0275inj=u.Kb({imports:[[i.c,s.j.forChild(C),x.a,P.a,k.a]]}),S)},mbIT:function(t,e,o){"use strict";e.isArray=Array.isArray||function(t){return t&&"number"==typeof t.length}},n3uD:function(t,e,o){"use strict";var r=!1;e.config={Promise:void 0,set useDeprecatedSynchronousErrorHandling(t){if(t){var e=new Error;console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n"+e.stack)}else r&&console.log("RxJS: Back to a better error behavior. Thank you. <3");r=t},get useDeprecatedSynchronousErrorHandling(){return r}}},"p//D":function(t,e,o){"use strict";e.rxSubscriber="function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random(),e.$$rxSubscriber=e.rxSubscriber},pshJ:function(t,e,o){"use strict";e.isFunction=function(t){return"function"==typeof t}},"zB/H":function(t,e,o){"use strict";var r=o("mbIT"),n=o("GMZp"),i=o("pshJ"),s=o("LBXl");function a(t){return t.reduce(function(t,e){return t.concat(e instanceof s.UnsubscriptionError?e.errors:e)},[])}e.Subscription=function(){function t(t){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,t&&(this._ctorUnsubscribe=!0,this._unsubscribe=t)}var e;return t.prototype.unsubscribe=function(){var e;if(!this.closed){var o=this._parentOrParents,c=this._ctorUnsubscribe,u=this._unsubscribe,p=this._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,o instanceof t)o.remove(this);else if(null!==o)for(var l=0;l<o.length;++l)o[l].remove(this);if(i.isFunction(u)){c&&(this._unsubscribe=void 0);try{u.call(this)}catch(d){e=d instanceof s.UnsubscriptionError?a(d.errors):[d]}}if(r.isArray(p)){l=-1;for(var h=p.length;++l<h;){var b=p[l];if(n.isObject(b))try{b.unsubscribe()}catch(d){e=e||[],d instanceof s.UnsubscriptionError?e=e.concat(a(d.errors)):e.push(d)}}}if(e)throw new s.UnsubscriptionError(e)}},t.prototype.add=function(e){var o=e;if(!e)return t.EMPTY;switch(typeof e){case"function":o=new t(e);case"object":if(o===this||o.closed||"function"!=typeof o.unsubscribe)return o;if(this.closed)return o.unsubscribe(),o;if(!(o instanceof t)){var r=o;(o=new t)._subscriptions=[r]}break;default:throw new Error("unrecognized teardown "+e+" added to Subscription.")}var n=o._parentOrParents;if(null===n)o._parentOrParents=this;else if(n instanceof t){if(n===this)return o;o._parentOrParents=[n,this]}else{if(-1!==n.indexOf(this))return o;n.push(this)}var i=this._subscriptions;return null===i?this._subscriptions=[o]:i.push(o),o},t.prototype.remove=function(t){var e=this._subscriptions;if(e){var o=e.indexOf(t);-1!==o&&e.splice(o,1)}},t.EMPTY=((e=new t).closed=!0,e),t}()}}])}();