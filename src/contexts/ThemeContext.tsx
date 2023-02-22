import { createContext, useContext, useReducer } from "react";

interface State {
  theme: string;
}

interface Actions {
  type: ThemeActions;
  payload: any;
}

interface Provider {
    children: JSX.Element
}

interface ContextType {
    state: State,
    dispatch: (action: Actions) => void
}

const initialData = {
  theme: "dark",
};

const ThemeContext = createContext<ContextType | undefined>(undefined);

export enum ThemeActions {
  setTheme,
}

export const reducer = (state: State, action: Actions) => {
  switch (action.type) {
    case ThemeActions.setTheme:
      return { ...state, theme: action.payload };
  }
};

export const ThemeProvider = ({children} : Provider) => {
    const [state, dispatch] = useReducer(reducer, initialData)
    const value = {state, dispatch}

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useForm = () => {
    const context = useContext(ThemeContext)

    if (context === undefined) {
        throw new Error('useForm needs to be used inside the ThemeProvider')
    }

    return context
}