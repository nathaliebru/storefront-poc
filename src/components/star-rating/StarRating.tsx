import StarFilledIcon from '@/public/icons/star-filled.svg';
import StarHalfIcon from '@/public/icons/star-half.svg';
import StarIcon from '@/public/icons/star.svg';

export const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center">
    {[...Array(5)].map((_, index) => {
      const starValue = index + 1;
      const isHalfStar = rating >= starValue - 0.5 && rating < starValue;
      const isFilled = rating >= starValue;

      return (
        <span key={index}>
          {isFilled ? (
            <StarFilledIcon height={20} width={20} />
          ) : isHalfStar ? (
            <StarHalfIcon height={20} width={20} />
          ) : (
            <StarIcon height={20} width={20} />
          )}
        </span>
      );
    })}
    ({rating})
  </div>
);
