export interface ISingleSidebarOption {
    title: string,
    path: string,
    setIsSidebarOpen:  React.Dispatch<React.SetStateAction<boolean>>
}