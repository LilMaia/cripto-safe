import styled from 'styled-components';

export const MapaContainer = styled.div`
    display: flex;
    justify-content: center; /* Centraliza o retângulo horizontalmente */
    align-items: top; /* Centraliza o retângulo verticalmente */
    margin-top: 20px; /* Espaçamento do topo
`;

export const Rectangle = styled.div`
    width: 800px; /* Largura do retângulo */
    height: 480px; /* Altura do retângulo */
    background-color: black; /* Cor de fundo */
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3); /* Sombra ao redor */
    border-radius: 8px; /* Bordas arredondadas, se desejado */
`;