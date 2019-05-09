import * as wasm from './optimized_bg';

/**
* @param {number} n
* @returns {number}
*/
export function add1(n) {
    return wasm.add1(n);
}

const lTextEncoder = typeof TextEncoder === 'undefined' ? require('util').TextEncoder : TextEncoder;

let cachedTextEncoder = new lTextEncoder('utf-8');

let cachegetUint8Memory = null;
function getUint8Memory() {
    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory;
}

let WASM_VECTOR_LEN = 0;

let passStringToWasm;
if (typeof cachedTextEncoder.encodeInto === 'function') {
    passStringToWasm = function(arg) {

        let size = arg.length;
        let ptr = wasm.__wbindgen_malloc(size);
        let writeOffset = 0;
        while (true) {
            const view = getUint8Memory().subarray(ptr + writeOffset, ptr + size);
            const { read, written } = cachedTextEncoder.encodeInto(arg, view);
            arg = arg.substring(read);
            writeOffset += written;
            if (arg.length === 0) {
                break;
            }
            ptr = wasm.__wbindgen_realloc(ptr, size, size * 2);
            size *= 2;
        }
        WASM_VECTOR_LEN = writeOffset;
        return ptr;
    };
} else {
    passStringToWasm = function(arg) {

        const buf = cachedTextEncoder.encode(arg);
        const ptr = wasm.__wbindgen_malloc(buf.length);
        getUint8Memory().set(buf, ptr);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    };
}

const lTextDecoder = typeof TextDecoder === 'undefined' ? require('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8');

function getStringFromWasm(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));
}

let cachedGlobalArgumentPtr = null;
function globalArgumentPtr() {
    if (cachedGlobalArgumentPtr === null) {
        cachedGlobalArgumentPtr = wasm.__wbindgen_global_argument_ptr();
    }
    return cachedGlobalArgumentPtr;
}

let cachegetUint32Memory = null;
function getUint32Memory() {
    if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== wasm.memory.buffer) {
        cachegetUint32Memory = new Uint32Array(wasm.memory.buffer);
    }
    return cachegetUint32Memory;
}
/**
* @param {string} name
* @returns {string}
*/
export function retstr(name) {
    const ptr0 = passStringToWasm(name);
    const len0 = WASM_VECTOR_LEN;
    const retptr = globalArgumentPtr();
    wasm.retstr(retptr, ptr0, len0);
    const mem = getUint32Memory();
    const rustptr = mem[retptr / 4];
    const rustlen = mem[retptr / 4 + 1];

    const realRet = getStringFromWasm(rustptr, rustlen).slice();
    wasm.__wbindgen_free(rustptr, rustlen * 1);
    return realRet;

}

const heap = new Array(32);

heap.fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let heap_next = heap.length;

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

export function __widl_f_get_element_by_id_Document(arg0, arg1, arg2) {
    let varg1 = getStringFromWasm(arg1, arg2);

    const val = getObject(arg0).getElementById(varg1);
    return isLikeNone(val) ? 0 : addHeapObject(val);

}

export function __widl_f_set_inner_html_Element(arg0, arg1, arg2) {
    let varg1 = getStringFromWasm(arg1, arg2);
    getObject(arg0).innerHTML = varg1;
}

export function __widl_instanceof_Window(idx) { return getObject(idx) instanceof Window ? 1 : 0; }

export function __widl_f_document_Window(arg0) {

    const val = getObject(arg0).document;
    return isLikeNone(val) ? 0 : addHeapObject(val);

}

export function __wbg_newnoargs_b4526aa2a6db81de(arg0, arg1) {
    let varg0 = getStringFromWasm(arg0, arg1);
    return addHeapObject(new Function(varg0));
}

function handleError(exnptr, e) {
    const view = getUint32Memory();
    view[exnptr / 4] = 1;
    view[exnptr / 4 + 1] = addHeapObject(e);
}

export function __wbg_call_a7a8823c404228ab(arg0, arg1, exnptr) {
    try {
        return addHeapObject(getObject(arg0).call(getObject(arg1)));
    } catch (e) {
        handleError(exnptr, e);
    }
}

export function __wbindgen_throw(ptr, len) {
    throw new Error(getStringFromWasm(ptr, len));
}

export function __wbindgen_object_clone_ref(idx) {
    return addHeapObject(getObject(idx));
}

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

export function __wbindgen_object_drop_ref(i) { dropObject(i); }

