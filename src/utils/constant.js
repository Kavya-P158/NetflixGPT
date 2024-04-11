export const logo = 'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
// export const bgimage = 'https://springboard-cdn.appadvice.com/wp-content/appadvice-v2-media/2016/11/Netflix-background_860c8ece6b34fb4f43af02255ca8f225-xl.jpg';
export const bgimage = 'https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg'
export const fetch = require('node-fetch');

export const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
export const popularmovie_url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'
export const upcomingmovie_url = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1'
export const topratedmovie_url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'
export const API_Options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY
    }
};

export const image_url = "https://image.tmdb.org/t/p/w500/"

export const language = [{
    identifier: "en",
    name: "English"
},
{
    identifier: "hindi",
    name: "Hindi"
},
{
    identifier: "tamil",
    name: "Tamil"
},
{
    identifier: "spanish",
    name: "Spanish"
},
{
    identifier: "french",
    name: "French"
},
]



export const OPENAIKEY = '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';

