import { wrapper } from "../store/store";
import { useDispatch } from "react-redux";
import { homeStep } from "../store/stepSlice";

const Preparation = () => {
  const dispatch = useDispatch();
  return (
    <section className="max-w-full w-full h-screen py-14">
      <div className="flex flex-col justify-center items-center w-full h-full py-4">
        <div className="w-full flex flex-col justify-center items-center space-y-1">
          <h3>
            El pedido se encuentra <b>en preparación</b>.
          </h3>
          <p className="italic">No es posible facturar.</p>
        </div>
        <div className="py-8">
          <button
            onClick={() => dispatch(homeStep())}
            className="bg-blue-500 px-4 py-1 rounded-lg text-white hover:bg-blue-600"
          >
            Intentar con otro pedido
          </button>
        </div>
      </div>
    </section>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => {
  store.dispatch(homeStep());
});

export default Preparation;
