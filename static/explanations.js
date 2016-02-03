var explanations = {
"00":'',
"01":'',
"02":'',
"03":'',
"04":'',
"05":'',
"06":'',
"07":'',
"08":'',
"09":'push a single byte of unformatted input from STDIN (push sys.stdin.read(1))',
"0A":'',
"0B":'',
"0C":'push all data from stdin as a string',
"0D":'',
"0E":'',
"0F":'',
"10":'',
"11":'',
"12":'',
"13":'',
"14":'',
"15":'',
"16":'',
"17":'',
"18":'',
"19":'',
"1A":'',
"1B":'',
"1C":'',
"1D":'',
"1E":'',
"1F":'',
"20":'push the # of elements on the stack (push len(stack))',
"21":'pop a: push a! (factorial(a))',
"22":'string literal, reads until next " and pushes value onto stack. An implied " is present at EOF if needed.',
"23":'pop a: push list(a)',
"24":'pop a: push str(a)',
"25":'pop a,b: push a%b; pop "a",[b]: push "a"%[b]',
"26":'pop a,b: push (a & b)',
"27":'pushes next character onto stack as character literal (length-1 string)',
"28":'rotates stack right by 1',
"29":'rotates stack left by 1',
"2A":'pop a,b: push a*b; pop "a",b: repeat "a" b times, push "a" ("a"*b); pop a,[b] or [b],a: apply a* to each element in the array; pop [a],[b]: push dot product of [a] and [b] (sum([a[i]*b[i] for i in len(a)])) (shorter is padded with 0s)',
"2B":'pop a,b: push a+b; pop "a","b": push concatenation of "a" and "b"; pop [a],[b]: push [a][b] (append [b] to [a]); pop a,[b] or [b],a: apply a+ to each element in the array',
"2C":'read value from stdin and push',
"2D":'pop a,b: push a-b; pop [a],[b] (or "a",[b] or [a],"b" or "a","b"): push [a]-[b] (all elements of [a] not in [b])',
"2E":'pop a: write a to stdout; pop f: f. (call f and execute . recursively)',
"2F":'pop a,b: push a/b (float division); pop [a]: rotate [a] right by 1, push [a]',
"30":'push 0',
"31":'push 1',
"32":'push 2',
"33":'push 3',
"34":'push 4',
"35":'push 5',
"36":'push 6',
"37":'push 7',
"38":'push 8',
"39":'push 9',
"3A":'): numeric literal delimiter: pushes the string between it and the following : as a numeric value, or 0 if it cannot be converted. An implicit : is present at EOF if needed.',
"3B":'pop a: push a,a (duplicates top element)',
"3C":'pop a,b: push 1 if a<b else 0',
"3D":'pop a,b: push 1 if a==b else 0',
"3E":'pop a,b: push 1 if a>b else 0',
"3F":'NOP, extended expressions if -e flag is passed',
"40":'pop a,b: push a,b (rotate top 2 elements)',
"41":'pop a: push abs(a)',
"42":'pop a,b: push a random integer in [a,b) (randrange(a,b))',
"43":'pop a: push cos(a)',
"44":'pop a: push a-1',
"45":'pop a: push erf(a); pop [a],b: push [a][b] (bth item in [a]) (also works for strings)',
"46":'pop a: push Fib(a) (Fib(0)=0, Fib(1)=Fib(2)=1)',
"47":'push a random float in the range [0,1) (push random())',
"48":'if stack is empty: push "Hello, World!"',
"49":'pop a,b,c: push b if a is truthy, else push c',
"4A":'pop a: push a random integer in [0,a) (randrange(a)); pop [a] or "a": push a random element from [a] or "a" (random.choice([a]|"a"))',
"4B":'pop a: push ceil(a)',
"4C":'pop a: push floor(a)',
"4D":'pop f,[a], execute f for each element in [a], using the element as a temporary stack, push [a] (similar to map(f,[a])); pop [a]: push max([a])',
"4E":'if stack is empty: push the lyrics to "99 Bottles of Beer"',
"4F":'pop "a" or [a]: push [ord(c) for each c in "a" or [a], starting from the end]. If a list is popped, it is flattened, and if it contains strings of length > 1, the strings are exploded in-place ("ABC" -> [65,66,67], ["A","B","CD"] -> [65,66,67,68])',
"50":'pop a: push the a-th prime (zero-indexed)',
"51":"if stack is empty: push the program's source code",
"52":'pop f,[a]: call f, using [a] as a temporary stack, push [a] (similar to reduce(f,[a])); pop "a" or [a]: push reversed value ("a".reverse() or [a][::-1]); pop a: push [1,2,...,a] (range(1,a+1))',
"53":'pop a: push sin(a); pop "a" or [a]: push sorted(a)',
"54":'pop a: push tan(a); pop [a],b,c: set [a][b] to c, push [a]',
"55":'pop [a],[b]: push union of [a] and [b]',
"56":'pop a,b: push uniform(a,b) (random float between a and b)',
"57":'loop delimiter: peek top of stack, repeat code in loop while a evaluates to true',
"58":'pop a: discard',
"59":'pop a: push !bool(a) (logical negate, opposite of b)',
"5A":'pop [a],[b]: push zip([a],[b]); pop a, zip the next a lists',
"5B":'begin list literal, values are delimited by commas (,)',
"5C":'pop a,b: push a/b (integer division); pop [a]: rotate [a] left by 1, push [a]',
"5D":'end list literal',
"5E":'pop a,b: push pow(a,b)',
"5F":'pop a: push ln(a)',
"60":'function literal delimiter, pushes function whose body contains all of the commands until the next `. An implied ` is present at EOF if needed.',
"61":'invert the stack ([a,b,c,d] -> [d,c,b,a])',
"62":'pop a: push 0 if a==0 else 1; pop "a" or [a]: push 0 if len(a)==0 else 1; pop f: push 0 if len(f)==0 else 1',
"63":'pop a: push character at ordinal a%256; pop [a],b: push [a].count(b); pop "a","b": push "a".count("b")',
"64":'pop [a]: dequeue b from [a], push [a],b',
"65":'pop a: push exp(a)',
"66":'pop a: push the Fibonacci index of a if a is a Fibonacci number, else -1; pop "a",[b]: push "a".format(*[b])',
"67":'pop a,b: push gcd(a,b)',
"68":'pop a,b: push sqrt(a*a+b*b) (Euclidean norm)',
"69":'pop "a": push atof(a); pop [a]: push each element from [a], starting from end (flatten)',
"6A":'pop "a",[b]: push "a".join([b]) (converting values in [b] to strings with $ if necessary)',
"6B":'pop all elements from stack, convert to list (in the order they were on the stack, starting from the top), and push',
"6C":'pop "a" or [a] or f: push len(a) (or len(f))',
"6D":'pop a: push int(a),frac(a) (modf(a)); pop [a]: push min([a])',
"6E":'pop a,b: push a b times; pop f,b: call f b times',
"6F":'pop [a],b: push b to [a], push [a]',
"70":'pop a: push 1 if a is prime else 0; pop [a]: pop b from [a], push [a],b',
"71":'pop [a],b: enqueue b in [a], push [a]',
"72":'pop "a": push each character in "a", starting from the end (explode string); pop a: push [0,1,...,a-1] (range(0,a))',
"73":'pop a: push sgn(a); pop [a],[b]: push a list of sublists of [a] split by any occurrences of elements of [b] (with "a", the sublists are strings)',
"74":'pop all elements from stack, flatten any lists and explode any strings, and push them in the same order they were popped (full stack flatten/explode)',
"75":'pop a: push a+1',
"76":'pop a: seed the RNG with a (random.seed(a))',
"77":'pop a: push the full positive prime factorization of |a| (18 -> [[2,1],[3,2]], -5 -> [[5,1]])',
"78":'pop a,b: push [a,b) (range(a,b))',
"79":'pop a: push the positive prime factors of |a| (18 -> [2,3], -5 -> [5])',
"7A":'pop a: repeat . a times (pop a times and print to stdout)',
"7B":'pop a: rotate stack right a times',
"7C":'pop a,b: push (a | b)',
"7D":'pop a: rotate stack left a times',
"7E":'pop a: push ~a (unary bitwise negate)',
"7F":'terminate the program (without implicit stack popping and printing)',
"80":'pop a,b: push a+bi; pop [a]: pop pairs of real numerics b,c from [a] and push b+ci (appending 0 to [a] if len([a]) is odd)',
"81":'pop entire stack and print to stdout',
"82":'pop entire stack (clear stack)',
"83":'pop a: push asin(a)',
"84":'pop a: push acos(a)',
"85":'pop a: push atan(a)',
"86":'pop a,b: push atan2(a,b)',
"87":'pop a: push asinh(a)',
"88":'pop a: push acosh(a)',
"89":'pop a: push atanh(a)',
"8A":'pop a: push repr(a)',
"8B":'push i, the imaginary unit (sqrt(-1) or 0+1i)',
"8C":'pop a, push 0+ai; pop [a], push [a] with every element multiplied by i',
"8D":'pop a: push 1/a; pop [a]: push numerics from [a]',
"8E":'pop a: push sinh(a)',
"8F":'pop a: push cosh(a)',
"90":'pop a: push tanh(a)',
"91":'pop [a]: push mean([a])',
"92":'pop "a","b","c": push "a".replace("b","c"); pop [a]: push strings from [a]',
"93":'pop "a": push "a".strip()',
"94":'pop "a": push "a".lstrip()',
"95":'pop "a": push "a".rstrip()',
"96":'pop "a": push "a".upper()',
"97":'pop "a": push "a".lower()',
"98":'pop "a": push "a".title()',
"99":'pop "a": push "a".swapcase()',
"9A":'pop [a]: push mode([a])',
"9B":'pop a,b: push abs(a)*sgn(b)',
"9C":'pop "a": push a function whose code is "a"; pop [a]: push functions from [a]',
"9D":'pop [a],[b]: push the result of pairwise addition of [a] and [b], padding the shorter with 0s',
"9E":'pop z: push phase(z)',
"9F":'pop f: call f',
"A0":'pop z: push the complex conjugate of z',
"A1":'pop [a],b: push [a].index(b) (0-based, -1 if not found)',
"A2":'pop a: if bool(a) push a, else terminate the program (conditional exit); terminate the program if the stack is empty',
"A3":'push the lowercase English alphabet (ordinals 97-122)',
"A4":'pop [a]: push enumerate([a]) ([[i,a[i]] for i in range(len(a))])',
"A5":'pop [a]: push lists from [a]',
"A6":'pop a: push a*a',
"A7":'pop a: push degrees(a)',
"A8":'pop a,b: push int(a,b) (interpret a as a base-b int)',
"A9":'pop a: push a+2',
"AA":'pop a: push a-2',
"AB":'pop a: push a/2 (float division)',
"AC":'pop a: push a/4 (float division)',
"AD":'pop a,b: push a string representing a in base b',
"AE":'pop a,b: insert b at position a, indexed from the bottom of the stack',
"AF":'pop a,b: insert b at position a, indexed from the top of the stack',
"B0":'pop [a],[b]: push [[a][i] if [b][i] for i in len(a)], pads [b] with 0s if necessary',
"B1":'pop a: push totient(a) (# of integers <= a that are coprime with a)',
"B2":'pop a: push pi(a) (# of primes <= a)',
"B3":'duplicate stack ([a,b,c] => [a,b,c,a,b,c])',
"B4":'pop a,b: push 1 if a and b are coprime else 0',
"B5":'',
"B6":'',
"B7":'',
"B8":'',
"B9":"pop a: push the ath row in Pascal's triangle",
"BA":'pop [a] or "a": push median([a]/"a") (using ordinals if string)',
"BB":'pop a: save a in register 0',
"BC":'pop a: save a in register 1',
"BD":'push the value in register 0',
"BE":'push the value in register 1',
"BF":'pop a,b: push b to register a',
"C0":'pop a: push the value in register a',
"C1":'',
"C2":'',
"C3":'',
"C4":'',
"C5":'duplicate each element on stack ([a,b,c] => [a,a,b,b,c,c])',
"C6":'pop a: make a total copies of each element on stack (3 [a,b,c] -> [a,a,a,b,b,b,c,c,c])',
"C7":'pop a: pop a elements and push a list containing those elements in their original order',
"C8":'',
"C9":'',
"CA":'',
"CB":'push pi',
"CC":'push e',
"CD":'',
"CE":'pop f: while value on top of stack is truthy (peek), call f',
"CF":'',
"D0":'',
"D1":'pop a: push 10**a',
"D2":'pop a: push log(a) (log base 10)',
"D3":'pop a: push 2**a',
"D4":'pop a: push lg(a) (log base 2)',
"D5":'push ln(2)',
"D6":'',
"D7":'',
"D8":'',
"D9":'',
"DA":'',
"DB":'pop a,b: push C(a,b) (aCb)',
"DC":'pop a,b: push P(a,b) (aPb)',
"DD":'pop "a": push b64decode("a")',
"DE":'pop "a": push b64encode("a")',
"DF":'pop a: push digits in base a',
"E0":'',
"E1":'',
"E2":'pop a: push Gamma(a)',
"E3":'pop [a]: push product([a])',
"E4":'pop [a]: push sum([a])',
"E5":'',
"E6":'',
"E7":'pop a: push 2*a',
"E8":'',
"E9":'',
"EA":'',
"EB":'',
"EC":"eval delimiter: the code inside the delimiters is eval'd as Python code, and the result is pushed on the stack",
"ED":'push phi (golden ratio)',
"EE":'push "" (empty string)',
"EF":'pop [a],[b]: push intersection of [a] and [b]',
"F0":'',
"F1":'pop a: push -a (unary negate)',
"F2":'pop a,b: push a>=b',
"F3":'pop a,b: push a<=b',
"F4":'',
"F5":'',
"F6":'',
"F7":'pop a: push int(a)',
"F8":'pop a: push radians(a)',
"F9":'',
"FA":'',
"FB":'pop a: push sqrt(a)',
"FC":'',
"FD":'',
"FE":'print the entire stack without popping, separated by spaces',
"FF":''
};