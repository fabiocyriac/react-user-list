
export const activeUserReducer = (state=null, action) => {
switch(action.type){
  case "UPDATE-USER":
    return action.payload;
    break;
}
 return state;

}