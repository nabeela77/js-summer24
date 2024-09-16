
function Form() {
    function handleSubmit(e) { // e is synthetic event
      e.preventDefault(); //event handler
      console.log('You clicked submit.');
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
    );
  }

export default Form;

// event is when something is triggrered 
// event handleres should be used for default events to happen
