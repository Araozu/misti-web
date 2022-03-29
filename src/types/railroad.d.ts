declare type Railroad = { children: Railroad[] }

declare function Terminal(s: string): Railroad

declare function NonTerminal(s: string): Railroad

declare function Comment(s: string): Railroad

declare function Skip(): Railroad

declare function Sequence(...children: Railroad[]): Railroad

declare function Choice(index: number, ...children: Railroad[]): Railroad

declare function Optional(child: Railroad | string, skip: string): Railroad

declare function OneOrMore(child: Railroad, repeat?: Railroad): Railroad

declare function ZeroOrMore(child: Railroad, repeat?: Railroad, skip?: string): Railroad

declare function Diagram(...children: Railroad[]): { addTo: (element?: HTMLElement) => void }
