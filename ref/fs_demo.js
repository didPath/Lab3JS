const fs = require('fs');
const path = require('path');

/*if(!fs.existsSync(path.join(__dirname,'test'))){
fs.mkdir(path.join(__dirname,'test'),{},function(err) {
    if(err) throw err;
    console.log('Folder created ...');
});
}else{
    console.log('Folder existed ...');
}
*/
/*fs.writeFile(path.join(__dirname,'test','content.txt'),
    'HelloWorlddddd',
    err => { if(err) throw err;
        console.log('File created and written to ...');
    }
);*/

//readfile
fs.readFile(path.join(__dirname,'test','content.txt'),
    'utf8',
    (err,data) => {
        if(err) throw err;
        console.log(data);
    }
    );

fs.rename(path.join(__dirname,'test','data5555.txt'),
    path.join(__dirname,'test','data5556.txt'),
    (err) => {
        if (err) throw err;
        console.log('File renamed ...');
    }
);