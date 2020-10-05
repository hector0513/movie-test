import fs    from "fs";
import path  from "path";
import  Mocha from "mocha";
const  suite = new Mocha();

fs.readdir(path.join(__dirname, "integration"), (err, files) => {
    if (err) throw err;

    files.filter((filename) => 
    (filename.match(/\.ts$/))).map((filename) => {

        suite.addFile(path.join(__dirname, "integration", filename));
    });

    suite.run((failures:any) => {
        process.exit(failures);
    });
});