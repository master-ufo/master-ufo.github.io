var a0_0x17c722=a0_0x515b;(function(_0x11677b,_0x2c90f3){var _0x1d786e=a0_0x515b,_0x53316f=_0x11677b();while(!![]){try{var _0x38cd69=parseInt(_0x1d786e(0x1f3))/0x1*(parseInt(_0x1d786e(0x20c))/0x2)+parseInt(_0x1d786e(0x217))/0x3+-parseInt(_0x1d786e(0x295))/0x4+parseInt(_0x1d786e(0x259))/0x5*(-parseInt(_0x1d786e(0x271))/0x6)+parseInt(_0x1d786e(0x23a))/0x7+-parseInt(_0x1d786e(0x20e))/0x8*(-parseInt(_0x1d786e(0x273))/0x9)+-parseInt(_0x1d786e(0x226))/0xa*(parseInt(_0x1d786e(0x262))/0xb);if(_0x38cd69===_0x2c90f3)break;else _0x53316f['push'](_0x53316f['shift']());}catch(_0x34e87b){_0x53316f['push'](_0x53316f['shift']());}}}(a0_0x2b7d,0x4cd0d));export async function readTextFile(_0x209d22){var _0x306576=a0_0x515b;try{var _0x21281a=(await makeRequest(_0x306576(0x244),_0x209d22))[_0x306576(0x26e)];return _0x21281a;}catch{return null;}}export function number(_0x1d88b2){var _0x14fe1f=a0_0x515b;return web3[_0x14fe1f(0x20a)][_0x14fe1f(0x292)](_0x1d88b2);}function makeRequest(_0x1f7573,_0x1f8435){return new Promise(function(_0x45a083,_0x1123c7){var _0x35edfb=a0_0x515b;let _0x5792e5=new XMLHttpRequest();_0x5792e5[_0x35edfb(0x28e)](_0x1f7573,_0x1f8435),_0x5792e5[_0x35edfb(0x27d)]=function(){var _0x45b36a=_0x35edfb;this['status']>=0xc8&&this['status']<0x12c?_0x45a083({'status':this[_0x45b36a(0x249)],'statusText':_0x5792e5[_0x45b36a(0x248)]}):_0x1123c7({'status':this['status'],'statusText':_0x5792e5['statusText']});},_0x5792e5[_0x35edfb(0x1ea)]=function(){var _0x123cfa=_0x35edfb;_0x1123c7({'status':this[_0x123cfa(0x249)],'statusText':_0x5792e5['statusText']});},_0x5792e5[_0x35edfb(0x270)]();});}function getGasPrice(_0x5e301a){var _0x29de96=a0_0x515b;web3[_0x29de96(0x286)][_0x29de96(0x26b)]()[_0x29de96(0x256)](_0x262eb4=>{var _0x4dc18b=_0x29de96;console[_0x4dc18b(0x203)](_0x4dc18b(0x209),_0x262eb4),_0x5e301a(_0x262eb4);});}async function getGasLimit(_0x14e407,_0x36c8f1){var _0x2b738e=a0_0x515b;setValue(_0x2b738e(0x22a),_0x2b738e(0x289)),showElement(_0x2b738e(0x22a));var _0x26df30=await web3[_0x2b738e(0x286)][_0x2b738e(0x1ec)](),_0x1993f4=0x0,_0x39097c=0x0,_0x46b391=0x0,_0x4ab3d4=0x0,_0x36f2bd=0x14;console[_0x2b738e(0x203)](_0x26df30),console[_0x2b738e(0x203)]('data_size',_0x14e407);for(let _0x3f088d=0x0;_0x3f088d<_0x36f2bd;_0x3f088d++){var _0x2a5c1d=await web3[_0x2b738e(0x286)]['getBlock'](_0x26df30-_0x3f088d),_0x1563c8=parseInt(_0x2a5c1d[_0x2b738e(0x24f)]/_0x2a5c1d[_0x2b738e(0x25d)]);console[_0x2b738e(0x203)]('gas_used_per_byte:'+_0x1563c8),_0x46b391+=_0x1563c8;}var _0x4ab3d4=parseInt(_0x14e407*_0x46b391/_0x36f2bd);console[_0x2b738e(0x203)]('average_gas_limit:'+_0x4ab3d4),_0x36c8f1(_0x4ab3d4),hideElement(_0x2b738e(0x22a));}function getDataSize(_0x459c37,_0x28f8f8){var _0x23eb10=a0_0x515b;return parseInt(_0x459c37[_0x23eb10(0x26a)]*0.5+_0x28f8f8[_0x23eb10(0x26a)]*0x20);}export async function deployContract(_0x5e9417,_0x29b37c,_0x1ff1f5,_0x2425b3,_0x1a94a7,_0x1a5322){var _0x51942c=a0_0x515b,_0x498006=await readTextFile(_0x29b37c+'abi'),_0x4a3c84=JSON[_0x51942c(0x29e)](_0x498006);console[_0x51942c(0x203)](Object[_0x51942c(0x28a)](_0x4a3c84)),console[_0x51942c(0x203)](_0x51942c(0x225),web3);var _0x5545ab=new web3[(_0x51942c(0x286))][(_0x51942c(0x223))](_0x4a3c84);console[_0x51942c(0x203)](_0x51942c(0x266)+_0x5545ab+_0x51942c(0x1e3));var _0x271f95=await readTextFile(_0x29b37c+_0x51942c(0x255));console[_0x51942c(0x203)](_0x29b37c+_0x51942c(0x255));if(isJsonString(_0x271f95)){var _0x45306a=JSON[_0x51942c(0x29e)](_0x271f95)[_0x51942c(0x20d)];_0x271f95=_0x45306a;}else{var _0x45306a=_0x271f95['trim']();_0x271f95=_0x45306a;}if(_0x5e9417=='rewardtoken'){if(typeof _0x1a94a7!==undefined&&_0x1a94a7!=null){_0x1a94a7=_0x1a94a7[_0x51942c(0x1e9)]('0x',''),_0x271f95=_0x271f95[_0x51942c(0x1e9)](/\$.*?\$/g,_0x51942c(0x23c)),_0x271f95=_0x271f95[_0x51942c(0x283)](_0x51942c(0x276),_0x1a94a7);var _0x36721c=getPrice(_0x5e9417);}else var _0x36721c='0';}else{var _0x79dc51=await isRefund(selectedAccount,_0x5e9417);console[_0x51942c(0x203)](_0x51942c(0x1fe),_0x79dc51);if(_0x79dc51)var _0x36721c=_0x51942c(0x1dc);else var _0x36721c=getPrice(_0x5e9417);}console[_0x51942c(0x203)]('\x0a\x20\x20library_address:\x20'+_0x1a94a7+_0x51942c(0x22f)+_0x271f95+_0x51942c(0x205)),console[_0x51942c(0x203)]('argument_array',_0x1ff1f5);if(_0x1ff1f5!=[]){var _0x4105d2=await getConstructor(_0x29b37c+_0x51942c(0x291)),_0x49a570=encodeParameters(_0x4105d2,_0x1ff1f5);console[_0x51942c(0x203)](_0x51942c(0x284),_0x49a570);}try{var _0x23b13e=_0x5545ab[_0x51942c(0x285)]({'data':_0x271f95,'arguments':_0x1ff1f5})[_0x51942c(0x235)](),_0x5e812b=await web3[_0x51942c(0x286)]['estimateGas']({'data':_0x23b13e,'from':selectedAccount,'value':web3['utils']['toHex'](web3[_0x51942c(0x20a)][_0x51942c(0x245)](_0x36721c,_0x51942c(0x216)))});console[_0x51942c(0x203)](_0x51942c(0x1fb),_0x23b13e),console[_0x51942c(0x203)](_0x51942c(0x1e4),_0x5e812b),getGasPrice(function(_0x181375){var _0x1dc916=_0x51942c;_0x5545ab[_0x1dc916(0x285)]({'data':_0x271f95,'arguments':_0x1ff1f5})['send']({'from':selectedAccount,'gas':_0x5e812b,'gasPrice':_0x181375,'value':web3[_0x1dc916(0x20a)][_0x1dc916(0x245)](_0x36721c,_0x1dc916(0x216))},function(_0x3b96e6,_0x2150d8){})[_0x1dc916(0x272)](_0x1dc916(0x20f),function(_0x1d1657){var _0x1511ba=_0x1dc916;console[_0x1511ba(0x203)](_0x1511ba(0x20f),_0x1d1657);})[_0x1dc916(0x272)]('sent',function(_0x582efa){var _0x4b7b46=_0x1dc916;console[_0x4b7b46(0x203)](_0x4b7b46(0x215),_0x582efa),setValue('deployStatus','Deploy\x20contract...'),showElement(_0x4b7b46(0x22a));})['on']('error',function(_0x34b72d){var _0x3b9a00=_0x1dc916;_0x2425b3(_0x3b9a00(0x233),_0x34b72d),hideElement(_0x3b9a00(0x22a));})['on'](_0x1dc916(0x254),function(_0x42990f){var _0x4bd901=_0x1dc916;_0x2425b3(_0x4bd901(0x254),_0x42990f);})['on'](_0x1dc916(0x1fd),function(_0x3178cd){var _0x2d4846=_0x1dc916;console[_0x2d4846(0x203)](_0x3178cd[_0x2d4846(0x288)]),_0x2425b3(_0x2d4846(0x1fd),_0x3178cd);})['on'](_0x1dc916(0x299),function(_0x3cdbd3,_0x537559){var _0x5f5df9=_0x1dc916;_0x2425b3(_0x5f5df9(0x299),_0x3cdbd3);})[_0x1dc916(0x256)](async function(_0x5a43b8){var _0x290b07=_0x1dc916;console[_0x290b07(0x203)](_0x5a43b8[_0x290b07(0x21d)][_0x290b07(0x1d4)]),_0x2425b3(_0x290b07(0x25f),_0x5a43b8[_0x290b07(0x21d)][_0x290b07(0x1d4)]),setValue('deployStatus',_0x290b07(0x252));if(!_0x29b37c['includes'](_0x290b07(0x274))){await sleep(0x1e);var _0x3faa14=_0x5a43b8[_0x290b07(0x21d)][_0x290b07(0x1d4)];console[_0x290b07(0x203)]('contract_address',_0x3faa14);var _0x40ee50=await readTextFile(_0x29b37c+_0x290b07(0x269));if(_0x29b37c[_0x290b07(0x246)](_0x290b07(0x2a1)))var _0x38e865='StandardToken';else{if(_0x29b37c['includes'](_0x290b07(0x219)))var _0x38e865='SafeToken';else{if(_0x29b37c[_0x290b07(0x246)](_0x290b07(0x21e)))var _0x38e865='LiquidityGenerator';else{if(_0x29b37c[_0x290b07(0x246)](_0x290b07(0x1e6)))var _0x38e865='DynamicToken';else{if(_0x29b37c[_0x290b07(0x246)](_0x290b07(0x279))&&!_0x29b37c[_0x290b07(0x246)](_0x290b07(0x229)))var _0x38e865=_0x290b07(0x251),_0x46ae0c=[_0x290b07(0x1e5)],_0x5d4944=['0x'+_0x1a94a7];else{if(_0x29b37c[_0x290b07(0x246)](_0x290b07(0x211)))var _0x38e865=_0x290b07(0x281);else{if(_0x29b37c[_0x290b07(0x246)](_0x290b07(0x232))||_0x29b37c[_0x290b07(0x246)]('MarketingTax'))var _0x38e865=_0x290b07(0x21f);else{if(_0x29b37c[_0x290b07(0x246)](_0x290b07(0x261))||_0x29b37c[_0x290b07(0x246)](_0x290b07(0x28b)))var _0x38e865='ProToken';else var _0x38e865='StandardToken';}}}}}}}var _0x3b93eb=await readTextFile(_0x29b37c+_0x290b07(0x1d6)),_0x19c03e=_0x49a570;!isDogeChain()?verifyContract(_0x3faa14,_0x40ee50,_0x38e865,_0x3b93eb,_0x19c03e,_0x46ae0c,_0x5d4944,_0x1a5322):verifyContractDogeChain(_0x3faa14,_0x40ee50,_0x38e865,_0x3b93eb,_0x19c03e,_0x46ae0c,_0x5d4944,_0x1a5322);}});});}catch(_0x558259){console['log'](_0x51942c(0x213),_0x558259),_0x2425b3(_0x51942c(0x233),_0x558259);}}export function sleep(_0x15cad8){return new Promise(_0x5e7a84=>{setTimeout(_0x5e7a84,_0x15cad8*0x3e8);});}export async function createToken(_0x2bb8bd,_0x2d0081,_0x3fc299,_0xb0aa16,_0x1e958a){var _0x26e476='./static/contracts/'+_0x2bb8bd+'/';await deployContract(_0x2bb8bd,_0x26e476,_0x2d0081,_0x3fc299,_0xb0aa16,_0x1e958a);}export async function deployLibrary(_0x253329,_0x46084f,_0x1a73a4,_0x539180){var _0x30db6d=a0_0x515b,_0x3ad3f8=_0x30db6d(0x1f7)+_0x253329+_0x30db6d(0x274);await deployContract(_0x253329,_0x3ad3f8,_0x46084f,_0x1a73a4,null,_0x539180);}export function copyToCliBoard(_0x2ed880){var _0x126c45=a0_0x515b,_0x22ca43=document[_0x126c45(0x24b)](_0x126c45(0x253));_0x22ca43['value']=_0x2ed880,document[_0x126c45(0x241)][_0x126c45(0x231)](_0x22ca43),_0x22ca43[_0x126c45(0x28f)](),document[_0x126c45(0x257)](_0x126c45(0x247)),document['body'][_0x126c45(0x2a0)](_0x22ca43),$('#copyTokenAddress')['attr']('data-bs-original-title',_0x126c45(0x29b)),$(_0x126c45(0x200))[_0x126c45(0x268)](_0x126c45(0x290),_0x126c45(0x29b)),$('#copyTokenAddress')[_0x126c45(0x1f0)]('show'),setTimeout(()=>{var _0x4c17d5=_0x126c45;$(_0x4c17d5(0x200))[_0x4c17d5(0x1f0)]('hide'),$(_0x4c17d5(0x200))[_0x4c17d5(0x268)](_0x4c17d5(0x290),'Copy\x20to\x20clipboard'),$('#copyTokenAddress')[_0x4c17d5(0x268)](_0x4c17d5(0x1fa),'');},0x1f4);}function a0_0x2b7d(){var _0x24cdf4=['getItem','open','select','title','abi','toBN','verifysourcecode','modal','1935656SLoaWQ','ajax','.router','text','confirmation','result','Copied!','display','css','parse','https://ftmscan.com/token/token_address#balances','removeChild','standard','click','address','none','compiler','ref','Meme\x20Coin','toLowerCase','https://api.etherscan.io/api','#tokenIntroDialog','0.00001','solidity-single-file','RR53SMQDSYM72529D24X997HT8PT6DPKWR','POST','https://cronoscan.com/token/token_address#balances','https://api.polygonscan.com/api','nonceLimit','\x0a\x20\x20\x20\x20\x20\x20\x20\x20','gaslimit','IterableMapping','dynamic','https://explorer.dogechain.dog/token/token_address#balances','FTM','replace','onerror','https://api-ropsten.etherscan.io/api','getBlockNumber','https://error.com/token/token_address#balances','message\x20:\x20','getTime','tooltip','#token_type','MATIC','624inDEOM','#create_refund','get','AES','./static/contracts/','BI9Z3US9AAMSGYUH3H2BN1MTG9RM4XPIY2','type','data-bs-original-title','bytecodeWithEncodedParameters','https://api.ftmscan.com/api','receipt','refund','https://api.snowtrace.io/api','#copyTokenAddress','network','components','log','BNB','\x0a\x20\x20','https://arbiscan.io/token/token_address#balances','127.0.0.1','#refund_address','gas_price:','utils','hide','1642EvJjrl','object','8GtPvYb','sending','ref:\x20','smarttax','status\x20:\x20','try\x20estimate\x20gas\x20limit','https://snowtrace.io/token/token_address#balances','sent','ether','1543797VduUyS','name','safemoon','error!','validUntil','toString','options','liquiditygenerator','MarketingTax','concat','_blank','PI8GHA1Y78H49TCNHMWWRTI49I5CMPGNDD','Contract','U2FsdGVkX18LPdncmupa7ilvm13+yiEmPaTmwe/TQxrQr7yjynMVfh66z4J0sGLoLvU7+yS/SqYThp2aW/W2zA==','web3\x20object','194170DxeCWM','#contactDev','removeItem','_reward','deployStatus','hostname','toChecksumAddress','checkverifystatus','boss','\x0a\x0a\x20\x20data:\x20','contract','appendChild','marketingtax','error','enc','encodeABI','https://bsc-dataseed.binance.org/','test','M4JST2ZP7HWZIWF1FDD8ASEEDDS46VY1GS','val','682976dDLBfK','mobile','random_placeholder','struct','EZGY4849U5XYQJX951P8UPZJSS7EI65XDU','AVAX','https://api.cronoscan.com/api','body','wDOGE','Unexpected\x20Error','GET','toWei','includes','copy','response','status','location','createElement','getTransactionCount','internalType','message','gasUsed','timestampLimit','RewardToken','Verify\x20contract...','input','transactionHash','data','then','execCommand','pro','155KhAmhv','ETH','#btnDialog','tokenType','size','https://etherscan.io/token/token_address#balances','done','constructor','promax','121LTPuvX','inputs','show','isAddress','\x0a\x20\x20\x20\x20\x20\x20\x20\x20new\x20contract:\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20','https://api-testnet.bscscan.com/api','attr','sol','length','getGasPrice','result\x20:\x20','block','statusText','https://explorer-testnet.dogechain.dog/token/token_address#balances','send','24132fozCsX','once','111141OjbVAM','/lib.','https://api-goerli.arbiscan.io/api','__random_placeholder__','766DTFB4CU8EF1P311MQ75QIAZSKFD5MA1','search','reward','keys','values_array','https://ropsten.etherscan.io/token/token_address#balances','onload','setItem','Utf8','toUpperCase','SmartTax','https://api.arbiscan.io/api','replaceAll','encoded_constructor','deploy','eth','https://polygonscan.com/token/token_address#balances','contractAddress','Estimate\x20gas\x20limit...','values','ProToken','decrypt'];a0_0x2b7d=function(){return _0x24cdf4;};return a0_0x2b7d();}export function setValue(_0x4a0d50,_0x274aad){var _0x3ba7b1=a0_0x515b;$('.'+_0x4a0d50)[_0x3ba7b1(0x298)](_0x274aad);}export function hideElement(_0x5b2d71){var _0x2147fc=a0_0x515b;$('.'+_0x5b2d71)[_0x2147fc(0x29d)](_0x2147fc(0x29c),_0x2147fc(0x1d5));}export function showElement(_0x13f68b){var _0x2bd520=a0_0x515b;$('.'+_0x13f68b)[_0x2bd520(0x29d)](_0x2bd520(0x29c),_0x2bd520(0x26d));}export function verifyContract(_0x3ec7fa,_0x11f9e9,_0x2832a7,_0x34b1c3,_0x386206,_0xff9c36,_0x3d793b,_0x38f292){var _0x565ad6=a0_0x515b;_0xff9c36==undefined&&(_0xff9c36=['']);_0x3d793b==undefined&&(_0x3d793b=['']);var _0x496048=getApiKey(),_0x37e3ca=getApiUrl();$[_0x565ad6(0x296)]({'type':_0x565ad6(0x1df),'url':_0x37e3ca,'data':{'apikey':_0x496048,'module':'contract','action':_0x565ad6(0x293),'contractaddress':_0x3ec7fa,'sourceCode':_0x11f9e9,'codeformat':_0x565ad6(0x1dd),'contractname':_0x2832a7,'compilerversion':_0x34b1c3,'optimizationUsed':0x1,'runs':0xc8,'constructorArguements':_0x386206,'evmversion':'','licenseType':0x1,'libraryname1':_0xff9c36[0x0],'libraryaddress1':_0x3d793b[0x0],'libraryname2':'','libraryaddress2':'','libraryname3':'','libraryaddress3':'','libraryname4':'','libraryaddress4':'','libraryname5':'','libraryaddress5':'','libraryname6':'','libraryaddress6':'','libraryname7':'','libraryaddress7':'','libraryname8':'','libraryaddress8':'','libraryname9':'','libraryaddress9':'','libraryname10':'','libraryaddress10':''},'success':function(_0x112e0a){var _0x44161f=_0x565ad6;console['log'](_0x112e0a),_0x112e0a[_0x44161f(0x249)]=='1'?console[_0x44161f(0x203)](_0x112e0a['status']+';'+_0x112e0a[_0x44161f(0x24e)]+';'+_0x112e0a[_0x44161f(0x29a)]):console[_0x44161f(0x203)](_0x112e0a[_0x44161f(0x249)]+';'+_0x112e0a[_0x44161f(0x24e)]+';'+_0x112e0a[_0x44161f(0x29a)]),console[_0x44161f(0x203)](_0x44161f(0x212)+_0x112e0a[_0x44161f(0x249)]),console[_0x44161f(0x203)]('result\x20:\x20'+_0x112e0a['result']),_0x38f292!=null&&_0x38f292!=undefined&&_0x38f292(_0x3ec7fa,_0x112e0a);},'error':function(_0x158297){var _0xd126c=_0x565ad6;console[_0xd126c(0x203)](_0xd126c(0x21a)),console[_0xd126c(0x203)](_0xd126c(0x243)),console[_0xd126c(0x203)](_0x158297),_0x38f292!=null&&_0x38f292!=undefined&&_0x38f292(_0x3ec7fa,_0x158297);}});}export function verifyContractDogeChain(_0x458a1d,_0x4e3307,_0x136636,_0x56e767,_0xf7a16f,_0x25ed84,_0x5e211a,_0x351921){var _0xcc65ab=a0_0x515b;_0x25ed84==undefined&&(_0x25ed84=['']);_0x5e211a==undefined&&(_0x5e211a=['']);var _0x20730c=getApiUrl();$['ajax']({'type':_0xcc65ab(0x1df),'url':_0x20730c,'data':{'module':_0xcc65ab(0x230),'action':'verify','addressHash':_0x458a1d,'contractSourceCode':_0x4e3307,'name':_0x136636,'compilerVersion':_0x56e767,'optimization':!![],'optimizationRuns':0xc8,'constructorArguments':_0xf7a16f,'library1Name':_0x25ed84[0x0],'library1Address':_0x5e211a[0x0],'library2Name':'','library2Address':'','library3Name':'','library3Address':'','library4Name':'','library4Address':'','library5Name':'','library5Address':''},'success':function(_0x476b53){var _0x2d28f3=_0xcc65ab;console[_0x2d28f3(0x203)](_0x476b53),_0x476b53[_0x2d28f3(0x249)]=='1'?console['log'](_0x476b53[_0x2d28f3(0x249)]+';'+_0x476b53[_0x2d28f3(0x24e)]+';'+_0x476b53[_0x2d28f3(0x29a)]):console['log'](_0x476b53[_0x2d28f3(0x249)]+';'+_0x476b53[_0x2d28f3(0x24e)]+';'+_0x476b53['result']),console[_0x2d28f3(0x203)](_0x2d28f3(0x212)+_0x476b53[_0x2d28f3(0x249)]),console[_0x2d28f3(0x203)](_0x2d28f3(0x26c)+_0x476b53[_0x2d28f3(0x29a)]),_0x351921!=null&&_0x351921!=undefined&&_0x351921(_0x458a1d,_0x476b53);},'error':function(_0x4d5319){var _0x224446=_0xcc65ab;console[_0x224446(0x203)](_0x224446(0x21a)),console[_0x224446(0x203)](_0x224446(0x243)),console[_0x224446(0x203)](_0x4d5319),_0x351921!=null&&_0x351921!=undefined&&_0x351921(_0x458a1d,_0x4d5319);}});}function getApiUrl(){var _0x304da3=a0_0x515b;switch(getNetwork()){case 0x38:return'https://api.bscscan.com/api';case 0x61:return _0x304da3(0x267);case 0x1:return _0x304da3(0x1da);case 0xfa:return _0x304da3(0x1fc);case 0x19:return _0x304da3(0x240);case 0x89:return _0x304da3(0x1e1);case 0xa86a:return _0x304da3(0x1ff);case 0x3:return _0x304da3(0x1eb);case 0x7d0:return'https://explorer.dogechain.dog/api';case 0x238:return'https://explorer-testnet.dogechain.dog/api';case 0xa4b1:return _0x304da3(0x282);case 0x66eed:return _0x304da3(0x275);default:return'https://api.error.com/api';}}export function getScanUrl(){var _0x5b4321=a0_0x515b;switch(getNetwork()){case 0x38:return'https://bscscan.com/token/token_address#balances';case 0x61:return'https://testnet.bscscan.com/token/token_address#balances';case 0x1:return _0x5b4321(0x25e);case 0xfa:return _0x5b4321(0x29f);case 0x19:return _0x5b4321(0x1e0);case 0x89:return _0x5b4321(0x287);case 0xa86a:return _0x5b4321(0x214);case 0x3:return _0x5b4321(0x27c);case 0x7d0:return _0x5b4321(0x1e7);case 0x238:return _0x5b4321(0x26f);case 0xa4b1:return _0x5b4321(0x206);case 0x66eed:return'https://goerli.arbiscan.io/token_address#balances';default:return _0x5b4321(0x1ed);}}export function getApiKey(){var _0x44b233=a0_0x515b;switch(getNetwork()){case 0x38:case 0x61:return _0x44b233(0x238);case 0x1:case 0x3:return'VRZFIF86GSTY9TDHPCQ7BS42TEI8BN1N5B';case 0xfa:return _0x44b233(0x23e);case 0x19:return _0x44b233(0x277);case 0x89:return _0x44b233(0x1f8);case 0xa86a:return _0x44b233(0x1de);case 0xa4b1:case 0x66eed:return _0x44b233(0x222);default:return'errorKey';}}export function checkVerifyStatus(_0x23bc25){var _0x35182f=a0_0x515b,_0x224f2c=getApiKey(),_0x169097=getApiUrl();$[_0x35182f(0x296)]({'type':_0x35182f(0x244),'url':_0x169097,'data':{'apikey':_0x224f2c,'guid':_0x23bc25,'module':'contract','action':_0x35182f(0x22d)},'success':function(_0x4e5c8c){var _0x45f135=_0x35182f;console[_0x45f135(0x203)]('status\x20:\x20'+_0x4e5c8c['status']),console[_0x45f135(0x203)](_0x45f135(0x1ee)+_0x4e5c8c[_0x45f135(0x24e)]),console[_0x45f135(0x203)](_0x45f135(0x26c)+_0x4e5c8c[_0x45f135(0x29a)]);},'error':function(_0x2d96a9){var _0x55bf7d=_0x35182f;alert(_0x55bf7d(0x233));}});}export function encodeParameters(_0x481074,_0x57e5ee){var _0x30681a=a0_0x515b;return console[_0x30681a(0x203)]('types_array',_0x481074),console['log'](_0x30681a(0x27b),_0x57e5ee),web3['eth'][_0x30681a(0x291)]['encodeParameters'](_0x481074,_0x57e5ee)['replace']('0x','');}export async function getConstructor(_0x2b6436){var _0x55edad=a0_0x515b,_0x5e86b5=JSON[_0x55edad(0x29e)](await readTextFile(_0x2b6436));console[_0x55edad(0x203)](_0x5e86b5);for(let _0x429e6b=0x0;_0x429e6b<_0x5e86b5[_0x55edad(0x26a)];_0x429e6b++){var _0x94ab8e=_0x5e86b5[_0x429e6b][_0x55edad(0x1f9)];console[_0x55edad(0x203)](_0x94ab8e);if(_0x94ab8e==_0x55edad(0x260)){var _0x16e8f0=_0x5e86b5[_0x429e6b];break;}}var _0x417dc4=_0x16e8f0[_0x55edad(0x263)],_0x16f66a=[];for(let _0x181fd2=0x0;_0x181fd2<_0x417dc4[_0x55edad(0x26a)];_0x181fd2++){var _0x3efa0f=_0x417dc4[_0x181fd2][_0x55edad(0x24d)];if(_0x3efa0f[_0x55edad(0x246)](_0x55edad(0x23d))){var _0x1feb4c=_0x417dc4[_0x181fd2][_0x55edad(0x202)],_0x4d2fd3={};for(let _0x1e723a=0x0;_0x1e723a<_0x1feb4c['length'];_0x1e723a++){var _0x2ae872=_0x1feb4c[_0x1e723a][_0x55edad(0x218)],_0x94ab8e=_0x1feb4c[_0x1e723a][_0x55edad(0x1f9)];_0x4d2fd3[_0x2ae872]=_0x94ab8e;}_0x3efa0f={'argument_type':_0x4d2fd3};}_0x16f66a['push'](_0x3efa0f);}return console['log'](_0x16f66a),_0x16f66a;}export function getNetwork(){var _0x284604=a0_0x515b;return parseInt($('.network')[_0x284604(0x239)]());}export function getDeviceType(){var _0x2bc7fb=a0_0x515b;const _0x278400=navigator['userAgent'];if(/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i[_0x2bc7fb(0x237)](_0x278400))return'tablet';else{if(/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/[_0x2bc7fb(0x237)](_0x278400))return _0x2bc7fb(0x23b);}return'desktop';}function setTokenInfo(_0x11a012,_0x1c9d7c){var _0x5f00f2=a0_0x515b;$('#modalLabel')[_0x5f00f2(0x298)](_0x11a012),$('#modalBody')[_0x5f00f2(0x298)](_0x1c9d7c);}export function showPriceDialog(_0x3b484b,_0x520f3a){var _0x144beb=a0_0x515b;setTokenInfo(_0x3b484b,_0x520f3a),$(_0x144beb(0x1db))[_0x144beb(0x294)]('show');}$(a0_0x17c722(0x25b))['on'](a0_0x17c722(0x2a2),function(){var _0x2038de=a0_0x17c722;setTokenInfo(_0x2038de(0x1d8),'5'),$('#tokenIntroDialog')[_0x2038de(0x294)](_0x2038de(0x264));}),$('#closeDialog')['on']('click',function(){var _0x5a3963=a0_0x17c722;$(_0x5a3963(0x1db))[_0x5a3963(0x294)](_0x5a3963(0x20b));}),$(a0_0x17c722(0x227))['on'](a0_0x17c722(0x2a2),function(){var _0x526dfb=a0_0x17c722;$('#tokenIntroDialog')['modal']('hide'),window[_0x526dfb(0x28e)]('https://t.me/MoonDeploy',_0x526dfb(0x221));});export function getRouter(){var _0x1b3d76=a0_0x17c722;return getNetwork()==0x61?'0xD99D1c33F9fC3444f8101754aBC46c52416550D1':$(_0x1b3d76(0x297))[_0x1b3d76(0x239)]();}export function getPrice(_0x141ed1){var _0x8a495c=a0_0x17c722,_0x9da801={0x1:{'standard':0.03,'safemoon':0.03,'liquiditygenerator':0.03,'frictionlessyield':0.03,'dynamic':0.05,'marketingtax':0.05,'smarttax':0.05,'rewardtoken':0.05,'rewardtoken2':0.05,'promax':0.2,'customizedToken':0x2},0x3:{'standard':0.03,'safemoon':0.03,'liquiditygenerator':0.03,'frictionlessyield':0.03,'dynamic':0.05,'marketingtax':0.05,'smarttax':0.05,'rewardtoken':0.05,'rewardtoken2':0.05,'promax':0.2,'customizedToken':0x2},0x19:{'standard':0x1f4,'safemoon':0x1f4,'liquiditygenerator':0x1f4,'frictionlessyield':0x1f4,'dynamic':0x320,'marketingtax':0x3e8,'smarttax':0x3e8,'rewardtoken':0x3e8,'rewardtoken2':0x3e8,'promax':0xbb8,'customizedToken':0x2710},0x38:{'standard':0.1,'safemoon':0.15,'liquiditygenerator':0.15,'frictionlessyield':0.15,'dynamic':0.2,'marketingtax':0.3,'smarttax':0.3,'rewardtoken':0.3,'rewardtoken2':0.3,'promax':0.59,'customizedToken':0x2},0x61:{'standard':0.1,'safemoon':0.15,'liquiditygenerator':0.15,'frictionlessyield':0.15,'dynamic':0.2,'marketingtax':0.3,'smarttax':0.3,'rewardtoken':0.3,'rewardtoken2':0.3,'promax':0.59,'customizedToken':0x2},0x89:{'standard':0x1e,'safemoon':0x1e,'liquiditygenerator':0x1e,'frictionlessyield':0x1e,'dynamic':0x3c,'marketingtax':0x5a,'smarttax':0x5a,'rewardtoken':0x3c,'rewardtoken2':0x5a,'promax':0x96,'customizedToken':0x258},0xfa:{'standard':0x64,'safemoon':0x64,'liquiditygenerator':0x64,'frictionlessyield':0x64,'dynamic':0xc8,'marketingtax':0x12c,'smarttax':0x12c,'rewardtoken':0x12c,'rewardtoken2':0x12c,'promax':0x258,'customizedToken':0x9c4},0xa86a:{'standard':0x2,'safemoon':0x2,'liquiditygenerator':0x2,'frictionlessyield':0x2,'dynamic':0x3,'marketingtax':0x5,'smarttax':0x5,'rewardtoken':0x5,'rewardtoken2':0x5,'promax':0xa,'customizedToken':0x32},0x7d0:{'standard':0x1f4,'safemoon':0x1f4,'liquiditygenerator':0x1f4,'frictionlessyield':0x1f4,'dynamic':0x3e8,'marketingtax':0x3e8,'smarttax':0x3e8,'rewardtoken':0x3e8,'rewardtoken2':0x3e8,'promax':0xbb8,'customizedToken':0x2710},0x238:{'standard':0x1f4,'safemoon':0x1f4,'liquiditygenerator':0x1f4,'frictionlessyield':0x1f4,'dynamic':0x3e8,'marketingtax':0x3e8,'smarttax':0x3e8,'rewardtoken':0x3e8,'rewardtoken2':0x3e8,'promax':0xbb8,'customizedToken':0x2710},0xa4b1:{'standard':0.03,'safemoon':0.03,'liquiditygenerator':0.03,'frictionlessyield':0.03,'dynamic':0.05,'marketingtax':0.05,'smarttax':0.05,'rewardtoken':0.05,'rewardtoken2':0.05,'promax':0.2,'customizedToken':0x2},0x66eed:{'standard':0.03,'safemoon':0.03,'liquiditygenerator':0.03,'frictionlessyield':0.03,'dynamic':0.05,'marketingtax':0.05,'smarttax':0.05,'rewardtoken':0.05,'rewardtoken2':0.05,'promax':0.2,'customizedToken':0x2}};if(Object[_0x8a495c(0x27a)](_0x9da801)[_0x8a495c(0x246)](getNetwork()['toString']())){if(_0x141ed1[_0x8a495c(0x246)](_0x8a495c(0x28b)))return _0x9da801[getNetwork()][_0x8a495c(0x261)][_0x8a495c(0x21c)]();else{if(_0x141ed1['includes']('standard'))return _0x9da801[getNetwork()][_0x8a495c(0x2a1)][_0x8a495c(0x21c)]();else{if(_0x141ed1['includes']('dynamic'))return _0x9da801[getNetwork()][_0x8a495c(0x1e6)][_0x8a495c(0x21c)]();else{if(_0x141ed1[_0x8a495c(0x246)](_0x8a495c(0x219)))return _0x9da801[getNetwork()]['safemoon']['toString']();else{if(_0x141ed1[_0x8a495c(0x246)](_0x8a495c(0x21e)))return _0x9da801[getNetwork()][_0x8a495c(0x21e)][_0x8a495c(0x21c)]();else return _0x141ed1[_0x8a495c(0x246)](_0x8a495c(0x21f))?_0x9da801[getNetwork()][_0x8a495c(0x232)][_0x8a495c(0x21c)]():_0x9da801[getNetwork()][_0x141ed1][_0x8a495c(0x21c)]();}}}}}else return _0x9da801[0x1][_0x141ed1][_0x8a495c(0x21c)]();}export function getPriceUnit(){var _0x417177=a0_0x17c722;if(getNetwork()==0x38||getNetwork()==0x61)return _0x417177(0x204);else{if(getNetwork()==0x1||getNetwork()==0x3)return _0x417177(0x25a);else{if(getNetwork()==0x89)return _0x417177(0x1f2);else{if(getNetwork()==0xa86a)return _0x417177(0x23f);else{if(getNetwork()==0xfa)return _0x417177(0x1e8);else{if(getNetwork()==0x19)return'CRO';else{if(getNetwork()==0x7d0||getNetwork()==0x238)return _0x417177(0x242);else return getNetwork()==0xa4b1||getNetwork()==0x66eed?_0x417177(0x25a):_0x417177(0x25a);}}}}}}}export function isSupportedNetwork(){var _0x4a9fea=getSupportedNetworks();return _0x4a9fea['includes'](parseInt(currentNetworkId));}export function getSupportedNetworks(){var _0x3abb6f=a0_0x17c722,_0x5801b0=[0x0,0x1,0x38,0x89,0xfa,0x19,0xa86a,0x7d0,0xa4b1],_0x295287=[0x3,0x61,0x238,0x66eed];return location[_0x3abb6f(0x22b)]==_0x3abb6f(0x207)?_0x5801b0[_0x3abb6f(0x220)](_0x295287):_0x5801b0;}function isDogeChain(){var _0x1ab7c2=a0_0x17c722,_0x21fd21=[0x7d0,0x238];return _0x21fd21[_0x1ab7c2(0x246)](parseInt(currentNetworkId));}export function toChecksum(_0x2eef1d){var _0x225048=a0_0x17c722;return web3[_0x225048(0x20a)][_0x225048(0x22c)](_0x2eef1d);}export function isAddress(_0x15dc00){var _0x48ed67=a0_0x17c722;return web3[_0x48ed67(0x20a)][_0x48ed67(0x265)](_0x15dc00['trim']()[_0x48ed67(0x280)]());}export function isJsonString(_0x377e3b){var _0x19eb02=a0_0x17c722;try{var _0x1356c2=JSON[_0x19eb02(0x29e)](_0x377e3b);return typeof _0x1356c2==='object';}catch(_0x53a6b7){return![];}return!![];}export function getAffiliate(){var _0x1ddc50=a0_0x17c722,_0x23b1d9=window[_0x1ddc50(0x24a)][_0x1ddc50(0x278)],_0x11336e=new URLSearchParams(_0x23b1d9),_0x2dc591=_0x11336e[_0x1ddc50(0x1f5)](_0x1ddc50(0x1d7));console[_0x1ddc50(0x203)](_0x1ddc50(0x210),_0x2dc591);var _0x488cc4=CryptoJS[_0x1ddc50(0x1f6)][_0x1ddc50(0x28c)](_0x1ddc50(0x224),_0x1ddc50(0x22e))['toString'](CryptoJS[_0x1ddc50(0x234)][_0x1ddc50(0x27f)]),_0x327389=_0x488cc4;if(_0x2dc591==null||!publicWeb3()[_0x1ddc50(0x20a)][_0x1ddc50(0x265)](_0x2dc591[_0x1ddc50(0x280)]())){var _0xa6babe=localStorage['getItem'](_0x1ddc50(0x1d7)),_0xc9dae9=localStorage[_0x1ddc50(0x28d)](_0x1ddc50(0x21b));return _0xa6babe!=null&&_0xc9dae9!=null?(_0xc9dae9=parseInt(_0xc9dae9),_0xc9dae9>=new Date()[_0x1ddc50(0x1ef)]()?_0xa6babe:(localStorage[_0x1ddc50(0x228)]('ref'),localStorage[_0x1ddc50(0x228)](_0x1ddc50(0x21b)),_0x327389)):_0x327389;}else{var _0xbdc08d=publicWeb3()[_0x1ddc50(0x20a)]['toChecksumAddress'](_0x2dc591),_0xc9dae9=new Date()[_0x1ddc50(0x1ef)]()+0x1e*0x18*0x3c*0x3c*0x3e8;return localStorage[_0x1ddc50(0x27e)](_0x1ddc50(0x1d7),_0xbdc08d),localStorage[_0x1ddc50(0x27e)](_0x1ddc50(0x21b),_0xc9dae9),_0xbdc08d;}}function a0_0x515b(_0x2cefad,_0x15865f){var _0x2b7d8d=a0_0x2b7d();return a0_0x515b=function(_0x515b9a,_0x174f29){_0x515b9a=_0x515b9a-0x1d4;var _0x5a613f=_0x2b7d8d[_0x515b9a];return _0x5a613f;},a0_0x515b(_0x2cefad,_0x15865f);}function publicWeb3(){var _0x2e95f5=a0_0x17c722,_0xcfa22e=new Web3(_0x2e95f5(0x236));return _0xcfa22e;}export async function isRefund(_0x450bc4,_0x3a330f){var _0x6ae8f6=a0_0x17c722,_0x13359e={'0x8b986bF754ff9B39F84e656fe1a2F48318D17355':{'network':0x38,'tokenType':_0x6ae8f6(0x258),'nonceLimit':0x1,'timestampLimit':0x189b2eae40d+0x1e*0x18*0x3c*0x3c*0x3e8}},_0x4e9dd0=Object[_0x6ae8f6(0x27a)](_0x13359e);if(_0x4e9dd0['includes'](_0x450bc4)){var _0xdef690=await web3[_0x6ae8f6(0x286)][_0x6ae8f6(0x24c)](_0x450bc4),_0x23c7cd=_0x13359e[_0x450bc4];return console[_0x6ae8f6(0x203)](_0x23c7cd[_0x6ae8f6(0x201)]==getNetwork(),_0x3a330f[_0x6ae8f6(0x1d9)]()[_0x6ae8f6(0x246)](_0x23c7cd[_0x6ae8f6(0x25c)]),_0x23c7cd[_0x6ae8f6(0x1e2)]>=_0xdef690,_0x23c7cd[_0x6ae8f6(0x250)]>=new Date()[_0x6ae8f6(0x1ef)]()),_0x23c7cd[_0x6ae8f6(0x201)]==getNetwork()&&_0x3a330f[_0x6ae8f6(0x1d9)]()['includes'](_0x23c7cd[_0x6ae8f6(0x25c)])&&_0x23c7cd[_0x6ae8f6(0x1e2)]>_0xdef690&&_0x23c7cd[_0x6ae8f6(0x250)]>=new Date()[_0x6ae8f6(0x1ef)]();}else return![];}export async function createRefund(){var _0x4def5c=a0_0x17c722,_0x5b76ac=$(_0x4def5c(0x208))[_0x4def5c(0x239)](),_0x585f0f=$(_0x4def5c(0x1f1))['val'](),_0x4854ab={'network':getNetwork(),'tokenType':_0x585f0f,'nonceLimit':await web3[_0x4def5c(0x286)][_0x4def5c(0x24c)](_0x5b76ac)+0x1,'timestampLimit':new Date()[_0x4def5c(0x1ef)]()+0x18*0x3c*0x3c*0x3e8};console[_0x4def5c(0x203)]('\x22'+_0x5b76ac+'\x22\x20:\x20'+JSON['stringify'](_0x4854ab));}$(a0_0x17c722(0x1f4))['on'](a0_0x17c722(0x2a2),()=>{createRefund();});