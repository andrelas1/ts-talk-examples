export function myApp() {
  const state = {
    data: [],
    foo: "",
  };

  // REDUX ACTIONS

  type FirstAction = {
    type: "first";
    payload: {
      data: number[];
    };
  };

  type SecondAction = {
    type: "second";
    payload: string;
  };

  const firstAction = {
    type: "first",
    payload: {
      data: [1, 2, 3, 4],
    },
  };

  const secondAction = {
    type: "second",
    payload: "bar",
  };

  type MyActions = FirstAction | SecondAction;

  function reducer(action: MyActions) {
    switch (action.type) {
      case "first":
        return {
          ...state,
          data: [...action.payload.data],
        };
        break;
      case "second":
        return {
          ...state,
          foo: action.payload,
        };
      default:
        return { ...state };
    }
  }
}
