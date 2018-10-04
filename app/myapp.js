new Vue({
    el : '#app',
    data: {
        title: 'Xin chào',
        link: 'https://www.facebook.com/sipit.00',
        finishedLink: '<a href="https://www.facebook.com/sipit.00">Huy Hà</a>'
    },
    methods: {
        sayHello: function(){
            this.title = 'My facebook';
            return this.title;
        }
    }
});