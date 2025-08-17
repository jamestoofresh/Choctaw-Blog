// Grab posts from localStorage
let posts = JSON.parse(localStorage.getItem("posts")) || [];

document.addEventListener("DOMContentLoaded", () => {
  const postForm = document.getElementById("postForm");

  if (postForm) {
    postForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const text = document.getElementById("postText").value;
      const fileInput = document.getElementById("postMedia");
      const file = fileInput.files[0];

      let mediaURL = "";
      if (file) {
        mediaURL = URL.createObjectURL(file);
      }

      const newPost = {
        text,
        media: mediaURL,
        type: file ? file.type.startsWith("video") ? "video" : "image" : "text",
        time: new Date().toLocaleString()
      };

      posts.unshift(newPost);
      localStorage.setItem("posts", JSON.stringify(posts));

      // Redirect back to feed
      window.location.href = "index.html";
    });
  }

  // Render posts if on home page
  const feed = document.getElementById("feed");
  if (feed) {
    feed.innerHTML = "";
    posts.forEach(post => {
      const div = document.createElement("div");
      div.classList.add("post");

      div.innerHTML = `
        <p>${post.text}</p>
        ${post.media ? (post.type === "video" 
          ? `<video controls src="${post.media}" width="100%"></video>` 
          : `<img src="${post.media}" alt="Post Media" width="100%">`) : ""}
        <small>Posted on ${post.time}</small>
      `;

      feed.appendChild(div);
    });
  }
});
