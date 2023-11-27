import React from 'react'
import { Link, useRouteError } from 'react-router-dom';
import img from '../assets/not-found.svg';
import Wrapper from '../assets/wrappers/ErrorPage';

const Error = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <Wrapper>
        <img src={img} alt="Error" />
        <h3>Ohh!</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to="/">Back Home</Link>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <div>
        <h3>Something went wrong!</h3>
      </div>
    </Wrapper>
  )
}

export default Error