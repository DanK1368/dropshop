import styled from "styled-components";

// styles
const StyledForm = styled.div`
  color: white;
  background: #20212c;
  width: 480px;
  height: 675px;
  padding: 2rem;
  border-radius: 5px;

  form {
    background: white;
    width: 100%;
    height: 100%;
  }
`;

const AddItem = () => {
  return (
    <StyledForm>
      <form>
        <div>H1</div>
      </form>
    </StyledForm>
  );
};
export default AddItem;
