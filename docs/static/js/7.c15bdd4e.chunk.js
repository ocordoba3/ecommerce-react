(this.webpackJsonpecommerce=this.webpackJsonpecommerce||[]).push([[7],{48:function(n,e,t){"use strict";t.r(e);var i,r,o,c,d=t(0),s=t(7),a=t(16),l=t(15),m=t(13),b=t(14),h=t(4),u=b.c.article(i||(i=Object(m.a)(["\n    border-bottom: 0.3rem solid ",";\n    margin: 14rem 9rem 5rem 9rem;\n    padding: 0 0 1.5rem 0;\n\n    @media screen and (max-width: 767px) {\n        margin: 10rem 0 3rem 0;\n        padding: 1.4rem;\n    }\n"])),(function(n){return n.isLightMode?h.b:h.c})),j=b.c.header(r||(r=Object(m.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    margin-bottom: 3rem;\n\n    & button {\n        background-color: ",";\n        border: none;\n        border-radius: 0;\n        color: ",";\n        cursor: pointer;\n        font-size: 2.3rem;\n        height: 5rem;\n        padding: 1.3rem 4rem;\n    }\n\n    @media screen and (max-width: 767px) {\n        flex-wrap: wrap;\n\n        & button {\n            display: none;\n        }\n    }\n"])),(function(n){return n.isLightMode?h.b:h.c}),(function(n){return n.isLightMode?h.c:h.b})),g=b.c.section(o||(o=Object(m.a)(["\n    position: relative;\n\n    & img {\n        height: 55rem;\n        object-fit: cover;\n        overflow: hidden;\n        width: 100%;\n    }\n\n    & h3 {\n        background-color: #ffffff10;\n        backdrop-filter: blur(12px);\n        box-sizing: border-box;\n        bottom: 0;\n        color: ",";\n        left: 0;\n        margin-bottom: 0;\n        padding: 2rem 4rem;\n        position: absolute;\n        text-align: end;\n        width: 100%;\n    }\n\n    & button {\n        background-color: ",";\n        border: none;\n        border-radius: 0;\n        color: ",";\n        cursor: pointer;\n        display: none;\n        font-size: 2.3rem;\n        height: 5rem;\n        margin-top: 3rem;\n        padding: 1.3rem 4rem;\n        width: 100%;\n    }\n\n    @media screen and (max-width: 767px) {\n        & img {\n            height: 24rem;\n        }\n        & h3 {\n            bottom: 8rem;\n            text-align: center;\n        }\n        & button {\n            display: block;\n        }\n    }\n"])),h.c,(function(n){return n.isLightMode?h.b:h.c}),(function(n){return n.isLightMode?h.c:h.b})),f=b.c.section(c||(c=Object(m.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    margin-bottom: 4rem;\n    margin-top: 4rem;\n\n    & .aboutPic,\n    .otherDetails {\n        width: 50%;\n    }\n\n    & .otherDetails {\n        text-align: end;\n    }\n\n    & .otherBuys {\n        display: flex;\n        flex-direction: row;\n        justify-content: flex-end;\n        margin-bottom: 4rem;\n    }\n\n    & .otherBuys img {\n        height: 11.4rem;\n        margin-left: 1rem;\n        object-fit: cover;\n        overflow: hidden;\n        width: 11.7rem;\n    }\n\n    @media screen and (max-width: 767px) {\n        flex-wrap: wrap;\n        margin-bottom: 3rem;\n\n        & .aboutPic,\n        .otherDetails {\n            width: 100%;\n        }\n\n        & .otherDetails {\n        text-align: start;\n    }\n        & .otherBuys {\n            justify-content: flex-start;\n        }\n\n        & .otherBuys img {\n        margin-left: 0;\n        margin-right: 1rem;\n    }\n        \n    }\n\n"]))),x=t(1);e.default=function(){var n,e,t,i,r,o=Object(s.b)(),c=Object(s.c)((function(n){return n.products})),m=c.featuredProduct,b=c.products,p=Object(s.c)((function(n){return n.ui})).isLightMode;Object(d.useEffect)((function(){o((function(n){}))}),[o]);var O,v=function(){o(Object(l.c)(!0)),o(Object(a.a)(m))};return Object(x.jsx)(x.Fragment,{children:m&&b&&Object(x.jsxs)(u,{isLightMode:p,className:"animate__animated animate__fadeIn",children:[Object(x.jsxs)(j,{isLightMode:p,children:[Object(x.jsxs)("h1",{children:[null===m||void 0===m?void 0:m.name," ",Object(x.jsxs)("small",{children:["(",(O=(null===m||void 0===m?void 0:m.category)||"",O.replace(O[0],O[0].toLocaleUpperCase())),")"]})]}),Object(x.jsx)("button",{type:"button",onClick:v,children:"ADD TO CART"})]}),Object(x.jsxs)(g,{isLightMode:p,children:[Object(x.jsx)("img",{src:null===m||void 0===m?void 0:m.image.src,alt:null===m||void 0===m?void 0:m.name}),Object(x.jsx)("button",{type:"button",onClick:v,children:"ADD TO CART"}),Object(x.jsx)("h3",{children:"Photo of the day"})]}),Object(x.jsxs)(f,{children:[Object(x.jsxs)("div",{className:"aboutPic",children:[Object(x.jsx)("h2",{children:"About it"}),Object(x.jsx)("p",{children:h.a}),Object(x.jsx)("h2",{children:"Details"}),Object(x.jsxs)("p",{children:["Dimentions: ",null===m||void 0===m||null===(n=m.details)||void 0===n||null===(e=n.dimmentions)||void 0===e?void 0:e.width," x ",null===m||void 0===m||null===(t=m.details)||void 0===t||null===(i=t.dimmentions)||void 0===i?void 0:i.height,"pixels"]}),Object(x.jsxs)("p",{children:["Size: ",(null===m||void 0===m?void 0:m.details.size)/1e3,"MB"]})]}),Object(x.jsxs)("div",{className:"otherDetails",children:[Object(x.jsx)("h2",{children:"People also buy"}),Object(x.jsx)("div",{className:"otherBuys",children:null===b||void 0===b||null===(r=b.slice(0,3))||void 0===r?void 0:r.map((function(n){return Object(x.jsx)("img",{src:n.image.src,alt:n.image.alt},n.id)}))})]})]})]})})}}}]);
//# sourceMappingURL=7.c15bdd4e.chunk.js.map