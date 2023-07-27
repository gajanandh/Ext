window.addEventListener("load", () => {
  let input = document.getElementById("input");
  let sumbit = document.getElementById("submit");
  sumbit.addEventListener("click", () => {
    console.log(input);
    let arr = input.value.split(" ");
    console.log(arr);
    chrome.storage.local.set({ values: arr });
    chrome.storage.local.set({ obj: [] });

    chrome.storage.local.get(null, (data) => {
      console.log(data);
    });
  });
});
