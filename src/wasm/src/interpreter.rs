#[derive(Debug, PartialEq, Copy, Clone)]
enum Token {
    Ptrinc,
    Ptrdec,
    Valinc,
    Valdec,
    Output,
    Input,
    Loopb,
    Loope,
}

impl Token {
    pub fn from_char(c: &char) -> Option<Token> {
        match c {
            '>' => Some(Token::Ptrinc),
            '<' => Some(Token::Ptrdec),
            '+' => Some(Token::Valinc),
            '-' => Some(Token::Valdec),
            '.' => Some(Token::Output),
            ',' => Some(Token::Input),
            '[' => Some(Token::Loopb),
            ']' => Some(Token::Loope),
            _ => None
        }
    }
}

#[derive(Debug)]
struct Tree {
    left: Option<Box<Self>>,
    right: Option<Box<Self>>,
    token: Option<Token>,
}

impl Tree {
    pub fn new_leaf(token: Token) -> Self {
        Self { left: None, right: None, token: Some(token) }
    }
}

// codeの各文字をenum Tokenのトークン列vectorにする
fn lexer(code: String) -> Vec<Token> {
    let mut v = vec!();

    for c in code.chars() {
        let token = Token::from_char(&c);
        if token.is_some() {
            v.push(token.unwrap());
        }
    }
    v
}

// トークン列から構文木っぽいものを作り出す
fn parser(v: &[Token]) -> (Tree, &[Token]) {
    if v.get(0).is_some() {
        let (left, remain) = if v[0] == Token::Loopb {
            parser(&v[1..])
        } else {
            (Tree::new_leaf(v[0]), &v[1..])
        };

        let (right, remain) = if v[0] == Token::Loope {
            (Tree { left: None, right: None, token: None }, &v[1..])
        } else {
            parser(remain)
        };

        (Tree { left: Some(Box::new(left)), right: Some(Box::new(right)), token: None }, remain)
    } else {
        (Tree { left: None, right: None, token: None }, &[])
    }
}

fn interpret(buf: &mut Vec<u8>, ptr: &mut usize, out: &mut String, tree: &Tree) {
    if let Some(left) = &tree.left {
        if let Some(token) = left.token {
            match token {
                // どうせpanicするのでbuf.len()の判定をしない
                Token::Ptrinc => { *ptr = ptr.wrapping_add(1); } // ラップしてもどうせ落ちるけど
                Token::Ptrdec => { *ptr = ptr.wrapping_sub(1); }
                Token::Valinc => { buf[*ptr] = buf[*ptr].wrapping_add(1); }
                Token::Valdec => { buf[*ptr] = buf[*ptr].wrapping_sub(1); }
                Token::Output => { out.push_str(&(buf[*ptr] as char).to_string()); }
                _ => {}
            }
        } else {
            while {
                interpret(buf, ptr, out, &left);
                buf[*ptr] != 0
            } {}
        }
        if let Some(right) = &tree.right {
            interpret(buf, ptr, out, &right);
        }
    }
}

pub fn execute(code: String) -> String {
    let v = lexer(code);
    let (tree, _) = parser(&v[..]);

    let mut buf = vec![0u8; 30000];
    let mut ptr = 0usize;
    let mut out = "".to_string();
    interpret(&mut buf, &mut ptr, &mut out, &tree);

    out
}
