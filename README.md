# brainfuck interpreter in js and wasm もどき
for learning something


# requirement
- es6 compatible browser
- rust 1.30.0 +
- wasm32-unknown-unknown
- wasm-bindgen-cli
- optional: wasm-gc <- for .wasm optimization

- direnv
- yarn

# build

# memo

see package.json

## add wasm32-unknown-unknown to rustc target

[install rust 1.30.0 +](https://www.rust-lang.org/tools/install)

```shell
$ rustup target add wasm32-unknown-unknown
```

## install wasm-gc

```shell
$ cargo install --git https://github.com/alexcrichton/wasm-gc
```

## make wasm project

```fish
$ cargo new --lib <project_name>
# cd ./src && cargo new --lib wasm
```

## build wasm with wasm-bindgen
install wasm-bindgen

```shell
$ cargo install wasm-bindgen-cli
```

wasm-bindgen-cli generates js wrapper for wasm file

user wasm-bindgen to generate wrapper js file and import from entry js or something and then load it.

see package.json scripts


## build wasm without wasm-bindgen from rust code

write `lib.rs` like:

```rust
#[no_mangle]
pub extern "C" fn add1(v: i32) -> i32 {
    v + 1
}
```

note: write `#[no_mangle]` `extern "C"` so as not to export extra binaries


export wasm

```shell
$ cargo build --target=wasm32-unknown-unknown --release
```


manually:

```shell
$ rustc --target wasm32-unknown-unknown -O ./src/lib.rs --crate-type=cdylib
```

optimize: 

```shell
$ wasm-gc <input_wasm_filepath> -o <output_wasm_filepath>
# wasm-gc ./target/wasm32-unknown-unknown/release/wasm.wasm -o optimized.wasm
```
