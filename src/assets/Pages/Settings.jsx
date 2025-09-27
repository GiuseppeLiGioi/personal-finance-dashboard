import { useState, useRef, useEffect } from "react";
import { transactionsData } from "../utils/transactions";
import { translations } from "../utils/translations";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Papa from "papaparse";

export default function Settings({ transactions, setTransactions, language, setLanguage }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const inputFile = useRef(null);
    const [theme, setTheme] = useState("auto");

    const t = translations[language];


    useEffect(() => {
        applyTheme(theme);
    }, [theme]);


    function validateForm() {
        if (!name.trim()) {
            toast.error("Il campo Nome è obbligaotrio")
            return false;
        }
        if (/\d/.test(name)) {
            toast.error("Il campo Nome non deve contenere numeri!");
            return false;
        }
        if (!email.trim()) {
            toast.error("Il campo email è obbligaotrio")
            return false;
        }
        if (!email.trim().includes("@")) {
            toast.error("Il campo email deve contenere @")
            return false;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            toast.error("Inserisci un indirizzo email valido");
            return false;
        }
        if (!password.trim()) {
            toast.error("Il campo password è obbligaotrio")
            return false;
        }
        if (!/[A-Z]/.test(password)) {
            toast.error("La password deve contenere almeno una lettera maiuscola");
            return false;
        }
        if (password.length < 8) {
            toast.error("La password deve contenere almeno 8 caratteri");
            return false;
        }
        if (confirmPassword !== password) {
            toast.error("La conferma della password non è corretta");
            return false;
        }

    }



    function applyTheme(value) {
        const body = document.body;
        body.classList.remove("light-theme", "dark-theme");

        if (value === "light") {
            body.classList.add("light-theme");
        } else if (value === "dark") {
            body.classList.add("dark-theme");
        } else if (value === "auto") {
            body.classList.add("auto");
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            body.classList.add(prefersDark ? "dark-theme" : "light-theme");
        }
    }

    function handleSave(){
        if(!validateForm) return;
        toast.success("Informazioni salvate con successo! ✅")
    }

    function handleImportCsv() {
        if (!inputFile.current.files.length) return;

        const file = inputFile.current.files[0];

        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
                setTransactions(prev => [...prev, ...results.data]);
            }
        });
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

    function resetData() {
        setTransactions(transactionsData);
    }

    return (
        <div className="container-fluid px-4">
            <h1 className="title-pages">{t.settings}</h1>
            <p className="p-pages">{t.description}</p>

            <div className="mt-3">
                <label className="form-label"><strong>{t.name}</strong></label>
                <input
                    type="text"
                    className="form-input form-control"
                    placeholder={t.namePlaceholder}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="mt-3">
                <label className="form-label"><strong>{t.emailLabel || "E-mail"}</strong></label>
                <input
                    type="text"
                    className="form-input form-control"
                    placeholder={t.emailPlaceholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="mt-3">
                <label className="form-label"><strong>{t.passLabel || "Password"}</strong></label>
                <input
                    type="text"
                    className="form-input form-control"
                    placeholder={t.passPlaceholder}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="text"
                    className="form-input form-control mt-2"
                    placeholder={t.repeatPassPlaceholder}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>

            <div className="mt-3">
                <label className="form-label"><strong>{t.themeLabel}</strong></label>
                <div className="form-check form-switch">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="theme"
                        value="light"
                        checked={theme === "light"}
                        id="radioLight"
                        onChange={(e) => setTheme(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="switchCheckLight">{t.light}</label>
                </div>
                <div className="form-check form-switch">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="theme"
                        value="dark"
                        checked={theme === "dark"}
                        id="radiodark"
                        onChange={(e) => setTheme(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="switchCheckDark">{t.dark}</label>
                </div>
                <div className="form-check form-switch">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="theme"
                        value="auto"
                        checked={theme === "auto"}
                        id="radioAuto"
                        onChange={(e) => setTheme(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="switchCheckAuto">{t.auto}</label>
                </div>
            </div>

            <div className="mt-3">
                <label className="form-label"><strong>{t.languageLabel}</strong></label>
                <select
                    className="form-input form-select"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                >
                    <option value="it">Italiano</option>
                    <option value="en">English</option>
                    <option value="es">Espanòl</option>
                    <option value="fr">Francois</option>
                    <option value="de">Detusch</option>

                </select>
            </div>

            <div className="mt-5">
                <label className="form-label"><strong>{t.fileLabel}</strong></label>
                <div className="d-flex flex-column">
                    <input
                        type="file"
                        className="form-input"
                        placeholder={t.chooseFile}
                        ref={inputFile}
                    />
                    <div className="d-flex gap-3 mt-3">
                        <button type="button" className="btn-custom btn" onClick={() => handleExport(transactions)}>{t.exportFile}</button>
                        <button type="button" className="btn-custom btn" onClick={handleImportCsv}>{t.importFile}</button>
                        <button type="button" className="btn-custom btn" onClick={resetData}>{t.reset}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
