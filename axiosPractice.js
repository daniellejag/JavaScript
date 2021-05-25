//using <script src="https://unpkg.com/axios/dist/axios.min.js"></script> 


function showComments(response) {
    console.log(response);
    console.log(response.data[0].email);
}
let apiUrl= "https://jsonplaceholder.typicode.com/comments"


 axios.get(apiUrl).then(showComments);
