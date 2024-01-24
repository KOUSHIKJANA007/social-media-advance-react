import { Form, redirect } from "react-router-dom";

const CreatePost = () => {
  

  const handleSubmit=(event)=>{
    
  }
  return (
    <>
      <Form method="POST" className='create-post'>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">User Id</label>
          <input name="userId" type="text" placeholder='Enter your user id' className="form-control" id="userId" aria-describedby="userIdHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Post Title</label>
          <input name="title" type="text" placeholder='Give a title for your post...' className="form-control" id="title" aria-describedby="titleHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">Post Content</label>
          <textarea name="body" rows={4} type="text" placeholder='Give your post description' className="form-control" id="body" aria-describedby="bodyHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="rections" className="form-label">Reactions</label>
          <input name="reactions" type="text" placeholder='Give a reaction for your post...' className="form-control" id="rections" aria-describedby="rectionsHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">Tags</label>
          <input name="tags" type="text" placeholder='Give tags for your post with space ' className="form-control" id="tags" aria-describedby="tagsHelp" />
        </div>
        <button type="submit" className="btn btn-success">Post</button>
      </Form>
    </>
  )
}

export async function postDataAction(data){
  const formData= await data.request.formData();
  const postData=Object.fromEntries(formData);
  postData.tags=postData.tags.split(" ");

  fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData),
  })
    .then(res => res.json())
    .then((post) => {
      addPost(post);
    }
    );
    return redirect("/");
}

export default CreatePost