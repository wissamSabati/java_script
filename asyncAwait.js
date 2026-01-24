const baseUrl = "https://jsonplaceholder.typicode.com/";
// const getUser = () => {
//   fetch(`${baseUrl}/users`)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((erreur) => {
//       console.log("Erreur : " + erreur);
//     });
// };

const getUser = async () => {
    try {
    const response = await fetch(`${baseUrl}/users`);
    const data = await response.json(); 
    console.log(data);

    }
     catch (erreur) 
     {
        console.log("Erreur : " + erreur);
    }

}
getUser();