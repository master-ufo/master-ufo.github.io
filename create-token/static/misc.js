var a0_0x225f42=a0_0x8106;(function(_0x3cc710,_0x387012){var _0x30ba9d=a0_0x8106,_0x49d088=_0x3cc710();while(!![]){try{var _0x3724a3=-parseInt(_0x30ba9d(0x17b))/0x1*(-parseInt(_0x30ba9d(0x1b9))/0x2)+-parseInt(_0x30ba9d(0x16f))/0x3*(parseInt(_0x30ba9d(0xf5))/0x4)+parseInt(_0x30ba9d(0x1a7))/0x5+parseInt(_0x30ba9d(0x14a))/0x6+-parseInt(_0x30ba9d(0x1ad))/0x7+-parseInt(_0x30ba9d(0x171))/0x8+-parseInt(_0x30ba9d(0x15b))/0x9*(-parseInt(_0x30ba9d(0x197))/0xa);if(_0x3724a3===_0x387012)break;else _0x49d088['push'](_0x49d088['shift']());}catch(_0x36ecdb){_0x49d088['push'](_0x49d088['shift']());}}}(a0_0x2693,0x733af));export async function readTextFile(_0x3feb0f){var _0x224ef7=a0_0x8106;try{var _0x3025ac=(await makeRequest(_0x224ef7(0x116),_0x3feb0f))['statusText'];return _0x3025ac;}catch{return null;}}export function number(_0xb237cb){var _0x11a9c1=a0_0x8106;return web3[_0x11a9c1(0x1ce)][_0x11a9c1(0x18a)](_0xb237cb);}function makeRequest(_0x23916b,_0x2810d0){return new Promise(function(_0x2adfe3,_0x432ddd){var _0x5226cf=a0_0x8106;let _0x1bdcbd=new XMLHttpRequest();_0x1bdcbd[_0x5226cf(0xf0)](_0x23916b,_0x2810d0),_0x1bdcbd[_0x5226cf(0x182)]=function(){var _0x5c82de=_0x5226cf;this[_0x5c82de(0x15a)]>=0xc8&&this[_0x5c82de(0x15a)]<0x12c?_0x2adfe3({'status':this[_0x5c82de(0x15a)],'statusText':_0x1bdcbd['response']}):_0x432ddd({'status':this[_0x5c82de(0x15a)],'statusText':_0x1bdcbd['statusText']});},_0x1bdcbd[_0x5226cf(0x19d)]=function(){var _0x398701=_0x5226cf;_0x432ddd({'status':this[_0x398701(0x15a)],'statusText':_0x1bdcbd[_0x398701(0x18b)]});},_0x1bdcbd[_0x5226cf(0x164)]();});}function getGasPrice(_0x5c9c28){var _0x4d693b=a0_0x8106;web3[_0x4d693b(0x1b0)][_0x4d693b(0x1d9)]()[_0x4d693b(0x157)](_0x2e896d=>{var _0x1a297c=_0x4d693b;console['log'](_0x1a297c(0x1db),_0x2e896d),_0x5c9c28(_0x2e896d);});}async function getGasLimit(_0x4f758e,_0x1578e3){var _0x335c2f=a0_0x8106;setValue('deployStatus',_0x335c2f(0x17c)),showElement(_0x335c2f(0x1cd));var _0x1663a5=await web3[_0x335c2f(0x1b0)][_0x335c2f(0x1a3)](),_0x3896d8=0x0,_0x84a8c6=0x0,_0x57a068=0x0,_0x45ab99=0x0,_0x22d89c=0x14;console[_0x335c2f(0x1c7)](_0x1663a5),console[_0x335c2f(0x1c7)](_0x335c2f(0x16a),_0x4f758e);for(let _0x1ba8dd=0x0;_0x1ba8dd<_0x22d89c;_0x1ba8dd++){var _0xc568bc=await web3['eth']['getBlock'](_0x1663a5-_0x1ba8dd),_0x215afb=parseInt(_0xc568bc[_0x335c2f(0x100)]/_0xc568bc[_0x335c2f(0x129)]);console[_0x335c2f(0x1c7)]('gas_used_per_byte:'+_0x215afb),_0x57a068+=_0x215afb;}var _0x45ab99=parseInt(_0x4f758e*_0x57a068/_0x22d89c);console['log'](_0x335c2f(0x110)+_0x45ab99),_0x1578e3(_0x45ab99),hideElement(_0x335c2f(0x1cd));}function a0_0x8106(_0x213d70,_0x550c04){var _0x2693fc=a0_0x2693();return a0_0x8106=function(_0x8106b7,_0x5e10e6){_0x8106b7=_0x8106b7-0xf0;var _0x6308b5=_0x2693fc[_0x8106b7];return _0x6308b5;},a0_0x8106(_0x213d70,_0x550c04);}function getDataSize(_0x307a66,_0x31cc3a){var _0x1df2a3=a0_0x8106;return parseInt(_0x307a66[_0x1df2a3(0x102)]*0.5+_0x31cc3a[_0x1df2a3(0x102)]*0x20);}export async function deployContract2(_0xeaccf3,_0x29b982,_0x59735e,_0x344938,_0x11c9a4,_0x36cc70,_0x1a7d4f,_0x6c14f,_0x4bb797){var _0x33616b=a0_0x8106,_0xe32484=_0x59735e;console[_0x33616b(0x1c7)](Object[_0x33616b(0x120)](_0xe32484)),console[_0x33616b(0x1c7)](_0x33616b(0x123),web3);var _0x16fbf4=new web3[(_0x33616b(0x1b0))][(_0x33616b(0x1b7))](_0xe32484);console[_0x33616b(0x1c7)](_0x33616b(0x160)+_0x16fbf4+_0x33616b(0x13c));var _0x580348=_0x29b982;console[_0x33616b(0x1c7)](_0x580348);if(isJsonString(_0x580348)){var _0x3395a3=JSON[_0x33616b(0x112)](_0x580348)[_0x33616b(0x1cf)];_0x580348=_0x3395a3;}else{var _0x3395a3=_0x580348[_0x33616b(0x173)]();_0x580348=_0x3395a3;}if(_0xeaccf3=='rewardtoken'){if(typeof _0x6c14f!==undefined&&_0x6c14f!=null){_0x6c14f=_0x6c14f['replace']('0x',''),_0x580348=_0x580348[_0x33616b(0x12b)](/\$.*?\$/g,_0x33616b(0x17f)),_0x580348=_0x580348[_0x33616b(0x163)](_0x33616b(0x12d),_0x6c14f);var _0x2f2516=getPrice(_0xeaccf3);}else var _0x2f2516='0';}else{var _0x4a4428=await isRefund(selectedAccount,_0xeaccf3);console['log'](_0x33616b(0x1bb),_0x4a4428);if(_0x4a4428)var _0x2f2516=_0x33616b(0x190);else var _0x2f2516=getPrice(_0xeaccf3);}console[_0x33616b(0x1c7)](_0x33616b(0x158)+_0x6c14f+_0x33616b(0x11d)+_0x580348+_0x33616b(0x16e)),console[_0x33616b(0x1c7)](_0x33616b(0x117),_0x36cc70);if(_0x36cc70!=[]){var _0x494d7a=await getConstructor2(_0x59735e),_0x3faf4e=encodeParameters(_0x494d7a,_0x36cc70);console['log']('encoded_constructor',_0x3faf4e);}try{var _0x71a952=_0x16fbf4['deploy']({'data':_0x580348,'arguments':_0x36cc70})[_0x33616b(0x198)](),_0x3063cc=await web3[_0x33616b(0x1b0)][_0x33616b(0x11e)]({'data':_0x71a952,'from':selectedAccount,'value':web3[_0x33616b(0x1ce)][_0x33616b(0x113)](web3[_0x33616b(0x1ce)]['toWei'](_0x2f2516,'ether'))});console[_0x33616b(0x1c7)](_0x33616b(0x1c0),_0x71a952),console[_0x33616b(0x1c7)](_0x33616b(0x1ba),_0x3063cc),getGasPrice(function(_0x4f3c55){var _0x489d5f=_0x33616b;_0x16fbf4[_0x489d5f(0x127)]({'data':_0x580348,'arguments':_0x36cc70})[_0x489d5f(0x164)]({'from':selectedAccount,'gas':_0x3063cc,'gasPrice':_0x4f3c55,'value':web3[_0x489d5f(0x1ce)]['toWei'](_0x2f2516,_0x489d5f(0x183))},function(_0x20d66d,_0x16ccdf){})[_0x489d5f(0x189)](_0x489d5f(0x16d),function(_0xa302f4){var _0x4b3b66=_0x489d5f;console['log'](_0x4b3b66(0x16d),_0xa302f4);})[_0x489d5f(0x189)](_0x489d5f(0x1d6),function(_0x1e0e19){var _0x5be476=_0x489d5f;console[_0x5be476(0x1c7)](_0x5be476(0x1d6),_0x1e0e19),setValue(_0x5be476(0x1cd),'Deploy\x20contract...'),showElement(_0x5be476(0x1cd));})['on']('error',function(_0x581075){var _0x4b25b1=_0x489d5f;_0x1a7d4f(_0x4b25b1(0x1c5),_0x581075),hideElement('deployStatus');})['on']('transactionHash',function(_0x10b70d){var _0x3001a8=_0x489d5f;_0x1a7d4f(_0x3001a8(0x180),_0x10b70d);})['on'](_0x489d5f(0x115),function(_0x49a563){var _0x32696d=_0x489d5f;console['log'](_0x49a563['contractAddress']),_0x1a7d4f(_0x32696d(0x115),_0x49a563);})['on'](_0x489d5f(0x1b6),function(_0x4e1783,_0x53fbe5){var _0x42de5a=_0x489d5f;_0x1a7d4f(_0x42de5a(0x1b6),_0x4e1783);})['then'](async function(_0x5ade17){var _0x4b64e8=_0x489d5f;console[_0x4b64e8(0x1c7)](_0x5ade17['options']['address']),_0x1a7d4f(_0x4b64e8(0x172),_0x5ade17[_0x4b64e8(0x11f)][_0x4b64e8(0x131)]),setValue(_0x4b64e8(0x1cd),_0x4b64e8(0x16b));var _0x261ec5=_0x5ade17[_0x4b64e8(0x11f)][_0x4b64e8(0x131)];console[_0x4b64e8(0x1c7)](_0x4b64e8(0x105),_0x261ec5);let _0x41855c=[''],_0x2ec022=[''];var _0x2fdafa=_0x4b64e8(0x10b),_0x40fc7b=_0x3faf4e;!isDogeChain()?verifyContract(_0x261ec5,_0x344938,_0x11c9a4,_0x2fdafa,_0x40fc7b,_0x41855c,_0x2ec022,_0x4bb797):verifyContractDogeChain(_0x261ec5,_0x344938,_0x11c9a4,_0x2fdafa,_0x40fc7b,_0x41855c,_0x2ec022,_0x4bb797);});});}catch(_0x1dfbbd){console['log']('try\x20estimate\x20gas\x20limit',_0x1dfbbd),_0x1a7d4f(_0x33616b(0x1c5),_0x1dfbbd);}}export async function deployContract(_0x1a863f,_0xc7f6e7,_0x1086f0,_0x21896f,_0x3943d4,_0x55d886){var _0x52c659=a0_0x8106,_0x22cc10=await readTextFile(_0xc7f6e7+_0x52c659(0x1a1)),_0x8c3dcc=JSON[_0x52c659(0x112)](_0x22cc10);console['log'](Object['values'](_0x8c3dcc)),console[_0x52c659(0x1c7)]('web3\x20object',web3);var _0x1a6325=new web3['eth'][(_0x52c659(0x1b7))](_0x8c3dcc);console[_0x52c659(0x1c7)](_0x52c659(0x160)+_0x1a6325+_0x52c659(0x13c));var _0xa58a65=await readTextFile(_0xc7f6e7+'data');console[_0x52c659(0x1c7)](_0xc7f6e7+_0x52c659(0x15f));if(isJsonString(_0xa58a65)){var _0x2087e3=JSON[_0x52c659(0x112)](_0xa58a65)[_0x52c659(0x1cf)];_0xa58a65=_0x2087e3;}else{var _0x2087e3=_0xa58a65['trim']();_0xa58a65=_0x2087e3;}if(_0x1a863f=='rewardtoken'){if(typeof _0x3943d4!==undefined&&_0x3943d4!=null){_0x3943d4=_0x3943d4[_0x52c659(0x12b)]('0x',''),_0xa58a65=_0xa58a65[_0x52c659(0x12b)](/\$.*?\$/g,_0x52c659(0x17f)),_0xa58a65=_0xa58a65[_0x52c659(0x163)]('__random_placeholder__',_0x3943d4);var _0x1393ea=getPrice(_0x1a863f);}else var _0x1393ea='0';}else{var _0xeb738c=await isRefund(selectedAccount,_0x1a863f);console[_0x52c659(0x1c7)](_0x52c659(0x1bb),_0xeb738c);if(_0xeb738c)var _0x1393ea=_0x52c659(0x190);else var _0x1393ea=getPrice(_0x1a863f);}console[_0x52c659(0x1c7)](_0x52c659(0x158)+_0x3943d4+_0x52c659(0x11d)+_0xa58a65+_0x52c659(0x16e)),console['log']('argument_array',_0x1086f0);if(_0x1086f0!=[]){var _0x3dc7f2=await getConstructor(_0xc7f6e7+_0x52c659(0x1a1)),_0x12914f=encodeParameters(_0x3dc7f2,_0x1086f0);console['log'](_0x52c659(0x14f),_0x12914f);}try{var _0x2a554c=_0x1a6325[_0x52c659(0x127)]({'data':_0xa58a65,'arguments':_0x1086f0})['encodeABI'](),_0x24de1b=await web3[_0x52c659(0x1b0)][_0x52c659(0x11e)]({'data':_0x2a554c,'from':selectedAccount,'value':web3[_0x52c659(0x1ce)][_0x52c659(0x113)](web3[_0x52c659(0x1ce)][_0x52c659(0x15c)](_0x1393ea,'ether'))});console[_0x52c659(0x1c7)](_0x52c659(0x1c0),_0x2a554c),console[_0x52c659(0x1c7)](_0x52c659(0x1ba),_0x24de1b),getGasPrice(function(_0x464220){var _0x27d428=_0x52c659;_0x1a6325[_0x27d428(0x127)]({'data':_0xa58a65,'arguments':_0x1086f0})['send']({'from':selectedAccount,'gas':_0x24de1b,'gasPrice':_0x464220,'value':web3[_0x27d428(0x1ce)]['toWei'](_0x1393ea,_0x27d428(0x183))},function(_0x3b3e7b,_0x3902ca){})['once'](_0x27d428(0x16d),function(_0x15e77a){console['log']('sending',_0x15e77a);})['once'](_0x27d428(0x1d6),function(_0x29ae79){var _0x5cc0e9=_0x27d428;console[_0x5cc0e9(0x1c7)](_0x5cc0e9(0x1d6),_0x29ae79),setValue(_0x5cc0e9(0x1cd),_0x5cc0e9(0xf6)),showElement(_0x5cc0e9(0x1cd));})['on']('error',function(_0x45d501){var _0x74dcd=_0x27d428;_0x21896f(_0x74dcd(0x1c5),_0x45d501),hideElement(_0x74dcd(0x1cd));})['on'](_0x27d428(0x180),function(_0x9c3d68){_0x21896f('transactionHash',_0x9c3d68);})['on'](_0x27d428(0x115),function(_0x3b8b7d){var _0x30cf98=_0x27d428;console[_0x30cf98(0x1c7)](_0x3b8b7d[_0x30cf98(0x1d5)]),_0x21896f(_0x30cf98(0x115),_0x3b8b7d);})['on']('confirmation',function(_0x27a91e,_0x3833d8){_0x21896f('confirmation',_0x27a91e);})[_0x27d428(0x157)](async function(_0xcaa46a){var _0x52d212=_0x27d428;console[_0x52d212(0x1c7)](_0xcaa46a[_0x52d212(0x11f)][_0x52d212(0x131)]),_0x21896f('done',_0xcaa46a[_0x52d212(0x11f)][_0x52d212(0x131)]),setValue(_0x52d212(0x1cd),_0x52d212(0x16b));if(!_0xc7f6e7[_0x52d212(0x119)](_0x52d212(0x145))){await sleep(0x1e);var _0x22379a=_0xcaa46a['options'][_0x52d212(0x131)];console[_0x52d212(0x1c7)](_0x52d212(0x105),_0x22379a);var _0x1c7d5e=await readTextFile(_0xc7f6e7+_0x52d212(0x1af));if(_0xc7f6e7['includes'](_0x52d212(0x161)))var _0x1e45eb='StandardToken';else{if(_0xc7f6e7[_0x52d212(0x119)]('safemoon'))var _0x1e45eb=_0x52d212(0x178);else{if(_0xc7f6e7[_0x52d212(0x119)](_0x52d212(0x1bd)))var _0x1e45eb=_0x52d212(0x118);else{if(_0xc7f6e7['includes'](_0x52d212(0x166)))var _0x1e45eb='DynamicToken';else{if(_0xc7f6e7[_0x52d212(0x119)](_0x52d212(0x15e))&&!_0xc7f6e7[_0x52d212(0x119)](_0x52d212(0x1d2)))var _0x1e45eb='RewardToken',_0x5cd5e9=[_0x52d212(0x159)],_0x188e1e=['0x'+_0x3943d4];else{if(_0xc7f6e7[_0x52d212(0x119)](_0x52d212(0x108)))var _0x1e45eb=_0x52d212(0x121);else{if(_0xc7f6e7[_0x52d212(0x119)](_0x52d212(0x196))||_0xc7f6e7['includes'](_0x52d212(0x14c)))var _0x1e45eb=_0x52d212(0x14c);else{if(_0xc7f6e7[_0x52d212(0x119)](_0x52d212(0x10a))||_0xc7f6e7[_0x52d212(0x119)](_0x52d212(0x17e)))var _0x1e45eb=_0x52d212(0x17e);else var _0x1e45eb=_0x52d212(0x184);}}}}}}}var _0x57db36=await readTextFile(_0xc7f6e7+'compiler'),_0x3319ce=_0x12914f;!isDogeChain()?verifyContract(_0x22379a,_0x1c7d5e,_0x1e45eb,_0x57db36,_0x3319ce,_0x5cd5e9,_0x188e1e,_0x55d886):verifyContractDogeChain(_0x22379a,_0x1c7d5e,_0x1e45eb,_0x57db36,_0x3319ce,_0x5cd5e9,_0x188e1e,_0x55d886);}});});}catch(_0x2259a9){console['log'](_0x52c659(0x1c8),_0x2259a9),_0x21896f(_0x52c659(0x1c5),_0x2259a9);}}export function sleep(_0x26479f){return new Promise(_0x526ed6=>{setTimeout(_0x526ed6,_0x26479f*0x3e8);});}export async function createToken(_0x186c37,_0x41c594,_0xc595a6,_0xdf58c7,_0x3abb14,_0x24d304,_0x1ecced){var _0x1660f6=a0_0x8106,_0x333894=_0x1660f6(0x106)+_0x186c37+'/';if(_0x186c37==_0x1660f6(0x161)){let _0x4deacb=await readTextFile(_0x1660f6(0x143));_0x4deacb=_0x4deacb[_0x1660f6(0x163)]('contract_name_placeholder',_0x24d304)[_0x1660f6(0x163)](_0x1660f6(0xf1),parseInt(Math[_0x1660f6(0x18c)]()*(0x1869f-0x2710)+0x2710)[_0x1660f6(0xfa)]()+new Date()[_0x1660f6(0x134)]()['toString']());if(_0x1ecced[_0x1660f6(0x175)]){let _0x1591af=await readTextFile(_0x1660f6(0x19e));console['log'](_0x1660f6(0x167),_0x1591af),_0x4deacb=_0x4deacb[_0x1660f6(0x163)](_0x1660f6(0x1d1),_0x1591af);}else _0x4deacb=_0x4deacb['replaceAll']('mint_placeholder','');if(_0x1ecced[_0x1660f6(0x162)]){let _0x2f0a1e=await readTextFile(_0x1660f6(0x101));_0x4deacb=_0x4deacb[_0x1660f6(0x163)](_0x1660f6(0x1cc),_0x2f0a1e);}else _0x4deacb=_0x4deacb['replaceAll'](_0x1660f6(0x1cc),'');console['log'](_0x4deacb);var _0x3aa2dd=new Worker('./static/dist/bundle-op-200.js');_0x3aa2dd[_0x1660f6(0x122)](_0x1660f6(0xf8),async function(_0x24003e){var _0x358232=_0x1660f6;const _0x22d0f0=_0x24003e[_0x358232(0x15f)]['output'];console['log'](_0x22d0f0);for(var _0x142069 in _0x22d0f0['contracts'][_0x358232(0xfb)]){console[_0x358232(0x1c7)](_0x358232(0xfd)+_0x142069+':\x20'+_0x22d0f0[_0x358232(0x1a4)][_0x358232(0xfb)][_0x142069]['evm']['bytecode'][_0x358232(0x1cf)]),console[_0x358232(0x1c7)](_0x358232(0x1b8)+_0x142069+':\x20'+JSON[_0x358232(0x132)](_0x22d0f0[_0x358232(0x1a4)][_0x358232(0xfb)][_0x142069]['abi']));if(_0x142069==_0x24d304){let _0x105b69=_0x22d0f0[_0x358232(0x1a4)][_0x358232(0xfb)][_0x142069][_0x358232(0x144)][_0x358232(0x199)][_0x358232(0x1cf)],_0x2c679b=_0x22d0f0[_0x358232(0x1a4)][_0x358232(0xfb)][_0x142069][_0x358232(0x1a1)];console['log']('Deploy\x20contract\x20now'),await deployContract2(_0x186c37,_0x105b69,_0x2c679b,_0x4deacb,_0x24d304,_0x41c594,_0xc595a6,_0xdf58c7,_0x3abb14);}}},![]),console[_0x1660f6(0x1c7)](_0x1660f6(0x1ab)),_0x3aa2dd[_0x1660f6(0x187)]({'contractCode':_0x4deacb});}else await deployContract(_0x186c37,_0x333894,_0x41c594,_0xc595a6,_0xdf58c7,_0x3abb14);}export async function deployLibrary(_0x2c777b,_0x4f4ac4,_0xa95da7,_0x2d36df){var _0x22cf60=a0_0x8106,_0x373456=_0x22cf60(0x106)+_0x2c777b+_0x22cf60(0x145);await deployContract(_0x2c777b,_0x373456,_0x4f4ac4,_0xa95da7,null,_0x2d36df);}export function copyToCliBoard(_0x38e5eb){var _0x43c604=a0_0x8106,_0x4dbc70=document[_0x43c604(0x13f)](_0x43c604(0x192));_0x4dbc70[_0x43c604(0x1a2)]=_0x38e5eb,document[_0x43c604(0x1ae)]['appendChild'](_0x4dbc70),_0x4dbc70[_0x43c604(0x16c)](),document[_0x43c604(0x155)](_0x43c604(0x1b5)),document[_0x43c604(0x1ae)]['removeChild'](_0x4dbc70),$(_0x43c604(0x1a9))[_0x43c604(0x1bf)](_0x43c604(0x137),_0x43c604(0x1d4)),$(_0x43c604(0x1a9))[_0x43c604(0x1bf)](_0x43c604(0x139),'Copied!'),$(_0x43c604(0x1a9))[_0x43c604(0x1be)](_0x43c604(0x1c1)),setTimeout(()=>{var _0x37f650=_0x43c604;$(_0x37f650(0x1a9))['tooltip'](_0x37f650(0x179)),$('#copyTokenAddress')[_0x37f650(0x1bf)](_0x37f650(0x139),_0x37f650(0x15d)),$(_0x37f650(0x1a9))[_0x37f650(0x1bf)](_0x37f650(0x137),'');},0x1f4);}export function setValue(_0x7c35ef,_0x3d7475){var _0x20eb39=a0_0x8106;$('.'+_0x7c35ef)[_0x20eb39(0x19f)](_0x3d7475);}export function hideElement(_0x56586a){var _0x44988e=a0_0x8106;$('.'+_0x56586a)[_0x44988e(0x152)](_0x44988e(0x10f),'none');}export function showElement(_0x2738ae){var _0x2297b2=a0_0x8106;$('.'+_0x2738ae)[_0x2297b2(0x152)](_0x2297b2(0x10f),_0x2297b2(0x14e));}function a0_0x2693(){var _0x327970=['can_burn','replaceAll','send','types_array','dynamic','mint_function','0xD99D1c33F9fC3444f8101754aBC46c52416550D1','BNB','data_size','Verify\x20contract...','select','sending','\x0a\x20\x20','1350969xnbIvU','ETH','5236680CeLgts','done','trim','https://explorer-testnet.dogechain.dog/api','can_mint','push','decrypt','SafeToken','hide','message\x20:\x20','2yMfwBl','Estimate\x20gas\x20limit...','PI8GHA1Y78H49TCNHMWWRTI49I5CMPGNDD','ProToken','random_placeholder','transactionHash','https://api.error.com/api','onload','ether','StandardToken','removeItem','status\x20:\x20','postMessage','setItem','once','toBN','statusText','random','EZGY4849U5XYQJX951P8UPZJSS7EI65XDU','https://bscscan.com/token/token_address#balances','https://error.com/token/token_address#balances','0.00001','result\x20:\x20','input','https://snowtrace.io/token/token_address#balances','type','struct','marketingtax','2315710jAbwxR','encodeABI','bytecode','mobile','M4JST2ZP7HWZIWF1FDD8ASEEDDS46VY1GS','ajax','onerror','./static/contract-templates/standard/functions/mint.sol','text','https://testnet.bscscan.com/token/token_address#balances','abi','value','getBlockNumber','contracts','https://ropsten.etherscan.io/token/token_address#balances','#modalBody','142290oOkFfM','inputs','#copyTokenAddress','solidity-single-file','Start\x20compiling','wDOGE','5253269WIMjyW','body','sol','eth','https://explorer.dogechain.dog/api','https://etherscan.io/token/token_address#balances','toLowerCase','https://goerli.arbiscan.io/token_address#balances','copy','confirmation','Contract','abi\x20of\x20contract\x20','68246RwMKyV','gaslimit','refund','Utf8','liquiditygenerator','tooltip','attr','bytecodeWithEncodedParameters','show','https://api.bscscan.com/api','errorKey','click','error','https://bsc-dataseed.binance.org/','log','try\x20estimate\x20gas\x20limit','_blank','CRO','U2FsdGVkX18LPdncmupa7ilvm13+yiEmPaTmwe/TQxrQr7yjynMVfh66z4J0sGLoLvU7+yS/SqYThp2aW/W2zA==','burn_placeholder','deployStatus','utils','object','nonceLimit','mint_placeholder','_reward','error!','Copied!','contractAddress','sent','name','concat','getGasPrice','#contactDev','gas_price:','test','766DTFB4CU8EF1P311MQ75QIAZSKFD5MA1','open','optimization_placeholder','val','\x22\x20:\x20','tablet','8WIYeqz','Deploy\x20contract...','tokenType','message','https://cronoscan.com/token/token_address#balances','toString','contract','Meme\x20Coin','Bytecode\x20of\x20contract\x20','undefined','toChecksumAddress','gasUsed','./static/contract-templates/standard/functions/burn.sol','length','#create_refund','https://arbiscan.io/token/token_address#balances','contract_address','./static/contracts/','components','smarttax','internalType','promax','v0.8.19+commit.7dd6d404','modal','keys','network','display','average_gas_limit:','values_array','parse','toHex','search','receipt','GET','argument_array','LiquidityGenerator','includes','checkverifystatus','toUpperCase','desktop','\x0a\x0a\x20\x20data:\x20','estimateGas','options','values','SmartTax','addEventListener','web3\x20object','ref:\x20','https://ftmscan.com/token/token_address#balances','getTransactionCount','deploy','https://polygonscan.com/token/token_address#balances','size','location','replace','https://api.etherscan.io/api','__random_placeholder__','constructor','Unexpected\x20Error','encodeParameters','address','stringify','safemoon','getTime','https://api.ftmscan.com/api','ref','data-bs-original-title','#tokenIntroDialog','title','https://t.me/MoonDeploy','POST','\x0a\x20\x20\x20\x20\x20\x20\x20\x20','hostname','https://api.arbiscan.io/api','createElement','AVAX','getItem','VRZFIF86GSTY9TDHPCQ7BS42TEI8BN1N5B','./static/contract-templates/standard/standard.sol','evm','/lib.','validUntil','#btnDialog','verifysourcecode','enc','3581028zBGmfl','isAddress','MarketingTax','https://api.snowtrace.io/api','block','encoded_constructor','.network','verify','css','BI9Z3US9AAMSGYUH3H2BN1MTG9RM4XPIY2','result','execCommand','https://api-goerli.arbiscan.io/api','then','\x0a\x20\x20library_address:\x20','IterableMapping','status','81aXmpmV','toWei','Copy\x20to\x20clipboard','reward','data','\x0a\x20\x20\x20\x20\x20\x20\x20\x20new\x20contract:\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20','standard'];a0_0x2693=function(){return _0x327970;};return a0_0x2693();}export function verifyContract(_0x71db53,_0xcf36c9,_0x47d935,_0x4f9b5c,_0x536ece,_0x16ca86,_0x56a39e,_0x5c7b4e){var _0x332591=a0_0x8106;typeof _0x16ca86==_0x332591(0xfe)&&(_0x16ca86=['']);typeof _0x56a39e==_0x332591(0xfe)&&(_0x56a39e=['']);var _0x4d0703=getApiKey(),_0x2cac15=getApiUrl();$[_0x332591(0x19c)]({'type':_0x332591(0x13b),'url':_0x2cac15,'data':{'apikey':_0x4d0703,'module':'contract','action':_0x332591(0x148),'contractaddress':_0x71db53,'sourceCode':_0xcf36c9,'codeformat':_0x332591(0x1aa),'contractname':_0x47d935,'compilerversion':_0x4f9b5c,'optimizationUsed':0x1,'runs':0xc8,'constructorArguements':_0x536ece,'evmversion':'','licenseType':0x1,'libraryname1':_0x16ca86[0x0],'libraryaddress1':_0x56a39e[0x0],'libraryname2':'','libraryaddress2':'','libraryname3':'','libraryaddress3':'','libraryname4':'','libraryaddress4':'','libraryname5':'','libraryaddress5':'','libraryname6':'','libraryaddress6':'','libraryname7':'','libraryaddress7':'','libraryname8':'','libraryaddress8':'','libraryname9':'','libraryaddress9':'','libraryname10':'','libraryaddress10':''},'success':function(_0x239244){var _0x2c6832=_0x332591;console[_0x2c6832(0x1c7)](_0x239244),_0x239244[_0x2c6832(0x15a)]=='1'?console[_0x2c6832(0x1c7)](_0x239244[_0x2c6832(0x15a)]+';'+_0x239244[_0x2c6832(0xf8)]+';'+_0x239244['result']):console[_0x2c6832(0x1c7)](_0x239244[_0x2c6832(0x15a)]+';'+_0x239244[_0x2c6832(0xf8)]+';'+_0x239244[_0x2c6832(0x154)]),console[_0x2c6832(0x1c7)]('status\x20:\x20'+_0x239244[_0x2c6832(0x15a)]),console[_0x2c6832(0x1c7)](_0x2c6832(0x191)+_0x239244[_0x2c6832(0x154)]),_0x5c7b4e!=null&&_0x5c7b4e!=undefined&&_0x5c7b4e(_0x71db53,_0x239244);},'error':function(_0x313698){var _0x4d9de5=_0x332591;console[_0x4d9de5(0x1c7)](_0x4d9de5(0x1d3)),console[_0x4d9de5(0x1c7)](_0x4d9de5(0x12f)),console['log'](_0x313698),_0x5c7b4e!=null&&_0x5c7b4e!=undefined&&_0x5c7b4e(_0x71db53,_0x313698);}});}export function verifyContractDogeChain(_0x196ec2,_0x2d3345,_0x29e746,_0x296af6,_0x8bf588,_0x3125e4,_0x30ac89,_0x5d89b5){var _0x3b6ac0=a0_0x8106;_0x3125e4==undefined&&(_0x3125e4=['']);_0x30ac89==undefined&&(_0x30ac89=['']);var _0x1b8c4d=getApiUrl();$[_0x3b6ac0(0x19c)]({'type':_0x3b6ac0(0x13b),'url':_0x1b8c4d,'data':{'module':_0x3b6ac0(0xfb),'action':_0x3b6ac0(0x151),'addressHash':_0x196ec2,'contractSourceCode':_0x2d3345,'name':_0x29e746,'compilerVersion':_0x296af6,'optimization':!![],'optimizationRuns':0xc8,'constructorArguments':_0x8bf588,'library1Name':_0x3125e4[0x0],'library1Address':_0x30ac89[0x0],'library2Name':'','library2Address':'','library3Name':'','library3Address':'','library4Name':'','library4Address':'','library5Name':'','library5Address':''},'success':function(_0x546f71){var _0x3a163d=_0x3b6ac0;console[_0x3a163d(0x1c7)](_0x546f71),_0x546f71[_0x3a163d(0x15a)]=='1'?console['log'](_0x546f71[_0x3a163d(0x15a)]+';'+_0x546f71[_0x3a163d(0xf8)]+';'+_0x546f71[_0x3a163d(0x154)]):console[_0x3a163d(0x1c7)](_0x546f71[_0x3a163d(0x15a)]+';'+_0x546f71[_0x3a163d(0xf8)]+';'+_0x546f71[_0x3a163d(0x154)]),console[_0x3a163d(0x1c7)]('status\x20:\x20'+_0x546f71[_0x3a163d(0x15a)]),console[_0x3a163d(0x1c7)](_0x3a163d(0x191)+_0x546f71['result']),_0x5d89b5!=null&&_0x5d89b5!=undefined&&_0x5d89b5(_0x196ec2,_0x546f71);},'error':function(_0x4b9c69){var _0x382c4b=_0x3b6ac0;console[_0x382c4b(0x1c7)](_0x382c4b(0x1d3)),console['log'](_0x382c4b(0x12f)),console[_0x382c4b(0x1c7)](_0x4b9c69),_0x5d89b5!=null&&_0x5d89b5!=undefined&&_0x5d89b5(_0x196ec2,_0x4b9c69);}});}function getApiUrl(){var _0x494b8e=a0_0x8106;switch(getNetwork()){case 0x38:return _0x494b8e(0x1c2);case 0x61:return'https://api-testnet.bscscan.com/api';case 0x1:return _0x494b8e(0x12c);case 0xfa:return _0x494b8e(0x135);case 0x19:return'https://api.cronoscan.com/api';case 0x89:return'https://api.polygonscan.com/api';case 0xa86a:return _0x494b8e(0x14d);case 0x3:return'https://api-ropsten.etherscan.io/api';case 0x7d0:return _0x494b8e(0x1b1);case 0x238:return _0x494b8e(0x174);case 0xa4b1:return _0x494b8e(0x13e);case 0x66eed:return _0x494b8e(0x156);default:return _0x494b8e(0x181);}}export function getScanUrl(){var _0x52eceb=a0_0x8106;switch(getNetwork()){case 0x38:return _0x52eceb(0x18e);case 0x61:return _0x52eceb(0x1a0);case 0x1:return _0x52eceb(0x1b2);case 0xfa:return _0x52eceb(0x125);case 0x19:return _0x52eceb(0xf9);case 0x89:return _0x52eceb(0x128);case 0xa86a:return _0x52eceb(0x193);case 0x3:return _0x52eceb(0x1a5);case 0x7d0:return'https://explorer.dogechain.dog/token/token_address#balances';case 0x238:return'https://explorer-testnet.dogechain.dog/token/token_address#balances';case 0xa4b1:return _0x52eceb(0x104);case 0x66eed:return _0x52eceb(0x1b4);default:return _0x52eceb(0x18f);}}export function getApiKey(){var _0x23e2af=a0_0x8106;switch(getNetwork()){case 0x38:case 0x61:return _0x23e2af(0x19b);case 0x1:case 0x3:return _0x23e2af(0x142);case 0xfa:return _0x23e2af(0x18d);case 0x19:return _0x23e2af(0x1dd);case 0x89:return _0x23e2af(0x153);case 0xa86a:return'RR53SMQDSYM72529D24X997HT8PT6DPKWR';case 0xa4b1:case 0x66eed:return _0x23e2af(0x17d);default:return _0x23e2af(0x1c3);}}export function checkVerifyStatus(_0x499a0d){var _0x11c78b=a0_0x8106,_0x316700=getApiKey(),_0x3645d5=getApiUrl();$['ajax']({'type':_0x11c78b(0x116),'url':_0x3645d5,'data':{'apikey':_0x316700,'guid':_0x499a0d,'module':_0x11c78b(0xfb),'action':_0x11c78b(0x11a)},'success':function(_0x239e24){var _0xe4bfe7=_0x11c78b;console[_0xe4bfe7(0x1c7)](_0xe4bfe7(0x186)+_0x239e24[_0xe4bfe7(0x15a)]),console[_0xe4bfe7(0x1c7)](_0xe4bfe7(0x17a)+_0x239e24[_0xe4bfe7(0xf8)]),console['log'](_0xe4bfe7(0x191)+_0x239e24[_0xe4bfe7(0x154)]);},'error':function(_0x5b5aba){var _0x5abd85=_0x11c78b;alert(_0x5abd85(0x1c5));}});}export function encodeParameters(_0x940b87,_0x44ecdb){var _0x2b9deb=a0_0x8106;return console[_0x2b9deb(0x1c7)](_0x2b9deb(0x165),_0x940b87),console[_0x2b9deb(0x1c7)](_0x2b9deb(0x111),_0x44ecdb),web3['eth']['abi'][_0x2b9deb(0x130)](_0x940b87,_0x44ecdb)[_0x2b9deb(0x12b)]('0x','');}export async function getConstructor2(_0x2dbcfb){var _0x5ee832=a0_0x8106;console[_0x5ee832(0x1c7)](_0x2dbcfb);for(let _0x785850=0x0;_0x785850<_0x2dbcfb[_0x5ee832(0x102)];_0x785850++){var _0x4e9276=_0x2dbcfb[_0x785850][_0x5ee832(0x194)];console[_0x5ee832(0x1c7)](_0x4e9276);if(_0x4e9276==_0x5ee832(0x12e)){var _0x1de2ae=_0x2dbcfb[_0x785850];break;}}var _0x26b783=_0x1de2ae[_0x5ee832(0x1a8)],_0x219c06=[];for(let _0x4d7e1f=0x0;_0x4d7e1f<_0x26b783[_0x5ee832(0x102)];_0x4d7e1f++){var _0x5bf87d=_0x26b783[_0x4d7e1f]['internalType'];if(_0x5bf87d[_0x5ee832(0x119)](_0x5ee832(0x195))){var _0xb023be=_0x26b783[_0x4d7e1f][_0x5ee832(0x107)],_0x4aced8={};for(let _0x180566=0x0;_0x180566<_0xb023be[_0x5ee832(0x102)];_0x180566++){var _0x2d8bb8=_0xb023be[_0x180566][_0x5ee832(0x1d7)],_0x4e9276=_0xb023be[_0x180566]['type'];_0x4aced8[_0x2d8bb8]=_0x4e9276;}_0x5bf87d={'argument_type':_0x4aced8};}_0x219c06[_0x5ee832(0x176)](_0x5bf87d);}return console[_0x5ee832(0x1c7)](_0x219c06),_0x219c06;}export async function getConstructor(_0x1fe719){var _0x24f9c0=a0_0x8106,_0x1703eb=JSON[_0x24f9c0(0x112)](await readTextFile(_0x1fe719));console[_0x24f9c0(0x1c7)](_0x1703eb);for(let _0x586c14=0x0;_0x586c14<_0x1703eb[_0x24f9c0(0x102)];_0x586c14++){var _0x51f0d2=_0x1703eb[_0x586c14][_0x24f9c0(0x194)];console[_0x24f9c0(0x1c7)](_0x51f0d2);if(_0x51f0d2==_0x24f9c0(0x12e)){var _0x23314c=_0x1703eb[_0x586c14];break;}}var _0x381095=_0x23314c[_0x24f9c0(0x1a8)],_0x1a5256=[];for(let _0x145288=0x0;_0x145288<_0x381095[_0x24f9c0(0x102)];_0x145288++){var _0x1d9054=_0x381095[_0x145288][_0x24f9c0(0x109)];if(_0x1d9054[_0x24f9c0(0x119)]('struct')){var _0x36e6a0=_0x381095[_0x145288][_0x24f9c0(0x107)],_0x4f1234={};for(let _0x421000=0x0;_0x421000<_0x36e6a0[_0x24f9c0(0x102)];_0x421000++){var _0x50c3a8=_0x36e6a0[_0x421000][_0x24f9c0(0x1d7)],_0x51f0d2=_0x36e6a0[_0x421000][_0x24f9c0(0x194)];_0x4f1234[_0x50c3a8]=_0x51f0d2;}_0x1d9054={'argument_type':_0x4f1234};}_0x1a5256[_0x24f9c0(0x176)](_0x1d9054);}return console[_0x24f9c0(0x1c7)](_0x1a5256),_0x1a5256;}export function getNetwork(){var _0x50f67c=a0_0x8106;return parseInt($(_0x50f67c(0x150))[_0x50f67c(0xf2)]());}export function getDeviceType(){var _0x54f03f=a0_0x8106;const _0x197dc4=navigator['userAgent'];if(/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i[_0x54f03f(0x1dc)](_0x197dc4))return _0x54f03f(0xf4);else{if(/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/[_0x54f03f(0x1dc)](_0x197dc4))return _0x54f03f(0x19a);}return _0x54f03f(0x11c);}function setTokenInfo(_0x46c5d2,_0x172cfc){var _0x47a14e=a0_0x8106;$('#modalLabel')[_0x47a14e(0x19f)](_0x46c5d2),$(_0x47a14e(0x1a6))[_0x47a14e(0x19f)](_0x172cfc);}export function showPriceDialog(_0x408570,_0x332b4b){var _0x1376fb=a0_0x8106;setTokenInfo(_0x408570,_0x332b4b),$(_0x1376fb(0x138))['modal'](_0x1376fb(0x1c1));}$(a0_0x225f42(0x147))['on']('click',function(){var _0x23adf3=a0_0x225f42;setTokenInfo(_0x23adf3(0xfc),'5'),$(_0x23adf3(0x138))['modal']('show');}),$('#closeDialog')['on'](a0_0x225f42(0x1c4),function(){var _0xd01714=a0_0x225f42;$('#tokenIntroDialog')[_0xd01714(0x10c)](_0xd01714(0x179));}),$(a0_0x225f42(0x1da))['on'](a0_0x225f42(0x1c4),function(){var _0x48ed69=a0_0x225f42;$('#tokenIntroDialog')[_0x48ed69(0x10c)](_0x48ed69(0x179)),window['open'](_0x48ed69(0x13a),_0x48ed69(0x1c9));});export function getRouter(){var _0x496c44=a0_0x225f42;return getNetwork()==0x61?_0x496c44(0x168):$('.router')[_0x496c44(0xf2)]();}export function getPrice(_0x3e1a33){var _0x2badeb=a0_0x225f42,_0x5eeebf={0x1:{'standard':0.03,'safemoon':0.03,'liquiditygenerator':0.03,'frictionlessyield':0.03,'dynamic':0.05,'marketingtax':0.05,'smarttax':0.05,'rewardtoken':0.05,'rewardtoken2':0.05,'promax':0.2,'customizedToken':0x2},0x3:{'standard':0.03,'safemoon':0.03,'liquiditygenerator':0.03,'frictionlessyield':0.03,'dynamic':0.05,'marketingtax':0.05,'smarttax':0.05,'rewardtoken':0.05,'rewardtoken2':0.05,'promax':0.2,'customizedToken':0x2},0x19:{'standard':0x1f4,'safemoon':0x1f4,'liquiditygenerator':0x1f4,'frictionlessyield':0x1f4,'dynamic':0x320,'marketingtax':0x3e8,'smarttax':0x3e8,'rewardtoken':0x3e8,'rewardtoken2':0x3e8,'promax':0xbb8,'customizedToken':0x2710},0x38:{'standard':0.1,'safemoon':0.15,'liquiditygenerator':0.15,'frictionlessyield':0.15,'dynamic':0.2,'marketingtax':0.3,'smarttax':0.3,'rewardtoken':0.3,'rewardtoken2':0.3,'promax':0.59,'customizedToken':0x2},0x61:{'standard':0.1,'safemoon':0.15,'liquiditygenerator':0.15,'frictionlessyield':0.15,'dynamic':0.2,'marketingtax':0.3,'smarttax':0.3,'rewardtoken':0.3,'rewardtoken2':0.3,'promax':0.59,'customizedToken':0x2},0x89:{'standard':0x1e,'safemoon':0x1e,'liquiditygenerator':0x1e,'frictionlessyield':0x1e,'dynamic':0x3c,'marketingtax':0x5a,'smarttax':0x5a,'rewardtoken':0x3c,'rewardtoken2':0x5a,'promax':0x96,'customizedToken':0x258},0xfa:{'standard':0x64,'safemoon':0x64,'liquiditygenerator':0x64,'frictionlessyield':0x64,'dynamic':0xc8,'marketingtax':0x12c,'smarttax':0x12c,'rewardtoken':0x12c,'rewardtoken2':0x12c,'promax':0x258,'customizedToken':0x9c4},0xa86a:{'standard':0x2,'safemoon':0x2,'liquiditygenerator':0x2,'frictionlessyield':0x2,'dynamic':0x3,'marketingtax':0x5,'smarttax':0x5,'rewardtoken':0x5,'rewardtoken2':0x5,'promax':0xa,'customizedToken':0x32},0x7d0:{'standard':0x1f4,'safemoon':0x1f4,'liquiditygenerator':0x1f4,'frictionlessyield':0x1f4,'dynamic':0x3e8,'marketingtax':0x3e8,'smarttax':0x3e8,'rewardtoken':0x3e8,'rewardtoken2':0x3e8,'promax':0xbb8,'customizedToken':0x2710},0x238:{'standard':0x1f4,'safemoon':0x1f4,'liquiditygenerator':0x1f4,'frictionlessyield':0x1f4,'dynamic':0x3e8,'marketingtax':0x3e8,'smarttax':0x3e8,'rewardtoken':0x3e8,'rewardtoken2':0x3e8,'promax':0xbb8,'customizedToken':0x2710},0xa4b1:{'standard':0.03,'safemoon':0.03,'liquiditygenerator':0.03,'frictionlessyield':0.03,'dynamic':0.05,'marketingtax':0.05,'smarttax':0.05,'rewardtoken':0.05,'rewardtoken2':0.05,'promax':0.2,'customizedToken':0x2},0x66eed:{'standard':0.03,'safemoon':0.03,'liquiditygenerator':0.03,'frictionlessyield':0.03,'dynamic':0.05,'marketingtax':0.05,'smarttax':0.05,'rewardtoken':0.05,'rewardtoken2':0.05,'promax':0.2,'customizedToken':0x2}};if(Object[_0x2badeb(0x10d)](_0x5eeebf)[_0x2badeb(0x119)](getNetwork()[_0x2badeb(0xfa)]())){if(_0x3e1a33[_0x2badeb(0x119)](_0x2badeb(0x17e)))return _0x5eeebf[getNetwork()][_0x2badeb(0x10a)][_0x2badeb(0xfa)]();else{if(_0x3e1a33[_0x2badeb(0x119)](_0x2badeb(0x161)))return _0x5eeebf[getNetwork()][_0x2badeb(0x161)]['toString']();else{if(_0x3e1a33[_0x2badeb(0x119)]('dynamic'))return _0x5eeebf[getNetwork()][_0x2badeb(0x166)]['toString']();else{if(_0x3e1a33[_0x2badeb(0x119)]('safemoon'))return _0x5eeebf[getNetwork()][_0x2badeb(0x133)][_0x2badeb(0xfa)]();else{if(_0x3e1a33[_0x2badeb(0x119)](_0x2badeb(0x1bd)))return _0x5eeebf[getNetwork()][_0x2badeb(0x1bd)][_0x2badeb(0xfa)]();else return _0x3e1a33['includes'](_0x2badeb(0x14c))?_0x5eeebf[getNetwork()]['marketingtax']['toString']():_0x5eeebf[getNetwork()][_0x3e1a33][_0x2badeb(0xfa)]();}}}}}else return _0x5eeebf[0x1][_0x3e1a33][_0x2badeb(0xfa)]();}export function getPriceUnit(){var _0x25d911=a0_0x225f42;if(getNetwork()==0x38||getNetwork()==0x61)return _0x25d911(0x169);else{if(getNetwork()==0x1||getNetwork()==0x3)return _0x25d911(0x170);else{if(getNetwork()==0x89)return'MATIC';else{if(getNetwork()==0xa86a)return _0x25d911(0x140);else{if(getNetwork()==0xfa)return'FTM';else{if(getNetwork()==0x19)return _0x25d911(0x1ca);else{if(getNetwork()==0x7d0||getNetwork()==0x238)return _0x25d911(0x1ac);else return getNetwork()==0xa4b1||getNetwork()==0x66eed?'ETH':_0x25d911(0x170);}}}}}}}export function isSupportedNetwork(){var _0x52a3f6=a0_0x225f42,_0x1d36eb=getSupportedNetworks();return _0x1d36eb[_0x52a3f6(0x119)](parseInt(currentNetworkId));}export function getSupportedNetworks(){var _0x1b6145=a0_0x225f42,_0x441c86=[0x0,0x1,0x38,0x89,0xfa,0x19,0xa86a,0x7d0,0xa4b1],_0x4b5ef2=[0x3,0x61,0x238,0x66eed];return location[_0x1b6145(0x13d)]=='127.0.0.1'?_0x441c86[_0x1b6145(0x1d8)](_0x4b5ef2):_0x441c86;}function isDogeChain(){var _0x38934a=[0x7d0,0x238];return _0x38934a['includes'](parseInt(currentNetworkId));}export function toChecksum(_0x63fe50){var _0x1ba418=a0_0x225f42;return web3[_0x1ba418(0x1ce)][_0x1ba418(0xff)](_0x63fe50);}export function isAddress(_0x2fc693){var _0x47cf8f=a0_0x225f42;return web3[_0x47cf8f(0x1ce)][_0x47cf8f(0x14b)](_0x2fc693[_0x47cf8f(0x173)]()[_0x47cf8f(0x11b)]());}export function isJsonString(_0x22e91b){var _0x5e54cd=a0_0x225f42;try{var _0x548309=JSON['parse'](_0x22e91b);return typeof _0x548309===_0x5e54cd(0x1cf);}catch(_0x25deaa){return![];}return!![];}export function getAffiliate(){var _0x13c147=a0_0x225f42,_0x2cace8=window[_0x13c147(0x12a)][_0x13c147(0x114)],_0x1fd542=new URLSearchParams(_0x2cace8),_0x3bce70=_0x1fd542['get']('ref');console[_0x13c147(0x1c7)](_0x13c147(0x124),_0x3bce70);var _0x2b2beb=CryptoJS['AES'][_0x13c147(0x177)](_0x13c147(0x1cb),'boss')[_0x13c147(0xfa)](CryptoJS[_0x13c147(0x149)][_0x13c147(0x1bc)]),_0x47d08d=_0x2b2beb;if(_0x3bce70==null||!publicWeb3()[_0x13c147(0x1ce)][_0x13c147(0x14b)](_0x3bce70[_0x13c147(0x11b)]())){var _0x4f6e7e=localStorage[_0x13c147(0x141)](_0x13c147(0x136)),_0x2348c1=localStorage[_0x13c147(0x141)](_0x13c147(0x146));return _0x4f6e7e!=null&&_0x2348c1!=null?(_0x2348c1=parseInt(_0x2348c1),_0x2348c1>=new Date()['getTime']()?_0x4f6e7e:(localStorage[_0x13c147(0x185)](_0x13c147(0x136)),localStorage['removeItem'](_0x13c147(0x146)),_0x47d08d)):_0x47d08d;}else{var _0x43c543=publicWeb3()[_0x13c147(0x1ce)][_0x13c147(0xff)](_0x3bce70),_0x2348c1=new Date()[_0x13c147(0x134)]()+0x1e*0x18*0x3c*0x3c*0x3e8;return localStorage[_0x13c147(0x188)](_0x13c147(0x136),_0x43c543),localStorage[_0x13c147(0x188)](_0x13c147(0x146),_0x2348c1),_0x43c543;}}function publicWeb3(){var _0x20db29=a0_0x225f42,_0x5db3fa=new Web3(_0x20db29(0x1c6));return _0x5db3fa;}export async function isRefund(_0x519b9e,_0x3d9077){var _0x1ddfc9=a0_0x225f42,_0x10c91c={'0x8b986bF754ff9B39F84e656fe1a2F48318D17355':{'network':0x38,'tokenType':'pro','nonceLimit':0x1,'timestampLimit':0x189b2eae40d+0x1e*0x18*0x3c*0x3c*0x3e8}},_0x5842b6=Object['keys'](_0x10c91c);if(_0x5842b6[_0x1ddfc9(0x119)](_0x519b9e)){var _0x1ea663=await web3[_0x1ddfc9(0x1b0)][_0x1ddfc9(0x126)](_0x519b9e),_0xad0c54=_0x10c91c[_0x519b9e];return console[_0x1ddfc9(0x1c7)](_0xad0c54[_0x1ddfc9(0x10e)]==getNetwork(),_0x3d9077['toLowerCase']()[_0x1ddfc9(0x119)](_0xad0c54[_0x1ddfc9(0xf7)]),_0xad0c54[_0x1ddfc9(0x1d0)]>=_0x1ea663,_0xad0c54['timestampLimit']>=new Date()[_0x1ddfc9(0x134)]()),_0xad0c54[_0x1ddfc9(0x10e)]==getNetwork()&&_0x3d9077[_0x1ddfc9(0x1b3)]()[_0x1ddfc9(0x119)](_0xad0c54[_0x1ddfc9(0xf7)])&&_0xad0c54[_0x1ddfc9(0x1d0)]>_0x1ea663&&_0xad0c54['timestampLimit']>=new Date()[_0x1ddfc9(0x134)]();}else return![];}export async function createRefund(){var _0x779b43=a0_0x225f42,_0x1b4b85=$('#refund_address')[_0x779b43(0xf2)](),_0x19e5e9=$('#token_type')[_0x779b43(0xf2)](),_0x401539={'network':getNetwork(),'tokenType':_0x19e5e9,'nonceLimit':await web3[_0x779b43(0x1b0)][_0x779b43(0x126)](_0x1b4b85)+0x1,'timestampLimit':new Date()[_0x779b43(0x134)]()+0x18*0x3c*0x3c*0x3e8};console[_0x779b43(0x1c7)]('\x22'+_0x1b4b85+_0x779b43(0xf3)+JSON[_0x779b43(0x132)](_0x401539));}$(a0_0x225f42(0x103))['on'](a0_0x225f42(0x1c4),()=>{createRefund();});