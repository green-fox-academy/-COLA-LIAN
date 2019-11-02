function fetchData(){
    fetch('http://localhost:3000/api/todos').then(response =>{
            let todos= {todo:response.json()};
            console.log(todos);
    })
}
fetchData()