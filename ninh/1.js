const province = [
  { code: "HaNoi" },
  { code: "ThaiBinh" },
  { code: "NamDinh" },
  { code: "BacGiang" },
  { code: "HungYen" },
  { code: "ThanhHoa" },
  { code: "123" },
  { code: "LaoCai" },
];
let listVaiLoz = "";
const interator = province.values();
for (const code of interator) {
  listVaiLoz += code.code + ", ";
}
console.log(listVaiLoz);
