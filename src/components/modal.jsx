import '../App.css'

function Modal({ onClose }) {
  console.log('bonjour')
  return (
    <>
    <div id="confirmation" className="modal">
        <div className='messageModal'>
            <p>Employee Created!</p><br/>
            <button onClick={onClose}>Fermer le modal</button>
        </div>
      </div>
    </>
  )
}
export default Modal
