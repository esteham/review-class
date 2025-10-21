function fetchUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.2;

      if (success) {
        resolve([
          { id: 1, name: "spider", email: "spider@mail.com" },
          { id: 2, name: "xihad", email: "xihad@mail.com" },
          { id: 3, name: "monkey", email: "monkey@mail.com" },
        ]);
      } else {
        reject("Server Error:Failed to fecth data!");
      }
    }, 2000);
  });
}

function renderUsers(users) {
  const container = document.getElementById("users");
  container.innerHTML = users
    .map(
      (u) => `<div class="user-card">
                <strong>Name: ${u.name}</strong>
                <br/>
                <small>Email:${u.email}</small>
            </div>`
    )
    .join(" ");
}

document.getElementById("loadBtn").addEventListener("click", async () => {
  const container = document.getElementById("users");
  container.innerHTML = "<p>Loadind users ...</p>";

  try {
    const users = await fetchUsers();
    renderUsers(users);
  } catch (err) {
    container.innerHTML = `<p>${err}</p>`;
  }
});
