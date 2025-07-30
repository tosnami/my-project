const ReviewCard = ({ review }) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
        <div className="flex items-center mb-2">
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center mr-3">
            <span className="text-gray-600">{review.author.charAt(0)}</span>
          </div>
          <div>
            <h4 className="font-semibold">{review.author}</h4>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i}
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
        <p className="text-gray-700 mb-2">"{review.comment}"</p>
        <p className="text-gray-400 text-sm">{review.date}</p>
      </div>
    );
  };
  
  export default ReviewCard;
  