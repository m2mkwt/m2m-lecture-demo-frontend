import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'
export default {
    namespaced: true,
    state() {
        return {
           posts : [
            //    {    
            //         id: 1,
            //         userName: 'kimcoca',
            //         text: '[📟인턴십/취업이 연계된 #해커톤: 4월 12일까지 등록 마감] 데이터 분석과 문제해결 능력으로 지속가능한 세상을 만들어갈 미래의 주역, 여러분을 위해 특별히 준비된 장벽없는코딩(#codewithoutbarriers)의 첫 해커톤! 링크는 걸스인텍 페이스북 페이지를 참고해주세요',
            //         createdt: '4시간 전',
            //         commentNo: 3,
            //         comments: [
            //             {   
            //                 id: 1,
            //                 userName: 'tomoka',
            //                 mediaId: 'http://picsum.photos/100/100',
            //                 text: '🌸💚🌷💓Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ab culpa distinctio nemo praesentium cumque eveniet, vitae, qui quae facilis maxime autem modi. Velit nisi consequuntur minus praesentium alias enim?',
            //                 createdt: '1일'
            //             },
            //             { 
            //                 id: 2,  
            //                 userName: 'hazyhazy',
            //                 mediaId: 'http://placeimg.com/100/100/any',
            //                 text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ab culpa distinctio nemo praesentium cumque eveniet, vitae, qui quae facilis maxime autem modi. Velit nisi consequuntur minus praesentium alias enimLorem ipsum dolor sit amet consectetur adipisicing elit. Id, ab culpa distinctio nemo praesentium cumque eveniet, vitae, qui quae facilis maxime autem modi.😝😝😝',
            //                 createdt: '1일'
            //             },
            //             {   
            //                 id: 3,
            //                 userName: 'soneeds',
            //                 mediaId: 'http://placekitten.com/100/100',
            //                 text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ab culpa distinctio nemo praesentium cumque eveniet, vitae, qui quae facilis maxime autem modi.🤎🤎🙈',
            //                 createdt: '1일'
            //             },
            //         ],
            //         filename: 'http://picsum.photos/640/640',
            //         likeCount: 12
            //     }, 
            //    {
            //         id: 2,
            //         userName: 'heimheim',
            //         text: '3DS MAX 의 모든것을 다루는 강좌. 입문자도 누구나 따라오기만 하면 전문가 수준으로 인도해주는 원샷 원킬 3DS max 강좌 입니다. 기본 개념부터 고급기술 노하우까지 재미있는 예제를 통해 하나하나 알려주는 친절하고도 방대한 강의 3DS MAX 는 이거 하나로 끝내보세요',
            //         createdt: '12시간 전',
            //         commentNo: 1,
            //         comments: [
            //             {
            //                 id: 1,
            //                 userName: 'lauren',
            //                 mediaId: 'http://picsum.photos/100/100',
            //                 text: '봄날0I네여! 튈르리정원🗼❤️🌷너낌!',
            //                 createdt: '22시간'                            
            //             }
            //         ],
            //         filename: 'http://placeimg.com/640/640/any',
            //         likeCount: 119
            //     }, 
            //    {
            //         id: 3,                   
            //         userName: 'tbroad',
            //         text: 'C언어 문법을 배우고, 문제를 풀면서 문법을 활용해 보는 강좌입니다. 알고리즘 문제풀이 학습 전에 배우면 좋은 강좌입니다.',
            //         createdt: '9시간 전',
            //         commentNo: 2,
            //         comments: [
            //             {
            //                 id: 1,
            //                 userName: 'gomoooo',
            //                 mediaId: 'http://placekitten.com/100/100',
            //                 text: '서울숲 이 저렇게 좋은곳이었군요...🍀🌿🌱☘️',
            //                 createdt: '1일'                            
            //             },                        
            //             {
            //                 id: 2,
            //                 userName: 'mahong',
            //                 mediaId: 'http://placekitten.com/100/100',
            //                 text: '우리의 계절😏🚲',
            //                 createdt: '1일'                            
            //             },                        
            //         ],
            //         filename: 'http://placekitten.com/640/640',
            //         likeCount: 2
            //     }, 
           ]
        }
    },
    mutations,
    actions,
    getters
}