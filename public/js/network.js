const container = document.getElementById("graph-container");
const containerSecond = document.getElementById("graph-container-second");

const options = {
  edges: {
    arrows: {
      to: true,
    },
    labelHighlightBold: true,
    font: {
      size: 20,
      color: "#000000",
    },
    color: {
      //color:'#848484',
      highlight: "#848484",
      hover: "#d3d2cd",
      inherit: false,
      opacity: 1.0,
    },
  },
  nodes: {
    font: {
      size: 20,
      color: "#000000",
    },
    scaling: {
      label: true,
    },
    shape: "icon",
    icon: {
      face: "FontAwesome",
      code: "\uf5b8",
      size: 30,
      color: "#000000",
    },
  },
};

let network = new vis.Network(container);
network.setOptions(options);

let networkSecond = new vis.Network(containerSecond);
networkSecond.setOptions(options);

const data = {
  nodes: nodes,
  edges: edges,
};

network.setData(data);

const new_data = {
  nodes: new_nodes,
  edges: new_edges,
};

console.log(data);
console.log(new_data);

networkSecond.setData(new_data);
