const ListReducer = (lists = [], action) => {
  switch (action.type) {
    case "CREATE_LIST": {
      const list = {};
      list.id = action.payload.id;
      list.title = action.payload.title;
      list.tasks = [];
      list.boardId = action.payload.boardId;
      return [...lists, list];
    }
    case "DELETE_LIST": {
      return lists.filter((item) => item.id !== action.payload.id);
    }
    case "UPDATE_LIST": {
      const list = lists.find((item) => item.id === action.payload.id);
      list.title = action.payload.title || list.title;
      return [...lists];
    }
    case "ADD_TASK_ID_TO_LIST": {
      const list = lists.find((item) => item.id === action.payload.id);
      list.tasks.push(action.payload.taskId);
      return [...lists];
    }
    case "REMOVE_TASK_ID_FROM_LIST": {
      const list = lists.find((item) => item.id === action.payload.id);
      list.tasks = list.tasks.filter((item) => item !== action.payload.taskId);
      return [...lists];
    }
    case "CHANGE_BOARD_ID_FROM_A_LIST": {
      const list = lists.find((item) => item.id === action.payload.id);
      list.boardId = action.payload.boardId;
      return [...lists];
    }
    default: {
      return lists;
    }
  }
};

export default ListReducer;
