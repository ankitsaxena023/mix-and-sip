import styled from "styled-components";
const Wrapper = styled.div`
  background: #2e0015;
  box-shadow: var(--shadow-2);
  transition: var(--transition);
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  border-radius: var(--borderRadius);
  cursor: pointer;
  :hover {
    box-shadow: var(--shadow-4);
  }

  img {
    width: 15rem;
    height: 16rem;
    border-top-left-radius: var(--borderRadius);
    border-top-right-radius: var(--borderRadius);
  }

  .footer {
    padding: 1.5rem;
    text-align: center;
    color: #fff;
  }

  h4 {
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 1rem;
  }

  .footer:hover {
    /* box-shadow: var(--shadow-4); */
    color: #e84d00;
  }
`;

export default Wrapper;
