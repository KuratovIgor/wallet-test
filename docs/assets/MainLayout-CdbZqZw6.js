import{d as R,R as c,r as S,c as U,u as M,a as O,b as e,o as u,w as t,e as o,f as v,g as p,F as i,h as d,t as A}from"./index-DWyrRSv0.js";const h=R({__name:"MainLayout",setup(F){const m=M(),b=O(),s=[{value:c.settings,label:"Settings"},{value:c.orderBook,label:"Order Book"}],a=S(m.name),f=r=>{b.push({name:r})};return(r,l)=>{const w=e("v-icon"),k=e("v-app-bar-title"),V=e("v-tab"),B=e("v-tabs"),C=e("v-app-bar"),g=e("router-view"),y=e("v-container"),T=e("v-tabs-window-item"),x=e("v-tabs-window"),E=e("v-main"),N=e("v-app");return u(),U(N,null,{default:t(()=>[o(C,{elevation:17},{prepend:t(()=>[o(w,{icon:"$vuetify-outline"})]),append:t(()=>[o(B,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=n=>a.value=n)},{default:t(()=>[(u(),v(i,null,p(s,(n,_)=>o(V,{key:_,value:n.value,onClick:L=>f(n.value)},{default:t(()=>[d(A(n.label),1)]),_:2},1032,["value","onClick"])),64))]),_:1},8,["modelValue"])]),default:t(()=>[o(k,null,{default:t(()=>[d("Order Book")]),_:1})]),_:1}),o(E,null,{default:t(()=>[o(x,{modelValue:a.value,"onUpdate:modelValue":l[1]||(l[1]=n=>a.value=n)},{default:t(()=>[(u(),v(i,null,p(s,(n,_)=>o(T,{key:_,value:n.value},{default:t(()=>[o(y,null,{default:t(()=>[o(g)]),_:1})]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1})}}});export{h as default};