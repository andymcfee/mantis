'use strict';

console.log('\'Allo \'Allo!');

// Prevent demo buttons from doing anything
$('.m-example--demo .btn').click(function (e) {
    // custom handling here
    e.preventDefault();
});
