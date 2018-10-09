new Vue({
    el: '#app',
    data: {
        attachColor: false,
        color1: 'green',
        color2: 'gray',
        width: 100
    },
    computed: {
        divClasses1: function(){
            return {
                red: this.attachColor,
                blue: !this.attachColor
            }
        },
        divClasses2: function(){
            return {
                green: this.attachColor,
                red: !this.attachColor
            }
        },
        divClasses3: function(){
            return {
                blue: this.attachColor,
                green: !this.attachColor
            }
        },
        myStyle: function() {
            return {
                backgroundColor: this.color2,
                width: this.width + 'px'
            }
        }
    }

});