import { useState } from "react";
import EditModal from "../Components/EditModal";
import { translations } from "../utils/translations";

export default function Transactions({ transactions, setTransactions, language }) {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState(0);
  const today = new Date().toLocaleDateString("en-CA");
  const [date, setDate] = useState(today);
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [started, setStarted] = useState("");
  const [ended, setEnded] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingTransaction, setEditingTransaction] = useState(null);
  const [show, setShow] = useState(null);

  const t = translations[language]; // traduzioni correnti

  const filteredTransactions = transactions.filter((tr) => {
    return tr.title.toLowerCase().includes(search.toLowerCase()) &&
      (selectedType === "" || selectedType === "tutte" || tr.type === selectedType) &&
      (!started || tr.date >= started) &&
      (!ended || tr.date <= ended);
  });

  function addTransaction() {
    const newTransaction = { id: Date.now(), title, type, date, amount };
    if (!editingId) {
      setTransactions([...transactions, newTransaction]);
    } else {
      setTransactions(prev =>
        prev.map(tr => tr.id === editingId ? { ...tr, title, type, amount, date } : tr)
      );
    }
  }

  function deleteTransaction(id) {
    setTransactions(prev => prev.filter(tr => tr.id !== id));
  }

  function editTransaction(id) {
    const transactionToEdit = transactions.find(tr => tr.id === id);
    if (!transactionToEdit) return;
    setEditingTransaction(transactionToEdit);
    setEditingId(id);
    setShow(true);
  }

  function onSave({ title, type, amount, date, id }) {
    setTransactions(prev => prev.map(tr => tr.id === id ? { ...tr, title, type, amount, date } : tr));
    setShow(false);
  }

  function onClose() {
    setShow(false);
  }

  return (
    <div className="container-fluid px-4">

      <div className="container-filters row mb-4 justify-content-center align-items-center g-3">
        <div className="col">
          <label className="label-filters form-label"><strong>{t.labelTitle}</strong></label>
          <input
            type="text"
            className="form-input form-control"
            placeholder={t.placeholderTitle}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="col">
          <label className="label-filters form-label"><strong>{t.labelType}</strong></label>
          <select
            className="form-input form-select"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="">{t.languagePlaceholder}</option>
            <option value="tutte">{language === "it" ? "Tutte" : "All"}</option>
            <option value="entrata">{language === "it" ? "Entrata" : "Income"}</option>
            <option value="uscita">{language === "it" ? "Uscita" : "Expense"}</option>
          </select>
        </div>

        <div className="col">
          <label className="label-filters form-label"><strong>{language === "it" ? "Ricerca per intervallo di date:" : "Search by Date Range:"}</strong></label>
          <input
            type="date"
            className="form-input form-control"
            placeholder={language === "it" ? "Inserisci data di inizio" : "Start Date"}
            value={started}
            onChange={(e) => setStarted(e.target.value)}
          />
          <input
            type="date"
            className="form-input form-control mt-2"
            placeholder={language === "it" ? "Inserisci data di fine" : "End Date"}
            value={ended}
            onChange={(e) => setEnded(e.target.value)}
          />
        </div>
      </div>

      <h1 className="title-pages">{t.transactions}</h1>
      <p className="p-pages">{t.descriptionTransactions}</p>

      <div className="mb-2">
        <label className="form-label"><strong>{t.titleLabel}</strong></label>
        <input
          type="text"
          className="form-input form-control"
          placeholder={t.placeholderTitle}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-2">
        <div className="col">
          <div className="mb-2">
            <label className="form-label"><strong>{t.typeLabel}</strong></label>
            <select
              className="form-input form-select"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="">{t.placeholderType}</option>
              <option value="entrata">{language === "it" ? "Entrata" : "Income"}</option>
              <option value="uscita">{language === "it" ? "Uscita" : "Expense"}</option>
            </select>
          </div>
        </div>

        <div className="col">
          <div className="mb-2">
            <label className="form-label"><strong>{t.amountLabel}</strong></label>
            <input
              type="number"
              className="form-input form-control"
              placeholder={language === "it" ? "Inserisci l'ammontare della transazione" : "Enter transaction amount"}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>
        </div>

        <div className="col">
          <div className="mb-2">
            <label className="form-label"><strong>{language === "it" ? "Data Transazione" : "Transaction Date"}</strong></label>
            <input
              type="date"
              className="form-input form-control"
              placeholder={language === "it" ? "Inserisci la data della transazione" : "Enter transaction date"}
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>
      </div>

      <button type="button" className="btn btn-success mt-3" onClick={addTransaction}>{t.addTransaction}</button>

      <div className="mt-5">
        <h2><strong>{t.storicoTransazioni}</strong></h2>
        <table className="table-transactions table">
          <thead>
            <tr>
              <th className="th-table-transaction">ID</th>
              <th className="th-table-transaction">{t.titleLabel}</th>
              <th className="th-table-transaction">{t.typeLabel}</th>
              <th className="th-table-transaction">{t.data}</th>
              <th className="th-table-transaction">{t.amountLabel}</th>
              <th className="th-table-transaction">{t.azioni}</th>
            </tr>
          </thead>

          <tbody>
            {filteredTransactions.map((f) => (
              <tr key={f.id}>
                <td className={f.type === "entrata" ? "tr-green" : "tr-red"}>{f.id}</td>
                <td className={f.type === "entrata" ? "tr-green" : "tr-red"}>{f.title}</td>
                <td className={f.type === "entrata" ? "tr-green" : "tr-red"}>{f.type}</td>
                <td className={f.type === "entrata" ? "tr-green" : "tr-red"}>{f.date}</td>
                <td className={f.type === "entrata" ? "tr-green" : "tr-red"}>{f.amount}</td>
                <td className="d-flex gap-2">
                  <button className="btn-table-transactions-update btn btn-primary btn-sm" onClick={() => editTransaction(f.id)}>✏️</button>
                  <button className="btn-table-transactions-remove btn btn-dark btn-sm" onClick={() => deleteTransaction(f.id)}>❌</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {show && <EditModal show={show} onSave={onSave} onClose={onClose} transaction={editingTransaction} />}
    </div>
  );
}
