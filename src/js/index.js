import { lexer, SyntaxTree, Interpreter } from './_source';

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('execute').addEventListener('click', () => {
    const code = document.getElementById('code').value;
    const startTime = performance.now();
    const tokens = lexer(code);
    const tree = new SyntaxTree(tokens);
    const output = new Interpreter(tree.parsed).run();
    const endTime = performance.now();
    document.getElementById('stdout').innerText = output;
    document.getElementById('elapsed-time').innerHTML = `
        <span>execution time: ${endTime - startTime} ms.</span>
    `;
  });
});
