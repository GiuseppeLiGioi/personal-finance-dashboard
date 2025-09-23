import { useState } from "react"


export default function Transactions() {
    const [title, setTitle] = useState("")
    const [type, setType] = useState("")
    const [amount, setAmount] = useState(0)
    const today = new Date().toLocaleDateString('en-CA');
    const [date, setDate] = useState(today)
    return (
        <div className="container-fluid px-4">
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