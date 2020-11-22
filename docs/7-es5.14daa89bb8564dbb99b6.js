!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"4ik+":function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=n("FWf1");e.filter=function(t,e){return function(n){return n.lift(new c(t,e))}};var c=function(){function t(t,e){this.predicate=t,this.thisArg=e}return t.prototype.call=function(t,e){return e.subscribe(new s(t,this.predicate,this.thisArg))},t}(),s=function(t){function e(e,n,o){var r=t.call(this,e)||this;return r.predicate=n,r.thisArg=o,r.count=0,r}return r(e,t),e.prototype._next=function(t){var e;try{e=this.predicate.call(this.thisArg,t,this.count++)}catch(n){return void this.destination.error(n)}e&&this.destination.next(t)},e}(i.Subscriber)},FWf1:function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=n("pshJ"),c=n("GiSu"),s=n("zB/H"),a=n("p//D"),u=n("n3uD"),b=n("MkmW"),p=function(t){function e(n,o,r){var i=t.call(this)||this;switch(i.syncErrorValue=null,i.syncErrorThrown=!1,i.syncErrorThrowable=!1,i.isStopped=!1,arguments.length){case 0:i.destination=c.empty;break;case 1:if(!n){i.destination=c.empty;break}if("object"==typeof n){n instanceof e?(i.syncErrorThrowable=n.syncErrorThrowable,i.destination=n,n.add(i)):(i.syncErrorThrowable=!0,i.destination=new l(i,n));break}default:i.syncErrorThrowable=!0,i.destination=new l(i,n,o,r)}return i}return r(e,t),e.prototype[a.rxSubscriber]=function(){return this},e.create=function(t,n,o){var r=new e(t,n,o);return r.syncErrorThrowable=!1,r},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this))},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){this.destination.error(t),this.unsubscribe()},e.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},e.prototype._unsubscribeAndRecycle=function(){var t=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=t,this},e}(s.Subscription);e.Subscriber=p;var l=function(t){function e(e,n,o,r){var s,a=t.call(this)||this;a._parentSubscriber=e;var u=a;return i.isFunction(n)?s=n:n&&(s=n.next,o=n.error,r=n.complete,n!==c.empty&&(u=Object.create(n),i.isFunction(u.unsubscribe)&&a.add(u.unsubscribe.bind(u)),u.unsubscribe=a.unsubscribe.bind(a))),a._context=u,a._next=s,a._error=o,a._complete=r,a}return r(e,t),e.prototype.next=function(t){if(!this.isStopped&&this._next){var e=this._parentSubscriber;u.config.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?this.__tryOrSetError(e,this._next,t)&&this.unsubscribe():this.__tryOrUnsub(this._next,t)}},e.prototype.error=function(t){if(!this.isStopped){var e=this._parentSubscriber,n=u.config.useDeprecatedSynchronousErrorHandling;if(this._error)n&&e.syncErrorThrowable?(this.__tryOrSetError(e,this._error,t),this.unsubscribe()):(this.__tryOrUnsub(this._error,t),this.unsubscribe());else if(e.syncErrorThrowable)n?(e.syncErrorValue=t,e.syncErrorThrown=!0):b.hostReportError(t),this.unsubscribe();else{if(this.unsubscribe(),n)throw t;b.hostReportError(t)}}},e.prototype.complete=function(){var t=this;if(!this.isStopped){var e=this._parentSubscriber;if(this._complete){var n=function(){return t._complete.call(t._context)};u.config.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?(this.__tryOrSetError(e,n),this.unsubscribe()):(this.__tryOrUnsub(n),this.unsubscribe())}else this.unsubscribe()}},e.prototype.__tryOrUnsub=function(t,e){try{t.call(this._context,e)}catch(n){if(this.unsubscribe(),u.config.useDeprecatedSynchronousErrorHandling)throw n;b.hostReportError(n)}},e.prototype.__tryOrSetError=function(t,e,n){if(!u.config.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{e.call(this._context,n)}catch(o){return u.config.useDeprecatedSynchronousErrorHandling?(t.syncErrorValue=o,t.syncErrorThrown=!0,!0):(b.hostReportError(o),!0)}return!1},e.prototype._unsubscribe=function(){var t=this._parentSubscriber;this._context=null,this._parentSubscriber=null,t.unsubscribe()},e}(p);e.SafeSubscriber=l},GMZp:function(t,e,n){"use strict";e.isObject=function(t){return null!==t&&"object"==typeof t}},GiSu:function(t,e,n){"use strict";var o=n("n3uD"),r=n("MkmW");e.empty={closed:!0,next:function(t){},error:function(t){if(o.config.useDeprecatedSynchronousErrorHandling)throw t;r.hostReportError(t)},complete:function(){}}},LBXl:function(t,e,n){"use strict";e.UnsubscriptionError=function(){function t(t){return Error.call(this),this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map(function(t,e){return e+1+") "+t.toString()}).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t,this}return t.prototype=Object.create(Error.prototype),t}()},MkmW:function(t,e,n){"use strict";e.hostReportError=function(t){setTimeout(function(){throw t},0)}},bw5h:function(n,o,r){"use strict";r.r(o),r.d(o,"CategoryModule",function(){return v});var i=r("ofXK"),c=r("tyNb"),s=r("4ik+"),a=r("8UQ/"),u=r("fXoL"),b=r("jSPT"),p=r("YYwF"),l=function(t){return{"background-image":t}},f=function(t){return["/post",t]};function h(t,e){if(1&t&&(u.Pb(0,"div",14),u.Pb(1,"div",15),u.Pb(2,"div",16),u.Pb(3,"h3"),u.wc(4),u.Ob(),u.Pb(5,"p"),u.wc(6),u.Ob(),u.Ob(),u.Ob(),u.Ob()),2&t){var n=e.$implicit;u.yb(1),u.gc("ngStyle",u.jc(4,l,"url("+n.imageUrl+")"))("routerLink",u.jc(6,f,n.urlTitle)),u.yb(3),u.xc(n.title),u.yb(2),u.xc(n.subtitle)}}var y,d,g=((y=function(){function n(e,o){var r=this;t(this,n),this.router=e,this.postsService=o,this.title="",this.videoUrl="",this.reelVideoUrl="",this.categories=["video","animation","mobile"],this.router.events.pipe(Object(s.filter)(function(t){return t instanceof c.b})).subscribe(function(t){if(r.categories.indexOf(t.url)){var e=t.url.split("/"),n=e[e.length-1];r.categories.includes(n)&&(r.workMode=n,r.setStatic(),r.getDataByCategory())}})}var o,r,i;return o=n,(r=[{key:"ngOnInit",value:function(){}},{key:"ngOnDestroy",value:function(){}},{key:"goToPost",value:function(t){this.postsService.currentPost=t,localStorage.setItem("current_post",JSON.stringify(t)),this.router.navigate(["/post"])}},{key:"setStatic",value:function(){switch(this.workMode){case"video":this.title="Video Production",this.reelVideoUrl="https://player.vimeo.com/video/479983049?title=0&byline=0&portrait=0&autoplay=1&loop=1&autopause=0",this.videoUrl="https://www.youtube.com/embed/W0LHTWG-UmQ?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=W0LHTWG-UmQ";break;case"animation":this.title="Animation",this.reelVideoUrl="https://player.vimeo.com/video/479983049?title=0&byline=0&portrait=0&autoplay=1&loop=1&autopause=0",this.videoUrl="https://www.youtube.com/embed/QyQ_6qbsvnY?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=QyQ_6qbsvnY";break;case"mobile":this.title="Mobile & Platforms",this.reelVideoUrl="https://player.vimeo.com/video/479493339?title=0&byline=0&portrait=0&autoplay=1&loop=1&autopause=0",this.videoUrl="https://www.youtube.com/embed/eHX86nhM4Eg?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=eHX86nhM4Eg"}}},{key:"trackByFn",value:function(t,e){return e.id}},{key:"sortByOrder",value:function(t,e){return t.order<e.order?-1:t.order>e.order?1:0}},{key:"getDataByCategory",value:function(){var t=this,e=this.postsService.getData().filter(function(e){return e.category===t.workMode});this.data=e.sort(this.sortByOrder)}}])&&e(o.prototype,r),i&&e(o,i),n}()).\u0275fac=function(t){return new(t||y)(u.Kb(c.e),u.Kb(a.a))},y.\u0275cmp=u.Eb({type:y,selectors:[["app-category"]],decls:24,vars:11,consts:[[1,"category"],[1,"category-header"],[1,"container"],[1,"row"],[1,"col"],[1,"hvr-sweep-to-right",3,"click"],[1,"video-background"],[1,"video-foreground"],["frameBorder","0","allowfullscreen","",3,"src"],[1,"category-body"],[1,"category-body-title"],["class","col-lg-4 p-0",4,"ngFor","ngForOf","ngForTrackBy"],["videoPopUp",""],["frameBorder","0","allowfullscreen","","allow","autoplay; fullscreen",1,"frame",3,"src"],[1,"col-lg-4","p-0"],[1,"category-body-item",3,"ngStyle","routerLink"],[1,"category-body-item-info"]],template:function(t,e){if(1&t){var n=u.Qb();u.Pb(0,"div",0),u.Pb(1,"div",1),u.Pb(2,"div",2),u.Pb(3,"div",3),u.Pb(4,"div",4),u.Pb(5,"h3"),u.wc(6),u.Ob(),u.Pb(7,"button",5),u.Wb("click",function(){return u.oc(n),u.mc(21).open()}),u.wc(8," View Latest Reel "),u.Ob(),u.Ob(),u.Ob(),u.Ob(),u.Pb(9,"div",6),u.Pb(10,"div",7),u.Lb(11,"iframe",8),u.bc(12,"safe"),u.Ob(),u.Ob(),u.Ob(),u.Pb(13,"div",9),u.Pb(14,"div",2),u.Pb(15,"div",10),u.Pb(16,"h2"),u.wc(17,"Latest and Greatest"),u.Ob(),u.Ob(),u.Pb(18,"div",3),u.vc(19,h,7,8,"div",11),u.Ob(),u.Ob(),u.Ob(),u.Ob(),u.Pb(20,"app-video-popup",null,12),u.Lb(22,"iframe",13),u.bc(23,"safe"),u.Ob()}2&t&&(u.yb(6),u.xc(e.title),u.yb(5),u.gc("src",u.dc(12,5,e.videoUrl,"resourceUrl"),u.qc),u.yb(8),u.gc("ngForOf",e.data)("ngForTrackBy",e.trackByFn),u.yb(3),u.gc("src",u.dc(23,8,e.reelVideoUrl,"resourceUrl"),u.qc))},directives:[i.j,b.a,i.l,c.f],pipes:[p.a],styles:[".category-header[_ngcontent-%COMP%]{height:420px;outline:1px solid hsla(0,0%,100%,.2);overflow:hidden}.category-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-family:gilroy-bold;margin-top:200px;font-size:64px;line-height:1;letter-spacing:1px;text-transform:capitalize;color:#fff}.category-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:48px;margin-bottom:30px;outline:none;width:280px;height:72px;border:1px solid #fff;font-weight:600;font-size:24px;line-height:24px;text-align:center;letter-spacing:1px;text-transform:uppercase;color:#fff;background-color:transparent}.category-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{color:#000}.category-body[_ngcontent-%COMP%]{padding-bottom:50px}.category-body-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-family:gilroy-bold;font-style:normal;font-weight:700;font-size:64px;line-height:1;letter-spacing:1px;text-transform:capitalize;color:#fff;margin-top:107px;margin-bottom:49px}.category-body-item[_ngcontent-%COMP%]{cursor:pointer;position:relative;height:406px;outline:1px solid #fff;margin:1px;background-color:#000;background-position:top;background-repeat:no-repeat;background-size:135%}.category-body-item[_ngcontent-%COMP%]:active, .category-body-item[_ngcontent-%COMP%]:focus, .category-body-item[_ngcontent-%COMP%]:hover{-webkit-animation:shrink 2s infinite alternate;animation:shrink 2s infinite alternate;color:#fff}.category-body-item[_ngcontent-%COMP%]:active   .category-body-item-info[_ngcontent-%COMP%], .category-body-item[_ngcontent-%COMP%]:focus   .category-body-item-info[_ngcontent-%COMP%], .category-body-item[_ngcontent-%COMP%]:hover   .category-body-item-info[_ngcontent-%COMP%]{height:150px;background-color:#fff;border-top:1px solid #cdcdcd}.category-body-item[_ngcontent-%COMP%]:active   .category-body-item-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .category-body-item[_ngcontent-%COMP%]:active   .category-body-item-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .category-body-item[_ngcontent-%COMP%]:focus   .category-body-item-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .category-body-item[_ngcontent-%COMP%]:focus   .category-body-item-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .category-body-item[_ngcontent-%COMP%]:hover   .category-body-item-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .category-body-item[_ngcontent-%COMP%]:hover   .category-body-item-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#000}.category-body-item-info[_ngcontent-%COMP%]{height:120px;position:absolute;bottom:0;width:100%;border-top:1px solid #fff;transition:all .5s ease;background-color:#1a1a1a}.category-body-item-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:600;font-size:24px;margin-top:22px}.category-body-item-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .category-body-item-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-style:normal;line-height:24px;letter-spacing:1px;text-transform:capitalize;color:#fff;margin-left:70px;margin-right:10px}.category-body-item-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:300;font-size:14px;margin-top:24px}@media (hover),(min--moz-device-pixel-ratio:0),(min-width:0\\0){.category-body-item[_ngcontent-%COMP%]:active, .category-body-item[_ngcontent-%COMP%]:focus, .category-body-item[_ngcontent-%COMP%]:hover{-webkit-animation:shrink 2s infinite alternate;animation:shrink 2s infinite alternate;color:#fff}.category-body-item[_ngcontent-%COMP%]:active   .category-body-item-info[_ngcontent-%COMP%], .category-body-item[_ngcontent-%COMP%]:focus   .category-body-item-info[_ngcontent-%COMP%], .category-body-item[_ngcontent-%COMP%]:hover   .category-body-item-info[_ngcontent-%COMP%]{height:150px;background-color:#fff;border-top:1px solid #cdcdcd}.category-body-item[_ngcontent-%COMP%]:active   .category-body-item-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .category-body-item[_ngcontent-%COMP%]:active   .category-body-item-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .category-body-item[_ngcontent-%COMP%]:focus   .category-body-item-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .category-body-item[_ngcontent-%COMP%]:focus   .category-body-item-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .category-body-item[_ngcontent-%COMP%]:hover   .category-body-item-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .category-body-item[_ngcontent-%COMP%]:hover   .category-body-item-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#000}}.video-background[_ngcontent-%COMP%]{background:#000;position:relative;top:-100%;right:0;bottom:0;left:0;z-index:-99;height:100%}.video-background[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%], .video-foreground[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}@media (min-aspect-ratio:16/9){.video-foreground[_ngcontent-%COMP%]{height:300%;top:-100%}}@media (max-aspect-ratio:16/9){.video-foreground[_ngcontent-%COMP%]{width:300%;left:-100%}}@-webkit-keyframes shrink{0%{background-size:135%}to{background-size:150%}}@keyframes shrink{0%{background-size:135%}to{background-size:150%}}"]}),y),_=r("+G0P"),m=r("AKxs"),O=[{path:"animation",component:g},{path:"video",component:g},{path:"mobile",component:g}],v=((d=function e(){t(this,e)}).\u0275mod=u.Ib({type:d}),d.\u0275inj=u.Hb({factory:function(t){return new(t||d)},imports:[[i.b,c.i.forChild(O),_.a,m.a]]}),d)},mbIT:function(t,e,n){"use strict";e.isArray=Array.isArray||function(t){return t&&"number"==typeof t.length}},n3uD:function(t,e,n){"use strict";var o=!1;e.config={Promise:void 0,set useDeprecatedSynchronousErrorHandling(t){if(t){var e=new Error;console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n"+e.stack)}else o&&console.log("RxJS: Back to a better error behavior. Thank you. <3");o=t},get useDeprecatedSynchronousErrorHandling(){return o}}},"p//D":function(t,e,n){"use strict";e.rxSubscriber="function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random(),e.$$rxSubscriber=e.rxSubscriber},pshJ:function(t,e,n){"use strict";e.isFunction=function(t){return"function"==typeof t}},"zB/H":function(t,e,n){"use strict";var o=n("mbIT"),r=n("GMZp"),i=n("pshJ"),c=n("LBXl");function s(t){return t.reduce(function(t,e){return t.concat(e instanceof c.UnsubscriptionError?e.errors:e)},[])}e.Subscription=function(){function t(t){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,t&&(this._ctorUnsubscribe=!0,this._unsubscribe=t)}var e;return t.prototype.unsubscribe=function(){var e;if(!this.closed){var n=this._parentOrParents,a=this._ctorUnsubscribe,u=this._unsubscribe,b=this._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,n instanceof t)n.remove(this);else if(null!==n)for(var p=0;p<n.length;++p)n[p].remove(this);if(i.isFunction(u)){a&&(this._unsubscribe=void 0);try{u.call(this)}catch(h){e=h instanceof c.UnsubscriptionError?s(h.errors):[h]}}if(o.isArray(b)){p=-1;for(var l=b.length;++p<l;){var f=b[p];if(r.isObject(f))try{f.unsubscribe()}catch(h){e=e||[],h instanceof c.UnsubscriptionError?e=e.concat(s(h.errors)):e.push(h)}}}if(e)throw new c.UnsubscriptionError(e)}},t.prototype.add=function(e){var n=e;if(!e)return t.EMPTY;switch(typeof e){case"function":n=new t(e);case"object":if(n===this||n.closed||"function"!=typeof n.unsubscribe)return n;if(this.closed)return n.unsubscribe(),n;if(!(n instanceof t)){var o=n;(n=new t)._subscriptions=[o]}break;default:throw new Error("unrecognized teardown "+e+" added to Subscription.")}var r=n._parentOrParents;if(null===r)n._parentOrParents=this;else if(r instanceof t){if(r===this)return n;n._parentOrParents=[r,this]}else{if(-1!==r.indexOf(this))return n;r.push(this)}var i=this._subscriptions;return null===i?this._subscriptions=[n]:i.push(n),n},t.prototype.remove=function(t){var e=this._subscriptions;if(e){var n=e.indexOf(t);-1!==n&&e.splice(n,1)}},t.EMPTY=((e=new t).closed=!0,e),t}()}}])}();