extern crate web_sys;
extern crate wasm_bindgen;

use wasm_bindgen::{prelude::*, JsCast};
use web_sys::*;

mod interpreter;

#[wasm_bindgen]
pub fn execute() {
    let window = web_sys::window().unwrap();
    let document = window.document().unwrap();
    let code: String = {
        let elm: Element = document.get_element_by_id("wasmcode").unwrap();
        let elm: HtmlTextAreaElement = JsCast::unchecked_from_js(elm.dyn_into().unwrap());
        elm.value()
    };

    let output_elm: HtmlTextAreaElement = {
        let elm: Element = document.get_element_by_id("wasmoutput").unwrap();
        JsCast::unchecked_from_js(elm.dyn_into().unwrap())
    };
    output_elm.set_value(&interpreter::execute(code));
}
