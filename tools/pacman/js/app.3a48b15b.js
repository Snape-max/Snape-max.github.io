(function(){"use strict";var t={7435:function(t,e,n){var a=n(5130),o=(n(4114),n(6768));function r(t,e,n){let a=t[1],o=t[0],r=e[1],f=e[0],c={arr:n,rows:n.length,cols:n[0].length};var h,u=[],d=[],y=[];u.push({x:a,y:o,G:0});do{var x=u.pop();d.push(x);var p=i(x);for(var g in p){var b=p[g];if(b.x>=0&&b.y>=0&&b.x<c.rows&&b.y<c.cols&&1!=c.arr[b.x][b.y]&&!l(b,d)&&1!=c.arr[b.x][x.y]&&1!=c.arr[x.x][b.y]){var w=x.G+((x.x-b.x)*(x.y-b.y)==0?10:14);if(l(b,u)){var v=l(b,u);w<u[v].G&&(u[v].parent=x,u[v].G=w,u[v].F=w+u[v].H)}else b["H"]=10*Math.abs(r-b.x)+10*Math.abs(f-b.y),b["G"]=w,b["F"]=b.H+b.G,b["parent"]=x,u.push(b)}}if(0==u.length)break;u.sort(s)}while(!(h=l({x:r,y:f},u)));if(h){var m=u[h];do{y.unshift([m.y,m.x]),m=m.parent}while(m.x!=a||m.y!=o)}else y=[];return y.unshift([o,a]),y}function s(t,e){return e.F-t.F}function i(t){var e=t.x,n=t.y;return[{x:e-1,y:n-1},{x:e,y:n-1},{x:e+1,y:n-1},{x:e+1,y:n},{x:e+1,y:n+1},{x:e,y:n+1},{x:e-1,y:n+1},{x:e-1,y:n}]}function l(t,e){for(var n in e)if(t.x==e[n].x&&t.y==e[n].y)return n;return!1}var f=n(726);function c(t,e){t.x=e[0],t.y=e[1]}function h(t,e=.1,n=.5,a=.5){t.animationSpeed=e,t.scale.set(n),t.anchor.set(a)}const u=(0,o.Lk)("title",null,"吃豆人",-1),d=(0,o.Lk)("div",{id:"game_main"},null,-1);var y={__name:"App",setup(t){const e=window.innerWidth,n=window.innerHeight;var a=[Math.floor(e/2-300),.05*n],s=225,i=375,l=225,y=375,x=9,p=15;let g=[.55,.4,.45,.56],b=0;var w=!1,v=4,m=!1,k=!1,E=!1,M=!1,C=!1;function O(t){switch(t.key){case" ":m&&(w=!w);break;case"Enter":m=!0;break}}document.addEventListener("keydown",O);const S=new f.lgM,j=[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],[1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1],[1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1],[1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1],[0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0],[1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1],[0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0],[1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1],[0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0],[1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1],[1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],[1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1],[1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1],[1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1],[1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1],[1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],P=[[4,1,1,1,1,1,1,1,1,10,1,1,1,1,1,1,1,1,5],[2,29,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,29,2],[2,0,23,22,0,23,21,22,0,14,0,23,21,22,0,23,22,0,2],[2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[2,0,15,16,0,13,0,15,11,17,11,16,0,13,0,15,16,0,2],[2,0,0,0,0,12,0,0,0,12,0,0,0,12,0,0,0,0,2],[6,1,1,5,0,18,11,16,0,14,0,15,11,20,0,4,1,1,7],[28,28,28,2,0,12,0,0,0,0,0,0,0,12,0,2,28,28,28],[3,1,1,7,0,14,0,4,24,28,3,5,0,14,0,6,1,1,24],[0,0,0,0,0,0,0,2,28,28,28,2,0,0,0,0,0,0,0],[3,1,1,5,0,13,0,6,1,1,1,7,0,13,0,4,1,1,24],[28,28,28,2,0,12,0,0,0,0,0,0,0,12,0,2,28,28,28],[4,1,1,7,0,14,0,15,11,17,11,16,0,14,0,6,1,1,5],[2,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,2],[2,0,15,25,0,15,11,16,0,14,0,15,11,16,0,26,16,0,2],[2,0,0,12,0,0,0,0,0,0,0,0,0,0,0,12,0,0,2],[9,16,0,14,0,13,0,15,11,17,11,16,0,13,0,14,0,15,8],[2,0,0,0,0,12,0,0,0,12,0,0,0,12,0,0,0,0,2],[2,0,15,11,11,19,11,16,0,14,0,15,11,19,11,11,16,0,2],[2,29,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,29,2],[6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,7]];var F=new Array;let z=[],_=[],T=[];async function I(){await S.init({background:"black",resizeTo:window});var t=document.getElementById("game_main");t.appendChild(S.canvas),f.sP.addBundle("fonts",[{alias:"bitt",src:"./assets/font/bitt.ttf"}]),await f.sP.loadBundle("fonts");const o=await f.sP.load("./assets/bean/bean-re2.png"),r=await f.sP.load("./assets/map/map28.png"),s=new f.kxk(r);s.scale.set(300),s.zIndex=10,S.stage.addChild(s);let i=new f.EYj({text:"Pac-Man",style:{fontFamily:"bitt",fontSize:160,fill:"white"}});i.anchor.set(.5),i.x=a[0]+300,i.y=a[1],i.zIndex=11,S.stage.addChild(i);let c=["./assets/bean/bean-re1.png","./assets/bean/bean-re2.png"],u=await G(c);u.zIndex=11,h(u,.1,1.5,0),u.play(),u.x=a[0]+250,u.y=a[1]+170,S.stage.addChild(u);let d=new f.EYj({text:"Loading",style:{fontFamily:"bitt",fontSize:30,fill:"white"}});d.zIndex=11,d.x=a[0]+290,d.y=a[1]+350,d.anchor.set(.5),S.stage.addChild(d);let x=new f.EYj({text:"https://github.com/Snape-max/pacman",style:{fontFamily:"bitt",fontSize:30,fill:"white"}});x.zIndex=11,x.x=e,x.y=n-10,x.anchor.set(1),S.stage.addChild(x);for(let e=0;e<29;e++){const t=await f.sP.load(`./assets/map/map${e}.png`);z.push(t)}for(let e=0;e<P.length;e++){let t=[];for(let n=0;n<P[0].length;n++){let o,r=P[e][n];29==r?(o=new f.Dl5([z[0],z[27]]),o.animationSpeed=.03,o.play()):o=new f.kxk(z[r]),t.push(o),o.anchor.set(.5),o.x=a[0]+25*n,o.y=a[1]+25*e,S.stage.addChild(o)}F.push(t)}const p=new f.EYj({text:"SCORE",style:{fontFamily:"bitt",fontSize:90,fill:"red"}});p.anchor.set(.5),p.x=a[0]+600,p.y=a[1],S.stage.addChild(p);let g=new f.EYj({text:`${b}`,style:{fontFamily:"bitt",fontSize:90,fill:"white"}});g.anchor.set(0,0),g.x=a[0]+540,g.y=a[1]+10,S.stage.addChild(g);let O=new f.EYj({text:"",style:{fontFamily:"bitt",fontSize:90,fill:"white"}});O.anchor.set(0,0),O.x=a[0]+540,O.y=a[1]+150,S.stage.addChild(O);let j=new f.EYj({text:"",style:{fontFamily:"bitt",fontSize:40,fill:"white"}});j.anchor.set(0,0),j.x=a[0]+540,j.y=a[1]+230,S.stage.addChild(j);let I=[];for(let e=0;e<v;e++){const t=new f.kxk(o);I.push(t),t.scale.set(.5),t.x=a[0]+540+30*e,t.y=a[1]+380,S.stage.addChild(t)}let $=new f.EYj({text:`^ ${v}`,style:{fontFamily:"bitt",fontSize:50,fill:"white"}});$.x=a[0]+540,$.y=a[1]+390,S.stage.addChild($),await A(),await Y(),d.text="Press Enter to start";let N=90,B=90;S.ticker.add((()=>{g.text=`${b}`,$.text=`^ ${v}`,m?(s.alpha=0,u.alpha=0,i.alpha=0,d.alpha=0):(180==B&&(B=0,d.text="Type Enter to start"),90==B&&(d.text=""),B++),k&&!C&&(s.alpha=1,i.text="GAME OVER",d.text=`SCORE  :  ${b}`,i.alpha=1,d.alpha=1),C&&(k=!0,s.alpha=1,i.text="YOU WIN!",d.text=`SCORE  :  ${b}`,i.alpha=1,d.alpha=1);let t=Math.round(l/25),e=Math.round(y/25);if(0!=P[e][t]&&29!=P[e][t]||(F[e][t].alpha=0,0==P[e][t]?b++:b+=10,P[e][t]=28),0==T.length||0==_.length||k||L(T,_)&&(v--,E=!0,M=!0,w=!0,v<0&&(k=!0)),w&&m&&!k){180==N&&(N=0,O.text="",j.text=""),90==N&&(O.text="PAUSE",j.text="SPACE TO CONTINUE"),N++;for(let t=4;t>v;t--)I[t-1].alpha=0}else O.text="";221==b&&(C=!0)}))}async function A(){let t=["./assets/bean/bean-re1.png","./assets/bean/bean-re2.png"],e=await G(t);h(e),c(e,[a[0]+l,a[1]+y]),e.play(),S.stage.addChild(e);let n=.5,o=0,r=.5,f=1;function u(t){switch(t.key){case"w":f=4,r=.5,o=3*Math.PI/2;break;case"a":f=3,r=-.5,o=0;break;case"s":f=2,r=.5,o=Math.PI/2;break;case"d":f=1,r=.5,o=0;break}}document.addEventListener("keydown",u);let d,g={x:0,y:0},b=0,v=1;S.ticker.add((()=>{if(E&&(e.x=s+a[0],e.y=i+a[1],v=1,f=1,o=0,r=.5,E=!1),w||!m||k)e.rotation=o,e.scale._x=r;else{switch(e.x>a[0]+450&&(e.x=a[0]),e.y>a[1]+500&&(e.y=a[1]),e.x<a[0]&&(e.x=a[0]+450),e.y<a[1]&&(e.y=a[1]+500),v){case 1:d=e.x+n,b=e.y,g.x=Math.floor((d-a[0])/25),g.y=Math.floor((b-a[1])/25),j[g.y][g.x+1]?(e.x=25*g.x+a[0],e.y=25*g.y+a[1]):(e.x+=n,e.rotation=o,e.scale._x=r);break;case 2:d=e.x,b=e.y+n,g.x=Math.floor((d-a[0])/25),g.y=Math.floor((b-a[1])/25),j[g.y+1][g.x]?(e.x=25*g.x+a[0],e.y=25*g.y+a[1]):(e.y+=n,e.rotation=o,e.scale._x=r);break;case 3:d=e.x-n,b=e.y,g.x=Math.floor((d-a[0])/25),g.y=Math.floor((b-a[1])/25),j[g.y][g.x]?(e.x=25*(g.x+1)+a[0],e.y=25*g.y+a[1]):(e.x-=n,e.rotation=o,e.scale._x=r);break;case 4:d=e.x,b=e.y-n,g.x=Math.floor((d-a[0])/25),g.y=Math.floor((b-a[1])/25),j[g.y][g.x]?(e.x=25*g.x+a[0],e.y=25*(g.y+1)+a[1]):(e.rotation=o,e.scale._x=r,e.y-=n);break}(e.x-a[0])%25==0&&(e.y-a[1])%25==0&&(v=f),x=Math.floor((e.x-a[0])/25),p=Math.floor((e.y-a[1])/25),l=e.x-a[0],y=e.y-a[1],T=[l,y]}}))}async function Y(){let t=["./assets/ghost-blue/ghost1.png","./assets/ghost-blue/ghost2.png","./assets/ghost-blue/ghost3.png"],e=["./assets/ghost-green/ghost1.png","./assets/ghost-green/ghost2.png","./assets/ghost-green/ghost3.png"],n=["./assets/ghost-pink/ghost1.png","./assets/ghost-pink/ghost2.png","./assets/ghost-pink/ghost3.png"],o=["./assets/ghost-red/ghost1.png","./assets/ghost-red/ghost2.png","./assets/ghost-red/ghost3.png"],s=await G(t),i=await G(e),l=await G(n),f=await G(o),u=[f,i,l,s],d=[[8,9],[9,9],[10,9],[9,8]];u.forEach(((t,e)=>{h(t),c(t,[a[0]+25*d[e][0],a[1]+25*d[e][1]]),t.play(),S.stage.addChild(t)}));let y=[[4,9],[4,13],[13,9],[13,13]],b=[];d.forEach(((t,e)=>{let n=r(t,y[e],j);b.push(n)}));let v=[0,0,0,0];S.ticker.add((()=>{M&&(u.forEach(((t,e)=>{c(t,[a[0]+25*d[e][0],a[1]+25*d[e][1]])})),d.forEach(((t,e)=>{let n=r(t,y[e],j);b[e]=n})),v=[0,0,0,0],M=!1),u.forEach(((t,e)=>{let n=t.x-a[0],o=t.y-a[1];_[e]=[n,o]})),w||!m||k||v.forEach(((t,e)=>{let n=u[e],o=n.x-a[0],s=n.y-a[1],i=Math.floor(o/25),l=Math.floor(s/25),f=b[e][v[e]];Math.floor(o)!=25*f[0]||Math.floor(s)!=25*f[1]?25*f[0]-o>0?n.x+=g[e]:25*f[0]-o<0?n.x-=g[e]:25*f[1]-s>0?n.y+=g[e]:25*f[1]-s<0&&(n.y-=g[e]):v[e]<Math.ceil(b[e].length-1)/1.1?(n.x=25*f[0]+a[0],n.y=25*f[1]+a[1],v[e]=v[e]+1):(b[e]=r([i,l],[x,p],j),v[e]=0)}))}))}async function G(t){let e=[];for(let n=0;n<t.length;n++){const a=await f.sP.load(t[n]);e.push(a)}return new f.Dl5(e)}function L(t,e){let n=!1;return e.forEach(((e,a)=>{let o=Math.abs(t[0]-e[0]),r=Math.abs(t[1]-e[1]);o*o+r*r<700&&(n=!0)})),n}return I(),(t,e)=>((0,o.uX)(),(0,o.CE)(o.FK,null,[u,d],64))}};const x=y;var p=x;(0,a.Ef)(p).mount("#app")}},e={};function n(a){var o=e[a];if(void 0!==o)return o.exports;var r=e[a]={exports:{}};return t[a].call(r.exports,r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,a,o,r){if(!a){var s=1/0;for(c=0;c<t.length;c++){a=t[c][0],o=t[c][1],r=t[c][2];for(var i=!0,l=0;l<a.length;l++)(!1&r||s>=r)&&Object.keys(n.O).every((function(t){return n.O[t](a[l])}))?a.splice(l--,1):(i=!1,r<s&&(s=r));if(i){t.splice(c--,1);var f=o();void 0!==f&&(e=f)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[a,o,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,a){return n.f[a](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{174:"87937959",297:"037b37f0",360:"dcbdaad7",659:"a21f2a66",816:"51bfe72f",848:"898f5a87",849:"5e858d47"}[t]+".js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="astar:";n.l=function(a,o,r,s){if(t[a])t[a].push(o);else{var i,l;if(void 0!==r)for(var f=document.getElementsByTagName("script"),c=0;c<f.length;c++){var h=f[c];if(h.getAttribute("src")==a||h.getAttribute("data-webpack")==e+r){i=h;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",e+r),i.src=a),t[a]=[o];var u=function(e,n){i.onerror=i.onload=null,clearTimeout(d);var o=t[a];if(delete t[a],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(t){return t(n)})),e)return e(n)},d=setTimeout(u.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=u.bind(null,i.onerror),i.onload=u.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var t={524:0};n.f.j=function(e,a){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)a.push(o[2]);else{var r=new Promise((function(n,a){o=t[e]=[n,a]}));a.push(o[2]=r);var s=n.p+n.u(e),i=new Error,l=function(a){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var r=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",i.name="ChunkLoadError",i.type=r,i.request=s,o[1](i)}};n.l(s,l,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,a){var o,r,s=a[0],i=a[1],l=a[2],f=0;if(s.some((function(e){return 0!==t[e]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(l)var c=l(n)}for(e&&e(a);f<s.length;f++)r=s[f],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(c)},a=self["webpackChunkastar"]=self["webpackChunkastar"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[504],(function(){return n(7435)}));a=n.O(a)})();
//# sourceMappingURL=app.3a48b15b.js.map