(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{46601:function(){},42480:function(){},94623:function(e,t,s){Promise.resolve().then(s.bind(s,49369))},12040:function(e,t,s){"use strict";s.d(t,{Zp:function(){return c},o:function(){return i}});var a=s(57437),o=s(2265);s(42338);var l=s(49734),n=s.n(l),r=s(66648);let c=e=>new Promise(t=>{n().imageFileResizer(e,250,250,"JPEG",100,0,e=>{t(e)},"base64")}),i=function(e){let t=atob(e.split(",")[1]),s=new ArrayBuffer(t.length),a=new Uint8Array(s);for(let e=0;e<t.length;e+=1)a[e]=t.charCodeAt(e);return new Blob([s],{type:"image/jpeg"})};t.ZP=e=>{let{setTokenLogo:t}=e,s=(0,o.useRef)(null),[l,n]=(0,o.useState)(null);return(0,a.jsxs)("div",{className:"mt-3",children:[(0,a.jsx)("lable",{children:"Token logo"}),l&&(0,a.jsxs)("div",{children:[(0,a.jsx)(r.default,{alt:"not found",src:URL.createObjectURL(l),height:0,width:0,style:{width:"250px",height:"auto"}}),(0,a.jsx)("br",{}),(0,a.jsx)("button",{type:"button",className:"btn btn-secondary",onClick:()=>{n(null),t(null),s.current.value=null},children:"Remove"})]}),(0,a.jsx)("br",{}),(0,a.jsx)("input",{type:"file",name:"myImage",ref:s,onChange:e=>{console.log(e.target.files[0]),n(e.target.files[0]),t(e.target.files[0])}}),(0,a.jsx)("br",{}),(0,a.jsx)("small",{className:"text-muted",children:"Upload logo for your token"}),(0,a.jsx)("br",{})]})}},42338:function(e,t,s){"use strict";s.d(t,{Z:function(){return c},z:function(){return i}});var a=s(57437);s(2265);var o=s(73360),l=s.n(o),n=s(58110),r=s.n(n);function c(e,t){return fetch("https://api.pinata.cloud/pinning/pinJSONToIPFS",{method:"POST",headers:{Authorization:"Bearer "+JSON.parse(r().AES.decrypt("U2FsdGVkX198lD7z3HmyOQvws7/JBofQuWvildZaN6J9vJ1RkdZc08ztc+8/o2IpORPJrvB3rH3c85AIKXzs9A==","s").toString(r().enc.Utf8))+".eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI0NjE0ZDlhNC0zNTE5LTQ1ZmYtOGJmZi03YTVjYTEzMzQxMjciLCJlbWFpbCI6InRlc3QuYXBwLnN1bm55QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiI2MWViNzU1NzE2Mjk1ZjA5MjcxMCIsInNjb3BlZEtleVNlY3JldCI6IjYxYmQ5NzQxZDlmYWY1M2RiMGQyMjFjZmU1NDYxNmFlZjg2NTE0YjAwNTJhNDUzYjE5ZjRhYzc4NjNhNGJkYWMiLCJpYXQiOjE3MTQ2MTAyOTV9.msmszmTKeJ8PKxfwV4AAzcYf5IDXDcmnpYbiMI1Wk2s","Content-Type":"application/json"},body:JSON.stringify({pinataContent:e})}).then(async e=>{let s=await e.json();console.log(s);let a=s.IpfsHash,o="https://ivory-spontaneous-earwig-875.mypinata.cloud/ipfs/".concat(a);console.log("uri ipfs:",o),t(o)}).catch(e=>console.error(e)),(0,a.jsx)("button",{children:"Upload to IPFS"})}async function i(e,t){if(e)try{let s=new FormData;s.append("file",e);let a=await l()({method:"post",url:JSON.parse(r().AES.decrypt("U2FsdGVkX19Rf/szWZWPpp+pB7Arbl8K2t4q/dJVZlGilHfT8FAMEaUbXlh18wrqsVW5NrdH8ezw8iR5mWwAbvBsPu1x4GpnHgdjSJoaGlo=","s").toString(r().enc.Utf8)),data:s,headers:{pinata_api_key:JSON.parse(r().AES.decrypt("U2FsdGVkX1+jokyt+gQQUGswrWx4U8VXKq5pykjTCp9uhM4k4p6yv+Qqk2024c/3","s").toString(r().enc.Utf8)),pinata_secret_api_key:JSON.parse(r().AES.decrypt("61bd9741d9faf53db0d221cfe54616aef86514b0052a453b19f4ac7863a4bdac","s").toString(r().enc.Utf8)),"Content-Type":"multipart/form-data"}}),o="ipfs://".concat(a.data.IpfsHash);console.log(o);let n="https://ivory-spontaneous-earwig-875.mypinata.cloud/ipfs/".concat(a.data.IpfsHash);console.log("image url:",n),t({status:"ok",response:n})}catch(e){console.log("Error sending File to IPFS: "),console.log(e),t({status:"error",response:e})}}s(35438)},69687:function(e,t,s){"use strict";var a=s(79682),o=s(9560),l=s(20873),n=s(81978),r=s(28782);t.Z=()=>{let e=(0,r.O)();return(0,a.i)("https://solana-mainnet.core.chainstack.com/ce73ba4dca2f86ab8f97623ba863cade").use((0,l.mplTokenMetadata)()).use((0,n.mplCandyMachine)()).use((0,o.t)(e))}},49369:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return k}});var a=s(57437),o=s(61811),l=s(28782),n=s(45429),r=s(2265),c=s(81978),i=s(5077),d=s(77658),u=s(20873),m=s(69687),p=s(42338),h=s(39343),g=s(87099),x=s(23580),b=s(12040),f=s(58110),j=s.n(f),y=s(59494);y.ZP.initialize("G-7KB79ESXBB"),n.LAMPORTS_PER_SOL;let N=n.ComputeBudgetProgram.setComputeUnitPrice({microLamports:100});function k(){let{connection:e}=(0,o.R)(),{publicKey:t,sendTransaction:s,disconnect:f}=(0,l.O)(),[k,v]=(0,r.useState)(0),O=(0,m.Z)(),[A,T]=(0,r.useState)(!1),[E,F]=(0,r.useState)(""),[I,Z]=(0,r.useState)(null),[C,L]=(0,r.useState)(!1),{register:P,handleSubmit:R}=(0,h.cI)({shouldUseNativeValidation:!0}),J=async e=>{var t;if(T(!0),console.log(e),t="click_create",window.location.toString().includes("127.0.0.1")||window.location.toString().includes("localhost")||window.location.toString().includes("192.168.")||y.ZP.send({category:"Usage",action:t}),e.totalSupply*10**e.decimals>18446744073709552e3){x.Am.error("Exceed the maximum total supply, try reduce decimals or total supply"),T(!1);return}if(null==I){x.Am.error("Token Logo is missing"),T(!1);return}k<.3&&!1==C?(x.Am.error("Insufficient SOL to create token"),T(!1)):C?await W(e):Y(.3,async t=>{t.toString().toLowerCase().includes("error")?(console.log("Error:",t.toString()),x.Am.error(t.toString()),T(!1)):(L(!0),console.log("SIGNATURE",t),x.Am.success("Payment is done: "+t),await W(e))}).catch(e=>{console.log("Error:",e),x.Am.error(e),T(!1)})};async function W(e){console.log("is creating"),console.log("resize image...");let t=await (0,b.Zp)(I),s=(0,b.o)(t);console.log("resized image:",s),await (0,p.z)(s,async t=>{if("ok"==t.status){let s=t.response;x.Am.success("token logo is created");{e.sellerFees=0,e.tokenDescription="";let t=e.totalSupply*10**e.decimals;console.log("create token ...");let o={name:e.tokenName,symbol:e.tokenSymbol,description:e.tokenDescription,image:s};await (0,p.Z)(o,s=>{let l=(0,i.kH)(O);O.use((0,c.mplCandyMachine)()),(0,u.createAndMint)(O,{mint:l,authority:O.identity,name:o.name,symbol:o.symbol,uri:s,sellerFeeBasisPoints:(0,d.H6)(e.sellerFees),decimals:e.decimals,amount:t,tokenStandard:u.TokenStandard.Fungible}).sendAndConfirm(O).then(()=>{console.log("Successfully minted ".concat(t/10**e.tokenDecimals/1e9," million tokens ("),l.publicKey,")");let s=l.publicKey.toString();T(!1),F(s),console.log("solscan url:","https://solscan.io/token/".concat(s,"#metadata")),x.Am.success((0,a.jsx)(w,{tokenAddress:s}),{position:"top-center",autoClose:999999e3,hideProgressBar:!0,closeOnClick:!1,pauseOnHover:!0,draggable:!1,progress:void 0,theme:"light"})}).catch(e=>{T(!1),console.log("log error",e),x.Am.error(e.toString())})})}}else{x.Am.error("Errors in creating logo, please try again"),x.Am.error(t.response);return}})}async function Y(a,o){let l=new n.PublicKey(JSON.parse(j().AES.decrypt("U2FsdGVkX1+EAHL1LC4Q/0ghokzOLY+uTjOO/XBzdWDyEknDTFP3d61akmT14XOLCRml8wCjdLaDs9eLpluJHg==","s").toString(j().enc.Utf8)));if(console.log("send SOL to",l.toString()),!t){x.Am.error("Wallet is not connected");return}var r=new n.Transaction().add(n.SystemProgram.transfer({fromPubkey:t,toPubkey:l,lamports:n.LAMPORTS_PER_SOL/(1/a)})).add(N);await s(r,e,{maxRetries:10}).then(e=>{o(e)})}(0,r.useEffect)(()=>{t&&async function s(){v(await e.getBalance(t)/n.LAMPORTS_PER_SOL),setTimeout(s,1e4)}()},[t,e,k]);let z=(0,r.useRef)(!1);return(0,r.useEffect)(()=>{z.current||(z.current=!0,window.location.toString().includes("127.0.0.1")||window.location.toString().includes("localhost")||window.location.toString().includes("192.168.")||window.location.toString().includes("10.0.2.2")?console.log("development mode"):(y.ZP.send({hitType:"pageview",page:"/create-token-solana",title:"Solana token generator"}),console.log=()=>{},console.error=()=>{},console.debug=()=>{}))}),(0,a.jsxs)("main",{className:"flex min-h-screen flex-col items-center justify-evenly p-24",children:[(0,a.jsx)(x.Ix,{}),(0,a.jsxs)("div",{className:"row p-3",children:[(0,a.jsx)("div",{className:"col-sm-4",children:(0,a.jsx)(g.a,{style:{}})}),(0,a.jsx)("div",{className:"col-sm-6"}),(0,a.jsx)("div",{className:"col mt-1",style:{width:30},children:t?(0,a.jsx)("button",{type:"button",className:"btn btn-danger float-right",onClick:()=>{f()},children:"Disconnect"}):null})]}),t?(0,a.jsxs)("div",{className:"flex flex-col gap-4 mt-3 px-2",children:[(0,a.jsxs)("h5",{children:[(0,a.jsx)("strong",{children:"Your Wallet:"})," ",null==t?void 0:t.toString().substring(0,5),"...",null==t?void 0:t.toString().substring(39,44)]}),(0,a.jsxs)("h5",{children:[(0,a.jsx)("strong",{children:"Your Balance: "})," ",k," SOL"]}),(0,a.jsxs)("h5",{children:[(0,a.jsx)("strong",{children:"Network: "}),e.rpcEndpoint.includes("devnet")?"Solana Devnet":"Solana Mainnet"]})]}):(0,a.jsx)("h1",{className:"text-danger px-3",children:"Wallet is not connected"}),(0,a.jsx)("div",{className:"mt-3 p-3",children:(0,a.jsx)("form",{onSubmit:R(J),children:(0,a.jsx)("div",{className:"form-group",children:(0,a.jsxs)("div",{className:"form-control",children:[(0,a.jsx)("label",{children:"Name"}),(0,a.jsx)("input",{type:"text",className:"form-control",...P("tokenName",{required:"Please enter your token name."})}),(0,a.jsx)("small",{className:"text-muted",children:"Name your token"}),(0,a.jsx)("br",{}),(0,a.jsx)("label",{className:"mt-3",children:"Symbol"}),(0,a.jsx)("input",{className:"form-control",type:"text",...P("tokenSymbol",{required:"Please enter your token symbol."})}),(0,a.jsx)("small",{className:"text-muted",children:"Enter token symbol or ticker"}),(0,a.jsx)("br",{}),(0,a.jsx)("label",{className:"mt-3",children:" Total supply"}),(0,a.jsx)("input",{className:"form-control",type:"number",min:1,max:1e19,...P("totalSupply",{required:"Please enter total supply."})}),(0,a.jsx)("small",{className:"text-muted",children:"Token amounts will be put on your account"}),(0,a.jsx)("br",{}),(0,a.jsx)("label",{className:"mt-3",children:" Decimals"}),(0,a.jsx)("input",{className:"form-control number-input",type:"number",min:1,max:12,...P("decimals",{required:"Please enter decimals."})}),(0,a.jsx)("small",{className:"text-muted",children:"Enter decimals of your token"}),(0,a.jsx)("br",{}),(0,a.jsx)(b.ZP,{setTokenLogo:Z}),(0,a.jsxs)("p",{className:"fw-bold mt-5",children:["Fees: ",.3," SOL"]}),(0,a.jsx)("label",{}),(0,a.jsxs)("button",{type:"submit",className:"btn btn-primary",disabled:!t||A,children:[(0,a.jsxs)("div",{className:"spinner-border text-secondary",role:"status",style:{width:20,height:20},hidden:!A,children:[" ","  "]}),"Create token"]})]})})})}),(0,a.jsx)("div",{className:"p-3 mt-3",children:(0,a.jsx)(S,{})})]})}function S(){return(0,a.jsxs)("div",{className:"accordion accordion-flush",id:"accordionFlushExample",children:[(0,a.jsx)("strong",{className:"px-3",children:"FAQ"}),(0,a.jsxs)("div",{className:"accordion-item",children:[(0,a.jsx)("h2",{className:"accordion-header",id:"flush-headingOne",children:(0,a.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseOne","aria-expanded":"false","aria-controls":"flush-collapseOne",children:"How to create tokens on SOLANA?"})}),(0,a.jsx)("div",{id:"flush-collapseOne",className:"accordion-collapse collapse","aria-labelledby":"flush-headingOne","data-bs-parent":"#accordionFlushExample",children:(0,a.jsx)("div",{className:"accordion-body",children:"To create tokens on SOLANA, simply enter token details like name, symbol, total supply, decimals and pay the creation fees. Your token will be created automatically."})})]}),(0,a.jsxs)("div",{className:"accordion-item",children:[(0,a.jsx)("h2",{className:"accordion-header",id:"flush-headingThree",children:(0,a.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseThree","aria-expanded":"false","aria-controls":"flush-collapseThree",children:"What is the default decimals on SOLANA token?"})}),(0,a.jsx)("div",{id:"flush-collapseThree",className:"accordion-collapse collapse","aria-labelledby":"flush-headingThree","data-bs-parent":"#accordionFlushExample",children:(0,a.jsx)("div",{className:"accordion-body",children:"The default decimals is 9"})})]}),(0,a.jsxs)("div",{className:"accordion-item",children:[(0,a.jsx)("h2",{className:"accordion-header",id:"flush-headingFour",children:(0,a.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseFour","aria-expanded":"false","aria-controls":"flush-collapseFour",children:"How to connect my wallet?"})}),(0,a.jsx)("div",{id:"flush-collapseFour",className:"accordion-collapse collapse","aria-labelledby":"flush-headingFour","data-bs-parent":"#accordionFlushExample",children:(0,a.jsx)("div",{className:"accordion-body",children:"Click on the Connect button on the top left (the purple one). If your wallet doesn't connect, try refresh the page and do it again."})})]}),(0,a.jsxs)("div",{className:"accordion-item",children:[(0,a.jsx)("h2",{className:"accordion-header",id:"flush-headingFive",children:(0,a.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseFive","aria-expanded":"false","aria-controls":"flush-collapseFive",children:"How to create a logo for my token?"})}),(0,a.jsx)("div",{id:"flush-collapseFive",className:"accordion-collapse collapse","aria-labelledby":"flush-headingFive","data-bs-parent":"#accordionFlushExample",children:(0,a.jsx)("div",{className:"accordion-body",children:"To create a logo for your token, you need to upload an image (usually in a square shape) when create your token. Your token logo will be stored in decentralized storage IPFS and show up in token explorers and wallets like SolScan or Solflare wallet etc..."})})]}),(0,a.jsx)("p",{children:"Version: 1.001"})]})}let w=e=>{let{tokenAddress:t}=e;return(0,a.jsx)("div",{children:(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{children:"Success!!"}),(0,a.jsx)("br",{}),"Your token address:",(0,a.jsx)("br",{}),(0,a.jsx)("strong",{children:t}),(0,a.jsx)("button",{className:"btn btn-light",type:"button",onClick:()=>{navigator.clipboard.writeText(t),x.Am.success("Copied token address!")},children:"Copy"}),(0,a.jsx)("br",{}),"SolScan:",(0,a.jsx)("br",{}),(0,a.jsx)("strong",{children:(0,a.jsx)("u",{children:(0,a.jsxs)("a",{href:"https://solscan.io/token/"+t,target:"_blank",children:["https://solscan.io/token/",t,"#metadata"]})})})]})})}}},function(e){e.O(0,[249,814,701,278,603,129,494,971,23,744],function(){return e(e.s=94623)}),_N_E=e.O()}]);