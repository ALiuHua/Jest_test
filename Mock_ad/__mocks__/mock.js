import axios from "axios";

export const fetchData = () => {
  return new Promise((resolved, reject) => {
    {
      resolved(`(function() {
         return "123";
        })()`);
    }
  });
  //   return axios.get("/").then((res) => res.data);
};
/* 
{
    data: (function() {
     return "123";
    })();
}
   
*/
