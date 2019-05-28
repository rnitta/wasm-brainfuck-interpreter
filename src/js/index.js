import { lexer, SyntaxTree, Interpreter } from './_source';

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('execute').addEventListener('click', () => {
    const startTime = performance.now();
    const code = document.getElementById('code').value;
    const tokens = lexer(code);
    const tree = new SyntaxTree(tokens);
    const output = new Interpreter(tree.parsed).run();
    document.getElementById('stdout').innerText = output;
    const endTime = performance.now();
    document.getElementById('elapsed-time-js').innerHTML = `
        <span>execution time: ${endTime - startTime} ms.</span>
    `;
  });
});
