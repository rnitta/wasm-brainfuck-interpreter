const wasm = import('./optimized.js');
wasm.then(module => {
  const { add1, retstr } = module;
  document.getElementById('websystestbtn').addEventListener('click', () => {
    console.log(add1(1));
    console.log(retstr('a'));
  });
});
