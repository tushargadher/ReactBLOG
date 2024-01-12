import React from "react";
const Menu = () => {
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
    <div className="menu">
      <h1>Other Post May You Like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={post.img} alt={post.desc} />
          <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
};
export default Menu;
