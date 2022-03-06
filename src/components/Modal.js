function Modal() {
  return (
    <div className="modal">
      <p>Are you sure? Todo will be permanently deleted</p>
      <button className="btl --alt">No, Cancel</button>
      <button className="btl">Yes, Delete It!</button>
    </div>
  );
}

export default Modal;
