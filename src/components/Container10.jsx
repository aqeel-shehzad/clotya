import React from "react";

const blogData = [
  {
    id: 1,
    image: "/public/images/blog-4.jpg",
    date: "Collection 25 Apr 2022",
    title: "The Best Products Shape Fashion",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex iusto eum consectetur ipsam voluptatum similique?",
  },
  {
    id: 2,
    image: "/public/images/blog-5.jpg",
    date: "Collection 25 Apr 2022",
    title: "The Best Products Shape Fashion",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut dolorum, laborum est nesciunt exercitationem placeat?",
  },
  {
    id: 3,
    image: "/public/images/blog-6.jpg",
    date: "Collection 25 Apr 2022",
    title: "The Best Products Shape Fashion",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil velit eos nam harum, voluptate voluptatum?",
  },
];

function Container10() {
  return (
    <div className="ml-4 sm:pr-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center mt-12 lg:ml-20">
      {blogData.map((item) => (
        <div key={item.id}>
          <img className="max-w-64" src={item.image} alt="" />
          <p className="mt-5 text-gray-400 font-semibold">{item.date}</p>
          <h1 className="mt-3 text-2xl font-semibold">{item.title}</h1>
          <h2 className="text-gray-500">{item.description}</h2>
        </div>
      ))}
    </div>
  );
}

export default Container10;
