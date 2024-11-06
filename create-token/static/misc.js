var a0_0x43e5c2 = a0_0x5404;
(function (_0x2fdaaf, _0x5eeaca) {
  var _0x1dd74d = a0_0x5404,
    _0x2ab4e8 = _0x2fdaaf();
  while (!![]) {
    try {
      var _0x1b24d1 =
        -parseInt(_0x1dd74d(0x129)) / 0x1 +
        (-parseInt(_0x1dd74d(0x1b4)) / 0x2) *
          (-parseInt(_0x1dd74d(0x150)) / 0x3) +
        parseInt(_0x1dd74d(0x1bc)) / 0x4 +
        (-parseInt(_0x1dd74d(0x15f)) / 0x5) *
          (parseInt(_0x1dd74d(0xdf)) / 0x6) +
        (-parseInt(_0x1dd74d(0x19b)) / 0x7) *
          (parseInt(_0x1dd74d(0x15c)) / 0x8) +
        (parseInt(_0x1dd74d(0xa0)) / 0x9) *
          (-parseInt(_0x1dd74d(0x114)) / 0xa) +
        parseInt(_0x1dd74d(0x17c)) / 0xb;
      if (_0x1b24d1 === _0x5eeaca) break;
      else _0x2ab4e8["push"](_0x2ab4e8["shift"]());
    } catch (_0x1cc00b) {
      _0x2ab4e8["push"](_0x2ab4e8["shift"]());
    }
  }
})(a0_0x2cd0, 0x41c36);
export async function readTextFile(_0x43d625) {
  var _0x4db7e0 = a0_0x5404;
  try {
    var _0x3cb056 = (await makeRequest("GET", _0x43d625))[_0x4db7e0(0x1a4)];
    return _0x3cb056;
  } catch {
    return null;
  }
}
export function number(_0x524cfe) {
  var _0x53872b = a0_0x5404;
  return web3[_0x53872b(0xd4)][_0x53872b(0xa6)](_0x524cfe);
}
function makeRequest(_0x240393, _0x4ef8c6) {
  return new Promise(function (_0xe8c169, _0x2624aa) {
    var _0x9f61fd = a0_0x5404;
    let _0x904e21 = new XMLHttpRequest();
    _0x904e21[_0x9f61fd(0xf6)](_0x240393, _0x4ef8c6),
      (_0x904e21[_0x9f61fd(0x97)] = function () {
        var _0x23e1fd = _0x9f61fd;
        this[_0x23e1fd(0x175)] >= 0xc8 && this[_0x23e1fd(0x175)] < 0x12c
          ? _0xe8c169({
              status: this[_0x23e1fd(0x175)],
              statusText: _0x904e21["response"],
            })
          : _0x2624aa({
              status: this[_0x23e1fd(0x175)],
              statusText: _0x904e21[_0x23e1fd(0x1a4)],
            });
      }),
      (_0x904e21[_0x9f61fd(0x11d)] = function () {
        var _0x4468f9 = _0x9f61fd;
        _0x2624aa({
          status: this["status"],
          statusText: _0x904e21[_0x4468f9(0x1a4)],
        });
      }),
      _0x904e21[_0x9f61fd(0xa1)]();
  });
}
function getGasPrice(_0x268dae) {
  var _0x38d362 = a0_0x5404;
  web3[_0x38d362(0x1b7)][_0x38d362(0x16f)]()[_0x38d362(0x111)]((_0x315f16) => {
    var _0xffd31f = _0x38d362;
    console[_0xffd31f(0x180)](_0xffd31f(0x98), _0x315f16), _0x268dae(_0x315f16);
  });
}
async function getGasLimit(_0x1ab871, _0x1a2a24) {
  var _0x557a5a = a0_0x5404;
  setValue("deployStatus", "Estimate\x20gas\x20limit..."),
    showElement(_0x557a5a(0xa3));
  var _0x1105a2 = await web3[_0x557a5a(0x1b7)][_0x557a5a(0xc6)](),
    _0x4c964f = 0x0,
    _0x142f5d = 0x0,
    _0x410c3f = 0x0,
    _0x3476ee = 0x0,
    _0x1826bb = 0x14;
  console[_0x557a5a(0x180)](_0x1105a2),
    console[_0x557a5a(0x180)](_0x557a5a(0x136), _0x1ab871);
  for (let _0x10d891 = 0x0; _0x10d891 < _0x1826bb; _0x10d891++) {
    var _0x2ae4ed = await web3["eth"]["getBlock"](_0x1105a2 - _0x10d891),
      _0x472e93 = parseInt(
        _0x2ae4ed[_0x557a5a(0xaa)] / _0x2ae4ed[_0x557a5a(0x158)]
      );
    console[_0x557a5a(0x180)](_0x557a5a(0x16e) + _0x472e93),
      (_0x410c3f += _0x472e93);
  }
  var _0x3476ee = parseInt((_0x1ab871 * _0x410c3f) / _0x1826bb);
  console["log"]("average_gas_limit:" + _0x3476ee),
    _0x1a2a24(_0x3476ee),
    hideElement(_0x557a5a(0xa3));
}
function getDataSize(_0x673cd2, _0x5b8eed) {
  return parseInt(_0x673cd2["length"] * 0.5 + _0x5b8eed["length"] * 0x20);
}
async function addFeatureProContract(
  _0x364768,
  _0x252931,
  _0x296f9b,
  _0x5841a1,
  _0x29a05d,
  _0x42f567
) {
  var _0x3fda4c = a0_0x5404;
  let _0x31346d = _0x364768;
  if (_0x29a05d)
    for (let _0x47a8ea = 0x0; _0x47a8ea < _0x42f567; _0x47a8ea++) {
      let _0x2f2612 = await readTextFile(
        _0x3fda4c(0xaf) +
          _0x252931 +
          "/code/" +
          _0x296f9b +
          (_0x47a8ea != 0x0 ? _0x47a8ea : "")
      );
      console[_0x3fda4c(0x180)](_0x296f9b + _0x3fda4c(0x11c), _0x2f2612),
        (_0x31346d = _0x31346d[_0x3fda4c(0x119)](
          _0x296f9b + (_0x47a8ea != 0x0 ? _0x47a8ea : "") + _0x3fda4c(0x1b0),
          _0x2f2612
        )),
        console[_0x3fda4c(0x180)](
          _0x296f9b + (_0x47a8ea != 0x0 ? _0x47a8ea : "") + "_code"
        ),
        console[_0x3fda4c(0x180)](_0x3fda4c(0x13d), _0x296f9b);
    }
  if (_0x5841a1) {
    let _0x92bcd = await readTextFile(
      _0x3fda4c(0xaf) + _0x252931 + _0x3fda4c(0x14a) + _0x296f9b
    );
    console["log"]("feature_name", _0x296f9b),
      (_0x31346d = _0x31346d[_0x3fda4c(0x119)](
        _0x296f9b + _0x3fda4c(0xb8),
        _0x92bcd
      ));
  }
  return _0x31346d;
}
async function removeFeatureProContract(
  _0x4533ab,
  _0x522a3a,
  _0x3ee6b5,
  _0x3b451a,
  _0x31986d,
  _0x13d165
) {
  var _0x1e6f7c = a0_0x5404;
  let _0x24443c = _0x4533ab;
  if (_0x31986d)
    for (let _0x449013 = 0x0; _0x449013 < _0x13d165; _0x449013++) {
      _0x24443c = _0x24443c[_0x1e6f7c(0x119)](
        _0x3ee6b5 + (_0x449013 != 0x0 ? _0x449013 : "") + _0x1e6f7c(0x1b0),
        ""
      );
    }
  return (
    _0x3b451a &&
      (_0x24443c = _0x24443c[_0x1e6f7c(0x119)](_0x3ee6b5 + "_function", "")),
    _0x24443c
  );
}
export async function deployContract2(
  _0x4a80d8,
  _0x2474a0,
  _0x59596c,
  _0x13bb6e,
  _0x232041,
  _0x1e510a,
  _0x9aa144,
  _0x1cb95c,
  _0x4c9ce5
) {
  var _0x8441e1 = a0_0x5404,
    _0x59fb7f = _0x59596c;
  console[_0x8441e1(0x180)](Object[_0x8441e1(0x12c)](_0x59fb7f)),
    console["log"](_0x8441e1(0x15b), web3);
  var _0x30f5f5 = new web3["eth"][_0x8441e1(0x16a)](_0x59fb7f);
  console[_0x8441e1(0x180)](
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20new\x20contract:\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20" +
      _0x30f5f5 +
      _0x8441e1(0x139)
  );
  var _0x627a24 = _0x2474a0;
  console[_0x8441e1(0x180)](_0x627a24);
  if (isJsonString(_0x627a24)) {
    var _0x47231b = JSON[_0x8441e1(0x1b2)](_0x627a24)[_0x8441e1(0xb1)];
    _0x627a24 = _0x47231b;
  } else {
    var _0x47231b = _0x627a24["trim"]();
    _0x627a24 = _0x47231b;
  }
  let _0x4a31f4, _0x2ef6db;
  if (_0x4a80d8 == "rewardtoken") {
    _0x627a24 = _0x627a24["trim"]()
      [_0x8441e1(0x15e)]("\x20")[0x0]
      [_0x8441e1(0x119)]("//", "")
      [_0x8441e1(0x93)]();
    if (typeof _0x1cb95c !== _0x8441e1(0xdb) && _0x1cb95c != null) {
      (_0x1cb95c = _0x1cb95c[_0x8441e1(0x119)]("0x", "")),
        (_0x627a24 = _0x627a24[_0x8441e1(0x119)](/\$.*?\$/g, _0x1cb95c)),
        (_0x627a24 = _0x627a24[_0x8441e1(0x119)](/__/g, ""));
      var _0x2f6ad9 = getPrice(_0x4a80d8);
      (_0x4a31f4 = [_0x8441e1(0x1bb)]), (_0x2ef6db = ["0x" + _0x1cb95c]);
    } else var _0x2f6ad9 = "0";
  } else {
    var _0x5f2d9b = await isRefund(selectedAccount, _0x4a80d8);
    console[_0x8441e1(0x180)](_0x8441e1(0xdd), _0x5f2d9b);
    if (_0x5f2d9b) var _0x2f6ad9 = _0x8441e1(0xab);
    else var _0x2f6ad9 = getPrice(_0x4a80d8);
    (_0x4a31f4 = [""]), (_0x2ef6db = [""]);
  }
  console["log"](
    _0x8441e1(0xc4) + _0x1cb95c + _0x8441e1(0xec) + _0x627a24 + _0x8441e1(0x17f)
  ),
    console[_0x8441e1(0x180)]("argument_array", _0x1e510a);
  if (_0x1e510a != []) {
    var _0x316594 = await getConstructor2(_0x59596c),
      _0x182ef4 = encodeParameters(_0x316594, _0x1e510a);
    console[_0x8441e1(0x180)](_0x8441e1(0x196), _0x182ef4);
  }
  try {
    var _0x46615e = _0x30f5f5[_0x8441e1(0x144)]({
        data: _0x627a24,
        arguments: _0x1e510a,
      })["encodeABI"](),
      _0x7d5852 = await web3["eth"][_0x8441e1(0x169)]({
        data: _0x46615e,
        from: selectedAccount,
        value: web3[_0x8441e1(0xd4)][_0x8441e1(0x19d)](
          web3["utils"][_0x8441e1(0x122)](_0x2f6ad9, _0x8441e1(0xd6))
        ),
      });
    console[_0x8441e1(0x180)]("bytecodeWithEncodedParameters", _0x46615e),
      console[_0x8441e1(0x180)](_0x8441e1(0xa2), _0x7d5852),
      getGasPrice(function (_0x4d8aa8) {
        var _0x189675 = _0x8441e1;
        _0x30f5f5[_0x189675(0x144)]({ data: _0x627a24, arguments: _0x1e510a })
          [_0x189675(0xa1)](
            {
              from: selectedAccount,
              gas: _0x7d5852,
              gasPrice: _0x4d8aa8,
              value: web3["utils"][_0x189675(0x122)](
                _0x2f6ad9,
                _0x189675(0xd6)
              ),
            },
            function (_0x3e1ccc, _0x15d7b1) {}
          )
          [_0x189675(0x10f)](_0x189675(0x1ac), function (_0x10ab35) {
            var _0x5a1bea = _0x189675;
            console[_0x5a1bea(0x180)](_0x5a1bea(0x1ac), _0x10ab35);
          })
          [_0x189675(0x10f)](_0x189675(0x155), function (_0x578f77) {
            var _0x255ec5 = _0x189675;
            console[_0x255ec5(0x180)](_0x255ec5(0x155), _0x578f77),
              setValue(_0x255ec5(0xa3), _0x255ec5(0x195)),
              showElement(_0x255ec5(0xa3));
          })
          ["on"]("error", function (_0x5215e1) {
            var _0x14c16a = _0x189675;
            _0x9aa144(_0x14c16a(0x123), _0x5215e1),
              hideElement(_0x14c16a(0xa3));
          })
          ["on"](_0x189675(0xe5), function (_0x447edf) {
            var _0x5180f2 = _0x189675;
            _0x9aa144(_0x5180f2(0xe5), _0x447edf);
          })
          ["on"](_0x189675(0x113), function (_0x102d8f) {
            var _0xcb1528 = _0x189675;
            console[_0xcb1528(0x180)](_0x102d8f["contractAddress"]),
              _0x9aa144(_0xcb1528(0x113), _0x102d8f);
          })
          ["on"](_0x189675(0x9b), function (_0x8aa66e, _0x1729e5) {
            var _0x1c4d84 = _0x189675;
            _0x9aa144(_0x1c4d84(0x9b), _0x8aa66e);
          })
          [_0x189675(0x111)](async function (_0x11ffdf) {
            var _0x5156ff = _0x189675;
            console[_0x5156ff(0x180)](
              _0x11ffdf[_0x5156ff(0xf5)][_0x5156ff(0x192)]
            ),
              _0x9aa144(
                _0x5156ff(0x171),
                _0x11ffdf[_0x5156ff(0xf5)][_0x5156ff(0x192)]
              ),
              setValue(_0x5156ff(0xa3), _0x5156ff(0x11b)),
              await sleep(getVerificationTime());
            var _0x348412 = _0x11ffdf[_0x5156ff(0xf5)][_0x5156ff(0x192)];
            console[_0x5156ff(0x180)](_0x5156ff(0x178), _0x348412);
            if (_0x4a80d8 == _0x5156ff(0xef)) {
              if (typeof _0x1cb95c !== _0x5156ff(0xdb) && _0x1cb95c != null) {
              } else
                (_0x4a31f4 = [_0x5156ff(0x1bb)]), (_0x2ef6db = [_0x348412]);
            }
            var _0xe1e0af = "v0.8.19+commit.7dd6d404",
              _0x8bb3e4 = _0x182ef4;
            if (isPulseChain())
              verifyContractPulseChain(
                _0x348412,
                _0x13bb6e,
                _0x232041,
                _0xe1e0af,
                _0x8bb3e4,
                _0x4a31f4,
                _0x2ef6db,
                _0x4c9ce5
              );
            else
              isDogeChain()
                ? verifyContractDogeChain(
                    _0x348412,
                    _0x13bb6e,
                    _0x232041,
                    _0xe1e0af,
                    _0x8bb3e4,
                    _0x4a31f4,
                    _0x2ef6db,
                    _0x4c9ce5
                  )
                : verifyContract(
                    _0x348412,
                    _0x13bb6e,
                    _0x232041,
                    _0xe1e0af,
                    _0x8bb3e4,
                    _0x4a31f4,
                    _0x2ef6db,
                    _0x4c9ce5
                  );
          });
      });
  } catch (_0x51c3d8) {
    console[_0x8441e1(0x180)]("try\x20estimate\x20gas\x20limit", _0x51c3d8),
      _0x9aa144(_0x8441e1(0x123), _0x51c3d8);
  }
}
export async function deployLibraryRewardToken(
  _0x5eef34,
  _0x42a0b0,
  _0x12fad6,
  _0x5f42d3,
  _0x1ae4b4,
  _0x4c3245,
  _0x19b9a0,
  _0x413ad0
) {
  var _0x439d56 = a0_0x5404,
    _0x35b3b1 = _0x42a0b0;
  console["log"](Object[_0x439d56(0x12c)](_0x35b3b1)),
    console["log"]("web3\x20object", web3);
  var _0xb93438 = new web3["eth"][_0x439d56(0x16a)](_0x35b3b1);
  console[_0x439d56(0x180)](
    _0x439d56(0x173) + _0xb93438 + "\x0a\x20\x20\x20\x20\x20\x20\x20\x20"
  );
  var _0x155454 = _0x5eef34;
  console["log"](_0x155454);
  if (isJsonString(_0x155454)) {
    var _0x511f98 = JSON[_0x439d56(0x1b2)](_0x155454)[_0x439d56(0xb1)];
    _0x155454 = _0x511f98;
  } else {
    var _0x511f98 = _0x155454[_0x439d56(0x93)]();
    _0x155454 = _0x511f98;
  }
  let _0x10ed3d, _0x151d69;
  var _0x7519ab = "0";
  console["log"](
    "\x0a\x20\x20library_address:\x20" +
      _0x19b9a0 +
      _0x439d56(0xec) +
      _0x155454 +
      _0x439d56(0x17f)
  ),
    console[_0x439d56(0x180)]("argument_array", _0x1ae4b4);
  try {
    var _0x1f92c7 = _0xb93438[_0x439d56(0x144)]({
        data: _0x155454,
        arguments: _0x1ae4b4,
      })["encodeABI"](),
      _0x360a18 = await web3[_0x439d56(0x1b7)][_0x439d56(0x169)]({
        data: _0x1f92c7,
        from: selectedAccount,
        value: web3[_0x439d56(0xd4)][_0x439d56(0x19d)](
          web3[_0x439d56(0xd4)][_0x439d56(0x122)](_0x7519ab, _0x439d56(0xd6))
        ),
      });
    console[_0x439d56(0x180)]("bytecodeWithEncodedParameters", _0x1f92c7),
      console[_0x439d56(0x180)](_0x439d56(0xa2), _0x360a18),
      getGasPrice(function (_0x5b7d69) {
        var _0x1f2071 = _0x439d56;
        _0xb93438[_0x1f2071(0x144)]({ data: _0x155454, arguments: _0x1ae4b4 })
          [_0x1f2071(0xa1)](
            {
              from: selectedAccount,
              gas: _0x360a18,
              gasPrice: _0x5b7d69,
              value: web3[_0x1f2071(0xd4)]["toWei"](_0x7519ab, _0x1f2071(0xd6)),
            },
            function (_0x572fe3, _0x2998ef) {}
          )
          [_0x1f2071(0x10f)]("sending", function (_0x1413b5) {
            var _0x1b0c37 = _0x1f2071;
            console[_0x1b0c37(0x180)](_0x1b0c37(0x1ac), _0x1413b5);
          })
          [_0x1f2071(0x10f)](_0x1f2071(0x155), function (_0xaea9ac) {
            var _0x51d364 = _0x1f2071;
            console[_0x51d364(0x180)](_0x51d364(0x155), _0xaea9ac),
              setValue(_0x51d364(0xa3), _0x51d364(0x195)),
              showElement(_0x51d364(0xa3));
          })
          ["on"](_0x1f2071(0x123), function (_0x290769) {
            var _0x5ccc62 = _0x1f2071;
            _0x4c3245("error", _0x290769), hideElement(_0x5ccc62(0xa3));
          })
          ["on"]("transactionHash", function (_0x8f0972) {
            var _0x1748f4 = _0x1f2071;
            _0x4c3245(_0x1748f4(0xe5), _0x8f0972);
          })
          ["on"](_0x1f2071(0x113), function (_0x1666fc) {
            var _0x40c301 = _0x1f2071;
            console[_0x40c301(0x180)](_0x1666fc["contractAddress"]),
              _0x4c3245(_0x40c301(0x113), _0x1666fc);
          })
          ["on"](_0x1f2071(0x9b), function (_0x37d80e, _0x5021de) {
            var _0x303d85 = _0x1f2071;
            _0x4c3245(_0x303d85(0x9b), _0x37d80e);
          })
          [_0x1f2071(0x111)](async function (_0x1693aa) {
            var _0x188b55 = _0x1f2071;
            console[_0x188b55(0x180)](
              _0x1693aa[_0x188b55(0xf5)][_0x188b55(0x192)]
            ),
              _0x4c3245("done", _0x1693aa[_0x188b55(0xf5)][_0x188b55(0x192)]),
              setValue(_0x188b55(0xa3), "Verify\x20contract..."),
              await sleep(getVerificationTime());
            var _0x58ea7e = _0x1693aa[_0x188b55(0xf5)][_0x188b55(0x192)];
            console["log"](_0x188b55(0x178), _0x58ea7e),
              (_0x10ed3d = [""]),
              (_0x151d69 = [""]);
            var _0x571410 = _0x188b55(0x132),
              _0x56cc26 = "";
            if (isPulseChain())
              verifyContractPulseChain(
                _0x58ea7e,
                _0x12fad6,
                _0x5f42d3,
                _0x571410,
                _0x56cc26,
                _0x10ed3d,
                _0x151d69,
                _0x413ad0
              );
            else
              isDogeChain()
                ? verifyContractDogeChain(
                    _0x58ea7e,
                    _0x12fad6,
                    _0x5f42d3,
                    _0x571410,
                    _0x56cc26,
                    _0x10ed3d,
                    _0x151d69,
                    _0x413ad0
                  )
                : verifyContract(
                    _0x58ea7e,
                    _0x12fad6,
                    _0x5f42d3,
                    _0x571410,
                    _0x56cc26,
                    _0x10ed3d,
                    _0x151d69,
                    _0x413ad0
                  );
          });
      });
  } catch (_0x34930d) {
    console["log"]("try\x20estimate\x20gas\x20limit", _0x34930d),
      _0x4c3245("error", _0x34930d);
  }
}
export async function deployContract(
  _0x58e2c2,
  _0x5f5f32,
  _0x4b7fbc,
  _0x8cbdf5,
  _0x11f3aa,
  _0x5f9b23
) {
  var _0x4dca8e = a0_0x5404,
    _0x5d2cae = await readTextFile(_0x5f5f32 + _0x4dca8e(0xfe)),
    _0x39d25c = JSON[_0x4dca8e(0x1b2)](_0x5d2cae);
  console[_0x4dca8e(0x180)](Object["values"](_0x39d25c)),
    console["log"]("web3\x20object", web3);
  var _0x3c4a60 = new web3[_0x4dca8e(0x1b7)]["Contract"](_0x39d25c);
  console[_0x4dca8e(0x180)](_0x4dca8e(0x173) + _0x3c4a60 + _0x4dca8e(0x139));
  var _0x2069d2 = await readTextFile(_0x5f5f32 + _0x4dca8e(0xe4));
  console[_0x4dca8e(0x180)](_0x5f5f32 + "data");
  if (isJsonString(_0x2069d2)) {
    var _0x254f84 = JSON[_0x4dca8e(0x1b2)](_0x2069d2)["object"];
    _0x2069d2 = _0x254f84;
  } else {
    var _0x254f84 = _0x2069d2[_0x4dca8e(0x93)]();
    _0x2069d2 = _0x254f84;
  }
  if (_0x58e2c2 == "rewardtoken") {
    if (typeof _0x11f3aa !== undefined && _0x11f3aa != null) {
      (_0x11f3aa = _0x11f3aa[_0x4dca8e(0x119)]("0x", "")),
        (_0x2069d2 = _0x2069d2[_0x4dca8e(0x119)](/\$.*?\$/g, _0x11f3aa)),
        (_0x2069d2 = _0x2069d2[_0x4dca8e(0x119)](/__/g, ""));
      var _0x2649a5 = getPrice(_0x58e2c2);
    } else var _0x2649a5 = "0";
  } else {
    var _0x2e3fcb = await isRefund(selectedAccount, _0x58e2c2);
    console[_0x4dca8e(0x180)](_0x4dca8e(0xdd), _0x2e3fcb);
    if (_0x2e3fcb) var _0x2649a5 = _0x4dca8e(0xab);
    else var _0x2649a5 = getPrice(_0x58e2c2);
  }
  console[_0x4dca8e(0x180)](
    _0x4dca8e(0xc4) +
      _0x11f3aa +
      "\x0a\x0a\x20\x20data:\x20" +
      _0x2069d2 +
      _0x4dca8e(0x17f)
  ),
    console[_0x4dca8e(0x180)](_0x4dca8e(0xca), _0x4b7fbc);
  if (_0x4b7fbc != []) {
    var _0x1a6d3d = await getConstructor(_0x5f5f32 + _0x4dca8e(0xfe)),
      _0x317eb1 = encodeParameters(_0x1a6d3d, _0x4b7fbc);
    console[_0x4dca8e(0x180)](_0x4dca8e(0x196), _0x317eb1);
  }
  try {
    var _0x597e44 = _0x3c4a60["deploy"]({
        data: _0x2069d2,
        arguments: _0x4b7fbc,
      })[_0x4dca8e(0x11e)](),
      _0x4d5414 = await web3["eth"][_0x4dca8e(0x169)]({
        data: _0x597e44,
        from: selectedAccount,
        value: web3[_0x4dca8e(0xd4)][_0x4dca8e(0x19d)](
          web3[_0x4dca8e(0xd4)]["toWei"](_0x2649a5, _0x4dca8e(0xd6))
        ),
      });
    console[_0x4dca8e(0x180)](_0x4dca8e(0x104), _0x597e44),
      console[_0x4dca8e(0x180)](_0x4dca8e(0xa2), _0x4d5414),
      getGasPrice(function (_0x4c620e) {
        var _0xb94802 = _0x4dca8e;
        _0x3c4a60[_0xb94802(0x144)]({ data: _0x2069d2, arguments: _0x4b7fbc })
          ["send"](
            {
              from: selectedAccount,
              gas: _0x4d5414,
              gasPrice: _0x4c620e,
              value: web3["utils"][_0xb94802(0x122)](
                _0x2649a5,
                _0xb94802(0xd6)
              ),
            },
            function (_0x487ede, _0x368c60) {}
          )
          [_0xb94802(0x10f)]("sending", function (_0x1ea750) {
            var _0x506148 = _0xb94802;
            console[_0x506148(0x180)](_0x506148(0x1ac), _0x1ea750);
          })
          [_0xb94802(0x10f)]("sent", function (_0x1af687) {
            var _0x48fef4 = _0xb94802;
            console[_0x48fef4(0x180)](_0x48fef4(0x155), _0x1af687),
              setValue("deployStatus", _0x48fef4(0x195)),
              showElement("deployStatus");
          })
          ["on"](_0xb94802(0x123), function (_0x6c599) {
            var _0x249437 = _0xb94802;
            _0x8cbdf5("error", _0x6c599), hideElement(_0x249437(0xa3));
          })
          ["on"](_0xb94802(0xe5), function (_0x23cf7c) {
            var _0x4104af = _0xb94802;
            _0x8cbdf5(_0x4104af(0xe5), _0x23cf7c);
          })
          ["on"](_0xb94802(0x113), function (_0x147c6b) {
            var _0x139257 = _0xb94802;
            console[_0x139257(0x180)](_0x147c6b["contractAddress"]),
              _0x8cbdf5(_0x139257(0x113), _0x147c6b);
          })
          ["on"](_0xb94802(0x9b), function (_0x125e5f, _0x5b248a) {
            var _0x535aae = _0xb94802;
            _0x8cbdf5(_0x535aae(0x9b), _0x125e5f);
          })
          [_0xb94802(0x111)](async function (_0x3d8c52) {
            var _0x5aca5b = _0xb94802;
            console[_0x5aca5b(0x180)](_0x3d8c52[_0x5aca5b(0xf5)]["address"]),
              _0x8cbdf5(
                _0x5aca5b(0x171),
                _0x3d8c52[_0x5aca5b(0xf5)]["address"]
              ),
              setValue("deployStatus", _0x5aca5b(0x11b));
            if (!_0x5f5f32[_0x5aca5b(0x102)](_0x5aca5b(0xfd))) {
              await sleep(getVerificationTime());
              var _0x1f1ac7 = _0x3d8c52[_0x5aca5b(0xf5)]["address"];
              console[_0x5aca5b(0x180)](_0x5aca5b(0x178), _0x1f1ac7);
              var _0x5e2f04 = await readTextFile(_0x5f5f32 + _0x5aca5b(0xae));
              if (_0x5f5f32[_0x5aca5b(0x102)](_0x5aca5b(0x1b9)))
                var _0x1b49be = _0x5aca5b(0xe6);
              else {
                if (_0x5f5f32["includes"]("safemoon"))
                  var _0x1b49be = _0x5aca5b(0x137);
                else {
                  if (_0x5f5f32[_0x5aca5b(0x102)](_0x5aca5b(0x166)))
                    var _0x1b49be = _0x5aca5b(0x17e);
                  else {
                    if (_0x5f5f32[_0x5aca5b(0x102)]("dynamic"))
                      var _0x1b49be = "DynamicToken";
                    else {
                      if (
                        _0x5f5f32[_0x5aca5b(0x102)]("reward") &&
                        !_0x5f5f32[_0x5aca5b(0x102)](_0x5aca5b(0x197))
                      )
                        var _0x1b49be = _0x5aca5b(0x147),
                          _0x48e2e5 = [_0x5aca5b(0x1bb)],
                          _0x50fea4 = ["0x" + _0x11f3aa];
                      else {
                        if (_0x5f5f32["includes"](_0x5aca5b(0xc2)))
                          var _0x1b49be = _0x5aca5b(0x96);
                        else {
                          if (
                            _0x5f5f32[_0x5aca5b(0x102)](_0x5aca5b(0x18d)) ||
                            _0x5f5f32[_0x5aca5b(0x102)](_0x5aca5b(0xb4))
                          )
                            var _0x1b49be = _0x5aca5b(0xb4);
                          else {
                            if (
                              _0x5f5f32["includes"](_0x5aca5b(0x95)) ||
                              _0x5f5f32["includes"]("ProToken")
                            )
                              var _0x1b49be = _0x5aca5b(0xde);
                            else var _0x1b49be = _0x5aca5b(0xe6);
                          }
                        }
                      }
                    }
                  }
                }
              }
              var _0x5420e6 = await readTextFile(_0x5f5f32 + "compiler"),
                _0x3722f5 = _0x317eb1;
              !isDogeChain() && !isPulseChain()
                ? verifyContract(
                    _0x1f1ac7,
                    _0x5e2f04,
                    _0x1b49be,
                    _0x5420e6,
                    _0x3722f5,
                    _0x48e2e5,
                    _0x50fea4,
                    _0x5f9b23
                  )
                : verifyContractDogeChain(
                    _0x1f1ac7,
                    _0x5e2f04,
                    _0x1b49be,
                    _0x5420e6,
                    _0x3722f5,
                    _0x48e2e5,
                    _0x50fea4,
                    _0x5f9b23
                  );
            }
          });
      });
  } catch (_0x576298) {
    console[_0x4dca8e(0x180)](_0x4dca8e(0x142), _0x576298),
      _0x8cbdf5(_0x4dca8e(0x123), _0x576298);
  }
}
export function sleep(_0x1febcb) {
  return new Promise((_0x466fdd) => {
    setTimeout(_0x466fdd, _0x1febcb * 0x3e8);
  });
}
export async function createToken(
  _0x4e5ad1,
  _0x519a2a,
  _0xbca20d,
  _0x4ce23b,
  _0xfa75c,
  _0x32811d,
  _0x38b11e,
  _0x964210
) {
  var _0x46c223 = a0_0x5404;
  setValue(_0x46c223(0xa3), "Compile\x20contract..."),
    showElement(_0x46c223(0xa3));
  let _0x470176 = _0x32811d[_0x46c223(0x119)]("\x20", ""),
    _0x57424d;
  (_0x57424d = await readTextFile(
    "./static/contract-templates/" + _0x4e5ad1 + "/" + _0x4e5ad1 + ".sol"
  )),
    (_0x57424d = _0x57424d[_0x46c223(0x119)](
      "contract_name_placeholder",
      _0x470176
    )
      [_0x46c223(0x119)](
        _0x46c223(0xbe),
        new Date()["getTime"]()["toString"]() +
          parseInt(Math[_0x46c223(0xba)]() * (0x1869f - 0x2710) + 0x2710)[
            _0x46c223(0x161)
          ]()
      )
      [_0x46c223(0x119)](_0x46c223(0x160), _0x964210));
  if (_0x4e5ad1 == "standard") {
    if (_0x38b11e["can_mint"]) {
      let _0x1bde97 = await readTextFile(_0x46c223(0x11f));
      console[_0x46c223(0x180)](_0x46c223(0xe8), _0x1bde97),
        (_0x57424d = _0x57424d[_0x46c223(0x119)](_0x46c223(0xe2), _0x1bde97));
    } else _0x57424d = _0x57424d["replace"](_0x46c223(0xe2), "");
  } else {
    if (_0x4e5ad1 == _0x46c223(0x18d)) {
      if (!_0x38b11e[_0x46c223(0x108)]) {
        let _0x302b88 = await readTextFile(
          "./static/contract-templates/" + _0x4e5ad1 + _0x46c223(0xc0)
        );
        console[_0x46c223(0x180)]("buyTax", _0x302b88);
        let _0x5d1090 = await readTextFile(
          "./static/contract-templates/" + _0x4e5ad1 + _0x46c223(0x94)
        );
        console[_0x46c223(0x180)](_0x46c223(0x110), _0x5d1090);
        let _0xc47f65 = await readTextFile(
          _0x46c223(0xaf) + _0x4e5ad1 + _0x46c223(0x105)
        );
        console[_0x46c223(0x180)](_0x46c223(0x1a3), _0xc47f65);
        let _0x59ae5b = await readTextFile(
          _0x46c223(0xaf) + _0x4e5ad1 + _0x46c223(0x179)
        );
        console[_0x46c223(0x180)](_0x46c223(0xda), _0x59ae5b),
          (_0x57424d = _0x57424d["replace"](
            _0x46c223(0x17b) + "_placeholder",
            _0x302b88
          )[_0x46c223(0x119)](_0x46c223(0x110) + _0x46c223(0x174), _0x5d1090));
      } else
        _0x57424d = _0x57424d["replace"](
          _0x46c223(0x17b) + _0x46c223(0x174),
          ""
        )[_0x46c223(0x119)](_0x46c223(0x110) + _0x46c223(0x174), "");
      if (_0x38b11e["maxTx"]) {
        let _0xa8ebce = await readTextFile(
          _0x46c223(0xaf) + _0x4e5ad1 + "/functions/maxTx.sol"
        );
        console["log"](_0x46c223(0x1a3), _0xa8ebce),
          (_0x57424d = _0x57424d["replace"](
            "maxTx" + _0x46c223(0x174),
            _0xa8ebce
          ));
      } else
        _0x57424d = _0x57424d[_0x46c223(0x119)]("maxTx" + "_placeholder", "");
      if (_0x38b11e["maxWallet"]) {
        let _0x39461d = await readTextFile(
          _0x46c223(0xaf) + _0x4e5ad1 + _0x46c223(0x179)
        );
        console[_0x46c223(0x180)](_0x46c223(0xda), _0x39461d),
          (_0x57424d = _0x57424d[_0x46c223(0x119)](
            "maxWallet" + _0x46c223(0x174),
            _0x39461d
          ));
      } else
        _0x57424d = _0x57424d[_0x46c223(0x119)](
          _0x46c223(0xda) + _0x46c223(0x174),
          ""
        );
    } else {
      if (_0x4e5ad1 == _0x46c223(0x95))
        _0x38b11e[_0x46c223(0xa4)] &&
          ((_0x57424d = await readTextFile(_0x46c223(0x1a0))),
          (_0x57424d = _0x57424d[_0x46c223(0x119)](_0x46c223(0x176), _0x470176)
            [_0x46c223(0x119)](
              "optimization_placeholder",
              new Date()[_0x46c223(0xd0)]()[_0x46c223(0x161)]() +
                parseInt(Math[_0x46c223(0xba)]() * (0x1869f - 0x2710) + 0x2710)[
                  _0x46c223(0x161)
                ]()
            )
            [_0x46c223(0x119)](_0x46c223(0x160), _0x964210))),
          _0x38b11e[_0x46c223(0x101)]
            ? (_0x57424d = await addFeatureProContract(
                _0x57424d,
                _0x46c223(0x95),
                _0x46c223(0x101),
                !![],
                !![],
                0x4
              ))
            : (_0x57424d = await removeFeatureProContract(
                _0x57424d,
                _0x46c223(0x95),
                _0x46c223(0x101),
                !![],
                !![],
                0x4
              )),
          _0x38b11e[_0x46c223(0xa8)]
            ? (_0x57424d = await addFeatureProContract(
                _0x57424d,
                "promax",
                "mint",
                !![],
                ![],
                0x0
              ))
            : (_0x57424d = await removeFeatureProContract(
                _0x57424d,
                _0x46c223(0x95),
                _0x46c223(0xa8),
                !![],
                ![],
                0x0
              )),
          _0x38b11e[_0x46c223(0x172)]
            ? (_0x57424d = await addFeatureProContract(
                _0x57424d,
                "promax",
                _0x46c223(0x172),
                !![],
                !![],
                0x1
              ))
            : (_0x57424d = await removeFeatureProContract(
                _0x57424d,
                _0x46c223(0x95),
                _0x46c223(0x172),
                !![],
                !![],
                0x1
              )),
          _0x38b11e[_0x46c223(0xd3)]
            ? (_0x57424d = await addFeatureProContract(
                _0x57424d,
                _0x46c223(0x95),
                _0x46c223(0xd3),
                !![],
                !![],
                0x1
              ))
            : (_0x57424d = await removeFeatureProContract(
                _0x57424d,
                "promax",
                _0x46c223(0xd3),
                !![],
                !![],
                0x1
              )),
          _0x38b11e[_0x46c223(0x1ab)]
            ? (_0x57424d = await addFeatureProContract(
                _0x57424d,
                _0x46c223(0x95),
                _0x46c223(0x1ab),
                !![],
                !![],
                0x4
              ))
            : (_0x57424d = await removeFeatureProContract(
                _0x57424d,
                _0x46c223(0x95),
                "marketing",
                !![],
                !![],
                0x4
              )),
          _0x38b11e[_0x46c223(0x154)]
            ? (_0x57424d = await addFeatureProContract(
                _0x57424d,
                _0x46c223(0x95),
                "blacklist",
                !![],
                !![],
                0x1
              ))
            : (_0x57424d = await removeFeatureProContract(
                _0x57424d,
                _0x46c223(0x95),
                _0x46c223(0x154),
                !![],
                !![],
                0x1
              )),
          _0x38b11e["buyback"]
            ? (_0x57424d = await addFeatureProContract(
                _0x57424d,
                _0x46c223(0x95),
                _0x46c223(0x10c),
                !![],
                !![],
                0x5
              ))
            : (_0x57424d = await removeFeatureProContract(
                _0x57424d,
                _0x46c223(0x95),
                _0x46c223(0x10c),
                !![],
                !![],
                0x5
              )),
          _0x38b11e[_0x46c223(0xf8)]
            ? (_0x57424d = await addFeatureProContract(
                _0x57424d,
                _0x46c223(0x95),
                "burn",
                !![],
                ![],
                0x0
              ))
            : (_0x57424d = await removeFeatureProContract(
                _0x57424d,
                "promax",
                _0x46c223(0xf8),
                !![],
                ![],
                0x0
              )),
          _0x38b11e[_0x46c223(0x1a8)]
            ? (_0x57424d = await addFeatureProContract(
                _0x57424d,
                "promax",
                "dev",
                !![],
                !![],
                0x4
              ))
            : (_0x57424d = await removeFeatureProContract(
                _0x57424d,
                _0x46c223(0x95),
                "dev",
                !![],
                !![],
                0x4
              )),
          _0x38b11e["reward"]
            ? (_0x57424d = await addFeatureProContract(
                _0x57424d,
                "promax",
                "reward",
                !![],
                !![],
                0xa
              ))
            : (_0x57424d = await removeFeatureProContract(
                _0x57424d,
                "promax",
                _0x46c223(0xbd),
                !![],
                !![],
                0xa
              )),
          _0x38b11e[_0x46c223(0x12a)]
            ? (_0x57424d = await addFeatureProContract(
                _0x57424d,
                _0x46c223(0x95),
                "pause",
                !![],
                !![],
                0x1
              ))
            : (_0x57424d = await removeFeatureProContract(
                _0x57424d,
                _0x46c223(0x95),
                "pause",
                !![],
                !![],
                0x1
              ));
      else {
        if (_0x4e5ad1 == _0x46c223(0x166)) {
          _0x38b11e[_0x46c223(0xd3)]
            ? (_0x57424d = await addFeatureProContract(
                _0x57424d,
                _0x4e5ad1,
                _0x46c223(0xd3),
                !![],
                !![],
                0x1
              ))
            : (_0x57424d = await removeFeatureProContract(
                _0x57424d,
                _0x4e5ad1,
                _0x46c223(0xd3),
                !![],
                !![],
                0x1
              ));
          _0x38b11e["blacklist"]
            ? (_0x57424d = await addFeatureProContract(
                _0x57424d,
                _0x4e5ad1,
                _0x46c223(0x154),
                !![],
                !![],
                0x1
              ))
            : (_0x57424d = await removeFeatureProContract(
                _0x57424d,
                _0x4e5ad1,
                _0x46c223(0x154),
                !![],
                !![],
                0x1
              ));
          console[_0x46c223(0x180)](_0x57424d);
          var _0x4ad877 = new Worker("./static/dist/bundle-op-200.js");
          _0x4ad877[_0x46c223(0x100)](
            _0x46c223(0x1a2),
            async function (_0x598aae) {
              var _0x24522d = _0x46c223;
              const _0x217166 = _0x598aae[_0x24522d(0xe4)][_0x24522d(0xd8)];
              console[_0x24522d(0x180)](_0x217166);
              for (var _0x52134b in _0x217166["contracts"][_0x24522d(0x1ae)]) {
                console[_0x24522d(0x180)](
                  _0x24522d(0xeb) +
                    _0x52134b +
                    ":\x20" +
                    _0x217166[_0x24522d(0x198)][_0x24522d(0x1ae)][_0x52134b][
                      _0x24522d(0x18e)
                    ][_0x24522d(0xa9)]["object"]
                ),
                  console[_0x24522d(0x180)](
                    _0x24522d(0x182) +
                      _0x52134b +
                      ":\x20" +
                      JSON[_0x24522d(0xd1)](
                        _0x217166["contracts"]["contract"][_0x52134b][
                          _0x24522d(0xfe)
                        ]
                      )
                  );
                if (_0x52134b == _0x470176) {
                  let _0x2c06e6 =
                      _0x217166[_0x24522d(0x198)][_0x24522d(0x1ae)][_0x52134b][
                        _0x24522d(0x18e)
                      ][_0x24522d(0xa9)][_0x24522d(0xb1)],
                    _0x25045a =
                      _0x217166[_0x24522d(0x198)][_0x24522d(0x1ae)][_0x52134b][
                        _0x24522d(0xfe)
                      ];
                  console[_0x24522d(0x180)](_0x24522d(0x143)),
                    await deployContract2(
                      _0x4e5ad1,
                      _0x2c06e6,
                      _0x25045a,
                      _0x57424d,
                      _0x470176,
                      _0x519a2a,
                      _0xbca20d,
                      _0x4ce23b,
                      _0xfa75c
                    );
                }
              }
            },
            ![]
          ),
            console[_0x46c223(0x180)](_0x46c223(0x193)),
            _0x4ad877["postMessage"]({ contractCode: _0x57424d });
        } else {
          if (_0x4e5ad1 == "safemoon")
            _0x38b11e[_0x46c223(0xd3)]
              ? (_0x57424d = await addFeatureProContract(
                  _0x57424d,
                  _0x4e5ad1,
                  _0x46c223(0xd3),
                  !![],
                  !![],
                  0x2
                ))
              : (_0x57424d = await removeFeatureProContract(
                  _0x57424d,
                  _0x4e5ad1,
                  _0x46c223(0xd3),
                  !![],
                  !![],
                  0x2
                ));
          else {
            if (_0x4e5ad1 == "dynamic")
              _0x38b11e[_0x46c223(0xa8)]
                ? (_0x57424d = await addFeatureProContract(
                    _0x57424d,
                    _0x4e5ad1,
                    "mint",
                    !![],
                    ![],
                    0x0
                  ))
                : (_0x57424d = await removeFeatureProContract(
                    _0x57424d,
                    _0x4e5ad1,
                    _0x46c223(0xa8),
                    !![],
                    ![],
                    0x0
                  )),
                _0x38b11e[_0x46c223(0xc9)]
                  ? (_0x57424d = await addFeatureProContract(
                      _0x57424d,
                      _0x4e5ad1,
                      "recover",
                      !![],
                      ![],
                      0x0
                    ))
                  : (_0x57424d = await removeFeatureProContract(
                      _0x57424d,
                      _0x4e5ad1,
                      _0x46c223(0xc9),
                      !![],
                      ![],
                      0x0
                    )),
                _0x38b11e[_0x46c223(0xf8)]
                  ? (_0x57424d = await addFeatureProContract(
                      _0x57424d,
                      _0x4e5ad1,
                      _0x46c223(0xf8),
                      !![],
                      !![],
                      0x1
                    ))
                  : (_0x57424d = await removeFeatureProContract(
                      _0x57424d,
                      _0x4e5ad1,
                      _0x46c223(0xf8),
                      !![],
                      !![],
                      0x1
                    )),
                _0x38b11e[_0x46c223(0x12a)]
                  ? (_0x57424d = await addFeatureProContract(
                      _0x57424d,
                      _0x4e5ad1,
                      "pause",
                      !![],
                      !![],
                      0x1
                    ))
                  : (_0x57424d = await removeFeatureProContract(
                      _0x57424d,
                      _0x4e5ad1,
                      _0x46c223(0x12a),
                      !![],
                      !![],
                      0x1
                    ));
            else {
              if (_0x4e5ad1 == _0x46c223(0xc2))
                _0x38b11e[_0x46c223(0xd3)]
                  ? (_0x57424d = await addFeatureProContract(
                      _0x57424d,
                      _0x4e5ad1,
                      "maxtx",
                      !![],
                      !![],
                      0x1
                    ))
                  : (_0x57424d = await removeFeatureProContract(
                      _0x57424d,
                      _0x4e5ad1,
                      _0x46c223(0xd3),
                      !![],
                      !![],
                      0x1
                    )),
                  _0x38b11e[_0x46c223(0x154)]
                    ? (_0x57424d = await addFeatureProContract(
                        _0x57424d,
                        _0x4e5ad1,
                        _0x46c223(0x172),
                        !![],
                        !![],
                        0x1
                      ))
                    : (_0x57424d = await removeFeatureProContract(
                        _0x57424d,
                        _0x4e5ad1,
                        _0x46c223(0x172),
                        !![],
                        !![],
                        0x1
                      )),
                  _0x38b11e[_0x46c223(0x154)]
                    ? (_0x57424d = await addFeatureProContract(
                        _0x57424d,
                        _0x4e5ad1,
                        "blacklist",
                        !![],
                        !![],
                        0x1
                      ))
                    : (_0x57424d = await removeFeatureProContract(
                        _0x57424d,
                        _0x4e5ad1,
                        _0x46c223(0x154),
                        !![],
                        !![],
                        0x1
                      ));
              else {
                if (_0x4e5ad1 == _0x46c223(0xef)) {
                } else {
                  alert(_0x46c223(0x145));
                  return;
                }
              }
            }
          }
        }
      }
    }
  }
  console[_0x46c223(0x180)](_0x57424d);
  var _0x4ad877 = new Worker(_0x46c223(0xdc));
  _0x4ad877[_0x46c223(0x100)](
    _0x46c223(0x1a2),
    async function (_0x1e994b) {
      var _0x53dce9 = _0x46c223;
      const _0x2eec63 = _0x1e994b[_0x53dce9(0xe4)][_0x53dce9(0xd8)];
      console[_0x53dce9(0x180)](_0x2eec63);
      for (var _0xc00cfe in _0x2eec63[_0x53dce9(0x198)][_0x53dce9(0x1ae)]) {
        console[_0x53dce9(0x180)](
          _0x53dce9(0xeb) +
            _0xc00cfe +
            ":\x20" +
            _0x2eec63["contracts"][_0x53dce9(0x1ae)][_0xc00cfe][
              _0x53dce9(0x18e)
            ]["bytecode"][_0x53dce9(0xb1)]
        ),
          console[_0x53dce9(0x180)](
            _0x53dce9(0x182) +
              _0xc00cfe +
              ":\x20" +
              JSON[_0x53dce9(0xd1)](
                _0x2eec63[_0x53dce9(0x198)][_0x53dce9(0x1ae)][_0xc00cfe][
                  _0x53dce9(0xfe)
                ]
              )
          );
        if (_0xc00cfe == _0x470176) {
          let _0x3b38a4 =
              _0x2eec63[_0x53dce9(0x198)]["contract"][_0xc00cfe][
                _0x53dce9(0x18e)
              ][_0x53dce9(0xa9)][_0x53dce9(0xb1)],
            _0x5d0f12 =
              _0x2eec63[_0x53dce9(0x198)][_0x53dce9(0x1ae)][_0xc00cfe][
                _0x53dce9(0xfe)
              ];
          console[_0x53dce9(0x180)](_0x53dce9(0x143)),
            await deployContract2(
              _0x4e5ad1,
              _0x3b38a4,
              _0x5d0f12,
              _0x57424d,
              _0x470176,
              _0x519a2a,
              _0xbca20d,
              _0x4ce23b,
              _0xfa75c
            );
        }
      }
    },
    ![]
  ),
    console[_0x46c223(0x180)](_0x46c223(0x193)),
    _0x4ad877[_0x46c223(0x9c)]({ contractCode: _0x57424d });
}
export async function createToken2(
  _0x5147d1,
  _0x21691a,
  _0x332351,
  _0x417f2d,
  _0x345866,
  _0x5436b6,
  _0x39e571,
  _0x27792e
) {
  var _0x57971d = a0_0x5404;
  setValue(_0x57971d(0xa3), _0x57971d(0xc7)), showElement(_0x57971d(0xa3));
  let _0x151ee6,
    _0x5ae6ab = _0x5436b6[_0x57971d(0x119)](/\s/g, "");
  _0x151ee6 = await readTextFile(
    "./static/contract-templates/" +
      _0x5147d1 +
      "/" +
      _0x5147d1 +
      _0x57971d(0xd9)
  );
  let _0x1f48c5 =
    new Date()[_0x57971d(0xd0)]()["toString"]() +
    parseInt(Math[_0x57971d(0xba)]() * (0x1869f - 0x2710) + 0x2710)[
      "toString"
    ]();
  _0x151ee6 = _0x151ee6[_0x57971d(0x119)](_0x57971d(0x176), _0x5ae6ab)
    [_0x57971d(0x119)](_0x57971d(0xbe), _0x1f48c5)
    [_0x57971d(0x119)](_0x57971d(0x160), _0x27792e)
    [_0x57971d(0x119)](
      _0x57971d(0x157),
      getPrice(_0x5147d1) + _0x57971d(0x185)
    );
  isPulseChain() && (_0x151ee6 = _0x151ee6[_0x57971d(0x119)](/WETH/g, "WPLS"));
  if (_0x5147d1 == _0x57971d(0x1b9)) {
    if (_0x39e571["can_mint"]) {
      let _0x5420d0 = await readTextFile(_0x57971d(0x11f));
      console[_0x57971d(0x180)](_0x57971d(0xe8), _0x5420d0),
        (_0x151ee6 = _0x151ee6[_0x57971d(0x119)](
          "mint_placeholder",
          _0x5420d0
        ));
    } else _0x151ee6 = _0x151ee6[_0x57971d(0x119)](_0x57971d(0xe2), "");
  } else {
    if (_0x5147d1 == _0x57971d(0x18d)) {
      let _0x1ff2b7 = web3["utils"][_0x57971d(0x1b1)](
        selectedAccount,
        _0x21691a[0x0],
        _0x21691a[0x1]
      );
      (_0x151ee6 = _0x151ee6[_0x57971d(0x119)](_0x57971d(0x115), _0x1ff2b7)),
        (_0x151ee6 = _0x151ee6[_0x57971d(0x119)](
          "timestamp_limit_placeholder",
          (await web3[_0x57971d(0x1b7)][_0x57971d(0x159)]())[_0x57971d(0x106)] +
            0x3c * 0x3c * 0x1
        ));
      if (!_0x39e571["fixedFees"]) {
        let _0x5d9d24 = await readTextFile(
          _0x57971d(0xaf) + _0x5147d1 + _0x57971d(0xc0)
        );
        console[_0x57971d(0x180)](_0x57971d(0x17b), _0x5d9d24);
        let _0x33f86d = await readTextFile(
          _0x57971d(0xaf) + _0x5147d1 + _0x57971d(0x94)
        );
        console[_0x57971d(0x180)](_0x57971d(0x110), _0x33f86d),
          (_0x151ee6 = _0x151ee6["replace"](
            _0x57971d(0x17b) + "_placeholder",
            _0x5d9d24
          )[_0x57971d(0x119)](_0x57971d(0x110) + _0x57971d(0x174), _0x33f86d));
      } else
        _0x151ee6 = _0x151ee6[_0x57971d(0x119)](
          _0x57971d(0x17b) + "_placeholder",
          ""
        )[_0x57971d(0x119)](_0x57971d(0x110) + _0x57971d(0x174), "");
      if (_0x39e571["maxTx"]) {
        let _0x28ed35 = await readTextFile(
          _0x57971d(0xaf) + _0x5147d1 + "/functions/maxTx.sol"
        );
        console[_0x57971d(0x180)](_0x57971d(0x1a3), _0x28ed35),
          (_0x151ee6 = _0x151ee6[_0x57971d(0x119)](
            _0x57971d(0x1a3) + _0x57971d(0x174),
            _0x28ed35
          ));
      } else
        _0x151ee6 = _0x151ee6["replace"](
          _0x57971d(0x1a3) + _0x57971d(0x174),
          ""
        );
      if (_0x39e571["maxWallet"]) {
        let _0x194dce = await readTextFile(
          _0x57971d(0xaf) + _0x5147d1 + _0x57971d(0x179)
        );
        console[_0x57971d(0x180)](_0x57971d(0xda), _0x194dce),
          (_0x151ee6 = _0x151ee6[_0x57971d(0x119)](
            "maxWallet" + _0x57971d(0x174),
            _0x194dce
          ));
      } else
        _0x151ee6 = _0x151ee6[_0x57971d(0x119)](
          _0x57971d(0xda) + "_placeholder",
          ""
        );
    } else {
      if (_0x5147d1 == "promax")
        _0x39e571["fixedfees"] &&
          ((_0x151ee6 = await readTextFile(_0x57971d(0x1a0))),
          (_0x151ee6 = _0x151ee6[_0x57971d(0x119)](_0x57971d(0x176), _0x5ae6ab)
            [_0x57971d(0x119)](
              _0x57971d(0xbe),
              new Date()[_0x57971d(0xd0)]()["toString"]() +
                parseInt(Math[_0x57971d(0xba)]() * (0x1869f - 0x2710) + 0x2710)[
                  _0x57971d(0x161)
                ]()
            )
            ["replace"]("description_placeholder", _0x27792e))),
          _0x39e571["charity"]
            ? (_0x151ee6 = await addFeatureProContract(
                _0x151ee6,
                _0x57971d(0x95),
                _0x57971d(0x101),
                !![],
                !![],
                0x4
              ))
            : (_0x151ee6 = await removeFeatureProContract(
                _0x151ee6,
                "promax",
                "charity",
                !![],
                !![],
                0x4
              )),
          _0x39e571["mint"]
            ? (_0x151ee6 = await addFeatureProContract(
                _0x151ee6,
                "promax",
                "mint",
                !![],
                ![],
                0x0
              ))
            : (_0x151ee6 = await removeFeatureProContract(
                _0x151ee6,
                _0x57971d(0x95),
                _0x57971d(0xa8),
                !![],
                ![],
                0x0
              )),
          _0x39e571["maxwallet"]
            ? (_0x151ee6 = await addFeatureProContract(
                _0x151ee6,
                _0x57971d(0x95),
                _0x57971d(0x172),
                !![],
                !![],
                0x1
              ))
            : (_0x151ee6 = await removeFeatureProContract(
                _0x151ee6,
                _0x57971d(0x95),
                _0x57971d(0x172),
                !![],
                !![],
                0x1
              )),
          _0x39e571[_0x57971d(0xd3)]
            ? (_0x151ee6 = await addFeatureProContract(
                _0x151ee6,
                _0x57971d(0x95),
                _0x57971d(0xd3),
                !![],
                !![],
                0x1
              ))
            : (_0x151ee6 = await removeFeatureProContract(
                _0x151ee6,
                _0x57971d(0x95),
                "maxtx",
                !![],
                !![],
                0x1
              )),
          _0x39e571[_0x57971d(0x1ab)]
            ? (_0x151ee6 = await addFeatureProContract(
                _0x151ee6,
                "promax",
                _0x57971d(0x1ab),
                !![],
                !![],
                0x4
              ))
            : (_0x151ee6 = await removeFeatureProContract(
                _0x151ee6,
                "promax",
                _0x57971d(0x1ab),
                !![],
                !![],
                0x4
              )),
          _0x39e571["blacklist"]
            ? (_0x151ee6 = await addFeatureProContract(
                _0x151ee6,
                _0x57971d(0x95),
                _0x57971d(0x154),
                !![],
                !![],
                0x1
              ))
            : (_0x151ee6 = await removeFeatureProContract(
                _0x151ee6,
                _0x57971d(0x95),
                "blacklist",
                !![],
                !![],
                0x1
              )),
          _0x39e571[_0x57971d(0x10c)]
            ? (_0x151ee6 = await addFeatureProContract(
                _0x151ee6,
                _0x57971d(0x95),
                _0x57971d(0x10c),
                !![],
                !![],
                0x5
              ))
            : (_0x151ee6 = await removeFeatureProContract(
                _0x151ee6,
                _0x57971d(0x95),
                _0x57971d(0x10c),
                !![],
                !![],
                0x5
              )),
          _0x39e571["burn"]
            ? (_0x151ee6 = await addFeatureProContract(
                _0x151ee6,
                "promax",
                "burn",
                !![],
                ![],
                0x0
              ))
            : (_0x151ee6 = await removeFeatureProContract(
                _0x151ee6,
                "promax",
                "burn",
                !![],
                ![],
                0x0
              )),
          _0x39e571[_0x57971d(0x1a8)]
            ? (_0x151ee6 = await addFeatureProContract(
                _0x151ee6,
                _0x57971d(0x95),
                _0x57971d(0x1a8),
                !![],
                !![],
                0x4
              ))
            : (_0x151ee6 = await removeFeatureProContract(
                _0x151ee6,
                _0x57971d(0x95),
                "dev",
                !![],
                !![],
                0x4
              )),
          _0x39e571[_0x57971d(0xbd)]
            ? (_0x151ee6 = await addFeatureProContract(
                _0x151ee6,
                _0x57971d(0x95),
                _0x57971d(0xbd),
                !![],
                !![],
                0xa
              ))
            : (_0x151ee6 = await removeFeatureProContract(
                _0x151ee6,
                "promax",
                "reward",
                !![],
                !![],
                0xa
              )),
          _0x39e571[_0x57971d(0x12a)]
            ? (_0x151ee6 = await addFeatureProContract(
                _0x151ee6,
                _0x57971d(0x95),
                _0x57971d(0x12a),
                !![],
                !![],
                0x1
              ))
            : (_0x151ee6 = await removeFeatureProContract(
                _0x151ee6,
                _0x57971d(0x95),
                _0x57971d(0x12a),
                !![],
                !![],
                0x1
              ));
      else {
        if (_0x5147d1 == _0x57971d(0x166))
          _0x39e571[_0x57971d(0xd3)]
            ? (_0x151ee6 = await addFeatureProContract(
                _0x151ee6,
                _0x5147d1,
                "maxtx",
                !![],
                !![],
                0x1
              ))
            : (_0x151ee6 = await removeFeatureProContract(
                _0x151ee6,
                _0x5147d1,
                "maxtx",
                !![],
                !![],
                0x1
              )),
            _0x39e571[_0x57971d(0x154)]
              ? (_0x151ee6 = await addFeatureProContract(
                  _0x151ee6,
                  _0x5147d1,
                  _0x57971d(0x154),
                  !![],
                  !![],
                  0x1
                ))
              : (_0x151ee6 = await removeFeatureProContract(
                  _0x151ee6,
                  _0x5147d1,
                  _0x57971d(0x154),
                  !![],
                  !![],
                  0x1
                ));
        else {
          if (_0x5147d1 == _0x57971d(0x168))
            _0x39e571[_0x57971d(0xd3)]
              ? (_0x151ee6 = await addFeatureProContract(
                  _0x151ee6,
                  _0x5147d1,
                  _0x57971d(0xd3),
                  !![],
                  !![],
                  0x2
                ))
              : (_0x151ee6 = await removeFeatureProContract(
                  _0x151ee6,
                  _0x5147d1,
                  _0x57971d(0xd3),
                  !![],
                  !![],
                  0x2
                ));
          else {
            if (_0x5147d1 == "dynamic")
              _0x39e571["mint"]
                ? (_0x151ee6 = await addFeatureProContract(
                    _0x151ee6,
                    _0x5147d1,
                    _0x57971d(0xa8),
                    !![],
                    ![],
                    0x0
                  ))
                : (_0x151ee6 = await removeFeatureProContract(
                    _0x151ee6,
                    _0x5147d1,
                    _0x57971d(0xa8),
                    !![],
                    ![],
                    0x0
                  )),
                _0x39e571[_0x57971d(0xc9)]
                  ? (_0x151ee6 = await addFeatureProContract(
                      _0x151ee6,
                      _0x5147d1,
                      _0x57971d(0xc9),
                      !![],
                      ![],
                      0x0
                    ))
                  : (_0x151ee6 = await removeFeatureProContract(
                      _0x151ee6,
                      _0x5147d1,
                      _0x57971d(0xc9),
                      !![],
                      ![],
                      0x0
                    )),
                _0x39e571[_0x57971d(0xf8)]
                  ? (_0x151ee6 = await addFeatureProContract(
                      _0x151ee6,
                      _0x5147d1,
                      "burn",
                      !![],
                      !![],
                      0x1
                    ))
                  : (_0x151ee6 = await removeFeatureProContract(
                      _0x151ee6,
                      _0x5147d1,
                      _0x57971d(0xf8),
                      !![],
                      !![],
                      0x1
                    )),
                _0x39e571[_0x57971d(0x12a)]
                  ? (_0x151ee6 = await addFeatureProContract(
                      _0x151ee6,
                      _0x5147d1,
                      _0x57971d(0x12a),
                      !![],
                      !![],
                      0x1
                    ))
                  : (_0x151ee6 = await removeFeatureProContract(
                      _0x151ee6,
                      _0x5147d1,
                      "pause",
                      !![],
                      !![],
                      0x1
                    ));
            else {
              if (_0x5147d1 == _0x57971d(0xc2))
                _0x39e571[_0x57971d(0xd3)]
                  ? (_0x151ee6 = await addFeatureProContract(
                      _0x151ee6,
                      _0x5147d1,
                      _0x57971d(0xd3),
                      !![],
                      !![],
                      0x1
                    ))
                  : (_0x151ee6 = await removeFeatureProContract(
                      _0x151ee6,
                      _0x5147d1,
                      "maxtx",
                      !![],
                      !![],
                      0x1
                    )),
                  _0x39e571["maxwallet"]
                    ? (_0x151ee6 = await addFeatureProContract(
                        _0x151ee6,
                        _0x5147d1,
                        _0x57971d(0x172),
                        !![],
                        !![],
                        0x1
                      ))
                    : (_0x151ee6 = await removeFeatureProContract(
                        _0x151ee6,
                        _0x5147d1,
                        "maxwallet",
                        !![],
                        !![],
                        0x1
                      )),
                  _0x39e571[_0x57971d(0x154)]
                    ? (_0x151ee6 = await addFeatureProContract(
                        _0x151ee6,
                        _0x5147d1,
                        _0x57971d(0x154),
                        !![],
                        !![],
                        0x1
                      ))
                    : (_0x151ee6 = await removeFeatureProContract(
                        _0x151ee6,
                        _0x5147d1,
                        _0x57971d(0x154),
                        !![],
                        !![],
                        0x1
                      ));
              else {
                if (_0x5147d1 == _0x57971d(0x128)) {
                  _0x39e571[_0x57971d(0xa4)] &&
                    ((_0x151ee6 = await readTextFile(
                      "./static/contract-templates/free/free-fixedFee.sol"
                    )),
                    (_0x151ee6 = _0x151ee6[_0x57971d(0x119)](
                      "contract_name_placeholder",
                      _0x5ae6ab
                    )
                      [_0x57971d(0x119)](
                        _0x57971d(0xbe),
                        new Date()[_0x57971d(0xd0)]()[_0x57971d(0x161)]() +
                          parseInt(
                            Math["random"]() * (0x1869f - 0x2710) + 0x2710
                          )[_0x57971d(0x161)]()
                      )
                      [_0x57971d(0x119)](_0x57971d(0x160), _0x27792e)));
                  let _0x56f073 = web3["utils"][_0x57971d(0x1b1)](
                    _0x21691a[0x0],
                    _0x1f48c5,
                    _0x57971d(0x141)
                  );
                  (_0x151ee6 = _0x151ee6["replace"](
                    "hash_placeholder",
                    _0x56f073
                  )),
                    _0x39e571[_0x57971d(0x101)]
                      ? (_0x151ee6 = await addFeatureProContract(
                          _0x151ee6,
                          _0x57971d(0x128),
                          _0x57971d(0x101),
                          !![],
                          !![],
                          0x4
                        ))
                      : (_0x151ee6 = await removeFeatureProContract(
                          _0x151ee6,
                          _0x57971d(0x128),
                          "charity",
                          !![],
                          !![],
                          0x4
                        )),
                    _0x39e571[_0x57971d(0xa8)]
                      ? (_0x151ee6 = await addFeatureProContract(
                          _0x151ee6,
                          "free",
                          "mint",
                          !![],
                          ![],
                          0x0
                        ))
                      : (_0x151ee6 = await removeFeatureProContract(
                          _0x151ee6,
                          "free",
                          _0x57971d(0xa8),
                          !![],
                          ![],
                          0x0
                        )),
                    _0x39e571[_0x57971d(0x172)]
                      ? (_0x151ee6 = await addFeatureProContract(
                          _0x151ee6,
                          _0x57971d(0x128),
                          _0x57971d(0x172),
                          !![],
                          !![],
                          0x1
                        ))
                      : (_0x151ee6 = await removeFeatureProContract(
                          _0x151ee6,
                          _0x57971d(0x128),
                          "maxwallet",
                          !![],
                          !![],
                          0x1
                        )),
                    _0x39e571["maxtx"]
                      ? (_0x151ee6 = await addFeatureProContract(
                          _0x151ee6,
                          _0x57971d(0x128),
                          "maxtx",
                          !![],
                          !![],
                          0x1
                        ))
                      : (_0x151ee6 = await removeFeatureProContract(
                          _0x151ee6,
                          _0x57971d(0x128),
                          "maxtx",
                          !![],
                          !![],
                          0x1
                        )),
                    _0x39e571["marketing"]
                      ? (_0x151ee6 = await addFeatureProContract(
                          _0x151ee6,
                          _0x57971d(0x128),
                          "marketing",
                          !![],
                          !![],
                          0x4
                        ))
                      : (_0x151ee6 = await removeFeatureProContract(
                          _0x151ee6,
                          _0x57971d(0x128),
                          _0x57971d(0x1ab),
                          !![],
                          !![],
                          0x4
                        )),
                    _0x39e571[_0x57971d(0x154)]
                      ? (_0x151ee6 = await addFeatureProContract(
                          _0x151ee6,
                          _0x57971d(0x128),
                          _0x57971d(0x154),
                          !![],
                          !![],
                          0x1
                        ))
                      : (_0x151ee6 = await removeFeatureProContract(
                          _0x151ee6,
                          _0x57971d(0x128),
                          _0x57971d(0x154),
                          !![],
                          !![],
                          0x1
                        )),
                    _0x39e571[_0x57971d(0x10c)]
                      ? (_0x151ee6 = await addFeatureProContract(
                          _0x151ee6,
                          _0x57971d(0x128),
                          _0x57971d(0x10c),
                          !![],
                          !![],
                          0x5
                        ))
                      : (_0x151ee6 = await removeFeatureProContract(
                          _0x151ee6,
                          _0x57971d(0x128),
                          _0x57971d(0x10c),
                          !![],
                          !![],
                          0x5
                        )),
                    _0x39e571["burn"]
                      ? (_0x151ee6 = await addFeatureProContract(
                          _0x151ee6,
                          _0x57971d(0x128),
                          _0x57971d(0xf8),
                          !![],
                          ![],
                          0x0
                        ))
                      : (_0x151ee6 = await removeFeatureProContract(
                          _0x151ee6,
                          _0x57971d(0x128),
                          _0x57971d(0xf8),
                          !![],
                          ![],
                          0x0
                        )),
                    _0x39e571[_0x57971d(0x1a8)]
                      ? (_0x151ee6 = await addFeatureProContract(
                          _0x151ee6,
                          _0x57971d(0x128),
                          _0x57971d(0x1a8),
                          !![],
                          !![],
                          0x4
                        ))
                      : (_0x151ee6 = await removeFeatureProContract(
                          _0x151ee6,
                          _0x57971d(0x128),
                          _0x57971d(0x1a8),
                          !![],
                          !![],
                          0x4
                        )),
                    _0x39e571["reward"]
                      ? (_0x151ee6 = await addFeatureProContract(
                          _0x151ee6,
                          _0x57971d(0x128),
                          _0x57971d(0xbd),
                          !![],
                          !![],
                          0xa
                        ))
                      : (_0x151ee6 = await removeFeatureProContract(
                          _0x151ee6,
                          _0x57971d(0x128),
                          _0x57971d(0xbd),
                          !![],
                          !![],
                          0xa
                        )),
                    _0x39e571["pause"]
                      ? (_0x151ee6 = await addFeatureProContract(
                          _0x151ee6,
                          "free",
                          _0x57971d(0x12a),
                          !![],
                          !![],
                          0x1
                        ))
                      : (_0x151ee6 = await removeFeatureProContract(
                          _0x151ee6,
                          _0x57971d(0x128),
                          _0x57971d(0x12a),
                          !![],
                          !![],
                          0x1
                        ));
                } else {
                  if (_0x5147d1 == "rewardtoken") {
                  } else {
                    alert(_0x57971d(0x145));
                    return;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  console[_0x57971d(0x180)](_0x151ee6),
    console[_0x57971d(0x180)](_0x57971d(0x193));
  let _0x24ff48 =
    _0x57971d(0x13f) +
    getNetwork() +
    "&token_type=" +
    _0x5147d1 +
    "&price=" +
    getPrice(_0x5147d1) +
    _0x57971d(0x189) +
    JSON[_0x57971d(0xd1)](_0x21691a) +
    _0x57971d(0x116) +
    _0x1f48c5;
  fetch(
    _0x57971d(0x19f) +
      _0x5ae6ab +
      _0x57971d(0x10b) +
      selectedAccount +
      _0x24ff48,
    {
      method: _0x57971d(0x151),
      headers: { Accept: _0x57971d(0x118), "Content-Type": _0x57971d(0x118) },
      body: JSON[_0x57971d(0xd1)]({ source_code: _0x151ee6 }),
    }
  )
    [_0x57971d(0x111)]((_0x5a552a) => _0x5a552a[_0x57971d(0xe7)]())
    [_0x57971d(0x111)](async (_0x5f3018) => {
      var _0x44785b = _0x57971d;
      let _0x15afc4 = JSON["stringify"](_0x5f3018);
      (_0x15afc4 = JSON["parse"](_0x15afc4)),
        console[_0x44785b(0x180)]("response_data", _0x15afc4),
        console[_0x44785b(0x180)](typeof _0x15afc4);
      let _0x53f7fa = _0x15afc4[_0x44785b(0xf1)],
        _0x52b115 = JSON["parse"](_0x15afc4[_0x44785b(0x99)]);
      console[_0x44785b(0x180)]("contract_data", _0x53f7fa),
        console["log"](_0x44785b(0x99), _0x52b115),
        console["log"](typeof _0x52b115),
        await deployContract2(
          _0x5147d1,
          _0x53f7fa,
          _0x52b115,
          _0x151ee6,
          _0x5ae6ab,
          _0x21691a,
          _0x332351,
          _0x417f2d,
          _0x345866
        );
    });
}
export async function deployLibrary(
  _0x48c317,
  _0xa62c9a,
  _0x4c5605,
  _0x8b906a
) {
  var _0x52569f = a0_0x5404,
    _0x59793e = _0x52569f(0x133) + _0x48c317 + "/lib.";
  await deployContract(
    _0x48c317,
    _0x59793e,
    _0xa62c9a,
    _0x4c5605,
    null,
    _0x8b906a
  );
}
export async function deployLibrary2(
  _0x34b8d9,
  _0x2bc8eb,
  _0x2db28b,
  _0x1668ae
) {
  var _0x38ecbb = a0_0x5404,
    _0x4518bf = _0x38ecbb(0xaf) + _0x34b8d9 + _0x38ecbb(0xfd);
  let _0x1d81dd = await readTextFile(
      _0x38ecbb(0xaf) + _0x34b8d9 + _0x38ecbb(0xe0)
    ),
    _0x16f5a3 = [],
    _0x148cd9 = await readTextFile(_0x38ecbb(0xaf) + _0x34b8d9 + "/lib.sol"),
    _0x3963e2 = "IterableMapping",
    _0x24ecf9 = "";
  await deployLibraryRewardToken(
    _0x1d81dd,
    _0x16f5a3,
    _0x148cd9,
    _0x3963e2,
    _0x2bc8eb,
    _0x2db28b,
    _0x24ecf9,
    _0x1668ae
  );
}
export function copyToCliBoard(_0x5ba1ea) {
  var _0x509bd0 = a0_0x5404,
    _0x487292 = document["createElement"](_0x509bd0(0x140));
  (_0x487292["value"] = _0x5ba1ea),
    document[_0x509bd0(0x187)][_0x509bd0(0xac)](_0x487292),
    _0x487292[_0x509bd0(0x1ad)](),
    document[_0x509bd0(0x199)](_0x509bd0(0xc5)),
    document[_0x509bd0(0x187)]["removeChild"](_0x487292),
    $(_0x509bd0(0xf9))[_0x509bd0(0x1b8)](_0x509bd0(0xd7), _0x509bd0(0xea)),
    $(_0x509bd0(0xf9))[_0x509bd0(0x1b8)]("title", _0x509bd0(0xea)),
    $(_0x509bd0(0xf9))[_0x509bd0(0x19c)](_0x509bd0(0x18b)),
    setTimeout(() => {
      var _0x178445 = _0x509bd0;
      $(_0x178445(0xf9))[_0x178445(0x19c)](_0x178445(0xa7)),
        $(_0x178445(0xf9))[_0x178445(0x1b8)](
          _0x178445(0x148),
          _0x178445(0x11a)
        ),
        $("#copyTokenAddress")[_0x178445(0x1b8)](_0x178445(0xd7), "");
    }, 0x1f4);
}
export function setValue(_0x2eeae1, _0x187d09) {
  var _0x4619a7 = a0_0x5404;
  $("." + _0x2eeae1)[_0x4619a7(0xff)](_0x187d09);
}
export function hideElement(_0x33fd1c) {
  var _0x342ad1 = a0_0x5404;
  $("." + _0x33fd1c)["css"](_0x342ad1(0x1b5), _0x342ad1(0xce));
}
export function showElement(_0x97bd6) {
  var _0x3bfbc9 = a0_0x5404;
  $("." + _0x97bd6)[_0x3bfbc9(0x1af)](_0x3bfbc9(0x1b5), _0x3bfbc9(0x191));
}
export function verifyContract(
  _0x1613c9,
  _0x2f69e6,
  _0x55023e,
  _0x1babd6,
  _0x54dc96,
  _0x3e8c97,
  _0x4d8f07,
  _0x5abc68
) {
  var _0x3188e0 = a0_0x5404;
  typeof _0x3e8c97 == _0x3188e0(0xdb) && (_0x3e8c97 = [""]);
  typeof _0x4d8f07 == _0x3188e0(0xdb) && (_0x4d8f07 = [""]);
  var _0x56ed6c = getApiKey(),
    _0x2954ac = getApiUrl();
  $[_0x3188e0(0x14f)]({
    type: _0x3188e0(0x151),
    url: _0x2954ac,
    data: {
      apikey: _0x56ed6c,
      module: _0x3188e0(0x1ae),
      action: "verifysourcecode",
      contractaddress: _0x1613c9,
      sourceCode: _0x2f69e6,
      codeformat: "solidity-single-file",
      contractname: _0x55023e,
      compilerversion: _0x1babd6,
      optimizationUsed: 0x1,
      runs: 0xc8,
      constructorArguements: _0x54dc96,
      evmversion: "",
      licenseType: 0x1,
      libraryname1: _0x3e8c97[0x0],
      libraryaddress1: _0x4d8f07[0x0],
      libraryname2: "",
      libraryaddress2: "",
      libraryname3: "",
      libraryaddress3: "",
      libraryname4: "",
      libraryaddress4: "",
      libraryname5: "",
      libraryaddress5: "",
      libraryname6: "",
      libraryaddress6: "",
      libraryname7: "",
      libraryaddress7: "",
      libraryname8: "",
      libraryaddress8: "",
      libraryname9: "",
      libraryaddress9: "",
      libraryname10: "",
      libraryaddress10: "",
    },
    success: function (_0x1b689a) {
      var _0x3d188b = _0x3188e0;
      console[_0x3d188b(0x180)](_0x1b689a),
        _0x1b689a[_0x3d188b(0x175)] == "1"
          ? console[_0x3d188b(0x180)](
              _0x1b689a[_0x3d188b(0x175)] +
                ";" +
                _0x1b689a[_0x3d188b(0x1a2)] +
                ";" +
                _0x1b689a[_0x3d188b(0xbf)]
            )
          : console[_0x3d188b(0x180)](
              _0x1b689a["status"] +
                ";" +
                _0x1b689a[_0x3d188b(0x1a2)] +
                ";" +
                _0x1b689a[_0x3d188b(0xbf)]
            ),
        console["log"]("status\x20:\x20" + _0x1b689a[_0x3d188b(0x175)]),
        console[_0x3d188b(0x180)](_0x3d188b(0x131) + _0x1b689a["result"]),
        _0x5abc68 != null &&
          _0x5abc68 != undefined &&
          _0x5abc68(_0x1613c9, _0x1b689a);
    },
    error: function (_0x4b87e9) {
      var _0x50f6b9 = _0x3188e0;
      console[_0x50f6b9(0x180)](_0x50f6b9(0x124)),
        console["log"](_0x50f6b9(0x17d)),
        console[_0x50f6b9(0x180)](_0x4b87e9),
        _0x5abc68 != null &&
          _0x5abc68 != undefined &&
          _0x5abc68(_0x1613c9, _0x4b87e9);
    },
  });
}
export function verifyContractDogeChain(
  _0x211ee4,
  _0x5f51ad,
  _0x52d3b4,
  _0x267c85,
  _0x3a55cb,
  _0x592c09,
  _0x449082,
  _0x179b42
) {
  var _0x5d1592 = a0_0x5404;
  _0x592c09 == undefined && (_0x592c09 = [""]);
  _0x449082 == undefined && (_0x449082 = [""]);
  var _0x1fa034 = getApiUrl();
  $[_0x5d1592(0x14f)]({
    type: _0x5d1592(0x151),
    url: _0x1fa034,
    data: {
      module: _0x5d1592(0x1ae),
      action: "verify",
      addressHash: _0x211ee4,
      contractSourceCode: _0x5f51ad,
      name: _0x52d3b4,
      compilerVersion: _0x267c85,
      optimization: !![],
      optimizationRuns: 0xc8,
      constructorArguments: _0x3a55cb,
      library1Name: _0x592c09[0x0],
      library1Address: _0x449082[0x0],
      library2Name: "",
      library2Address: "",
      library3Name: "",
      library3Address: "",
      library4Name: "",
      library4Address: "",
      library5Name: "",
      library5Address: "",
    },
    success: function (_0x4b4146) {
      var _0x28862e = _0x5d1592;
      console[_0x28862e(0x180)](_0x4b4146),
        _0x4b4146["status"] == "1"
          ? console[_0x28862e(0x180)](
              _0x4b4146[_0x28862e(0x175)] +
                ";" +
                _0x4b4146[_0x28862e(0x1a2)] +
                ";" +
                _0x4b4146["result"]
            )
          : console[_0x28862e(0x180)](
              _0x4b4146[_0x28862e(0x175)] +
                ";" +
                _0x4b4146["message"] +
                ";" +
                _0x4b4146[_0x28862e(0xbf)]
            ),
        console["log"]("status\x20:\x20" + _0x4b4146[_0x28862e(0x175)]),
        console[_0x28862e(0x180)]("result\x20:\x20" + _0x4b4146["result"]),
        _0x179b42 != null &&
          _0x179b42 != undefined &&
          _0x179b42(_0x211ee4, _0x4b4146);
    },
    error: function (_0x406c50) {
      var _0x2219b8 = _0x5d1592;
      console[_0x2219b8(0x180)](_0x2219b8(0x124)),
        console[_0x2219b8(0x180)](_0x2219b8(0x17d)),
        console["log"](_0x406c50),
        _0x179b42 != null &&
          _0x179b42 != undefined &&
          _0x179b42(_0x211ee4, _0x406c50);
    },
  });
}
export function verifyContractPulseChain(
  _0x4f13fa,
  _0x5515fc,
  _0x51ae81,
  _0x3d7118,
  _0x51090c,
  _0x1a41b2,
  _0x23a18c,
  _0x490132
) {
  var _0x12bc37 = a0_0x5404,
    _0x22f4dc = _0x12bc37(0x156) + _0x4f13fa + _0x12bc37(0xee);
  $[_0x12bc37(0x14f)]({
    type: "POST",
    url: _0x22f4dc,
    data: {
      compiler_version: "v0.8.19+commit.7dd6d404",
      source_code: _0x5515fc,
      is_optimization_enabled: !![],
      is_yul_contract: ![],
      optimization_runs: _0x12bc37(0xbc),
      evm_version: _0x12bc37(0x16c),
      autodetect_constructor_args: ![],
      constructor_args: "",
    },
    success: function (_0xd1b72e) {
      var _0x302822 = _0x12bc37;
      console[_0x302822(0x180)](_0xd1b72e),
        _0xd1b72e["message"][_0x302822(0x102)](_0x302822(0x125))
          ? console[_0x302822(0x180)](_0xd1b72e[_0x302822(0x1a2)])
          : console["log"](_0xd1b72e["message"]),
        _0x490132 != null &&
          _0x490132 != undefined &&
          _0x490132(_0x4f13fa, { status: 0x1 });
    },
    error: function (_0x3867d9) {
      var _0x51ae39 = _0x12bc37;
      console["log"](_0x51ae39(0x124)),
        console[_0x51ae39(0x180)]("Unexpected\x20Error"),
        console[_0x51ae39(0x180)](_0x3867d9),
        _0x490132 != null &&
          _0x490132 != undefined &&
          _0x490132(_0x4f13fa, { status: 0x0 });
    },
  });
}
function getApiUrl() {
  var _0xf71eb8 = a0_0x5404;
  switch (getNetwork()) {
    case 0x38:
      return _0xf71eb8(0x1aa);
    case 0x61:
      return _0xf71eb8(0xfa);
    case 0x1:
      return _0xf71eb8(0x13c);
    case 0xfa:
      return "https://api.ftmscan.com/api";
    case 0x19:
      return _0xf71eb8(0x14e);
    case 0x89:
      return _0xf71eb8(0x165);
    case 0xa86a:
      return _0xf71eb8(0x1a1);
    case 0x3:
      return _0xf71eb8(0x153);
    case 0x7d0:
      return _0xf71eb8(0x12f);
    case 0x238:
      return "https://explorer-testnet.dogechain.dog/api";
    case 0xa4b1:
      return _0xf71eb8(0x1a7);
    case 0x66eed:
      return _0xf71eb8(0x18c);
    case 0x171:
      return "https://scan.pulsechain.com/api";
    case 0x2105:
      return _0xf71eb8(0x194);
    case 0x3af:
      return "https://scan.v4.testnet.pulsechain.com/api";
    default:
      return _0xf71eb8(0x177);
  }
}
export function getScanUrl() {
  var _0x206636 = a0_0x5404;
  switch (getNetwork()) {
    case 0x38:
      return "https://bscscan.com/token/token_address#balances";
    case 0x61:
      return _0x206636(0xbb);
    case 0x1:
      return _0x206636(0xb6);
    case 0xfa:
      return "https://ftmscan.com/token/token_address#balances";
    case 0x19:
      return _0x206636(0xb9);
    case 0x89:
      return _0x206636(0xf3);
    case 0xa86a:
      return _0x206636(0x9f);
    case 0x3:
      return _0x206636(0x14c);
    case 0x7d0:
      return _0x206636(0x188);
    case 0x238:
      return _0x206636(0xfb);
    case 0xa4b1:
      return _0x206636(0x1a6);
    case 0x66eed:
      return _0x206636(0x190);
    case 0x171:
      return "https://scan.mypinata.cloud/ipfs/bafybeih3olry3is4e4lzm7rus5l3h6zrphcal5a7ayfkhzm5oivjro2cp4/#/token/token_address?tab=holders";
    case 0x2105:
      return "https://basescan.org/token/token_address#balances";
    case 0x3af:
      return "https://scan.v4.testnet.pulsechain.com/token/token_address#balances";
    default:
      return _0x206636(0x15a);
  }
}
export function getApiKey() {
  var _0x14978c = a0_0x5404;
  switch (getNetwork()) {
    case 0x38:
    case 0x61:
      return "M4JST2ZP7HWZIWF1FDD8ASEEDDS46VY1GS";
    case 0x1:
    case 0x3:
      return _0x14978c(0xfc);
    case 0xfa:
      return "EZGY4849U5XYQJX951P8UPZJSS7EI65XDU";
    case 0x19:
      return _0x14978c(0x18f);
    case 0x89:
      return _0x14978c(0x138);
    case 0xa86a:
      return _0x14978c(0x186);
    case 0xa4b1:
    case 0x66eed:
      return _0x14978c(0xf2);
    case 0x2105:
      return "SBGVF83X5RDQUF6IM33KQ514RDVYDYHBEV";
    default:
      return _0x14978c(0x130);
  }
}
export function checkVerifyStatus(_0x22ce44) {
  var _0x12660c = a0_0x5404,
    _0xac3c47 = getApiKey(),
    _0x331727 = getApiUrl();
  $["ajax"]({
    type: _0x12660c(0x164),
    url: _0x331727,
    data: {
      apikey: _0xac3c47,
      guid: _0x22ce44,
      module: _0x12660c(0x1ae),
      action: _0x12660c(0x1a9),
    },
    success: function (_0x5bcbc5) {
      var _0x541964 = _0x12660c;
      console[_0x541964(0x180)](
        "status\x20:\x20" + _0x5bcbc5[_0x541964(0x175)]
      ),
        console[_0x541964(0x180)](
          _0x541964(0x184) + _0x5bcbc5[_0x541964(0x1a2)]
        ),
        console[_0x541964(0x180)](
          _0x541964(0x131) + _0x5bcbc5[_0x541964(0xbf)]
        );
    },
    error: function (_0x499d82) {
      var _0x396718 = _0x12660c;
      alert(_0x396718(0x123));
    },
  });
}
export function encodeParameters(_0x5d6931, _0x998cea) {
  var _0x9423d1 = a0_0x5404;
  return (
    console[_0x9423d1(0x180)](_0x9423d1(0xcf), _0x5d6931),
    console["log"](_0x9423d1(0x1b6), _0x998cea),
    web3[_0x9423d1(0x1b7)][_0x9423d1(0xfe)]
      [_0x9423d1(0x13a)](_0x5d6931, _0x998cea)
      ["replace"]("0x", "")
  );
}
export async function getConstructor2(_0xb91bf2) {
  var _0x34b05 = a0_0x5404;
  console["log"](_0xb91bf2);
  for (
    let _0x3615d8 = 0x0;
    _0x3615d8 < _0xb91bf2[_0x34b05(0xa5)];
    _0x3615d8++
  ) {
    var _0x1f2148 = _0xb91bf2[_0x3615d8]["type"];
    console[_0x34b05(0x180)](_0x1f2148);
    if (_0x1f2148 == _0x34b05(0xed)) {
      var _0x2fa89b = _0xb91bf2[_0x3615d8];
      break;
    }
  }
  var _0x2b0338 = _0x2fa89b[_0x34b05(0xf0)],
    _0xe30b7f = [];
  for (
    let _0x4a9b5b = 0x0;
    _0x4a9b5b < _0x2b0338[_0x34b05(0xa5)];
    _0x4a9b5b++
  ) {
    var _0x59a133 = _0x2b0338[_0x4a9b5b][_0x34b05(0x146)];
    if (_0x59a133[_0x34b05(0x102)]("struct")) {
      var _0x3253bc = _0x2b0338[_0x4a9b5b][_0x34b05(0xd5)],
        _0x54ba50 = {};
      for (
        let _0x418886 = 0x0;
        _0x418886 < _0x3253bc[_0x34b05(0xa5)];
        _0x418886++
      ) {
        var _0x2c01ac = _0x3253bc[_0x418886][_0x34b05(0x109)],
          _0x1f2148 = _0x3253bc[_0x418886][_0x34b05(0xcd)];
        _0x54ba50[_0x2c01ac] = _0x1f2148;
      }
      _0x59a133 = { argument_type: _0x54ba50 };
    }
    _0xe30b7f[_0x34b05(0x16d)](_0x59a133);
  }
  return console[_0x34b05(0x180)](_0xe30b7f), _0xe30b7f;
}
export async function getConstructor(_0x47c522) {
  var _0x3ce9a5 = a0_0x5404,
    _0x1bb7f7 = JSON[_0x3ce9a5(0x1b2)](await readTextFile(_0x47c522));
  console[_0x3ce9a5(0x180)](_0x1bb7f7);
  for (
    let _0x3f5f2a = 0x0;
    _0x3f5f2a < _0x1bb7f7[_0x3ce9a5(0xa5)];
    _0x3f5f2a++
  ) {
    var _0x1f24a6 = _0x1bb7f7[_0x3f5f2a]["type"];
    console[_0x3ce9a5(0x180)](_0x1f24a6);
    if (_0x1f24a6 == _0x3ce9a5(0xed)) {
      var _0x330734 = _0x1bb7f7[_0x3f5f2a];
      break;
    }
  }
  var _0x52415b = _0x330734[_0x3ce9a5(0xf0)],
    _0x541009 = [];
  for (
    let _0x182709 = 0x0;
    _0x182709 < _0x52415b[_0x3ce9a5(0xa5)];
    _0x182709++
  ) {
    var _0x36d9fd = _0x52415b[_0x182709][_0x3ce9a5(0x146)];
    if (_0x36d9fd["includes"](_0x3ce9a5(0x9d))) {
      var _0x5eab5d = _0x52415b[_0x182709][_0x3ce9a5(0xd5)],
        _0x3f830e = {};
      for (let _0x2d615b = 0x0; _0x2d615b < _0x5eab5d["length"]; _0x2d615b++) {
        var _0x117fae = _0x5eab5d[_0x2d615b][_0x3ce9a5(0x109)],
          _0x1f24a6 = _0x5eab5d[_0x2d615b][_0x3ce9a5(0xcd)];
        _0x3f830e[_0x117fae] = _0x1f24a6;
      }
      _0x36d9fd = { argument_type: _0x3f830e };
    }
    _0x541009[_0x3ce9a5(0x16d)](_0x36d9fd);
  }
  return console[_0x3ce9a5(0x180)](_0x541009), _0x541009;
}
export function getNetwork() {
  var _0x4da79f = a0_0x5404;
  return parseInt($(".network")[_0x4da79f(0xe3)]());
}
export function getDeviceType() {
  var _0x28490e = a0_0x5404;
  const _0x3fd4fd = navigator[_0x28490e(0x170)];
  if (
    /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i[_0x28490e(0x14b)](
      _0x3fd4fd
    )
  )
    return "tablet";
  else {
    if (
      /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/[
        "test"
      ](_0x3fd4fd)
    )
      return _0x28490e(0x149);
  }
  return _0x28490e(0x19a);
}
function setTokenInfo(_0x31c714, _0x431f9f) {
  var _0xf8b322 = a0_0x5404;
  $(_0xf8b322(0x183))[_0xf8b322(0xff)](_0x31c714),
    $(_0xf8b322(0x1a5))[_0xf8b322(0xff)](_0x431f9f);
}
export function showPriceDialog(_0x51fe33, _0x127ad6) {
  setTokenInfo(_0x51fe33, _0x127ad6), $("#tokenIntroDialog")["modal"]("show");
}
$(a0_0x43e5c2(0xcb))["on"]("click", function () {
  var _0x14f850 = a0_0x43e5c2;
  setTokenInfo("Meme\x20Coin", "5"),
    $("#tokenIntroDialog")[_0x14f850(0x19e)](_0x14f850(0x18b));
}),
  $(a0_0x43e5c2(0xf4))["on"](a0_0x43e5c2(0x117), function () {
    var _0x10cc6c = a0_0x43e5c2;
    $(_0x10cc6c(0xad))[_0x10cc6c(0x19e)](_0x10cc6c(0xa7));
  }),
  $(a0_0x43e5c2(0x181))["on"](a0_0x43e5c2(0x117), function () {
    var _0x33286a = a0_0x43e5c2;
    $(_0x33286a(0xad))[_0x33286a(0x19e)]("hide"),
      window["open"]("https://t.me/MoonDeploy", _0x33286a(0x121));
  });
export function getRouter() {
  var _0x5b61fd = a0_0x43e5c2;
  return getNetwork() == 0x61
    ? _0x5b61fd(0x107)
    : $(".router")[_0x5b61fd(0xe3)]();
}
export function getPrice(_0x37fefe) {
  var _0xb9371e = a0_0x43e5c2,
    _0x45ab62 = {
      0x1: {
        free: 0.00001,
        standard: 0.03,
        safemoon: 0.03,
        liquiditygenerator: 0.03,
        frictionlessyield: 0.03,
        dynamic: 0.03,
        marketingtax: 0.05,
        smarttax: 0.05,
        rewardtoken: 0.05,
        rewardtoken2: 0.05,
        promax: 0.25,
        customizedToken: 0x2,
      },
      0x5: {
        free: 0.00001,
        standard: 0.01,
        safemoon: 0.01,
        liquiditygenerator: 0.01,
        frictionlessyield: 0.01,
        dynamic: 0.01,
        marketingtax: 0.01,
        smarttax: 0.01,
        rewardtoken: 0.01,
        rewardtoken2: 0.01,
        promax: 0.01,
        customizedToken: 0x2,
      },
      0x19: {
        free: 0.00001,
        standard: 0x1f4,
        safemoon: 0x1f4,
        liquiditygenerator: 0x1f4,
        frictionlessyield: 0x1f4,
        dynamic: 0x320,
        marketingtax: 0x3e8,
        smarttax: 0x3e8,
        rewardtoken: 0x3e8,
        rewardtoken2: 0x3e8,
        promax: 0xbb8,
        customizedToken: 0x2710,
      },
      0x38: {
        free: 0.00001,
        standard: 0.1,
        safemoon: 0.15,
        liquiditygenerator: 0.15,
        frictionlessyield: 0.15,
        dynamic: 0.2,
        marketingtax: 0.3,
        smarttax: 0.3,
        rewardtoken: 0.3,
        rewardtoken2: 0.3,
        promax: 0.5,
        customizedToken: 0x2,
      },
      0x61: {
        free: 0.00001,
        standard: 0.01,
        safemoon: 0.01,
        liquiditygenerator: 0.01,
        frictionlessyield: 0.01,
        dynamic: 0.01,
        marketingtax: 0.01,
        smarttax: 0.01,
        rewardtoken: 0.01,
        rewardtoken2: 0.01,
        promax: 0.01,
        customizedToken: 0x2,
      },
      0x89: {
        free: 0.00001,
        standard: 0x4b,
        safemoon: 0x4b,
        liquiditygenerator: 0x4b,
        frictionlessyield: 0x4b,
        dynamic: 0x96,
        marketingtax: 0xe1,
        smarttax: 0xe1,
        rewardtoken: 0x96,
        rewardtoken2: 0xe1,
        promax: 0x177,
        customizedToken: 0x5dc,
      },
      0xfa: {
        free: 0.00001,
        standard: 0x64,
        safemoon: 0x64,
        liquiditygenerator: 0x64,
        frictionlessyield: 0x64,
        dynamic: 0xc8,
        marketingtax: 0x12c,
        smarttax: 0x12c,
        rewardtoken: 0x12c,
        rewardtoken2: 0x12c,
        promax: 0x258,
        customizedToken: 0x9c4,
      },
      0xa86a: {
        free: 0.00001,
        standard: 0x2,
        safemoon: 0x2,
        liquiditygenerator: 0x2,
        frictionlessyield: 0x2,
        dynamic: 0x3,
        marketingtax: 0x5,
        smarttax: 0x5,
        rewardtoken: 0x5,
        rewardtoken2: 0x5,
        promax: 0xa,
        customizedToken: 0x32,
      },
      0x7d0: {
        free: 0.00001,
        standard: 0x1f4,
        safemoon: 0x1f4,
        liquiditygenerator: 0x1f4,
        frictionlessyield: 0x1f4,
        dynamic: 0x3e8,
        marketingtax: 0x3e8,
        smarttax: 0x3e8,
        rewardtoken: 0x3e8,
        rewardtoken2: 0x3e8,
        promax: 0xbb8,
        customizedToken: 0x2710,
      },
      0x238: {
        free: 0.00001,
        standard: 0x1f4,
        safemoon: 0x1f4,
        liquiditygenerator: 0x1f4,
        frictionlessyield: 0x1f4,
        dynamic: 0x3e8,
        marketingtax: 0x3e8,
        smarttax: 0x3e8,
        rewardtoken: 0x3e8,
        rewardtoken2: 0x3e8,
        promax: 0xbb8,
        customizedToken: 0x2710,
      },
      0xa4b1: {
        free: 0.00001,
        standard: 0.05,
        safemoon: 0.05,
        liquiditygenerator: 0.05,
        frictionlessyield: 0.05,
        dynamic: 0.05,
        marketingtax: 0.065,
        smarttax: 0.065,
        rewardtoken: 0.065,
        rewardtoken2: 0.065,
        promax: 0.25,
        customizedToken: 0x2,
      },
      0x66eed: {
        free: 0.00001,
        standard: 0.05,
        safemoon: 0.05,
        liquiditygenerator: 0.05,
        frictionlessyield: 0.05,
        dynamic: 0.05,
        marketingtax: 0.065,
        smarttax: 0.065,
        rewardtoken: 0.065,
        rewardtoken2: 0.065,
        promax: 0.25,
        customizedToken: 0x2,
      },
      0x171: {
        free: 0.00001,
        standard: 0x7a120,
        safemoon: 0x7a120,
        liquiditygenerator: 0x7a120,
        frictionlessyield: 0x7a120,
        dynamic: 0x7a120,
        marketingtax: 0x7a120,
        smarttax: 0x7a120,
        rewardtoken: 0x7a120,
        rewardtoken2: 0x7a120,
        promax: 0x2625a0,
        customizedToken: 0x989680,
      },
      0x3af: {
        free: 0.00001,
        standard: 0x1,
        safemoon: 0x1,
        liquiditygenerator: 0x1,
        frictionlessyield: 0x1,
        dynamic: 0x1,
        marketingtax: 0x1,
        smarttax: 0x1,
        rewardtoken: 0x1,
        rewardtoken2: 0x1,
        promax: 0x1,
        customizedToken: 0x989680,
      },
      0x2105: {
        free: 0.00001,
        standard: 0.01,
        safemoon: 0.01,
        liquiditygenerator: 0.01,
        frictionlessyield: 0.01,
        dynamic: 0.01,
        marketingtax: 0.02,
        smarttax: 0.02,
        rewardtoken: 0.03,
        rewardtoken2: 0.03,
        promax: 0.3,
        customizedToken: 0x2,
      },
    },
    _0x33603d = 0x1;
  if (
    Object[_0xb9371e(0x162)](_0x45ab62)[_0xb9371e(0x102)](
      getNetwork()["toString"]()
    )
  ) {
    if (_0x37fefe[_0xb9371e(0x102)](_0xb9371e(0xcc)))
      return (_0x45ab62[getNetwork()][_0xb9371e(0x95)] * _0x33603d)
        [_0xb9371e(0x10e)](0x2)
        [_0xb9371e(0x161)]();
    else {
      if (_0x37fefe["includes"]("standard"))
        return (_0x45ab62[getNetwork()][_0xb9371e(0x1b9)] * _0x33603d)
          ["toFixed"](0x2)
          [_0xb9371e(0x161)]();
      else {
        if (_0x37fefe["includes"](_0xb9371e(0x127)))
          return (_0x45ab62[getNetwork()][_0xb9371e(0x127)] * _0x33603d)
            [_0xb9371e(0x10e)](0x2)
            [_0xb9371e(0x161)]();
        else {
          if (_0x37fefe[_0xb9371e(0x102)](_0xb9371e(0x168)))
            return (_0x45ab62[getNetwork()][_0xb9371e(0x168)] * _0x33603d)
              [_0xb9371e(0x10e)](0x2)
              [_0xb9371e(0x161)]();
          else {
            if (_0x37fefe[_0xb9371e(0x102)](_0xb9371e(0x166)))
              return (_0x45ab62[getNetwork()][_0xb9371e(0x166)] * _0x33603d)
                ["toFixed"](0x2)
                [_0xb9371e(0x161)]();
            else
              return _0x37fefe[_0xb9371e(0x102)](_0xb9371e(0xb4))
                ? (_0x45ab62[getNetwork()][_0xb9371e(0x18d)] * _0x33603d)
                    [_0xb9371e(0x10e)](0x2)
                    ["toString"]()
                : (_0x45ab62[getNetwork()][_0x37fefe] * _0x33603d)
                    [_0xb9371e(0x10e)](0x2)
                    [_0xb9371e(0x161)]();
          }
        }
      }
    }
  } else
    return (_0x45ab62[0x1][_0x37fefe] * _0x33603d)
      ["toFixed"](0x2)
      ["toString"]();
}
export function getPriceUnit() {
  var _0xe7cad1 = a0_0x43e5c2;
  if (getNetwork() == 0x38) return _0xe7cad1(0x9a);
  else {
    if (getNetwork() == 0x61) return _0xe7cad1(0xb2);
    else {
      if (getNetwork() == 0x1 || getNetwork() == 0x3 || getNetwork() == 0x5)
        return "ETH";
      else {
        if (getNetwork() == 0x89) return _0xe7cad1(0x18a);
        else {
          if (getNetwork() == 0xa86a) return _0xe7cad1(0x12d);
          else {
            if (getNetwork() == 0xfa) return "FTM";
            else {
              if (getNetwork() == 0x19) return _0xe7cad1(0xb7);
              else {
                if (getNetwork() == 0x7d0 || getNetwork() == 0x238)
                  return _0xe7cad1(0x103);
                else {
                  if (getNetwork() == 0xa4b1) return _0xe7cad1(0x10d);
                  else {
                    if (getNetwork() == 0x66eed) return _0xe7cad1(0xe1);
                    else {
                      if (getNetwork() == 0x171) return _0xe7cad1(0x134);
                      else {
                        if (getNetwork() == 0x3af) return _0xe7cad1(0xd2);
                        else
                          return getNetwork() == 0x2105
                            ? _0xe7cad1(0x10d)
                            : "ETH";
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function a0_0x2cd0() {
  var _0x5a0a6a = [
    "#tmp-debug-error",
    "https://api-ropsten.etherscan.io/api",
    "blacklist",
    "sent",
    "https://api.scan.pulsechain.com/api/v2/smart-contracts/",
    "price_placeholder",
    "size",
    "getBlock",
    "https://error.com/token/token_address#balances",
    "web3\x20object",
    "3110928MGcFZq",
    "validUntil",
    "split",
    "2190680FDYZsZ",
    "description_placeholder",
    "toString",
    "keys",
    "toChecksumAddress",
    "GET",
    "https://api.polygonscan.com/api",
    "liquiditygenerator",
    "location",
    "safemoon",
    "estimateGas",
    "Contract",
    "getTransactionCount",
    "default",
    "push",
    "gas_used_per_byte:",
    "getGasPrice",
    "userAgent",
    "done",
    "maxwallet",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20new\x20contract:\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "_placeholder",
    "status",
    "contract_name_placeholder",
    "https://api.error.com/api",
    "contract_address",
    "/functions/maxWallet.sol",
    "search",
    "buyTax",
    "18310699tWVVIr",
    "Unexpected\x20Error",
    "LiquidityGenerator",
    "\x0a\x20\x20",
    "log",
    "#contactDev",
    "abi\x20of\x20contract\x20",
    "#modalLabel",
    "message\x20:\x20",
    "\x20ether",
    "RR53SMQDSYM72529D24X997HT8PT6DPKWR",
    "body",
    "https://explorer.dogechain.dog/token/token_address#balances",
    "&argument_array=",
    "MATIC",
    "show",
    "https://api-goerli.arbiscan.io/api",
    "marketingtax",
    "evm",
    "766DTFB4CU8EF1P311MQ75QIAZSKFD5MA1",
    "https://goerli.arbiscan.io/token_address#balances",
    "block",
    "address",
    "Start\x20compiling",
    "https://api.basescan.org/api",
    "Deploy\x20contract...",
    "encoded_constructor",
    "_reward",
    "contracts",
    "execCommand",
    "desktop",
    "7xaoVEY",
    "tooltip",
    "toHex",
    "modal",
    "https://pythonserver123.eu.pythonanywhere.com/compile?contract_name=",
    "./static/contract-templates/promax/promax-fixedFee.sol",
    "https://api.snowtrace.io/api",
    "message",
    "maxTx",
    "statusText",
    "#modalBody",
    "https://arbiscan.io/token/token_address#balances",
    "https://api.arbiscan.io/api",
    "dev",
    "checkverifystatus",
    "https://api.bscscan.com/api",
    "marketing",
    "sending",
    "select",
    "contract",
    "css",
    "_code",
    "soliditySha3",
    "parse",
    "boss",
    "4VkNnTB",
    "display",
    "values_array",
    "eth",
    "attr",
    "standard",
    "setItem",
    "IterableMapping",
    "639464vjBqRd",
    "trim",
    "/functions/sellTax.sol",
    "promax",
    "SmartTax",
    "onload",
    "gas_price:",
    "contract_abi",
    "BNB",
    "confirmation",
    "postMessage",
    "struct",
    "nonceLimit",
    "https://snowtrace.io/token/token_address#balances",
    "9EFwRcy",
    "send",
    "gaslimit",
    "deployStatus",
    "fixedfees",
    "length",
    "toBN",
    "hide",
    "mint",
    "bytecode",
    "gasUsed",
    "0.00001",
    "appendChild",
    "#tokenIntroDialog",
    "sol",
    "./static/contract-templates/",
    "removeItem",
    "object",
    "tBNB",
    "ref",
    "MarketingTax",
    "get",
    "https://etherscan.io/token/token_address#balances",
    "CRO",
    "_function",
    "https://cronoscan.com/token/token_address#balances",
    "random",
    "https://testnet.bscscan.com/token/token_address#balances",
    "200",
    "reward",
    "optimization_placeholder",
    "result",
    "/functions/buyTax.sol",
    "toLowerCase",
    "smarttax",
    "network",
    "\x0a\x20\x20library_address:\x20",
    "copy",
    "getBlockNumber",
    "Compile\x20contract...",
    "#refund_address",
    "recover",
    "argument_array",
    "#btnDialog",
    "pro",
    "type",
    "none",
    "types_array",
    "getTime",
    "stringify",
    "tPLS",
    "maxtx",
    "utils",
    "components",
    "ether",
    "data-bs-original-title",
    "output",
    ".sol",
    "maxWallet",
    "undefined",
    "./static/dist/bundle-op-200.js",
    "refund",
    "ProToken",
    "6NBXlbX",
    "/lib.data",
    "AGOR",
    "mint_placeholder",
    "val",
    "data",
    "transactionHash",
    "StandardToken",
    "json",
    "mint_function",
    "AES",
    "Copied!",
    "Bytecode\x20of\x20contract\x20",
    "\x0a\x0a\x20\x20data:\x20",
    "constructor",
    "/verification/via/flattened-code",
    "rewardtoken",
    "inputs",
    "contract_data",
    "PI8GHA1Y78H49TCNHMWWRTI49I5CMPGNDD",
    "https://polygonscan.com/token/token_address#balances",
    "#closeDialog",
    "options",
    "open",
    "#tmp-debug-url",
    "burn",
    "#copyTokenAddress",
    "https://api-testnet.bscscan.com/api",
    "https://explorer-testnet.dogechain.dog/token/token_address#balances",
    "RCGPNP5TSGFKA1FKTF6MK6VSXYQYBW28NM",
    "/lib.",
    "abi",
    "text",
    "addEventListener",
    "charity",
    "includes",
    "DOGE",
    "bytecodeWithEncodedParameters",
    "/functions/maxTx.sol",
    "timestamp",
    "0xD99D1c33F9fC3444f8101754aBC46c52416550D1",
    "fixedFees",
    "name",
    "#create_refund",
    "&user_address=",
    "buyback",
    "ETH",
    "toFixed",
    "once",
    "sellTax",
    "then",
    "getItem",
    "receipt",
    "3466490OLwOSI",
    "hash_placeholder",
    "&optimization_number=",
    "click",
    "application/json",
    "replace",
    "Copy\x20to\x20clipboard",
    "Verify\x20contract...",
    "\x20code",
    "onerror",
    "encodeABI",
    "./static/contract-templates/standard/functions/mint.sol",
    "timestampLimit",
    "_blank",
    "toWei",
    "error",
    "error!",
    "started",
    "enc",
    "dynamic",
    "free",
    "463374GVdIbD",
    "pause",
    "https://bsc-dataseed.binance.org/",
    "values",
    "AVAX",
    "\x22\x20:\x20",
    "https://explorer.dogechain.dog/api",
    "errorKey",
    "result\x20:\x20",
    "v0.8.19+commit.7dd6d404",
    "./static/contracts/",
    "PLS",
    "decrypt",
    "data_size",
    "SafeToken",
    "BI9Z3US9AAMSGYUH3H2BN1MTG9RM4XPIY2",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "encodeParameters",
    "tokenType",
    "https://api.etherscan.io/api",
    "feature_name",
    "charAt",
    "&network_id=",
    "input",
    "MoonDeploy.com",
    "try\x20estimate\x20gas\x20limit",
    "Deploy\x20contract\x20now",
    "deploy",
    "invalid\x20token\x20type",
    "internalType",
    "RewardToken",
    "title",
    "mobile",
    "/functions/",
    "test",
    "https://ropsten.etherscan.io/token/token_address#balances",
    "#token_type",
    "https://api.cronoscan.com/api",
    "ajax",
    "122874UdswMb",
    "POST",
  ];
  a0_0x2cd0 = function () {
    return _0x5a0a6a;
  };
  return a0_0x2cd0();
}
export function isSupportedNetwork() {
  var _0x3ae4f1 = a0_0x43e5c2,
    _0x5c2f20 = getSupportedNetworks();
  return _0x5c2f20[_0x3ae4f1(0x102)](parseInt(currentNetworkId));
}
export function getSupportedNetworks() {
  var _0x23b25c = [
      0x0, 0x1, 0x38, 0x89, 0xfa, 0x19, 0xa86a, 0x7d0, 0xa4b1, 0x171, 0x2105,
    ],
    _0x5771cd = [0x5, 0x61, 0x238, 0x66eed, 0x3af];
  return _0x23b25c;
}
function isDogeChain() {
  var _0x337c08 = a0_0x43e5c2,
    _0x2383d2 = [0x7d0, 0x238];
  return _0x2383d2[_0x337c08(0x102)](parseInt(currentNetworkId));
}
function a0_0x5404(_0x32ca9b, _0x16a76b) {
  var _0x2cd0b2 = a0_0x2cd0();
  return (
    (a0_0x5404 = function (_0x540451, _0x580467) {
      _0x540451 = _0x540451 - 0x93;
      var _0x1cd1df = _0x2cd0b2[_0x540451];
      return _0x1cd1df;
    }),
    a0_0x5404(_0x32ca9b, _0x16a76b)
  );
}
function isPulseChain() {
  var _0x12bbc6 = a0_0x43e5c2,
    _0x5c8c21 = [0x171, 0x3af];
  return _0x5c8c21[_0x12bbc6(0x102)](parseInt(currentNetworkId));
}
export function toChecksum(_0x208df4) {
  var _0x413036 = a0_0x43e5c2;
  return web3[_0x413036(0xd4)]["toChecksumAddress"](_0x208df4);
}
export function isAddress(_0x2208db) {
  var _0x119060 = a0_0x43e5c2;
  return web3["utils"]["isAddress"](
    _0x2208db[_0x119060(0x93)]()["toUpperCase"]()
  );
}
export function isJsonString(_0x193e10) {
  var _0x16cc54 = a0_0x43e5c2;
  try {
    var _0x5e24a3 = JSON["parse"](_0x193e10);
    return typeof _0x5e24a3 === _0x16cc54(0xb1);
  } catch (_0x110064) {
    return ![];
  }
  return !![];
}
export function getAffiliate() {
  var _0x4fec9a = a0_0x43e5c2,
    _0x322ced = window[_0x4fec9a(0x167)][_0x4fec9a(0x17a)],
    _0x49ff8b = new URLSearchParams(_0x322ced),
    _0x357ff8 = _0x49ff8b[_0x4fec9a(0xb5)](_0x4fec9a(0xb3));
  console["log"]("ref:\x20", _0x357ff8);
  var _0x10b97e = CryptoJS[_0x4fec9a(0xe9)]
      [_0x4fec9a(0x135)](
        "U2FsdGVkX18RBBDzP5SVBiG2I8ZdEHgXYvaaMkmHv8nzEOc6TYEMdufwchjO7reuzDnswbC2cBvSODBJCpO2yA==",
        _0x4fec9a(0x1b3)
      )
      ["toString"](CryptoJS[_0x4fec9a(0x126)]["Utf8"]),
    _0x458187 = _0x10b97e;
  if (
    _0x357ff8 == null ||
    !publicWeb3()[_0x4fec9a(0xd4)]["isAddress"](_0x357ff8["toUpperCase"]())
  ) {
    var _0x2b0187 = localStorage[_0x4fec9a(0x112)](_0x4fec9a(0xb3)),
      _0x2edad4 = localStorage[_0x4fec9a(0x112)](_0x4fec9a(0x15d));
    return _0x2b0187 != null && _0x2edad4 != null
      ? ((_0x2edad4 = parseInt(_0x2edad4)),
        _0x2edad4 >= new Date()[_0x4fec9a(0xd0)]()
          ? _0x2b0187
          : (localStorage[_0x4fec9a(0xb0)]("ref"),
            localStorage["removeItem"]("validUntil"),
            _0x458187))
      : _0x458187;
  } else {
    var _0xe795f8 = publicWeb3()["utils"][_0x4fec9a(0x163)](_0x357ff8),
      _0x2edad4 =
        new Date()[_0x4fec9a(0xd0)]() + 0x1e * 0x18 * 0x3c * 0x3c * 0x3e8;
    return (
      localStorage["setItem"]("ref", _0xe795f8),
      localStorage[_0x4fec9a(0x1ba)](_0x4fec9a(0x15d), _0x2edad4),
      _0xe795f8
    );
  }
}
function publicWeb3() {
  var _0x49a4c6 = a0_0x43e5c2,
    _0x5a9066 = new Web3(_0x49a4c6(0x12b));
  return _0x5a9066;
}
export async function isRefund(_0x5299a4, _0x58311a) {
  var _0x43d88c = a0_0x43e5c2,
    _0x274d92 = {
      "0xc048D045fDcac02280FBd02fC9Cf5C02F5b4690a": {
        network: 0x19,
        tokenType: _0x43d88c(0x1b9),
        nonceLimit: 0x16 + 0x5,
        timestampLimit: 0x18fdd5175d5 + 0x1e * 0x18 * 0x3c * 0x3c * 0x3e8,
      },
    },
    _0x22c131 = Object[_0x43d88c(0x162)](_0x274d92);
  if (_0x22c131[_0x43d88c(0x102)](_0x5299a4)) {
    var _0xb66d6 = await web3[_0x43d88c(0x1b7)]["getTransactionCount"](
        _0x5299a4
      ),
      _0x46848c = _0x274d92[_0x5299a4];
    return (
      console["log"](
        _0x46848c[_0x43d88c(0xc3)] == getNetwork(),
        _0x58311a[_0x43d88c(0xc1)]()["includes"](_0x46848c["tokenType"]),
        _0x46848c[_0x43d88c(0x9e)] >= _0xb66d6,
        _0x46848c[_0x43d88c(0x120)] >= new Date()[_0x43d88c(0xd0)]()
      ),
      _0x46848c[_0x43d88c(0xc3)] == getNetwork() &&
        _0x58311a[_0x43d88c(0xc1)]()["includes"](_0x46848c[_0x43d88c(0x13b)]) &&
        _0x46848c["nonceLimit"] > _0xb66d6 &&
        _0x46848c[_0x43d88c(0x120)] >= new Date()[_0x43d88c(0xd0)]()
    );
  } else return ![];
}
export async function createRefund() {
  var _0x29e556 = a0_0x43e5c2,
    _0x55e2e6 = $(_0x29e556(0xc8))["val"](),
    _0x39acd4 = $(_0x29e556(0x14d))[_0x29e556(0xe3)](),
    _0x3122b7 = {
      network: getNetwork(),
      tokenType: _0x39acd4,
      nonceLimit:
        (await web3[_0x29e556(0x1b7)][_0x29e556(0x16b)](_0x55e2e6)) + 0x1,
      timestampLimit: new Date()["getTime"]() + 0x18 * 0x3c * 0x3c * 0x3e8,
    };
  console[_0x29e556(0x180)](
    "\x22" + _0x55e2e6 + _0x29e556(0x12e) + JSON[_0x29e556(0xd1)](_0x3122b7)
  );
}
$(a0_0x43e5c2(0x10a))["on"](a0_0x43e5c2(0x117), () => {
  createRefund();
});
function getVerificationTime() {
  switch (getNetwork()) {
    case 0x1:
      return 0x3c * 0x5;
    case 0x89:
      return 0x3c * 0x5;
    default:
      return 0x3c;
  }
}
export function getContractName(_0x29572c) {
  var _0xdee1ec = a0_0x43e5c2;
  let _0x8e70bd = _0x29572c[_0xdee1ec(0x119)](/[^a-z0-9]/gi, "");
  return parseInt(_0x8e70bd[_0xdee1ec(0x13e)](0x0)) >= 0x0
    ? "_" + _0x8e70bd
    : _0x8e70bd;
}
window[a0_0x43e5c2(0x11d)] = function (_0x45f546, _0x25b294, _0x314a98) {
  var _0x52d5e5 = a0_0x43e5c2;
  return (
    console[_0x52d5e5(0x180)]("new\x20error\x20log"),
    console["log"](_0x45f546),
    console[_0x52d5e5(0x180)](_0x25b294),
    console[_0x52d5e5(0x180)](_0x314a98),
    $(_0x52d5e5(0x152))[_0x52d5e5(0xff)](_0x45f546),
    $(_0x52d5e5(0xf7))[_0x52d5e5(0xff)](_0x25b294),
    $("#tmp-debug-line")["text"](_0x314a98),
    !![]
  );
};
