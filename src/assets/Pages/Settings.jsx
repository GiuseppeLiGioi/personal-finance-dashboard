import { useState, useRef } from "react"
import { transactionsData } from "../utils/transactions";

import Papa from "papaparse";

export default function Settings({ transactions, setTransactions }) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [language, setLanguage] = useState("")
    const inputFile = useRef(null)


    function handleImportCsv() {
        if (!inputFile.current.files.length) return;

        const file = inputFile.current.files[0];

        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
                console.log(results.data)

                setTransactions(prev => [...prev, ...results.data])
            }
        })
    }

    function handleExport(transactions) {

        const csv = Papa.unparse(transactions);
        const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "transactions_export.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    function resetData(){
        setTransactions(transactionsData)
    }



    return (
        <div className="container-fluid px-4">
            <h1 className="title-pages">Impostazioni</h1>
            <p className="p-pages">Gestisci le impostazioni della tua app.</p>

            <div className="mt-3">
                <label className="form-label"><strong>Nome</strong></label>
                <div>

                    <input
                        type="text"
                        className="form-control"
                        placeholder="Inserisci il tuo nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
            </div>


            <div className="mt-3">
                <label className="form-label"><strong>E-mail</strong></label>
                <div>

                    <input
                        type="text"
                        className="form-control"
                        placeholder="Inserisci la tua e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
            </div>

            <div className="mt-3">
                <label className="form-label"><strong>Password</strong></label>
                <div>

                    <input
                        type="text"
                        className="form-control"
                        placeholder="Inserisci la tua password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <input
                        type="text"
                        className="form-control mt-2"
                        placeholder="Ripeti la tua password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
            </div>

            <div className="mt-3">
                <label className="form-label"><strong>Tema</strong></label>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" />
                    <label className="form-check-label" for="switchCheckDefault">Tema chiaro</label>
                </div>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" />
                    <label className="form-check-label" for="switchCheckDefault">Tema scuro</label>
                </div>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" />
                    <label className="form-check-label" for="switchCheckDefault">Automatico</label>
                </div>

            </div>

            <div className="mt-3">
                <label className="form-label"><strong>Lingua</strong></label>
                <select
                    className="form-select"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                >
                    <option value="">-- Seleziona Lingua --</option>
                    <option value="italiano">Italiano</option>
                    <option value="inglese">Inglese</option>
                </select>
            </div>


            <div className="mt-5">
                <label className="form-label"><strong>File</strong></label>
                <div className="d-flex flex-column">

                    <div className="mb-3">
                        <input
                            type="file"
                            placeholder="Importa un file..."
                            ref={inputFile}
                        />
                    </div>
                    <div className="d-flex gap-3">
                        <button type="button" className="btn btn-primary" onClick={() => handleExport(transactions)}>Esporta CSV</button>
                        <button type="button" className="btn btn-primary" onClick={handleImportCsv}>Importa CSV</button>
                        <button type="button" className="btn btn-primary" onClick={resetData}>Reset Dati</button>
                    </div>
                </div>

            </div>

        </div>
    )
}