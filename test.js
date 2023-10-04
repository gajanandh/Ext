
window.addEventListener("load", async () => {
	if(window.location.href.includes('dcms')){

  		chrome.storage.local.get("values", ({ values }) => {
    			let word = values[values.length - 1];
    			if (word) {
      				getItem(word);
    			}
	   }
	}
	

  });
  console.clear();
  const getItem = (word) => {
    if (window.location.href === "https://dcms.track.sbi:7016/cms/SearchCustomerInfo.jsp") {
      let a =document.querySelectorAll('td>input')
      a[3].checked =true
      let d = document.getElementById("searchValue");
      let e = document.getElementsByClassName("showbttn");
      d.value = word;
      e[0].click();
    } else {
      let f = document.getElementsByTagName("td");
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

      window.location.href = "https://dcms.track.sbi:7016/cms/SearchCustomerInfo.jsp";
    }
  };
});
chrome.storage.local.get(null, (data) => {
  console.table(data.obj);
});
