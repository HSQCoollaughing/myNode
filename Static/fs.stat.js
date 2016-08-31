var fs = require('fs');
fs.stat('./1.txt', function (err,stat) {
    console.log(stat)
});

/**
 atime: 2016-08-29T12:32:12.527Z,      访问时间
 mtime: 2016-08-29T12:32:12.528Z,       修改时间(修改动作)
 ctime: 2016-08-29T12:32:12.540Z,       改变时间(内容只要不改就不会改变)
 birthtime: 2016-08-29T12:31:24.875Z    创建时间
* */