import Head from "next/head";
import { useForm } from "react-hook-form";

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = ({ pedido, monto }) => {
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
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Head>
        <title>Facturación INCOM</title>
        <meta
          name="description"
          content="Facturación Electrónica INCOM CFDI 4.0"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="max-w-full w-full h-screen">
        <div className="flex flex-col justify-center items-center py-4">
          <h1 className="font-bold">Facturación Electrónica</h1>
          <p className="font-light text-sm">
            Ingresa a continuación los datos para emitir su factura electrónica
          </p>
        </div>
        <div className="flex justify-center items-center">
          <p className="font-light">Ingresa el número de pedido y el monto</p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center items-center space-y-4 h-1/2 border border-red-500"
        >
          <input
            placeholder="Número de pedido"
            className="text-center focus:outline-none ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-400 rounded"
            {...register("pedido", { required: true })}
          />
          <input
            type="text"
            placeholder="Monto total"
            className="text-center focus:outline-none ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-400 rounded"
            {...register("monto", { required: true })}
          />
          <button
            type="submit"
            className="bg-blue-400 px-4 py-1 rounded text-white hover:bg-blue-500"
          >
            Siguiente
          </button>
        </form>
      </section>
    </>
  );
}
