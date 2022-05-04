import '../styles/globals.css'
import './calendar.css'
import {invoiceList} from '../layouts/Arrays'
import { createContext, useEffect, useReducer } from 'react'

export const InvoiceContext = createContext()
export const action_types ={
  STAR: 'star',
  UNSTAR: 'unstar',
  DELETE_INVOICE: 'delete invoice',
  DELETE_ITEM: 'delete item',
  UPDATE_INVOICE: 'update invoice'

}



const reducer = (state, action) => {
  switch (action.type){
    case action_types.STAR : 
      
      state.items[action.payload].stared =true
      return state

    case action_types.UNSTAR : 
      state.items[action.payload].stared = false
      return state

    case action_types.DELETE_INVOICE : 
      state.items =  ([...state.items.filter(i => i.invoiceId !== action.payload)])
      return state

    case action_types.UPDATE_INVOICE:
      state.items[action.payload.index] =  action.payload.newInvoice

      return state
    
    case action_types.DELETE_ITEM:
      console.log(state.items[action.payload.index].items)
      state.items[action.payload.index].items =  ([...state.items[action.payload.index].items.filter(i => i.id !== action.payload.itemId)])
            console.log(state.items[action.payload.index].items)

      return state


    default : return state
  }
}



function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    console.log('ss')
  },[])


  const initialState = {
    items: invoiceList
  }
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

