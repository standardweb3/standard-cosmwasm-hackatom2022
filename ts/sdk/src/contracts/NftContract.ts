/**
* This file was automatically generated by cosmwasm-typescript-gen@0.3.9.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the cosmwasm-typescript-gen generate command to regenerate this file.
*/

import { CosmWasmClient, ExecuteResult, SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
export type Expiration = {
  at_height: number;
} | {
  at_time: Timestamp;
} | {
  never: {
    [k: string]: unknown;
  };
};
export type Timestamp = Uint64;
export type Uint64 = string;
export interface AllNftInfoResponse {
  access: OwnerOfResponse;
  info: NftInfoResponseForNullable_Empty;
  [k: string]: unknown;
}
export interface OwnerOfResponse {
  approvals: Approval[];
  owner: string;
  [k: string]: unknown;
}
export interface Approval {
  expires: Expiration;
  spender: string;
  [k: string]: unknown;
}
export interface NftInfoResponseForNullable_Empty {
  extension?: Empty | null;
  token_uri?: string | null;
  [k: string]: unknown;
}
export interface Empty {
  [k: string]: unknown;
}
export interface AllTokensResponse {
  tokens: string[];
  [k: string]: unknown;
}
export interface ApprovalResponse {
  approval: Approval;
  [k: string]: unknown;
}
export interface ApprovalsResponse {
  approvals: Approval[];
  [k: string]: unknown;
}
export interface ContractInfoResponse {
  name: string;
  symbol: string;
  [k: string]: unknown;
}
export type ExecuteMsg = {
  transfer_nft: {
    recipient: string;
    token_id: string;
    [k: string]: unknown;
  };
} | {
  send_nft: {
    contract: string;
    msg: Binary;
    token_id: string;
    [k: string]: unknown;
  };
} | {
  approve: {
    expires?: Expiration | null;
    spender: string;
    token_id: string;
    [k: string]: unknown;
  };
} | {
  revoke: {
    spender: string;
    token_id: string;
    [k: string]: unknown;
  };
} | {
  approve_all: {
    expires?: Expiration | null;
    operator: string;
    [k: string]: unknown;
  };
} | {
  revoke_all: {
    operator: string;
    [k: string]: unknown;
  };
} | {
  mint: MintMsgForNullable_Empty;
} | {
  burn: {
    token_id: string;
    [k: string]: unknown;
  };
};
export type Binary = string;
export interface MintMsgForNullable_Empty {
  extension?: Empty | null;
  owner: string;
  token_id: string;
  token_uri?: string | null;
  [k: string]: unknown;
}
export interface InstantiateMsg {
  minter: string;
  name: string;
  symbol: string;
  [k: string]: unknown;
}
export interface MinterResponse {
  minter: string;
  [k: string]: unknown;
}
export interface NftInfoResponse {
  extension?: Empty | null;
  token_uri?: string | null;
  [k: string]: unknown;
}
export interface NumTokensResponse {
  count: number;
  [k: string]: unknown;
}
export interface AllOperatorsResponse {
  operators: Approval[];
  [k: string]: unknown;
}
export type QueryMsg = {
  owner_of: {
    include_expired?: boolean | null;
    token_id: string;
    [k: string]: unknown;
  };
} | {
  approval: {
    include_expired?: boolean | null;
    spender: string;
    token_id: string;
    [k: string]: unknown;
  };
} | {
  approvals: {
    include_expired?: boolean | null;
    token_id: string;
    [k: string]: unknown;
  };
} | {
  all_operators: {
    include_expired?: boolean | null;
    limit?: number | null;
    owner: string;
    start_after?: string | null;
    [k: string]: unknown;
  };
} | {
  num_tokens: {
    [k: string]: unknown;
  };
} | {
  contract_info: {
    [k: string]: unknown;
  };
} | {
  nft_info: {
    token_id: string;
    [k: string]: unknown;
  };
} | {
  all_nft_info: {
    include_expired?: boolean | null;
    token_id: string;
    [k: string]: unknown;
  };
} | {
  tokens: {
    limit?: number | null;
    owner: string;
    start_after?: string | null;
    [k: string]: unknown;
  };
} | {
  all_tokens: {
    limit?: number | null;
    start_after?: string | null;
    [k: string]: unknown;
  };
} | {
  minter: {
    [k: string]: unknown;
  };
};
export interface TokensResponse {
  tokens: string[];
  [k: string]: unknown;
}
export interface NftReadOnlyInterface {
  contractAddress: string;
  ownerOf: ({
    includeExpired,
    tokenId
  }: {
    includeExpired?: boolean;
    tokenId: string;
  }) => Promise<OwnerOfResponse>;
  approval: ({
    includeExpired,
    spender,
    tokenId
  }: {
    includeExpired?: boolean;
    spender: string;
    tokenId: string;
  }) => Promise<ApprovalResponse>;
  approvals: ({
    includeExpired,
    tokenId
  }: {
    includeExpired?: boolean;
    tokenId: string;
  }) => Promise<ApprovalsResponse>;
  allOperators: ({
    includeExpired,
    limit,
    owner,
    startAfter
  }: {
    includeExpired?: boolean;
    limit?: number;
    owner: string;
    startAfter?: string;
  }) => Promise<AllOperatorsResponse>;
  numTokens: () => Promise<NumTokensResponse>;
  contractInfo: () => Promise<ContractInfoResponse>;
  nftInfo: ({
    tokenId
  }: {
    tokenId: string;
  }) => Promise<NftInfoResponse>;
  allNftInfo: ({
    includeExpired,
    tokenId
  }: {
    includeExpired?: boolean;
    tokenId: string;
  }) => Promise<AllNftInfoResponse>;
  tokens: ({
    limit,
    owner,
    startAfter
  }: {
    limit?: number;
    owner: string;
    startAfter?: string;
  }) => Promise<TokensResponse>;
  allTokens: ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: string;
  }) => Promise<TokensResponse>;
  minter: () => Promise<MinterResponse>;
}
export class NftQueryClient implements NftReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.ownerOf = this.ownerOf.bind(this);
    this.approval = this.approval.bind(this);
    this.approvals = this.approvals.bind(this);
    this.allOperators = this.allOperators.bind(this);
    this.numTokens = this.numTokens.bind(this);
    this.contractInfo = this.contractInfo.bind(this);
    this.nftInfo = this.nftInfo.bind(this);
    this.allNftInfo = this.allNftInfo.bind(this);
    this.tokens = this.tokens.bind(this);
    this.allTokens = this.allTokens.bind(this);
    this.minter = this.minter.bind(this);
  }

  ownerOf = async ({
    includeExpired,
    tokenId
  }: {
    includeExpired?: boolean;
    tokenId: string;
  }): Promise<OwnerOfResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      owner_of: {
        include_expired: includeExpired,
        token_id: tokenId
      }
    });
  };
  approval = async ({
    includeExpired,
    spender,
    tokenId
  }: {
    includeExpired?: boolean;
    spender: string;
    tokenId: string;
  }): Promise<ApprovalResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      approval: {
        include_expired: includeExpired,
        spender,
        token_id: tokenId
      }
    });
  };
  approvals = async ({
    includeExpired,
    tokenId
  }: {
    includeExpired?: boolean;
    tokenId: string;
  }): Promise<ApprovalsResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      approvals: {
        include_expired: includeExpired,
        token_id: tokenId
      }
    });
  };
  allOperators = async ({
    includeExpired,
    limit,
    owner,
    startAfter
  }: {
    includeExpired?: boolean;
    limit?: number;
    owner: string;
    startAfter?: string;
  }): Promise<AllOperatorsResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      all_operators: {
        include_expired: includeExpired,
        limit,
        owner,
        start_after: startAfter
      }
    });
  };
  numTokens = async (): Promise<NumTokensResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      num_tokens: {}
    });
  };
  contractInfo = async (): Promise<ContractInfoResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      contract_info: {}
    });
  };
  nftInfo = async ({
    tokenId
  }: {
    tokenId: string;
  }): Promise<NftInfoResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      nft_info: {
        token_id: tokenId
      }
    });
  };
  allNftInfo = async ({
    includeExpired,
    tokenId
  }: {
    includeExpired?: boolean;
    tokenId: string;
  }): Promise<AllNftInfoResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      all_nft_info: {
        include_expired: includeExpired,
        token_id: tokenId
      }
    });
  };
  tokens = async ({
    limit,
    owner,
    startAfter
  }: {
    limit?: number;
    owner: string;
    startAfter?: string;
  }): Promise<TokensResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      tokens: {
        limit,
        owner,
        start_after: startAfter
      }
    });
  };
  allTokens = async ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: string;
  }): Promise<AllTokensResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      all_tokens: {
        limit,
        start_after: startAfter
      }
    });
  };
  minter = async (): Promise<MinterResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      minter: {}
    });
  };
}
export interface NftInterface extends NftReadOnlyInterface {
  contractAddress: string;
  sender: string;
  transferNft: ({
    recipient,
    tokenId
  }: {
    recipient: string;
    tokenId: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
  sendNft: ({
    contract,
    msg,
    tokenId
  }: {
    contract: string;
    msg: string;
    tokenId: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
  approve: ({
    expires,
    spender,
    tokenId
  }: {
    expires?: Expiration;
    spender: string;
    tokenId: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
  revoke: ({
    spender,
    tokenId
  }: {
    spender: string;
    tokenId: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
  approveAll: ({
    expires,
    operator
  }: {
    expires?: Expiration;
    operator: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
  revokeAll: ({
    operator
  }: {
    operator: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
  mint: ({
    extension,
    owner,
    tokenId,
    tokenUri
  }: {
    extension?: Empty;
    owner: string;
    tokenId: string;
    tokenUri?: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
  burn: ({
    tokenId
  }: {
    tokenId: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
}
export class NftClient extends NftQueryClient implements NftInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.transferNft = this.transferNft.bind(this);
    this.sendNft = this.sendNft.bind(this);
    this.approve = this.approve.bind(this);
    this.revoke = this.revoke.bind(this);
    this.approveAll = this.approveAll.bind(this);
    this.revokeAll = this.revokeAll.bind(this);
    this.mint = this.mint.bind(this);
    this.burn = this.burn.bind(this);
  }

  transferNft = async ({
    recipient,
    tokenId
  }: {
    recipient: string;
    tokenId: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      transfer_nft: {
        recipient,
        token_id: tokenId
      }
    }, fee, memo, funds);
  };
  sendNft = async ({
    contract,
    msg,
    tokenId
  }: {
    contract: string;
    msg: string;
    tokenId: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      send_nft: {
        contract,
        msg,
        token_id: tokenId
      }
    }, fee, memo, funds);
  };
  approve = async ({
    expires,
    spender,
    tokenId
  }: {
    expires?: Expiration;
    spender: string;
    tokenId: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      approve: {
        expires,
        spender,
        token_id: tokenId
      }
    }, fee, memo, funds);
  };
  revoke = async ({
    spender,
    tokenId
  }: {
    spender: string;
    tokenId: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      revoke: {
        spender,
        token_id: tokenId
      }
    }, fee, memo, funds);
  };
  approveAll = async ({
    expires,
    operator
  }: {
    expires?: Expiration;
    operator: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      approve_all: {
        expires,
        operator
      }
    }, fee, memo, funds);
  };
  revokeAll = async ({
    operator
  }: {
    operator: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      revoke_all: {
        operator
      }
    }, fee, memo, funds);
  };
  mint = async ({
    extension,
    owner,
    tokenId,
    tokenUri
  }: {
    extension?: Empty;
    owner: string;
    tokenId: string;
    tokenUri?: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      mint: {
        extension,
        owner,
        token_id: tokenId,
        token_uri: tokenUri
      }
    }, fee, memo, funds);
  };
  burn = async ({
    tokenId
  }: {
    tokenId: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      burn: {
        token_id: tokenId
      }
    }, fee, memo, funds);
  };
}