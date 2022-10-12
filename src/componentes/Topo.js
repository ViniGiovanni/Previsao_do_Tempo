import './Topo.css'

function Topo(props){
   
    return(
        <header>
            <div>
            <h2>Previsão do Tempo</h2>
            </div>
            <div className='pesquisa'>
            <input
                type='text'
                placeholder='buscar'
            />
            <span>&#x1F50E;&#xFE0E;</span>
            </div>
            
        </header>
    );
}

export default Topo;