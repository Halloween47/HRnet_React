import '../App.css'
import '../css/modal.css'
import checkImage from '../assets/check.png'
import crossImage from '../assets/remove.png'

function Modal({ onClose, etat }) {
  return (
    <>
      {etat ? (
        <div id="confirmation" className="modal">
          <div className="messageModal">
            <img src={checkImage} alt="check" />
            <p>Employé ajouté avec succès</p>
            <br />
            <button onClick={onClose}>Fermer le modal</button>
          </div>
        </div>
      ) : (
        <div id="confirmation" className="modal">
          <div className="messageModal">
            <img src={crossImage} alt="check" />
            <p>Erreur dans le formulaire.</p>
            <p>Tous les champs doivent être renseignés.</p>
            <button onClick={onClose}>Fermer</button>
          </div>
        </div>
      )}
    </>
  )
}
export default Modal
