import styled from "styled-components";

const Wrapper = styled.div`
  header {
    text-align: center;
    margin-bottom: 3rem;
    .btn {
      margin-bottom: 1rem;
    }
  }
  .img {
    border-radius: var(--borderRadius);
  }
  .drink-info {
    padding-top: 2rem;
    text-align: center;
  }
  h2 {
    margin-bottom: 1.5rem;
  }
  h3 {
    text-align: center;
  }
  p {
    line-height: 2;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
  .drink-data {
    margin-right: 0.5rem;
    background: var(--primary-300);
    padding: 0.25rem 0.5rem;
    border-radius: var(--borderRadius);
    color: var(--primary-700);
    letter-spacing: var(--letterSpacing);
  }

  .img-container {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .img-container:hover {
    cursor: pointer;
  }

  .singleImgDiv {
    padding: 2rem 3rem;
    display: flex;
    flex-direction: column;
    color: #fff;
  }

  .ing-img {
    width: 12rem;
  }

  h3 {
    margin-top: 1.5rem;
  }

  h4 {
    padding: 0.5rem;
    font-size: 1.2rem;
  }

  @media (min-width: 992px) {
    .drink {
      display: grid;
      grid-template-columns: 2fr 3fr;
      gap: 3rem;
      align-items: center;
    }
    .drink-info {
      padding-top: 0;
    }
  }
`;

export default Wrapper;
