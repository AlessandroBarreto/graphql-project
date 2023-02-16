export const Spinner = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="spinner-border text-danger-emphasis" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
