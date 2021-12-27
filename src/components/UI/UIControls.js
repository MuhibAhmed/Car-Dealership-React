import styled from "styled-components";

const Controls = styled.div`
  display: flex;
  flex-wrap: nowrap;
  grid-gap: 1rem;
  gap: 1rem;
  margin-bottom: 1rem;
  text-align: left;
  align-items: flex-end;
`;

const Control = styled.div`
  width: 40%;

  & label {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  & span {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  & input {
    font: inherit;
    padding: 0.5rem;
    border-radius: 6px;
    border: 1px solid #ccc;
    width: 20rem;
    max-width: 100%;
  }

  & input[type="checkbox"] {
    font: inherit;
    padding: 0.5rem;
    border-radius: 6px;
    border: 1px solid #ccc;
    width: 2rem;
  }
`;

const ActionControls = styled.div`
  text-align: right;
`;

const CarItemAccordion = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  padding: 0.5rem;
  margin: 1rem 0;
  border-radius: 12px;
  background-color: #2355a1;

  & h2 {
    color: #3a3a3a;
    font-size: 1rem;
    flex: 1;
    margin: 0 1rem;
    color: white;
  }

  cursor: pointer;
  text-align: left;
  outline: none;
  font-size: 15px;
  transition: 0.4s;

  &:hover {
    background-color: #00122e;
  }

  ${(props) => (props.isActive ? "background-color: #00122e;" : "")}
`;

const CarItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-end;
  flex-flow: column-reverse;
  justify-content: flex-start;
  flex: 1;

  @media (min-width: 580px) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex: 1;

    & h2 {
      font-size: 1.25rem;
    }
  }
`;

const CarItemPrice = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #00255d;
  border: 1px solid white;
  padding: 0.5rem;
  border-radius: 12px;

  @media (min-width: 580px) {
    font-size: 1.25rem;
    padding: 0.5rem 1.5rem;
  }
`;

const CarItemPanel = styled.div`
  padding: 5px 18px;
  display: ${(props) => (props.isPanelDisplayed ? "block" : "none")};
  background-color: #00122e;
  overflow: hidden;
  border-radius: 12px;
  color: aliceblue;
`;

const PanelUL = styled.div`
  margin: 5px;
  columns: 200px;
`;

const CarListStyled = styled.div`
  list-style: none;
  padding: 0;

  .car-list__fallback {
    color: white;
    text-align: center;
  }
`;

const CarsStyled = styled.div`
  padding: 1rem;
  background-color: rgb(16 48 96);
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
`;

const CarFilterStyle = styled.div`
  background-color: rgb(16 48 96);
  padding: 1rem;
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  color: whitesmoke;

  & button {
    font: inherit;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 1px solid #01132e;
    background-color: #01132e;
    color: white;
    border-radius: 12px;
    margin-right: 1rem;
  }

  & button:hover,
  & button:active {
    background-color: #01082e;
    border-color: #01082e;
  }

  & button.alternative {
    color: #01082e;
    border-color: transparent;
    background-color: transparent;
  }

  & button.alternative:hover,
  & button.alternative:active {
    background-color: #ddb3f8;
  }
`;

export {
  Controls,
  ActionControls,
  Control,
  CarItemAccordion,
  CarItemDescription,
  CarItemPrice,
  CarItemPanel,
  PanelUL,
  CarFilterStyle,
  CarListStyled,
  CarsStyled,
};
