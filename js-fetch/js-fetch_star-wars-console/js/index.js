console.clear();

// const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      console.error("Bad response");
    }
  } catch (error) {
    console.error("an error occurred");
  }
}

fetchData(url);

console.log(fetchData);
