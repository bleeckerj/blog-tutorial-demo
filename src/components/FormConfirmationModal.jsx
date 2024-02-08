const FormConfirmationModal = ({ isOpen, onClose, message, message_2 }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
        <div className="bg-white p-4 rounded-md shadow-2xl border-2 border-gray-500 aspect-w-16 aspect-h-9">
        <img className="mb-8 mx-auto w-1/2 " src="/images/svgs/LaboratoryGuy.svg"/>
          <div className="leading-none text-center">{message}</div>
          <div className="leading-none text-center">{message_2}</div>
          <div className="leading-none text-center">You can also email me:</div>
          <div className="leading-none text-center"><a href="mailto:julian@nearfuturelaboratory.com">julian@nearfuturelaboratory.com</a></div>
          <button style={{fontSize : '1rem', fontFamily: 'FormaDJRDeck'}} onClick={onClose} className="block mx-auto mt-4 px-4 py-2 bg-stone-500 text-white rounded shadow-lg">Close</button>
        </div>
      </div>
    );
  };

  export default FormConfirmationModal;
