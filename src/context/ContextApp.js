import {createContext} from "react";

export const ContextApp = createContext({
    tabValue: 0,
    handleTabChange: () => {},

    loading: false,
    setLoading: () => {},

    drawerOpen: false,
    setDrawerOpen: () => {},
})