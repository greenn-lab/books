import{d as r,c as l,v as u,x as m,o as i,f as p,t as d}from"./vue.esm-bundler-BesuOQRg.js";const o=r({__name:"BaseButton",props:{label:{},variant:{default:"primary"},size:{default:"medium"},onClick:{type:Function,default:()=>{}}},setup(n){return(e,a)=>(i(),l("button",{type:"button",class:m(["storybook-button",`storybook-button--${e.size}`,`storybook-button--${e.variant}`]),onClick:a[0]||(a[0]=(...t)=>e.onClick&&e.onClick(...t))},[u(e.$slots,"default",{},()=>[p(d(e.label),1)],!0)],2))}}),f=(n,e)=>{const a=n.__vccOpts||n;for(const[t,s]of e)a[t]=s;return a},y=f(o,[["__scopeId","data-v-9050fda9"]]);o.__docgenInfo={exportName:"default",displayName:"BaseButton",description:"",tags:{},props:[{name:"label",required:!1,type:{name:"string"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"primary"'},{name:'"secondary"'}]},defaultValue:{func:!1,value:"'primary'"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"small"'},{name:'"medium"'},{name:'"large"'}]},defaultValue:{func:!1,value:"'medium'"}},{name:"onClick",required:!1,type:{name:"TSFunctionType"},defaultValue:{func:!1,value:"() => {}"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/books/books/src/components/BaseButton.vue"]};export{y as B};
