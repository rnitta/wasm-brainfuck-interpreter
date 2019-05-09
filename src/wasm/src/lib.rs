extern crate web_sys;
extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn add1(n: i32) -> i32 {
    n + 1
}

#[wasm_bindgen]
pub fn retstr(name: String) -> String {
    let window = web_sys::window().unwrap();
    let document = window.document().unwrap();
    let element = document.get_element_by_id("wasmoutput").unwrap();
    element.set_inner_html("hoge");

    name
}
