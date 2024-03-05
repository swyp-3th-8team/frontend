import { createContext, useContext, useState } from "react";

//context 생성
const MainPageContext = createContext();

//context 제공자
export const MainPageProvider = ({ children }) => {
  //전역 상태 관리
  const [isPanelEditing, setIsPanelEditing] = useState(false);
  const togglePanelEditing = () => {
    setIsPanelEditing((prev) => !prev);
  };

  //context 사용자 관리 훅
  const useMainPageContext = () => {
    const context = useContext(MainPageContext);
    if (!context) {
      throw new Error(
        "useMainPageContext must be used within a MainPageProvider"
      );
    }
    return context;
  };

  return (
    <MainPageContext.Provider
      value={{ isPanelEditing, togglePanelEditing, useMainPageContext }}
    >
      {children}
    </MainPageContext.Provider>
  );
};

export default MainPageContext;
