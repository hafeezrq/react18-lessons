import { useState } from 'react';
import { GoTrashcan } from 'react-icons/go';
import { MdEdit } from 'react-icons/md';

import BookEdit from './BookEdit';

function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    onEdit(id, newTitle);
  };

  let content = (
    <h3 className='tex-lg font-semibold text-center'>{book.title}</h3>
  );
  if (showEdit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }
  return (
    <div className='border-slate-300 shadow-lg border-2 p-2 rounded-md'>
      <div className='flex flex-row flex-wrap justify-end mb-2 '>
        <button className='self-center mr-2' onClick={handleEditClick}>
          <MdEdit />
        </button>
        <button className='self-center' onClick={handleDeleteClick}>
          <GoTrashcan />
        </button>
      </div>
      <img src={`https://picsum.photos/seed/${book.id}/150/150`} alt='A Book' />
      {content}
    </div>
  );
}

export default BookShow;
