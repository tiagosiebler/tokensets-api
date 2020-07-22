# TokenSets API

Unofficial & minimal node.js wrapper around the tokensets.com APIs. Leverages typescript & axios.

## Usage:
Import and instance the module, then call API methods as desired. All API methods return a promise:
```javascript
const TokensetsAPI = require('tokensets-api');
const TokenAPI = new TokensetsAPI({});

(async () => {
  const rebalanceSetList = await TokenAPI.fetchRebalanceSets();
  console.log('rebalanceSetList: ', rebalanceSetList);

  const rebalanceSet = await TokenAPI.fetchRebalanceSet('setIdString');
  console.log('rebalanceSet: ', rebalanceSet);
})();
```

## Contributions & Thanks
If you found this project interesting or useful, create accounts with my referral links:
- [Bybit](https://www.bybit.com/en-US/register?affiliate_id=9410&language=en-US&group_id=0&group_type=1)
- [Binance](https://www.binance.com/en/register?ref=20983262)

Or feed my coffee addiction using any of these:
- BTC: `1C6GWZL1XW3jrjpPTS863XtZiXL1aTK7Jk`
- ETH (ERC20): `0xd773d8e6a50758e1ada699bb6c4f98bb4abf82da`

### Improvements & Pull Requests
Contributions are encouraged, I will review any incoming pull requests. See the issues tab for todo items.