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
            //         text: '[๐์ธํด์ญ/์ทจ์์ด ์ฐ๊ณ๋ #ํด์ปคํค: 4์ 12์ผ๊น์ง ๋ฑ๋ก ๋ง๊ฐ] ๋ฐ์ดํฐ ๋ถ์๊ณผ ๋ฌธ์ ํด๊ฒฐ ๋ฅ๋ ฅ์ผ๋ก ์ง์๊ฐ๋ฅํ ์ธ์์ ๋ง๋ค์ด๊ฐ ๋ฏธ๋์ ์ฃผ์ญ, ์ฌ๋ฌ๋ถ์ ์ํด ํน๋ณํ ์ค๋น๋ ์ฅ๋ฒฝ์๋์ฝ๋ฉ(#codewithoutbarriers)์ ์ฒซ ํด์ปคํค! ๋งํฌ๋ ๊ฑธ์ค์ธํ ํ์ด์ค๋ถ ํ์ด์ง๋ฅผ ์ฐธ๊ณ ํด์ฃผ์ธ์',
            //         createdt: '4์๊ฐ ์ ',
            //         commentNo: 3,
            //         comments: [
            //             {   
            //                 id: 1,
            //                 userName: 'tomoka',
            //                 mediaId: 'http://picsum.photos/100/100',
            //                 text: '๐ธ๐๐ท๐Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ab culpa distinctio nemo praesentium cumque eveniet, vitae, qui quae facilis maxime autem modi. Velit nisi consequuntur minus praesentium alias enim?',
            //                 createdt: '1์ผ'
            //             },
            //             { 
            //                 id: 2,  
            //                 userName: 'hazyhazy',
            //                 mediaId: 'http://placeimg.com/100/100/any',
            //                 text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ab culpa distinctio nemo praesentium cumque eveniet, vitae, qui quae facilis maxime autem modi. Velit nisi consequuntur minus praesentium alias enimLorem ipsum dolor sit amet consectetur adipisicing elit. Id, ab culpa distinctio nemo praesentium cumque eveniet, vitae, qui quae facilis maxime autem modi.๐๐๐',
            //                 createdt: '1์ผ'
            //             },
            //             {   
            //                 id: 3,
            //                 userName: 'soneeds',
            //                 mediaId: 'http://placekitten.com/100/100',
            //                 text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ab culpa distinctio nemo praesentium cumque eveniet, vitae, qui quae facilis maxime autem modi.๐ค๐ค๐',
            //                 createdt: '1์ผ'
            //             },
            //         ],
            //         filename: 'http://picsum.photos/640/640',
            //         likeCount: 12
            //     }, 
            //    {
            //         id: 2,
            //         userName: 'heimheim',
            //         text: '3DS MAX ์ ๋ชจ๋ ๊ฒ์ ๋ค๋ฃจ๋ ๊ฐ์ข. ์๋ฌธ์๋ ๋๊ตฌ๋ ๋ฐ๋ผ์ค๊ธฐ๋ง ํ๋ฉด ์ ๋ฌธ๊ฐ ์์ค์ผ๋ก ์ธ๋ํด์ฃผ๋ ์์ท ์ํฌ 3DS max ๊ฐ์ข ์๋๋ค. ๊ธฐ๋ณธ ๊ฐ๋๋ถํฐ ๊ณ ๊ธ๊ธฐ์  ๋ธํ์ฐ๊น์ง ์ฌ๋ฏธ์๋ ์์ ๋ฅผ ํตํด ํ๋ํ๋ ์๋ ค์ฃผ๋ ์น์ ํ๊ณ ๋ ๋ฐฉ๋ํ ๊ฐ์ 3DS MAX ๋ ์ด๊ฑฐ ํ๋๋ก ๋๋ด๋ณด์ธ์',
            //         createdt: '12์๊ฐ ์ ',
            //         commentNo: 1,
            //         comments: [
            //             {
            //                 id: 1,
            //                 userName: 'lauren',
            //                 mediaId: 'http://picsum.photos/100/100',
            //                 text: '๋ด๋ 0I๋ค์ฌ! ํ๋ฅด๋ฆฌ์ ์๐ผโค๏ธ๐ท๋๋!',
            //                 createdt: '22์๊ฐ'                            
            //             }
            //         ],
            //         filename: 'http://placeimg.com/640/640/any',
            //         likeCount: 119
            //     }, 
            //    {
            //         id: 3,                   
            //         userName: 'tbroad',
            //         text: 'C์ธ์ด ๋ฌธ๋ฒ์ ๋ฐฐ์ฐ๊ณ , ๋ฌธ์ ๋ฅผ ํ๋ฉด์ ๋ฌธ๋ฒ์ ํ์ฉํด ๋ณด๋ ๊ฐ์ข์๋๋ค. ์๊ณ ๋ฆฌ์ฆ ๋ฌธ์ ํ์ด ํ์ต ์ ์ ๋ฐฐ์ฐ๋ฉด ์ข์ ๊ฐ์ข์๋๋ค.',
            //         createdt: '9์๊ฐ ์ ',
            //         commentNo: 2,
            //         comments: [
            //             {
            //                 id: 1,
            //                 userName: 'gomoooo',
            //                 mediaId: 'http://placekitten.com/100/100',
            //                 text: '์์ธ์ฒ ์ด ์ ๋ ๊ฒ ์ข์๊ณณ์ด์๊ตฐ์...๐๐ฟ๐ฑโ๏ธ',
            //                 createdt: '1์ผ'                            
            //             },                        
            //             {
            //                 id: 2,
            //                 userName: 'mahong',
            //                 mediaId: 'http://placekitten.com/100/100',
            //                 text: '์ฐ๋ฆฌ์ ๊ณ์ ๐๐ฒ',
            //                 createdt: '1์ผ'                            
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