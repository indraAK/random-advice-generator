async function fetchData() {
  try {
    const res = await fetch("https://api.adviceslip.com/advice");

    if (!res.ok) {
      throw Error("Failed to fetch, Please check your internet connection!");
    }

    const data = await res.json();
    updateAdviceCard(data.slip);
  } catch (err) {
    console.log(err.message);
    alert(err.message);
  }
}

function updateAdviceCard({ id, advice }) {
  document.getElementById("adviceId").textContent = `#${id}`;
  document.getElementById("adviceText").textContent = advice;
}

document
  .getElementById("generateAdviceBtn")
  .addEventListener("click", fetchData);
fetchData();
