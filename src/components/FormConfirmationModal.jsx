const FormConfirmationModal = ({ isOpen, onClose, message, message_2 }) => {
    if (!isOpen) return null;
  
    return (
      <div style={{fontSize : '1rem', fontFamily: 'FormaDJRDeck'}} className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
        <div className="bg-white p-4 rounded-md shadow-lg ">
        <img className="mb-4 block mx-auto" width="90" height="90" src="/images/svgs/LaboratoryGuy.svg"/>
          <div className="leading-none">{message}</div>
          <div>{message_2}</div>
          <button onClick={onClose} className="block mx-auto mt-4 px-4 py-2 bg-stone-500 text-white rounded">Close</button>
        </div>
      </div>
    );
  };

  export default FormConfirmationModal;
