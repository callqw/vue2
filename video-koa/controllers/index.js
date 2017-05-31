'use strict';
module.exports = {
    'GET /index/': async (ctx, next) => {
        console.log('in');
        ctx.render('index.html', {
            title: 'Welcome'
        });
    }
};