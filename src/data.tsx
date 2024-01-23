import axios from 'axios';

function getServerData() {
  axios
    .get('/onlineshop/products')
    .then(function (response) {
      // handle success
      response.data.forEach((element: object) => {
        console.log(element);
      });
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}

export default getServerData;
