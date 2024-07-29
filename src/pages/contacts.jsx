import { Footer } from "../components/footer/footer";
import { Header } from "../components/header";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

export const Contacts = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    alert("Mensagem enviada com sucesso!");
    reset();
  };

  return (
    <>
      <Header />
      <motion.main
        className="flex justify-center items-center min-h-screen bg-gray-100 py-10 px-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <section className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
          <h1 className="text-center text-2xl font-bold font-poppins text-gray-900 mb-2 uppercase">
            Entre em Contato!
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="flex flex-col mt-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900 font-poppins"
              >
                Nome
              </label>
              <input
                type="text"
                id="name"
                {...register("name", {
                  required: "O Nome é Obrigatório!",
                  minLength: {
                    value: 2,
                    message: "O Nome deve ter no mínimo 2 caracteres!",
                  },
                })}
                placeholder="Insira o seu nome."
                className="block w-full rounded-md border-0 py-3 pr-10 pl-2 text-gray-900 shadow-sm ring-inset bg-gray-200 placeholder:text-gray-400 placeholder:font-poppins focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>
            {errors.name && (
              <span
                style={{
                  color: "red",
                  fontSize: "0.8rem",
                  marginTop: "0.2rem",
                }}
              >
                {errors.name.message}
              </span>
            )}
            <div className="flex flex-col mt-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900 font-poppins"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "O Email é Obrigatório!",
                })}
                placeholder="Insira o seu email."
                className="block w-full rounded-md border-0 py-3 pr-10 pl-2 text-gray-900 shadow-sm ring-inset bg-gray-200 placeholder:text-gray-400 placeholder:font-poppins focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>
            {errors.email && (
              <span
                style={{
                  color: "red",
                  fontSize: "0.8rem",
                  marginTop: "0.2rem",
                }}
              >
                {errors.email.message}
              </span>
            )}
            <div className="flex flex-col mt-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium leading-6 text-gray-900 font-poppins"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                {...register("message", {
                  required: "A Mensagem é Obrigatória!",
                  minLength: {
                    value: 2,
                    message: "A mensagem deve ter no mínimo 2 caracteres!",
                  },
                })}
                rows="5"
                placeholder="Escreva a sua mensagem!"
                className="block w-full rounded-md border-0 py-3 pr-10 pl-2 text-gray-900 shadow-sm ring-inset bg-gray-200 placeholder:text-gray-400 placeholder:font-poppins focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none sm:text-sm sm:leading-6"
              ></textarea>
            </div>
            {errors.message && (
              <span
                style={{
                  color: "red",
                  fontSize: "0.8rem",
                  marginTop: "0.2rem",
                }}
              >
                {errors.message.message}
              </span>
            )}
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white font-semibold font-poppins py-3 rounded-lg hover:bg-indigo-600 transition-colors"
            >
              Enviar Mensagem
            </button>
          </form>
        </section>
      </motion.main>
      <Footer />
    </>
  );
};
