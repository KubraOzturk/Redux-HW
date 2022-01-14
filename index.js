import store from "./reduxStore";
import {increment,decrement} from "./reduxStore/counter";
import {addTask,removeTask} from "./reduxStore/tasks";
import {
    addPost,addUpVote,removePost,updatePost,addComment,removeComment,removeUserComment} from "./reduxStore/posts";

//STORE

// const store=createStore(reducer);
 store.subscribe(()=>console.log(store.getState()));

//store.dispatch(addTask(1,"Kubra"));
//store.dispatch(addTask(2,"Ozturk"));

// store.dispatch(addTask(3,"Oztudkfdmbvk"));
// store.dispatch(removeTask(2));
store.dispatch(addPost(1,"DEneme"));
store.dispatch(addPost(2,"Silinecek"));

//store.dispatch(removePost(2));
//store.dispatch(updatePost(1,"Güncellendi"));
store.dispatch(addPost(3,"Comemntli"));
store.dispatch(addComment(3,3,"yorum"));
store.dispatch(addComment(3,2,"yorum 2"));
//store.dispatch(removeComment(3));
// store.dispatch(removeComment(1));
//store.dispatch(removeUserComment(2));
// store.dispatch(addDownVote(1));
//store.dispatch(removeUserComment(3));

// store.dispatch(addUpVote(1));
// console.log(store.getState().posts[0].votes);
console.log(store.getState().posts[2].comments);
