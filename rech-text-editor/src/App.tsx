const App = () => {
  return (
    <>
      <h1>React TinyMCE Image Upload Example</h1>
      <form
        id="signup-form"
        className="form-horizontal"
        method="POST"
      >
        <div className="form-group">
          <label className="control-label required">First Name</label>
          <input
            type="text"
            className="form-control required"
          />
        </div>
        <div className="form-group">
          <label className="control-label required">Last Name</label>
          <input
            type="text"
            className="form-control required"
          />
        </div>
        <div className="form-group">
          <label className="control-label required">Email</label>
          <input
            type="text"
            className="form-control required"
          />
        </div>
        <div className="form-group">
          <label className="control-label required">Password</label>
          <input
            type="password"
            className="form-control required"
          />
        </div>
        <div className="form-group">
          <label className="control-label required">Confirm Password</label>
          <input
            type="password"
            className="form-control required"
          />
        </div>
        <div
          className="g-recaptcha"
          data-sitekey="6Ld8mucoAAAAAFVu9xwSMekJ_7WNBgwP7IKGSVoG"
        ></div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default App;
