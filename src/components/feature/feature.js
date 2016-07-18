// var Vue = require('vue');
require('./feature.scss');
module.exports = Vue.extend({

        template: require('./feature.html'),
        data(){
        return{

            feature_list: [
                {
                    img: require('../../resource/mock_up_features_search_shelter.png'),
                    caption: 'search by shelter or breeder',
                    detail: 'Have a specific shelter in mind? Simply type in their name and volia!'
                },
                {
                    img: require('../../resource/mock_up_features_search_breed.png'),
                    caption: 'search by breed',
                    detail: 'Browse alphabetically or type in the desired breed name.'
                },
                {
                    img: require('../../resource/mock_up_features_personal_feed.png'),
                    caption: 'personal feed',
                    detail: 'Save all your favourite breeds to quickly see when one of your dream dogs appear on the app!'
                },
                {
                    img: require('../../resource/mock_up_features_search_shelter.png'),
                    caption: 'search by breed',
                    detail: 'Browse alphabetically or type in the desired breed name.'
                },
                {
                    img: require('../../resource/mock_up_features_discover_breeds.png'),
                    caption: 'discover breeds',
                    detail: 'Learn about all your favourite breeds'
                }
            ]
        }
    }

})