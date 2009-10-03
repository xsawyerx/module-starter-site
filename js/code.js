var quotes = new Hash( {
    'Sawyer X'    : "Can't imagine writing code without it",
    'Mister X'    : 'I use it all the time',
    'JFK'         : 'One of the more important projects in Perl',
    'Hulk Hoggan' : 'Starting to code has never been this easy'
} );

var quote_keys = quotes.getKeys();

var index = 0;
var elem  = $('testimonial');
var fader = new Fx.Tween( elem, {
    property: 'opacity',
    link:     'chain',
    duration: 1000,
} );

function transition() {
    fader
    .start(0)
    .chain( function () {
        next_quote();
        this.start(1);
    } );
}

function next_quote() {
    var cite  = quote_keys[index];
    var quote = quotes.get(cite);
    document.getElementById("testimonial").innerHTML = quote;
    document.getElementById("cite").innerHTML        = '-- ' + cite;

    if ( index == ( quotes.getLength() - 1 ) ) {
        index = 0;
        return;
    }

    index++;
}

next_quote();
transition.periodical( 4000 );
