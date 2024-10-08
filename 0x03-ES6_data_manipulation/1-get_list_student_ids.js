export default function getListStudentIds(array) {
  let idsArray = [];
  if (array instanceof Array) {
    idsArray = array.map((item) => item.id);
  }

  return idsArray;
}
