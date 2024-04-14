document.addEventListener('DOMContentLoaded', function() {
    const disc = document.querySelector('.disc');

    disc.addEventListener('click', function() {
        if (!disc.classList.contains('expanded')) {
            disc.classList.add('expanded');
            // Simulate playing the song
            setTimeout(function() {
                disc.classList.remove('expanded');
            }, 3000); // Assuming the song duration is 3 seconds
        }
    });
});

function flipText() {
    var box = document.querySelector('.flip-box');
    box.classList.toggle('flipped');
};

// document.addEventListener('DOMContentLoaded', function() {
//     var box = document.querySelector('.flip-box');
    
//     box.addEventListener('click', function() {
//         this.classList.toggle('flipped');
//     });
// });