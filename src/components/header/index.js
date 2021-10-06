const title = () => {
    return (<nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">Lista de Planetas</span>
            <button className='btn btn-outline-primary' onClick={addPlanet}>Adicionar mais um planeta</button>
        </div>
    </nav>);
}