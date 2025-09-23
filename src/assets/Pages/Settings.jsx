import { useState } from "react"

export default function Settings() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [language, setLanguage] = useState("")
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
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" />
                    <label class="form-check-label" for="switchCheckDefault">Tema chiaro</label>
                </div>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" />
                    <label class="form-check-label" for="switchCheckDefault">Tema scuro</label>
                </div>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" />
                    <label class="form-check-label" for="switchCheckDefault">Automatico</label>
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
                <div className="d-flex gap-3">

                <button className="btn btn-primary">Esporta CSV</button>
                <button className="btn btn-primary">Importa CSV</button>
                <button className="btn btn-primary">Reset Dati</button>
                </div>

            </div>

        </div>
    )
}