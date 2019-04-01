const wasm = import("./optimized.js");
wasm.then(module => {
  const { retstr } = module
  console.log(retstr('a'))
})
