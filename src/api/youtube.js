import axios from 'axios';

export default axios.create({
    baseURL: '',
    params: {
      part: 'snippet',
      maxResults: '10',
      key: '[API KEY]'
    }
})
