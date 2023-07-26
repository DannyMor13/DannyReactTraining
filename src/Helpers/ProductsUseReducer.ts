const initialState = {
  orderInProgress: false,
  orderFailed: false,
  isPurchaseCompleted: false,
  progress: 0,
};

type StateType = typeof initialState;

type ActionType =
  | { type: "START_ORDER" }
  | { type: "UPDATE_PROGRESS"; payload: number }
  | { type: "ORDER_COMPLETED" }
  | { type: "ORDER_FAILED" }
  | { type: "RESET" };

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "START_ORDER":
      return { ...state, orderInProgress: true };
    case "UPDATE_PROGRESS":
      return { ...state, progress: state.progress + action.payload };
    case "ORDER_COMPLETED":
      return { ...state, orderInProgress: false, isPurchaseCompleted: true };
    case "ORDER_FAILED":
      return { ...state, orderInProgress: false, orderFailed: true };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

export default reducer;
export { initialState };
