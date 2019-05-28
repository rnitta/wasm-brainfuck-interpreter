import { Interpreter, lexer, SyntaxTree } from '../js/_source';

const wasm = import('./optimized.js');
wasm.then(module => {
  const { execute } = module;
  document.getElementById('websystestbtn').addEventListener('click', () => {
    const startTime = performance.now();
    execute();
    const endTime = performance.now();
    document.getElementById('elapsed-time-wasm').innerHTML = `
        <span>execution time: ${endTime - startTime} ms.</span>
    `;
  });
});
