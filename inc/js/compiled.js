!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?e(require("jquery")):e(window.jQuery||window.Zepto)}((function(e){var t,i,o,a,n,r,s=function(){},l=!!window.jQuery,c=e(window),d=function(e,i){t.ev.on("mfp"+e+".mfp",i)},p=function(t,i,o,a){var n=document.createElement("div");return n.className="mfp-"+t,o&&(n.innerHTML=o),a?i&&i.appendChild(n):(n=e(n),i&&n.appendTo(i)),n},u=function(i,o){t.ev.triggerHandler("mfp"+i,o),t.st.callbacks&&(i=i.charAt(0).toLowerCase()+i.slice(1),t.st.callbacks[i]&&t.st.callbacks[i].apply(t,e.isArray(o)?o:[o]))},m=function(i){return i===r&&t.currTemplate.closeBtn||(t.currTemplate.closeBtn=e(t.st.closeMarkup.replace("%title%",t.st.tClose)),r=i),t.currTemplate.closeBtn},f=function(){e.magnificPopup.instance||((t=new s).init(),e.magnificPopup.instance=t)};s.prototype={constructor:s,init:function(){var i=navigator.appVersion;t.isLowIE=t.isIE8=document.all&&!document.addEventListener,t.isAndroid=/android/gi.test(i),t.isIOS=/iphone|ipad|ipod/gi.test(i),t.supportsTransition=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==e.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in e)return!0;return!1}(),t.probablyMobile=t.isAndroid||t.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),o=e(document),t.popupsCache={}},open:function(i){var a;if(!1===i.isObj){t.items=i.items.toArray(),t.index=0;var r,s=i.items;for(a=0;a<s.length;a++)if((r=s[a]).parsed&&(r=r.el[0]),r===i.el[0]){t.index=a;break}}else t.items=e.isArray(i.items)?i.items:[i.items],t.index=i.index||0;if(!t.isOpen){t.types=[],n="",i.mainEl&&i.mainEl.length?t.ev=i.mainEl.eq(0):t.ev=o,i.key?(t.popupsCache[i.key]||(t.popupsCache[i.key]={}),t.currTemplate=t.popupsCache[i.key]):t.currTemplate={},t.st=e.extend(!0,{},e.magnificPopup.defaults,i),t.fixedContentPos="auto"===t.st.fixedContentPos?!t.probablyMobile:t.st.fixedContentPos,t.st.modal&&(t.st.closeOnContentClick=!1,t.st.closeOnBgClick=!1,t.st.showCloseBtn=!1,t.st.enableEscapeKey=!1),t.bgOverlay||(t.bgOverlay=p("bg").on("click.mfp",(function(){t.close()})),t.wrap=p("wrap").attr("tabindex",-1).on("click.mfp",(function(e){t._checkIfClose(e.target)&&t.close()})),t.container=p("container",t.wrap)),t.contentContainer=p("content"),t.st.preloader&&(t.preloader=p("preloader",t.container,t.st.tLoading));var l=e.magnificPopup.modules;for(a=0;a<l.length;a++){var f=l[a];f=f.charAt(0).toUpperCase()+f.slice(1),t["init"+f].call(t)}u("BeforeOpen"),t.st.showCloseBtn&&(t.st.closeBtnInside?(d("MarkupParse",(function(e,t,i,o){i.close_replaceWith=m(o.type)})),n+=" mfp-close-btn-in"):t.wrap.append(m())),t.st.alignTop&&(n+=" mfp-align-top"),t.fixedContentPos?t.wrap.css({overflow:t.st.overflowY,overflowX:"hidden",overflowY:t.st.overflowY}):t.wrap.css({top:c.scrollTop(),position:"absolute"}),(!1===t.st.fixedBgPos||"auto"===t.st.fixedBgPos&&!t.fixedContentPos)&&t.bgOverlay.css({height:o.height(),position:"absolute"}),t.st.enableEscapeKey&&o.on("keyup.mfp",(function(e){27===e.keyCode&&t.close()})),c.on("resize.mfp",(function(){t.updateSize()})),t.st.closeOnContentClick||(n+=" mfp-auto-cursor"),n&&t.wrap.addClass(n);var g=t.wH=c.height(),h={};if(t.fixedContentPos&&t._hasScrollBar(g)){var v=t._getScrollbarSize();v&&(h.marginRight=v)}t.fixedContentPos&&(t.isIE7?e("body, html").css("overflow","hidden"):h.overflow="hidden");var C=t.st.mainClass;return t.isIE7&&(C+=" mfp-ie7"),C&&t._addClassToMFP(C),t.updateItemHTML(),u("BuildControls"),e("html").css(h),t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo||e(document.body)),t._lastFocusedEl=document.activeElement,setTimeout((function(){t.content?(t._addClassToMFP("mfp-ready"),t._setFocus()):t.bgOverlay.addClass("mfp-ready"),o.on("focusin.mfp",t._onFocusIn)}),16),t.isOpen=!0,t.updateSize(g),u("Open"),i}t.updateItemHTML()},close:function(){t.isOpen&&(u("BeforeClose"),t.isOpen=!1,t.st.removalDelay&&!t.isLowIE&&t.supportsTransition?(t._addClassToMFP("mfp-removing"),setTimeout((function(){t._close()}),t.st.removalDelay)):t._close())},_close:function(){u("Close");var i="mfp-removing mfp-ready ";if(t.bgOverlay.detach(),t.wrap.detach(),t.container.empty(),t.st.mainClass&&(i+=t.st.mainClass+" "),t._removeClassFromMFP(i),t.fixedContentPos){var a={marginRight:""};t.isIE7?e("body, html").css("overflow",""):a.overflow="",e("html").css(a)}o.off("keyup.mfp focusin.mfp"),t.ev.off(".mfp"),t.wrap.attr("class","mfp-wrap").removeAttr("style"),t.bgOverlay.attr("class","mfp-bg"),t.container.attr("class","mfp-container"),!t.st.showCloseBtn||t.st.closeBtnInside&&!0!==t.currTemplate[t.currItem.type]||t.currTemplate.closeBtn&&t.currTemplate.closeBtn.detach(),t.st.autoFocusLast&&t._lastFocusedEl&&e(t._lastFocusedEl).focus(),t.currItem=null,t.content=null,t.currTemplate=null,t.prevHeight=0,u("AfterClose")},updateSize:function(e){if(t.isIOS){var i=document.documentElement.clientWidth/window.innerWidth,o=window.innerHeight*i;t.wrap.css("height",o),t.wH=o}else t.wH=e||c.height();t.fixedContentPos||t.wrap.css("height",t.wH),u("Resize")},updateItemHTML:function(){var i=t.items[t.index];t.contentContainer.detach(),t.content&&t.content.detach(),i.parsed||(i=t.parseEl(t.index));var o=i.type;if(u("BeforeChange",[t.currItem?t.currItem.type:"",o]),t.currItem=i,!t.currTemplate[o]){var n=!!t.st[o]&&t.st[o].markup;u("FirstMarkupParse",n),t.currTemplate[o]=!n||e(n)}a&&a!==i.type&&t.container.removeClass("mfp-"+a+"-holder");var r=t["get"+o.charAt(0).toUpperCase()+o.slice(1)](i,t.currTemplate[o]);t.appendContent(r,o),i.preloaded=!0,u("Change",i),a=i.type,t.container.prepend(t.contentContainer),u("AfterChange")},appendContent:function(e,i){t.content=e,e?t.st.showCloseBtn&&t.st.closeBtnInside&&!0===t.currTemplate[i]?t.content.find(".mfp-close").length||t.content.append(m()):t.content=e:t.content="",u("BeforeAppend"),t.container.addClass("mfp-"+i+"-holder"),t.contentContainer.append(t.content)},parseEl:function(i){var o,a=t.items[i];if(a.tagName?a={el:e(a)}:(o=a.type,a={data:a,src:a.src}),a.el){for(var n=t.types,r=0;r<n.length;r++)if(a.el.hasClass("mfp-"+n[r])){o=n[r];break}a.src=a.el.attr("data-mfp-src"),a.src||(a.src=a.el.attr("href"))}return a.type=o||t.st.type||"inline",a.index=i,a.parsed=!0,t.items[i]=a,u("ElementParse",a),t.items[i]},addGroup:function(e,i){var o=function(o){o.mfpEl=this,t._openClick(o,e,i)};i||(i={});var a="click.magnificPopup";i.mainEl=e,i.items?(i.isObj=!0,e.off(a).on(a,o)):(i.isObj=!1,i.delegate?e.off(a).on(a,i.delegate,o):(i.items=e,e.off(a).on(a,o)))},_openClick:function(i,o,a){if((void 0!==a.midClick?a.midClick:e.magnificPopup.defaults.midClick)||!(2===i.which||i.ctrlKey||i.metaKey||i.altKey||i.shiftKey)){var n=void 0!==a.disableOn?a.disableOn:e.magnificPopup.defaults.disableOn;if(n)if(e.isFunction(n)){if(!n.call(t))return!0}else if(c.width()<n)return!0;i.type&&(i.preventDefault(),t.isOpen&&i.stopPropagation()),a.el=e(i.mfpEl),a.delegate&&(a.items=o.find(a.delegate)),t.open(a)}},updateStatus:function(e,o){if(t.preloader){i!==e&&t.container.removeClass("mfp-s-"+i),o||"loading"!==e||(o=t.st.tLoading);var a={status:e,text:o};u("UpdateStatus",a),e=a.status,o=a.text,t.preloader.html(o),t.preloader.find("a").on("click",(function(e){e.stopImmediatePropagation()})),t.container.addClass("mfp-s-"+e),i=e}},_checkIfClose:function(i){if(!e(i).hasClass("mfp-prevent-close")){var o=t.st.closeOnContentClick,a=t.st.closeOnBgClick;if(o&&a)return!0;if(!t.content||e(i).hasClass("mfp-close")||t.preloader&&i===t.preloader[0])return!0;if(i===t.content[0]||e.contains(t.content[0],i)){if(o)return!0}else if(a&&e.contains(document,i))return!0;return!1}},_addClassToMFP:function(e){t.bgOverlay.addClass(e),t.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),t.wrap.removeClass(e)},_hasScrollBar:function(e){return(t.isIE7?o.height():document.body.scrollHeight)>(e||c.height())},_setFocus:function(){(t.st.focus?t.content.find(t.st.focus).eq(0):t.wrap).focus()},_onFocusIn:function(i){if(i.target!==t.wrap[0]&&!e.contains(t.wrap[0],i.target))return t._setFocus(),!1},_parseMarkup:function(t,i,o){var a;o.data&&(i=e.extend(o.data,i)),u("MarkupParse",[t,i,o]),e.each(i,(function(i,o){if(void 0===o||!1===o)return!0;if((a=i.split("_")).length>1){var n=t.find(".mfp-"+a[0]);if(n.length>0){var r=a[1];"replaceWith"===r?n[0]!==o[0]&&n.replaceWith(o):"img"===r?n.is("img")?n.attr("src",o):n.replaceWith(e("<img>").attr("src",o).attr("class",n.attr("class"))):n.attr(a[1],o)}}else t.find(".mfp-"+i).html(o)}))},_getScrollbarSize:function(){if(void 0===t.scrollbarSize){var e=document.createElement("div");e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),t.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return t.scrollbarSize}},e.magnificPopup={instance:null,proto:s.prototype,modules:[],open:function(t,i){return f(),(t=t?e.extend(!0,{},t):{}).isObj=!0,t.index=i||0,this.instance.open(t)},close:function(){return e.magnificPopup.instance&&e.magnificPopup.instance.close()},registerModule:function(t,i){i.options&&(e.magnificPopup.defaults[t]=i.options),e.extend(this.proto,i.proto),this.modules.push(t)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},e.fn.magnificPopup=function(i){f();var o=e(this);if("string"==typeof i)if("open"===i){var a,n=l?o.data("magnificPopup"):o[0].magnificPopup,r=parseInt(arguments[1],10)||0;n.items?a=n.items[r]:(a=o,n.delegate&&(a=a.find(n.delegate)),a=a.eq(r)),t._openClick({mfpEl:a},o,n)}else t.isOpen&&t[i].apply(t,Array.prototype.slice.call(arguments,1));else i=e.extend(!0,{},i),l?o.data("magnificPopup",i):o[0].magnificPopup=i,t.addGroup(o,i);return o};var g,h,v,C=function(){v&&(h.after(v.addClass(g)).detach(),v=null)};e.magnificPopup.registerModule("inline",{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){t.types.push("inline"),d("Close.inline",(function(){C()}))},getInline:function(i,o){if(C(),i.src){var a=t.st.inline,n=e(i.src);if(n.length){var r=n[0].parentNode;r&&r.tagName&&(h||(g=a.hiddenClass,h=p(g),g="mfp-"+g),v=n.after(h).detach().removeClass(g)),t.updateStatus("ready")}else t.updateStatus("error",a.tNotFound),n=e("<div>");return i.inlineElement=n,n}return t.updateStatus("ready"),t._parseMarkup(o,{},i),o}}});var w,y=function(){w&&e(document.body).removeClass(w)},b=function(){y(),t.req&&t.req.abort()};e.magnificPopup.registerModule("ajax",{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){t.types.push("ajax"),w=t.st.ajax.cursor,d("Close.ajax",b),d("BeforeChange.ajax",b)},getAjax:function(i){w&&e(document.body).addClass(w),t.updateStatus("loading");var o=e.extend({url:i.src,success:function(o,a,n){var r={data:o,xhr:n};u("ParseAjax",r),t.appendContent(e(r.data),"ajax"),i.finished=!0,y(),t._setFocus(),setTimeout((function(){t.wrap.addClass("mfp-ready")}),16),t.updateStatus("ready"),u("AjaxContentAdded")},error:function(){y(),i.finished=i.loadError=!0,t.updateStatus("error",t.st.ajax.tError.replace("%url%",i.src))}},t.st.ajax.settings);return t.req=e.ajax(o),""}}});var k,x=function(i){if(i.data&&void 0!==i.data.title)return i.data.title;var o=t.st.image.titleSrc;if(o){if(e.isFunction(o))return o.call(t,i);if(i.el)return i.el.attr(o)||""}return""};e.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var i=t.st.image,o=".image";t.types.push("image"),d("Open"+o,(function(){"image"===t.currItem.type&&i.cursor&&e(document.body).addClass(i.cursor)})),d("Close"+o,(function(){i.cursor&&e(document.body).removeClass(i.cursor),c.off("resize.mfp")})),d("Resize"+o,t.resizeImage),t.isLowIE&&d("AfterChange",t.resizeImage)},resizeImage:function(){var e=t.currItem;if(e&&e.img&&t.st.image.verticalFit){var i=0;t.isLowIE&&(i=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)),e.img.css("max-height",t.wH-i)}},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,k&&clearInterval(k),e.isCheckingImgSize=!1,u("ImageHasSize",e),e.imgHidden&&(t.content&&t.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(e){var i=0,o=e.img[0],a=function(n){k&&clearInterval(k),k=setInterval((function(){o.naturalWidth>0?t._onImageHasSize(e):(i>200&&clearInterval(k),3===++i?a(10):40===i?a(50):100===i&&a(500))}),n)};a(1)},getImage:function(i,o){var a=0,n=function(){i&&(i.img[0].complete?(i.img.off(".mfploader"),i===t.currItem&&(t._onImageHasSize(i),t.updateStatus("ready")),i.hasSize=!0,i.loaded=!0,u("ImageLoadComplete")):++a<200?setTimeout(n,100):r())},r=function(){i&&(i.img.off(".mfploader"),i===t.currItem&&(t._onImageHasSize(i),t.updateStatus("error",s.tError.replace("%url%",i.src))),i.hasSize=!0,i.loaded=!0,i.loadError=!0)},s=t.st.image,l=o.find(".mfp-img");if(l.length){var c=document.createElement("img");c.className="mfp-img",i.el&&i.el.find("img").length&&(c.alt=i.el.find("img").attr("alt")),i.img=e(c).on("load.mfploader",n).on("error.mfploader",r),c.src=i.src,l.is("img")&&(i.img=i.img.clone()),(c=i.img[0]).naturalWidth>0?i.hasSize=!0:c.width||(i.hasSize=!1)}return t._parseMarkup(o,{title:x(i),img_replaceWith:i.img},i),t.resizeImage(),i.hasSize?(k&&clearInterval(k),i.loadError?(o.addClass("mfp-loading"),t.updateStatus("error",s.tError.replace("%url%",i.src))):(o.removeClass("mfp-loading"),t.updateStatus("ready")),o):(t.updateStatus("loading"),i.loading=!0,i.hasSize||(i.imgHidden=!0,o.addClass("mfp-loading"),t.findImageSize(i)),o)}}});var _;e.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e,i=t.st.zoom,o=".zoom";if(i.enabled&&t.supportsTransition){var a,n,r=i.duration,s=function(e){var t=e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),o="all "+i.duration/1e3+"s "+i.easing,a={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},n="transition";return a["-webkit-"+n]=a["-moz-"+n]=a["-o-"+n]=a[n]=o,t.css(a),t},l=function(){t.content.css("visibility","visible")};d("BuildControls"+o,(function(){if(t._allowZoom()){if(clearTimeout(a),t.content.css("visibility","hidden"),!(e=t._getItemToZoom()))return void l();(n=s(e)).css(t._getOffset()),t.wrap.append(n),a=setTimeout((function(){n.css(t._getOffset(!0)),a=setTimeout((function(){l(),setTimeout((function(){n.remove(),e=n=null,u("ZoomAnimationEnded")}),16)}),r)}),16)}})),d("BeforeClose"+o,(function(){if(t._allowZoom()){if(clearTimeout(a),t.st.removalDelay=r,!e){if(!(e=t._getItemToZoom()))return;n=s(e)}n.css(t._getOffset(!0)),t.wrap.append(n),t.content.css("visibility","hidden"),setTimeout((function(){n.css(t._getOffset())}),16)}})),d("Close"+o,(function(){t._allowZoom()&&(l(),n&&n.remove(),e=null)}))}},_allowZoom:function(){return"image"===t.currItem.type},_getItemToZoom:function(){return!!t.currItem.hasSize&&t.currItem.img},_getOffset:function(i){var o,a=(o=i?t.currItem.img:t.st.zoom.opener(t.currItem.el||t.currItem)).offset(),n=parseInt(o.css("padding-top"),10),r=parseInt(o.css("padding-bottom"),10);a.top-=e(window).scrollTop()-n;var s={width:o.width(),height:(l?o.innerHeight():o[0].offsetHeight)-r-n};return void 0===_&&(_=void 0!==document.createElement("p").style.MozTransform),_?s["-moz-transform"]=s.transform="translate("+a.left+"px,"+a.top+"px)":(s.left=a.left,s.top=a.top),s}}});var I=function(e){if(t.currTemplate.iframe){var i=t.currTemplate.iframe.find("iframe");i.length&&(e||(i[0].src="//about:blank"),t.isIE8&&i.css("display",e?"block":"none"))}};e.magnificPopup.registerModule("iframe",{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){t.types.push("iframe"),d("BeforeChange",(function(e,t,i){t!==i&&("iframe"===t?I():"iframe"===i&&I(!0))})),d("Close.iframe",(function(){I()}))},getIframe:function(i,o){var a=i.src,n=t.st.iframe;e.each(n.patterns,(function(){if(a.indexOf(this.index)>-1)return this.id&&(a="string"==typeof this.id?a.substr(a.lastIndexOf(this.id)+this.id.length,a.length):this.id.call(this,a)),a=this.src.replace("%id%",a),!1}));var r={};return n.srcAction&&(r[n.srcAction]=a),t._parseMarkup(o,r,i),t.updateStatus("ready"),o}}});var T=function(e){var i=t.items.length;return e>i-1?e-i:e<0?i+e:e},S=function(e,t,i){return e.replace(/%curr%/gi,t+1).replace(/%total%/gi,i)};e.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var i=t.st.gallery,a=".mfp-gallery";if(t.direction=!0,!i||!i.enabled)return!1;n+=" mfp-gallery",d("Open"+a,(function(){i.navigateByImgClick&&t.wrap.on("click"+a,".mfp-img",(function(){if(t.items.length>1)return t.next(),!1})),o.on("keydown"+a,(function(e){37===e.keyCode?t.prev():39===e.keyCode&&t.next()}))})),d("UpdateStatus"+a,(function(e,i){i.text&&(i.text=S(i.text,t.currItem.index,t.items.length))})),d("MarkupParse"+a,(function(e,o,a,n){var r=t.items.length;a.counter=r>1?S(i.tCounter,n.index,r):""})),d("BuildControls"+a,(function(){if(t.items.length>1&&i.arrows&&!t.arrowLeft){var o=i.arrowMarkup,a=t.arrowLeft=e(o.replace(/%title%/gi,i.tPrev).replace(/%dir%/gi,"left")).addClass("mfp-prevent-close"),n=t.arrowRight=e(o.replace(/%title%/gi,i.tNext).replace(/%dir%/gi,"right")).addClass("mfp-prevent-close");a.click((function(){t.prev()})),n.click((function(){t.next()})),t.container.append(a.add(n))}})),d("Change"+a,(function(){t._preloadTimeout&&clearTimeout(t._preloadTimeout),t._preloadTimeout=setTimeout((function(){t.preloadNearbyImages(),t._preloadTimeout=null}),16)})),d("Close"+a,(function(){o.off(a),t.wrap.off("click"+a),t.arrowRight=t.arrowLeft=null}))},next:function(){t.direction=!0,t.index=T(t.index+1),t.updateItemHTML()},prev:function(){t.direction=!1,t.index=T(t.index-1),t.updateItemHTML()},goTo:function(e){t.direction=e>=t.index,t.index=e,t.updateItemHTML()},preloadNearbyImages:function(){var e,i=t.st.gallery.preload,o=Math.min(i[0],t.items.length),a=Math.min(i[1],t.items.length);for(e=1;e<=(t.direction?a:o);e++)t._preloadItem(t.index+e);for(e=1;e<=(t.direction?o:a);e++)t._preloadItem(t.index-e)},_preloadItem:function(i){if(i=T(i),!t.items[i].preloaded){var o=t.items[i];o.parsed||(o=t.parseEl(i)),u("LazyLoad",o),"image"===o.type&&(o.img=e('<img class="mfp-img" />').on("load.mfploader",(function(){o.hasSize=!0})).on("error.mfploader",(function(){o.hasSize=!0,o.loadError=!0,u("LazyLoadError",o)})).attr("src",o.src)),o.preloaded=!0}}}});e.magnificPopup.registerModule("retina",{options:{replaceSrc:function(e){return e.src.replace(/\.\w+$/,(function(e){return"@2x"+e}))},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var e=t.st.retina,i=e.ratio;(i=isNaN(i)?i():i)>1&&(d("ImageHasSize.retina",(function(e,t){t.img.css({"max-width":t.img[0].naturalWidth/i,width:"100%"})})),d("ElementParse.retina",(function(t,o){o.src=e.replaceSrc(o,i)})))}}}}),f()})),jQuery(document).ready((function(e){e("html").delay(300).queue((function(t){e(this).addClass("loaded"),t()})),e(".read-more--open").click((function(t){t.preventDefault(),e(this).prev().slideToggle("slow"),e(this).fadeOut("slow")})),e(".read-more-wrapper--close").click((function(t){t.preventDefault(),e(".read-more-wrapper").slideUp("slow"),e(".read-more--open").fadeIn("slow")})),e(".menu-trigger").click((function(t){t.preventDefault(),e(this).toggleClass("clicked"),e(".menu-trigger__icon").toggleClass("active"),e(".offscreen-nav").toggleClass("active")})),e(".expanding-section__trigger").click((function(t){t.preventDefault(),e(this).closest(".expanding-section").addClass("open"),e(this).fadeOut("slow"),e(".expanding-section__head .heading").fadeOut("slow");var i=e(this).closest(".expanding-section");setTimeout((function(){e("html, body").animate({scrollTop:e(i).offset().top-100},"slow")}),400)})),e(".expanding-section__close").click((function(t){e(this).closest(".expanding-section").removeClass("open"),e(".expanding-section__head .heading").fadeIn("slow"),e(".expanding-section__trigger").fadeIn("slow")})),e(".tabbed-section__head--tab").click((function(t){var i=e(this).attr("data-tab");e(".tabbed-section__head--tab.active").removeClass("active"),e(this).addClass("active"),e(".tabbed-section__body--item.visible").removeClass("visible"),e(".tabbed-section__body--item."+i).addClass("visible")})),e(".js-toggle-trigger").click((function(t){t.preventDefault(),e(".js-toggle-target.open").slideUp(300),e(".js-toggle-target.open").removeClass("open "),e(this).siblings(".js-toggle-target").slideDown(300),e(this).siblings(".js-toggle-target").addClass("open"),e(".js-toggle-parent.active").removeClass("active"),e(this).closest(".js-toggle-parent").addClass("active");var i=e(this).closest(".js-toggle-parent"),o=e(this).outerHeight()+e("nav").outerHeight();setTimeout((function(){e("html, body").animate({scrollTop:e(i).offset().top-o},"slow")}),400)})),e(".menu__item--trigger").click((function(t){t.preventDefault(),e(".child-menu.open").removeClass("open").slideUp(300),e(this).siblings(".child-menu").slideDown(300),e(this).siblings(".child-menu").addClass("open"),e(".map-block__menu--item.active").removeClass("active"),e(this).closest(".map-block__menu--item").addClass("active")})),e(".menu__item--trigger").click((function(t){var i="#"+e(this).attr("data-target");e("g.active").removeClass("active"),e("path.active").removeClass("active"),e(i).addClass("active"),e("#map-marker").removeClass("active")})),e(".child").click((function(t){e("#map-marker").removeClass("active");var i=e(this).attr("data-target"),o="#"+e(this).attr("data-target");e("path.active").removeClass("active"),e(o).addClass("active");var a=e(o).position().left,n=e(o).position().top-e(".map-block__map").offset().top,r=a-e(".map-block__map").offset().left;n+=document.getElementById(i).getBBox().height/2,r+=document.getElementById(i).getBBox().width/2;var s=e(".map-block").width()-a;e("#map-marker").css({top:n,left:r}),e("#map-marker__line").css({width:s}),setTimeout((function(){e("#map-marker").addClass("active")}),500),e(".map-block__country--item.active").removeClass("active"),e(".map-block__country--item."+i).addClass("active")})),localStorage.theme?e("body").addClass(localStorage.theme):e("body").addClass("dark-theme"),e(".switch-wrapper").click((function(){e("body").hasClass("dark-theme")?(e("body").removeClass("dark-theme").addClass("light-theme"),localStorage.theme="light-theme"):(e("body").removeClass("light-theme").addClass("dark-theme"),localStorage.theme="dark-theme")})),e(document).ready((function(){e(".tabbed-section").length&&(e(".tabbed-section__head--tab:nth-child(1)").addClass("active"),e(".tabbed-section__body--item:nth-child(1)").addClass("visible"))})),e((function(){var t=e("nav"),i=e(".home-hero .content");e(window).scroll((function(){e(window).scrollTop()>=50?(t.addClass("scrolled"),i.addClass("fade-out")):(t.removeClass("scrolled"),i.removeClass("fade-out"))}))})),e(".item input").focusin((function(){e(this).closest(".item").addClass("active")})),e(".item input").blur((function(){!e(this).val().length>0&&e(this).closest(".item").removeClass("active")})),e(".item textarea").focusin((function(){e(this).closest(".item").addClass("active")})),e(".item textarea").blur((function(){!e(this).val().length>0&&e(this).closest(".item").removeClass("active")})),e.fn.isOnScreen=function(){var t=e(window),i={top:t.scrollTop(),left:t.scrollLeft()};i.right=i.left+t.width(),i.bottom=i.top+t.height();var o=this.offset();return o.right=o.left+this.outerWidth(),o.bottom=o.top+this.outerHeight(),!(i.right<o.left||i.left>o.right||i.bottom<o.top||i.top>o.bottom)},e(".slide-up, .slide-down, .slide-right, .slow-fade").each((function(){e(this).isOnScreen()&&e(this).addClass("active")})),e.fn.isInViewport=function(){var t=e(this).offset().top,i=t+e(this).outerHeight(),o=e(window).scrollTop(),a=o+e(window).height();return i>o&&t<a},e(window).on("resize scroll",(function(){e(".slide-up, .slide-down, .slide-right, .slow-fade").each((function(){e(this).isInViewport()&&e(this).addClass("active")}))}));var t=e(".owl-carousel.itinerary-carousel");t.owlCarousel({loop:!0,margin:0,nav:!1,lazyLoad:!0,dots:!1,responsive:{0:{items:1},600:{items:1},800:{items:1},1200:{items:1}}}),e(".owl-next").click((function(){t.trigger("next.owl.carousel")})),e(".owl-prev").click((function(){t.trigger("prev.owl.carousel")})),e(".owl-carousel.partners-carousel").owlCarousel({loop:!0,nav:!1,lazyLoad:!0,dots:!1,autoplay:!0,responsive:{0:{items:1},600:{items:3},800:{items:4},1200:{items:5}}}),e(".owl-next").click((function(){t.trigger("nextPartner.owl.carousel")})),e(".owl-prev").click((function(){t.trigger("prevPartner.owl.carousel")})),e(document).ready((function(){e(".gallery").magnificPopup({delegate:"a.lightbox-gallery",type:"image",gallery:{enabled:!0}})}))}));