import '../App.css'

function Modal({ onClose, etat }) {
  return (
    <>
      {etat ? (
        <div id="confirmation" className="modal">
        <div className='messageModal'>
            <p>Employee Created!</p><br/>
            <button onClick={onClose}>Fermer le modal</button>
        </div>
      </div>
      ) : (
        <div id="confirmation" className="modal">
        <div className='messageModal'>
            <p>Erreur dans le formulaire</p><br/>
            <button onClick={onClose}>Fermer le modal</button>
        </div>
      </div>
      )}
    </>
  )
}
export default Modal
