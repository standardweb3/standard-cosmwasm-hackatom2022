/**
* This file was automatically generated by cosmwasm-typescript-gen@0.3.9.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the cosmwasm-typescript-gen generate command to regenerate this file.
*/
import { CosmWasmClient, ExecuteResult, SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
export declare type ExecuteMsg = {
    create_denom: {
        subdenom: string;
        [k: string]: unknown;
    };
} | {
    change_admin: {
        denom: string;
        new_admin_address: string;
        [k: string]: unknown;
    };
} | {
    mint_tokens: {
        amount: Uint128;
        denom: string;
        mint_to_address: string;
        [k: string]: unknown;
    };
} | {
    burn_tokens: {
        amount: Uint128;
        burn_from_address: string;
        denom: string;
        [k: string]: unknown;
    };
};
export declare type Uint128 = string;
export interface GetDenomResponse {
    denom: string;
    [k: string]: unknown;
}
export interface InstantiateMsg {
    [k: string]: unknown;
}
export declare type QueryMsg = {
    get_denom: {
        creator_address: string;
        subdenom: string;
        [k: string]: unknown;
    };
};
export declare type Addr = string;
export interface State {
    owner: Addr;
    [k: string]: unknown;
}
export interface TokenfactoryReadOnlyInterface {
    contractAddress: string;
    getDenom: ({ creatorAddress, subdenom }: {
        creatorAddress: string;
        subdenom: string;
    }) => Promise<GetDenomResponse>;
}
export declare class TokenfactoryQueryClient implements TokenfactoryReadOnlyInterface {
    client: CosmWasmClient;
    contractAddress: string;
    constructor(client: CosmWasmClient, contractAddress: string);
    getDenom: ({ creatorAddress, subdenom }: {
        creatorAddress: string;
        subdenom: string;
    }) => Promise<GetDenomResponse>;
}
export interface TokenfactoryInterface extends TokenfactoryReadOnlyInterface {
    contractAddress: string;
    sender: string;
    createDenom: ({ subdenom }: {
        subdenom: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    changeAdmin: ({ denom, newAdminAddress }: {
        denom: string;
        newAdminAddress: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    mintTokens: ({ amount, denom, mintToAddress }: {
        amount: string;
        denom: string;
        mintToAddress: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    burnTokens: ({ amount, burnFromAddress, denom }: {
        amount: string;
        burnFromAddress: string;
        denom: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
}
export declare class TokenfactoryClient extends TokenfactoryQueryClient implements TokenfactoryInterface {
    client: SigningCosmWasmClient;
    sender: string;
    contractAddress: string;
    constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string);
    createDenom: ({ subdenom }: {
        subdenom: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    changeAdmin: ({ denom, newAdminAddress }: {
        denom: string;
        newAdminAddress: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    mintTokens: ({ amount, denom, mintToAddress }: {
        amount: string;
        denom: string;
        mintToAddress: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
    burnTokens: ({ amount, burnFromAddress, denom }: {
        amount: string;
        burnFromAddress: string;
        denom: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
}
//# sourceMappingURL=TokenfactoryContract.d.ts.map