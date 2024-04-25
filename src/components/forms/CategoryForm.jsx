const  CategoryForm = ({
    value,
    setValue,
    handleSubmit,
    buttonText = "Submit",
    handleDelete,
    placeholder,
    loading
  }) => {
    return (
      <div className="p-3">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control p-3"
            placeholder={placeholder}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <div className="d-flex mt-4">
          {loading ? (
                <>
                  <button
                    className="spinner-border spinner-border-sm"
                    aria-hidden="true"
                  >
                    
                  </button>
                  <span role="status">Loading...</span>
                </>
              ) : (
                <button className="btn btn-primary mt-3">{buttonText}</button>
              )}
            {/* <button className="btn btn-primary mt-3">{buttonText}</button> */}
            {handleDelete && (
              <button onClick={handleDelete} className="btn btn-danger mt-3">
                Delete
              </button>
            )}
          </div>
        </form>
      </div>
    );
  }

  export default CategoryForm
  