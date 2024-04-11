import OpenAI from 'openai';
import { OPENAIKEY } from './constant';

const openaiconfig = new OpenAI({
    apiKey: OPENAIKEY, // This is the default and can be omitted
    dangerouslyAllowBrowser: true
});
console.log(OPENAIKEY)
export default openaiconfig;