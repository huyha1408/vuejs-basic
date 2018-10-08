new Vue({
	el: '#app',
  data: {
    name: "Hà Quang Huy",
    A: 0,
    B: 0,
    counter: 0,
  },
  computed: {
    reversedName: function() {
      console.log('reversedName');
      return this.name.split(' ').reverse().join(' ');
    },
    increaseA: function() {
      console.log("Increase A");
      return this.A;
    },
    increaseB: function() {
      console.log("Increase B");
      return this.B;
    },
    output: function() {
      console.log("computed");
      return this.A > this.B ? 'A greater than B' : "A smaller than B";
    }
  },
  methods: {
    result: function() {
      console.log("methods");
      return this.A > this.B ? 'A greater than B' : "A smaller than B";
    }
  },
});