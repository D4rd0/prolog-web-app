//var pl = require("tau-prolog");
<script type="text/javascript" src="tau-prolog/core.js"></script>

var session = pl.create();

session.consult(`
    likes(sam, salad).
    likes(dean, pie).
    likes(sam, apples).
    likes(dean, whiskey).
`);

session.query("likes(sam, X).");

//const resultado = session.answer();
const show = function (answer) {
    window.answer = console.log(session.format_answer(answer));
}