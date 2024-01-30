import axios from "axios"
import ReactPaginate from "react-paginate"
import { IsCookies } from "../../outils/IsCookie"
import { ApiUrl } from "../../outils/URL"
import { useEffect, useState } from "react"


export default function DeleteMessages() {
    const [AllDelete, SetDelete] = useState([]);
    
    useEffect(() => {
        axios.get(ApiUrl+'contact/getAllDelete', {headers: {Authorization: `token ${IsCookies()}`}})
        .then(success => SetDelete(success.data.data))
    })

    const [ pagesNumber, setPagesNumber ] = useState(0);
    const ContactsPerPage = 9;
    const pagesVisited = pagesNumber * ContactsPerPage;
    const displayContact = AllDelete.slice(pagesVisited, pagesVisited + ContactsPerPage).map((item) => {
        return(
            <tr key={item.id}>
                <td className="whitespace-nowrap text-center px-4 py-2 font-medium text-gray-900">
                    {item.fullname}
                </td>
                <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700">
                    {item.email}
                </td>
                <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700">
                    {item.sms}
                </td>
                <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700">
                    {item.whatsapp}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-center text-gray-700">
                    <button id={'restore'+item.id} className="inline-block rounded bg-indigo-600 p-2 m-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500">
                        Restaurer
                    </button>
                    <button id={'deleteNew'+item.id} className="inline-block rounded bg-red-500 p-2 m-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500">
                        Supprimer
                    </button>
                </td>
            </tr>
        )
    });

    const countPage = Math.ceil(AllDelete.length / ContactsPerPage);

    const changePage = ({selected})=>{
        setPagesNumber(selected);
    }


    return (
        <div className="container mt-9">
            <div className="flex justify-between">
                <h2 className="p-2 rounded-md bg-white-800 text-white text-2xl mb-2 outline-none"> Messages Supprimés </h2>
                <p className="text-center font-extrabold m-2">
                    <button className="inline-block rounded bg-indigo-600 p-2 m-1 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500">
                        Tout Restaurer
                    </button>
                    <button className="inline-block rounded bg-red-500 p-2 m-1 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500">
                        Suppression Définitive
                    </button>
                </p>
            </div>
            <div className="rounded-lg border border-gray-200">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                  <thead className="divide-y">
                    <tr>
                      <th className="whitespace-nowrap break-words px-4 py-2 font-extrabold text-gray-900">
                        Nom ou Raison Sociale
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 font-extrabold text-gray-900">
                        Email
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 font-extrabold text-gray-900">
                        Téléphone
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 font-extrabold text-gray-900">
                        WhatsApp
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {displayContact}
                  </tbody>
                </table>

                <div className="rounded-b-lg border-t border-gray-200 p-2">
                    <ol className="flex justify-center gap-1 text-xs font-medium">
                        <ReactPaginate
                            previousLabel={'<< Précédent'}
                            nextLabel={'Suivant >>'}
                            pageCount={countPage}
                            onPageChange={changePage}
                            containerClassName={'paginationBttns'}
                            previousLinkClassName={'previousBttn'}
                            nextLinkClassName={"nextBttn"}
                            disabledClassName={"paginationDisabled"}
                            activeClassName={"paginationActive"}
                        />
                    </ol> 
                </div>
            </div>
        </div>
    )
}