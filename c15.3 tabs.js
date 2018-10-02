<!doctype html>

<tab-panel>
  <div data-tabname="one">Tab one</div>
  <div data-tabname="two">Tab two</div>
  <div data-tabname="three">Tab three</div>
  <div data-tabname="four">Tab four</div>
</tab-panel>
<script>
  
  function byTagName(node, tagName) {
    let children = [];
    let elements = node.getElementsByTagName(tagName);
    for (i = 0; i < elements.length; i++) children.push(elements[i]);
	return children;
  }

  function asTabs(node) {
    let tabs = byTagName(node, "div");
    for (let i = 1; i < tabs.length; i++) tabs[i].style.display = "none";
    let buttons = document.createElement("div");
    node.insertBefore(buttons, tabs[0]);
    for (let i = 0; i < tabs.length; i++) {
      let name = tabs[i].getAttribute("data-tabname");
      let button = document.createElement("button");
      button.appendChild(document.createTextNode(name));
      
      button.addEventListener("click", (event) => {
      for (let tab of tabs) tab.style.display = "none";
      tabs[i].style.display = "initial";
      let allButtons = Array.from(node.getElementsByTagName("button"));
      for (let butt of allButtons) butt.style.color = "initial";
      button.style.color = "red";
      });
      
      buttons.appendChild(button);
    }
  }
    
  asTabs(document.querySelector("tab-panel"));
</script>