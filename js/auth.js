



//Listen for auth status changes
auth.onAuthStateChanged(user => {
    if(user) {
         //get data
        db.collection("blog").onSnapshot(snapshot => {
        setupBlog(snapshot.docs)
       
        const btnDelete = document.querySelectorAll(".delete-blog")
        btnDelete.forEach(btn => btn.classList.remove("d-none"))
        
   })

    adminBtn.classList.add("d-none")
    logout.classList.remove("d-none")
    blogBtn.classList.remove("d-none")
  
 

    } else {
            //get data
             db.collection("blog").onSnapshot(snapshot => {
             setupBlog(snapshot.docs)
                    
             const btnDelete = document.querySelectorAll(".delete-blog")
              btnDelete.forEach(btn => btn.classList.add("d-none"))
                    
         })

        adminBtn.classList.remove("d-none")
        logout.classList.add("d-none")
        blogBtn.classList.add("d-none")
   
    }
})




const loginForm = document.querySelector("#login-form")
const closeBtn = document.querySelector("#close-btn")
const closeBtn2 = document.querySelector("#close-btn-2")
const adminBtn = document.querySelector("#admin-btn")
const blogBtn = document.querySelector("#blog-btn")


loginForm.addEventListener("submit", e => {
    e.preventDefault()

    //get user info
    const email = loginForm["login-email"].value
    const password = loginForm["login-pass"].value

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        loginForm.reset()
        closeBtn.click()

    })   
})

const logout = document.querySelector("#logout")

logout.addEventListener("click", e => {
    e.preventDefault();
    auth.signOut()
})

//create new blog

const createBlog = document.querySelector("#blog-form")
createBlog.addEventListener("submit", e => {
    e.preventDefault()
    const now = new Date()
   db.collection("blog").add({
        title: createBlog["blog-title"].value,
        body: createBlog.blogText.value,
        vrijeme: firebase.firestore.Timestamp.fromDate(now)
    }).then(() => {
        createBlog.reset()
        closeBtn2.click()
    }) 
})






