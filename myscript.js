window.addEventListener("load", async () => {
  chrome.storage.local.get("values", ({ values }) => {
    let word = values[values.length - 1];
    if (word) {
      getItem(word);
    }
  });
  console.clear();
  const getItem = (word) => {
    if (window.location.href === "https://search.brave.com/") {
      let d = document.getElementById("searchbox");
      let e = document.getElementById("submit-button");
      d.value = word;
      e.click();
    } else {
      let f = document.getElementsByClassName("snippet-title");
      let dd = [];
      for (const l of f) {
        dd.push(l.innerText);
      }
      let arr = [];
      chrome.storage.local.get("obj", ({ obj }) => {
        arr = [...obj, dd];
        chrome.storage.local.set({ obj: arr });
      });
      chrome.storage.local.get("values", ({ values }) => {
        let arr = values;
        arr.pop();
        chrome.storage.local.set({ values: arr });
      });

      window.location.href = "https://search.brave.com/";
    }
  };
});
chrome.storage.local.get(null, (data) => {
  console.table(data.obj);
});
