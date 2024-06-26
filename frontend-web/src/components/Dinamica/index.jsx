import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 20px;
`;

const GroupContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  margin-right: 20px;
`;

const AlunoDropdown = styled.select`
  background: #ffffff;
  color: #000000;
  border: none;
  padding: 10px;
  margin: 5px 0;
  cursor: pointer;
  height: 40px;
`;

const MonitorContainer = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  border: 1px solid #c3e6cb;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Dropdown = styled.select`
  background: #ffffff;
  color: #000000;
  border: none;
  padding: 10px;
  margin: 5px 0;
  cursor: pointer;
  height: 40px;
`;

const AddGroupButton = styled.button`
  padding: 10px;
  background: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;

const SelectedItem = styled.div`
  color: #ffffff;
  justify-content: space-between;
  padding: 5px 10px;
  margin: 5px;
  border-radius: 5px;
`;

const RemoveItem = styled.span`
  color: #ff0a0a;
`;

const RemoveButton = styled.button`
  width: 10px;
  height: 10px;
  background: transparent;
  border: 0px;
`;

const Containerlog = styled.div`
  flex-direction: column;
  align-self: flex-start;
`;

const alunos = [
  'Anna Cristina Ferreira Alves',
  'Clayton Junior da Silva Portal',
  'Eduardo da Silva Lima',
  'Guilherme Henrique de Souza Martins Pacífico',
  'Guilherme Vasconcellos Sobreira de Carvalho',
  'Magdo Pereira Xavier',
  'Marcus Vinícius Gomes dos Santos',
  'Mateus Rocha da Silva',
  'Rafael Mello dos Santos',
  'Rafaela Soares de Souza Freitas da Silva',
  'Ricardo Augusto de Borba',
  'RICHARD DIAS AMANCIO BESERRA',
  'Ana Clara de Paiva Fernandes',
  'Jully Ferreira da Silva Dias',
  'Maria Luiza Pinheiro Ferreira',
  'Mario Mattos de Carvalho Junior',
  'Alexandre Peixoto Santos',
  'Wanderson dos Santos Corrêa',
];

const monitores = [
  'Lorenna',
  'Stefano',
  'Paula',
  'Vinicius Souza',
  'Paula Souza',
  'Anielly M.',
  'Gabriel Ayres',
  'Leonardo de B.',
  'Lucas P.',
  'Miguel Â',
  'Daniel R.',
];

// Lista fictícia de conhecimento entre monitores e alunos
const conhecimentoMonitores = {
  'Lorenna': ['Mario Mattos de Carvalho Junior'],
  'Stefano': ['Mario Mattos de Carvalho Junior'],
  'Anielly M.': ['Maria Luiza Pinheiro Ferreira'],
  'Leonardo de B.': ['Anna Cristina Ferreira Alves'],
};

const DinamicaOne = () => {
  const [groups, setGroups] = useState([
    { id: 1, alunos: [], monitores: [], selectedAluno: '', selectedMonitor: '' },
  ]);

  const [availableAlunos, setAvailableAlunos] = useState([...alunos]);

  const addGroup = () => {
    setGroups([...groups, { id: groups.length + 1, alunos: [], monitores: [], selectedAluno: '', selectedMonitor: '' }]);
  };

  const handleAlunoChange = (groupId, event) => {
    const selectedAluno = event.target.value;
    if (isAlunoSelected(selectedAluno)) {
      alert(`O Aluno ${selectedAluno} já está em outro grupo.`);
      return;
    }
    if (selectedAluno && !isAlunoSelected(selectedAluno)) {
      setGroups((prevGroups) =>
        prevGroups.map((group) =>
          group.id === groupId
            ? { ...group, alunos: [...group.alunos, selectedAluno], selectedAluno: selectedAluno }
            : group
        )
      );
      setAvailableAlunos((prevAlunos) => prevAlunos.filter((aluno) => aluno !== selectedAluno));
      // Reset selectedAluno after selection
      event.target.value = ''; // or set selectedAluno state to ''
    }
  };

  const handleMonitorChange = (groupId, event) => {
    const selectedMonitor = event.target.value;

    // Verifica se o monitor já está em algum outro grupo
    if (isMonitorSelected(selectedMonitor)) {
      alert(`O monitor ${selectedMonitor} já está em outro grupo.`);
      return;
    }

    // Verifica se o monitor já conhece algum aluno do grupo
    if (selectedMonitor && !conheceAluno(selectedMonitor, groups.find((group) => group.id === groupId).alunos)) {
      setGroups((prevGroups) =>
        prevGroups.map((group) =>
          group.id === groupId
            ? { ...group, monitores: [...group.monitores, selectedMonitor], selectedMonitor: selectedMonitor }
            : group
        )
      );
      // Reset selectedMonitor after selection
      event.target.value = ''; // or set selectedMonitor state to ''
    }
  };

  const isMonitorSelected = (monitor) => {
    return groups.some((group) => group.monitores.includes(monitor));
  };

  const isAlunoSelected = (aluno) => {
    return groups.some((group) => group.alunos.includes(aluno));
  };

  const conheceAluno = (monitor, alunosGrupo) => {
    const conhecidos = conhecimentoMonitores[monitor] || [];
    return alunosGrupo.some((aluno) => conhecidos.includes(aluno));
  };

  const removeMonitor = (groupId, monitor) => {
    setGroups((prevGroups) =>
      prevGroups.map((group) =>
        group.id === groupId
          ? {
              ...group,
              monitores: group.monitores.filter((m) => m !== monitor),
            }
          : group
      )
    );
  };

  const removeAluno = (groupId, aluno) => {
    setGroups((prevGroups) =>
      prevGroups.map((group) =>
        group.id === groupId
          ? {
              ...group,
              alunos: group.alunos.filter((a) => a !== aluno),
              selectedAluno: '', // Reset selectedAluno when removing
            }
          : group
      )
    );
    setAvailableAlunos((prevAlunos) => [...prevAlunos, aluno]);
  };

  return (
    <Container>
      <AddGroupButton onClick={addGroup}>Adicionar Grupo</AddGroupButton>
      <ListContainer>
        {groups.map((group) => (
          <GroupContainer key={group.id}>
            <MonitorContainer>
              <Containerlog>
                <Dropdown
                  value={group.selectedMonitor}
                  onChange={(event) => handleMonitorChange(group.id, event)}
                >
                  <option value="">Selecione um monitor</option>
                  {monitores.map((monitor, index) => (
                    <option key={index} value={monitor}>
                      {monitor}
                    </option>
                  ))}
                </Dropdown>
                {group.monitores.length > 0 && (
                  <ul>
                    {group.monitores.map((monitor, index) => (
                      <li key={index} style={{color:'white'}}>
                        {monitor}{' '}
                        <RemoveButton onClick={() => removeMonitor(group.id, monitor)}>
                          <RemoveItem>X</RemoveItem>
                        </RemoveButton>
                      </li>
                    ))}
                  </ul>
                )}
              </Containerlog>
              <Containerlog>
                <AlunoDropdown
                  value={group.selectedAluno}
                  onChange={(e) => handleAlunoChange(group.id, e)}
                >
                  <option value="">Selecione um aluno</option>
                  {availableAlunos.map((aluno, index) => (
                    <option key={index} value={aluno}>
                      {aluno}
                    </option>
                  ))}
                </AlunoDropdown>
                {group.alunos.length > 0 && (
                  <div>
                    {group.alunos.map((aluno, index) => (
                      <SelectedItem key={index}>
                        {aluno}{' '}
                        <RemoveButton onClick={() => removeAluno(group.id, aluno)}>
                          <RemoveItem>X</RemoveItem>
                        </RemoveButton>
                      </SelectedItem>
                    ))}
                  </div>
                )}
              </Containerlog>
            </MonitorContainer>
          </GroupContainer>
        ))}
      </ListContainer>
    </Container>
  );
};

export default DinamicaOne;
