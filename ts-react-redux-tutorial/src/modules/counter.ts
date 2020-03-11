import { createStandardAction } from "typesafe-actions/dist/deprecated/create-standard-action";
import { ActionType, createReducer } from "typesafe-actions";

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
const INCREASE_BY = "counter/INCREASE_BY";

export const increase = createStandardAction(INCREASE)();

export const decrease = createStandardAction(DECREASE)();

export const increaseBy = createStandardAction(INCREASE_BY)<number>();

const actions = { increase, decrease, increaseBy };
type CounterAction = ActionType<typeof actions>;

type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0
};

// const counter = createReducer<CounterState, CounterAction>(initialState, {
//   [INCREASE]: state => ({ count: state.count + 1 }),
//   [DECREASE]: state => ({ count: state.count - 1 }),
//   [INCREASE_BY]: (state, action) => ({ count: state.count + action.payload })
// });

// 메서드 체이닝 방식
const counter = createReducer<CounterState, CounterAction>(initialState)
  .handleAction(INCREASE, state => ({ count: state.count + 1 }))
  .handleAction(DECREASE, state => ({ count: state.count - 1 }))
  .handleAction(INCREASE_BY, (state, action) => ({
    count: state.count + action.payload
  }));
export default counter;
