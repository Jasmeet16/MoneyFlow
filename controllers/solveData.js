const { PriorityQueue } = require("./PriorityQueue");

const solve = (req, res) => {
  try {
    let nodes = [];
    for (let i = 0; i < req.persons.length; i++) {
      nodes.push({ id: i, label: req.persons[i] });
    }
    let edges = [];
    for (let i = 0; i < req.network.from.length; i++) {
      edges.push({
        from: req.persons.indexOf(req.network.from[i]),
        to: req.persons.indexOf(req.network.to[i]),
        label: req.network.value[i],
      });
    }
    const curr_data = {
      nodes: nodes,
      edges: edges,
    };
    const new_data = solveData(curr_data);

    res.render("network", {
      nodes: nodes,
      edges: edges,
      new_nodes: new_data.nodes,
      new_edges: new_data.edges,
    });
  } catch (error) {
      console.log(error);
  }
};

function solveData(curr_data) {
  let data = curr_data;

  const length = data["nodes"].length;

  const vals = Array(length).fill(0);

  for (let i = 0; i < data["edges"].length; i++) {
    const edge = data["edges"][i];
    vals[edge["to"]] += parseInt(edge["label"]);
    vals[edge["from"]] -= parseInt(edge["label"]);
  }

  // console.log(vals);

  const positivePq = new PriorityQueue();
  const negativePq = new PriorityQueue();

  for (let i = 0; i < length; i++) {
    if (vals[i] > 0) {
      positivePq.add([vals[i], i]);
    } else {
      negativePq.add([-vals[i], i]);
      vals[i] *= -1;
    }
  }

  const new_edges = [];
  while (!positivePq.isEmpty() && !negativePq.isEmpty()) {
    const max = positivePq.remove();
    const min = negativePq.remove();

    console.log(max);
    console.log(min);

    const amt = Math.min(max[0], min[0]);
    const to = max[1];
    const from = min[1];

    new_edges.push({ from: from, to: to, label: String(Math.abs(amt)) });
    vals[to] -= amt;
    vals[from] -= amt;

    if (max[0] > min[0]) {
      positivePq.add([vals[to], to]);
    } else if (max[0] < min[0]) {
      negativePq.add([vals[from], from]);
    }
  }

  data = {
    nodes: data["nodes"],
    edges: new_edges,
  };
  return data;
}

module.exports.solve = solve;
