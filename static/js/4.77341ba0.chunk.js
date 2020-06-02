(window["webpackJsonpmattermost-themes"]=window["webpackJsonpmattermost-themes"]||[]).push([[4],{74:function(n,e,t){"use strict";t.r(e);var r=t(3),a=t(0),o=t.n(a),l=t(2),i=t(42),c=t.n(i),s=t(1),u=t(54),m=t.n(u),d=t(71),g=t(70);function b(){var n=Object(r.a)(["\n        height: 6.5rem;\n        color: ",";\n    "]);return b=function(){return n},n}function f(){var n=Object(r.a)(["\n            height: 6.5rem;\n            color: ",";\n        "]);return f=function(){return n},n}function h(){var n=Object(r.a)(["\n        position: absolute;\n        top: 50%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        width: 8rem;\n        height: 10rem;\n        transform: translate(0, -50%);\n        cursor: pointer;\n        background: #12171E;\n        border-radius: 1.2rem;\n        z-index: 1;\n    "]);return h=function(){return n},n}var p=function(n){var e=n.className,t=n.onClick,r=l.c.div(h());if(e.includes("slick-next")){var a=Object(l.c)(g.a)(f(),e.includes("slick-disabled")?"rgba(255, 255, 255, 0.3)":"#fff");return o.a.createElement(r,{style:{right:"-8.5rem"},onClick:t},o.a.createElement(a,null))}var i=Object(l.c)(d.a)(b(),e.includes("slick-disabled")?"rgba(255, 255, 255, 0.3)":"#fff");return o.a.createElement(r,{style:{left:"-9.5rem"},onClick:t},o.a.createElement(i,null))};function E(){var n=Object(r.a)(["\n    padding-left: 5.5rem;\n    padding-right: 4.5rem;\n"]);return E=function(){return n},n}function v(){var n=Object(r.a)(["\n    height: 100%;\n    padding: 3rem;\n"]);return v=function(){return n},n}var w=l.c.div(v()),j=l.c.div(E());var O=function(n){var e={dots:!0,infinite:!1,lazyLoad:!0,speed:500,slidesToShow:3,slidesToScroll:1,nextArrow:o.a.createElement(p,null),prevArrow:o.a.createElement(p,null),responsive:[{breakpoint:2400,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:1e3,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1}}]};return n.isOnboarding&&(e.slidesToShow=1,e.slidesToScroll=1,e.responsive=[]),o.a.createElement(w,null,o.a.createElement(j,null,o.a.createElement(m.a,e,n.children)))};t(72),t(73);function k(){var n=Object(r.a)(["\n    display: flex;\n    flex: 0;\n    justify-content: flex-end;\n    padding: 20px;\n    margin: 0;\n    cursor: pointer;\n    color: ",";\n    font-size: 1.8rem;\n    background: rgba(0, 0, 0, 0.2);\n\n    &:hover {\n        color: ","\n    }\n"]);return k=function(){return n},n}function x(){var n=Object(r.a)(["\n        width: auto;\n    "]);return x=function(){return n},n}function y(){var n=Object(r.a)(["\n    margin: 0 auto;\n    width: 80%;\n    max-width: 100%;\n    height: auto;\n\n    ","\n"]);return y=function(){return n},n}function T(){var n=Object(r.a)(["\n    height: 100%;\n    justify-content: center;\n    align-items: center;\n"]);return T=function(){return n},n}function S(){var n=Object(r.a)(["\n    color: ",";\n    text-align: center;\n    font-size: 3rem;\n\n    strong {\n        color: ","\n    }\n"]);return S=function(){return n},n}function C(){var n=Object(r.a)(["\n    height: 100%;\n"]);return C=function(){return n},n}function _(){var n=Object(r.a)(["\n    flex: 1;\n"]);return _=function(){return n},n}c.a.setAppElement("#root");var z=l.c.div(_()),A=l.c.div(C()),M=l.c.p(S(),s.b.font,s.b.fontHighlight),W=l.c.div(T()),D=l.c.img(y(),Object(s.a)("lg")(x())),I=l.c.p(k(),s.b.link,Object(s.c)(s.b.link,.8)),J={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.75)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:5},content:{padding:0,border:"none",background:s.b.main,display:"flex",flexDirection:"column",width:"auto",maxWidth:750,top:"initial",bottom:"initial",left:window.innerWidth<=750?10:"initial",right:window.innerWidth<=750?10:"initial"}};e.default=function(n){return o.a.createElement(c.a,{isOpen:n.isOpen,onRequestClose:n.closeModal,style:J},o.a.createElement(I,{onClick:n.closeModal},"Close tutorial"),o.a.createElement(z,null,o.a.createElement(O,{isOnboarding:!0},o.a.createElement(A,null,o.a.createElement(M,null,"1. ",o.a.createElement("strong",null,"Click on a thumbnail "),"to copy it to your clipboard."),o.a.createElement(W,null,o.a.createElement(D,{alt:"onboarding_1",src:"".concat("/mattermost-themes","/img/onboarding/onboarding_1.png")}))),o.a.createElement(A,null,o.a.createElement(M,null,"2. Navigate to your ",o.a.createElement("strong",null,"account settings "),"on any Mattermost server."),o.a.createElement(W,null,o.a.createElement(D,{alt:"onboarding_2",src:"".concat("/mattermost-themes","/img/onboarding/onboarding_2.png")}))),o.a.createElement(A,null,o.a.createElement(M,null,"3. Go to the ",o.a.createElement("strong",null,"Display menu, "),"and open the ",o.a.createElement("strong",null,"Themes tab.")),o.a.createElement(W,null,o.a.createElement(D,{alt:"onboarding_3",src:"".concat("/mattermost-themes","/img/onboarding/onboarding_3.png")}))),o.a.createElement(A,null,o.a.createElement(M,null,"4. Select ",o.a.createElement("strong",null,"Custom Theme, "),"paste the selected theme ",o.a.createElement("strong",null,"over the textbox, "),"and ",o.a.createElement("strong",null,"save!")),o.a.createElement(W,null,o.a.createElement(D,{alt:"onboarding_4",src:"".concat("/mattermost-themes","/img/onboarding/onboarding_4.png")}))))))}}}]);
//# sourceMappingURL=4.77341ba0.chunk.js.map