"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[211],{6328:(e,t,l)=>{l.d(t,{Z:()=>o});var n=l(3645),r=l.n(n)()((function(e){return e[1]}));r.push([e.id,"#sidebar-wrapper{height:100%;margin-right:-250px;margin-top:-9px;overflow-y:auto;position:fixed;right:250px;transition:all .5s ease;width:auto;z-index:1000}",""]);const o=r},7211:(e,t,l)=>{l.r(t),l.d(t,{default:()=>Z});var n=l(821),r=(0,n.createElementVNode)("title",null,"Users",-1),o={class:"row gap-10 masonry pos-r"},a={class:"peers fxw-nw jc-sb ai-c"},c=(0,n.createElementVNode)("h3",null,"Users",-1),s={class:"peers"},d={class:"peer mR-10"},i={class:"peer"},m=(0,n.createTextVNode)("Add User"),u=(0,n.createElementVNode)("label",null,"Sample Inputs",-1),p=(0,n.createElementVNode)("input",{type:"text",class:"form-control"},null,-1),N=(0,n.createElementVNode)("button",{class:"btn btn-sm btn-primary mT-5 text-white"},"Filter",-1),h={class:"col-12"},V={class:"bgc-white p-20 bd"},E={class:"table table-hover"},v=(0,n.createElementVNode)("thead",null,[(0,n.createElementVNode)("tr",null,[(0,n.createElementVNode)("th",{scope:"col"},"Name"),(0,n.createElementVNode)("th",{scope:"col"},"Email"),(0,n.createElementVNode)("th",{scope:"col",style:{width:"30%"}}),(0,n.createElementVNode)("th",{scope:"col",style:{"text-align":"right"}},"Action")])],-1),f=(0,n.createElementVNode)("td",null,[(0,n.createElementVNode)("div",{class:"row g-3 align-items-center"},[(0,n.createElementVNode)("div",{class:"col-12 col-lg-auto text-center text-lg-start"}),(0,n.createElementVNode)("div",{class:"col-12 col-lg-auto text-center text-lg-start"})])],-1),b=(0,n.createElementVNode)("td",null,null,-1),g=(0,n.createElementVNode)("td",null,null,-1),w={style:{"text-align":"right"}},x={class:"dropdown dropstart"},k=(0,n.createElementVNode)("button",{class:"btn btn-secondary btn-sm action-btn",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false"},[(0,n.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-three-dots",viewBox:"0 0 16 16"},[(0,n.createElementVNode)("path",{d:"M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"})])],-1),y={class:"dropdown-menu action-dropdown","aria-labelledby":"dropdownMenuButton1"},B=(0,n.createElementVNode)("li",null,[(0,n.createElementVNode)("hr",{class:"dropdown-divider action-divider"})],-1),C=(0,n.createElementVNode)("div",{class:"row justify-content-center"},[(0,n.createElementVNode)("div",{class:"col-md-12"})],-1);l(2530),l(7184);const F={data:function(){return{filter:!1}},methods:{showFilter:function(){this.filter=!this.filter}}};const Z=(0,l(3744).Z)(F,[["render",function(e,t,l,F,Z,z){var S=(0,n.resolveComponent)("Head"),T=(0,n.resolveComponent)("Link"),_=(0,n.resolveComponent)("filtering");return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createVNode)(S,null,{default:(0,n.withCtx)((function(){return[r]})),_:1}),(0,n.createElementVNode)("div",o,[(0,n.createElementVNode)("div",a,[c,(0,n.createElementVNode)("div",s,[(0,n.createElementVNode)("div",d,[(0,n.withDirectives)((0,n.createElementVNode)("input",{"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.search=t}),type:"text",class:"form-control form-control-sm",placeholder:"Search..."},null,512),[[n.vModelText,e.search]])]),(0,n.createElementVNode)("div",i,[(0,n.createVNode)(T,{class:"btn btn-primary btn-sm",href:"/users/create"},{default:(0,n.withCtx)((function(){return[m]})),_:1}),(0,n.createElementVNode)("button",{class:"btn btn-primary btn-sm mL-2 text-white",onClick:t[1]||(t[1]=function(e){return z.showFilter()})},"Filter")])])]),Z.filter?((0,n.openBlock)(),(0,n.createBlock)(_,{key:0,onCloseFilter:t[2]||(t[2]=function(e){return Z.filter=!1})},{default:(0,n.withCtx)((function(){return[u,p,N]})),_:1})):(0,n.createCommentVNode)("",!0),(0,n.createElementVNode)("div",h,[(0,n.createElementVNode)("div",V,[(0,n.createElementVNode)("table",E,[v,(0,n.createElementVNode)("tbody",null,[(0,n.createElementVNode)("tr",null,[f,b,g,(0,n.createElementVNode)("td",w,[(0,n.createElementVNode)("div",x,[k,(0,n.createElementVNode)("ul",y,[(0,n.createElementVNode)("li",null,[(0,n.createElementVNode)("a",{class:"dropdown-item",href:"#",onClick:t[3]||(t[3]=function(t){return e.editPermissions(e.user.id)})},"Permissions")]),B])])])])])]),C])])])],64)}]])},2530:(e,t,l)=>{l.d(t,{Z:()=>h});var n=l(821),r={id:"sidebar-wrapper",class:"sidebar-nav nav navbar-inverse"},o={class:"row",style:{width:"380px"}},a={class:"bgc-white"},c={class:"modal-header",style:{"background-color":"#2F365F"}},s=(0,n.createElementVNode)("h5",{class:"modal-title text-light",id:"advancedFiltering"},"Advanced Filtering",-1),d={class:"modal-body bg-light"};const i={};var m=l(3379),u=l.n(m),p=l(6328),N={insert:"head",singleton:!1};u()(p.Z,N);p.Z.locals;const h=(0,l(3744).Z)(i,[["render",function(e,t,l,i,m,u){return(0,n.openBlock)(),(0,n.createElementBlock)("div",r,[(0,n.createElementVNode)("div",o,[(0,n.createElementVNode)("div",a,[(0,n.createElementVNode)("div",c,[s,(0,n.createElementVNode)("button",{type:"button",class:"btn-close",onClick:t[0]||(t[0]=function(t){return e.$emit("closeFilter")})})]),(0,n.createElementVNode)("div",d,[(0,n.renderSlot)(e.$slots,"default")])])])])}]])},7184:(e,t,l)=>{l.d(t,{Z:()=>i});var n=l(821),r={class:"pagination"},o={class:"page-item"},a=(0,n.createTextVNode)("Previous"),c={class:"page-item"},s=(0,n.createTextVNode)("Next");const d={props:{prev:String,next:String}};const i=(0,l(3744).Z)(d,[["render",function(e,t,l,d,i,m){var u=(0,n.resolveComponent)("Link");return(0,n.openBlock)(),(0,n.createElementBlock)("div",null,[(0,n.createElementVNode)("ul",r,[(0,n.createElementVNode)("li",o,[l.prev?((0,n.openBlock)(),(0,n.createBlock)(u,{key:0,class:"page-link",href:l.prev,"preserve-scroll":""},{default:(0,n.withCtx)((function(){return[a]})),_:1},8,["href"])):((0,n.openBlock)(),(0,n.createElementBlock)("span",{key:1,class:(0,n.normalizeClass)(["page-link",{"text-muted":!l.prev}])},"Previous",2))]),(0,n.createElementVNode)("li",c,[l.next?((0,n.openBlock)(),(0,n.createBlock)(u,{key:0,class:"page-link",href:l.next,"preserve-scroll":""},{default:(0,n.withCtx)((function(){return[s]})),_:1},8,["href"])):((0,n.openBlock)(),(0,n.createElementBlock)("span",{key:1,class:(0,n.normalizeClass)(["page-link",{"text-muted":!l.next}])},"Next",2))])])])}]])}}]);