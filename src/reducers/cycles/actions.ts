import { Cycle } from './reducer.ts'

export enum CycleActionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
  FINISH_CURRENT_CYCLE = 'FINISH_CURRENT_CYCLE',
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: CycleActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function interruptCurrentCycleAction() {
  return {
    type: CycleActionTypes.INTERRUPT_CURRENT_CYCLE,
  }
}

export function finishCurrentCycleAction() {
  return {
    type: CycleActionTypes.FINISH_CURRENT_CYCLE,
  }
}
