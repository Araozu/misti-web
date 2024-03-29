Prism.languages.misti = {
    "comment": [
        {
            pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
            lookbehind: true,
            greedy: true,
        },
        {
            pattern: /(^|[^\\:])\/\/.*/,
            lookbehind: true,
            greedy: true,
        },
    ],
    "string": {
        pattern: /(["])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: true,
    },
    "keyword": /\b(?:break|catch|continue|do|else|elif|finally|for|fun|if|in|fn|nil|return|throw|try|while|val|var|type|match|with|of|abstract|class|interface|private|public|override|open)\b/,
    "number": /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    "operator": /[<>]=?|[!=]=?=?|--?|\$|\+\+?|&&?|\|\|?|[?*/~^%]/,
    "punctuation": /[{}[\];(),.]/,
    "boolean": /\b(?:false|true)\b/,
    "class-name": /\b[A-Z][a-zA-Z_0-9]+\b/,
    "variable": /\b[a-z_0-9][a-zA-Z_0-9]+:/,
};
