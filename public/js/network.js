const container = document.getElementById('graph-container');
const containerSecond = document.getElementById('graph-container-second');


const options = {
  edges: {
    arrows: {
      to: true,
    },
    labelHighlightBold: true,
    font: {
      size: 14,
      color: "#056674",
    },
    color: {
      color:'#056674',
      highlight:'#056674',
      hover: '#d3d2cd',
      inherit: false,
      opacity:1.0
    }
  },
  nodes: {
    font: {
      size: 14,
      color: "#000000",
      face: 'Mulish',
      bold:true
    },
    scaling: {
      label: true,
    },
    shape: "icon",
    icon: {
          face: "'Font Awesome 5 Free'",
          weight: "900", 
          code: "\uf007",
          size: 20,
          color: "#ff4b5c",
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
  edges : new_edges
}

console.log(data);
console.log(new_data);

networkSecond.setData(new_data);
