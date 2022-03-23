import { RouteComponentProps, useNavigate } from "@reach/router";

export default function HighCare(_: RouteComponentProps): JSX.Element {
  const navigate = useNavigate();

  const goBack = (): void => {
    navigate("/inventory");
  };

  return (
    <>
      <h1>This is HighCare page!</h1>
      <div className="wrapper">
        <iframe
          title="HighCare kitty"
          src="https://giphy.com/embed/VbnUQpnihPSIgIXuZv"
          width="384"
          height="480"
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
