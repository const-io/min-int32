'use strict';

// MODULES //

var tape = require( 'tape' );
var pow = require( 'math-power' );
var MIN_INT32 = require( './../lib' );


// TESTS //

tape( 'the main export is a number', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof MIN_INT32, 'number', 'main export is a number' );
	t.end();
});

tape( 'the value equals -2**31', function test( t ) {
	t.equal( MIN_INT32, -pow(2,31), 'equals -1 * 2**31' );
	t.end();
});
