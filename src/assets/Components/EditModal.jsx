import { useState } from "react"
import { createPortal } from 'react-dom';
import { Modal, Button } from "react-bootstrap";

export default function EditModal({ show, transaction, onSave, onClose }) {
    const [title, setTitle] = useState("")
    const [type, setType] = useState("")
    const [amount, setAmount] = useState(0)
    const today = new Date().toLocaleDateString('en-CA');
    const [date, setDate] = useState(today)

    if (!show) return null; 

    return createPortal(
        <div className="modal show" style={{ display: 'block' }}>
            <Modal.Dialog>
                <Modal.Header closeButton onHide={onClose}>
                    <Modal.Title>Modifica Transazione</Modal.Title>
                </Modal.Header>

                <Modal.Body>
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
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={onClose}>Close</Button>
                    <Button 
                        variant="primary" 
                        onClick={() => onSave({title, type, amount, date, id: transaction.id})}
                    >
                        Save changes
                    </Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>,
        document.body
    )
}
