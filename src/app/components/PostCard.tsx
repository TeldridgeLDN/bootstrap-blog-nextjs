type PostCardProps = {
    title: string;
    description: string;
  };
  
  const PostCard = ({ title, description }: PostCardProps) => {
    return (
      <div className="bg-gray-100 p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-700">{description}</p>
      </div>
    );
  };
  
  export default PostCard;
  