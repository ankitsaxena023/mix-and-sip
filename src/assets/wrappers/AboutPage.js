import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    line-height: 2;
    color: #fff;
    margin-top: 2rem;
    font-size: 1.2rem;
  }
  img {
    width: 20rem;
    padding: 2rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    img {
      width: 100%;
      max-width: 25rem;
    }
  }
`;

export default Wrapper;
