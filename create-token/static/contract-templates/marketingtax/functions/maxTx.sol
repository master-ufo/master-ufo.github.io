function setMaxTx(
    uint256 _wholeNumber,
    uint256 _firstNumberAfterDecimal,
    uint256 _secondNumberAfterDecimal
) external onlyOwner {
    require(
        _wholeNumber < 100 &&
            _firstNumberAfterDecimal <= 9 &&
            _secondNumberAfterDecimal <= 9
    );
    maxTxAmount =
        (_wholeNumber *
            100 +
            _firstNumberAfterDecimal *
            10 +
            _secondNumberAfterDecimal) *
        totalSupply().div(10000);
}
