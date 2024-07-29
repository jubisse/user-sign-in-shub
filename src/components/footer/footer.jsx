import {
  GitPullRequest,
  InstagramLogo,
  LinkedinLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";

export const Footer = () => {
  return (
    <footer className="w-full mx-auto bg-indigo-600 py-4 fixed bottom-0">
      <div className="text-center">
        <div className="flex justify-center text-white py-2">
          <GitPullRequest size={24} weight="fill" />
          <InstagramLogo size={24} weight="fill" />
          <LinkedinLogo size={24} weight="fill" />
          <YoutubeLogo size={24} weight="fill" />
        </div>
        <p className="text-sm leading-6 font-regular text-white font-poppins">
          Copyright &copy; {new Date().getFullYear()}. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
};
