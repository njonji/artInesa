const blogsSpace = document.querySelector(".blog__ul")


//setup blog
const setupBlog = data => {
    
    let html = ""
    data.forEach((doc) => {
        const blog = doc.data()
        const when = dateFns.distanceInWordsToNow(blog.vrijeme.toDate(), {addSuffix:true})
        let id = doc.id
        const para = `
             <li class="blog__ul--post" data-id= "${id}"> 
              <h4 class="mx-auto blog__ul--h4"> ${blog.title}</h4>
              <p class="blog__ul--p"> ${blog.body} </p>
              <div class="blog__ul--time"> Posted ${when}</div>
              <button class="btn btn-primary delete-blog d-none" id="delete-blog"> Delete Blog </button>
             </li>
        `

        html += para
    })
    blogsSpace.innerHTML = html
  
}

//Delete blog

blogsSpace.addEventListener("click", e => {
    if(e.target.tagName === "BUTTON") {
        const id = e.target.parentElement.getAttribute("data-id")
        db.collection("blog").doc(id).delete()
    }
})








