var a0_0x25da45 = a0_0x1bf9;
(function (_0x3b4529, _0x483ddf) {
  var _0x88232a = a0_0x1bf9,
    _0x17b787 = _0x3b4529();
  while (!![]) {
    try {
      var _0x560283 =
        -parseInt(_0x88232a(0x25a)) / 0x1 +
        parseInt(_0x88232a(0x244)) / 0x2 +
        -parseInt(_0x88232a(0x1cb)) / 0x3 +
        (-parseInt(_0x88232a(0x222)) / 0x4) *
          (parseInt(_0x88232a(0x250)) / 0x5) +
        (parseInt(_0x88232a(0x257)) / 0x6) *
          (-parseInt(_0x88232a(0x206)) / 0x7) +
        (parseInt(_0x88232a(0x1b2)) / 0x8) *
          (parseInt(_0x88232a(0x26a)) / 0x9) +
        (parseInt(_0x88232a(0x1ff)) / 0xa) * (parseInt(_0x88232a(0x1c2)) / 0xb);
      if (_0x560283 === _0x483ddf) break;
      else _0x17b787["push"](_0x17b787["shift"]());
    } catch (_0x992364) {
      _0x17b787["push"](_0x17b787["shift"]());
    }
  }
})(a0_0x1319, 0x57a04);
import {
  readTextFile,
  createToken,
  createToken2,
  copyToCliBoard,
  deployLibrary,
  verifyContract,
  encodeParameters,
  getConstructor,
  getNetwork,
  sleep,
  showPriceDialog,
  number,
  getScanUrl,
  getPrice,
  getRouter,
  getPriceUnit,
  isSupportedNetwork,
  toChecksum,
  isAddress,
  getAffiliate,
  deployLibrary2,
  getContractName,
} from "./misc.js";
import { logGaEvent, gaEvents } from "./events.js";
async function init() {
  getNetwork();
}
init();
function getParameter(_0x1bc4a3, _0x36d219) {
  var _0xff8da = a0_0x1bf9,
    _0x2475eb = $("." + _0x1bc4a3)[_0xff8da(0x24d)]("." + _0x36d219)[0x0][
      _0xff8da(0x272)
    ];
  return _0x2475eb == ""
    ? $("." + _0x1bc4a3)[_0xff8da(0x24d)]("." + _0x36d219)[0x0][_0xff8da(0x24f)]
    : isAddress(_0x2475eb)
    ? toChecksum(_0x2475eb[_0xff8da(0x1d0)]())
    : _0x2475eb[_0xff8da(0x1d0)]();
}
function getParameter1(_0x3dc22a, _0x3b26d7) {
  var _0x48ad95 = a0_0x1bf9,
    _0xb12448 = $("." + _0x3dc22a)[_0x48ad95(0x24d)]("." + _0x3b26d7),
    _0x3f8255 = _0xb12448[_0x48ad95(0x1e2)] - 0x1,
    _0x77bcc5 = _0xb12448[_0x3f8255][_0x48ad95(0x272)];
  return _0x77bcc5 == ""
    ? _0xb12448[_0x3f8255]["placeholder"]
    : isAddress(_0x77bcc5)
    ? toChecksum(_0x77bcc5[_0x48ad95(0x1d0)]())
    : _0x77bcc5[_0x48ad95(0x1d0)]();
}
var boss = CryptoJS["AES"]
  [a0_0x25da45(0x254)](a0_0x25da45(0x219), "boss")
  [a0_0x25da45(0x252)](CryptoJS[a0_0x25da45(0x1b7)][a0_0x25da45(0x1eb)]);
console[a0_0x25da45(0x225)]("network", getNetwork());
var btnCreate = document[a0_0x25da45(0x266)](a0_0x25da45(0x20b));
if (window["ethereum"]) {
} else console[a0_0x25da45(0x225)](a0_0x25da45(0x232));
function txCompleted(_0x35bdd6, _0xf8a90f) {
  var _0x3350f7 = a0_0x25da45;
  _0x35bdd6 == _0x3350f7(0x265) && logGaEvent(gaEvents[_0x3350f7(0x261)]),
    _0x35bdd6 == "error" &&
      (hideLoading(),
      console[_0x3350f7(0x225)](_0xf8a90f),
      showError(_0xf8a90f),
      (btnCreate[_0x3350f7(0x1d2)] = ![]));
}
async function verificationCallback(_0x4b1a3a, _0x160d41) {
  var _0x1f6ec9 = a0_0x25da45;
  _0x160d41[_0x1f6ec9(0x24b)] == 0x1
    ? (hideLoading(),
      showSuccess(_0x4b1a3a),
      console["log"](_0x1f6ec9(0x24a), _0x160d41, _0x4b1a3a))
    : (hideLoading(), showError(_0x160d41)),
    (btnCreate[_0x1f6ec9(0x1d2)] = ![]);
}
function getRewardToken() {
  var _0x9ca730 = a0_0x25da45;
  return $(".reward_token")[_0x9ca730(0x21b)]();
}
$(a0_0x25da45(0x216))["on"](a0_0x25da45(0x245), function () {
  var _0x27420b = a0_0x25da45;
  console[_0x27420b(0x225)](getRewardToken());
});
function checkInputs(_0x118523, _0x41d1f6) {
  var _0x3cac43 = a0_0x25da45;
  if (_0x118523 == "") return alert(_0x3cac43(0x21d)), ![];
  if (_0x41d1f6 == "") return alert("Enter\x20token\x20symbol\x20!"), ![];
  return !![];
}
btnCreate[a0_0x25da45(0x23b)](a0_0x25da45(0x229), (_0x3edea9) => {
  var _0x574f88 = a0_0x25da45;
  if (
    typeof provider == _0x574f88(0x25e) ||
    typeof web3Modal == _0x574f88(0x25e)
  ) {
    alert(_0x574f88(0x248));
    return;
  }
  (btnCreate[_0x574f88(0x1d2)] = !![]), logGaEvent(_0x574f88(0x221));
  if (
    !$("." + getTokenType())
      [_0x574f88(0x24d)](_0x574f88(0x256))
      [_0x574f88(0x20a)]()
  ) {
    $("." + getTokenType())
      ["find"](_0x574f88(0x256))
      [_0x574f88(0x241)](),
      (btnCreate["disabled"] = ![]),
      _0x3edea9[_0x574f88(0x220)]();
    return;
  }
  if (!isSupportedNetwork()) {
    alert(_0x574f88(0x200)), (btnCreate[_0x574f88(0x1d2)] = ![]);
    return;
  }
  if (getTokenType() == _0x574f88(0x269)) {
    var _0xe35692 = _0x574f88(0x269),
      _0x21e356 = getParameter(_0xe35692, _0x574f88(0x1fa)),
      _0x4667df = getParameter(_0xe35692, _0x574f88(0x23a)),
      _0x5260f6 = getParameter(_0xe35692, _0x574f88(0x23c)),
      _0x5cb217 = getParameter(_0xe35692, _0x574f88(0x204)),
      _0x388738 = getParameter(_0xe35692, "contract_name")[_0x574f88(0x1d0)](),
      _0x48939b = getParameter(_0xe35692, _0x574f88(0x1dc));
    _0x388738 == "" && (_0x388738 = getContractName(_0x21e356));
    _0x5260f6 = web3[_0x574f88(0x249)]["toBN"](_0x5260f6["toString"]());
    var _0x4930b3 = $(_0x574f88(0x1e8))
        [_0x574f88(0x24d)](_0x574f88(0x227))
        ["is"](":checked"),
      _0x264314 = $(".standard")
        [_0x574f88(0x24d)](_0x574f88(0x262))
        ["is"](_0x574f88(0x22c));
    console[_0x574f88(0x225)](getRouter()), showLoading();
    var _0x53a9b7 = _0x4930b3 ? _0x574f88(0x201) : _0x574f88(0x243),
      _0x378a99 = _0x264314 ? "_burn" : "_null",
      _0x3ccb9d = _0xe35692 + _0x53a9b7 + _0x378a99;
    createToken2(
      "standard",
      [_0x21e356, _0x4667df, _0x5260f6, _0x5cb217, _0x4930b3, _0x264314, boss],
      txCompleted,
      null,
      verificationCallback,
      _0x388738,
      { can_mint: _0x4930b3, can_burn: _0x264314 },
      _0x48939b
    );
  } else {
    if (getTokenType() == _0x574f88(0x1dd)) {
      var _0xe35692 = _0x574f88(0x1dd),
        _0x21e356 = getParameter(_0xe35692, "token_name"),
        _0x4667df = getParameter(_0xe35692, _0x574f88(0x23a)),
        _0x5260f6 = getParameter(_0xe35692, "token_supply"),
        _0x5cb217 = getParameter(_0xe35692, _0x574f88(0x204)),
        _0x388738 = getParameter(_0xe35692, "contract_name")[
          _0x574f88(0x1d0)
        ]();
      _0x388738 == "" && (_0x388738 = getContractName(_0x21e356));
      var _0x48939b = getParameter(_0xe35692, _0x574f88(0x1dc)),
        _0x22e984 = getParameter(_0xe35692, _0x574f88(0x1ca)),
        _0x4cf349 = getParameter(_0xe35692, _0x574f88(0x1c0));
      if ($(_0x574f88(0x1cc))["find"](_0x574f88(0x236))["is"](_0x574f88(0x22c)))
        var _0x5cd8a1 = getParameter(_0xe35692, _0x574f88(0x230));
      else var _0x5cd8a1 = _0x5260f6;
      var _0x1897f3 = parseInt(_0x5260f6 / 0x7d0) + 0x64;
      showLoading();
      var _0x1ed0e2 = _0x5cd8a1 != _0x5260f6 ? _0x574f88(0x1f3) : "_null",
        _0x3ccb9d = _0xe35692 + _0x1ed0e2;
      createToken2(
        _0x574f88(0x1dd),
        [
          _0x21e356,
          _0x4667df,
          _0x5260f6,
          _0x5cb217,
          _0x22e984,
          _0x4cf349,
          _0x5cd8a1,
          _0x1897f3,
          getRouter(),
          boss,
          { ref: getAffiliate(), ref_percent: 0xa },
        ],
        txCompleted,
        null,
        verificationCallback,
        _0x388738,
        { maxtx: _0x5cd8a1 != _0x5260f6 },
        _0x48939b
      );
    } else {
      if (getTokenType() == _0x574f88(0x1e4)) {
        var _0xe35692 = _0x574f88(0x1e4),
          _0x21e356 = getParameter(_0xe35692, _0x574f88(0x1fa)),
          _0x4667df = getParameter(_0xe35692, _0x574f88(0x23a)),
          _0x5260f6 = getParameter(_0xe35692, "token_supply"),
          _0x5cb217 = getParameter(_0xe35692, _0x574f88(0x204)),
          _0x388738 = getParameter(_0xe35692, _0x574f88(0x247))[
            _0x574f88(0x1d0)
          ](),
          _0x48939b = getParameter(_0xe35692, "description");
        _0x388738 == "" && (_0x388738 = getContractName(_0x21e356));
        var _0x4cf349 = getParameter(_0xe35692, _0x574f88(0x1c0)),
          _0xe97e13 = getParameter(_0xe35692, _0x574f88(0x1de)),
          _0x5514f7 = getParameter(_0xe35692, _0x574f88(0x1bb)),
          _0xc31fcb = $(".liquiditygenerator\x20.max_tx_option")["is"](
            _0x574f88(0x22c)
          );
        if (_0xc31fcb)
          var _0x5cd8a1 = getParameter(_0xe35692, _0x574f88(0x230));
        else var _0x5cd8a1 = parseInt(_0x5260f6);
        var _0x345a92 = $(_0x574f88(0x273))["is"](_0x574f88(0x22c));
        showLoading(),
          createToken2(
            _0x574f88(0x1e4),
            [
              _0x21e356,
              _0x4667df,
              _0x5260f6,
              _0x5cb217,
              _0x4cf349,
              _0xe97e13,
              _0x5514f7,
              _0x5cd8a1,
              getRouter(),
              boss,
              { ref: getAffiliate(), ref_percent: 0xa },
            ],
            txCompleted,
            null,
            verificationCallback,
            _0x388738,
            { maxtx: _0xc31fcb, blacklist: _0x345a92 },
            _0x48939b
          );
      } else {
        if (getTokenType() == "frictionlessyield") {
          var _0xe35692 = _0x574f88(0x1d5),
            _0x21e356 = getParameter(_0xe35692, _0x574f88(0x1fa)),
            _0x4667df = getParameter(_0xe35692, "token_symbol"),
            _0x5260f6 = getParameter(_0xe35692, _0x574f88(0x23c)),
            _0x5cb217 = getParameter(_0xe35692, "decimals"),
            _0x22e984 = getParameter(_0xe35692, "tax_fees"),
            _0x4cf349 = 0x0;
          if ($(_0x574f88(0x1f2))["is"](_0x574f88(0x22c)))
            var _0x5cd8a1 = getParameter(_0xe35692, _0x574f88(0x230));
          else var _0x5cd8a1 = parseInt(_0x5260f6);
          var _0x1897f3 = parseInt(_0x5260f6 / 0x7d0) + 0x64;
          if (!checkInputs(_0x21e356, _0x4667df)) {
            btnCreate[_0x574f88(0x1d2)] = ![];
            return;
          }
          showLoading(),
            createToken(
              _0x574f88(0x1dd),
              [
                _0x21e356,
                _0x4667df,
                _0x5260f6,
                _0x5cb217,
                _0x22e984,
                _0x4cf349,
                _0x5cd8a1,
                _0x1897f3,
                getRouter(),
                boss,
              ],
              txCompleted,
              null,
              verificationCallback
            );
        } else {
          if (getTokenType() == _0x574f88(0x1f5)) {
            var _0xe35692 = _0x574f88(0x1f5),
              _0x20a1cc = $("." + _0xe35692),
              _0x21e356 = getParameter(_0xe35692, "token_name"),
              _0x4667df = getParameter(_0xe35692, "token_symbol"),
              _0x5260f6 = getParameter(_0xe35692, "token_supply"),
              _0x5cb217 = getParameter(_0xe35692, "decimals"),
              _0x388738 = getParameter(_0xe35692, _0x574f88(0x247))[
                _0x574f88(0x1d0)
              ](),
              _0x48939b = getParameter(_0xe35692, _0x574f88(0x1dc));
            _0x388738 == "" && (_0x388738 = getContractName(_0x21e356));
            _0x5260f6 = web3[_0x574f88(0x249)][_0x574f88(0x1c4)](
              _0x5260f6[_0x574f88(0x252)]()
            );
            var _0x4930b3 = _0x20a1cc[_0x574f88(0x24d)](".can_mint")["is"](
                _0x574f88(0x22c)
              ),
              _0x264314 = _0x20a1cc["find"](_0x574f88(0x262))["is"](
                _0x574f88(0x22c)
              ),
              _0x547c82 = _0x20a1cc[_0x574f88(0x24d)](".can_recover")["is"](
                _0x574f88(0x22c)
              ),
              _0x216610 = _0x20a1cc[_0x574f88(0x24d)](_0x574f88(0x22f))["is"](
                _0x574f88(0x22c)
              ),
              _0x339b83 = _0x20a1cc[_0x574f88(0x24d)]("#cappedSupply")["is"](
                _0x574f88(0x22c)
              ),
              _0x76a05c;
            _0x4930b3
              ? _0x339b83
                ? (_0x76a05c = $(_0x574f88(0x1ea))[_0x574f88(0x21b)]())
                : (_0x76a05c = web3["utils"][_0x574f88(0x1c4)](
                    _0x574f88(0x1ee)
                  ))
              : (_0x76a05c = web3[_0x574f88(0x249)]["toBN"](_0x574f88(0x1ee)));
            console[_0x574f88(0x225)](_0x574f88(0x270), _0x76a05c);
            if (_0x264314)
              var _0x25e5dc = _0x20a1cc[_0x574f88(0x24d)](_0x574f88(0x1e0))[
                "is"
              ](_0x574f88(0x22c));
            else var _0x25e5dc = ![];
            if (_0x216610)
              var _0xa504e1 = _0x20a1cc[_0x574f88(0x24d)](_0x574f88(0x1b3))[
                "is"
              ](":checked");
            else var _0xa504e1 = ![];
            console[_0x574f88(0x225)](getRouter()), showLoading();
            var _0x53a9b7 = _0x4930b3 ? _0x574f88(0x201) : "_null",
              _0x378a99 = _0x264314 ? "_burn" : _0x574f88(0x243),
              _0x41fbdf = _0x547c82 ? "_recover" : "_null",
              _0x638046 = _0x216610 ? _0x574f88(0x1f0) : _0x574f88(0x243),
              _0x3ccb9d =
                _0xe35692 + _0x53a9b7 + _0x378a99 + _0x41fbdf + _0x638046;
            createToken2(
              _0x574f88(0x1f5),
              [
                _0x21e356,
                _0x4667df,
                _0x5260f6,
                _0x5cb217,
                [_0x4930b3, _0x339b83],
                _0x76a05c,
                [_0x264314, _0x25e5dc],
                _0x547c82,
                [_0x216610, _0xa504e1],
                [getRouter(), boss],
                { ref: getAffiliate(), ref_percent: 0xa },
              ],
              txCompleted,
              null,
              verificationCallback,
              _0x388738,
              {
                mint: _0x4930b3,
                burn: _0x264314,
                recover: _0x547c82,
                pause: _0x216610,
              },
              _0x48939b
            );
          } else {
            if (getTokenType() == _0x574f88(0x1e7)) {
              var _0xe35692 = _0x574f88(0x1e7),
                _0x21e356 = getParameter(_0xe35692, _0x574f88(0x1fa)),
                _0x4667df = getParameter(_0xe35692, _0x574f88(0x23a)),
                _0x5260f6 = getParameter(_0xe35692, _0x574f88(0x23c)),
                _0x5cb217 = getParameter(_0xe35692, _0x574f88(0x204)),
                _0x388738 = getParameter(_0xe35692, _0x574f88(0x247))[
                  _0x574f88(0x1d0)
                ](),
                _0x48939b = getParameter(_0xe35692, _0x574f88(0x1dc));
              _0x388738 == "" && (_0x388738 = getContractName(_0x21e356));
              var _0x1f2cd3 = getParameter(_0xe35692, "reward_token"),
                _0x54b46f = getParameter(_0xe35692, _0x574f88(0x203)),
                _0x4cf349 = getParameter(_0xe35692, _0x574f88(0x1c0)),
                _0x252fbc = getParameter(_0xe35692, _0x574f88(0x1bc)),
                _0xe97e13 = getParameter(_0xe35692, _0x574f88(0x1de)),
                _0x3bccb1 = $(_0x574f88(0x21e))["is"](_0x574f88(0x22c));
              if (_0x3bccb1)
                var _0x1e54ac = getParameter(_0xe35692, _0x574f88(0x215));
              else var _0x1e54ac = 0x65;
              var _0xc31fcb = $(_0x574f88(0x1d7))["is"](_0x574f88(0x22c));
              if (_0xc31fcb)
                var _0x5cd8a1 = getParameter(_0xe35692, _0x574f88(0x230));
              else var _0x5cd8a1 = _0x5260f6;
              var _0x345a92 = $(_0x574f88(0x1cd))["is"](":checked");
              showLoading(),
                createToken2(
                  _0x574f88(0x1e7),
                  [
                    _0x21e356,
                    _0x4667df,
                    _0x5cb217,
                    _0x5260f6,
                    [_0x4cf349, _0x54b46f, _0x252fbc, _0x1e54ac, _0x5cd8a1],
                    [_0x1f2cd3, _0xe97e13],
                    _0x345a92,
                    getRouter(),
                    boss,
                    { ref: getAffiliate(), ref_percent: 0xa },
                  ],
                  txCompleted,
                  null,
                  verificationCallback,
                  _0x388738,
                  {
                    maxwallet: _0x3bccb1,
                    maxtx: _0xc31fcb,
                    blacklist: _0x345a92,
                  },
                  _0x48939b
                );
            } else {
              if (getTokenType() == _0x574f88(0x260)) {
                var _0xe35692 = _0x574f88(0x260),
                  _0x21e356 = getParameter(_0xe35692, _0x574f88(0x1fa)),
                  _0x4667df = getParameter(_0xe35692, "token_symbol"),
                  _0x5260f6 = getParameter(_0xe35692, _0x574f88(0x23c)),
                  _0x5cb217 = getParameter(_0xe35692, _0x574f88(0x204)),
                  _0x388738 = getParameter(_0xe35692, "contract_name")[
                    _0x574f88(0x1d0)
                  ]();
                _0x388738 == "" && (_0x388738 = getContractName(_0x21e356));
                var _0x51e31a = parseFloat(getParameter(_0xe35692, "buy_tax"))[
                    _0x574f88(0x1bf)
                  ](0x2),
                  _0x27a664 = parseFloat(getParameter(_0xe35692, "sell_tax"))[
                    _0x574f88(0x1bf)
                  ](0x2),
                  _0xe97e13 = getParameter(_0xe35692, _0x574f88(0x1de));
                if (
                  $(".marketingtax\x20.max_tx_option")["is"](_0x574f88(0x22c))
                )
                  var _0x361b32 = parseFloat(
                    getParameter(_0xe35692, _0x574f88(0x24c))
                  )[_0x574f88(0x1bf)](0x2);
                else var _0x361b32 = 0x64;
                if (
                  $(".marketingtax\x20.max_wallet_option")["is"](
                    _0x574f88(0x22c)
                  )
                )
                  var _0x1e54ac = parseFloat(
                    getParameter(_0xe35692, _0x574f88(0x215))
                  )[_0x574f88(0x1bf)](0x2);
                else var _0x1e54ac = 0x64;
                var _0x1af678 = $(_0x574f88(0x255))["is"](_0x574f88(0x22c));
                if ($(_0x574f88(0x1d4))["is"](_0x574f88(0x22c)))
                  var _0x48939b = getParameter(_0xe35692, _0x574f88(0x1dc));
                else var _0x48939b = "";
                showLoading();
                var _0x4f939b = _0x1e54ac != 0x64,
                  _0x1ed0e2 = _0x361b32 != 0x64,
                  _0x3aa6a8 = _0x1af678,
                  _0x3ccb9d =
                    _0x574f88(0x1d8) + _0x3aa6a8 + _0x1ed0e2 + _0x4f939b;
                console[_0x574f88(0x225)]({
                  fixedFees: _0x3aa6a8,
                  maxWallet: _0x4f939b,
                  maxTx: _0x1ed0e2,
                }),
                  createToken2(
                    _0x574f88(0x260),
                    [
                      _0x21e356,
                      _0x4667df,
                      _0x5260f6,
                      _0x5cb217,
                      {
                        marketingWallet: _0xe97e13,
                        centiBuyTax: parseInt(_0x51e31a * 0x64),
                        centiSellTax: parseInt(_0x27a664 * 0x64),
                        maxTxPercent: parseInt(_0x361b32 * 0x64),
                        maxWalletPercent: parseInt(_0x1e54ac * 0x64),
                      },
                      getRouter(),
                      boss,
                    ],
                    txCompleted,
                    null,
                    verificationCallback,
                    _0x388738,
                    {
                      fixedFees: _0x3aa6a8,
                      maxWallet: _0x4f939b,
                      maxTx: _0x1ed0e2,
                    },
                    _0x48939b
                  );
              } else {
                if (getTokenType() == _0x574f88(0x23e)) {
                  var _0xe35692 = _0x574f88(0x23e),
                    _0x21e356 = getParameter(_0xe35692, _0x574f88(0x1fa)),
                    _0x4667df = getParameter(_0xe35692, _0x574f88(0x23a)),
                    _0x5260f6 = getParameter(_0xe35692, "token_supply"),
                    _0x5cb217 = getParameter(_0xe35692, _0x574f88(0x204)),
                    _0x388738 = getParameter(_0xe35692, _0x574f88(0x247))[
                      "trim"
                    ](),
                    _0x48939b = getParameter(_0xe35692, "description");
                  _0x388738 = getContractName(_0x21e356);
                  var _0x1f2cd3 = getRewardToken(),
                    _0x526e98 = parseInt(
                      getParameter(_0xe35692, _0x574f88(0x211))
                    ),
                    _0x387c4c = parseInt(
                      getParameter(_0xe35692, _0x574f88(0x1ba))
                    ),
                    _0xe97e13 = getParameter(_0xe35692, _0x574f88(0x1de)),
                    _0x4cf349 = parseInt(
                      getParameter(_0xe35692, _0x574f88(0x1c0))
                    ),
                    _0x54b46f = parseInt(
                      getParameter(_0xe35692, _0x574f88(0x203))
                    ),
                    _0x252fbc = parseInt(
                      getParameter(_0xe35692, _0x574f88(0x1bc))
                    );
                  console[_0x574f88(0x225)](
                    "some\x20fees",
                    _0x526e98,
                    _0x4cf349,
                    _0x54b46f,
                    _0x252fbc
                  ),
                    showLoading(),
                    deployLibrary2(
                      _0xe35692,
                      "",
                      function (_0x16a316, _0x560f16) {
                        var _0xb23158 = _0x574f88;
                        if (_0x16a316 == "done") {
                          var _0x5d80ce = _0x560f16;
                          createToken2(
                            _0xe35692,
                            [
                              _0x21e356,
                              _0x4667df,
                              _0x5260f6,
                              _0x5cb217,
                              _0x1f2cd3,
                              _0x526e98,
                              _0x387c4c,
                              [_0x4cf349, _0x54b46f, _0x252fbc, 0xa],
                              _0xe97e13,
                              getRouter(),
                              [boss, getAffiliate()],
                            ],
                            txCompleted,
                            _0x5d80ce,
                            verificationCallback,
                            _0x388738,
                            {},
                            _0x48939b
                          );
                        }
                        _0x16a316 == _0xb23158(0x1f6) &&
                          (hideLoading(),
                          console[_0xb23158(0x225)](_0x560f16),
                          showError(_0x560f16),
                          (btnCreate[_0xb23158(0x1d2)] = ![]));
                      },
                      function (_0x5ab6bf, _0x48e75d) {}
                    );
                } else {
                  if (getTokenType() == "rewardtoken2") {
                    var _0xe35692 = _0x574f88(0x1c8),
                      _0x21e356 = getParameter(_0xe35692, "token_name"),
                      _0x4667df = getParameter(_0xe35692, "token_symbol"),
                      _0x5260f6 = getParameter(_0xe35692, "token_supply"),
                      _0x5cb217 = getParameter(_0xe35692, "decimals"),
                      _0x1f2cd3 = getParameter(_0xe35692, _0x574f88(0x274)),
                      _0x526e98 = parseInt(
                        getParameter(_0xe35692, _0x574f88(0x211))
                      ),
                      _0xe97e13 = getParameter(_0xe35692, _0x574f88(0x1de)),
                      _0x1221c5 = getParameter(_0xe35692, _0x574f88(0x235)),
                      _0x3eb918 = getParameter(_0xe35692, "charity_wallet");
                    console[_0x574f88(0x225)](typeof _0xe97e13, _0xe97e13),
                      console[_0x574f88(0x225)](typeof _0x1f2cd3, _0x1f2cd3);
                    var _0x4cf349 = parseInt(
                        getParameter(_0xe35692, _0x574f88(0x1c0))
                      ),
                      _0x54b46f = parseInt(
                        getParameter(_0xe35692, _0x574f88(0x203))
                      ),
                      _0x252fbc = parseInt(
                        getParameter(_0xe35692, "tax_fees_extra")
                      ),
                      _0x441b97 = parseInt(
                        getParameter(_0xe35692, _0x574f88(0x224))
                      ),
                      _0x3f3ea2 = parseInt(
                        getParameter(_0xe35692, _0x574f88(0x217))
                      ),
                      _0x101e73 = parseInt(
                        getParameter(_0xe35692, "charity_fees")
                      ),
                      _0x5cd8a1 = parseInt(
                        getParameter(_0xe35692, _0x574f88(0x230))
                      ),
                      _0x387c4c = parseInt(
                        getParameter(_0xe35692, _0x574f88(0x1ba))
                      );
                    _0x526e98 == 0x0 && (_0x526e98 = 0x1);
                    _0x4cf349 == 0x0 && (_0x4cf349 = 0x1);
                    _0x54b46f == 0x0 && (_0x54b46f = 0x1);
                    _0x252fbc == 0x0 && (_0x252fbc = 0x1);
                    console[_0x574f88(0x225)](
                      "some\x20fees",
                      _0x526e98,
                      _0x4cf349,
                      _0x54b46f,
                      _0x252fbc
                    );
                    if (!checkInputs(_0x21e356, _0x4667df)) {
                      btnCreate[_0x574f88(0x1d2)] = ![];
                      return;
                    }
                    if (
                      _0xe97e13["toLowerCase"]() == ethereum[_0x574f88(0x1c1)]
                    ) {
                      alert(_0x574f88(0x20e));
                      {
                        btnCreate[_0x574f88(0x1d2)] = ![];
                        return;
                      }
                    }
                    showLoading(),
                      deployLibrary(
                        _0x574f88(0x209),
                        "",
                        function (_0x278770, _0x2539c1) {
                          var _0x2ffce8 = _0x574f88;
                          if (_0x278770 == _0x2ffce8(0x265)) {
                            var _0x53f84e = _0x2539c1;
                            createToken(
                              _0x2ffce8(0x209),
                              [
                                _0x21e356,
                                _0x4667df,
                                _0x5260f6,
                                _0x1f2cd3,
                                _0x526e98,
                                _0x4cf349,
                                _0x54b46f,
                                _0x252fbc,
                                _0xe97e13,
                                getRouter(),
                                boss,
                                [_0x1221c5, _0x3eb918],
                                [_0x441b97, _0x3f3ea2, _0x101e73],
                                [_0x387c4c, _0x5cd8a1],
                              ],
                              txCompleted,
                              _0x53f84e,
                              verificationCallback
                            );
                          }
                          _0x278770 == _0x2ffce8(0x1f6) &&
                            (hideLoading(),
                            console[_0x2ffce8(0x225)](_0x2539c1),
                            showError(_0x2539c1),
                            (btnCreate[_0x2ffce8(0x1d2)] = ![]));
                        },
                        function (_0x488b01, _0x299b2b) {}
                      );
                  } else {
                    if (getTokenType() == "promax") {
                      var _0xe35692 = _0x574f88(0x231),
                        _0x21e356 = getParameter1(_0xe35692, _0x574f88(0x1fa)),
                        _0x4667df = getParameter1(_0xe35692, _0x574f88(0x23a)),
                        _0x5260f6 = getParameter1(_0xe35692, _0x574f88(0x23c)),
                        _0x388738 = getParameter(_0xe35692, _0x574f88(0x247))[
                          _0x574f88(0x1d0)
                        ](),
                        _0x48939b = getParameter(_0xe35692, _0x574f88(0x1dc));
                      _0x388738 = getContractName(_0x21e356);
                      var _0x5cb217 = 0x12,
                        _0x20a1cc = $("." + _0xe35692),
                        _0xda6cab = _0x574f88(0x1c5),
                        _0x2cbc31 =
                          "0x0000000000000000000000000000000000000001";
                      if (
                        $("." + _0xe35692 + "\x20." + _0x574f88(0x215))["is"](
                          _0x574f88(0x22c)
                        )
                      )
                        var _0x1e54ac =
                          parseFloat(
                            getParameter1(_0xe35692, _0x574f88(0x215))
                          ) * 0x64;
                      else var _0x1e54ac = 0x64 * 0x64;
                      if (
                        $("." + _0xe35692 + "\x20." + _0x574f88(0x24c))["is"](
                          _0x574f88(0x22c)
                        )
                      )
                        var _0x361b32 =
                          parseFloat(
                            getParameter1(_0xe35692, "max_tx_percent")
                          ) * 0x64;
                      else var _0x361b32 = 0x64 * 0x64;
                      if (
                        $("." + _0xe35692 + "\x20." + _0x574f88(0x259))["is"](
                          _0x574f88(0x22c)
                        )
                      ) {
                        var _0x526e98 = parseInt(
                            getParameter1(_0xe35692, _0x574f88(0x211))
                          ),
                          _0x1f2cd3 = $(_0x574f88(0x228))[_0x574f88(0x21b)]();
                        _0x1f2cd3 ==
                          "0x0000000000000000000000000000000000000002" &&
                          ((_0x1f2cd3 = $(_0x574f88(0x1e3))
                            ["val"]()
                            [_0x574f88(0x1d0)]()),
                          (_0x1f2cd3 = toChecksum(_0x1f2cd3)));
                        var _0x387c4c = parseInt(
                          getParameter1(_0xe35692, _0x574f88(0x1ba))
                        );
                      } else
                        var _0x526e98 = 0x0,
                          _0x1f2cd3 = _0xda6cab,
                          _0x387c4c = number(0x1)[_0x574f88(0x1f4)](
                            number(0xa ** _0x5cb217)
                          );
                      if (
                        $(
                          "." +
                            _0xe35692 +
                            "\x20." +
                            "auto_liquidity_generation"
                        )["is"](_0x574f88(0x22c))
                      )
                        var _0x4cf349 = getParameter1(
                            _0xe35692,
                            _0x574f88(0x1c0)
                          ),
                          _0x51819d = $(
                            "." + _0xe35692 + "\x20." + _0x574f88(0x1e9)
                          )["is"](_0x574f88(0x22c));
                      else
                        var _0x4cf349 = 0x0,
                          _0x51819d = ![];
                      if (
                        $("." + _0xe35692 + "\x20." + _0x574f88(0x1f9))["is"](
                          _0x574f88(0x22c)
                        )
                      )
                        var _0x441b97 = getParameter1(
                          _0xe35692,
                          _0x574f88(0x224)
                        );
                      else var _0x441b97 = 0x0;
                      if (
                        $("." + _0xe35692 + "\x20." + _0x574f88(0x1de))["is"](
                          _0x574f88(0x22c)
                        )
                      ) {
                        var _0x29220c = getParameter1(
                            _0xe35692,
                            _0x574f88(0x233)
                          ),
                          _0x54b46f = getParameter1(
                            _0xe35692,
                            _0x574f88(0x203)
                          ),
                          _0xba34f1 = $(
                            "." + _0xe35692 + "\x20" + _0x574f88(0x1e1)
                          )[_0x574f88(0x21b)]();
                        if (_0xba34f1 == "0")
                          var _0x1ae143 = ![],
                            _0x964088 = _0x2cbc31;
                        else {
                          if (_0xba34f1 == "1")
                            var _0x1ae143 = !![],
                              _0x964088 = _0xda6cab;
                          else {
                            var _0x1ae143 = ![],
                              _0x964088 = $(
                                "." + _0xe35692 + "\x20" + _0x574f88(0x1b1)
                              )
                                [_0x574f88(0x21b)]()
                                [_0x574f88(0x1d0)]();
                            _0x964088 = toChecksum(_0x964088);
                          }
                        }
                      } else
                        var _0x29220c = _0xda6cab,
                          _0x54b46f = 0x0,
                          _0x1ae143 = ![],
                          _0x964088 = _0xda6cab;
                      if (
                        $("." + _0xe35692 + "\x20." + _0x574f88(0x226))["is"](
                          _0x574f88(0x22c)
                        )
                      ) {
                        var _0xa2dddb = getParameter1(
                            _0xe35692,
                            _0x574f88(0x1b5)
                          ),
                          _0x101e73 = getParameter1(
                            _0xe35692,
                            _0x574f88(0x268)
                          ),
                          _0xba34f1 = $(
                            "." + _0xe35692 + "\x20" + _0x574f88(0x1d6)
                          )[_0x574f88(0x21b)]();
                        if (_0xba34f1 == "0")
                          var _0x2aab82 = ![],
                            _0x2d6560 = _0x2cbc31;
                        else {
                          if (_0xba34f1 == "1")
                            var _0x2aab82 = !![],
                              _0x2d6560 = _0xda6cab;
                          else {
                            var _0x2aab82 = ![],
                              _0x2d6560 = $(
                                "." + _0xe35692 + "\x20" + _0x574f88(0x25f)
                              )
                                [_0x574f88(0x21b)]()
                                [_0x574f88(0x1d0)]();
                            _0x2d6560 = toChecksum(_0x2d6560);
                          }
                        }
                      } else
                        var _0xa2dddb = _0xda6cab,
                          _0x101e73 = 0x0,
                          _0x2aab82 = ![],
                          _0x2d6560 = _0xda6cab;
                      if (
                        $("." + _0xe35692 + "\x20." + _0x574f88(0x235))["is"](
                          _0x574f88(0x22c)
                        )
                      ) {
                        var _0x57a61b = getParameter1(
                            _0xe35692,
                            _0x574f88(0x22e)
                          ),
                          _0x3f3ea2 = getParameter1(_0xe35692, "dev_fees"),
                          _0xba34f1 = $(
                            "." + _0xe35692 + "\x20" + _0x574f88(0x1c6)
                          )[_0x574f88(0x21b)]();
                        if (_0xba34f1 == "0")
                          var _0x4eac78 = ![],
                            _0x47f484 = _0x2cbc31;
                        else {
                          if (_0xba34f1 == "1")
                            var _0x4eac78 = !![],
                              _0x47f484 = _0xda6cab;
                          else {
                            var _0x4eac78 = ![],
                              _0x47f484 = $(
                                "." + _0xe35692 + "\x20" + _0x574f88(0x1b6)
                              )
                                ["val"]()
                                [_0x574f88(0x1d0)]();
                            _0x47f484 = toChecksum(_0x47f484);
                          }
                        }
                      } else
                        var _0x57a61b = _0xda6cab,
                          _0x3f3ea2 = 0x0,
                          _0x4eac78 = ![],
                          _0x47f484 = _0xda6cab;
                      if (
                        $("." + _0xe35692 + "\x20." + _0x574f88(0x223))["is"](
                          _0x574f88(0x22c)
                        )
                      )
                        var _0x3be0fa = getParameter1(
                          _0xe35692,
                          _0x574f88(0x21a)
                        );
                      else var _0x3be0fa = 0x0;
                      if (
                        $("." + _0xe35692 + "\x20." + _0x574f88(0x1c3))["is"](
                          _0x574f88(0x22c)
                        )
                      )
                        var _0x1f63c3 = getParameter1(
                          _0xe35692,
                          "extra_sell_fees"
                        );
                      else var _0x1f63c3 = 0x0;
                      var _0x345a92 = $(
                          "." + _0xe35692 + "\x20." + _0x574f88(0x21c)
                        )["is"](_0x574f88(0x22c)),
                        _0x4930b3 = $(
                          "." + _0xe35692 + "\x20." + _0x574f88(0x1fc)
                        )["is"](_0x574f88(0x22c)),
                        _0x264314 = $("." + _0xe35692 + "\x20." + "can_burn")[
                          "is"
                        ](_0x574f88(0x22c)),
                        _0x216610 = $(
                          "." + _0xe35692 + "\x20." + _0x574f88(0x1ce)
                        )["is"](_0x574f88(0x22c)),
                        _0x1af678 = $(
                          "." + _0xe35692 + "\x20." + _0x574f88(0x1d9)
                        )["is"](":checked");
                      showLoading();
                      var _0x6a9e0c =
                          _0xa2dddb != _0xda6cab ? _0x574f88(0x1fe) : "_null",
                        _0x53a9b7 = _0x4930b3 ? _0x574f88(0x201) : "_null",
                        _0x4f939b =
                          _0x1e54ac != 0x64 * 0x64
                            ? "_maxwallet"
                            : _0x574f88(0x243),
                        _0x1ed0e2 =
                          _0x361b32 != 0x64 * 0x64
                            ? _0x574f88(0x1f3)
                            : _0x574f88(0x243),
                        _0x3dde42 =
                          _0x29220c != _0xda6cab
                            ? _0x574f88(0x22d)
                            : _0x574f88(0x243),
                        _0x2d1001 = _0x345a92 ? "_blacklist" : _0x574f88(0x243),
                        _0x40213d =
                          _0x3be0fa != 0x0
                            ? _0x574f88(0x26f)
                            : _0x574f88(0x243),
                        _0x378a99 = _0x264314
                          ? _0x574f88(0x24e)
                          : _0x574f88(0x243),
                        _0x270023 =
                          _0x57a61b != _0xda6cab ? "_dev" : _0x574f88(0x243),
                        _0x15d181 =
                          _0x526e98 != 0x0
                            ? _0x574f88(0x22b)
                            : _0x574f88(0x243),
                        _0x638046 = _0x216610
                          ? _0x574f88(0x1f0)
                          : _0x574f88(0x243),
                        _0x3aa6a8 = _0x1af678
                          ? _0x574f88(0x1be)
                          : _0x574f88(0x243),
                        _0x3ccb9d =
                          _0x574f88(0x25c) +
                          _0x2d1001 +
                          _0x378a99 +
                          _0x40213d +
                          _0x6a9e0c +
                          _0x270023 +
                          _0x3aa6a8 +
                          _0x3dde42 +
                          _0x1ed0e2 +
                          _0x4f939b +
                          _0x53a9b7 +
                          _0x638046 +
                          _0x15d181;
                      createToken2(
                        _0xe35692,
                        [
                          _0x21e356,
                          _0x4667df,
                          _0x5cb217,
                          number(_0x5260f6)[_0x574f88(0x1f4)](
                            number(0xa ** _0x5cb217)
                          ),
                          parseInt(_0x361b32),
                          parseInt(_0x1e54ac),
                          {
                            wallet: _0x29220c,
                            walletCharity: _0xa2dddb,
                            walletDev: _0x57a61b,
                            walletFeeInBNB: _0x1ae143,
                            walletCharityFeeInBNB: _0x2aab82,
                            walletDevFeeInBNB: _0x4eac78,
                            marketingFeeToken: _0x964088,
                            charityFeeToken: _0x2d6560,
                            devFeeToken: _0x47f484,
                            hasBlacklist: _0x345a92,
                            canMint: _0x4930b3,
                            canBurn: _0x264314,
                            canPause: _0x216610,
                            burnAutomaticGeneratedLiquidity: _0x51819d,
                            ref: getAffiliate(),
                            ref_percent: 0xa,
                          },
                          _0x1f2cd3,
                          number(_0x387c4c)[_0x574f88(0x1f4)](
                            number(0xa ** _0x5cb217)
                          ),
                          {
                            setRewardFee: _0x526e98,
                            setTaxFee: _0x526e98 == 0x0 ? 0x1 : 0x0,
                            setLiqFee: _0x4cf349,
                            setBurnFee: _0x441b97,
                            setBuybackFee: _0x3be0fa,
                            setWalletFee: _0x54b46f,
                            setWalletCharityFee: _0x101e73,
                            setWalletDevFee: _0x3f3ea2,
                            setExtraSellFee: _0x1f63c3,
                          },
                          [getRouter(), boss],
                        ],
                        txCompleted,
                        null,
                        verificationCallback,
                        _0x388738,
                        {
                          charity: _0xa2dddb != _0xda6cab,
                          mint: _0x4930b3,
                          maxwallet: _0x1e54ac != 0x64 * 0x64,
                          maxtx: _0x361b32 != 0x64 * 0x64,
                          marketing: _0x29220c != _0xda6cab,
                          blacklist: _0x345a92,
                          buyback: _0x3be0fa != 0x0,
                          burn: _0x264314,
                          dev: _0x57a61b != _0xda6cab,
                          reward: _0x526e98 != 0x0,
                          pause: _0x216610,
                          fixedfees: _0x1af678,
                        },
                        _0x48939b
                      );
                    } else {
                      if (getTokenType() == _0x574f88(0x271)) {
                        return;
                        alert(_0x574f88(0x1e5));
                        var _0xe35692 = _0x574f88(0x271),
                          _0x21e356 = getParameter1(
                            _0xe35692,
                            _0x574f88(0x1fa)
                          ),
                          _0x4667df = getParameter1(
                            _0xe35692,
                            _0x574f88(0x23a)
                          ),
                          _0x5260f6 = getParameter1(
                            _0xe35692,
                            _0x574f88(0x23c)
                          ),
                          _0x388738 = getParameter(_0xe35692, "contract_name")[
                            _0x574f88(0x1d0)
                          ](),
                          _0x48939b = getParameter(_0xe35692, _0x574f88(0x1dc));
                        _0x388738 == "" &&
                          (_0x388738 = getContractName(_0x21e356));
                        var _0x5cb217 = 0x12,
                          _0x20a1cc = $("." + _0xe35692),
                          _0xda6cab = _0x574f88(0x1c5),
                          _0x2cbc31 =
                            "0x0000000000000000000000000000000000000001";
                        if (
                          $("." + _0xe35692 + "\x20." + _0x574f88(0x215))["is"](
                            _0x574f88(0x22c)
                          )
                        )
                          var _0x1e54ac =
                            parseFloat(
                              getParameter1(_0xe35692, "max_wallet_percent")
                            ) * 0x64;
                        else var _0x1e54ac = 0x64 * 0x64;
                        if (
                          $("." + _0xe35692 + "\x20." + "max_tx_percent")["is"](
                            _0x574f88(0x22c)
                          )
                        )
                          var _0x361b32 =
                            parseFloat(
                              getParameter1(_0xe35692, _0x574f88(0x24c))
                            ) * 0x64;
                        else var _0x361b32 = 0x64 * 0x64;
                        if (
                          $("." + _0xe35692 + "\x20." + _0x574f88(0x259))["is"](
                            _0x574f88(0x22c)
                          )
                        ) {
                          var _0x526e98 = parseInt(
                              getParameter1(_0xe35692, _0x574f88(0x211))
                            ),
                            _0x1f2cd3 = $(".promax\x20.reward_token")[
                              _0x574f88(0x21b)
                            ]();
                          _0x1f2cd3 == _0x574f88(0x1b4) &&
                            ((_0x1f2cd3 = $(_0x574f88(0x1e3))
                              ["val"]()
                              [_0x574f88(0x1d0)]()),
                            (_0x1f2cd3 = toChecksum(_0x1f2cd3)));
                          var _0x387c4c = parseInt(
                            getParameter1(_0xe35692, _0x574f88(0x1ba))
                          );
                        } else
                          var _0x526e98 = 0x0,
                            _0x1f2cd3 = _0xda6cab,
                            _0x387c4c = number(0x1)[_0x574f88(0x1f4)](
                              number(0xa ** _0x5cb217)
                            );
                        if (
                          $("." + _0xe35692 + "\x20." + _0x574f88(0x218))["is"](
                            _0x574f88(0x22c)
                          )
                        )
                          var _0x4cf349 = getParameter1(
                              _0xe35692,
                              _0x574f88(0x1c0)
                            ),
                            _0x51819d = $(
                              "." + _0xe35692 + "\x20." + _0x574f88(0x1e9)
                            )["is"](_0x574f88(0x22c));
                        else
                          var _0x4cf349 = 0x0,
                            _0x51819d = ![];
                        if (
                          $("." + _0xe35692 + "\x20." + _0x574f88(0x1f9))["is"](
                            ":checked"
                          )
                        )
                          var _0x441b97 = getParameter1(
                            _0xe35692,
                            _0x574f88(0x224)
                          );
                        else var _0x441b97 = 0x0;
                        if (
                          $("." + _0xe35692 + "\x20." + _0x574f88(0x1de))["is"](
                            ":checked"
                          )
                        ) {
                          var _0x29220c = getParameter1(
                              _0xe35692,
                              "marketing_wallet_addr"
                            ),
                            _0x54b46f = getParameter1(
                              _0xe35692,
                              _0x574f88(0x203)
                            ),
                            _0xba34f1 = $(
                              "." + _0xe35692 + "\x20" + _0x574f88(0x1e1)
                            )["val"]();
                          if (_0xba34f1 == "0")
                            var _0x1ae143 = ![],
                              _0x964088 = _0x2cbc31;
                          else {
                            if (_0xba34f1 == "1")
                              var _0x1ae143 = !![],
                                _0x964088 = _0xda6cab;
                            else {
                              var _0x1ae143 = ![],
                                _0x964088 = $(
                                  "." + _0xe35692 + "\x20" + _0x574f88(0x1b1)
                                )
                                  ["val"]()
                                  ["trim"]();
                              _0x964088 = toChecksum(_0x964088);
                            }
                          }
                        } else
                          var _0x29220c = _0xda6cab,
                            _0x54b46f = 0x0,
                            _0x1ae143 = ![],
                            _0x964088 = _0xda6cab;
                        if (
                          $("." + _0xe35692 + "\x20." + _0x574f88(0x226))["is"](
                            _0x574f88(0x22c)
                          )
                        ) {
                          var _0xa2dddb = getParameter1(
                              _0xe35692,
                              _0x574f88(0x1b5)
                            ),
                            _0x101e73 = getParameter1(
                              _0xe35692,
                              _0x574f88(0x268)
                            ),
                            _0xba34f1 = $(
                              "." +
                                _0xe35692 +
                                "\x20" +
                                ".charityFeeType\x20input:radio:checked"
                            )[_0x574f88(0x21b)]();
                          if (_0xba34f1 == "0")
                            var _0x2aab82 = ![],
                              _0x2d6560 = _0x2cbc31;
                          else {
                            if (_0xba34f1 == "1")
                              var _0x2aab82 = !![],
                                _0x2d6560 = _0xda6cab;
                            else {
                              var _0x2aab82 = ![],
                                _0x2d6560 = $(
                                  "." +
                                    _0xe35692 +
                                    "\x20" +
                                    "input.specific_reward_token_for_charity"
                                )
                                  ["val"]()
                                  [_0x574f88(0x1d0)]();
                              _0x2d6560 = toChecksum(_0x2d6560);
                            }
                          }
                        } else
                          var _0xa2dddb = _0xda6cab,
                            _0x101e73 = 0x0,
                            _0x2aab82 = ![],
                            _0x2d6560 = _0xda6cab;
                        if (
                          $("." + _0xe35692 + "\x20." + "dev_wallet")["is"](
                            _0x574f88(0x22c)
                          )
                        ) {
                          var _0x57a61b = getParameter1(
                              _0xe35692,
                              _0x574f88(0x22e)
                            ),
                            _0x3f3ea2 = getParameter1(
                              _0xe35692,
                              _0x574f88(0x217)
                            ),
                            _0xba34f1 = $(
                              "." + _0xe35692 + "\x20" + _0x574f88(0x1c6)
                            )[_0x574f88(0x21b)]();
                          if (_0xba34f1 == "0")
                            var _0x4eac78 = ![],
                              _0x47f484 = _0x2cbc31;
                          else {
                            if (_0xba34f1 == "1")
                              var _0x4eac78 = !![],
                                _0x47f484 = _0xda6cab;
                            else {
                              var _0x4eac78 = ![],
                                _0x47f484 = $(
                                  "." + _0xe35692 + "\x20" + _0x574f88(0x1b6)
                                )
                                  [_0x574f88(0x21b)]()
                                  [_0x574f88(0x1d0)]();
                              _0x47f484 = toChecksum(_0x47f484);
                            }
                          }
                        } else
                          var _0x57a61b = _0xda6cab,
                            _0x3f3ea2 = 0x0,
                            _0x4eac78 = ![],
                            _0x47f484 = _0xda6cab;
                        if (
                          $("." + _0xe35692 + "\x20." + _0x574f88(0x223))["is"](
                            _0x574f88(0x22c)
                          )
                        )
                          var _0x3be0fa = getParameter1(
                            _0xe35692,
                            _0x574f88(0x21a)
                          );
                        else var _0x3be0fa = 0x0;
                        if (
                          $("." + _0xe35692 + "\x20." + _0x574f88(0x1c3))["is"](
                            _0x574f88(0x22c)
                          )
                        )
                          var _0x1f63c3 = getParameter1(
                            _0xe35692,
                            "extra_sell_fees"
                          );
                        else var _0x1f63c3 = 0x0;
                        var _0x345a92 = $(
                            "." + _0xe35692 + "\x20." + _0x574f88(0x21c)
                          )["is"](_0x574f88(0x22c)),
                          _0x4930b3 = $("." + _0xe35692 + "\x20." + "can_mint")[
                            "is"
                          ](_0x574f88(0x22c)),
                          _0x264314 = $(
                            "." + _0xe35692 + "\x20." + _0x574f88(0x205)
                          )["is"](":checked"),
                          _0x216610 = $(
                            "." + _0xe35692 + "\x20." + _0x574f88(0x1ce)
                          )["is"](":checked"),
                          _0x1af678 = $(
                            "." + _0xe35692 + "\x20." + "fixed_fees"
                          )["is"](_0x574f88(0x22c));
                        showLoading();
                        var _0x6a9e0c =
                            _0xa2dddb != _0xda6cab
                              ? _0x574f88(0x1fe)
                              : _0x574f88(0x243),
                          _0x53a9b7 = _0x4930b3
                            ? _0x574f88(0x201)
                            : _0x574f88(0x243),
                          _0x4f939b =
                            _0x1e54ac != 0x64 * 0x64
                              ? _0x574f88(0x20f)
                              : _0x574f88(0x243),
                          _0x1ed0e2 =
                            _0x361b32 != 0x64 * 0x64
                              ? _0x574f88(0x1f3)
                              : _0x574f88(0x243),
                          _0x3dde42 =
                            _0x29220c != _0xda6cab
                              ? _0x574f88(0x22d)
                              : _0x574f88(0x243),
                          _0x2d1001 = _0x345a92
                            ? "_blacklist"
                            : _0x574f88(0x243),
                          _0x40213d =
                            _0x3be0fa != 0x0 ? "_buyback" : _0x574f88(0x243),
                          _0x378a99 = _0x264314
                            ? _0x574f88(0x24e)
                            : _0x574f88(0x243),
                          _0x270023 =
                            _0x57a61b != _0xda6cab ? "_dev" : _0x574f88(0x243),
                          _0x15d181 =
                            _0x526e98 != 0x0
                              ? _0x574f88(0x22b)
                              : _0x574f88(0x243),
                          _0x638046 = _0x216610
                            ? _0x574f88(0x1f0)
                            : _0x574f88(0x243),
                          _0x3aa6a8 = _0x1af678
                            ? "_fixedfees"
                            : _0x574f88(0x243);
                        createToken2(
                          _0xe35692,
                          [
                            _0x21e356,
                            _0x4667df,
                            _0x5cb217,
                            number(_0x5260f6)["mul"](number(0xa ** _0x5cb217)),
                            parseInt(_0x361b32),
                            parseInt(_0x1e54ac),
                            {
                              wallet: _0x29220c,
                              walletCharity: _0xa2dddb,
                              walletDev: _0x57a61b,
                              walletFeeInBNB: _0x1ae143,
                              walletCharityFeeInBNB: _0x2aab82,
                              walletDevFeeInBNB: _0x4eac78,
                              marketingFeeToken: _0x964088,
                              charityFeeToken: _0x2d6560,
                              devFeeToken: _0x47f484,
                              hasBlacklist: _0x345a92,
                              canMint: _0x4930b3,
                              canBurn: _0x264314,
                              canPause: _0x216610,
                              burnAutomaticGeneratedLiquidity: _0x51819d,
                              ref: getAffiliate(),
                              ref_percent: 0xa,
                            },
                            _0x1f2cd3,
                            number(_0x387c4c)["mul"](number(0xa ** _0x5cb217)),
                            {
                              setRewardFee: _0x526e98,
                              setTaxFee: _0x526e98 == 0x0 ? 0x1 : 0x0,
                              setLiqFee: _0x4cf349,
                              setBurnFee: _0x441b97,
                              setBuybackFee: _0x3be0fa,
                              setWalletFee: _0x54b46f,
                              setWalletCharityFee: _0x101e73,
                              setWalletDevFee: _0x3f3ea2,
                              setExtraSellFee: _0x1f63c3,
                              setDeployerFee: 0x2,
                            },
                            [getRouter(), boss],
                          ],
                          txCompleted,
                          null,
                          verificationCallback,
                          _0x388738,
                          {
                            charity: _0xa2dddb != _0xda6cab,
                            mint: _0x4930b3,
                            maxwallet: _0x1e54ac != 0x64 * 0x64,
                            maxtx: _0x361b32 != 0x64 * 0x64,
                            marketing: _0x29220c != _0xda6cab,
                            blacklist: _0x345a92,
                            buyback: _0x3be0fa != 0x0,
                            burn: _0x264314,
                            dev: _0x57a61b != _0xda6cab,
                            reward: _0x526e98 != 0x0,
                            pause: _0x216610,
                            fixedfees: _0x1af678,
                          },
                          _0x48939b
                        );
                      } else console[_0x574f88(0x225)](_0x574f88(0x1ef));
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
function a0_0x1bf9(_0x1d298a, _0x571ba2) {
  var _0x1319ef = a0_0x1319();
  return (
    (a0_0x1bf9 = function (_0x1bf9e5, _0x11fc88) {
      _0x1bf9e5 = _0x1bf9e5 - 0x1b1;
      var _0x43a5ab = _0x1319ef[_0x1bf9e5];
      return _0x43a5ab;
    }),
    a0_0x1bf9(_0x1d298a, _0x571ba2)
  );
}
function showSuccess(_0x58b0c5) {
  var _0x58d8a4 = a0_0x25da45,
    _0x5e2972 = getScanUrl();
  (_0x5e2972 = _0x5e2972[_0x58d8a4(0x1da)](_0x58d8a4(0x1d3), _0x58b0c5)),
    $(_0x58d8a4(0x1bd))[_0x58d8a4(0x1b8)](_0x58d8a4(0x253), _0x5e2972),
    window[_0x58d8a4(0x264)][_0x58d8a4(0x202)](_0x58d8a4(0x207), _0x58b0c5),
    window[_0x58d8a4(0x264)][_0x58d8a4(0x202)](_0x58d8a4(0x26b), _0x5e2972),
    window[_0x58d8a4(0x1f1)](_0x58d8a4(0x261), _0x58d8a4(0x263));
}
export function setPrice(_0x1ccb40, _0x48e90f) {
  var _0x19a476 = a0_0x25da45;
  _0x1ccb40 == 0x0
    ? ($(_0x19a476(0x238))[_0x19a476(0x1df)]("FREE"),
      $(_0x19a476(0x237))[_0x19a476(0x20d)](_0x19a476(0x212), _0x19a476(0x239)),
      $(_0x19a476(0x246))[_0x19a476(0x1df)](_0x19a476(0x210)))
    : ($(_0x19a476(0x238))[_0x19a476(0x1df)](_0x1ccb40 + "\x20" + _0x48e90f),
      $(_0x19a476(0x237))[_0x19a476(0x20d)](_0x19a476(0x212), _0x19a476(0x239)),
      $(".price")[_0x19a476(0x1df)](_0x1ccb40 + "\x20" + _0x48e90f));
}
export function getPriceQuick() {
  var _0x4281a6 = a0_0x25da45,
    _0x5e3eca = $(_0x4281a6(0x238))[_0x4281a6(0x1df)]();
  return (
    (_0x5e3eca = _0x5e3eca[_0x4281a6(0x1db)]("\x20")[0x0]),
    (_0x5e3eca = _0x5e3eca[_0x4281a6(0x252)]()),
    _0x5e3eca
  );
}
export function addPrice(_0x108850, _0x50433c) {
  var _0x38a749 = getPriceQuick();
  setPrice(parseFloat(_0x38a749) + _0x108850, _0x50433c);
}
export function subPrice(_0x409aa8, _0x11b52b) {
  var _0x33e06e = getPriceQuick();
  setPrice(parseFloat(_0x33e06e) - _0x409aa8, _0x11b52b);
}
function a0_0x1319() {
  var _0x44ab49 = [
    "115792089237316195423570985008687907853269984665640564039457584007913129639935",
    "something\x20wrong",
    "_pause",
    "open",
    ".frictionlessyield\x20.max_tx_option",
    "_maxtx",
    "mul",
    "dynamic",
    "error",
    "Test",
    "token_type:",
    "burn",
    "token_name",
    "string",
    "can_mint",
    "test\x20abc",
    "_charity",
    "10uBrNnD",
    "Switch\x20to\x20a\x20supported\x20network",
    "_mint",
    "setItem",
    "marketing_fees",
    "decimals",
    "can_burn",
    "1879598mNmmdr",
    "newTokenAddress",
    "...",
    "reward_2",
    "valid",
    ".btnCreate",
    "click_",
    "css",
    "Marketing\x20wallet\x20can\x27t\x20be\x20the\x20same\x20as\x20the\x20owner\x20!",
    "_maxwallet",
    "FREE",
    "reward_fees",
    "display",
    ".deployStatus",
    "insufficient",
    "max_wallet_percent",
    ".reward_token",
    "dev_fees",
    "auto_liquidity_generation",
    "U2FsdGVkX18RBBDzP5SVBiG2I8ZdEHgXYvaaMkmHv8nzEOc6TYEMdufwchjO7reuzDnswbC2cBvSODBJCpO2yA==",
    "buyback_burn_fees",
    "val",
    "has_blacklist",
    "Enter\x20token\x20name\x20!",
    "#max_wallet_option_smarttax",
    "error\x20here",
    "preventDefault",
    "click_create",
    "5344qZKcet",
    "buyback_burn",
    "burn_fees",
    "log",
    "charity_wallet",
    ".can_mint",
    ".promax\x20.reward_token",
    "click",
    "prop",
    "_reward",
    ":checked",
    "_marketing",
    "dev_wallet_addr",
    ".can_pause",
    "max_tx_amount",
    "promax",
    "Please\x20install\x20MetaMask\x20wallet\x20:)",
    "marketing_wallet_addr",
    "substr",
    "dev_wallet",
    ".max_tx_option",
    "#tx_fee",
    "#price",
    "none",
    "token_symbol",
    "addEventListener",
    "token_supply",
    "stringify",
    "rewardtoken",
    "./static/contracts/test/sol",
    ".router\x20option[value=",
    "submit",
    ".tip",
    "_null",
    "20802eGMmGd",
    "change",
    ".price",
    "contract_name",
    "Connect\x20your\x20wallet\x20first\x20!",
    "utils",
    "verificationCallback",
    "status",
    "max_tx_percent",
    "find",
    "_burn",
    "placeholder",
    "1385XkXdUW",
    "toLowerCase",
    "toString",
    "href",
    "decrypt",
    ".marketingtax\x20.fixed_fees_option",
    "form",
    "12ThBXmQ",
    "denied\x20transaction\x20signature",
    "reward_to_holders",
    "222598nfxGPX",
    ".error-create",
    "ProToken",
    ".loading",
    "undefined",
    "input.specific_reward_token_for_charity",
    "marketingtax",
    "success",
    ".can_burn",
    "_self",
    "localStorage",
    "done",
    "querySelector",
    "0xC035834470Ecc0ff68aFFB2b966Ad0C85d9b0f15",
    "charity_fees",
    "standard",
    "9qCCFVF",
    "scanLink",
    "includes",
    "block",
    "User\x20denied\x20transaction\x20signature",
    "_buyback",
    "cappedSupply",
    "free",
    "value",
    ".liquiditygenerator\x20.blacklist_option",
    "reward_token",
    "input.specific_reward_token_for_marketing",
    "4920104kdpPBk",
    "#allowOnlyWhenPause",
    "0x0000000000000000000000000000000000000002",
    "charity_wallet_addr",
    "input.specific_reward_token_for_dev",
    "enc",
    "attr",
    "insufficient_funds",
    "min_tokens",
    "marketing_tax",
    "tax_fees_extra",
    "#view_token",
    "_fixedfees",
    "toFixed",
    "liquidity_fees",
    "selectedAddress",
    "10238404smmoOI",
    "extra_sell",
    "toBN",
    "0x0000000000000000000000000000000000000000",
    ".devFeeType\x20input:radio:checked",
    ".router",
    "rewardtoken2",
    ".alertLoading",
    "tax_fees",
    "202692RiLrDY",
    ".safemoon",
    ".smarttax\x20.blacklist_option",
    "can_pause",
    "click_cancel",
    "trim",
    "selected_token:",
    "disabled",
    "token_address",
    ".marketingtax\x20.description_option",
    "frictionlessyield",
    ".charityFeeType\x20input:radio:checked",
    "#max_tx_option_smarttax",
    "MarketingTax",
    "fixed_fees",
    "replace",
    "split",
    "description",
    "safemoon",
    "marketing_wallet",
    "text",
    "#ownerCanBurnAny",
    ".marketingFeeType\x20input:radio:checked",
    "length",
    ".promax\x20input.specific_reward_token",
    "liquiditygenerator",
    "Make\x20sure\x20you\x20have\x20enough\x20gas\x20fee\x20to\x20deploy\x20this\x20token!",
    ".token_type",
    "smarttax",
    ".standard",
    "liquidity_burnt",
    ".cappedSupply",
    "Utf8",
    "0x10ed43c718714eb63d5aa57b78b54704e256024e",
    "selected",
  ];
  a0_0x1319 = function () {
    return _0x44ab49;
  };
  return a0_0x1319();
}
setPrice(getPrice(a0_0x25da45(0x269)), getPriceUnit()),
  $(".token_type")["on"]("change", () => {
    var _0x32adfa = a0_0x25da45,
      _0x54f2a9 = $(".token_type")["val"]();
    logGaEvent(_0x32adfa(0x20c) + _0x54f2a9),
      console[_0x32adfa(0x225)](_0x32adfa(0x1f8), _0x54f2a9),
      setPrice(getPrice(_0x54f2a9), getPriceUnit());
  });
export function getTokenType() {
  var _0x2f11a4 = a0_0x25da45,
    _0x5b05da = $(_0x2f11a4(0x1e6))[_0x2f11a4(0x21b)]();
  return _0x5b05da;
}
console[a0_0x25da45(0x225)](a0_0x25da45(0x1d1), getTokenType());
function showLoading() {
  var _0x3d39cd = a0_0x25da45;
  $(_0x3d39cd(0x25d))["css"]("display", _0x3d39cd(0x26d)),
    $(".alertLoading")[_0x3d39cd(0x20d)](_0x3d39cd(0x212), "block"),
    hideError();
}
function hideLoading() {
  var _0x1bfd9c = a0_0x25da45;
  $(_0x1bfd9c(0x25d))[_0x1bfd9c(0x20d)](_0x1bfd9c(0x212), "none"),
    $(_0x1bfd9c(0x1c9))[_0x1bfd9c(0x20d)]("display", _0x1bfd9c(0x239)),
    $(_0x1bfd9c(0x213))[_0x1bfd9c(0x20d)]("display", _0x1bfd9c(0x239));
}
function showError(_0x472462) {
  var _0x1ca267 = a0_0x25da45,
    _0x5a4896 = _0x472462;
  (_0x472462 = JSON[_0x1ca267(0x23d)](_0x472462)),
    _0x472462 == "{}" && (_0x472462 = _0x5a4896[_0x1ca267(0x252)]()),
    console[_0x1ca267(0x225)](_0x1ca267(0x21f), _0x472462, typeof _0x472462),
    $(_0x1ca267(0x25b))[_0x1ca267(0x1df)](_0x472462),
    _0x472462[_0x1ca267(0x26c)](_0x1ca267(0x214)) ||
    _0x472462[_0x1ca267(0x251)]()["includes"]("failed\x20to\x20fetch")
      ? ($(".error-create")[_0x1ca267(0x1df)](
          "Error:\x20Insufficient\x20" +
            getPriceUnit() +
            "\x20balance\x20to\x20create\x20!"
        ),
        logGaEvent(_0x1ca267(0x1b9)))
      : (_0x472462[_0x1ca267(0x1e2)] <= 0x118
          ? $(_0x1ca267(0x25b))[_0x1ca267(0x1df)](_0x472462)
          : $(".error-create")[_0x1ca267(0x1df)](
              _0x472462[_0x1ca267(0x234)](0x0, 0x118) + _0x1ca267(0x208)
            ),
        !_0x472462[_0x1ca267(0x26c)](_0x1ca267(0x26e)) &&
          $(_0x1ca267(0x242))["css"]("display", _0x1ca267(0x26d)),
        _0x472462["includes"](_0x1ca267(0x258))
          ? logGaEvent(gaEvents[_0x1ca267(0x1cf)])
          : logGaEvent(_0x472462)),
    $(_0x1ca267(0x25b))[_0x1ca267(0x20d)](_0x1ca267(0x212), "block");
}
function hideError() {
  var _0x3fa25b = a0_0x25da45;
  $(_0x3fa25b(0x25b))["css"]("display", _0x3fa25b(0x239)),
    $(".tip")["css"](_0x3fa25b(0x212), _0x3fa25b(0x239));
}
async function test_verify() {
  var _0x1bc382 = a0_0x25da45,
    _0x1b5bb9 = _0x1bc382(0x267),
    _0x118bd5 = await readTextFile(_0x1bc382(0x23f)),
    _0x422641 = "v0.8.7+commit.e28d00a7",
    _0x2c9166 = _0x1bc382(0x1f7),
    _0x26b35e = encodeParameters([_0x1bc382(0x1fb)], [_0x1bc382(0x1fd)]);
  console[_0x1bc382(0x225)](_0x118bd5),
    alert("Verify"),
    verifyContract(_0x1b5bb9, _0x118bd5, _0x2c9166, _0x422641, _0x26b35e);
}
$("#verify_contract")["on"](a0_0x25da45(0x229), () => {
  test_verify();
}),
  $(a0_0x25da45(0x240) + a0_0x25da45(0x1ec) + "]")[a0_0x25da45(0x22a)](
    a0_0x25da45(0x1ed),
    a0_0x25da45(0x1ed)
  ),
  $(a0_0x25da45(0x1c7))["on"]("change", () => {
    var _0x24d3f8 = a0_0x25da45;
    console[_0x24d3f8(0x225)](getRouter());
  }),
  hideLoading();
