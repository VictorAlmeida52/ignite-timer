import {
  AddNewCycleAction,
  Cycle,
  FinishCurrentCycleAction,
  InterruptCurrentCycleAction,
} from './reducer.ts'

export enum CycleActionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
  FINISH_CURRENT_CYCLE = 'FINISH_CURRENT_CYCLE',
}

export function addNewCycleAction(newCycle: Cycle): AddNewCycleAction {
  return {
    type: CycleActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function interruptCurrentCycleAction(): InterruptCurrentCycleAction {
  return {
    type: CycleActionTypes.INTERRUPT_CURRENT_CYCLE,
  }
}

export function finishCurrentCycleAction(): FinishCurrentCycleAction {
  return {
    type: CycleActionTypes.FINISH_CURRENT_CYCLE,
  }
}
