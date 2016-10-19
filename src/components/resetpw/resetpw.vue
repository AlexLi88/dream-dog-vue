<script>
  export default{
    template:require('./resetpw.html'),
    data(){
      return{
        ps: '',
        confirmPs: '',
        key: this.$route.query.key,
        resetSuccess: false,
        lock: require('../../resource/lock_icon.png')
      }
    },

    ready(){

    },
    components:{

    },
    transitions:{
      'fade':{
              enterClass:'fadeIn',
              leaveClass:'fadeOutUp'
            }
    },
    methods:{
      submitForm: function(){
        var self = this;
        if(!this.key){
          toastr.error("Your link is not correct. Please try again later.");
        }else{
          this.$http.post('http://service.dreamdogapp.com:8080/api/account/reset_password/finish',
            {"key": self.key,
              "newPassword": self.confirmPs
            }, {
              headers:{
                'Content-Type': 'application/json'
              }
            }).then((response)=>{
            if(response.status == 200){
            self.resetSuccess = true;
          }else{
            toastr.error("Some errors happen, please try again later");
          }
        }, (err)=>{
            toastr.error("Some errors happen, please try again later");
          });
        }
      }
    },
    watch:{
      'confirmPs': function(val, oldVal){
        if(val != this.ps){
          document.getElementById('ps-confirm').setCustomValidity("Passwords do not match");
        }else{
          if(val.length < 6){
            document.getElementById('ps-confirm').setCustomValidity("Minimum 6 characters");
          }else{
            document.getElementById('ps-confirm').setCustomValidity('');
          }

        }
      },
      'ps':function(val, oldVal){
        if(val != this.confirmPs){
          document.getElementById('ps-confirm').setCustomValidity("Passwords do not match");
        }else{
          if(val.length < 6){
            document.getElementById('ps-confirm').setCustomValidity("Minimum 6 characters");
          }else{
            document.getElementById('ps-confirm').setCustomValidity('');
          }

        }
      }
    }
  }
</script>
