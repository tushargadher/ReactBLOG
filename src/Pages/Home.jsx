import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const posts = [
    {
      id: "1",
      title: "lorem,this is lorem blog post title",
      desc: "lorem,this is lorem blog post description",
      img: "https://img.freepik.com/free-photo/funny-happy-excited-young-pretty-woman-sitting-table-black-shirt-working-laptop-co-working-office-wearing-glasses_285396-86.jpg",
    },
    {
      id: "2",
      title: "lorem,this is lorem blog post title",
      desc: "lorem,this is lorem blog post description",
      img: "https://img.freepik.com/free-photo/salad-with-tomato-cheese-slices_140725-2835.jpg",
    },
    {
      id: "3",
      title: "lorem,this is lorem blog post title",
      desc: "lorem,this is lorem blog post description",
      img: "https://img.freepik.com/free-photo/baseball-players-professional-baseball-stadium-evening-during-game_654080-1532.jpg",
    },
    {
      id: "4",
      title: "lorem,this is lorem blog post title",
      desc: "lorem,this is lorem blog post description",
      img: "https://img.freepik.com/free-photo/collage-finance-banner-concept_23-2150608820.jpg",
    },
  ];
  return (
    <>
      <div className="home">
        <div className="posts">
          {posts.map((post) => (
            <div className="post" key={post.id}>
              <div className="img">
                <img src={post.img} alt={post.title} />
              </div>
              <div className="content">
                <Link className="links" to={`/post/${post.id}`}>
                  <h1>{post.title}</h1>
                </Link>
                <p className="desc">{post.desc}</p>
                <button>Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Home;
