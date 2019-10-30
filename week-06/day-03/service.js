let movies = require('./data');


exports.getPath = function getPath(reqUrl){
    let pathElements = reqUrl.pathname.split('/');
    let result = '';

    if(pathElements.length > 2){
        result = pathElements[2]
    }else{
        result = undefined;
    }
    // console.log(result);
    return result
}


exports.getMovies = function getMovies(query, res){
    if(query.genre){
        let filterMovies = [];
        movies.forEach(item => {
            if(item.genre == query.genre){
                filterMovies.push(item);
            }
        })       
        res.end(JSON.stringify(filterMovies));
        return
    }
    res.end(JSON.stringify(movies));
}

exports.postMovies = function postMovies(res, req){
    
    let body = '';
    req.on('data', function(chunk){
        body += chunk;
        // console.log("++++"+JSON.parse(body));
    })
        // console.log(body);

        // let postBody = JSON.parse(body);

    res.on('end', function(){
        postBody = JSON.parse(body);
        console.log('========@@@@'+postBody);

        let titleExist = false;
        movies.forEach(item => {
            if (item.title == postBody.title) {
                titleExist = true;
            }
        })

        if(!postBody.title){
            res.end('Please provide the movie title.')
            res.statusCode = 400;
            return

        }else if(titleExist){
            
            res.end('The movie is exist.')
            res.statusCode = 409;
            return
        }else {
            if(!postBody.genre){
                postBody.genre = 'unknown';
            }
        }

            movies.push(postBody);
            res.setHeader('Content-Type', 'application/json');

            res.end(JSON.stringify(movies));
            res.statusCode = 201;
            return

    })

}



exports.getMovieById = function getMovieById(movieId, res){
    let filterMovies = [];
    movies.forEach(item => {
        if(item.id == movieId){
            filterMovies.push(item);
        }
    })
    res.end(JSON.stringify(filterMovies));
    return '666'
}

exports.deleteMovieById = function deleteMovieById(movieId, req, res){
    // if(req.headers.authorization === 'AUTHORIZATION'){
        let filterMovies = [];
        movies.forEach(item => {
            if(item.id != movieId){
                filterMovies.push(item);
            }
        })

        let filterMoviesLength = filterMovies.length;
        if(filterMoviesLength != movies.length){                          
            res.end(JSON.stringify(filterMovies));
            res.statusCode = 204;           
            return
        }
        res.end(`Can't find movie matches id = ${movieId}`);
        res.statusCode = 404;
    // } 
//     res.statusCode = 403
//     res.end('not authorized');
}


