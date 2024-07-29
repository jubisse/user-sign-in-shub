import { Header } from "../components/header/index";
import { Footer } from "../components/footer/footer";
import { Envelope, Lock } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Header />
      <div className="m-24 flex container mx-auto px-2 max-w-[1400px] h-[680px]">
        <div className="w-1/2 h-full bg-sky-blue-200 relative flex items-center justify-center">
          <img
            src="./assets/img/user-sign-up.jpg"
            alt="clothes"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-1/2 h-full flex flex-col items-center justify-center bg-white border border-indigo-600 rounded-r-md">
          <h2 className="text-left text-2xl font-black tracking-tight text-slate-900 uppercase">
            Criar Conta<span className="z-10 relative"> Students HUB</span>
          </h2>
          <p className="text-left text-sm font-regular text-gray-900 mb-2">
            Faz o teu cadastro para começares a tua jornada de aprendizagem no
            mundo da Programação.
          </p>
          <div className="w-full px-6 py-4">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="mt-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Endereço de email
                </label>
                <div className="mt-2 flex items-center relative">
                  <input
                    type="email"
                    id="email"
                    {...register("email", {
                      required: "Email é obrigatório!",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                        message: "Endereço de email inválido!",
                      },
                    })}
                    placeholder="Endereço de Email"
                    className="block w-full rounded-md border-0 py-3 pr-10 pl-2 text-gray-900 shadow-sm ring-inset bg-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-blue-200 focus:outline-none sm:text-sm sm:leading-6"
                  />
                  <Envelope
                    size={20}
                    weight="fill"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
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
              </div>

              <div className="mt-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Senha
                </label>
                <div className="mt-2 flex items-center relative">
                  <input
                    type="password"
                    id="password"
                    {...register("password", {
                      required: "Senha é obrigatória!",
                      minLength: {
                        value: 8,
                        message: "Senha deve ter no mínimo 8 caracteres!",
                      },
                    })}
                    placeholder="Escolha a sua Senha"
                    className="block w-full rounded-md border-0 py-3 pr-10 pl-2 text-gray-900 shadow-sm ring-inset bg-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-blue-200 focus:outline-none sm:text-sm sm:leading-6"
                  />
                  <Lock
                    size={20}
                    weight="fill"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                  />
                </div>
                {errors.password && (
                  <span
                    style={{
                      color: "red",
                      fontSize: "0.8rem",
                      marginTop: "0.2rem",
                    }}
                  >
                    {errors.password.message}
                  </span>
                )}
              </div>

              <div className="mt-2">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirmar Senha
                </label>
                <div className="mt-2 flex items-center relative">
                  <input
                    type="password"
                    id="confirmPassword"
                    {...register("confirmPassword", {
                      required: "Confirmação de senha é obrigatória!",
                      validate: (value) =>
                        value === watch("password") ||
                        "As senhas não correspondem!",
                    })}
                    placeholder="Confirma a sua Senha"
                    className="block w-full rounded-md border-0 py-3 pr-10 pl-2 text-gray-900 shadow-sm ring-inset bg-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-blue-200 focus:outline-none sm:text-sm sm:leading-6"
                  />
                  <Lock
                    size={20}
                    weight="fill"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                  />
                </div>
                {errors.confirmPassword && (
                  <span
                    style={{
                      color: "red",
                      fontSize: "0.8rem",
                      marginTop: "0.2rem",
                    }}
                  >
                    {errors.confirmPassword.message}
                  </span>
                )}
              </div>

              <div className="flex">
                <button
                  type="submit"
                  className="flex w-1/2 justify-center rounded-full bg-indigo-500 px-2 py-2 mx-1 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-700 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-blue-200 uppercase"
                >
                  Criar Conta
                </button>

                <Link
                  to="/"
                  className="w-1/2 justify-center rounded-full border-indigo-500 border px-2 py-2 mx-1 text-sm font-semibold leading-6 text-indigo-500 shadow-sm text-center uppercase hover:border-indigo-700 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 hover:text-indigo-700"
                >
                  Iniciar Sessão
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
