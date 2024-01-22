import { createContext, useReducer } from "react";


 export const PostList = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { }
});

const postListReducer = (currPostList, action) => {
    let newPostList=currPostList;
    if(action.type==="DELETE_POST"){
        newPostList=currPostList.filter((post)=>post.id !== action.payload.postId)
    } else if(action.type==="ADD_POST")
    {
        newPostList=[action.payload,...currPostList]
    }
    return newPostList;
}

const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);
    const addPost = (userId,postTitle,postBody,reactions,tags) => {
        dispatchPostList({
            type:"ADD_POST",
            payload:{
                id:Date.now(),
                title:postTitle,
                body:postBody,
                reactions:reactions,
                userId:userId,
                tags:tags
            }
        })
    }
    const deletePost = (postId) => {
        dispatchPostList({
            type:"DELETE_POST",
            payload:
            {
                postId,
            }
        })
    }
    return <PostList.Provider value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost
    }}>{children}</PostList.Provider>
}

const DEFAULT_POST_LIST = [
    {
        id: '1',
        title: 'going to mumbai',
        body: 'Hi friends i am going to mumbai',
        reactions: '1',
        userId: 'user-9',
        tags: ["mumbai", "vacation", "enjoy"]
    },
    {
        id: '2',
        title: 'pass ho bhai',
        body: 'Hi friends i am passed',
        reactions: '12',
        userId: 'user-12',
        tags: ["passed", "exam", "enjoy"]
    }
]
export default PostListProvider;