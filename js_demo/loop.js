function askQ() {
    var q = prompt('How much wood would a wood chuck chuck if a wood chuck could chuck wood?');
    if (q != null) {
        document.getElementById('question').innerHTML = 'Yikes! ' + q + ' is a lot of wood!'; 
    }
    
}

function showImage() {
    var image = document.getElementById('woohoo');
    image.src = "images.woohoo.gif";
}