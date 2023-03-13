const { src, dest } = require("gulp")
const sass = require('gulp-sass')(require('sass'));

function css (done) {
    
    src("src/scss/app.scss") // identificar el archivo de sass
    .pipe( sass() ) // Compilarlo
    .pipe( dest("build/css") ); // Almacenarla en el disco duro

    done(); //Callback que avisa a gulp cuando llegamos al final
}

exports.css = css;