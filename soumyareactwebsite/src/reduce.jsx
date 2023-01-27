 const reduce = (state,action) =>{
    if(action.type === "HOME_UPDATE") {
     return{
        ...state,
        name: action.payload.name,
        image:action.payload.image,
        profile:action.payload.profile,
     };
    } 

    if(action.type === "ABOUT_UPDATE") {
        return{
           ...state,
           name: action.payload.name,
           image:action.payload.image,
           Bio: action.payload.Bio,
        };
       }    
    return state;
    
};

export default reduce;