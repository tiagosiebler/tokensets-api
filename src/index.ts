const axios = require('axios').default;

import { ReblancingSet, GasEstimate } from './types';

export = class TokensetsAPI {
  private baseHost: string;
  private requestOptions: object;
  private requestInstance: any;

  constructor({ baseHost = 'https://api.tokensets.com/', requestOptions = {} }) {
    this.baseHost = baseHost;
    this.requestOptions = requestOptions;

    this.requestInstance = axios.create({
      baseURL: this.baseHost,
      timeout: 30000
    });
  }

  get(endpoint :string, requestConfig? :object) {
    return this.requestInstance.get(endpoint, requestConfig);
  }

  //https://docs.google.com/document/d/1i1duGQU6dFvhen76q0dOqSYhPPg5klxObndHkOc6IxA/edit#heading=h.nt2h8zajv280
  /**
   * @public returns a list of currently enabled rebalancing sets
   * @returns {Array<ReblancingSet>}
   */
  fetchRebalanceSets() :ReblancingSet[] {
    return this.get('public/v1/rebalancing_sets')
    .then(response => response.data)
    .then(data => data.rebalancing_sets);
  }

  /**
   * @public returns current rebalance of a rebalancing set, including proposal and auction information
   *
   * @param {string} rebalancingSetId
   * @returns
   * @memberof TokensetsAPI
   */
  fetchRebalanceSet(setId :string) :object {
    return this.get(`public/v1/rebalancing_sets/${setId}/rebalance`)
    .then(response => response.data)
    .catch(result => {
        if (result && result.response && result.response.data) {
          throw result.response.data;
        }
        throw result;
      });
  }

  /* the following APIs are unlisted and may be private */

  fetchRebalanceAuctionsRobo() :Array<object> {
    return this.get('v1/rebalance_auctions')
    .then(response => response.data)
    .then(data => data.rebalance_auctions);
  }

  fetchRebalanceAuctionsSocial() :Array<object> {
    return this.get('v1/rebalance_auctions?type=trading_pool')
    .then(response => response.data)
    .then(data => data.rebalance_auctions);
  }

  fetchRebalanceAuction(setId :string) :object {
    return this.get(`v1/rebalance_auctions/${setId}`)
    .then(response => response.data)
    .then(data => data.rebalance_auction)
    .catch((result: { response: { data: any; }; }) => {
      if (result && result.response && result.response.data) {
        throw result.response.data;
      }
      throw result;
    });
  }

  fetchCoins() :Array<object> {
    return this.get('v1/coins')
    .then(response => response.data)
  }

  fetchGasEstimates() :GasEstimate {
    return this.get('v1/gas_estimates')
    .then(response => response.data);
  }

  fetchTrader(traderApiKey :string) {
    const config = {
      "X-SET-TRADER-API-KEY": traderApiKey,
    };
    return this.get('public/v1/trader', config)
    .then(response => response.data);
  }
}