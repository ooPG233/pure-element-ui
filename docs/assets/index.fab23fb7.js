import{o as e,c as t}from"./vendor.261904bb.js";const o={name:"Index",data:()=>({test:1}),methods:{click1(){console.log(this.$route.matched.filter((e=>e.name&&e.meta.title))),console.log(this.$route.matched)}}};o.render=function(o,c,n,i,l,s){return e(),t("div",{class:"index",onClick:c[1]||(c[1]=(...e)=>s.click1&&s.click1(...e))})};export default o;