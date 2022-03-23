import { RouteComponentProps, useNavigate } from "@reach/router";

export default function Checkout(_: RouteComponentProps): JSX.Element {
  const navigate = useNavigate();

  const goBack = (): void => {
    navigate("/inventory");
  };

  return (
    <>
      <h1>Hurray! This is Checkout page!</h1>
      <div className="wrapper">
        <iframe
          title="Checkout kitty"
          src="https://giphy.com/embed/aNqEFrYVnsS52"
          width="480"
          height="270"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
        <button type="button" onClick={goBack}>
          Go back
        </button>
      </div>
    </>
  );
}
