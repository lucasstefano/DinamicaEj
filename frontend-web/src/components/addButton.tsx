import styled from "styled-components";

export const Button = styled.button`
    width: 300px;
    height: 20px;
    background-color: blue;
`

export default function AddButton(){
    const addMiniCourse = () => {
        const newCourse = {
          id: 1,
          title: 'New MiniCourse',
          subtitle: 'example@example.com',
          status: 'novo'
        };
        console.log(newCourse);
       
        
      };
    return(
        <Button onClick={addMiniCourse}>Add MiniCourse</Button>
    );
}