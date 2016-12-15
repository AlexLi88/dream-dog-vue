<script>
    export default{
       template:require('./footer.html'),
        ready(){
          if((/Android|iPhone|iPod|iPad|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
            this.isPhone = true;
          }else{
            this.isPhone = false;
          }
        },
        data(){
          return{
              isPhone: false,
              footerimg: require('../../resource/footer_ilustrastion.png'),
              appleStore: require('../../resource/app_store.png'),
              gooogleStore:require('../../resource/google_play.png'),
              emailicon: require('../../resource/email_icon.png'),
              fb: require('../../resource/facebook.png'),
              ins: require('../../resource/instagram.png'),
              twit:require('../../resource/twitter.png'),
              isRegular: this.$route.path.includes('/resetpassword') || this.$route.path.includes('/confirm')  ? false : true,
          }
      }
    }
</script>
