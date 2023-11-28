import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  .mainImgContainer {
    margin: 2rem 0 0 0;
    text-align: center;
  }
  .drinksTitle {
    text-align: center;
    margin-bottom: 1rem;
  }
  .drinksContainer {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    text-align: center;
    margin-left: 3rem;
  }
  .singleDrinkContainer {
    width: 100%;
    max-width: 70vw;
    color: #fff;
  }
  .singleDrinkContainer:hover {
    color: #e84d00;
  }
  .singleDrinkContainer p {
    /* font-size: 0.8rem; */
  }
  .drinkImg {
    width: 15rem;
    max-width: 13rem;
    margin-bottom: 1rem;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0 auto;

    .mainImgContainer {
      text-align: center;
      margin: 0 auto;
    }

    .mainImgContainer img {
      width: 70%;
      margin: 0 auto;
    }

    .drinksContainer {
      flex-direction: column;
      flex-wrap: nowrap;
      gap: 2rem;
      text-align: center;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
    }

    .drinksTitle h4 {
      font-size: 1.2rem;
      font-weight: 500;
    }

    .singleDrinkContainer {
      margin: 0;
      padding: 0;
    }

    .singleDrinkContainer img {
      width: 100%;
    }

    h4 {
      font-size: 1.5rem;
      font-weight: 500;
      margin-bottom: 2rem;
    }
  }
`;

export default Wrapper;
