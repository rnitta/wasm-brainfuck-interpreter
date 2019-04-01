//fixme: 分割する

// 設定
const MEMSIZE = 30000; // 適当に 30,000 * 8bit = 30KBの仮想メモリ
const SHOULD_WRAP = true; // Uint8かInt8か

// @param {string} code
// @return {Array<string>} token array
function lexer(code) {
  return Array.from(code).filter(c => {
    // omit ','
    return ['>', '<', '+', '-', '.', '[', ']'].indexOf(c) > -1;
  });
}

class TokenNode {
  // @param {string} token - a single character
  // @param {?TokenNode} left
  // @param {?TokenNode} right
  constructor(token, left, right) {
    this.token = token;
    this.left = left;
    this.right = right;
  }

  // breadth-first
  // @param {(string) -> void} callback - callback
  // @return {{ shouldLoopBack: boolean, shouldSkipForward: boolean }}
  traverse(callback) {
    let { shouldLoopBack, shouldSkipForward } = callback(this.token);
    if (this.right) {
      while (
        !shouldSkipForward &&
        this.right.traverse(callback).shouldLoopBack
      ) {}
    }

    if (this.left) {
      shouldLoopBack = this.left.traverse(callback).shouldLoopBack;
    }
    return { shouldLoopBack, shouldSkipForward: false };
  }
}

class SyntaxTree {
  // @param {Array<string>} tokens
  constructor(tokens) {
    this._tokens = tokens;
    this._at = 0;
    this.parsed = this._parse();
  }

  _parse() {
    if (this._at >= this._tokens.length) return null;
    const token = this._tokens[this._at];
    let node = void 0;
    let rightNode = null;
    this._at++;

    if (token === '[') {
      rightNode = this._parse();
    }

    if (['>', '<', '+', '-', '.', '['].indexOf(token) > -1) {
      node = new TokenNode(token, this._parse(), rightNode);
    } else {
      // if ']'
      node = new TokenNode(token, null, null);
    }

    return node;
  }
}

class Interpreter {
  // @param {TokenNode} tree
  constructor(nodeRoot) {
    this._nodeRoot = nodeRoot;
    this._ptr = 0;
    this._stdout = '';
    this._buffer = new (SHOULD_WRAP ? Uint8Array : Int8Array)(MEMSIZE).fill(0);
  }

  // @return {string} stdout
  run() {
    this._nodeRoot.traverse(token => this._run.call(this, token));
    return this._stdout;
  }

  // @param {TokenNode} node
  // @return {{ shouldLoopBack: boolean, shouldSkipForward: boolean }}
  _run(token) {
    if (token) {
      if (token === '+') {
        this._buffer[this._ptr]++;
      } else if (token === '-') {
        this._buffer[this._ptr]--;
      } else if (token === '>') {
        this._ptr++;
      } else if (token === '<') {
        this._ptr--;
      } else if (token === '[') {
        return {
          shouldSkipForward: this._buffer[this._ptr] === 0,
          shouldLoopBack: false,
        };
      } else if (token === ']') {
        return {
          shouldSkipForward: false,
          shouldLoopBack:
            !isNaN(this._buffer[this._ptr]) && this._buffer[this._ptr] !== 0,
        };
      } else if (token === '.') {
        this._stdout += String.fromCharCode(this._buffer[this._ptr]);
      }
      return { shouldSkipForward: false, shouldLoopBack: false };
    }
  }
}

export { lexer, SyntaxTree, Interpreter };
