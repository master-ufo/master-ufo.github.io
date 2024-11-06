var a0_0x23a3f8 = a0_0x15b1;
(function (_0x119f4c, _0x38a3d4) {
  var _0x4d633d = a0_0x15b1,
    _0x5bca57 = _0x119f4c();
  while (!![]) {
    try {
      var _0x448d53 =
        (parseInt(_0x4d633d(0x1f5)) / 0x1) *
          (parseInt(_0x4d633d(0x1e4)) / 0x2) +
        parseInt(_0x4d633d(0x1ef)) / 0x3 +
        -parseInt(_0x4d633d(0x20d)) / 0x4 +
        (parseInt(_0x4d633d(0x205)) / 0x5) *
          (-parseInt(_0x4d633d(0x22a)) / 0x6) +
        (parseInt(_0x4d633d(0x1e3)) / 0x7) *
          (-parseInt(_0x4d633d(0x224)) / 0x8) +
        (-parseInt(_0x4d633d(0x20a)) / 0x9) *
          (parseInt(_0x4d633d(0x228)) / 0xa) +
        (-parseInt(_0x4d633d(0x1f7)) / 0xb) *
          (-parseInt(_0x4d633d(0x1eb)) / 0xc);
      if (_0x448d53 === _0x38a3d4) break;
      else _0x5bca57["push"](_0x5bca57["shift"]());
    } catch (_0x58a393) {
      _0x5bca57["push"](_0x5bca57["shift"]());
    }
  }
})(a0_0x108c, 0xc548f);
import {
  getNetwork,
  sleep,
  lockLiquidity,
  unlockLiquidity,
  viewLocker,
  deployContract,
  getAddress,
  getAmount,
  getLockDuration,
  getLockAddress,
  setLockStatus,
  setUnlockStatus,
  setNewLockAddr,
  showExcludeAddrWarning,
} from "./misc.js";
import { logGaEvent, gaEvents } from "./events.js";
import { number } from "./misc.js";
var boss = CryptoJS[a0_0x23a3f8(0x219)]
  [a0_0x23a3f8(0x1ff)](a0_0x23a3f8(0x22b), a0_0x23a3f8(0x206))
  [a0_0x23a3f8(0x1fa)](CryptoJS[a0_0x23a3f8(0x204)][a0_0x23a3f8(0x1f1)]);
console[a0_0x23a3f8(0x1f9)](a0_0x23a3f8(0x22c), getNetwork());
if (window["ethereum"]) {
} else console[a0_0x23a3f8(0x1f9)](a0_0x23a3f8(0x20b));
$(a0_0x23a3f8(0x211))["on"](a0_0x23a3f8(0x225), () => {
  var _0x2726f9 = a0_0x23a3f8;
  if (typeof provider == undefined || web3Modal[_0x2726f9(0x21e)] == "") {
    alert(_0x2726f9(0x227));
    return;
  } else logGaEvent("click_unlock");
  $("#btnUnlock")["prop"](_0x2726f9(0x214), "disabled"),
    showLoading(),
    unlockLiquidity(unlockLpCompleted);
});
function a0_0x15b1(_0x3b3716, _0x16ea7e) {
  var _0x108c69 = a0_0x108c();
  return (
    (a0_0x15b1 = function (_0x15b1ee, _0x5612e1) {
      _0x15b1ee = _0x15b1ee - 0x1e1;
      var _0x4e7055 = _0x108c69[_0x15b1ee];
      return _0x4e7055;
    }),
    a0_0x15b1(_0x3b3716, _0x16ea7e)
  );
}
async function unlockLpCompleted(_0x3240c1, _0x1766ef) {
  var _0x192f32 = a0_0x23a3f8;
  if (_0x3240c1 == _0x192f32(0x1fd)) {
    hideLoading();
    var _0x474797 = getAddress();
    await setUnlockStatus(_0x474797),
      $(_0x192f32(0x211))[_0x192f32(0x215)](_0x192f32(0x214), ""),
      $("#btnCreateLocker")[_0x192f32(0x213)](),
      $(_0x192f32(0x1f4))["hide"](),
      $("#btnUnlock")[_0x192f32(0x20c)](),
      $("#btnViewLocker")[_0x192f32(0x20c)](),
      location[_0x192f32(0x202)]();
  }
  _0x3240c1 == _0x192f32(0x21d) &&
    (hideLoading(),
    console[_0x192f32(0x1f9)](_0x1766ef),
    showError(_0x1766ef),
    $(_0x192f32(0x211))["prop"](_0x192f32(0x214), ""));
}
$(a0_0x23a3f8(0x1f2))["on"](a0_0x23a3f8(0x225), () => {
  var _0x19f006 = a0_0x23a3f8;
  if (typeof provider == undefined || web3Modal[_0x19f006(0x21e)] == "") {
    alert(_0x19f006(0x227));
    return;
  } else logGaEvent("view_locker");
  viewLocker();
});
export function setPrice(_0x40f3ba, _0x494f9f) {
  var _0x3037d8 = a0_0x23a3f8;
  _0x40f3ba == 0x0
    ? ($(_0x3037d8(0x1ed))[_0x3037d8(0x21a)](_0x3037d8(0x222)),
      $("#tx_fee")["css"](_0x3037d8(0x20e), _0x3037d8(0x21b)))
    : ($(_0x3037d8(0x1ed))[_0x3037d8(0x21a)](_0x40f3ba + "\x20" + _0x494f9f),
      $(_0x3037d8(0x1ec))[_0x3037d8(0x1ea)](
        _0x3037d8(0x20e),
        _0x3037d8(0x21b)
      ));
}
function showLoading() {
  var _0x5121c7 = a0_0x23a3f8;
  $(_0x5121c7(0x208))["css"]("display", _0x5121c7(0x220)),
    $(_0x5121c7(0x212))["css"]("display", _0x5121c7(0x220)),
    hideError();
}
function hideLoading() {
  var _0x12fd8e = a0_0x23a3f8;
  $(_0x12fd8e(0x208))[_0x12fd8e(0x1ea)](_0x12fd8e(0x20e), "none"),
    $(".alertLoading")[_0x12fd8e(0x1ea)](_0x12fd8e(0x20e), "none"),
    $(_0x12fd8e(0x209))[_0x12fd8e(0x1ea)]("display", _0x12fd8e(0x21b));
}
function showError(_0x292988) {
  var _0x57ba50 = a0_0x23a3f8,
    _0x557785 = _0x292988;
  (_0x292988 = JSON[_0x57ba50(0x1e2)](_0x292988)),
    _0x292988 == "{}" && (_0x292988 = _0x557785[_0x57ba50(0x1fa)]()),
    console[_0x57ba50(0x1f9)]("error\x20here", _0x292988, typeof _0x292988),
    $(".some-errors")["text"](_0x292988),
    _0x292988[_0x57ba50(0x1e8)](_0x57ba50(0x20f))
      ? ($(_0x57ba50(0x1e6))[_0x57ba50(0x21a)](_0x57ba50(0x229)),
        logGaEvent(_0x57ba50(0x207)))
      : (_0x292988[_0x57ba50(0x1fe)] <= 0x118
          ? $(_0x57ba50(0x1e6))[_0x57ba50(0x21a)](_0x292988)
          : $(_0x57ba50(0x1e6))["text"](
              _0x292988[_0x57ba50(0x217)](0x0, 0x118) + _0x57ba50(0x1f3)
            ),
        !_0x292988[_0x57ba50(0x1e8)](_0x57ba50(0x218)) &&
          $(".tip")[_0x57ba50(0x1ea)](_0x57ba50(0x20e), "block"),
        _0x292988[_0x57ba50(0x1e8)](_0x57ba50(0x200)) &&
          logGaEvent(gaEvents[_0x57ba50(0x1ee)])),
    $(".some-errors")["css"](_0x57ba50(0x20e), _0x57ba50(0x220));
}
function hideError() {
  var _0x3dd15f = a0_0x23a3f8;
  $(_0x3dd15f(0x1e6))[_0x3dd15f(0x1ea)](_0x3dd15f(0x20e), _0x3dd15f(0x21b)),
    $(_0x3dd15f(0x1fc))[_0x3dd15f(0x1ea)](_0x3dd15f(0x20e), _0x3dd15f(0x21b));
}
async function createLockerCompleted(_0x303037, _0x575b81) {
  var _0x1017b9 = a0_0x23a3f8;
  if (_0x303037 == _0x1017b9(0x1fd)) {
    hideLoading();
    var _0x532fc8 = _0x575b81,
      _0x817f47 = _0x575b81;
    console[_0x1017b9(0x1f9)]("newTokenAddress", _0x817f47);
    var _0x42890f = getAddress(),
      _0x1e6fc6 = parseInt($(_0x1017b9(0x221))["val"]()[_0x1017b9(0x203)]());
    _0x1e6fc6 = _0x1e6fc6[_0x1017b9(0x1f6)](_0x1017b9(0x1e7), {
      useGrouping: ![],
    });
    var _0x174122 = parseInt($(".amount")["val"]()["trim"]());
    (_0x174122 = _0x174122["toLocaleString"](_0x1017b9(0x1e7), {
      useGrouping: ![],
    })),
      await setNewLockAddr(
        _0x42890f,
        {
          lockAddress: _0x532fc8,
          amount: _0x174122,
          lockDuration: _0x1e6fc6,
          lock: ![],
          unlock: ![],
          network: currentNetworkId,
        },
        function () {
          var _0x1d1ccf = _0x1017b9;
          $(_0x1d1ccf(0x21f))[_0x1d1ccf(0x215)](_0x1d1ccf(0x214), ""),
            $(_0x1d1ccf(0x21f))[_0x1d1ccf(0x20c)](),
            $(_0x1d1ccf(0x1f4))[_0x1d1ccf(0x213)](),
            $(_0x1d1ccf(0x1f4))[_0x1d1ccf(0x1e9)]("click"),
            showExcludeAddrWarning(_0x532fc8);
        }
      );
  }
  _0x303037 == _0x1017b9(0x21d) &&
    (hideLoading(),
    console[_0x1017b9(0x1f9)](_0x575b81),
    showError(_0x575b81),
    $("#btnCreateLocker")[_0x1017b9(0x215)](_0x1017b9(0x214), ""));
}
function a0_0x108c() {
  var _0x5141e0 = [
    "AES",
    "text",
    "none",
    "Connect\x20your\x20wallet\x20first!",
    "error",
    "cachedProvider",
    "#btnCreateLocker",
    "block",
    ".lockDuration",
    "FREE",
    "click_lock_liquidity",
    "29152CclEJy",
    "click",
    "find",
    "Connect\x20your\x20wallet\x20first\x20!",
    "10rKWYhe",
    "Error:\x20Insufficient\x20funds\x20to\x20create\x20!",
    "6agQAGs",
    "U2FsdGVkX18RBBDzP5SVBiG2I8ZdEHgXYvaaMkmHv8nzEOc6TYEMdufwchjO7reuzDnswbC2cBvSODBJCpO2yA==",
    "network",
    "open",
    "submit",
    "stringify",
    "77xeZViw",
    "22tDyXAR",
    "lock_lp",
    ".some-errors",
    "fullwide",
    "includes",
    "trigger",
    "css",
    "12JpNtgM",
    "#tx_fee",
    "#price",
    "click_cancel",
    "2424603iPwCKx",
    ".createLocker",
    "Utf8",
    "#btnViewLocker",
    "...",
    "#btnLock",
    "51355IHCEFn",
    "toLocaleString",
    "24773089ipWUPs",
    "form",
    "log",
    "toString",
    "undefined",
    ".tip",
    "done",
    "length",
    "decrypt",
    "denied\x20transaction\x20signature",
    "valid",
    "reload",
    "trim",
    "enc",
    "6145670ZXJMpa",
    "boss",
    "insufficient_funds",
    ".loading",
    ".deployStatus",
    "10021815yCHcWk",
    "Please\x20install\x20MetaMask\x20wallet\x20:)",
    "hide",
    "1737492bhEjUs",
    "display",
    "insufficient",
    "true",
    "#btnUnlock",
    ".alertLoading",
    "show",
    "disabled",
    "prop",
    "_self",
    "substr",
    "User\x20denied\x20transaction\x20signature",
  ];
  a0_0x108c = function () {
    return _0x5141e0;
  };
  return a0_0x108c();
}
async function lockLiquidityCompleted(_0x282712, _0x193ef9) {
  var _0x5aa706 = a0_0x23a3f8;
  if (_0x282712 == _0x5aa706(0x1fd)) {
    logGaEvent(_0x5aa706(0x1e5)),
      hideLoading(),
      $(_0x5aa706(0x1f4))[_0x5aa706(0x215)](_0x5aa706(0x214), ""),
      $(_0x5aa706(0x1f4))[_0x5aa706(0x20c)](),
      $(_0x5aa706(0x1f2))[_0x5aa706(0x213)](),
      $("#btnUnlock")[_0x5aa706(0x213)]();
    var _0x1778f5 = getAddress();
    await setLockStatus(_0x1778f5);
    var _0x5ae851 = await getLockAddress(_0x1778f5);
    window[_0x5aa706(0x22d)](
      "success/?address=" + _0x1778f5 + "&locker=" + _0x5ae851,
      _0x5aa706(0x216)
    );
  }
  _0x282712 == _0x5aa706(0x21d) &&
    (hideLoading(),
    console[_0x5aa706(0x1f9)](_0x193ef9),
    showError(_0x193ef9),
    $(_0x5aa706(0x1f4))[_0x5aa706(0x215)](_0x5aa706(0x214), ""));
}
$(a0_0x23a3f8(0x21f))["on"](a0_0x23a3f8(0x225), async () => {
  var _0x385cb5 = a0_0x23a3f8;
  if (
    typeof provider == _0x385cb5(0x1fb) ||
    typeof web3Modal == _0x385cb5(0x1fb)
  ) {
    alert(_0x385cb5(0x227));
    return;
  }
  if (
    !$(_0x385cb5(0x1f0))[_0x385cb5(0x226)](_0x385cb5(0x1f8))[_0x385cb5(0x201)]()
  ) {
    $(_0x385cb5(0x1f0))[_0x385cb5(0x226)](_0x385cb5(0x1f8))[_0x385cb5(0x1e1)](),
      e["preventDefault"]();
    return;
  }
  if (typeof provider == "undefined") {
    alert(_0x385cb5(0x21c));
    return;
  }
  showLoading(),
    $(_0x385cb5(0x21f))[_0x385cb5(0x215)]("disabled", _0x385cb5(0x210));
  var _0x10ae1e = getAddress(),
    _0x8081b0 = getLockDuration();
  deployContract(
    "locker",
    [_0x10ae1e, number(_0x8081b0), boss],
    createLockerCompleted
  );
}),
  $(a0_0x23a3f8(0x1f4))["on"]("click", async () => {
    var _0x267bc0 = a0_0x23a3f8;
    if (
      typeof provider == _0x267bc0(0x1fb) ||
      typeof web3Modal == _0x267bc0(0x1fb)
    ) {
      alert(_0x267bc0(0x227));
      return;
    } else logGaEvent(_0x267bc0(0x223));
    if (!$(_0x267bc0(0x1f0))[_0x267bc0(0x226)]("form")[_0x267bc0(0x201)]()) {
      $(_0x267bc0(0x1f0))["find"](_0x267bc0(0x1f8))[_0x267bc0(0x1e1)](),
        e["preventDefault"]();
      return;
    }
    $(_0x267bc0(0x1f4))["prop"]("disabled", _0x267bc0(0x210)),
      showLoading(),
      await lockLiquidity(lockLiquidityCompleted);
  });
