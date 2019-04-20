const {
    str,
    sequenceOf,
    choice,
    char,
    whitespace,
    letters,
    regex,
    sepBy,
    sepBy1,
    everythingUntil,
    anythingExcept,
    pipeParsers,
    between,
    tapParser,
    skip,
    anyOfString,
    endOfInput,
    many,
    mapTo,
    toPromise,
    toValue,
    parse
} = require('arcsecond');

const {
    split,
    head,
    tail,
    trim,
    join
} = require('ramda');

const alpha_numeric = regex (/^[a-zA-Z0-9\/\.;:\-_@'" ]{0,}/);
const keys = regex(/^[a-zA-Z0-9_\-'" ]{1,}/);
const values = regex(/^[a-zA-Z0-9\/\.;:\-`~'"@_ ]{}/);
const equalSkip = choice ([ char('='), skip (anyOfString (' },')) ]);
const equalsEnd = choice ([ char('='), char('}') ]);
const comma = char(',');
const commaEnd = choice ([ char(','), char('}') ]);
const start = regex(/^[ {]{1,}/);
const end = regex(/^[ }]{1,}/);

const TEST_MAP = 'XMODIFIERS=@im=ibus, MANDATORY_PATH=/us=r/sha,re/gconf/pop.m';
const TEST_MAP_2 = ' { XMODIFIERS=@im=ibus, MANDATORY_PATH=/us=r/sha,re/gconf/pop.m } ';
const log = console.log;

const mapParser = sepBy (comma) (everythingUntil (commaEnd));
const finalParser = between (start) (end) (mapParser);
const mapToParser = (classic) => pipeParsers ([ finalParser, mapTo (x => x.map(classic? keyValueMapperClassic: keyValueMapperExact)) ]);

function run(input_map, classic) {
    try {
        var either = parse (mapToParser (classic)) (input_map);
        var data = toValue (either);
        return { err: null, data };
    } catch (err) {
        return { err, data: null };
    }
}

function keyValueMapperClassic(key_value) {
    var arr = split ('=') (key_value);
    return {
        key: trim (head (arr)),
        value: join ('=') (tail (arr))
    };
}

function keyValueMapperExact(key_value) {
    var arr = split ('=') (key_value);
    var obj = {};
    var key = `${trim (head (arr))}`;
    var value = `${join ('=') (tail (arr))}`;
    obj[key] = value;
    return obj;
}

module.exports = run;
