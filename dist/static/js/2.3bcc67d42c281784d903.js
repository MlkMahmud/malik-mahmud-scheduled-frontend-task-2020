(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{41:function(e,a,r){"use strict";var t=r(0),n=r.n(t),i=r(3),c=r(4),l=r.n(c),u=i.b.div.withConfig({displayName:"Card__StyledCard",componentId:"sc-646x59-0"})(["background-color:#f8f8ff;box-shadow:0px 0px 4px 1px rgba(0,0,0,0.4);height:",";a{color:#000;}"],(function(e){return e.cardHeight||"auto"})),d=function(e){var a=e.children;return n.a.createElement(u,null,a)};d.propTypes={children:l.a.node.isRequired},a.a=d},42:function(e,a,r){"use strict";var t=r(0),n=r.n(t),i=r(4),c=r.n(i),l=function(e){var a=e.field,r=e.value;return n.a.createElement("p",null,n.a.createElement("b",null,"".concat(a,":"," ")),r)};l.defaultProps={value:""},l.propTypes={field:c.a.string.isRequired,value:c.a.oneOfType([c.a.string,c.a.number])},a.a=l},43:function(e,a,r){"use strict";var t=r(0),n=r.n(t),i=r(3),c=r(4),l=r.n(c),u=i.b.div.withConfig({displayName:"Grid__StyledGrid",componentId:"teqqyy-0"})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));grid-gap:20px;"]),d=function(e){var a=e.children;return n.a.createElement(u,null,a)};d.propTypes={children:l.a.arrayOf(l.a.node.isRequired).isRequired},a.a=d},52:function(e,a,r){"use strict";r.r(a);var t=r(0),n=r.n(t),i=r(16),c=r(4),l=r.n(c),u=r(43),d=r(3),o=r(41),s=r(42),p=d.b.div.withConfig({displayName:"CharacterCard__Wrapper",componentId:"tr6pli-0"})(["padding:0 20px;"]),f=function(e){var a=e.character,r=a.name,t=a.race,i=a.birth,c=a.realm,l=a.death,u=a.wikiUrl;return n.a.createElement(o.a,null,n.a.createElement(p,null,n.a.createElement(s.a,{field:"Name",value:r}),n.a.createElement(s.a,{field:"Race",value:t}),n.a.createElement(s.a,{field:"Birth",value:i}),n.a.createElement(s.a,{field:"Realm",value:c}),n.a.createElement(s.a,{field:"Death",value:l}),n.a.createElement("p",null,n.a.createElement("a",{href:u,target:"_blank",rel:"noopener noreferrer"},"More..."))))};f.propTypes={character:l.a.shape({name:l.a.string.isRequired,race:l.a.string.isRequired,birth:l.a.string.isRequired,realm:l.a.string.isRequired,death:l.a.string.isRequired,wikiUrl:l.a.string.isRequired}).isRequired};var h=f,m=r(17),g=function(){return function(e){e({type:"LOADING"}),fetch("https://the-one-api.herokuapp.com/v1/character",{headers:{Authorization:"Bearer -8-wRuj_CMeZua76jr6W"}}).then((function(e){if(e.ok)return e.json();throw Error()})).then((function(a){var r=a.docs;e({type:"FETCH CHARACTERS",payload:r.slice(0,20)})})).finally((function(){return e({type:"LOADED"})}))}},R=function(e){var a=e.characters,r=e.dispatch,i=e.loading;return Object(t.useEffect)((function(){r(g())}),[]),i?n.a.createElement(m.a,null):n.a.createElement(u.a,null,a.map((function(e){return n.a.createElement(h,{key:e._id,character:e})})))};R.propTypes={characters:l.a.arrayOf(l.a.shape({name:l.a.string.isRequired,race:l.a.string.isRequired,birth:l.a.string.isRequired,realm:l.a.string.isRequired,death:l.a.string.isRequired,wikiUrl:l.a.string.isRequired})).isRequired,dispatch:l.a.func.isRequired,loading:l.a.bool.isRequired};a.default=Object(i.b)((function(e){return{characters:e.characters,loading:e.loading}}))(R)}}]);