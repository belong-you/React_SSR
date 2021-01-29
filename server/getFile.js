import fs from 'fs';

export const getScript = () => {
    const result = fs.readdirSync('./public/js')
                     .filter(file => file.endsWith('.js'))
                     .map(file => `<script src='./js/${file}'></script>`);
    return result.join('\n');
}

export const getLink = () => {
    const result = fs.readdirSync('./public/css')
                     .filter(file => file.endsWith('.css'))
                     .map(file => `<link rel='stylesheet' href='./css/${file}'></link>`);
    return result.join('\n');
}