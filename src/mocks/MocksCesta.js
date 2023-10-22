import logo from '../../assets/logo.png';
import tomate from '../../assets/frutas/Tomate.png'
import abobora from '../../assets/frutas/Abóbora.png'
import batata from '../../assets/frutas/Batata.png'
import brocolis from '../../assets/frutas/Brócolis.png'
import pepino from '../../assets/frutas/Pepino.png'


const MocksCesta = {
    topocesta: {
        titulo:'Detalhes Cesta',
    },

    detalhesCesta:{
        nome:'Cesta de Verduras',
        logoFazenda: logo,
        nomeFazenda:'Jenny Jack Farm',
        descricao:'Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha',
        preco:'R$ 40,00',
        botao:'Comprar',
    },



    itens: {
        titulo: 'Itens da Cesta',
        listas: [
            {
                nome:'tomate',
                imagem: tomate,
            },

            {
                nome:'Brócolis',
                imagem: brocolis,
            },

            {
                nome:'Batata',
                imagem: batata,
            },

            {
                nome:'Pepino',
                imagem: pepino,
            },

            {
                nome:'Abóbora',
                imagem: abobora,
            }
        ]
    }

    
}

export default MocksCesta;