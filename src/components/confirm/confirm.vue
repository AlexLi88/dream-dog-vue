<script>
  export default{
    template:require('./confirm.html'),
    data(){
      return{
        mail: require('../../resource/mail_icon.png'),
        mailerror: require('../../resource/mail_icon_error.png'),
        username: '',
        uuid: this.$route.query.key,
        success: true
      }
    },
    ready(){
      var self = this;
      this.$http.get(`http://service.dreamdogapp.com:8080/api/confirm/${this.uuid}`).then((response)=>{
        console.log(response);
        if(response.status == 200){
          if(response.data.result == 'OK'){
            this.success = true;
            this.username = response.data.data;
          }else{
            this.success= false;
          }
        }else{
          this.success = false;
        }
      },(err)=>{
          this.success = false;
        })
      },
    components:{

    },

    methods:{

    },

  }
</script>
