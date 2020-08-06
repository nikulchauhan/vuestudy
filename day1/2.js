new Vue({
  el: '#vue-app',
  data: {
    name: 'Nikul Chauhan!',
    job: 'Software Developer!',
    weblink:"https://win.wizkids.com",
    weblinkTag:"<a href='https://win.wizkids.com'>https://win.wizkids.com</a>",
    age:25,
    trow:2,
    tcol:3,
    tags: ['JavaScript', 'MVVM', 'Vue.js'],
    accounts: ['Nikul', 'Mike', 'Steve','Will','Kim'],
    accountColumn: ['1','0','0','0'],
    acountColor: "{font-weight: normal; color:red}"
  
    
  },
computed: {
    reverseName:function(){
       // return this.name.split('').reverse().join('')
    },
    total:function(id){
        
    }
}
});