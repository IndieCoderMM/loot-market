import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

type RatingProps = {
  rating: number;
  total: number;
  maxRating?: number;
};

const Rating = ({ rating, total, maxRating = 5 }: RatingProps) => {
  const stars = Array.from({ length: maxRating }, (_, index) => {
    const isFilled = index < rating;
    return isFilled ? <AiFillStar /> : <AiOutlineStar />;
  });

  return (
    <div className="d-flex gap-1 align-items-end">
      {stars.map((star, index) => (
        <span key={index} className="text-danger fs-4">
          {star}
        </span>
      ))}
      <span
        className="text-secondary"
        style={{
          fontSize: '0.9rem',
        }}
      >
        ({total})
      </span>
    </div>
  );
};

export default Rating;
