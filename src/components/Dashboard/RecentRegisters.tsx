import { useContext } from "react";
import styled from "styled-components";
import { FormContext } from "../../contexts/form";

const Table = styled.table`
  margin-top: 1rem;
  width: auto;
  height: auto;
  box-shadow: #dbd6d6 0px 0px 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-family: sans-serif;
  padding-bottom: 2rem;

  @media screen and (min-width: 768px) {
    width: 90vw;
  }

  @media screen and (min-width: 1024px) {
    width: auto;
  }
`;
const Th = styled.th`
  width: 15rem;
  font-size: 1.2rem;
  padding: 2rem;
  border-left: 0rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  color: darkgray;
  font-weight: bold;
  margin-bottom: 1rem;

  @media screen and (max-width: 767px) {
    font-size: 0.8rem;
    width: 2rem;
    padding-left: 0.85rem;
  }

  @media screen and (min-width: 768px) {
    width: 8rem;
  }

  @media screen and (min-width: 1023px) {
    font-size: 1rem;
    width: 5rem;
  }
`;

const Td = styled(Th)`
  color: ${(props) => props.color};
  width: 15rem;
  border-bottom: 0rem;
  text-align: left;

  @media screen and (max-width: 767px) {
    width: 2rem;
  }

  @media screen and (min-width: 768px) {
    width: 8rem;
  }

  @media screen and (min-width: 1023px) {
    font-size: 1rem;
    width: 5rem;
  }
`;

const Tr = styled.tr`
  width: auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const ButtonDelete = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 1rem;

  :hover {
    background-color: #383535;
  }

  @media screen and (max-width: 767px) {
    font-size: 0.5rem;
  }
`;

export default function RecentRegisters() {
  const { financialEvent, setFinancialEvent } = useContext(FormContext);

  function colorDefinedByCategory(category) {
    let color = "black";

    if (category === "Spent" || category === "Donation") {
      color = "red";
    } else {
      color = "green";
    }

    return color;
  }

  function renderItems() {
    if (financialEvent) {
      return financialEvent.map((item: any, index: any) => {
        return (
          <Tr key={index} id={item.id}>
            <Td color="black">{item.category}</Td>
            <Td color="black">{item.type}</Td>
            <Td color={colorDefinedByCategory(item.category)}>
              {" "}
              $ {item.value}
            </Td>
            <Td>
              <ButtonDelete onClick={deleteItem}>❌</ButtonDelete>
            </Td>
          </Tr>
        );
      });
    }
  }

  // delete //

  function deleteItem(e) {
    const currentRow = e.target.parentElement.parentNode;

    const currentID = JSON.parse(e.target.parentElement.parentNode.id);

    const currentCategory =
      e.target.parentElement.parentNode.firstChild.innerHTML;

    const currentType =
      e.target.parentElement.parentElement.firstElementChild.nextElementSibling
        .outerText;

    const currentValue =
      e.target.parentElement.parentElement.firstElementChild.nextElementSibling
        .nextElementSibling.outerText;
    const formatValue = (value) => {
      return value.replace("$ ", "");
    };

    JSON.stringify(formatValue(currentValue));

    const currentObjects = financialEvent;

    const findByCurrentId = currentObjects.find(
      (item) => item.id === currentID
    );

    console.log(currentObjects);

    const index = currentObjects.indexOf(findByCurrentId);
    if (index > -1) {
      currentObjects.splice(index, 1);
    }

    // array = [2, 9]
    console.log(currentObjects);

    setFinancialEvent(currentObjects);

    localStorage.setItem("Financial", JSON.stringify(currentObjects));

    currentRow.remove();

    window.location.href = "/";
  }

  return (
    <Table>
      <thead>
        <Tr>
          <Th>Category</Th>
          <Th>Type</Th>
          <Th>Value</Th>
        </Tr>
      </thead>
      <tbody>{renderItems()}</tbody>
    </Table>
  );
}
