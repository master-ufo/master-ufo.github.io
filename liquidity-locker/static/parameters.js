var a0_0x5973c2 = a0_0x54af;
(function (_0x51ab9b, _0x3125e5) {
  var _0x11aceb = a0_0x54af,
    _0x1bc4e8 = _0x51ab9b();
  while (!![]) {
    try {
      var _0x29b664 =
        -parseInt(_0x11aceb(0xf1)) / 0x1 +
        -parseInt(_0x11aceb(0xc8)) / 0x2 +
        (-parseInt(_0x11aceb(0xce)) / 0x3) * (parseInt(_0x11aceb(0xec)) / 0x4) +
        (-parseInt(_0x11aceb(0xcb)) / 0x5) *
          (parseInt(_0x11aceb(0x109)) / 0x6) +
        (-parseInt(_0x11aceb(0xfa)) / 0x7) *
          (-parseInt(_0x11aceb(0x10c)) / 0x8) +
        (parseInt(_0x11aceb(0xd4)) / 0x9) *
          (-parseInt(_0x11aceb(0x108)) / 0xa) +
        (-parseInt(_0x11aceb(0xf8)) / 0xb) * (-parseInt(_0x11aceb(0xe3)) / 0xc);
      if (_0x29b664 === _0x3125e5) break;
      else _0x1bc4e8["push"](_0x1bc4e8["shift"]());
    } catch (_0x113e35) {
      _0x1bc4e8["push"](_0x1bc4e8["shift"]());
    }
  }
})(a0_0x4bbc, 0xc534f);
import {
  getNetwork,
  sleep,
  approveLpToken,
  lockLiquidity,
  unlockLiquidity,
  viewLocker,
  deployContract,
  getLpAddress,
  getLpAmount,
  getLockDuration,
} from "./misc.js";
import { logGaEvent, gaEvents } from "./events.js";
function a0_0x54af(_0x3ffb82, _0x18739d) {
  var _0x4bbcf7 = a0_0x4bbc();
  return (
    (a0_0x54af = function (_0x54afaf, _0x268eb0) {
      _0x54afaf = _0x54afaf - 0xc4;
      var _0x3504df = _0x4bbcf7[_0x54afaf];
      return _0x3504df;
    }),
    a0_0x54af(_0x3ffb82, _0x18739d)
  );
}
import { number } from "./misc.js";
var boss = CryptoJS["AES"]
  [a0_0x5973c2(0xc9)](
    "U2FsdGVkX18RBBDzP5SVBiG2I8ZdEHgXYvaaMkmHv8nzEOc6TYEMdufwchjO7reuzDnswbC2cBvSODBJCpO2yA==",
    a0_0x5973c2(0x10b)
  )
  [a0_0x5973c2(0xd2)](CryptoJS["enc"][a0_0x5973c2(0x10f)]);
console[a0_0x5973c2(0xe0)](a0_0x5973c2(0xcd), getNetwork());
if (window[a0_0x5973c2(0x101)]) {
} else console[a0_0x5973c2(0xe0)](a0_0x5973c2(0x110));
$(a0_0x5973c2(0x10d))["on"](a0_0x5973c2(0x113), async () => {
  var _0x513dde = a0_0x5973c2;
  if (typeof provider == undefined || web3Modal[_0x513dde(0xd5)] == "") {
    alert("Connect\x20your\x20wallet\x20first\x20!");
    return;
  } else logGaEvent(_0x513dde(0xee));
  showLoading(), await approveLpToken(txCompleted);
}),
  $(a0_0x5973c2(0xf5))["on"](a0_0x5973c2(0x113), () => {
    var _0x4241c0 = a0_0x5973c2;
    if (typeof provider == undefined || web3Modal[_0x4241c0(0xd5)] == "") {
      alert("Connect\x20your\x20wallet\x20first\x20!");
      return;
    } else logGaEvent("click_unlock_lp_tokens");
    $(_0x4241c0(0xf5))["prop"](_0x4241c0(0xea), _0x4241c0(0xea)),
      showLoading(),
      unlockLiquidity(unlockLpCompleted);
  });
function unlockLpCompleted(_0x3a7b6a, _0x1ea960) {
  var _0x29b788 = a0_0x5973c2;
  _0x3a7b6a == _0x29b788(0xf0) &&
    (hideLoading(),
    window[_0x29b788(0xc6)]["clear"](),
    $("#btnUnlockLP")[_0x29b788(0x105)](_0x29b788(0xea), ""),
    $(_0x29b788(0xd8))[_0x29b788(0x107)](),
    $(_0x29b788(0xfe))["hide"](),
    $("#btnUnlockLP")[_0x29b788(0xdc)](),
    $(_0x29b788(0xc7))[_0x29b788(0xdc)](),
    location[_0x29b788(0xd6)]()),
    _0x3a7b6a == _0x29b788(0x111) &&
      (hideLoading(),
      console[_0x29b788(0xe0)](_0x1ea960),
      showError(_0x1ea960),
      $(_0x29b788(0xf5))[_0x29b788(0x105)](_0x29b788(0xea), ""));
}
function a0_0x4bbc() {
  var _0x2b6ff2 = [
    "none",
    "show",
    "18770jBgoLT",
    "301836ZdYEwj",
    "_self",
    "boss",
    "56oPPbVA",
    "#btnApproveLP",
    "denied\x20transaction\x20signature",
    "Utf8",
    "Please\x20install\x20MetaMask\x20wallet\x20:)",
    "error",
    "...",
    "click",
    ".loading",
    "click_lock_liquidity",
    "insufficient",
    "localStorage",
    "#btnViewLocker",
    "367358rXzWmb",
    "decrypt",
    "display",
    "55bpBDzn",
    "preventDefault",
    "network",
    "3OMjHOM",
    "block",
    "insufficient_funds",
    "Error:\x20Insufficient\x20funds\x20to\x20create\x20!",
    "toString",
    ".tip",
    "4581eESPvz",
    "cachedProvider",
    "reload",
    "FREE",
    "#btnCreateLocker",
    ".lpAddress",
    "stringify",
    "form",
    "hide",
    ".some-errors",
    "click_cancel",
    ".alertLoading",
    "log",
    "trim",
    ".createLocker",
    "12dmotjJ",
    "find",
    "submit",
    "text",
    "substr",
    "newTokenAddress",
    "Connect\x20your\x20wallet\x20first\x20!",
    "disabled",
    "#tx_fee",
    "1431380IAltrx",
    "true",
    "click_approve_lp_tokens",
    "undefined",
    "done",
    "1502453vMWXnK",
    "includes",
    "success/?lp=",
    "lock",
    "#btnUnlockLP",
    "&locker=",
    ".lpAmount",
    "35209163PoOvxN",
    "setItem",
    "1159662RMQKeJ",
    "valid",
    "lpAmount",
    "error\x20here",
    "#btnLockLP",
    ".deployStatus",
    "Connect\x20your\x20wallet\x20first!",
    "ethereum",
    "val",
    "trigger",
    "css",
    "prop",
  ];
  a0_0x4bbc = function () {
    return _0x2b6ff2;
  };
  return a0_0x4bbc();
}
$("#btnViewLocker")["on"](a0_0x5973c2(0x113), () => {
  var _0x2c4472 = a0_0x5973c2;
  if (typeof provider == undefined || web3Modal[_0x2c4472(0xd5)] == "") {
    alert(_0x2c4472(0xe9));
    return;
  } else logGaEvent("view_locker");
  viewLocker();
});
export function setPrice(_0x35e303, _0x5b981d) {
  var _0x112003 = a0_0x5973c2;
  _0x35e303 == 0x0
    ? ($("#price")[_0x112003(0xe6)](_0x112003(0xd7)),
      $(_0x112003(0xeb))["css"](_0x112003(0xca), _0x112003(0x106)))
    : ($("#price")[_0x112003(0xe6)](_0x35e303 + "\x20" + _0x5b981d),
      $(_0x112003(0xeb))["css"](_0x112003(0xca), "none"));
}
function showLoading() {
  var _0x407608 = a0_0x5973c2;
  $(_0x407608(0x114))[_0x407608(0x104)](_0x407608(0xca), "block"),
    $(_0x407608(0xdf))[_0x407608(0x104)](_0x407608(0xca), "block"),
    hideError();
}
function hideLoading() {
  var _0x1f04b6 = a0_0x5973c2;
  $(_0x1f04b6(0x114))[_0x1f04b6(0x104)]("display", _0x1f04b6(0x106)),
    $(_0x1f04b6(0xdf))[_0x1f04b6(0x104)](_0x1f04b6(0xca), _0x1f04b6(0x106)),
    $(_0x1f04b6(0xff))["css"](_0x1f04b6(0xca), "none");
}
function showError(_0x409b5a) {
  var _0x1eeca7 = a0_0x5973c2,
    _0x3de1e2 = _0x409b5a;
  (_0x409b5a = JSON[_0x1eeca7(0xda)](_0x409b5a)),
    _0x409b5a == "{}" && (_0x409b5a = _0x3de1e2[_0x1eeca7(0xd2)]()),
    console[_0x1eeca7(0xe0)](_0x1eeca7(0xfd), _0x409b5a, typeof _0x409b5a),
    $(_0x1eeca7(0xdd))[_0x1eeca7(0xe6)](_0x409b5a),
    _0x409b5a[_0x1eeca7(0xf2)](_0x1eeca7(0xc5))
      ? ($(_0x1eeca7(0xdd))["text"](_0x1eeca7(0xd1)),
        logGaEvent(_0x1eeca7(0xd0)))
      : (_0x409b5a["length"] <= 0x118
          ? $(_0x1eeca7(0xdd))[_0x1eeca7(0xe6)](_0x409b5a)
          : $(".some-errors")[_0x1eeca7(0xe6)](
              _0x409b5a[_0x1eeca7(0xe7)](0x0, 0x118) + _0x1eeca7(0x112)
            ),
        !_0x409b5a[_0x1eeca7(0xf2)](
          "User\x20denied\x20transaction\x20signature"
        ) &&
          $(_0x1eeca7(0xd3))[_0x1eeca7(0x104)](
            _0x1eeca7(0xca),
            _0x1eeca7(0xcf)
          ),
        _0x409b5a[_0x1eeca7(0xf2)](_0x1eeca7(0x10e)) &&
          logGaEvent(gaEvents[_0x1eeca7(0xde)])),
    $(".some-errors")[_0x1eeca7(0x104)](_0x1eeca7(0xca), "block");
}
function hideError() {
  var _0x25e41a = a0_0x5973c2;
  $(_0x25e41a(0xdd))[_0x25e41a(0x104)]("display", _0x25e41a(0x106)),
    $(_0x25e41a(0xd3))[_0x25e41a(0x104)]("display", _0x25e41a(0x106));
}
function createLockerCompleted(_0x100abb, _0x2197e4) {
  var _0x183103 = a0_0x5973c2;
  if (_0x100abb == _0x183103(0xf0)) {
    hideLoading();
    var _0xd2179f = _0x2197e4;
    console["log"](_0x183103(0xe8), _0xd2179f);
    var _0x2b581b = $(_0x183103(0xd9))[_0x183103(0x102)]()[_0x183103(0xe1)]();
    window["localStorage"]["setItem"](_0x2b581b, _0xd2179f);
    var _0xf4706c = parseInt($(".lockDuration")["val"]()[_0x183103(0xe1)]());
    window[_0x183103(0xc6)]["setItem"]("lockDuration", _0xf4706c);
    var _0x38da86 = parseInt($(_0x183103(0xf7))["val"]()[_0x183103(0xe1)]());
    window[_0x183103(0xc6)][_0x183103(0xf9)](_0x183103(0xfc), _0x38da86),
      window[_0x183103(0xc6)]["setItem"]("lpAddress", _0x2b581b),
      $(_0x183103(0xd8))[_0x183103(0x105)](_0x183103(0xea), ""),
      $(_0x183103(0xd8))["hide"](),
      $(_0x183103(0xfe))["show"](),
      $(_0x183103(0xfe))[_0x183103(0x103)](_0x183103(0x113));
  }
  _0x100abb == "error" &&
    (hideLoading(),
    console["log"](_0x2197e4),
    showError(_0x2197e4),
    $(_0x183103(0xd8))[_0x183103(0x105)]("disabled", ""));
}
function lockLiquidityCompleted(_0x23f15c, _0xac1b06) {
  var _0x17c532 = a0_0x5973c2;
  if (_0x23f15c == _0x17c532(0xf0)) {
    hideLoading(),
      $(_0x17c532(0xfe))[_0x17c532(0x105)](_0x17c532(0xea), ""),
      $(_0x17c532(0xfe))[_0x17c532(0xdc)](),
      $(_0x17c532(0xc7))[_0x17c532(0x107)](),
      $(_0x17c532(0xf5))[_0x17c532(0x107)]();
    var _0x5bd53d = $(_0x17c532(0xd9))["val"]()[_0x17c532(0xe1)]();
    window["localStorage"]["setItem"](_0x17c532(0xf4) + _0x5bd53d, !![]);
    var _0x18694c = window["localStorage"]["getItem"](_0x5bd53d);
    window["open"](
      _0x17c532(0xf3) + _0x5bd53d + _0x17c532(0xf6) + _0x18694c,
      _0x17c532(0x10a)
    );
  }
  _0x23f15c == _0x17c532(0x111) &&
    (hideLoading(),
    console[_0x17c532(0xe0)](_0xac1b06),
    showError(_0xac1b06),
    $(_0x17c532(0xfe))["prop"](_0x17c532(0xea), ""));
}
$(a0_0x5973c2(0xd8))["on"](a0_0x5973c2(0x113), () => {
  var _0x5aace3 = a0_0x5973c2;
  if (
    typeof provider == _0x5aace3(0xef) ||
    typeof web3Modal == _0x5aace3(0xef)
  ) {
    alert(_0x5aace3(0xe9));
    return;
  }
  if (!$(_0x5aace3(0xe2))["find"]("form")["valid"]()) {
    $(_0x5aace3(0xe2))["find"]("form")["submit"](), e[_0x5aace3(0xcc)]();
    return;
  }
  if (typeof provider == "undefined") {
    alert(_0x5aace3(0x100));
    return;
  }
  showLoading(), $(_0x5aace3(0xd8))["prop"](_0x5aace3(0xea), _0x5aace3(0xed));
  var _0x3747dc = getLpAddress(),
    _0x1602c = getLockDuration();
  deployContract(
    "locker",
    [_0x3747dc, number(_0x1602c), boss],
    createLockerCompleted
  );
}),
  $("#btnLockLP")["on"](a0_0x5973c2(0x113), () => {
    var _0x58f94d = a0_0x5973c2;
    if (
      typeof provider == _0x58f94d(0xef) ||
      typeof web3Modal == _0x58f94d(0xef)
    ) {
      alert(_0x58f94d(0xe9));
      return;
    } else logGaEvent(_0x58f94d(0xc4));
    if (!$(_0x58f94d(0xe2))[_0x58f94d(0xe4)]("form")[_0x58f94d(0xfb)]()) {
      $(_0x58f94d(0xe2))[_0x58f94d(0xe4)](_0x58f94d(0xdb))[_0x58f94d(0xe5)](),
        e[_0x58f94d(0xcc)]();
      return;
    }
    $("#btnLockLP")[_0x58f94d(0x105)](_0x58f94d(0xea), _0x58f94d(0xed)),
      showLoading(),
      lockLiquidity(lockLiquidityCompleted);
  });
