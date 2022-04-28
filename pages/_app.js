import '../styles/globals.css'
import './calendar.css'
import {invoiceList} from '../layouts/Arrays'
import { createContext, useEffect, useReducer } from 'react'

export const InvoiceContext = createContext()

const initialState = {
  items: invoiceList
}

const reducer = (state, action) => {
  switch (action.type){
    case 'star' : 
      
      state.items[action.index].stared =true
      return {
        ...state,
      }

    case 'unstar' : 
      
      state.items[action.index].stared =false
      console.log('dd',state.items[action.index].stared)
      return {
        ...state,
      }

    case 'deleteItem' : 
      state.items =  ([...state.items.filter(i => i.invoiceId !== action.index)])
      return state

    case 'deleteItems' : 
      console.log(action.checkedItems)
      action.checkedItems.forEach(checkedItem => {
            state.items.forEach(item => {
              if (item.invoiceId === checkedItem) {
                state.items =  ([...state.items.filter(i => i != item)])
                console.log(state.items)
              }

            })
      })
      return state 


    default : return state
  }
}



function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    console.log('ss')
  },[])
  const [list, dispatch] = useReducer ( reducer , initialState)  
  return (
    <InvoiceContext.Provider 
      value = {{invoiceList: list, invoiceDispatch: dispatch}}
    >
        <Component {...pageProps} />

    </InvoiceContext.Provider>
  )
}

export default MyApp

