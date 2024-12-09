(()=>{var e={};e.id=859,e.ids=[859],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},2412:e=>{"use strict";e.exports=require("assert")},4735:e=>{"use strict";e.exports=require("events")},9021:e=>{"use strict";e.exports=require("fs")},1630:e=>{"use strict";e.exports=require("http")},5591:e=>{"use strict";e.exports=require("https")},3873:e=>{"use strict";e.exports=require("path")},7910:e=>{"use strict";e.exports=require("stream")},9551:e=>{"use strict";e.exports=require("url")},8354:e=>{"use strict";e.exports=require("util")},4075:e=>{"use strict";e.exports=require("zlib")},4647:()=>{},3449:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>c,pages:()=>u,routeModule:()=>p,tree:()=>l});var s=r(260),a=r(8203),n=r(5155),o=r.n(n),i=r(7292),d={};for(let e in i)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>i[e]);r.d(t,d);let l=["",{children:["updatePassword",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,3512)),"/media/ken/DISK/Coderatory/erp_frontend/src/app/updatePassword/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,1354)),"/media/ken/DISK/Coderatory/erp_frontend/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9937,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["/media/ken/DISK/Coderatory/erp_frontend/src/app/updatePassword/page.tsx"],c={require:r,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/updatePassword/page",pathname:"/updatePassword",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},7922:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,3219,23)),Promise.resolve().then(r.t.bind(r,4863,23)),Promise.resolve().then(r.t.bind(r,5155,23)),Promise.resolve().then(r.t.bind(r,9350,23)),Promise.resolve().then(r.t.bind(r,6313,23)),Promise.resolve().then(r.t.bind(r,8530,23)),Promise.resolve().then(r.t.bind(r,8921,23))},4778:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,6959,23)),Promise.resolve().then(r.t.bind(r,3875,23)),Promise.resolve().then(r.t.bind(r,8903,23)),Promise.resolve().then(r.t.bind(r,4178,23)),Promise.resolve().then(r.t.bind(r,6013,23)),Promise.resolve().then(r.t.bind(r,7190,23)),Promise.resolve().then(r.t.bind(r,1365,23))},5595:(e,t,r)=>{Promise.resolve().then(r.bind(r,1062))},6211:(e,t,r)=>{Promise.resolve().then(r.bind(r,4750))},7584:(e,t,r)=>{Promise.resolve().then(r.bind(r,3512))},5451:(e,t,r)=>{Promise.resolve().then(r.bind(r,2316))},9661:(e,t,r)=>{"use strict";r.d(t,{O:()=>s});let s="https://erp-woad-pi.vercel.app/v1"},2316:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});var s=r(5512),a=r(8009),n=r(9334),o=r(9400),i=r(7722),d=r(4750),l=r(8750),u=r(7139),c=r(2742);function p(){let[e,t]=(0,a.useState)(""),[r,p]=(0,a.useState)(""),[m,f]=(0,a.useState)(!1),[h,v]=(0,a.useState)(!1),[x,b]=(0,a.useState)(!1),[g,y]=(0,a.useState)(null),w=(0,n.useRouter)(),P=(0,n.useSearchParams)().get("token"),j=e=>{"newPassword"===e.target.name?t(e.target.value):p(e.target.value)},_=async t=>{if(t.preventDefault(),!P){d.oR.error("Invalid or missing reset token."),w.push("/forgot-password");return}if(e!==r){y("Passwords do not match.");return}b(!0),y(null);try{await (0,l.wq)(P,e),d.oR.success("Password updated successfully!"),w.push("/login")}catch(e){y(e?.message||"An error occurred. Please try again."),d.oR.error("Failed to update password. Please try again.")}finally{b(!1)}};return(0,s.jsx)("div",{className:"flex items-center bg-gray-300 justify-center min-h-screen px-5",children:(0,s.jsxs)("div",{className:"max-w-lg w-full bg-white p-8 shadow-xl rounded-xl",children:[(0,s.jsx)("h1",{className:"text-3xl font-bold mb-4 text-center",children:"Update Password"}),(0,s.jsx)("p",{className:"text-center mb-6 text-gray-600",children:"Enter your new password below."}),(0,s.jsxs)("form",{onSubmit:_,className:"space-y-4",children:[(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)(i.p,{type:m?"text":"password",name:"newPassword",placeholder:"New password",value:e,onChange:j,required:!0}),(0,s.jsx)("button",{type:"button",onClick:()=>f(!m),className:"absolute inset-y-0 right-0 pr-3 flex items-center",children:m?(0,s.jsx)(u.y46,{}):(0,s.jsx)(c.DYD,{})})]}),(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)(i.p,{type:h?"text":"password",name:"confirmPassword",placeholder:"Confirm password",value:r,onChange:j,required:!0}),(0,s.jsx)("button",{type:"button",onClick:()=>v(!h),className:"absolute inset-y-0 right-0 pr-3 flex items-center",children:h?(0,s.jsx)(u.y46,{}):(0,s.jsx)(c.DYD,{})})]}),(0,s.jsx)(o.$,{type:"submit",disabled:x,className:"w-full",children:x?"Updating...":"Update Password"}),g&&(0,s.jsx)("p",{className:"text-red-500",children:g})]})]})})}},9400:(e,t,r)=>{"use strict";r.d(t,{$:()=>l});var s=r(5512),a=r(8009),n=r(2705),o=r(1643),i=r(4195);let d=(0,o.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),l=a.forwardRef(({className:e,variant:t,size:r,asChild:a=!1,...o},l)=>{let u=a?n.DX:"button";return(0,s.jsx)(u,{className:(0,i.cn)(d({variant:t,size:r,className:e})),ref:l,...o})});l.displayName="Button"},7722:(e,t,r)=>{"use strict";r.d(t,{p:()=>o});var s=r(5512),a=r(8009),n=r(4195);let o=a.forwardRef(({className:e,type:t,...r},a)=>(0,s.jsx)("input",{type:t,className:(0,n.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),ref:a,...r}));o.displayName="Input"},4195:(e,t,r)=>{"use strict";r.d(t,{cn:()=>n});var s=r(2281),a=r(4805);function n(...e){return(0,a.QP)((0,s.$)(e))}},8750:(e,t,r)=>{"use strict";r.d(t,{ZN:()=>n,jN:()=>o,q$:()=>i,wq:()=>d});var s=r(5668),a=r(9661);let n=async e=>{try{return(await s.A.post(`${a.O}/client/register`,e)).data}catch(e){console.error("Error during registration:",e.response.data||e)}};async function o(e){let t=await fetch(`${a.O}/client/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!t.ok)throw Error("Login failed");return await t.json()}let i=async e=>(await s.A.post(`${a.O}/client/reset-password`,{email:e})).data,d=async(e,t)=>(await s.A.post(`${a.O}/client/update-password`,{token:e,newPassword:t})).data},1354:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u,metadata:()=>l});var s=r(2740),a=r(2067),n=r.n(a),o=r(4738),i=r.n(o);r(1135);var d=r(1062);r(6070);let l={title:"ERP",description:"Generated by create next app"};function u({children:e}){return(0,s.jsx)("html",{lang:"en",children:(0,s.jsxs)("body",{className:`${n().variable} ${i().variable} antialiased`,children:[e,(0,s.jsx)(d.ToastContainer,{})," "]})})}},3512:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/media/ken/DISK/Coderatory/erp_frontend/src/app/updatePassword/page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/media/ken/DISK/Coderatory/erp_frontend/src/app/updatePassword/page.tsx","default")},440:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(8077);let a=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},1135:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[989,980,77,640,668,180],()=>r(3449));module.exports=s})();