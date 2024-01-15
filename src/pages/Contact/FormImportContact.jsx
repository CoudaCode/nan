import { useState } from "react";

import axios from "axios";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { ApiUrl } from "../../outils/URL";
import Cookie from "js-cookie";
import { IsCookies } from "../../outils/IsCookie";




function FormImportContact({ isOpen, onClose, onConfirm, contact }){
    if (!isOpen || !contact) { return null }
    const handleDelete = () => { onConfirm(); };

    const {fullname, email, sms, whatsapp, id} = contact;
    const token = IsCookies();
    const saveContact = async (data) => {
        const formDatas = new FormData();
        for (const key in data) { formDatas.append(key, data[key][0]) }
        document.querySelector('.FormImporteContact').querySelectorAll('input', 'buttton').forEach(item => item.disabled = true);
        return await axios.post(ApiUrl + 'contact/saveContentFileToJson', formDatas, {headers: {Authorization: 'token '+token}});
    }
    const { register, handleSubmit, formState: { errors } } = useForm({ excelOrCsv: ''});
    const {mutate: ConverseAdressFille} = useMutation({
        mutationFn: data => saveContact(data),
        onSuccess: success => {
            toast.success(success.data.message);
            onClose();
            // setTimeout(() => window.location.reload(), 3050);
        },
        onError: error => {
            document.querySelector('.FormImporteContact').querySelectorAll('input', 'buttton').forEach(item => item.disabled = false);
            toast.error(error.response.data.message);
        }
    });
    const onSubmit = (data) => ConverseAdressFille(data);



    const initialvalueInput = {excelOrCsv: ''};
    const [valueInput, setvalueInput] = useState(initialvalueInput);
    const handleChange = e => {
        const { name, value } = e.target;
        setvalueInput({ ...valueInput, [name]: value });
    };

    

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="bg-gray-800 bg-opacity-75 absolute inset-0"></div>

        <div className="rounded-lg bg-white p-8 shadow-2xl z-10 w-[40rem]">
            <form className="FormImporteContact max-w-md mx-auto mt-8 p-8 bg-white rounded-lg shadow-md" encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
                <h3 className="text-2xl font-semibold text-purple-600">Importer fichiers contact</h3>
                <div className="mb-6 text-black">Fichier recommandés (<span className="text-red-600">.xlsx, .csv, .xls</span>)</div>
                

                <label className="block mb-4">
                    <span className="text-gray-700">Charger le fichier :</span>
                    <input
                        type="file"
                        name="excelOrCsv"
                        accept=".xlsx, .csv, .xls"
                        required
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-purple-500 text-purple-600"
                        {...register("excelOrCsv")}
                    />
                    {errors.excelOrCsv && (<p className="text-red-500 text-sm">{errors.excelOrCsv.message}</p>)}
                </label>

                <div className="flex justify-between">
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700" > Soumettre </button>
                    <button type="button" onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"> Fermer </button>
                </div>
            </form>
        </div>
    </div>
  );
}

export default FormImportContact;