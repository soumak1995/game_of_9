export const initialState={
    loading:true,
    players:[],
    selectedPlayer:[],
    error:null
}
const Reducer=(state,action)=>{
console.log(action)
switch(action.type){

  case 'FATCH_SUCCESS':
  return {
    loading:false,
    players:action.payload,
    selectedPlayer:[],
    error:''
  }
  case 'FETCH_ERROR':
  return {
    loading:false,
    players:[],
    selectedPlayer:[],
    error:'something went wrong'
  }
  case 'ADD_PLAYER':
    return {
     ...state,
      selectedPlayer:action.payload
    }
   
  default:
  return state;
}
}
export default Reducer