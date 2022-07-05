import React from 'react';

import styled from './CourseGoalItem.module.css';

const CourseGoalItem = props => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <li className={styled['goal-item']} onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default CourseGoalItem;
