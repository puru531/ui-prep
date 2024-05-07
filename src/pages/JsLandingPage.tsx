import Topics from "./Topics";

const JsLandingPage = () => {
  return (
    <>
      <div className="h2-bold my-4">
        Select a <span className="text-yellow-500">topic </span> to start with:
      </div>
      <div>
        <Topics />
      </div>
    </>
  );
};

export default JsLandingPage;
