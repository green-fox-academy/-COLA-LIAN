let service = require('./service');

const http = require('http');
const url = require('url');
const PORT = 3000;


let server = http.createServer((req, res) => {
    const reqUrl = url.parse(req.url, true);
    const query = reqUrl.query;
   
    const movieId = service.getPath(reqUrl);

    if(movieId == undefined){
        if(req.method == 'GET'){
            service.getMovies(query, res);

        }
        else if(req.method == 'POST'){
            service.postMovies(res, req);
        }
    }
    
    else{
        if(req.method == 'GET'){      
            service.getMovieById(movieId, res);

        }else if(req.method == 'DELETE'){
            service.deleteMovieById(movieId, req, res);
        
        }
        else if(req.method == 'PUT'){
            service.putMovieById(res,req);
        }
    }
    

    





        // else if(req.url == 'movies/{movieId}'){
        //     res.json(movie.map(item => {
        //         if(item.id == movieId){
        //             return item
        //         }
        //     }))
        // }

    
        // res.end(JSON.stringify(movie));

    
    
});


server.listen(PORT, () => {
    console.log('server started on port 3000');
})