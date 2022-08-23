import express from 'express'
import image from './image'

const fs = require('fs')
const dir = './Resized_Images'
const orDir = './Images'

// to check if this filename exists in ./Images
function validateFileName(img: image) {
    const files = fs.readdirSync(orDir)
    let dir = ''
    files.forEach((file: string) => {
        let filePath = file.split('.')
        if (filePath[0] === img.filename) {
            dir = file
            return
        }
    })
    if (dir === '') return false
    return true
}

export default validateFileName
