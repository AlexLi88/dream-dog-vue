<script>
  export default{
    methods: {

    },
    ready(){
      if(this.$route.path.includes('/resetpassword')) this.currPage = 'resetps'
      else if(this.$route.path.includes('/confirm')) this.currPage = 'confirm'
      else if(this.$route.path.includes('/faq')) this.currPage = 'help'
      else this.currPage = 'home'
    },
    template:require('./header.html'),
    data(){
      return {
//        logo: require('../../resource/home.png'),
        logo: require('../../resource/Logo_2_xrismas.png'),
        slogo: require('../../resource/dream_dog_icon.png'),
        isRegular: this.$route.path.includes('/resetpassword') || this.$route.path.includes('/confirm')  ? false : true,
        currPage:'home'
      }
    },
    watch:{

      '$route.path': {
        handler: function (val, oldVal) {
          if(val == '/faq') this.currPage = 'help'
          else this.currPage  = 'home'
        },
        deep: true
      },
    }
  }
</script>
