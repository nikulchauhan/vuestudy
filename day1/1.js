new Vue({
  el: '#vue-app',
  data: {
    name: 'Nikul Chauhan!',
    job: 'Software Developer!',
    weblink:"https://win.wizkids.com",
    weblinkTag:"<a href='https://win.wizkids.com'>https://win.wizkids.com</a>",
    age:25,
    disLagauage:[],
    tags: ['JavaScript', 'PHO', 'Vue.js','React JS'],
    show: true
  },
  methods:{
      greet:function(time){
          return "Good "+time+" "+this.name;
      },
      add:function(num){
          console.log("dd");
         this.age += num;
      },
      subtract:function(num){
          this.age -= num;
      },
  }
});