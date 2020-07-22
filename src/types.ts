
export interface RebalanceCriteria {
  type :string;
  price :Array<{
    direction :string;
    value :string;
    current :string;
    requirement :string;
  }>;
};

export interface RebalanceComponent {
  id :string;
  name :string;
  symbol :string;
  address :string;
  quantity :string;
  units :string;
};

export interface ReblancingSet {
  id :string;
  strategy :string;
  address :string;
  manager :string;
  name :string;
  short_description :string;
  price_usd :string;
  market_cap :string;
  image :string;
  natural_unit :string;
  last_rebalanced_at :string;
  rebalance_interval :number;
  proposal_period :number;
  status :string;
  unit_shares :string;
  rebalance_criteria :RebalanceCriteria;
  components :RebalanceComponent[];
};

export interface Flow {
  name :string;
  address :string;
  units :string;
  decimals :number;
  current_price_usd :string;
};

export interface RebalanceState {
  status :string;
  auction_can_start_at :string;
  proposal_start_time :string;
  auction_library :string;
  time_to_pivot_seconds :string;
  auction_pivot_price :string;
  auction_start_time? :string;
  starting_auction_supply? :string;
  minimum_bid? :string;
  remaining_current_sets? :string;
  current_chunk :number;
  chunk_count :number;
  last_chunk_end_at :number;
  pivot_time? :string;
  inflows :Flow[];
  outflows :Flow[];
};

export interface GasEstimate {
  fast :number;
  average :number;
}
