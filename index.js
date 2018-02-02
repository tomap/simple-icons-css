const simpleIcons = require("simple-icons");
const fs = require('fs');

var dir = './dist';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

let path = 'dist/simple-icons.css';  
fs.writeFileSync(path, "/*simple-icon css*/");

Object.keys(simpleIcons).forEach(i => {
    const filename = i.toLowerCase()
        .replace(/\+/g, "plus")
        .replace(/[ .\-!’]/g, '');
    //copy the $file to $dir2
    fs.appendFileSync(path, "\n.si-" + filename + "{background:url(" + filename  + ".svg)}"); 
          
    var source = fs.createReadStream("node_modules/simple-icons/icons/" + filename + ".svg");
    var dest = fs.createWriteStream("dist/" + filename + ".svg");
  
    source.pipe(dest);
    source.on('error', function(err) { console.log(err); });
  
});

