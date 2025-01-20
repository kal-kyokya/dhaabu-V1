import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const samplePosts = [
    {
      title: "The Rich History of African Masks",
      content: "African masks hold deep cultural and spiritual significance, often used in rituals and ceremonies to represent ancestors, spirits, or deities.",
    },
    {
      title: "Kente Cloth: A Symbol of Royalty",
      content: "Originating from Ghana, Kente cloth is a vibrant fabric that symbolizes wealth, status, and cultural pride.",
    },
    {
      title: "Drumming: The Heartbeat of Africa",
      content: "Drumming is more than music in Africa; it is a language, a form of communication, and a way to unite communities.",
    },
    {
      title: "The Great Zimbabwe Ruins",
      content: "A testament to African architectural ingenuity, the Great Zimbabwe ruins reflect a rich history of trade and craftsmanship.",
    },
  ];

  return (
    <div className="min-h-screen  text-gray-800">
    

      <main className="container mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold text-center text-red-700 mb-8">
          Welcome to the Dashboard!
        </h2>
        <p className="text-center text-lg text-gray-700 mb-6">
          Explore the beauty and richness of African heritage through curated posts.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {samplePosts.map((post, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all"
            >
              <h3 className="text-xl font-bold text-green-600 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-700">{post.content}</p>
            </div>
          ))}
        </div>

      </main>
      <button 
  onClick={() => alert('Add post functionality coming soon!')} 
  className="flex text-white absolute top-20 w-10 h-10 text-2xl bg-yellow-900 items-center justify-center rounded-full right-14"
>
  +
</button>

      
    </div>
  );
};

export default Dashboard;
