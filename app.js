var run = require('./index_compiled.js');
window.run = run;

var result = run('{name=raja, email=rajasharan@gmail.com}', false);
if (result.err) console.log(err.message);
else console.log(result.data);
