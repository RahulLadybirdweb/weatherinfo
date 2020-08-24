import axios from 'base-axios';

// if testing mode
// this has to be populated after baseUrl is obtained from first sceeen

if(process.env.NODE_ENV == 'test'){
  axios.defaults.baseURL = '';
} else {
    axios.defaults.baseURL = "http://api.openweathermap.org/";
  // })

}

export default axios;