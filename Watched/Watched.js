var vm = new Vue({
    el: '#app',
    data: {
        diem: 7,
    },
    computed: {
        output: function(){
            return this.diem > 6 ? 'Ban la hoc sinh goi' : 'Ban la hoc sinh TB';
        }
    },
    watch: {
        diem: function(){
            alert("Thay doi diem thanh cong!");
        }
    },
   /*Watch: theo doi su thay doi cua 1 bien,
        neu no thay doi thi thuc hien 1 hanh dong nao do */
})
