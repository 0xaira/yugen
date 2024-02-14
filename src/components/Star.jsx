import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Star = ({ stars, reviews }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    // debugger;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar className=" text-purple-600" />
        ) : stars >= number ? (
          <FaStarHalfAlt className="text-purple-600" />
        ) : (
          <AiOutlineStar className="text-purple-600" /> 
        )}
      </span>
    );
  });

  return (
    <div className="flex items-center">
      <div className="flex gap-1 items-center">
        {ratingStar}
        <p>({reviews} customer reviews)</p>
      </div>
    </div>
  );
};

export default Star;
