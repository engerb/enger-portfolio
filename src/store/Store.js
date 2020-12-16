import create from 'zustand'

const useStore = create((set, get) => ({
    homePageScrollY: 0,
    setHomePageScrollY: ( posY ) => {
        set({homePageScrollY: posY})
    },
    copyModal: {
        text: '',
        open: false,
        closing: false,
        closingTimeout: null,
    },
    setCopyModal: ( text ) => {
        clearTimeout( get().copyModal.closingTimeout )
        set({
            copyModal: {
                text: text,
                open: true,
                closing: false,
                closingTimeout: null,
            }
        })
    },
    closeCopyModal: (trans) => {
        if (get().copyModal.closing || !trans) {
            clearTimeout( get().copyModal.closingTimeout )
            set({
                copyModal: {
                    text: '',
                    open: false,
                    closing: false,
                    closingTimeout: null,
                }
            })
        } else {
            set({
                copyModal: {
                    text: get().copyModal.text,
                    open: true,
                    closing: true,
                    closingTimeout: setTimeout(() => {
                        set({
                            copyModal: {
                                text: '',
                                open: false,
                                closing: false,
                                closingTimeout: null,
                            }
                        })
                    }, 300),
                }
            })
        }
    }
}))

export default useStore