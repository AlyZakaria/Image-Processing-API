import image from './image'
import fs from 'fs'

const orDir = './Images'

// to check if this filename exists in ./Images
function validateFileName(img: image): boolean {
    const files = fs.readdirSync(orDir)
    let dir = ''
    files.forEach((file: string) => {
        const filePath = file.split('.')
        if (filePath[0] === img.filename) {
            dir = file
            return
        }
    })
    if (dir === '') return false
    return true
}

export default validateFileName
