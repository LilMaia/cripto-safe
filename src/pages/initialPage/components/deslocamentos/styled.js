import styled from 'styled-components';

export const DeslocamentosContainer = styled.div`
    display: flex;
    justify-content: center; /* Centraliza o retângulo horizontalmente */
    align-items: center; /* Centraliza o retângulo verticalmente */
    height: 100vh; /* Ocupa toda a altura da tela */
`;

export const Rectangle = styled.div`
    width: 600px; /* Largura do retângulo */
    height: 800px; /* Altura do retângulo */
    background-color: white; /* Cor de fundo */
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3); /* Sombra ao redor */
    border-radius: 8px; /* Bordas arredondadas, se desejado */
`;