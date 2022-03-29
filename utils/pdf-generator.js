const PDFdocument = require('pdfkit')
const fs = require('fs')


module.exports = (text)=>{
    const doc = new PDFdocument({
        size: 'A4'
    });
    
    doc.pipe(fs.createWriteStream('public/output.pdf'))
    
    
    const title = text.split('\n', 1)[0];
    const body = text.substring(text.indexOf('\n'), text.length);


    doc.font('fonts/kalpurush.ttf').fontSize(20).text(title, {
        align: 'center'
    });

    doc.font('fonts/kalpurush.ttf').fontSize(16).text(body, {
        align: 'center'
    })
    
    doc.end();

    return 'https://pdf-generator-webhook.herokuapp.com/output.pdf'
}