'use strict';
module.exports = {
    'GET /base/': async (ctx, next) => {
        ctx.render('index.html', {
            title: 'Welcome'
        });
    }
};