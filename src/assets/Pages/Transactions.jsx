import { useState, useRef } from "react"


export default function Transactions({transactions, setTransactions}) {
    const [title, setTitle] = useState("")
    const [type, setType] = useState("")
    const [amount, setAmount] = useState(0)
    const today = new Date().toLocaleDateString('en-CA');
    const [date, setDate] = useState(today)
    const [search, setSearch] = useState("")
    const [selectedType, setSelectedType] = useState("")
    const [started, setStarted] = useState("")
    const [ended, setEnded] = useState("")
    const inputFile = useRef(null)



    const filteredTransactions = transactions.filter((t) => {
        return t.title.toLowerCase().includes(search.toLowerCase()) &&
            (selectedType === "" || selectedType === "tutte" || t.type === selectedType) &&
            (!started || t.date >= started) &&
            (!ended || t.date <= ended)
    })


    function addTransaction(){
    const newTransaction = {title, type, date, amount}
    setTransactions([...transactions, newTransaction])
    }

    return (
        <div className="container-fluid px-4">

            <div className="row mb-4 justify-content-center align-items-center g-3">
                <div className="col">
                    <label className="form-label"><strong>Ricerca per titolo:</strong></label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Inserisci il titolo della transazione"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <div className="col">
                    <label className="form-label"><strong>Specifica il Tipo:</strong></label>
                    <select
                        className="form-select"
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                    >
                        <option value="">-- Seleziona il tipo --</option>
                        <option value="tutte">Tutte</option>
                        <option value="entrata">Entrata</option>
                        <option value="uscita">Uscita</option>
                    </select>
                </div>

                <div className="col">
                    <label className="form-label"><strong>Ricerca per intervallo di date:</strong></label>
                    <input
                        type="date"
                        className="form-control"
                        placeholder="Inserisci data di inizio"
                        value={started}
                        onChange={(e) => setStarted(e.target.value)}
                    />

                    <input
                        type="date"
                        className="form-control mt-2"
                        placeholder="Inserisci data di fine"
                        value={ended}
                        onChange={(e) => setEnded(e.target.value)}
                    />
                </div>


            </div>

            <h1 className="title-pages">TRANSAZIONI</h1>
            <p className="p-pages">In questa sezione dell'app sei in grado di aggiungere, modificare o rimuovere transazioni. Le modifiche saranno mostrate nella tabella sottostante.</p>

            <div className="mb-2">
                <label className="form-label"><strong>Titolo</strong></label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Inserisci il titolo della transazione"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>



            <div className="row row-cols-1 row-cols-md-3 g-2">
                <div className="col">

                    <div className="mb-2">
                        <label className="form-label"><strong>Tipo</strong></label>
                        <select
                            className="form-select"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                        >
                            <option value="">-- Seleziona Tipo --</option>
                            <option value="entrata">Entrata</option>
                            <option value="uscita">Uscita</option>

                        </select>
                    </div>



                </div>
                <div className="col">


                    <div className="mb-2">
                        <label className="form-label"><strong>Importo</strong></label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Inserisci l'ammontare della transazione"
                            value={amount}
                            onChange={(e) => setAmount(Number(e.target.value))}
                        />
                    </div>
                </div>



                <div className="col">

                    <div className="mb-2">
                        <label className="form-label"><strong>Data Transazione</strong></label>
                        <input
                            type="date"
                            className="form-control"
                            placeholder="Inserisci la data della transazione"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                </div>

            </div>
            <button type="button" className="btn btn-primary mt-3" onClick={addTransaction}>Aggiungi Transazione</button>

            <div className="mt-5">
                <h2><strong>Storico Transazioni:</strong></h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Titolo</th>
                            <th>Tipo</th>
                            <th>Data</th>
                            <th>Importo</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            filteredTransactions.map((f, index) => (
                                <tr key={index}>
                                    <td>{f.title}</td>
                                    <td>{f.type}</td>
                                    <td>{f.date}</td>
                                    <td>{f.amount}</td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}