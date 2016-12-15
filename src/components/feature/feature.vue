<script>
  import { swiper, swiperSlide, swiperPlugins } from 'vue-awesome-swiper'
    export default{
        template:require('./feature.html'),
        ready(){
          if((/Android|iPhone|iPod|iPad|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
            this.isPhone = true;
          }else{
            this.isPhone = false;
          }
        },
        components:{
          swiper,
          swiperSlide
        },
        data(){
            return{
                isPhone: false,
                swiperOption: {
                  pagination: '.swiper-pagination',
                  paginationClickable: true,
                  nextButton: '.swiper-button-next',
                  prevButton: '.swiper-button-prev',
                  spaceBetween: 30
                },
                feature_list: [
                    {
                      img: require('../../resource/mock_up_features_search_breed.png'),
                      img_phone: require('../../resource/search_breed_mock_up.png'),
                      caption: 'SEARCH BY BREED OR PEOPLE',
                      detail: 'Browse alphabetically or search by name.'
                    },
                    {
                        img: require('../../resource/mock_up_auto_taging.png'),
                        img_phone: require('../../resource/dog_tags_mock_up.png'),
                        caption: 'GUESS THE BREED',
                        detail: 'Don\'t know the breed of a dog? Our app can tell you!'
                    },
                    {
                      img: require('../../resource/mock_up_features_personal_feed.png'),
                      img_phone: require('../../resource/mock_up_features_personal_feed.png'),
                      caption: 'PERSONAL FEED',
                      detail: 'Save all your favourite breeds to quickly see when one of your dream dogs appear within the app!'
                    },
                    {
                        img: require('../../resource/mock_up_features_similar_image.png'),
                        img_phone: require('../../resource/similar_image_mock_up.png'),
                        caption: 'SIMILAR IMAGE SEARCH',
                        detail: 'Have a dog in mind? Now find all dogs that look similar to your ideal pup.'
                    },
                    {
                      img: require('../../resource/mock_up_features_discover_breeds.png'),
                      img_phone: require('../../resource/breed_details_mock_up.png'),
                      caption: 'DISCOVER BREEDS',
                      detail: 'Learn about all your favourite breeds!'
                    },
                ]
            }
        }
    }
</script>
