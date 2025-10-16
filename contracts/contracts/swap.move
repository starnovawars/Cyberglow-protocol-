
module Cyberglow::Swap {
    use std::signer;

    struct Pool has key {
        token_a: u64,
        token_b: u64,
        reserve_a: u64,
        reserve_b: u64,
    }

    public fun create_pool(owner: &signer, token_a: u64, token_b: u64): Pool {
        Pool {
            token_a,
            token_b,
            reserve_a: 0,
            reserve_b: 0,
        }
    }

    public fun swap(pool: &mut Pool, amount_in: u64, is_a_to_b: bool): u64 {
        if (is_a_to_b) {
            pool.reserve_a = pool.reserve_a + amount_in;
            let amount_out = amount_in;
            pool.reserve_b = pool.reserve_b - amount_out;
            amount_out
        } else {
            pool.reserve_b = pool.reserve_b + amount_in;
            let amount_out = amount_in;
            pool.reserve_a = pool.reserve_a - amount_out;
            amount_out
        }
    }
}
