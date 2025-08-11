function extractNumericValue(cell) {
  // Extract the numeric value from a cell while ignoring special characters
  var text = cell.textContent;
  return parseFloat(text.replace(/[^0-9.-]+/g, ''));
}

function sortTable(n) {
  const table = document.getElementById("searchTable");
  let dir = table.getAttribute("data-sort-dir") || "down";
  const rows = Array.from(table.querySelectorAll('tbody > tr'));

  rows.sort((a, b) => {
    const x = a.cells[n].textContent.toLowerCase();
    const y = b.cells[n].textContent.toLowerCase();

    if (dir === "down") {
      return x.localeCompare(y);
    } else {
      return y.localeCompare(x);
    }
  });

  while (table.querySelector('tbody').children.length > 0) {
    table.querySelector('tbody').removeChild(table.querySelector('tbody').children[0]);
  }

  rows.forEach(row => {
    table.querySelector('tbody').appendChild(row);
  });

  dir = dir === "down" ? "up" : "down";
  table.setAttribute("data-sort-dir", dir);
}


function sortTableCurrencyInt(n) {
  const table = document.getElementById("searchTable");
  let dir = table.getAttribute("data-sort-dir") || "down";
  const tbody = table.querySelector('tbody');
  const rows = Array.from(tbody.querySelectorAll('tr'));

  rows.sort((a, b) => {
    const x = extractNumericValue(a.cells[n]);
    const y = extractNumericValue(b.cells[n]);

    return dir === "down" ? y - x : x - y;
  });

  rows.forEach(row => {
    tbody.removeChild(row);
  });

  rows.forEach(row => {
    tbody.appendChild(row);
  });

  dir = dir === "down" ? "up" : "down";
  table.setAttribute("data-sort-dir", dir);
}


export { sortTable, sortTableCurrencyInt };
