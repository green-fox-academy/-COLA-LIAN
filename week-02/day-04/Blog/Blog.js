const BlogPost = require('./BlogPost');

// Reuse your BlogPost class
// Create a Blog class which can
//   store a list of BlogPosts
//   add BlogPosts to the list
//   delete(int) one item at given index
//   update(int, BlogPost) one item at the given index and update it with another BlogPost

class Blog{
    constructor(blogList){
        this.blogList = [];
    }
    add(BlogPost){
        this.blogList.push(BlogPost);
    }

    get(){
        return this.blogList
    }

    delete(int){
        this.blogList.splice(int,1);
        console.info(this.blogList);
    }
 
    update(int,BlogPost){
        this.blogList.splice(int-1,1,BlogPost);
        console.info(this.blogList);
    }

}

let blog1 = new BlogPost("Cola","AAA","2019/09/19","666");
let blog2 = new BlogPost("Cathy","BBB","2019/09/18","333");
let blog3 = new BlogPost("Tom","CCC","2019/09/17","000");
let blog4 = new BlogPost("Layla","DDD","2019/09/16","999");

let blog = new Blog();
blog.add(blog1);
blog.add(blog2);
blog.add(blog3);

console.info("-----get------");
console.info(blog.get());

console.info("-----delete------");
blog.delete(1);

console.info("-----update------");
blog.update(1,blog4);
