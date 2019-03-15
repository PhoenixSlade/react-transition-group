(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{134:function(e,a,t){"use strict";t.r(a),t.d(a,"query",function(){return R});t(69),t(196);var r=t(6),n=t.n(r),i=(t(30),t(4)),s=t.n(i),l=t(0),c=t.n(l),o=t(300),u=t(197),d=t.n(u),p=t(152),m=t(173);var y=function(e){return e.trim().replace(/^\{/,"").replace(/\}$/,"")},f=function(e){var a=e.description;return a&&a.childMarkdownRemark&&a.childMarkdownRemark.html},h={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired,data:s.a.shape({site:s.a.shape({siteMetadata:s.a.shape({componentPages:s.a.arrayOf(s.a.shape({displayName:s.a.string.isRequired,codeSandboxId:s.a.string.isRequired})).isRequired}).isRequired}).isRequired,metadata:s.a.shape({displayName:s.a.string,composes:s.a.arrayOf(s.a.string),description:s.a.object.isRequired})}).isRequired},v=function(e){function a(){for(var a,t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return(a=e.call.apply(e,[this].concat(r))||this).renderProp=function(e,t){var r=e.defaultValue,n=e.name,i=e.required,s=a.renderType(e),l=t+"-prop-"+n;return c.a.createElement("section",{key:n},c.a.createElement("h3",{id:l,style:{marginTop:"1.5rem",marginBottom:"0.5rem"}},c.a.createElement("a",{href:"#"+l},c.a.createElement("code",null,n))),c.a.createElement("div",{dangerouslySetInnerHTML:{__html:f(e)}}),c.a.createElement("div",{style:{paddingLeft:0}},c.a.createElement("div",null,"type: ",s&&"pre"===s.type?s:c.a.createElement("code",null,s)),i&&c.a.createElement("div",null,"required"),r&&c.a.createElement("div",null,"default: ",c.a.createElement("code",null,r.value.trim()))))},a}n()(a,e);var t=a.prototype;return t.render=function(){var e=this,a=this.props,t=a.data,r=a.location,n=t.metadata,i=t.site.siteMetadata.componentPages;return c.a.createElement(p.a,{data:t,location:r},c.a.createElement("div",null,c.a.createElement(o.a,null,c.a.createElement("h1",{id:n.displayName},n.displayName),c.a.createElement("p",{dangerouslySetInnerHTML:{__html:f(n)}})),c.a.createElement(m.a,{codeSandbox:{title:n.displayName+" Component",id:i.find(function(e){return e.displayName===n.displayName}).codeSandboxId}}),c.a.createElement(o.a,null,c.a.createElement("h2",null,c.a.createElement("div",null,"Props"),n.composes&&c.a.createElement("small",{style:{fontStyle:"italic",fontSize:"70%"}},"Accepts all props from"," ",n.composes.map(function(e){return"<"+e.replace("./","")+">"}).join(", ")," ","unless otherwise noted.")),n.props.map(function(a){return e.renderProp(a,n.displayName)}))))},t.renderType=function(e){var a,t=this,r=e.type||{},n=g(r.name),i=e.doclets||{};switch(n){case"node":return"any";case"function":return"Function";case"elementType":return"ReactClass<any>";case"dateFormat":return"string | (date: Date, culture: ?string, localizer: Localizer) => string";case"dateRangeFormat":return"(range: { start: Date, end: Date }, culture: ?string, localizer: Localizer) => string";case"object":case"Object":return r.value?c.a.createElement("pre",{className:"shape-prop"},(a=E(r.value),JSON.stringify(a,null,2).replace(/"|'/g,""))):n;case"union":return r.value.reduce(function(e,a,r,n){a="string"==typeof a?{name:a}:a;var i=t.renderType({type:a});return c.a.isValidElement(i)&&(i=c.a.cloneElement(i,{key:r})),e=e.concat(i),r===n.length-1?e:e.concat(" | ")},[]);case"array":case"Array":var s=this.renderType({type:r.value});return c.a.createElement("span",null,"Array<",s,">");case"enum":return this.renderEnum(r);case"custom":return y(i.type||n);default:return n}},t.renderEnum=function(e){var a=e.value||[];return c.a.createElement("code",null,a.join(" | "))},a}(c.a.Component);function g(e){return"func"===e?"function":"bool"===e?"boolean":"object"===e?"Object":e}function E(e){return d()(e,function(e,a,t){e[a.required?t:t+"?"]=function e(a){var t=a.type||{};var r=g(t.name);var n=a.doclets||{};switch(r){case"node":return"any";case"function":return"Function";case"elementType":return"ReactClass<any>";case"object":case"Object":return t.value?E(t.value):r;case"array":case"Array":var i=e({type:t.value});return"Array<"+i+">";case"custom":return y(n.type||r);default:return r}}(a)},{})}v.propTypes=h;var R="1222754543";a.default=v},145:function(e,a,t){var r;e.exports=(r=t(153))&&r.default||r},148:function(e,a,t){"use strict";var r=t(0),n=t.n(r),i=t(4),s=t.n(i),l=t(28),c=t.n(l);t.d(a,"a",function(){return c.a});t(145),n.a.createContext({});s.a.object,s.a.string.isRequired,s.a.func,s.a.func},152:function(e,a,t){"use strict";var r=t(148),n=t(4),i=t.n(n),s=t(0),l=t.n(s),c=t(302),o=t(301),u=(t(170),t(171),{data:i.a.shape({site:i.a.shape({siteMetadata:i.a.shape({componentPages:i.a.arrayOf(i.a.shape({path:i.a.string.isRequired,displayName:i.a.string.isRequired})).isRequired}).isRequired}).isRequired}).isRequired,location:i.a.shape({pathname:i.a.string.isRequired}).isRequired}),d=function(e){var a=e.data,t=e.children;return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,{fixed:"top",bg:"dark",variant:"dark",expand:"md",collapseOnSelect:!0},l.a.createElement(c.a.Brand,{as:r.a,to:"/"},"React Transition Group"),l.a.createElement(c.a.Toggle,null),l.a.createElement(c.a.Collapse,null,l.a.createElement(o.a,{className:"mr-auto"},a.site.siteMetadata.componentPages.map(function(e){var a=e.path,t=e.displayName;return l.a.createElement(o.a.Link,{key:a,as:r.a,to:a,activeClassName:"active"},t)})),l.a.createElement(o.a,null,l.a.createElement(o.a.Link,{as:r.a,to:"/with-react-router",activeClassName:"active"},"With React Router")))),l.a.createElement("div",{style:{paddingTop:"5rem"}},t))};d.propTypes=u,a.a=d},153:function(e,a,t){"use strict";t.r(a);t(29);var r=t(0),n=t.n(r),i=t(4),s=t.n(i),l=t(48),c=t(2),o=function(e){var a=e.location,t=c.default.getResourcesForPathnameSync(a.pathname);return n.a.createElement(l.a,Object.assign({location:a,pageResources:t},t.json))};o.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},a.default=o},173:function(e,a,t){"use strict";var r=t(0),n=t.n(r),i=t(4),s=t.n(i),l=t(300),c={codeSandbox:s.a.shape({title:s.a.string.isRequired,id:s.a.string.isRequired}).isRequired},o=function(e){var a=e.codeSandbox;return n.a.createElement("div",{style:{marginBottom:"1.5rem"}},n.a.createElement(l.a,null,n.a.createElement("h2",null,"Example")),n.a.createElement("iframe",{title:a.title,src:"https://codesandbox.io/embed/"+a.id+"?fontsize=14",style:{display:"block",width:"100%",height:"500px",border:0,borderRadius:4,overflow:"hidden"},sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}))};o.propTypes=c,a.a=o}}]);
//# sourceMappingURL=component---src-templates-component-js-f239234dff5d72271ddf.js.map