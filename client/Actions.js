import axios from 'axios'
export const addBooks=(g)=>{
    return {
       type:"addbooks",
        d:[...g]
    }
}
export const addFailure= err=> {return {type:"addFailure",err:err}}
export function getposts() {

      return dispatch => {
     
             axios
            .get(`https://jsonplaceholder.typicode.com/albums`)
             .then(res => {
               dispatch(addBooks(res.data));
              })
             .catch(err => {
               dispatch(addFailure(err.message));
             });
        };
  }
  export function edit(titre,index) {
    return dispatch => { 
      axios
     .post(`https://jsonplaceholder.typicode.com/albums/${index}`,{
      title:titre,
      id:index
     })
      .then(res => {
        dispatch(addBooks(res.data));
       })
      .catch(err => {
        dispatch(addFailure(err.message));
      });
 };

}