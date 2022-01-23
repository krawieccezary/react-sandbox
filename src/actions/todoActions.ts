export enum todoActions {
  ADD_TASK = 'ADD_TASK',
  EDIT_TASK = 'EDIT_TASK',
  REMOVE_TASK = 'REMOVE_TASK' 
}


export const addTask = (task: string) => ({
  type: todoActions.ADD_TASK,
  payload: {
    id: new Date().getTime(),
    task
  }
});

export const editTask = (id: number, task: string) => ({
  type: todoActions.EDIT_TASK,
  payload: {
    id,
    task
  }
});

export const removeTask = (id: number) => ({
  type: todoActions.REMOVE_TASK,
  payload: {
    id
  }
});