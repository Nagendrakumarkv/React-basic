function Model(props){
    function cancelModelHandler(){
      props.onCancel()
    }
    function confirmModelHandler(){
      props.onConfirm()
    }
    return(
        <div className="modal">
            <p>Are you sure?</p>
            <button className="btn btn--alt" onClick={cancelModelHandler}>Cancel</button>
            <button className="btn" onClick={confirmModelHandler}>Delete</button>
        </div>
    )
}

export default Model;