(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[619],{46601:function(){},46719:function(e,r,t){Promise.resolve().then(t.bind(t,10481))},10481:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return s}});var o=t(57437),n=t(61811),a=t(28782),i=t(45429),l=t(2265);function s(){let{connection:e}=(0,n.R)(),{publicKey:r,sendTransaction:s}=(0,a.O)(),[c,d]=(0,l.useState)(0),u=async()=>{try{if(!r)throw Error("Wallet is not Connected");let[t,o]=await Promise.all([e.getLatestBlockhash(),e.requestAirdrop(r,1*i.LAMPORTS_PER_SOL)]);await e.confirmTransaction({signature:o,...t},"confirmed")&&alert("Airdrop was confirmed!")}catch(e){alert("You are Rate limited for Airdrop")}};return(0,l.useEffect)(()=>{r&&async function t(){d(await e.getBalance(r)/i.LAMPORTS_PER_SOL),setTimeout(t,1e4)}()},[r,e,c]),(0,o.jsx)("main",{className:"flex min-h-screen flex-col items-center justify-evenly p-24",children:r?(0,o.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,o.jsxs)("h1",{children:["Your Public key is: ",null==r?void 0:r.toString()]}),(0,o.jsxs)("h2",{children:["Your Balance is: ",c," SOL"]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("button",{onClick:u,type:"button",className:"text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700",children:"Get Airdrop"}),(0,o.jsx)("br",{}),(0,o.jsx)("button",{onClick:async()=>{let r=await e.getSlot();console.log(r),console.log(await e.getBlockTime(r)),console.log(await e.getBlock(r)),console.log(await e.getSlotLeader())},children:"get block"}),(0,o.jsx)("br",{}),(0,o.jsx)("button",{onClick:async()=>{var o=t(45429),n=o.Keypair.generate();console.log("send SOL to",n.publicKey.toString());var a=new o.Transaction().add(o.SystemProgram.transfer({fromPubkey:r,toPubkey:n.publicKey,lamports:o.LAMPORTS_PER_SOL/10}));console.log("SIGNATURE",await s(a,e)),console.log("SUCCESS")},children:"send SOL"})]})]}):(0,o.jsx)("h1",{children:"Wallet is not connected"})})}}},function(e){e.O(0,[814,701,971,23,744],function(){return e(e.s=46719)}),_N_E=e.O()}]);