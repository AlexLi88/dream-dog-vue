<script>
  export default{
    methods: {
    },
    ready(){
      $('.content').eq(1).html($('.content').eq(1).html().replace(/\b(here)\b/gi, "<a href=''>here</a>"));
      $('.content').eq(4).html($('.content').eq(4).html().replace(/\b(here)\b/gi, "<a href=#/form>here</a>"));
    },
    template:require('./faq.html'),
    components:{

      contact:require('../contact/contact.vue')
    },
    data(){
      return {

        faqs:[{

          caption:`How much does the service cost for shelters or rescue groups?`,
          content:[`Free, we do not have any fees associated with our app! We think it is much more beneficial to put that money towards the care of these adorable animals.`]

        },{

          caption:`When will the app be released? `,
          content:[`We hope to release the app in the fall of 2016. Sign up here to be notified when the app is ready for download on the App store and Google Play!`]
        },{

          caption:`How does the DreamDog app work?`,
          content:[`DreamDog utilizes our innovative image recognition technology to identify the breed, or similar breeds, to any dog who's photo is uploaded.`,
                   `DreamDog also links any dog photo of your choosing to other similar looking dogs within the app that are up for adoption.`,
                   `We hope that by showcasing similar dogs, as well as identifying breeds to the best of our knowledge (even if they are unknown to the rescue group), we can help promote adoption.`
                  ]
        },{

          caption:`Why was DreamDog created?`,
          content:[`By combining our passion for animal adoption with our leading edge technology, we created DreamDog to help promote the adoption of dogs.`,

                    `We believe that by implementing our image recognition software within the app, we can help families find the perfect dog that they are looking for without having to turn to breeders.`,

                    `We have designed this app simply in the hope that it can help these dogs find the loving homes that they so desperately need.`

                  ]
        },{

          caption:`How do I sign up my shelter/rescue group?`,
          content:[`Easy! Simply fill out the shelter/rescue group affiliation form here, and we will send you an email confirming your information within 24 hours!`]

        },{

          caption:`Can I use DreamDog just to look at dogs?`,
          content:[`Of course! DreamDog was designed to help you match the image of your dream dog to a real life dog up for adoption. Whether you want to find your ideal adoptable pup, or just to check out some cute dogs, DreamDog is waiting for you.`]

        },{

          caption:`Do you have an app for cats or other animals?`,
          content:[`Not yet, but we would love to in the future. We have a lot of cat lovers in the office too!`]

        }]

      }
    }
  }
</script>
