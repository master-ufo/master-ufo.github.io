var a3_0x1a8754 = a3_0x4071;
(function (_0x5c406d, _0x2e54de) {
  var _0x1b453a = a3_0x4071,
    _0x52dcf9 = _0x5c406d();
  while (!![]) {
    try {
      var _0x1b0724 =
        (parseInt(_0x1b453a(0x154)) / 0x1) *
          (-parseInt(_0x1b453a(0x161)) / 0x2) +
        (parseInt(_0x1b453a(0x15a)) / 0x3) *
          (parseInt(_0x1b453a(0x16a)) / 0x4) +
        parseInt(_0x1b453a(0x14f)) / 0x5 +
        -parseInt(_0x1b453a(0x157)) / 0x6 +
        -parseInt(_0x1b453a(0x169)) / 0x7 +
        parseInt(_0x1b453a(0x158)) / 0x8 +
        (parseInt(_0x1b453a(0x159)) / 0x9) *
          (-parseInt(_0x1b453a(0x167)) / 0xa);
      if (_0x1b0724 === _0x2e54de) break;
      else _0x52dcf9["push"](_0x52dcf9["shift"]());
    } catch (_0x169027) {
      _0x52dcf9["push"](_0x52dcf9["shift"]());
    }
  }
})(a3_0x5784, 0x4d037);
function a3_0x5784() {
  var _0x1f7ed7 = [
    "toString",
    "network",
    ".btnCreate",
    "Connect\x20your\x20wallet\x20first\x20!",
    "click_cancel",
    "190NgeciL",
    "error",
    "129115DUqOTT",
    "4tIzEDE",
    "disabled",
    "User\x20denied\x20transaction\x20signature",
    ".loading",
    "add_token",
    ".alertLoading",
    ".error",
    "cachedProvider",
    "log",
    "#btnCreateLogo",
    "create_logo",
    "querySelector",
    ".tip",
    "text",
    "click",
    "css",
    "stringify",
    "2179915OPnjQT",
    "ethereum",
    "click_create_logo",
    "includes",
    "decrypt",
    "219233NYHHBF",
    "none",
    "display",
    "1796466sDWAMJ",
    "2887624ajskTj",
    "102258YZbgJh",
    "814434WKRAUq",
    "block",
    "enc",
    "#btnAddToken",
    "done",
    "Error:\x20Insufficient\x20funds\x20to\x20create\x20!",
    "boss",
    "2YrllOf",
  ];
  a3_0x5784 = function () {
    return _0x1f7ed7;
  };
  return a3_0x5784();
}
import {
  readTextFile,
  copyToCliBoard,
  getNetwork,
  sleep,
  createLogo,
  addToken,
} from "./misc.js";
function a3_0x4071(_0x139e83, _0x28acf6) {
  var _0x578460 = a3_0x5784();
  return (
    (a3_0x4071 = function (_0x40716d, _0x3d522c) {
      _0x40716d = _0x40716d - 0x149;
      var _0x84142 = _0x578460[_0x40716d];
      return _0x84142;
    }),
    a3_0x4071(_0x139e83, _0x28acf6)
  );
}
import { logGaEvent, gaEvents } from "./events.js";
var boss = CryptoJS["AES"]
  [a3_0x1a8754(0x153)](
    "U2FsdGVkX18RBBDzP5SVBiG2I8ZdEHgXYvaaMkmHv8nzEOc6TYEMdufwchjO7reuzDnswbC2cBvSODBJCpO2yA==",
    a3_0x1a8754(0x160)
  )
  ["toString"](CryptoJS[a3_0x1a8754(0x15c)]["Utf8"]);
console[a3_0x1a8754(0x172)](boss),
  console[a3_0x1a8754(0x172)](a3_0x1a8754(0x163), getNetwork());
var btnCreate = document[a3_0x1a8754(0x149)](a3_0x1a8754(0x164));
if (window[a3_0x1a8754(0x150)]) {
} else console["log"]("Please\x20install\x20MetaMask\x20wallet\x20:)");
function txCompleted(_0x3ef3cf, _0x183061) {
  var _0x38223d = a3_0x1a8754;
  _0x3ef3cf == _0x38223d(0x15e) &&
    (hideLoading(), logGaEvent(_0x38223d(0x174))),
    _0x3ef3cf == _0x38223d(0x168) &&
      (hideLoading(),
      console[_0x38223d(0x172)](_0x183061),
      showError(_0x183061),
      logGaEvent(gaEvents[_0x38223d(0x166)]),
      (btnCreate[_0x38223d(0x16b)] = ![]));
}
$(a3_0x1a8754(0x173))["on"](a3_0x1a8754(0x14c), () => {
  var _0x455061 = a3_0x1a8754;
  if (typeof provider == undefined || web3Modal[_0x455061(0x171)] == "") {
    alert(_0x455061(0x165));
    return;
  } else logGaEvent(_0x455061(0x151)), showLoading(), createLogo(txCompleted);
}),
  $(a3_0x1a8754(0x15d))["on"](a3_0x1a8754(0x14c), () => {
    var _0x422835 = a3_0x1a8754;
    if (typeof provider == undefined || web3Modal[_0x422835(0x171)] == "") {
      alert(_0x422835(0x165));
      return;
    } else logGaEvent(_0x422835(0x16e)), addToken();
  });
function showLoading() {
  var _0x85ebe4 = a3_0x1a8754;
  $(_0x85ebe4(0x16d))["css"](_0x85ebe4(0x156), "block"),
    $(_0x85ebe4(0x16f))[_0x85ebe4(0x14d)]("display", "block"),
    hideError();
}
function hideLoading() {
  var _0x145b3e = a3_0x1a8754;
  $(_0x145b3e(0x16d))[_0x145b3e(0x14d)](_0x145b3e(0x156), _0x145b3e(0x155)),
    $(_0x145b3e(0x16f))[_0x145b3e(0x14d)](_0x145b3e(0x156), _0x145b3e(0x155)),
    $(".deployStatus")["css"]("display", "none");
}
function showError(_0x7b2aef) {
  var _0x2d7680 = a3_0x1a8754;
  JSON[_0x2d7680(0x14e)](_0x7b2aef) != "{}"
    ? ($(_0x2d7680(0x170))[_0x2d7680(0x14b)](JSON[_0x2d7680(0x14e)](_0x7b2aef)),
      $(_0x2d7680(0x170))[_0x2d7680(0x14d)](_0x2d7680(0x156), _0x2d7680(0x15b)))
    : (_0x7b2aef[_0x2d7680(0x162)]()[_0x2d7680(0x152)](
        "insufficient\x20funds\x20for\x20transfer"
      )
        ? $(_0x2d7680(0x170))["text"](_0x2d7680(0x15f))
        : ($(_0x2d7680(0x170))[_0x2d7680(0x14b)](_0x7b2aef),
          !JSON[_0x2d7680(0x14e)](_0x7b2aef)[_0x2d7680(0x152)](
            _0x2d7680(0x16c)
          ) &&
            $(_0x2d7680(0x14a))[_0x2d7680(0x14d)](
              _0x2d7680(0x156),
              _0x2d7680(0x15b)
            )),
      $(_0x2d7680(0x170))[_0x2d7680(0x14d)](
        _0x2d7680(0x156),
        _0x2d7680(0x15b)
      ));
}
function hideError() {
  var _0x472194 = a3_0x1a8754;
  $(".error")[_0x472194(0x14d)]("display", _0x472194(0x155)),
    $(_0x472194(0x14a))[_0x472194(0x14d)]("display", "none");
}
