const InputPwd = ({ Label, name }) => {
  return (
    <div className="mb-2">
      <label className="form-label">
        {Label}
      </label>
      <div className="input-group input-group-merge">
        <input
          type="password"
          id={name}
          className="form-control"
          placeholder={`Enter your ${Label}`}
        />

        <div className="input-group-text" data-password="false">
          <span className="password-eye"></span>
        </div>
      </div>
    </div>
  );
};

export default InputPwd;
