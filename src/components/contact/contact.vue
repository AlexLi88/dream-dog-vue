<script>
    require('./contact.scss')
    export default{
        template: require('./contact.html'),
        data:()=>{
            return{
                userName: '',
                email: '',
                message:'',
                emailicon: require('../../resource/email_icon.png'),
            }
        },
        components:{

          w_footer:require('../footer/footer.vue')
        },
        validators: {
          email: function (val) {

            return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val)

          }

        },
        methods: {
          submitForm: function(userName, email, message){
            $(".success").css("display", "none");
            $(".failed").css("display", "none");
            var config = {
              delay    : 100,
              distance : '70px',
              easing   : 'ease-in-out',
              rotate   : { y: -10 },
              scale    : 0,
              duration: 1000
            };
            this.$http.post('/email',
              {user: userName,
                email: email,
                message: message,
                option: "NONE"}).then((response) =>
            {
              if(response.body.err){
                //console.log("SENT FAILED");
                //console.log(response);
                $(".failed").css("display", "block");
                //alert("Message Sent Falied! Please Try Again!");
              }else{
                //console.log("SENT SUCCESS");
                //console.log(response);
                $(".success").css("display", "block");
                $('#myform')[0].reset();
                //alert("Message Sent! Thank You!")
              }

            }, (response)=>{
              //console.log("ERROR MSG");
              //console.log(response);
              $(".failed").css("display", "block");

              sr.reveal('.failed', config, 100);
              //alert("Message Sent Falied! Please Try Again!")
            });
          }
        }
    }
</script>
