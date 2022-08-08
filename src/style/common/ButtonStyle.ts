import styled from "styled-components";

export const PageBtn = styled.div`
  position: relative;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px auto;
  width: 1500px;
  .btn {
    width: 100px;
    border: none;
    padding: 10px 0;
    border-radius: 8px;
  }
  .next {
    background-color: aqua;
  }
  .previous {
    background-color: orange;
  }
  .page {
    margin: 0 100px;
    width: 500px;
    text-align: center;
  }
`;
