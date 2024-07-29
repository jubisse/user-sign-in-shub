import { Header } from "../components/header/index-login";
import { Footer } from "../components/footer/footer";
import { Envelope, LockKey } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/auth-context";

export const SignIn = () => {
  const errorStyles = {
    color: "red",
    fontSize: "0.8rem",
    marginTop: "0.2rem",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { login } = useAuth();
  const navigate = useNavigate();

  function onSubmit(data) {
    console.log(data);
    login();
    navigate("/home");
  }

  return (
    <main>
      <Header />
      <div className="m-24 flex container mx-auto px-2 max-w-[1400px] h-[680px]">
        <div className="w-1/2 h-full bg-sky-blue-200 relative flex items-center justify-center">
          <img
            src="./assets/img/user-sign-in.jpg"
            alt="clothes"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/2 h-full flex flex-col items-center justify-center bg-white border border-indigo-600 rounded-r-md">
          <h2 className="text-left text-2xl font-black tracking-tight text-slate-900 uppercase">
            Bem vindo(a) à<span className="z-10 relative"> Students HUB</span>
          </h2>
          <p className="text-left text-sm font-regular text-gray-900 mb-2">
            Faz o teu login para começares a tua jornada de aprendizagem no
            mundo da Programação.
          </p>
          <div className="w-full px-6 py-4">
            <form
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
            >
              <div className="mt-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Endereço de Email
                </label>
                <div className="mt-2 flex items-center relative">
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email é obrigatório!",
                      pattern: {
                        value: /^[^@]+@[^@]+\.[^@]+$/,
                        message: "Email inválido!",
                      },
                    })}
                    placeholder="Endereço de email ou nome de usuário"
                    className="block w-full rounded-md border-0 py-3 pr-10 pl-2 text-gray-900 shadow-sm ring-inset bg-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-blue-200 focus:outline-none sm:text-sm sm:leading-6"
                  />
                  <Envelope
                    size={20}
                    weight="fill"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                  />
                </div>
                {errors.email && (
                  <p style={errorStyles}>{errors.email.message}</p>
                )}
              </div>
              <div className="mt-2">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Palavra-passe
                </label>
                <div className="mt-2 flex items-center relative">
                  <LockKey
                    size={20}
                    weight="fill"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="password"
                    {...register("password", {
                      required: "Senha obrigatória!",
                      minLength: {
                        value: 6,
                        message: "A senha deve ter pelo menos 6 caracteres.",
                      },
                    })}
                    placeholder="Palavra-passe"
                    className="block w-full rounded-md border-0 py-3 pr-10 pl-2 text-gray-900 shadow-sm ring-inset bg-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-blue-200 focus:outline-none sm:text-sm sm:leading-6"
                  />
                </div>
                {errors.password && (
                  <p style={errorStyles}>{errors.password.message}</p>
                )}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex">
                  <input
                    type="checkbox"
                    {...register("rememberMe")}
                    id="rememberMe"
                    className="mr-2 text-sky-blue-200"
                  />
                  <label
                    htmlFor="rememberMe"
                    className="block text-[15px] font-regular leading-6 text-gray-900"
                  >
                    Lembrar-me
                  </label>
                </div>
                <div className="text-sm">
                  <Link
                    to="/password-reset"
                    className="font-regular text-[15px] underline text-sky-blue-200 hover:text-orange transition-colors duration-200"
                  >
                    Esqueceu-se da palavra-passe?
                  </Link>
                </div>
              </div>
              <div className="flex">
                <button
                  type="submit"
                  className="flex w-1/2 justify-center rounded-full bg-indigo-500 px-2 py-2 mx-1 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-700 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-blue-200 uppercase"
                >
                  Iniciar sessão
                </button>

                <Link
                  to="/sign-up"
                  className="w-1/2 justify-center rounded-full border-indigo-500 border px-2 py-2 mx-1 text-sm font-semibold leading-6 text-indigo-500 shadow-sm text-center uppercase hover:border-indigo-700 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 hover:text-indigo-700"
                >
                  Criar uma conta
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};
