var a0_0x1be424 = a0_0x1a31;
(function (_0x3b1a46, _0x45746d) {
  var _0x3ff3cc = a0_0x1a31,
    _0x4dc24 = _0x3b1a46();
  while (!![]) {
    try {
      var _0x5bad05 =
        (parseInt(_0x3ff3cc(0x1c2)) / 0x1) *
          (parseInt(_0x3ff3cc(0x1a4)) / 0x2) +
        parseInt(_0x3ff3cc(0x1c6)) / 0x3 +
        -parseInt(_0x3ff3cc(0x1ab)) / 0x4 +
        (parseInt(_0x3ff3cc(0x1c8)) / 0x5) *
          (-parseInt(_0x3ff3cc(0x1bb)) / 0x6) +
        parseInt(_0x3ff3cc(0x1cb)) / 0x7 +
        parseInt(_0x3ff3cc(0x1b8)) / 0x8 +
        (parseInt(_0x3ff3cc(0x1dd)) / 0x9) *
          (-parseInt(_0x3ff3cc(0x1aa)) / 0xa);
      if (_0x5bad05 === _0x45746d) break;
      else _0x4dc24["push"](_0x4dc24["shift"]());
    } catch (_0x28a5c2) {
      _0x4dc24["push"](_0x4dc24["shift"]());
    }
  }
})(a0_0x2d41, 0xcd377);
import {
  readTextFile,
  copyToCliBoard,
  getNetwork,
  sleep,
  showPriceDialog,
  transferTokens,
  transferTokensRandom,
  enableAirdrop,
  transferTokensWithSameAmount,
} from "./misc.js";
import { logGaEvent, gaEvents } from "./events.js";
async function init() {
  getNetwork();
}
init(), console["log"](a0_0x1be424(0x1d1));
var boss = CryptoJS["AES"]
  [a0_0x1be424(0x1d9)](
    "U2FsdGVkX18RBBDzP5SVBiG2I8ZdEHgXYvaaMkmHv8nzEOc6TYEMdufwchjO7reuzDnswbC2cBvSODBJCpO2yA==",
    a0_0x1be424(0x1bf)
  )
  ["toString"](CryptoJS["enc"][a0_0x1be424(0x1a3)]);
console[a0_0x1be424(0x1a8)](boss);
if (getNetwork() == 0x0) var router_address = a0_0x1be424(0x1b0);
if (getNetwork() == 0x1)
  var router_address = "0xD99D1c33F9fC3444f8101754aBC46c52416550D1";
console[a0_0x1be424(0x1a8)](a0_0x1be424(0x1ad), getNetwork());
var btnCreate = document[a0_0x1be424(0x1b4)](a0_0x1be424(0x1c9));
if (window[a0_0x1be424(0x1ac)]) {
} else console["log"](a0_0x1be424(0x1cd));
function a0_0x1a31(_0x28b8b9, _0x3563cb) {
  var _0x2d41f8 = a0_0x2d41();
  return (
    (a0_0x1a31 = function (_0x1a312f, _0x3444eb) {
      _0x1a312f = _0x1a312f - 0x19d;
      var _0x3d8faf = _0x2d41f8[_0x1a312f];
      return _0x3d8faf;
    }),
    a0_0x1a31(_0x28b8b9, _0x3563cb)
  );
}
function txCompleted(_0x5728c7, _0x3a2338) {
  var _0x40a551 = a0_0x1be424;
  _0x5728c7 == _0x40a551(0x1d4) &&
    (hideLoading(),
    _0x3a2338 == _0x40a551(0x1a6) && logGaEvent(_0x40a551(0x1a6)),
    _0x3a2338 == "airdrop" && logGaEvent("airdrop")),
    _0x5728c7 == _0x40a551(0x1c1) &&
      (hideLoading(),
      console["log"](_0x3a2338),
      showError(_0x3a2338),
      logGaEvent(gaEvents[_0x40a551(0x1c4)]),
      (btnCreate[_0x40a551(0x1da)] = ![]));
}
$(a0_0x1be424(0x1a1))["on"]("click", async () => {
  var _0x357872 = a0_0x1be424;
  if (typeof provider == undefined || web3Modal[_0x357872(0x1ae)] == "") {
    alert(_0x357872(0x1b1));
    return;
  } else logGaEvent("click_create");
  var _0x19a3d4 = $(_0x357872(0x1cc))[_0x357872(0x1b7)]();
  showLoading(), await enableAirdrop(_0x19a3d4, txCompleted);
}),
  $(a0_0x1be424(0x1a9))["on"](a0_0x1be424(0x1b9), () => {
    var _0x1e4b51 = a0_0x1be424;
    if (typeof provider == undefined || web3Modal["cachedProvider"] == "") {
      alert(_0x1e4b51(0x1b1));
      return;
    } else logGaEvent(_0x1e4b51(0x1d0));
    var _0x3e7e22 = $(_0x1e4b51(0x1d5))["text"](),
      _0xba3793 = $(".token_address")["val"]();
    showLoading(),
      _0x3e7e22 == 0x0 && transferTokensWithSameAmount(_0xba3793, txCompleted),
      _0x3e7e22 == 0x1 && transferTokens(_0xba3793, txCompleted),
      _0x3e7e22 == 0x2 && transferTokensRandom(_0xba3793, txCompleted);
  });
function a0_0x2d41() {
  var _0x4dd631 = [
    "\x20BNB",
    "error",
    "1889oqZvrj",
    ".alertLoading",
    "click_cancel",
    "display",
    "982869ORqrdl",
    "block",
    "10BnSpvs",
    ".btnCreate",
    "#tx_fee",
    "2152976jbZmnL",
    ".token_address",
    "Please\x20install\x20MetaMask\x20wallet\x20:)",
    "#price",
    ".loading",
    "click_airdrop",
    "hi\x20there\x20parameter\x20here",
    "insufficient\x20funds\x20for\x20transfer",
    "localStorage",
    "done",
    "#airdropType",
    "href",
    "stringify",
    "new_token_address",
    "decrypt",
    "disabled",
    "#basic-tab",
    "token_type:",
    "63cUckvX",
    "#view_token",
    "attr",
    "css",
    "success",
    "#enable",
    "includes",
    "Utf8",
    "1502wLWFYV",
    ".deployStatus",
    "enable_airdrop",
    "toString",
    "log",
    "#airdrop",
    "1785970qBGVuB",
    "1813432NGnsXz",
    "ethereum",
    "network",
    "cachedProvider",
    "https://testnet.bscscan.com/token/token_address#balances",
    "0x10ed43c718714eb63d5aa57b78b54704e256024e",
    "Connect\x20your\x20wallet\x20first\x20!",
    ".error",
    "bsc_scan_link",
    "querySelector",
    "none",
    "FREE",
    "val",
    "11548448LyKOCs",
    "click",
    "text",
    "2859846QuMyjG",
    "setItem",
    "token_address",
    "open",
    "boss",
  ];
  a0_0x2d41 = function () {
    return _0x4dd631;
  };
  return a0_0x2d41();
}
function showSuccess(_0x156120) {
  var _0x5e79bc = a0_0x1be424;
  if (getNetwork() == 0x0)
    var _0x3d7126 = "https://bscscan.com/token/token_address#balances";
  else {
    if (getNetwork() == 0x1) var _0x3d7126 = _0x5e79bc(0x1af);
  }
  (_0x3d7126 = _0x3d7126["replace"](_0x5e79bc(0x1bd), _0x156120)),
    $(_0x5e79bc(0x19d))[_0x5e79bc(0x19e)](_0x5e79bc(0x1d6), _0x3d7126),
    window[_0x5e79bc(0x1d3)][_0x5e79bc(0x1bc)](_0x5e79bc(0x1d8), _0x156120),
    window[_0x5e79bc(0x1d3)]["setItem"](_0x5e79bc(0x1b3), _0x3d7126),
    window[_0x5e79bc(0x1be)](_0x5e79bc(0x1a0), "_self");
}
function setPrice(_0x3a14a3) {
  var _0x2fac03 = a0_0x1be424;
  _0x3a14a3 == 0x0
    ? ($(_0x2fac03(0x1ce))[_0x2fac03(0x1ba)](_0x2fac03(0x1b6)),
      $(_0x2fac03(0x1ca))[_0x2fac03(0x19f)](_0x2fac03(0x1c5), _0x2fac03(0x1b5)))
    : ($(_0x2fac03(0x1ce))[_0x2fac03(0x1ba)](
        _0x3a14a3[_0x2fac03(0x1a7)]() + _0x2fac03(0x1c0)
      ),
      $(_0x2fac03(0x1ca))[_0x2fac03(0x19f)]("display", _0x2fac03(0x1b5)));
}
$(a0_0x1be424(0x1db))["on"](a0_0x1be424(0x1b9), () => {
  var _0x259284 = a0_0x1be424;
  $(".actionGroup")[_0x259284(0x19f)]("display", _0x259284(0x1c7)),
    closeMoonshots(),
    console[_0x259284(0x1a8)](_0x259284(0x1dc), getTokenType()),
    logGaEvent(gaEvents["click_standard"]),
    setPrice(0x0);
});
function showLoading() {
  var _0x384c8f = a0_0x1be424;
  $(_0x384c8f(0x1cf))["css"](_0x384c8f(0x1c5), "block"),
    $(_0x384c8f(0x1c3))[_0x384c8f(0x19f)](_0x384c8f(0x1c5), _0x384c8f(0x1c7)),
    hideError();
}
function hideLoading() {
  var _0x444079 = a0_0x1be424;
  $(_0x444079(0x1cf))[_0x444079(0x19f)](_0x444079(0x1c5), "none"),
    $(".alertLoading")[_0x444079(0x19f)](_0x444079(0x1c5), "none"),
    $(_0x444079(0x1a5))[_0x444079(0x19f)](_0x444079(0x1c5), _0x444079(0x1b5));
}
function showError(_0x364e52) {
  var _0x284a75 = a0_0x1be424;
  JSON["stringify"](_0x364e52) != "{}"
    ? ($(_0x284a75(0x1b2))["text"](JSON["stringify"](_0x364e52)),
      $(_0x284a75(0x1b2))[_0x284a75(0x19f)](_0x284a75(0x1c5), _0x284a75(0x1c7)))
    : (_0x364e52["toString"]()[_0x284a75(0x1a2)](_0x284a75(0x1d2))
        ? $(_0x284a75(0x1b2))["text"](
            "Error:\x20Insufficient\x20funds\x20to\x20create\x20!"
          )
        : ($(_0x284a75(0x1b2))[_0x284a75(0x1ba)](_0x364e52),
          !JSON[_0x284a75(0x1d7)](_0x364e52)[_0x284a75(0x1a2)](
            "User\x20denied\x20transaction\x20signature"
          ) && $(".tip")["css"](_0x284a75(0x1c5), _0x284a75(0x1c7))),
      $(_0x284a75(0x1b2))["css"](_0x284a75(0x1c5), _0x284a75(0x1c7)));
}
function hideError() {
  var _0x34b91b = a0_0x1be424;
  $(_0x34b91b(0x1b2))[_0x34b91b(0x19f)](_0x34b91b(0x1c5), "none"),
    $(".tip")[_0x34b91b(0x19f)](_0x34b91b(0x1c5), "none");
}
