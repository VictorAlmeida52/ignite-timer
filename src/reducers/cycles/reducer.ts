import { CycleActionTypes } from './actions.ts'
import { produce } from 'immer'

export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CycleState {
  cycles: Cycle[]
  activeCycleId: string | null
}

type CycleActionType = {
  type: string
} & (
  | {
      type: CycleActionTypes.ADD_NEW_CYCLE
      payload: {
        newCycle: Cycle
      }
    }
  | {
      type:
        | CycleActionTypes.INTERRUPT_CURRENT_CYCLE
        | CycleActionTypes.FINISH_CURRENT_CYCLE
    }
)

export function cyclesReducer(state: CycleState, action: CycleActionType) {
  switch (action.type) {
    case CycleActionTypes.ADD_NEW_CYCLE:
      return produce(state, (draft) => {
        draft.cycles.push(action.payload.newCycle)
        draft.activeCycleId = action.payload.newCycle.id
      })

    case CycleActionTypes.INTERRUPT_CURRENT_CYCLE:
      return produce(state, (draft) => {
        const currentCycleIndex = state.cycles.findIndex(
          (cycle) => cycle.id === state.activeCycleId,
        )
        if (currentCycleIndex < 0) return state
        draft.cycles[currentCycleIndex].interruptedDate = new Date()
        draft.activeCycleId = null
      })

    case CycleActionTypes.FINISH_CURRENT_CYCLE:
      return produce(state, (draft) => {
        const currentCycleIndex = state.cycles.findIndex(
          (cycle) => cycle.id === state.activeCycleId,
        )
        if (currentCycleIndex < 0) return state
        draft.cycles[currentCycleIndex].finishedDate = new Date()
        draft.activeCycleId = null
      })

    default:
      return state
  }
}
