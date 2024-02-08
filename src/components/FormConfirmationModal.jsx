const FormConfirmationModal = ({ isOpen, onClose, message, message_2 }) => {
    if (!isOpen) return null;
  
    return (
      <div style={{fontSize : '1rem', fontFamily: 'WarblerDeck'}} className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
        <div className="bg-white p-4 rounded-md shadow-2xl border-2 border-gray-500 aspect-w-16 aspect-h-9">
        <img className="mb-4 mx-auto w-1/2 object-cover" src="/images/svgs/LaboratoryGuy.svg"/>
          <div className="leading-none text-center">{message}</div>
          <div className="leading-none text-center">{message_2}</div>
          <button onClick={onClose} className="block mx-auto mt-4 px-4 py-2 bg-stone-500 text-white rounded shadow-lg">Close</button>
        </div>
      </div>
    );
  };

  export default FormConfirmationModal;
