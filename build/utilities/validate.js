"use strict";
const fs = require('fs');
const dir = './Resized_Images';
const orDir = './Images';
function getFilename(filename) {
    const files = fs.readdirSync(orDir);
    let dir = "";
    files.forEach((file) => {
        let st = file.split('.');
        if (st[0] === filename) {
            dir = st.join('.');
            return;
        }
    });
    return dir;
}
const getTheImage = (filename, width, height) => {
    return new Promise((resolve, reject) => {
        let fileDir = getFilename(filename);
        if (fileDir === null)
            return false;
        else
            return true;
    }).then((resolve) => {
    });
};
