var a0_0x600e08=a0_0x24c9;(function(_0x23fb17,_0x49f77d){var _0x1a622f=a0_0x24c9,_0x3f5010=_0x23fb17();while(!![]){try{var _0x2e98ba=parseInt(_0x1a622f(0x1ba))/0x1*(parseInt(_0x1a622f(0x179))/0x2)+parseInt(_0x1a622f(0x183))/0x3+parseInt(_0x1a622f(0x1cd))/0x4*(-parseInt(_0x1a622f(0x1fd))/0x5)+-parseInt(_0x1a622f(0x228))/0x6*(parseInt(_0x1a622f(0x1d1))/0x7)+-parseInt(_0x1a622f(0x18b))/0x8+parseInt(_0x1a622f(0x226))/0x9*(parseInt(_0x1a622f(0x1ca))/0xa)+parseInt(_0x1a622f(0x1d2))/0xb*(parseInt(_0x1a622f(0x1a9))/0xc);if(_0x2e98ba===_0x49f77d)break;else _0x3f5010['push'](_0x3f5010['shift']());}catch(_0x381be4){_0x3f5010['push'](_0x3f5010['shift']());}}}(a0_0x4079,0x9d98b));export async function readTextFile(_0x7e48e2){var _0x294a0b=a0_0x24c9;return(await makeRequest(_0x294a0b(0x227),_0x7e48e2))[_0x294a0b(0x1da)];}export function number(_0x2ce227){var _0x3c148e=a0_0x24c9;return web3[_0x3c148e(0x1bd)]['toBN'](_0x2ce227);}function makeRequest(_0x460778,_0x2574d1){return new Promise(function(_0x1cf37f,_0x54b7d9){var _0x8c0b4b=a0_0x24c9;let _0x3acbe9=new XMLHttpRequest();_0x3acbe9['open'](_0x460778,_0x2574d1),_0x3acbe9['onload']=function(){var _0x2cca07=a0_0x24c9;this[_0x2cca07(0x1b0)]>=0xc8&&this['status']<0x12c?_0x1cf37f({'status':this['status'],'statusText':_0x3acbe9['response']}):_0x54b7d9({'status':this[_0x2cca07(0x1b0)],'statusText':_0x3acbe9['statusText']});},_0x3acbe9[_0x8c0b4b(0x1c5)]=function(){var _0xc7397d=_0x8c0b4b;_0x54b7d9({'status':this[_0xc7397d(0x1b0)],'statusText':_0x3acbe9[_0xc7397d(0x1da)]});},_0x3acbe9[_0x8c0b4b(0x221)]();});}function getGasPrice(_0x3ad4a6){var _0x21d12d=a0_0x24c9;web3['eth'][_0x21d12d(0x18e)]()[_0x21d12d(0x1a1)](_0x7e5ed1=>{var _0x552e6c=_0x21d12d;console[_0x552e6c(0x20a)](_0x552e6c(0x1cc),_0x7e5ed1),_0x3ad4a6(_0x7e5ed1);});}async function getGasLimit(_0x5b5f64,_0x5f5479){var _0x56c9b7=a0_0x24c9;setValue(_0x56c9b7(0x1a8),_0x56c9b7(0x191)),showElement('deployStatus');var _0x176891=await web3['eth']['getBlockNumber'](),_0x3d0333=0x0,_0x503415=0x0,_0x38b0bd=0x0,_0x26e487=0x0,_0x456208=0x14;console[_0x56c9b7(0x20a)](_0x176891),console[_0x56c9b7(0x20a)]('data_size',_0x5b5f64);for(let _0x557755=0x0;_0x557755<_0x456208;_0x557755++){var _0x40692e=await web3[_0x56c9b7(0x1b9)]['getBlock'](_0x176891-_0x557755),_0xe4243f=parseInt(_0x40692e[_0x56c9b7(0x176)]/_0x40692e[_0x56c9b7(0x184)]);console[_0x56c9b7(0x20a)](_0x56c9b7(0x1d6)+_0xe4243f),_0x38b0bd+=_0xe4243f;}var _0x26e487=parseInt(_0x5b5f64*_0x38b0bd/_0x456208);console[_0x56c9b7(0x20a)](_0x56c9b7(0x1af)+_0x26e487),_0x5f5479(_0x26e487),hideElement(_0x56c9b7(0x1a8));}function getDataSize(_0x4c07d5,_0x37ea7d){var _0x478bd9=a0_0x24c9;return parseInt(_0x4c07d5[_0x478bd9(0x1be)]*0.5+_0x37ea7d[_0x478bd9(0x1be)]*0x20);}export async function deployContract(_0x14e0ec,_0x1af693,_0x3ff21d,_0x54e25c,_0x11e13f,_0x334088){var _0x3eadd0=a0_0x24c9,_0x39ced9=await readTextFile(_0x1af693+_0x3eadd0(0x182)),_0x5c4ba6=JSON['parse'](_0x39ced9);console[_0x3eadd0(0x20a)](Object[_0x3eadd0(0x1cf)](_0x5c4ba6)),console[_0x3eadd0(0x20a)](_0x3eadd0(0x1f0),web3);var _0x5a8ce6=new web3[(_0x3eadd0(0x1b9))][(_0x3eadd0(0x178))](_0x5c4ba6);console[_0x3eadd0(0x20a)](_0x3eadd0(0x205)+_0x5a8ce6+_0x3eadd0(0x177));var _0x1a2c43=await readTextFile(_0x1af693+_0x3eadd0(0x1c1));console[_0x3eadd0(0x20a)](_0x1af693+_0x3eadd0(0x1c1));var _0x1a2c43=JSON[_0x3eadd0(0x214)](_0x1a2c43)[_0x3eadd0(0x1cb)];if(_0x14e0ec==_0x3eadd0(0x1e8)){if(typeof _0x11e13f!==undefined&&_0x11e13f!=null){_0x11e13f=_0x11e13f[_0x3eadd0(0x1f7)]('0x',''),_0x1a2c43=_0x1a2c43[_0x3eadd0(0x1ab)](_0x3eadd0(0x1ad),_0x11e13f);var _0x3b8d52=getPrice(_0x14e0ec);}else var _0x3b8d52='0';}else var _0x3b8d52=getPrice(_0x14e0ec);console['log'](_0x3eadd0(0x201)+_0x11e13f+_0x3eadd0(0x195)+_0x1a2c43+_0x3eadd0(0x1e7)),console[_0x3eadd0(0x20a)]('argument_array',_0x3ff21d);if(_0x3ff21d!=[]){var _0x1692f3=await getConstructor(_0x1af693+_0x3eadd0(0x182)),_0x35a6f2=encodeParameters(_0x1692f3,_0x3ff21d);console[_0x3eadd0(0x20a)]('encoded_constructor',_0x35a6f2);}try{var _0x12ae8b=_0x5a8ce6[_0x3eadd0(0x19c)]({'data':_0x1a2c43,'arguments':_0x3ff21d})['encodeABI'](),_0x393b43=await web3[_0x3eadd0(0x1b9)]['estimateGas']({'data':_0x12ae8b,'from':selectedAccount,'value':web3[_0x3eadd0(0x1bd)][_0x3eadd0(0x1c7)](web3[_0x3eadd0(0x1bd)][_0x3eadd0(0x1ac)](_0x3b8d52,_0x3eadd0(0x1d0)))});console[_0x3eadd0(0x20a)](_0x3eadd0(0x1c0),_0x12ae8b),console[_0x3eadd0(0x20a)](_0x3eadd0(0x1d5),_0x393b43),getGasPrice(function(_0x512ea2){var _0x3ce9a8=_0x3eadd0;_0x5a8ce6['deploy']({'data':_0x1a2c43,'arguments':_0x3ff21d})['send']({'from':selectedAccount,'gas':_0x393b43,'gasPrice':_0x512ea2,'value':web3[_0x3ce9a8(0x1bd)][_0x3ce9a8(0x1ac)](_0x3b8d52,_0x3ce9a8(0x1d0))},function(_0x15f03c,_0x2fdcf7){})[_0x3ce9a8(0x1d8)](_0x3ce9a8(0x1fe),function(_0x619c8e){var _0x535a7b=_0x3ce9a8;console['log'](_0x535a7b(0x1fe),_0x619c8e);})[_0x3ce9a8(0x1d8)](_0x3ce9a8(0x1c3),function(_0x50650c){var _0xb5da60=_0x3ce9a8;console[_0xb5da60(0x20a)]('sent',_0x50650c),setValue(_0xb5da60(0x1a8),_0xb5da60(0x207)),showElement('deployStatus');})['on'](_0x3ce9a8(0x21b),function(_0x3529b8){var _0x52c127=_0x3ce9a8;_0x54e25c(_0x52c127(0x21b),_0x3529b8),hideElement(_0x52c127(0x1a8));})['on'](_0x3ce9a8(0x222),function(_0x4c5efb){var _0x1885f1=_0x3ce9a8;_0x54e25c(_0x1885f1(0x222),_0x4c5efb);})['on'](_0x3ce9a8(0x1f3),function(_0xced5ad){var _0x2e7c77=_0x3ce9a8;console['log'](_0xced5ad[_0x2e7c77(0x1a3)]),_0x54e25c(_0x2e7c77(0x1f3),_0xced5ad);})['on'](_0x3ce9a8(0x198),function(_0x17d1a1,_0x391c51){_0x54e25c('confirmation',_0x17d1a1);})['then'](async function(_0x219d29){var _0x168529=_0x3ce9a8;console['log'](_0x219d29[_0x168529(0x189)][_0x168529(0x204)]),_0x54e25c('done',_0x219d29[_0x168529(0x189)][_0x168529(0x204)]),setValue(_0x168529(0x1a8),_0x168529(0x203));if(!_0x1af693[_0x168529(0x1bf)](_0x168529(0x224))){await sleep(0x1e);var _0x200bd3=_0x219d29[_0x168529(0x189)][_0x168529(0x204)];console[_0x168529(0x20a)](_0x168529(0x208),_0x200bd3);var _0x2cfdec=await readTextFile(_0x1af693+_0x168529(0x1f5));if(_0x1af693['includes']('standard'))var _0x198400='StandardToken';else{if(_0x1af693[_0x168529(0x1bf)](_0x168529(0x17b)))var _0x198400=_0x168529(0x1c8);else{if(_0x1af693[_0x168529(0x1bf)](_0x168529(0x1aa)))var _0x198400=_0x168529(0x1d4);else{if(_0x1af693[_0x168529(0x1bf)](_0x168529(0x194)))var _0x198400='DynamicToken';else{if(_0x1af693[_0x168529(0x1bf)](_0x168529(0x20b)))var _0x198400=_0x168529(0x1e3),_0xf571a3=['IterableMapping'],_0x179555=['0x'+_0x11e13f];else{if(_0x1af693[_0x168529(0x1bf)](_0x168529(0x1f4)))var _0x198400=_0x168529(0x17f);else{if(_0x1af693[_0x168529(0x1bf)]('marketingtax'))var _0x198400=_0x168529(0x212);else{if(_0x1af693[_0x168529(0x1bf)](_0x168529(0x1fb)))var _0x198400=_0x168529(0x19f);else var _0x198400=_0x168529(0x219);}}}}}}}var _0x58fb23=await readTextFile(_0x1af693+_0x168529(0x1ef)),_0x24afbc=_0x35a6f2;!isDogeChain()?verifyContract(_0x200bd3,_0x2cfdec,_0x198400,_0x58fb23,_0x24afbc,_0xf571a3,_0x179555,_0x334088):verifyContractDogeChain(_0x200bd3,_0x2cfdec,_0x198400,_0x58fb23,_0x24afbc,_0xf571a3,_0x179555,_0x334088);}});});}catch(_0x39919e){console[_0x3eadd0(0x20a)]('try\x20estimate\x20gas\x20limit',_0x39919e),_0x54e25c(_0x3eadd0(0x21b),_0x39919e);}}export function sleep(_0x493328){return new Promise(_0x3a6173=>{setTimeout(_0x3a6173,_0x493328*0x3e8);});}export async function createToken(_0x58597f,_0x40c0d0,_0x211bdd,_0x4a8063,_0x58bfa8){var _0x7dc7b2='./static/contracts/'+_0x58597f+'/';await deployContract(_0x58597f,_0x7dc7b2,_0x40c0d0,_0x211bdd,_0x4a8063,_0x58bfa8);}export async function deployLibrary(_0x48f0a0,_0x3d4d81,_0x259470,_0x14797b){var _0x5edac7=a0_0x24c9,_0x132d3b='./static/contracts/'+_0x48f0a0+_0x5edac7(0x224);await deployContract(_0x48f0a0,_0x132d3b,_0x3d4d81,_0x259470,null,_0x14797b);}export function copyToCliBoard(_0x4eb4a6){var _0x5f0a6b=a0_0x24c9,_0x71c4b4=document['createElement']('input');_0x71c4b4[_0x5f0a6b(0x1b2)]=_0x4eb4a6,document[_0x5f0a6b(0x1a7)][_0x5f0a6b(0x1a5)](_0x71c4b4),_0x71c4b4[_0x5f0a6b(0x1dc)](),document[_0x5f0a6b(0x1c6)](_0x5f0a6b(0x1db)),document[_0x5f0a6b(0x1a7)][_0x5f0a6b(0x17c)](_0x71c4b4),$(_0x5f0a6b(0x1f1))[_0x5f0a6b(0x196)](_0x5f0a6b(0x192),_0x5f0a6b(0x1b8)),$(_0x5f0a6b(0x1f1))[_0x5f0a6b(0x196)](_0x5f0a6b(0x19b),_0x5f0a6b(0x1b8)),$(_0x5f0a6b(0x1f1))['tooltip'](_0x5f0a6b(0x187)),setTimeout(()=>{var _0x44cb9e=_0x5f0a6b;$(_0x44cb9e(0x1f1))[_0x44cb9e(0x1ce)](_0x44cb9e(0x215)),$(_0x44cb9e(0x1f1))['attr'](_0x44cb9e(0x19b),_0x44cb9e(0x199)),$(_0x44cb9e(0x1f1))[_0x44cb9e(0x196)]('data-bs-original-title','');},0x1f4);}export function setValue(_0x33841d,_0x2f6b30){var _0x27da62=a0_0x24c9;$('.'+_0x33841d)[_0x27da62(0x21a)](_0x2f6b30);}export function hideElement(_0x579bfe){var _0x5e789d=a0_0x24c9;$('.'+_0x579bfe)[_0x5e789d(0x1f9)](_0x5e789d(0x190),_0x5e789d(0x1f2));}export function showElement(_0x4c7e58){var _0x19eb9b=a0_0x24c9;$('.'+_0x4c7e58)['css'](_0x19eb9b(0x190),_0x19eb9b(0x1b7));}export function verifyContract(_0x5dfb99,_0x12a9e0,_0x3cdea8,_0x1b581a,_0x5b75ba,_0x2f6715,_0x5a720e,_0x390702){var _0x1ea1b4=a0_0x24c9;_0x2f6715==undefined&&(_0x2f6715=['']);_0x5a720e==undefined&&(_0x5a720e=['']);var _0x5afa96=getApiKey(),_0x6304a4=getApiUrl();$[_0x1ea1b4(0x18d)]({'type':_0x1ea1b4(0x1e5),'url':_0x6304a4,'data':{'apikey':_0x5afa96,'module':_0x1ea1b4(0x20f),'action':_0x1ea1b4(0x1c4),'contractaddress':_0x5dfb99,'sourceCode':_0x12a9e0,'codeformat':'solidity-single-file','contractname':_0x3cdea8,'compilerversion':_0x1b581a,'optimizationUsed':0x1,'runs':0xc8,'constructorArguements':_0x5b75ba,'evmversion':'','licenseType':0x1,'libraryname1':_0x2f6715[0x0],'libraryaddress1':_0x5a720e[0x0],'libraryname2':'','libraryaddress2':'','libraryname3':'','libraryaddress3':'','libraryname4':'','libraryaddress4':'','libraryname5':'','libraryaddress5':'','libraryname6':'','libraryaddress6':'','libraryname7':'','libraryaddress7':'','libraryname8':'','libraryaddress8':'','libraryname9':'','libraryaddress9':'','libraryname10':'','libraryaddress10':''},'success':function(_0x4e54ec){var _0x23b16f=_0x1ea1b4;console[_0x23b16f(0x20a)](_0x4e54ec),_0x4e54ec[_0x23b16f(0x1b0)]=='1'?console['log'](_0x4e54ec[_0x23b16f(0x1b0)]+';'+_0x4e54ec[_0x23b16f(0x1f8)]+';'+_0x4e54ec[_0x23b16f(0x1d3)]):console['log'](_0x4e54ec['status']+';'+_0x4e54ec[_0x23b16f(0x1f8)]+';'+_0x4e54ec['result']),console[_0x23b16f(0x20a)](_0x23b16f(0x21d)+_0x4e54ec[_0x23b16f(0x1b0)]),console[_0x23b16f(0x20a)]('result\x20:\x20'+_0x4e54ec[_0x23b16f(0x1d3)]),_0x390702!=null&&_0x390702!=undefined&&_0x390702(_0x5dfb99,_0x4e54ec);},'error':function(_0x4c1f95){var _0x3065a9=_0x1ea1b4;console['log']('error!'),console[_0x3065a9(0x20a)](_0x3065a9(0x19a)),console['log'](_0x4c1f95),_0x390702!=null&&_0x390702!=undefined&&_0x390702(_0x5dfb99,_0x4c1f95);}});}export function verifyContractDogeChain(_0x2a06ef,_0x3b4969,_0x1b0462,_0x3879a6,_0x583f40,_0x509843,_0x3ae2df,_0x942603){var _0x4b4753=a0_0x24c9;_0x509843==undefined&&(_0x509843=['']);_0x3ae2df==undefined&&(_0x3ae2df=['']);var _0x831d1=getApiUrl();$[_0x4b4753(0x18d)]({'type':_0x4b4753(0x1e5),'url':_0x831d1,'data':{'module':_0x4b4753(0x20f),'action':_0x4b4753(0x1b4),'addressHash':_0x2a06ef,'contractSourceCode':_0x3b4969,'name':_0x1b0462,'compilerVersion':_0x3879a6,'optimization':!![],'optimizationRuns':0xc8,'constructorArguments':_0x583f40,'library1Name':_0x509843[0x0],'library1Address':_0x3ae2df[0x0],'library2Name':'','library2Address':'','library3Name':'','library3Address':'','library4Name':'','library4Address':'','library5Name':'','library5Address':''},'success':function(_0x235406){var _0xcf746d=_0x4b4753;console['log'](_0x235406),_0x235406['status']=='1'?console['log'](_0x235406[_0xcf746d(0x1b0)]+';'+_0x235406[_0xcf746d(0x1f8)]+';'+_0x235406[_0xcf746d(0x1d3)]):console[_0xcf746d(0x20a)](_0x235406[_0xcf746d(0x1b0)]+';'+_0x235406[_0xcf746d(0x1f8)]+';'+_0x235406['result']),console[_0xcf746d(0x20a)]('status\x20:\x20'+_0x235406['status']),console[_0xcf746d(0x20a)](_0xcf746d(0x1bc)+_0x235406[_0xcf746d(0x1d3)]),_0x942603!=null&&_0x942603!=undefined&&_0x942603(_0x2a06ef,_0x235406);},'error':function(_0x40b9df){var _0x3dd527=_0x4b4753;console['log']('error!'),console[_0x3dd527(0x20a)](_0x3dd527(0x19a)),console[_0x3dd527(0x20a)](_0x40b9df),_0x942603!=null&&_0x942603!=undefined&&_0x942603(_0x2a06ef,_0x40b9df);}});}function getApiUrl(){var _0x5e7862=a0_0x24c9;switch(getNetwork()){case 0x38:return _0x5e7862(0x1e0);case 0x61:return _0x5e7862(0x18c);case 0x1:return _0x5e7862(0x220);case 0xfa:return _0x5e7862(0x1de);case 0x19:return _0x5e7862(0x1fc);case 0x89:return _0x5e7862(0x19d);case 0xa86a:return _0x5e7862(0x1bb);case 0x3:return _0x5e7862(0x225);case 0x7d0:return _0x5e7862(0x1ec);case 0x238:return _0x5e7862(0x19e);default:return _0x5e7862(0x17d);}}export function getScanUrl(){var _0x4cc55f=a0_0x24c9;switch(getNetwork()){case 0x38:return _0x4cc55f(0x193);case 0x61:return _0x4cc55f(0x1f6);case 0x1:return _0x4cc55f(0x185);case 0xfa:return _0x4cc55f(0x209);case 0x19:return _0x4cc55f(0x229);case 0x89:return'https://polygonscan.com/token/token_address#balances';case 0xa86a:return'https://snowtrace.io/token/token_address#balances';case 0x3:return _0x4cc55f(0x1e2);case 0x7d0:return'https://explorer.dogechain.dog/token/token_address#balances';case 0x238:return _0x4cc55f(0x20e);default:return _0x4cc55f(0x1e4);}}export function getApiKey(){var _0x33fda2=a0_0x24c9;switch(getNetwork()){case 0x38:case 0x61:return _0x33fda2(0x1df);case 0x1:case 0x3:return'VRZFIF86GSTY9TDHPCQ7BS42TEI8BN1N5B';case 0xfa:return _0x33fda2(0x1e6);case 0x19:return _0x33fda2(0x1a2);case 0x89:return _0x33fda2(0x1e1);case 0xa86a:return _0x33fda2(0x1b1);default:return _0x33fda2(0x1d7);}}export function checkVerifyStatus(_0x3dbdff){var _0x46e2e8=a0_0x24c9,_0x4be304=getApiKey(),_0x241a2c=getApiUrl();$[_0x46e2e8(0x18d)]({'type':_0x46e2e8(0x227),'url':_0x241a2c,'data':{'apikey':_0x4be304,'guid':_0x3dbdff,'module':_0x46e2e8(0x20f),'action':_0x46e2e8(0x1ee)},'success':function(_0x127508){var _0x4f1617=_0x46e2e8;console[_0x4f1617(0x20a)](_0x4f1617(0x21d)+_0x127508[_0x4f1617(0x1b0)]),console[_0x4f1617(0x20a)](_0x4f1617(0x1a4)+_0x127508['message']),console['log'](_0x4f1617(0x1bc)+_0x127508['result']);},'error':function(_0x290773){var _0x443914=_0x46e2e8;alert(_0x443914(0x21b));}});}export function encodeParameters(_0x2d5f8d,_0x2c6211){var _0x3bf0b6=a0_0x24c9;return console[_0x3bf0b6(0x20a)](_0x3bf0b6(0x20d),_0x2d5f8d),console[_0x3bf0b6(0x20a)]('values_array',_0x2c6211),web3[_0x3bf0b6(0x1b9)][_0x3bf0b6(0x182)][_0x3bf0b6(0x211)](_0x2d5f8d,_0x2c6211)[_0x3bf0b6(0x1f7)]('0x','');}export async function getConstructor(_0x57ccea){var _0x345cca=a0_0x24c9,_0x541895=JSON[_0x345cca(0x214)](await readTextFile(_0x57ccea));console[_0x345cca(0x20a)](_0x541895);for(let _0x4f7d4f=0x0;_0x4f7d4f<_0x541895[_0x345cca(0x1be)];_0x4f7d4f++){var _0x4812e5=_0x541895[_0x4f7d4f][_0x345cca(0x1c2)];console['log'](_0x4812e5);if(_0x4812e5==_0x345cca(0x1b6)){var _0x4aeafb=_0x541895[_0x4f7d4f];break;}}var _0x226c42=_0x4aeafb[_0x345cca(0x21e)],_0x645904=[];for(let _0x1f25ee=0x0;_0x1f25ee<_0x226c42[_0x345cca(0x1be)];_0x1f25ee++){var _0x4ed135=_0x226c42[_0x1f25ee][_0x345cca(0x1e9)];if(_0x4ed135[_0x345cca(0x1bf)](_0x345cca(0x1eb))){var _0x452d67=_0x226c42[_0x1f25ee][_0x345cca(0x20c)],_0x41236d={};for(let _0x1583cd=0x0;_0x1583cd<_0x452d67['length'];_0x1583cd++){var _0x7c7255=_0x452d67[_0x1583cd][_0x345cca(0x216)],_0x4812e5=_0x452d67[_0x1583cd][_0x345cca(0x1c2)];_0x41236d[_0x7c7255]=_0x4812e5;}_0x4ed135={'argument_type':_0x41236d};}_0x645904['push'](_0x4ed135);}return console['log'](_0x645904),_0x645904;}export function getNetwork(){return parseInt($('.network')['val']());}export function getDeviceType(){var _0x2b440b=a0_0x24c9;const _0xfff3f0=navigator[_0x2b440b(0x21c)];if(/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i['test'](_0xfff3f0))return _0x2b440b(0x17e);else{if(/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/['test'](_0xfff3f0))return'mobile';}return _0x2b440b(0x18a);}function setTokenInfo(_0x5be3f3,_0x3ce7aa){var _0x2bf598=a0_0x24c9;$(_0x2bf598(0x1fa))['text'](_0x5be3f3),$(_0x2bf598(0x181))['text'](_0x3ce7aa);}function a0_0x24c9(_0x4c051d,_0x113bdd){var _0x407970=a0_0x4079();return a0_0x24c9=function(_0x24c9b8,_0x3b368e){_0x24c9b8=_0x24c9b8-0x176;var _0x467452=_0x407970[_0x24c9b8];return _0x467452;},a0_0x24c9(_0x4c051d,_0x113bdd);}export function showPriceDialog(_0x4621ec,_0x5ba1ef){var _0x2aa10e=a0_0x24c9;setTokenInfo(_0x4621ec,_0x5ba1ef),$(_0x2aa10e(0x202))[_0x2aa10e(0x217)](_0x2aa10e(0x187));}$(a0_0x600e08(0x1d9))['on'](a0_0x600e08(0x210),function(){var _0x224a26=a0_0x600e08;setTokenInfo(_0x224a26(0x1ea),'5'),$(_0x224a26(0x202))[_0x224a26(0x217)](_0x224a26(0x187));}),$(a0_0x600e08(0x213))['on']('click',function(){var _0x10117f=a0_0x600e08;$('#tokenIntroDialog')['modal'](_0x10117f(0x215));}),$(a0_0x600e08(0x188))['on']('click',function(){var _0x130d14=a0_0x600e08;$(_0x130d14(0x202))[_0x130d14(0x217)](_0x130d14(0x215)),window[_0x130d14(0x218)](_0x130d14(0x21f),_0x130d14(0x1dd));});export function getRouter(){var _0x3089f3=a0_0x600e08;return getNetwork()==0x61?_0x3089f3(0x1ed):$(_0x3089f3(0x1a6))[_0x3089f3(0x1b5)]();}export function getPrice(_0xef3588){var _0x208888=a0_0x600e08,_0x3961cf={0x1:{'standard':0.01,'safemoon':0.01,'liquiditygenerator':0.01,'frictionlessyield':0.01,'dynamic':0.02,'marketingtax':0.03,'smarttax':0.03,'rewardtoken':0.03,'rewardtoken2':0.03,'promax':0.05,'customizedToken':0.5},0x3:{'standard':0.01,'safemoon':0.01,'liquiditygenerator':0.01,'frictionlessyield':0.01,'dynamic':0.02,'marketingtax':0.03,'smarttax':0.03,'rewardtoken':0.03,'rewardtoken2':0.03,'promax':0.05,'customizedToken':0.5},0x19:{'standard':0x64,'safemoon':0x96,'liquiditygenerator':0x96,'frictionlessyield':0x96,'dynamic':0xc8,'marketingtax':0x12c,'smarttax':0x12c,'rewardtoken':0xc8,'rewardtoken2':0x12c,'promax':0x1f4,'customizedToken':0x2710},0x38:{'standard':0.1,'safemoon':0.15,'liquiditygenerator':0.15,'frictionlessyield':0.15,'dynamic':0.2,'marketingtax':0.3,'smarttax':0.3,'rewardtoken':0.2,'rewardtoken2':0.3,'promax':0.5,'customizedToken':0x2},0x61:{'standard':0.1,'safemoon':0.15,'liquiditygenerator':0.15,'frictionlessyield':0.15,'dynamic':0.2,'marketingtax':0.3,'smarttax':0.3,'rewardtoken':0.2,'rewardtoken2':0.3,'promax':0.5,'customizedToken':0x2},0x89:{'standard':0x1e,'safemoon':0x1e,'liquiditygenerator':0x1e,'frictionlessyield':0x1e,'dynamic':0x3c,'marketingtax':0x5a,'smarttax':0x5a,'rewardtoken':0x3c,'rewardtoken2':0x5a,'promax':0x96,'customizedToken':0x258},0xfa:{'standard':0x1e,'safemoon':0x1e,'liquiditygenerator':0x1e,'frictionlessyield':0x1e,'dynamic':0x64,'marketingtax':0x12c,'smarttax':0x12c,'rewardtoken':0x64,'rewardtoken2':0x12c,'promax':0x258,'customizedToken':0x9c4},0xa86a:{'standard':0x1,'safemoon':0x2,'liquiditygenerator':0x2,'frictionlessyield':0x2,'dynamic':0x5,'marketingtax':0x5,'smarttax':0x5,'rewardtoken':0x5,'rewardtoken2':0x5,'promax':0xa,'customizedToken':0x32},0x7d0:{'standard':0x64,'safemoon':0xc8,'liquiditygenerator':0xc8,'frictionlessyield':0xc8,'dynamic':0x12c,'marketingtax':0x1f4,'smarttax':0x1f4,'rewardtoken':0x1f4,'rewardtoken2':0x1f4,'promax':0x3e8,'customizedToken':0x4e20},0x238:{'standard':0x64,'safemoon':0xc8,'liquiditygenerator':0xc8,'frictionlessyield':0xc8,'dynamic':0x12c,'marketingtax':0x1f4,'smarttax':0x1f4,'rewardtoken':0x1f4,'rewardtoken2':0x1f4,'promax':0x3e8,'customizedToken':0x2710}};return Object['keys'](_0x3961cf)[_0x208888(0x1bf)](getNetwork()[_0x208888(0x17a)]())?_0x3961cf[getNetwork()][_0xef3588]['toString']():_0x3961cf[0x1][_0xef3588][_0x208888(0x17a)]();}export function getPriceUnit(){var _0x53ec45=a0_0x600e08;if(getNetwork()==0x38||getNetwork()==0x61)return'BNB';else{if(getNetwork()==0x1||getNetwork()==0x3)return _0x53ec45(0x180);else{if(getNetwork()==0x89)return _0x53ec45(0x206);else{if(getNetwork()==0xa86a)return _0x53ec45(0x18f);else{if(getNetwork()==0xfa)return _0x53ec45(0x1a0);else{if(getNetwork()==0x19)return'CRO';else return getNetwork()==0x7d0||getNetwork()==0x238?_0x53ec45(0x1ae):_0x53ec45(0x180);}}}}}}export function isSupportedNetwork(){var _0x41ed9d=getSupportedNetworks();return _0x41ed9d['includes'](parseInt(currentNetworkId));}export function getSupportedNetworks(){var _0x1478a6=a0_0x600e08,_0x142e05=[0x0,0x1,0x38,0x89,0xfa,0x19,0xa86a,0x7d0],_0x3d00df=[0x3,0x61,0x238];return location[_0x1478a6(0x1c9)]==_0x1478a6(0x197)?_0x142e05[_0x1478a6(0x186)](_0x3d00df):_0x142e05;}function isDogeChain(){var _0x2301fd=a0_0x600e08,_0xa4b69b=[0x7d0,0x238];return _0xa4b69b[_0x2301fd(0x1bf)](parseInt(currentNetworkId));}export function toChecksum(_0x5cff52){var _0x369d58=a0_0x600e08;return web3['utils'][_0x369d58(0x1b3)](_0x5cff52);}export function isAddress(_0x4c9ef9){var _0x1ef3c4=a0_0x600e08;return web3[_0x1ef3c4(0x1bd)][_0x1ef3c4(0x223)](_0x4c9ef9[_0x1ef3c4(0x1ff)]()[_0x1ef3c4(0x200)]());}function a0_0x4079(){var _0x1c9dfe=['Deploy\x20contract...','contract_address','https://ftmscan.com/token/token_address#balances','log','reward','components','types_array','https://explorer-testnet.dogechain.dog/token/token_address#balances','contract','click','encodeParameters','MarketingTax','#closeDialog','parse','hide','name','modal','open','StandardToken','text','error','userAgent','status\x20:\x20','inputs','https://t.me/MoonDeploy','https://api.etherscan.io/api','send','transactionHash','isAddress','/lib.','https://api-ropsten.etherscan.io/api','1283904kasxdZ','GET','859656CDNCOy','https://cronoscan.com/token/token_address#balances','gasUsed','\x0a\x20\x20\x20\x20\x20\x20\x20\x20','Contract','22498bqbMCq','toString','safemoon','removeChild','https://api.error.com/api','tablet','SmartTax','ETH','#modalBody','abi','1692675tCAbDr','size','https://etherscan.io/token/token_address#balances','concat','show','#contactDev','options','desktop','8831864BGHcBd','https://api-testnet.bscscan.com/api','ajax','getGasPrice','AVAX','display','Estimate\x20gas\x20limit...','data-bs-original-title','https://bscscan.com/token/token_address#balances','dynamic','\x0a\x0a\x20\x20data:\x20','attr','127.0.0.1','confirmation','Copy\x20to\x20clipboard','Unexpected\x20Error','title','deploy','https://api.polygonscan.com/api','https://explorer-testnet.dogechain.dog/api','ProToken','FTM','then','766DTFB4CU8EF1P311MQ75QIAZSKFD5MA1','contractAddress','message\x20:\x20','appendChild','.router','body','deployStatus','8844348Yynjfi','liquiditygenerator','replaceAll','toWei','__$1c23150e9628aa0c9b977eaf140b034389$__','wDOGE','average_gas_limit:','status','RR53SMQDSYM72529D24X997HT8PT6DPKWR','value','toChecksumAddress','verify','val','constructor','block','Copied!','eth','26zpsSJq','https://api.snowtrace.io/api','result\x20:\x20','utils','length','includes','bytecodeWithEncodedParameters','data','type','sent','verifysourcecode','onerror','execCommand','toHex','SafeToken','hostname','90moTdfS','object','gas_price:','348JYPaHX','tooltip','values','ether','63ULJVIj','22NIzLHQ','result','LiquidityGenerator','gaslimit','gas_used_per_byte:','errorKey','once','#btnDialog','statusText','copy','select','_blank','https://api.ftmscan.com/api','M4JST2ZP7HWZIWF1FDD8ASEEDDS46VY1GS','https://api.bscscan.com/api','BI9Z3US9AAMSGYUH3H2BN1MTG9RM4XPIY2','https://ropsten.etherscan.io/token/token_address#balances','RewardToken','https://error.com/token/token_address#balances','POST','EZGY4849U5XYQJX951P8UPZJSS7EI65XDU','\x0a\x20\x20','rewardtoken','internalType','Meme\x20Coin','struct','https://explorer.dogechain.dog/api','0xD99D1c33F9fC3444f8101754aBC46c52416550D1','checkverifystatus','compiler','web3\x20object','#copyTokenAddress','none','receipt','smarttax','sol','https://testnet.bscscan.com/token/token_address#balances','replace','message','css','#modalLabel','promax','https://api.cronoscan.com/api','33085YcPqaj','sending','trim','toUpperCase','\x0a\x20\x20library_address:\x20','#tokenIntroDialog','Verify\x20contract...','address','\x0a\x20\x20\x20\x20\x20\x20\x20\x20new\x20contract:\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20','MATIC'];a0_0x4079=function(){return _0x1c9dfe;};return a0_0x4079();}