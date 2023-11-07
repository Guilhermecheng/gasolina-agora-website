import axios from "axios";

export const fetchData = async (fuel: string, location: string) => {
    try {
      // let response = await axios(config);
      // proxies: https://cors.sh/ ou https://cors-anywhere.herokuapp.com/ ou https://corsproxy.io/?
      let response = await axios.post('https://corsproxy.io/?https://us-central1-gasolina-agora.cloudfunctions.net/query_fuel', {
        'data_id': `${fuel}\\BRASIL${location}`
      },{
        headers: {
          'Content-Type':'application/json',
        }
      })
      return response.data
    } catch (err) {
      return "error";
    }
  }