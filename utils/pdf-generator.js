const PDFdocument = require('pdfkit')
const fs = require('fs')


module.exports = (text)=>{
    const doc = new PDFdocument({
        size: 'A4'
    });
    
    doc.pipe(fs.createWriteStream('output.pdf'))
    
    
    doc.font('fonts/kalpurush.ttf').fontSize(18).text(text, {
        align: 'center'
    })
    
    doc.end();

    return 'output.pdf'
}