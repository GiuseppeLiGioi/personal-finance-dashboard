export default function Dashboard() {
    return (
        <div className="container-fluid px-4">

            <div className="row row-cols-2 row-cols-md-4 justify-content-center g-3">
                <div className="col">
                    <div className="card" style={{ backgroundColor: "rgba(111, 66, 193, 0.8)" }}>
                        <div className="card-body">
                            <h6 className="dashboard-card-p">Saldo Attuale</h6>
                            <h2 className="dashboard-card-title">Titolo</h2>
                        </div>

                    </div>

                </div>

                <div className="col">
                    <div className="card" style={{ backgroundColor: "rgba(40, 167, 69, 0.8)" }}>
                        <div className="card-body">
                            <h6 className="dashboard-card-p">Totale Entrate</h6>
                            <h2 className="dashboard-card-title">Titolo</h2>
                        </div>

                    </div>

                </div>

                <div className="col">
                    <div className="card" style={{ backgroundColor: "rgba(220, 53, 69, 0.8)" }}>
                        <div className="card-body">
                            <h6 className="dashboard-card-p">Totale Uscite</h6>
                            <h2 className="dashboard-card-title">Titolo</h2>
                        </div>

                    </div>

                </div>

                <div className="col">
                    <div className="card" style={{ backgroundColor: "rgba(23, 162, 184, 0.8)" }}>
                        <div className="card-body">
                            <h6 className="dashboard-card-p">Numero Transazioni</h6>
                            <h2 className="dashboard-card-title">Titolo</h2>
                        </div>

                    </div>

                </div>

            </div>

            <div className="row row-cols-1 row-cols-md-2 justify-content-center g-3">
                <div className="col-md-8 mt-5">
                    <div className="card" style={{ backgroundColor: "rgba(111, 66, 193, 0.8)" }}>
                        <div className="card-body">
                            <h6 className="dashboard-card-p">Saldo Attuale</h6>
                            <h2 className="dashboard-card-title">Titolo</h2>
                        </div>

                    </div>

                </div>

                <div className="col-md-4 mt-5">
                    <div className="card" style={{ backgroundColor: "rgba(40, 167, 69, 0.8)" }}>
                        <div className="card-body">
                            <h6 className="dashboard-card-p">Totale Entrate</h6>
                            <h2 className="dashboard-card-title">Titolo</h2>
                        </div>

                    </div>

                </div>



            </div>


        </div>
    )
}