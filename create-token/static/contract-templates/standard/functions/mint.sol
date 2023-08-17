function mint(address account, uint256 amount) external onlyOwner {
    require(canMint, "the mint function isn't activated");
    _mint(account, amount);
}
