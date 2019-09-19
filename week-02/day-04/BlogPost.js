class BlogPost{
    constructor(authorName, title, publicationDate, text){
          this.authorName = authorName;
          this.title = title;
          this.text = text;
          this.publicationDate = publicationDate;
      }
  }

  let loremIpsum = new BlogPost("Lorem Ipsum", "John Doe", "Lorem ipsum dolor sit amet.", "2000.05.04.");
  let  waitButWhy = new BlogPost("Wait but why", "Tim Urban",null, "2010.10.10." );
  waitButWhy.text = "A popular long-form, stick-figure-illustrated blog about almost everything."

  let Engineer = new BlogPost();
  Engineer.authorName = "William Turton";
  Engineer.title = "One Engineer Is Trying to Get IBM to Reckon With Trump";
  Engineer.publicationDate = "2017.03.28.";
  Engineer.text = "Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.";

  console.log(loremIpsum);
  console.log(waitButWhy);
  console.log(Engineer);