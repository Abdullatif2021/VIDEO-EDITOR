import{d as g,h,W as E,o as s,c,x as f,y as a,z as i,u as t,L as l,V as d,F as _,r as p,B as x,C as v,D as m,p as S,b,a as u,_ as B}from"./index.6bfd5743.js";import{u as F}from"./index.b760358b.js";const y=k=>(S("data-v-d83d1675"),k=k(),b(),k),X={class:"flex text-left flex-col gap-y-3 py-5"},$=y(()=>u("div",{class:"text-zinc-500"},"Basic text",-1)),z=y(()=>u("div",{class:"text-zinc-500"},"Sans Serif",-1)),I=y(()=>u("div",{class:"text-zinc-500"},"Serif",-1)),w=y(()=>u("div",{class:"text-zinc-500"},"Monospace",-1)),M=y(()=>u("div",{class:"text-zinc-500"},"Handwriting",-1)),P=y(()=>u("div",{class:"text-zinc-500"},"Display",-1)),D=g({__name:"text",setup(k){const{emit:n}=F("asset"),r={sansSerif:["Roboto","Montserrat","Poppins"],serif:["Playfair Display","Merriweather","IBM Plex Serif"],monospace:["Roboto Mono","Inconsolata","Source Code Pro"],handwriting:["Dancing Script","Pacifico","Indie Flower"],display:["Lobster","Bebas Neue","Titan One"]};return h(()=>{Object.keys(r).forEach(C=>{const o=r[C];E.load({google:{families:o}})})}),(C,o)=>(s(),c("div",X,[$,f(d,{id:"heading-text",onClick:o[0]||(o[0]=e=>t(n)({type:t(l).TEXT,value:"heading"}))},{default:a(()=>[i(" Add heading ")]),_:1}),f(d,{id:"subheading-text",onClick:o[1]||(o[1]=e=>t(n)({type:t(l).TEXT,value:"subheading"}))},{default:a(()=>[i(" Add subheading ")]),_:1}),f(d,{id:"body-text",onClick:o[2]||(o[2]=e=>t(n)({type:t(l).TEXT,value:"body"}))},{default:a(()=>[i(" Add body text ")]),_:1}),z,(s(!0),c(_,null,p(r.sansSerif,e=>(s(),x(d,{key:e,id:"item-text",style:m({fontFamily:`${e}, sans-serif`}),onClick:T=>t(n)({type:t(l).TEXT,value:e})},{default:a(()=>[i(v(e),1)]),_:2},1032,["style","onClick"]))),128)),I,(s(!0),c(_,null,p(r.serif,e=>(s(),x(d,{key:e,id:"item-text",style:m({fontFamily:e}),onClick:T=>t(n)({type:t(l).TEXT,value:e})},{default:a(()=>[i(v(e),1)]),_:2},1032,["style","onClick"]))),128)),w,(s(!0),c(_,null,p(r.monospace,e=>(s(),x(d,{key:e,id:"item-text",style:m({fontFamily:e}),onClick:T=>t(n)({type:t(l).TEXT,value:e})},{default:a(()=>[i(v(e),1)]),_:2},1032,["style","onClick"]))),128)),M,(s(!0),c(_,null,p(r.handwriting,e=>(s(),x(d,{key:e,id:"item-text",style:m({fontFamily:e}),onClick:T=>t(n)({type:t(l).TEXT,value:e})},{default:a(()=>[i(v(e),1)]),_:2},1032,["style","onClick"]))),128)),P,(s(!0),c(_,null,p(r.display,e=>(s(),x(d,{key:e,id:"item-text",style:m({fontFamily:e}),onClick:T=>t(n)({type:t(l).TEXT,value:e})},{default:a(()=>[i(v(e),1)]),_:2},1032,["style","onClick"]))),128))]))}});const L=B(D,[["__scopeId","data-v-d83d1675"]]);export{L as default};
