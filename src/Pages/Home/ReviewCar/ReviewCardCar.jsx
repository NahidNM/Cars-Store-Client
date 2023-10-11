import { Quote } from "lucide-react";

const ReviewCardCar = ({review}) => {
    const { carName, message, shortDescription, img } = review;
    return (
      <div className="bg-[#a4c0ca] text-white p-10 rounded-lg space-y-6">
        <Quote className="text-6xl text-black" />
        <p className="text-lg italic">{message}</p>
        <div className="flex items-center gap-5">
          <img src={img} alt="customer" className="rounded-full" />
          <div>
            <h4 className="text-2xl font-semibold">{carName}</h4>
            <h1 className="font-light">{shortDescription}</h1>
          </div>
        </div>
      </div>
    );
  };
export default ReviewCardCar;