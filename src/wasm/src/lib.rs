extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn add1(n: i32) -> i32 {
    n + 1
}

#[wasm_bindgen]
pub fn retstr(name: String) -> String {
    name
}

#[cfg(test)]
mod tests {
    use retstr;

    #[test]
    fn return_expected_string() {
        assert_eq!(retstr("aa".to_string()), "aa".to_string());
    }
}
