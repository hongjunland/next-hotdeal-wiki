function convertHeading(row: string): string {
  if (row.startsWith("# ")) {
    return `<h1>${row.slice(2)}</h1>`;
  } else if (row.startsWith("## ")) {
    return `<h2>${row.slice(3)}</h2>`;
  } else if (row.startsWith("### ")) {
    return `<h3>${row.slice(4)}</h3>`;
  } else if (row.startsWith("#### ")) {
    return `<h4>${row.slice(5)}</h4>`;
  } else if (row.startsWith("##### ")) {
    return `<h5>${row.slice(6)}</h5>`;
  }
  return row;
}
function convertUL(row: string): string {
  return `<ul><li>${row.slice(2)}</li></ul>`;
}

export const textToMarkdown = {
  convertHeading,
  convertUL,
};
