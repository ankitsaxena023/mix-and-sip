import Wrapper from "../assets/wrappers/AboutPage";

const About = () => {
  return (
    <Wrapper>
      <div>
        <h3>About Us</h3>
        <p>
          Introducing "Mix~And~Sip," the ultimate party sidekick app that
          fetches cocktails from the hilarious Cocktails DB API. With a flick of
          your finger, you'll unlock a treasure trove of enchanting drink
          recipes that'll make your taste buds dance and your friends jump with
          joy. Get ready to shake up your mixology game, one fantastical
          mocktail at a time, and let the laughter and giggles flow!
        </p>
      </div>
      <div>
        <img
          src={
            "https://images.pexels.com/photos/774455/pexels-photo-774455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt="Mix~And~Sip"
        />
      </div>
    </Wrapper>
  );
};

export default About;
