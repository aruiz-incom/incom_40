import { wrapper } from "../store/store";
import { useState } from "react";
import LoadingModal from "./loadingModal";
import { useForm } from "react-hook-form";
import { increment } from "../store/counterSlice";
import { useSelector, useDispatch } from "react-redux";
import {
  backwardStep,
  completeStep,
  forwardStep,
  homeStep,
  openStep,
  preparationStep,
  processStep,
} from "../store/stepSlice";
import { addData, rawSalesOrder } from "../store/invoiceSlice";
import SendEmail from "../pages/api/sendEmail";

const Search = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const counter = useSelector((state) => state.counter.count);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = ({ pedido, monto }) => {
    setLoading(() => (loading = true));
    const body = {
      order: pedido,
      amount: monto,
    };
    fetch("/api/getOrderSale", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (!response.ok) {
          console.log(response.status);
        }
        setLoading(() => (loading = false));
        return response.json();
      })
      .then(({ status, data, salesOrder }) => {
        switch (status) {
          case 1:
            dispatch(openStep());
            break;
          case 2:
            dispatch(addData(data));
            dispatch(rawSalesOrder(salesOrder));
            dispatch(processStep());
            break;
          case 3:
            dispatch(completeStep());
            break;
          case 4:
            dispatch(preparationStep());
            break;
          default:
            dispatch(homeStep());
            break;
        }
      })
      .catch((err) => console.log(err));
  };
  const getInvoice = async () => {
    console.log("click");
    return await fetch("/api/getInvoice", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ invoiceID: "1FC-48139" }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {})
      .catch((err) => console.log(err));
  };
  const putInvoice = async () => {
    console.log("3 2 1");
    return await fetch("/api/putInvoiceData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ salesOrderID: "44894" }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {})
      .catch((err) => {});
  };
  return (
    <section className="max-w-full w-full h-screen py-14">
      {loading && <LoadingModal title={"Buscando pedido"} />}
      <div className="flex flex-col justify-center items-center py-4">
        <h1 className="font-bold select-none">Facturación Electrónica</h1>
        <p className="font-light text-sm select-none">
          Ingresa a continuación los datos para emitir su factura electrónica
        </p>
      </div>
      <div className="flex justify-center items-center">
        <p className="font-light select-none">
          Ingresa el número de pedido y el monto
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-center space-y-4 h-1/2"
      >
        <input
          placeholder="Número de pedido"
          className="text-center focus:outline-none ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-400 rounded"
          {...register("pedido", {
            required: true,
            pattern: {
              value: /^[0-9]*$/g,
              message: "Solamente números",
            },
            minLength: {
              value: 5,
              message: "Longitud no válida",
            },
            maxLength: {
              value: 6,
              message: "Longitud no válida",
            },
          })}
        />
        {errors.pedido && (
          <span className="text-sm text-red-500 m-0 select-none">
            {errors.pedido.message}
          </span>
        )}
        <input
          type="text"
          placeholder="Monto total"
          className="text-center focus:outline-none ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-400 rounded"
          {...register("monto", {
            required: true,
            pattern: {
              value: /^[0-9]*[,]?[0-9]*[.]?[0-9]{1,2}$/g,
              message: "Cifra incorrecta",
            },
          })}
        />
        {errors.monto && (
          <span className="text-sm text-red-500 m-0 select-none">
            {errors.monto.message}
          </span>
        )}
        <button
          type="submit"
          className="bg-blue-500 px-4 py-1 rounded text-white hover:bg-blue-600"
        >
          Siguiente
        </button>
      </form>
    </section>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => {
  store.dispatch(increment());
  store.dispatch(forwardStep());
  store.dispatch(backwardStep());
  store.dispatch(homeStep());
  store.dispatch(openStep());
  store.dispatch(processStep());
  store.dispatch(completeStep());
  store.dispatch(preparationStep());
  store.dispatch(addData());
  store.dispatch(rawSalesOrder());
});

export default Search;
