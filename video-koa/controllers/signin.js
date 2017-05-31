'use strict';
// sign in:
module.exports = {
    'POST /signin': async(ctx, next) => {

        var
            email = ctx.request.body.email || '',
            password = ctx.request.body.password || '';
        if (email === '112211' && password === '112211') {
            console.log('signin ok!' + __dirname);
            var data = [
                {'name': 'zfeig', 'age': 25, 'sex': 'male', 'addr': '广东深圳'},
                {'name': 'lisi', 'age': 28, 'sex': 'male', 'addr': '四川成都'},
                {'name': 'chenfeng', 'age': 24, 'sex': 'female', 'addr': '湖北武汉'},
                {'name': 'zhangyong', 'age': 32, 'sex': 'male', 'addr': '浙江杭州'},
                {'name': 'zfeig', 'age': 22, 'sex': 'female', 'addr': '广东广州'},
                {'name': 'zfeig', 'age': 24, 'sex': 'male', 'addr': '湖南长沙'},
                {'name': 'zfeig', 'age': 29, 'sex': 'female', 'addr': '江苏南京'}
            ];
            ctx.body = data;
        } else {
            console.log('signin failed!');
            ctx.render('signin-failed.html', {
                title: 'Sign In Failed'
            });
        }
    }
};