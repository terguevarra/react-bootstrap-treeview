!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("react"),require("prop-types")):"function"==typeof define&&define.amd?define(["react","prop-types"],t):(e="undefined"!=typeof globalThis?globalThis:e||self).ReactBootstrapTreeview=t(e.React,e.PropTypes)}(this,(function(e,t){"use strict";function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=l(e),n=l(t);const r={list:n.default.arrayOf(n.default.object).isRequired,idName:n.default.string.isRequired,parentIdName:n.default.string.isRequired,label:n.default.oneOfType([n.default.string,n.default.func]).isRequired},u="bi bi-caret-right-fill",i="bi bi-caret-down-fill";function f(t,l){const[a,n]=e.useState("");return e.useEffect((()=>{n("string"==typeof l?t[l]:l(t))}),[t]),{rowLabel:a}}function d({rowData:t,label:l,idName:n,level:r=1}){const{isOpen:o,toggleRow:c,icon:s}=function(t){const[l,a]=e.useState(t),[n,r]=e.useState(t?i:u);return{isOpen:l,toggleRow:function(){a((e=>(r(e?u:i),!l)))},icon:n}}(!1),{rowLabel:p}=f(t,l),[m,g]=e.useState(r);return e.useEffect((()=>{g(r+1)}),[]),a.default.createElement(a.default.Fragment,null,a.default.createElement("tr",{onClick:c},a.default.createElement("td",{width:"10%"},t.children?.length>0&&a.default.createElement("i",{className:s,style:{marginLeft:9*m+"px"}})),a.default.createElement("td",null,a.default.createElement("span",{style:{marginLeft:9*m+"px"}},p))),t.children?.length>0&&o&&t.children.map((e=>a.default.createElement(d,{rowData:e,label:l,idName:n,key:e[n],level:m}))))}function o({list:t,idName:l,parentIdName:n,label:r,padding:u}){const[i,f]=e.useState([]);return e.useEffect((()=>{f(((e,t,l)=>{let a,n={},r=[];for(let l=0;l<e.length;l++)n[e[l][t]]=l,e[l].children=[];for(let t=0;t<e.length;t++)a=e[t],0!==a[l]&&null!==a[l]?e[n[a[l]]].children.push(a):r.push(a);return r})(t,l,n))}),[t]),a.default.createElement(a.default.Fragment,null,a.default.createElement("table",{className:"table"},a.default.createElement("tbody",null,i.map((e=>a.default.createElement(d,{rowData:e,label:r,idName:l,key:e[l],padding:u,isParent:!0}))))))}function c(e){return a.default.createElement(o,e)}return c.defaultProps={},c.propTypes=r,c}));
