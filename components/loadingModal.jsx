import Loader from "./loader";

const LoadingModal = ({ title }) => {
  return (
    <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full h-full flex justify-center items-center bg-gray-300 bg-opacity-50">
      <div className="relative w-1/2 h-1/2">
        <div className="relative w-full h-full flex flex-col justify-center items-center bg-white rounded-lg shadow-xl">
          <h3 className="select-none italic text-lg">{title}</h3>
          <Loader />
        </div>
      </div>
    </div>
  );
};

export default LoadingModal;
