import { useState } from "react"


export default function Transactions() {
    const [title, setTitle] = useState("")
    const [type, setType] = useState("")
    const [amount, setAmount] = useState(0)
    const today = new Date().toLocaleDateString('en-CA');
    const [date, setDate] = useState(today)
    const [search, setSearch] = useState("")
    const [selectedType, setSelectedType] = useState("")
    const [started, setStarted] = useState("")
    const [ended, setEnded] = useState("")

    const transactionsData = [
  { title: "Spesa supermercato", type: "uscita", amount: 50, date: "2023-09-01" },
  { title: "Stipendio", type: "entrata", amount: 1500, date: "2023-09-05" },
  { title: "Cena fuori", type: "uscita", amount: 80, date: "2023-09-10" },
  { title: "Vendita libro", type: "entrata", amount: 30, date: "2023-09-12" },
  { title: "Benzina", type: "uscita", amount: 60, date: "2023-09-15" },
  { title: "Regalo compleanno", type: "uscita", amount: 100, date: "2023-09-20" },
  { title: "Bonus lavoro", type: "entrata", amount: 200, date: "2023-09-25" }
];

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
            <button type="submit" className="btn btn-primary mt-3">Aggiungi Transazione</button>

            <div className="mt-5">
                <h2><strong>Storico Transazioni:</strong></h2>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Titolo</th>
                            <th>Tipo</th>
                            <th>Data</th>
                            <th>Importo</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Ciao</td>
                            <td>Ciao</td>
                            <td>Ciao</td>
                            <td>Ciao</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}