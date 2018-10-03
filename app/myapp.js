new Vue({
    el : '#app',
    data: {
        title: 'Xin chào',
        link: 'https://www.facebook.com/sipit.00'
    },
    methods: {
        sayHello: function(){
            this.title = 'My facebook';
            return this.title;
        }
    }
});