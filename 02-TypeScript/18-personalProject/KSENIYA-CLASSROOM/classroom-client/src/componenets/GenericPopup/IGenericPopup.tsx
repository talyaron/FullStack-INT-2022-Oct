export interface IGenericPopup {
    objectsToDisplay: any[]
    textDisplayHandler: (obj:any) => string
    leftIcon: string
    rightIcon: string
    isPopupOpen: boolean
    setIsPopupOpen: React.Dispatch<React.SetStateAction<boolean>>
    rightIconFunc: any
}

//need to add a right icon function