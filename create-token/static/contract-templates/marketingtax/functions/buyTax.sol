function setBuyTax(
    uint256 _wholeNumber,
    uint256 _firstNumberAfterDecimal,
    uint256 _secondNumberAfterDecimal
) public onlyOwner {
    require(
        _wholeNumber < 100 &&
            _firstNumberAfterDecimal <= 9 &&
            _secondNumberAfterDecimal <= 9
    );
    centiBuyTax =
        _wholeNumber *
        100 +
        _firstNumberAfterDecimal *
        10 +
        _secondNumberAfterDecimal;
}
