import styled from "styled-components";
import { FaEdit, FaTrash } from "react-icons/fa";

export const Tarefas = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ItensLista = styled.li`
  background: rgba(10, 20, 30, 0.8);
  color: #e6f1ff;
  padding: 12px;
  border-radius: 6px;
  margin-bottom: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Icones = styled.div`
  display: flex;
  gap: 10px;
`;

export const IconEdit = styled(FaEdit)`
  cursor: pointer;
  color: #4da3ff;
`;

export const IconDelete = styled(FaTrash)`
  cursor: pointer;
  color: #ff6b6b;
`;
