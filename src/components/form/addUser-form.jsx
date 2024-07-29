import { useState } from "react";
import { ListChecks } from "@phosphor-icons/react";

export const AddUserForm = ({ onClose, onAddStudent }) => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    age: "",
    sex: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddStudent(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center px-2 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <button className="bg-green-600 font-poppins text-white px-4 py-2 rounded-lg flex items-center shadow-md hover:bg-green-700 transition-colors duration-300">
          <ListChecks size={20} className="mr-2" />
          Adicionar Estudante
        </button>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <input
              type="text"
              name="id"
              value={formData.id}
              onChange={handleChange}
              placeholder="ID"
              className="block w-full rounded-md border-0 py-3 pr-10 pl-2 text-gray-900 shadow-sm ring-inset bg-gray-200 placeholder:text-gray-400 placeholder:font-poppins focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none sm:text-sm sm:leading-6"
              required
            />
          </div>
          <div className="mt-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nome Completo"
              className="block w-full rounded-md border-0 py-3 pr-10 pl-2 text-gray-900 shadow-sm ring-inset bg-gray-200 placeholder:text-gray-400 placeholder:font-poppins focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none sm:text-sm sm:leading-6"
              required
            />
          </div>
          <div className="mt-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Endereço de email"
              className="block w-full rounded-md border-0 py-3 pr-10 pl-2 text-gray-900 shadow-sm ring-inset bg-gray-200 placeholder:text-gray-400 placeholder:font-poppins focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none sm:text-sm sm:leading-6"
              required
            />
          </div>
          <div className="mt-4">
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Idade"
              className="block w-full rounded-md border-0 py-3 pr-10 pl-2 text-gray-900 shadow-sm ring-inset bg-gray-200 placeholder:text-gray-400 placeholder:font-poppins focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none sm:text-sm sm:leading-6"
              required
            />
          </div>
          <div className="mt-4">
            <select
              name="sex"
              value={formData.sex}
              onChange={handleChange}
              placeholder="Sexo"
              className="block w-full rounded-md border-0 py-3 pr-10 pl-2 text-gray-900 shadow-sm ring-inset bg-gray-200 placeholder:text-gray-400 placeholder:font-poppins focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none sm:text-sm sm:leading-6"
              required
            >
              <option value="Male" className="font-poppins">
                Masculino
              </option>
              <option value="Female" className="font-poppins">
                Feminino
              </option>
            </select>
          </div>
          <div className="flex justify-end space-x-2 mt-4">
            <button
              type="button"
              className="bg-red-500 text-white font-poppins px-4 py-2 rounded-lg shadow-sm hover:bg-red-600 transition-colors"
              onClick={onClose}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-green-600 text-white font-poppins px-4 py-2 rounded-lg shadow-sm hover:bg-green-700 transition-colors"
            >
              Adicionar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
