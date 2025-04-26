const tableBody = document.querySelector("#covidtable");

fetch("https://api.rootnet.in/covid19-in/stats/latest")
  .then(response => response.json())
  .then(data => {
    const states = data.data.regional;
    states.forEach((state, index) => {
        const totalCases = state.confirmedCasesIndian + state.confirmedCasesForeign;
      const row = `
        <tr>
          <td>${index + 1}</td>
          <td>${state.loc}</td>
          <td>${state.confirmedCasesIndian}</td>
          <td>${state.confirmedCasesForeign}</td>
          <td>${state.discharged}</td>
          <td>${state.deaths}</td>
          <td>${totalCases}</td>
        </tr>
      `;
      tableBody.innerHTML += row;
    });
  });
