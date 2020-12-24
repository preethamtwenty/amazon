export const initialState = {
    basket: [],
    user: null
  };


export const getBasketTotal = (basket) => 
  basket.reduce(( previousScore, item, index) =>item.price + previousScore ,0);

 const scores = [98,45,33,47,100,80];
 export const totalScores = scores.reduce(
  (previousScore, currentScore, index)=>previousScore+currentScore, 
  100);
  


  
const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "ADD_TO_BASKET":
        return {
          ...state,
          basket: [...state.basket, action.item],
        };
      case 'REMOVE_FROM_BASKET':
        const index=state.basket.findIndex(
          (basketItem)=>basketItem.id===action.id
          )
         
        let newBasket=[...state.basket];
        if(index>=0){
          newBasket.splice(index,1);

        }
        else{
          console.warn(
            `can't remove product ${action.id}`
          )
        }
        return{
          ...state,
          //basket:state.basket.filter(item=>item.id!==action.id)
          basket:newBasket
         
        };
      case 'SET_USER':
        return{
          ...state,
          user:action.user
        }
     
      

      default:
        return state;
    }
  };
  
  export default reducer;