var a0_0x4abab4=a0_0x3f08;(function(_0x1a80f5,_0x1fbe7a){var _0x4c3e10=a0_0x3f08,_0x31e528=_0x1a80f5();while(!![]){try{var _0x1fa532=parseInt(_0x4c3e10(0xd5))/0x1*(-parseInt(_0x4c3e10(0x107))/0x2)+-parseInt(_0x4c3e10(0xfc))/0x3+-parseInt(_0x4c3e10(0x105))/0x4+-parseInt(_0x4c3e10(0xd2))/0x5+-parseInt(_0x4c3e10(0xf9))/0x6+-parseInt(_0x4c3e10(0x14f))/0x7*(-parseInt(_0x4c3e10(0x12d))/0x8)+parseInt(_0x4c3e10(0x103))/0x9;if(_0x1fa532===_0x1fbe7a)break;else _0x31e528['push'](_0x31e528['shift']());}catch(_0x254af0){_0x31e528['push'](_0x31e528['shift']());}}}(a0_0xcd2d,0x44cec));export async function readTextFile(_0x4b22a1){var _0x3706bc=a0_0x3f08;return(await makeRequest(_0x3706bc(0xbf),_0x4b22a1))[_0x3706bc(0x10b)];}export function number(_0x10e385){var _0x1f513c=a0_0x3f08;return web3[_0x1f513c(0x14b)][_0x1f513c(0xea)](_0x10e385);}function makeRequest(_0x56dbf1,_0x268729){return new Promise(function(_0x13be8f,_0x4b6267){var _0x9732ca=a0_0x3f08;let _0x415577=new XMLHttpRequest();_0x415577['open'](_0x56dbf1,_0x268729),_0x415577[_0x9732ca(0x134)]=function(){var _0x25efde=_0x9732ca;this[_0x25efde(0x145)]>=0xc8&&this[_0x25efde(0x145)]<0x12c?_0x13be8f({'status':this['status'],'statusText':_0x415577[_0x25efde(0x130)]}):_0x4b6267({'status':this['status'],'statusText':_0x415577['statusText']});},_0x415577['onerror']=function(){var _0x10ede1=_0x9732ca;_0x4b6267({'status':this[_0x10ede1(0x145)],'statusText':_0x415577[_0x10ede1(0x10b)]});},_0x415577[_0x9732ca(0x156)]();});}function getGasPrice(_0x36b923){var _0x38ea06=a0_0x3f08;web3[_0x38ea06(0xca)]['getGasPrice']()[_0x38ea06(0xc1)](_0xeaa2ef=>{var _0x55a1d8=_0x38ea06;console['log'](_0x55a1d8(0xe3),_0xeaa2ef),_0x36b923(_0xeaa2ef);});}async function getGasLimit(_0x410bf1,_0x5bdf05){var _0x33dab1=a0_0x3f08;setValue(_0x33dab1(0xf3),_0x33dab1(0x12e)),showElement(_0x33dab1(0xf3));var _0xfc50d6=await web3[_0x33dab1(0xca)][_0x33dab1(0x113)](),_0x285a53=0x0,_0x435756=0x0,_0x1b5f20=0x0,_0x2278c0=0x0,_0x58e579=0x14;console['log'](_0xfc50d6),console[_0x33dab1(0x124)](_0x33dab1(0x151),_0x410bf1);for(let _0x3f3a1f=0x0;_0x3f3a1f<_0x58e579;_0x3f3a1f++){var _0x43cbc9=await web3[_0x33dab1(0xca)][_0x33dab1(0xd3)](_0xfc50d6-_0x3f3a1f),_0x44a063=parseInt(_0x43cbc9[_0x33dab1(0xff)]/_0x43cbc9[_0x33dab1(0xf0)]);console[_0x33dab1(0x124)](_0x33dab1(0x111)+_0x44a063),_0x1b5f20+=_0x44a063;}var _0x2278c0=parseInt(_0x410bf1*_0x1b5f20/_0x58e579);console[_0x33dab1(0x124)](_0x33dab1(0x129)+_0x2278c0),_0x5bdf05(_0x2278c0),hideElement('deployStatus');}function getDataSize(_0x4f8390,_0x2d0ab4){var _0x396245=a0_0x3f08;return parseInt(_0x4f8390[_0x396245(0xc9)]*0.5+_0x2d0ab4['length']*0x20);}export async function deployContract(_0x594003,_0x548348,_0x95e610,_0x16afa9,_0x44bd1c,_0x5e81cb){var _0x3501bf=a0_0x3f08,_0x1979b6=await readTextFile(_0x548348+_0x3501bf(0x11f)),_0x2d150d=JSON[_0x3501bf(0xce)](_0x1979b6);console[_0x3501bf(0x124)](Object[_0x3501bf(0xb8)](_0x2d150d)),console[_0x3501bf(0x124)]('web3\x20object',web3);var _0x15c54c=new web3[(_0x3501bf(0xca))][(_0x3501bf(0x138))](_0x2d150d);console[_0x3501bf(0x124)](_0x3501bf(0x139)+_0x15c54c+_0x3501bf(0x141));var _0x2581ce=await readTextFile(_0x548348+_0x3501bf(0x146));console['log'](_0x548348+'data');var _0x2581ce=JSON[_0x3501bf(0xce)](_0x2581ce)[_0x3501bf(0x143)];if(_0x594003=='rewardtoken'){if(typeof _0x44bd1c!==undefined&&_0x44bd1c!=null){_0x44bd1c=_0x44bd1c['replace']('0x',''),_0x2581ce=_0x2581ce['replaceAll'](_0x3501bf(0xf8),_0x44bd1c);var _0x1d87fd=getPrice(_0x594003);}else var _0x1d87fd='0';}else var _0x1d87fd=getPrice(_0x594003);console[_0x3501bf(0x124)](_0x3501bf(0xf7)+_0x44bd1c+_0x3501bf(0x150)+_0x2581ce+_0x3501bf(0xba)),console[_0x3501bf(0x124)](_0x3501bf(0xec),_0x95e610);if(_0x95e610!=[]){var _0x50c36a=await getConstructor(_0x548348+_0x3501bf(0x11f)),_0x566263=encodeParameters(_0x50c36a,_0x95e610);console[_0x3501bf(0x124)](_0x3501bf(0x128),_0x566263);}try{var _0x13c10c=_0x15c54c[_0x3501bf(0x10d)]({'data':_0x2581ce,'arguments':_0x95e610})['encodeABI'](),_0xbf29d0=await web3[_0x3501bf(0xca)][_0x3501bf(0x144)]({'data':_0x13c10c,'from':selectedAccount,'value':web3[_0x3501bf(0x14b)][_0x3501bf(0xe5)](web3[_0x3501bf(0x14b)]['toWei'](_0x1d87fd,_0x3501bf(0x14a)))});console['log']('bytecodeWithEncodedParameters',_0x13c10c),console[_0x3501bf(0x124)](_0x3501bf(0x142),_0xbf29d0),getGasPrice(function(_0x11e959){var _0x395a72=_0x3501bf;_0x15c54c['deploy']({'data':_0x2581ce,'arguments':_0x95e610})['send']({'from':selectedAccount,'gas':_0xbf29d0,'gasPrice':_0x11e959,'value':web3[_0x395a72(0x14b)]['toWei'](_0x1d87fd,_0x395a72(0x14a))},function(_0x5a0602,_0x194a55){})[_0x395a72(0x10c)](_0x395a72(0xe2),function(_0x462d26){var _0x5703c4=_0x395a72;console[_0x5703c4(0x124)]('sending',_0x462d26);})['once']('sent',function(_0x50d623){var _0x1c27c6=_0x395a72;console['log'](_0x1c27c6(0x11a),_0x50d623),setValue(_0x1c27c6(0xf3),_0x1c27c6(0x115)),showElement(_0x1c27c6(0xf3));})['on'](_0x395a72(0x127),function(_0x2984b8){var _0x49ec62=_0x395a72;_0x16afa9(_0x49ec62(0x127),_0x2984b8),hideElement(_0x49ec62(0xf3));})['on'](_0x395a72(0x12c),function(_0x4b5c62){var _0x4bb60d=_0x395a72;_0x16afa9(_0x4bb60d(0x12c),_0x4b5c62);})['on'](_0x395a72(0xe0),function(_0x2a6e2f){var _0x12633e=_0x395a72;console['log'](_0x2a6e2f[_0x12633e(0x12a)]),_0x16afa9(_0x12633e(0xe0),_0x2a6e2f);})['on'](_0x395a72(0xc2),function(_0x499f87,_0x18cb8b){var _0x8e73ad=_0x395a72;_0x16afa9(_0x8e73ad(0xc2),_0x499f87);})['then'](async function(_0x5c1842){var _0x4f801d=_0x395a72;console['log'](_0x5c1842['options'][_0x4f801d(0xc3)]),_0x16afa9(_0x4f801d(0x126),_0x5c1842['options'][_0x4f801d(0xc3)]),setValue('deployStatus','Verify\x20contract...');if(!_0x548348[_0x4f801d(0xcf)](_0x4f801d(0x153))){await sleep(0x1e);var _0x299e15=_0x5c1842[_0x4f801d(0xd7)][_0x4f801d(0xc3)];console[_0x4f801d(0x124)](_0x4f801d(0x140),_0x299e15);var _0x5be06b=await readTextFile(_0x548348+'sol');if(_0x548348['includes'](_0x4f801d(0xe7)))var _0x1060b6=_0x4f801d(0x14e);else{if(_0x548348[_0x4f801d(0xcf)](_0x4f801d(0x11d)))var _0x1060b6='SafeToken';else{if(_0x548348[_0x4f801d(0xcf)](_0x4f801d(0xeb)))var _0x1060b6=_0x4f801d(0xf5);else{if(_0x548348[_0x4f801d(0xcf)](_0x4f801d(0xbe)))var _0x1060b6='RewardToken',_0x490601=[_0x4f801d(0xe4)],_0x5a0dfc=['0x'+_0x44bd1c];else{if(_0x548348['includes'](_0x4f801d(0xe9)))var _0x1060b6='SmartTax';else{if(_0x548348['includes'](_0x4f801d(0x109)))var _0x1060b6='MarketingTax';else{if(_0x548348[_0x4f801d(0xcf)](_0x4f801d(0xd4)))var _0x1060b6=_0x4f801d(0xc0);else var _0x1060b6=_0x4f801d(0x14e);}}}}}}var _0x549ee9=await readTextFile(_0x548348+'compiler'),_0x5aa7bf=_0x566263;!isDogeChain()?verifyContract(_0x299e15,_0x5be06b,_0x1060b6,_0x549ee9,_0x5aa7bf,_0x490601,_0x5a0dfc,_0x5e81cb):verifyContractDogeChain(_0x299e15,_0x5be06b,_0x1060b6,_0x549ee9,_0x5aa7bf,_0x490601,_0x5a0dfc,_0x5e81cb);}});});}catch(_0x42b540){console[_0x3501bf(0x124)](_0x3501bf(0xfd),_0x42b540),_0x16afa9(_0x3501bf(0x127),_0x42b540);}}export function sleep(_0x3c8715){return new Promise(_0x14ecf0=>{setTimeout(_0x14ecf0,_0x3c8715*0x3e8);});}export async function createToken(_0x1753e0,_0x170cc7,_0x5253c6,_0x26131e,_0x406bc5){var _0x10b61c=a0_0x3f08,_0xf5ec26=_0x10b61c(0x132)+_0x1753e0+'/';await deployContract(_0x1753e0,_0xf5ec26,_0x170cc7,_0x5253c6,_0x26131e,_0x406bc5);}export async function deployLibrary(_0x1d1737,_0x4beed3,_0x8bcce6,_0x3575cc){var _0x1ca6f3=a0_0x3f08,_0x29deee='./static/contracts/'+_0x1d1737+_0x1ca6f3(0x153);await deployContract(_0x1d1737,_0x29deee,_0x4beed3,_0x8bcce6,null,_0x3575cc);}export function copyToCliBoard(_0x555963){var _0x35c957=a0_0x3f08,_0x5f32d8=document['createElement'](_0x35c957(0xfe));_0x5f32d8[_0x35c957(0xed)]=_0x555963,document['body']['appendChild'](_0x5f32d8),_0x5f32d8[_0x35c957(0x154)](),document[_0x35c957(0xde)]('copy'),document[_0x35c957(0xf2)][_0x35c957(0xbc)](_0x5f32d8),$('#copyTokenAddress')['attr'](_0x35c957(0xe6),_0x35c957(0x157)),$(_0x35c957(0x11e))[_0x35c957(0x108)](_0x35c957(0xb9),_0x35c957(0x157)),$(_0x35c957(0x11e))[_0x35c957(0x13c)]('show'),setTimeout(()=>{var _0x2bbbb2=_0x35c957;$(_0x2bbbb2(0x11e))['tooltip'](_0x2bbbb2(0x119)),$(_0x2bbbb2(0x11e))[_0x2bbbb2(0x108)](_0x2bbbb2(0xb9),_0x2bbbb2(0xd0)),$('#copyTokenAddress')[_0x2bbbb2(0x108)](_0x2bbbb2(0xe6),'');},0x1f4);}export function setValue(_0x4bf4f7,_0x160d92){var _0x5c0ea3=a0_0x3f08;$('.'+_0x4bf4f7)[_0x5c0ea3(0x11b)](_0x160d92);}export function hideElement(_0x536803){var _0x227508=a0_0x3f08;$('.'+_0x536803)[_0x227508(0x14c)](_0x227508(0xc6),_0x227508(0x104));}export function showElement(_0x54b4d7){var _0x5a75fe=a0_0x3f08;$('.'+_0x54b4d7)[_0x5a75fe(0x14c)]('display','block');}export function verifyContract(_0x19850f,_0x5ba58a,_0x59c8cf,_0x2e4c46,_0x498849,_0x2293ad,_0x5c433d,_0x35aaf8){var _0x590b9c=a0_0x3f08;_0x2293ad==undefined&&(_0x2293ad=['']);_0x5c433d==undefined&&(_0x5c433d=['']);var _0x19bbd2=getApiKey(),_0x41ae5a=getApiUrl();$[_0x590b9c(0xfb)]({'type':_0x590b9c(0x148),'url':_0x41ae5a,'data':{'apikey':_0x19bbd2,'module':_0x590b9c(0x102),'action':'verifysourcecode','contractaddress':_0x19850f,'sourceCode':_0x5ba58a,'codeformat':'solidity-single-file','contractname':_0x59c8cf,'compilerversion':_0x2e4c46,'optimizationUsed':0x1,'runs':0xc8,'constructorArguements':_0x498849,'evmversion':'','licenseType':0x1,'libraryname1':_0x2293ad[0x0],'libraryaddress1':_0x5c433d[0x0],'libraryname2':'','libraryaddress2':'','libraryname3':'','libraryaddress3':'','libraryname4':'','libraryaddress4':'','libraryname5':'','libraryaddress5':'','libraryname6':'','libraryaddress6':'','libraryname7':'','libraryaddress7':'','libraryname8':'','libraryaddress8':'','libraryname9':'','libraryaddress9':'','libraryname10':'','libraryaddress10':''},'success':function(_0x38691e){var _0x56d0bd=_0x590b9c;console[_0x56d0bd(0x124)](_0x38691e),_0x38691e[_0x56d0bd(0x145)]=='1'?console[_0x56d0bd(0x124)](_0x38691e[_0x56d0bd(0x145)]+';'+_0x38691e[_0x56d0bd(0xdd)]+';'+_0x38691e[_0x56d0bd(0x121)]):console[_0x56d0bd(0x124)](_0x38691e[_0x56d0bd(0x145)]+';'+_0x38691e['message']+';'+_0x38691e[_0x56d0bd(0x121)]),console[_0x56d0bd(0x124)](_0x56d0bd(0x13a)+_0x38691e[_0x56d0bd(0x145)]),console[_0x56d0bd(0x124)](_0x56d0bd(0x116)+_0x38691e[_0x56d0bd(0x121)]),_0x35aaf8!=null&&_0x35aaf8!=undefined&&_0x35aaf8(_0x19850f,_0x38691e);},'error':function(_0x1629f1){var _0x3e761b=_0x590b9c;console[_0x3e761b(0x124)]('error!'),console[_0x3e761b(0x124)](_0x3e761b(0x11c)),console[_0x3e761b(0x124)](_0x1629f1),_0x35aaf8!=null&&_0x35aaf8!=undefined&&_0x35aaf8(_0x19850f,_0x1629f1);}});}export function verifyContractDogeChain(_0x153262,_0x310182,_0x102be0,_0x54afff,_0x21b8fb,_0x377f32,_0x583bb6,_0x3baece){var _0x394c98=a0_0x3f08;_0x377f32==undefined&&(_0x377f32=['']);_0x583bb6==undefined&&(_0x583bb6=['']);var _0x2ed14f=getApiUrl();$[_0x394c98(0xfb)]({'type':'POST','url':_0x2ed14f,'data':{'module':_0x394c98(0x102),'action':_0x394c98(0xdb),'addressHash':_0x153262,'contractSourceCode':_0x310182,'name':_0x102be0,'compilerVersion':_0x54afff,'optimization':!![],'optimizationRuns':0xc8,'constructorArguments':_0x21b8fb,'library1Name':_0x377f32[0x0],'library1Address':_0x583bb6[0x0],'library2Name':'','library2Address':'','library3Name':'','library3Address':'','library4Name':'','library4Address':'','library5Name':'','library5Address':''},'success':function(_0x5ebbf5){var _0x53154d=_0x394c98;console[_0x53154d(0x124)](_0x5ebbf5),_0x5ebbf5['status']=='1'?console[_0x53154d(0x124)](_0x5ebbf5[_0x53154d(0x145)]+';'+_0x5ebbf5[_0x53154d(0xdd)]+';'+_0x5ebbf5[_0x53154d(0x121)]):console['log'](_0x5ebbf5['status']+';'+_0x5ebbf5[_0x53154d(0xdd)]+';'+_0x5ebbf5[_0x53154d(0x121)]),console[_0x53154d(0x124)](_0x53154d(0x13a)+_0x5ebbf5[_0x53154d(0x145)]),console[_0x53154d(0x124)]('result\x20:\x20'+_0x5ebbf5[_0x53154d(0x121)]),_0x3baece!=null&&_0x3baece!=undefined&&_0x3baece(_0x153262,_0x5ebbf5);},'error':function(_0xad9dd3){var _0x181c25=_0x394c98;console[_0x181c25(0x124)]('error!'),console[_0x181c25(0x124)](_0x181c25(0x11c)),console[_0x181c25(0x124)](_0xad9dd3),_0x3baece!=null&&_0x3baece!=undefined&&_0x3baece(_0x153262,_0xad9dd3);}});}function getApiUrl(){var _0x5825e6=a0_0x3f08;switch(getNetwork()){case 0x38:return _0x5825e6(0x147);case 0x61:return'https://api-testnet.bscscan.com/api';case 0x1:return _0x5825e6(0xc7);case 0xfa:return _0x5825e6(0xcd);case 0x19:return _0x5825e6(0x14d);case 0x89:return _0x5825e6(0x13b);case 0xa86a:return'https://api.snowtrace.io/api';case 0x3:return _0x5825e6(0xe1);case 0x7d0:return _0x5825e6(0xc4);case 0x238:return _0x5825e6(0x13d);default:return _0x5825e6(0xef);}}export function getScanUrl(){var _0x389fac=a0_0x3f08;switch(getNetwork()){case 0x38:return _0x389fac(0xd8);case 0x61:return _0x389fac(0x133);case 0x1:return _0x389fac(0xfa);case 0xfa:return'https://ftmscan.com/token/token_address#balances';case 0x19:return _0x389fac(0x100);case 0x89:return'https://polygonscan.com/token/token_address#balances';case 0xa86a:return'https://snowtrace.io/token/token_address#balances';case 0x3:return _0x389fac(0x112);case 0x7d0:return'https://explorer.dogechain.dog/token/token_address#balances';case 0x238:return'https://explorer-testnet.dogechain.dog/token/token_address#balances';default:return _0x389fac(0x149);}}export function getApiKey(){var _0x5f5bb0=a0_0x3f08;switch(getNetwork()){case 0x38:case 0x61:return'M4JST2ZP7HWZIWF1FDD8ASEEDDS46VY1GS';case 0x1:case 0x3:return _0x5f5bb0(0x118);case 0xfa:return _0x5f5bb0(0xcb);case 0x19:return'766DTFB4CU8EF1P311MQ75QIAZSKFD5MA1';case 0x89:return _0x5f5bb0(0x10e);case 0xa86a:return'RR53SMQDSYM72529D24X997HT8PT6DPKWR';default:return _0x5f5bb0(0x136);}}export function checkVerifyStatus(_0x5a0a28){var _0x9ed68a=a0_0x3f08,_0x1a6997=getApiKey(),_0x27e072=getApiUrl();$[_0x9ed68a(0xfb)]({'type':_0x9ed68a(0xbf),'url':_0x27e072,'data':{'apikey':_0x1a6997,'guid':_0x5a0a28,'module':_0x9ed68a(0x102),'action':_0x9ed68a(0x12b)},'success':function(_0x430d00){var _0x8047db=_0x9ed68a;console[_0x8047db(0x124)](_0x8047db(0x13a)+_0x430d00[_0x8047db(0x145)]),console['log'](_0x8047db(0x120)+_0x430d00[_0x8047db(0xdd)]),console[_0x8047db(0x124)]('result\x20:\x20'+_0x430d00[_0x8047db(0x121)]);},'error':function(_0x4cb094){var _0x1ffa89=_0x9ed68a;alert(_0x1ffa89(0x127));}});}export function encodeParameters(_0x21ce5c,_0x34dbd4){var _0xa95a93=a0_0x3f08;return console[_0xa95a93(0x124)](_0xa95a93(0xee),_0x21ce5c),console[_0xa95a93(0x124)](_0xa95a93(0xd9),_0x34dbd4),web3['eth']['abi']['encodeParameters'](_0x21ce5c,_0x34dbd4)['replace']('0x','');}function a0_0xcd2d(){var _0x4d0f53=['https://api.bscscan.com/api','POST','https://error.com/token/token_address#balances','ether','utils','css','https://api.cronoscan.com/api','StandardToken','70LxXINy','\x0a\x0a\x20\x20data:\x20','data_size','_blank','/lib.','select','val','send','Copied!','values','title','\x0a\x20\x20','toString','removeChild','modal','reward','GET','ProMax','then','confirmation','address','https://explorer.dogechain.dog/api','internalType','display','https://api.etherscan.io/api','#tokenIntroDialog','length','eth','EZGY4849U5XYQJX951P8UPZJSS7EI65XDU','test','https://api.ftmscan.com/api','parse','includes','Copy\x20to\x20clipboard','name','2257015xWRNMl','getBlock','promax','119943zBeayx','#btnDialog','options','https://bscscan.com/token/token_address#balances','values_array','0xD99D1c33F9fC3444f8101754aBC46c52416550D1','verify','userAgent','message','execCommand','click','receipt','https://api-ropsten.etherscan.io/api','sending','gas_price:','IterableMapping','toHex','data-bs-original-title','standard','CRO','smarttax','toBN','liquiditygenerator','argument_array','value','types_array','https://api.error.com/api','size','#modalLabel','body','deployStatus','inputs','LiquidityGenerator','BNB','\x0a\x20\x20library_address:\x20','__$1c23150e9628aa0c9b977eaf140b034389$__','1653870RzhhTW','https://etherscan.io/token/token_address#balances','ajax','1339248FZixUa','try\x20estimate\x20gas\x20limit','input','gasUsed','https://cronoscan.com/token/token_address#balances','desktop','contract','15892551mSntyv','none','1740332ZYIYQS','open','4VszspY','attr','marketingtax','wDOGE','statusText','once','deploy','BI9Z3US9AAMSGYUH3H2BN1MTG9RM4XPIY2','ETH','show','gas_used_per_byte:','https://ropsten.etherscan.io/token/token_address#balances','getBlockNumber','#contactDev','Deploy\x20contract...','result\x20:\x20','tablet','VRZFIF86GSTY9TDHPCQ7BS42TEI8BN1N5B','hide','sent','text','Unexpected\x20Error','safemoon','#copyTokenAddress','abi','message\x20:\x20','result','push','#modalBody','log','Meme\x20Coin','done','error','encoded_constructor','average_gas_limit:','contractAddress','checkverifystatus','transactionHash','291544jCiapR','Estimate\x20gas\x20limit...','type','response','#closeDialog','./static/contracts/','https://testnet.bscscan.com/token/token_address#balances','onload','.network','errorKey','components','Contract','\x0a\x20\x20\x20\x20\x20\x20\x20\x20new\x20contract:\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20','status\x20:\x20','https://api.polygonscan.com/api','tooltip','https://explorer-testnet.dogechain.dog/api','AVAX','constructor','contract_address','\x0a\x20\x20\x20\x20\x20\x20\x20\x20','gaslimit','object','estimateGas','status','data'];a0_0xcd2d=function(){return _0x4d0f53;};return a0_0xcd2d();}export async function getConstructor(_0xa24593){var _0x522c7f=a0_0x3f08,_0x5d5623=JSON[_0x522c7f(0xce)](await readTextFile(_0xa24593));console[_0x522c7f(0x124)](_0x5d5623);for(let _0x4863fc=0x0;_0x4863fc<_0x5d5623[_0x522c7f(0xc9)];_0x4863fc++){var _0x4c3a23=_0x5d5623[_0x4863fc][_0x522c7f(0x12f)];console['log'](_0x4c3a23);if(_0x4c3a23==_0x522c7f(0x13f)){var _0x3e75c5=_0x5d5623[_0x4863fc];break;}}var _0x55b1a8=_0x3e75c5[_0x522c7f(0xf4)],_0x9a16f0=[];for(let _0x4a0f40=0x0;_0x4a0f40<_0x55b1a8['length'];_0x4a0f40++){var _0x5ddb31=_0x55b1a8[_0x4a0f40][_0x522c7f(0xc5)];if(_0x5ddb31['includes']('struct')){var _0x5a8553=_0x55b1a8[_0x4a0f40][_0x522c7f(0x137)],_0x4341ba={};for(let _0x57522d=0x0;_0x57522d<_0x5a8553[_0x522c7f(0xc9)];_0x57522d++){var _0xef323a=_0x5a8553[_0x57522d][_0x522c7f(0xd1)],_0x4c3a23=_0x5a8553[_0x57522d]['type'];_0x4341ba[_0xef323a]=_0x4c3a23;}_0x5ddb31={'argument_type':_0x4341ba};}_0x9a16f0[_0x522c7f(0x122)](_0x5ddb31);}return console[_0x522c7f(0x124)](_0x9a16f0),_0x9a16f0;}function a0_0x3f08(_0x151a64,_0x347386){var _0xcd2d2=a0_0xcd2d();return a0_0x3f08=function(_0x3f0817,_0x57fafb){_0x3f0817=_0x3f0817-0xb8;var _0x39200b=_0xcd2d2[_0x3f0817];return _0x39200b;},a0_0x3f08(_0x151a64,_0x347386);}export function getNetwork(){var _0x30717d=a0_0x3f08;return parseInt($(_0x30717d(0x135))['val']());}export function getDeviceType(){var _0x370a01=a0_0x3f08;const _0x27b6ac=navigator[_0x370a01(0xdc)];if(/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i['test'](_0x27b6ac))return _0x370a01(0x117);else{if(/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/[_0x370a01(0xcc)](_0x27b6ac))return'mobile';}return _0x370a01(0x101);}function setTokenInfo(_0x4fbcc2,_0x3be8de){var _0x2e7635=a0_0x3f08;$(_0x2e7635(0xf1))[_0x2e7635(0x11b)](_0x4fbcc2),$(_0x2e7635(0x123))['text'](_0x3be8de);}export function showPriceDialog(_0x38a658,_0x294a1c){var _0x690ea3=a0_0x3f08;setTokenInfo(_0x38a658,_0x294a1c),$(_0x690ea3(0xc8))['modal'](_0x690ea3(0x110));}$(a0_0x4abab4(0xd6))['on'](a0_0x4abab4(0xdf),function(){var _0x320e48=a0_0x4abab4;setTokenInfo(_0x320e48(0x125),'5'),$('#tokenIntroDialog')[_0x320e48(0xbd)]('show');}),$(a0_0x4abab4(0x131))['on'](a0_0x4abab4(0xdf),function(){var _0x52abfe=a0_0x4abab4;$(_0x52abfe(0xc8))[_0x52abfe(0xbd)](_0x52abfe(0x119));}),$(a0_0x4abab4(0x114))['on'](a0_0x4abab4(0xdf),function(){var _0x197724=a0_0x4abab4;$('#tokenIntroDialog')[_0x197724(0xbd)](_0x197724(0x119)),window[_0x197724(0x106)]('https://t.me/MoonDeploy',_0x197724(0x152));});export function getRouter(){var _0x3dccc6=a0_0x4abab4;return getNetwork()==0x61?_0x3dccc6(0xda):$('.router')[_0x3dccc6(0x155)]();}export function getPrice(_0x5d2913){var _0x3c1ea5=a0_0x4abab4,_0x48e82f={0x1:{'standard':0.1,'safemoon':0.15,'liquiditygenerator':0.15,'frictionlessyield':0.15,'marketingtax':0.3,'smarttax':0.3,'rewardtoken':0.2,'rewardtoken2':0.3,'promax':0.5,'customizedToken':0x2},0x3:{'standard':0.1,'safemoon':0.15,'liquiditygenerator':0.15,'frictionlessyield':0.15,'marketingtax':0.3,'smarttax':0.3,'rewardtoken':0.2,'rewardtoken2':0.3,'promax':0.5,'customizedToken':0x2},0x19:{'standard':0x64,'safemoon':0x64,'liquiditygenerator':0x64,'frictionlessyield':0x64,'marketingtax':0x64,'smarttax':0x64,'rewardtoken':0x64,'rewardtoken2':0x64,'promax':0xc8,'customizedToken':0x3e8},0x38:{'standard':0.1,'safemoon':0.15,'liquiditygenerator':0.15,'frictionlessyield':0.15,'marketingtax':0.3,'smarttax':0.3,'rewardtoken':0.2,'rewardtoken2':0.3,'promax':0.5,'customizedToken':0x2},0x61:{'standard':0.1,'safemoon':0.15,'liquiditygenerator':0.15,'frictionlessyield':0.15,'marketingtax':0.3,'smarttax':0.3,'rewardtoken':0.2,'rewardtoken2':0.3,'promax':0.5,'customizedToken':0x2},0x89:{'standard':0x1e,'safemoon':0x1e,'liquiditygenerator':0x1e,'frictionlessyield':0x1e,'marketingtax':0x1e,'smarttax':0x1e,'rewardtoken':0x1e,'rewardtoken2':0x1e,'promax':0x3c,'customizedToken':0x12c},0xfa:{'standard':0x1e,'safemoon':0x1e,'liquiditygenerator':0x1e,'frictionlessyield':0x1e,'marketingtax':0x1e,'smarttax':0x1e,'rewardtoken':0x1e,'rewardtoken2':0x1e,'promax':0x3c,'customizedToken':0x12c},0xa86a:{'standard':0x1,'safemoon':0x1,'liquiditygenerator':0x1,'frictionlessyield':0x1,'marketingtax':0x1,'smarttax':0x1,'rewardtoken':0x1,'rewardtoken2':0x1,'promax':0x2,'customizedToken':0xa},0x7d0:{'standard':0x1f4,'safemoon':0x3e8,'liquiditygenerator':0x3e8,'frictionlessyield':0x3e8,'marketingtax':0x5dc,'smarttax':0x5dc,'rewardtoken':0x5dc,'rewardtoken2':0x5dc,'promax':0xbb8,'customizedToken':0x4e20},0x238:{'standard':0x1f4,'safemoon':0x3e8,'liquiditygenerator':0x3e8,'frictionlessyield':0x3e8,'marketingtax':0x5dc,'smarttax':0x5dc,'rewardtoken':0x5dc,'rewardtoken2':0x5dc,'promax':0xbb8,'customizedToken':0x4e20}};return _0x48e82f[getNetwork()][_0x5d2913][_0x3c1ea5(0xbb)]();}export function getPriceUnit(){var _0x52a0a2=a0_0x4abab4;if(getNetwork()==0x38||getNetwork()==0x61)return _0x52a0a2(0xf6);if(getNetwork()==0x1||getNetwork()==0x3)return _0x52a0a2(0x10f);if(getNetwork()==0x89)return'MATIC';if(getNetwork()==0xa86a)return _0x52a0a2(0x13e);if(getNetwork()==0xfa)return'FTM';if(getNetwork()==0x19)return _0x52a0a2(0xe8);if(getNetwork()==0x7d0||getNetwork()==0x238)return _0x52a0a2(0x10a);}export function isSupportedNetwork(){var _0x4211f0=getSupportedNetworks();return _0x4211f0['includes'](parseInt(currentNetworkId));}export function getSupportedNetworks(){var _0x5cd313=[0x0,0x1,0x38,0x89,0xfa,0x19,0xa86a,0x7d0],_0x1ba693=[0x3,0x61,0x238];return _0x5cd313;}function isDogeChain(){var _0x2129cc=a0_0x4abab4,_0x480449=[0x7d0,0x238];return _0x480449[_0x2129cc(0xcf)](parseInt(currentNetworkId));}